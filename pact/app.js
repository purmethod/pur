// pure pact: each partner rates the same statements, sends a link, and both see where they fit.
// nothing is stored on a server: the answers travel in the part of the link after #, which browsers never send.
(function () {
  const P = window.PACT;
  const VERSION = 5; // 2: no negations. 3: porn split in two. 4: area "man and woman". 5: "honest with myself"
  const PORN_V2 = 33; // where the single porn statement sat in version 2 links
  // version 3 to 4: "provide" (20) and "lead" (48) move into the new area at 23, followed by the new feminine statement
  const V3_PROVIDE = 20, V3_LEAD = 48, V4_ROLES = 23;
  function fromV3(r) {
    if (r.length <= V3_LEAD) return r;
    const a = r.split("");
    const provide = a[V3_PROVIDE], lead = a[V3_LEAD];
    const rest = a.filter((_, i) => i !== V3_PROVIDE && i !== V3_LEAD);
    rest.splice(V4_ROLES, 0, provide, lead, "0");
    return rest.join("");
  }
  // version 4 to 5: the area at 39-44 asks new questions, so old answers there are cleared,
  // except "chemical drugs" (43); two new statements follow at 45
  const V4_HONEST = 39, V4_DRUGS = 43, V4_HONEST_END = 45;
  function fromV4(r) {
    if (r.length < V4_HONEST_END) return r;
    const a = r.split("");
    for (let i = V4_HONEST; i < V4_HONEST_END; i++) if (i !== V4_DRUGS) a[i] = "0";
    a.splice(V4_HONEST_END, 0, "0", "0");
    return a.join("");
  }
  const ITEMS = P.areas.flatMap((a) => a.items);
  const OWN_MAX = 5, OWN_LEN = 140, NAME_LEN = 30;
  const app = document.getElementById("app");
  const bar = document.getElementById("bar");
  const KEY = "pure-pact-v5";

  // ---------- link encoding ----------
  const b64 = (s) => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const unb64 = (s) => decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
  function pack(me) {
    return b64(JSON.stringify({ v: VERSION, n: me.n, g: me.g, l: me.l, r: me.r.join(""), o: me.o.map((x) => [x.t, x.r]) }));
  }
  function unpack(s) {
    try {
      const d = JSON.parse(unb64(s));
      if (!d || ![2, 3, 4, VERSION].includes(d.v) || typeof d.r !== "string") return null;
      // a version 2 answer to "watching porn while we are together" fits neither new statement: both start empty
      let raw = d.v === 2 && d.r.length > PORN_V2 ? d.r.slice(0, PORN_V2) + "00" + d.r.slice(PORN_V2 + 1) : d.r;
      if (d.v < 4) raw = fromV3(raw);
      if (d.v < 5) raw = fromV4(raw);
      const r = raw.slice(0, ITEMS.length).split("").map((c) => (/[0-4]/.test(c) ? Number(c) : 0));
      while (r.length < ITEMS.length) r.push(0);
      const o = (Array.isArray(d.o) ? d.o : []).slice(0, OWN_MAX)
        .filter((x) => Array.isArray(x) && typeof x[0] === "string")
        .map((x) => ({ t: x[0].slice(0, OWN_LEN), r: [1, 2, 3, 4].includes(x[1]) ? x[1] : 0 }));
      return { n: String(d.n || "").slice(0, NAME_LEN), g: d.g === "f" ? "f" : "m", l: P.langs.includes(d.l) ? d.l : "en", r, o };
    } catch { return null; }
  }
  function readHash() {
    const h = new URLSearchParams(location.hash.slice(1));
    return { a: h.get("a"), b: h.get("b") };
  }
  const base = () => location.origin + location.pathname;

  // ---------- state ----------
  const saved = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } })();
  const blank = () => ({ n: "", g: "", l: "en", r: ITEMS.map(() => 0), o: [] });
  const valid = (m) => {
    if (!m || !Array.isArray(m.r) || m.r.length > ITEMS.length) return false;
    while (m.r.length < ITEMS.length) m.r.push(0);
    return true;
  };
  const st = { lang: saved.lang || null, me: valid(saved.me) ? saved.me : blank(), step: -1, other: null, result: null, broken: false };
  // a received pact is answered in its own draft, never in the sender's: on a shared phone
  // the sender's name and answers would otherwise show up in the form.
  let replyFor = null;
  const persist = () => {
    try {
      const keep = { lang: st.lang, me: replyFor ? saved.me : st.me };
      if (replyFor) { keep.reply = st.me; keep.replyFor = replyFor; }
      else if (saved.replyFor) { keep.reply = saved.reply; keep.replyFor = saved.replyFor; }
      if (!replyFor) saved.me = st.me;
      localStorage.setItem(KEY, JSON.stringify(keep));
    } catch { /* private mode */ }
  };

  const hash = readHash();
  if (hash.a) {
    const a = unpack(hash.a);
    const b = hash.b ? unpack(hash.b) : null;
    if (!a || (hash.b && !b)) st.broken = true;
    else if (b) st.result = { a, b, mine: false };
    else {
      st.other = a;
      replyFor = hash.a;
      st.me = saved.replyFor === hash.a && valid(saved.reply) ? saved.reply : blank();
    }
    if (!st.lang && a) st.lang = a.l;
  }
  if (!st.lang) {
    const want = (navigator.language || "en").slice(0, 2);
    st.lang = P.langs.includes(want) ? want : "en";
  }

  const li = () => P.langs.indexOf(st.lang);
  const T = (key, vars) => {
    let s = P.ui[key][li()];
    for (const [k, v] of Object.entries(vars || {})) s = s.split("{" + k + "}").join(v);
    return s;
  };
  const L = (arr) => arr[li()];
  // a statement is the same for everyone, or {m, f, c}: worded for a man, for a woman, and one shared line to compare
  const say = (it, g) => (Array.isArray(it) ? L(it) : L(g === "f" ? it.f : it.m));
  const shared = (it) => (Array.isArray(it) ? L(it) : L(it.c));

  // ---------- dom ----------
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (k === "class") n.className = v;
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) n.append(k.nodeType ? k : String(k));
    return n;
  }

  function setLang(l) {
    st.lang = l;
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.querySelectorAll(".lb").forEach((b) => b.classList.toggle("on", b.dataset.lang === l));
    persist();
    render();
  }
  document.querySelectorAll(".lb").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  const N = P.areas.length; // steps: -1 intro, 0..N-1 areas, N own points, N+1 done
  function go(step) {
    st.step = step;
    render();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  function render() {
    app.replaceChildren();
    const pct = st.result ? 100 : st.step < 0 ? 0 : Math.round(((st.step + 1) / (N + 2)) * 100);
    bar.style.width = pct + "%";
    if (st.broken) return renderBroken();
    if (st.result) return renderResult(st.result);
    if (st.step < 0) return renderIntro();
    if (st.step < N) return renderArea(st.step);
    if (st.step === N) return renderOwn();
    return renderDone();
  }

  function renderBroken() {
    app.append(el("section", { class: "intro" }, el("p", { class: "tag" }, T("tag")), el("p", { class: "lead" }, T("broken")),
      el("button", { class: "btn", type: "button", onclick: () => { history.replaceState(null, "", base()); st.broken = false; go(-1); } }, T("new_pact"))));
  }

  function renderIntro() {
    const o = st.other;
    const nameIn = el("input", { id: "nm", type: "text", maxlength: NAME_LEN, autocomplete: "given-name", value: st.me.n });
    nameIn.addEventListener("input", () => { st.me.n = nameIn.value.trim().slice(0, NAME_LEN); persist(); check(); });
    const g = (v, label) => el("button", { type: "button", class: "chip", "aria-pressed": String(st.me.g === v), onclick: () => { st.me.g = v; persist(); render(); } }, label);
    const startBtn = el("button", { class: "btn", type: "button", onclick: () => { st.me.l = st.lang; persist(); go(0); } }, T("start"));
    const check = () => { startBtn.disabled = !(st.me.n && st.me.g); };
    check();
    app.append(el("section", { class: "intro" },
      el("p", { class: "tag" }, T("tag")),
      o ? el("h1", {}, T(o.g === "f" ? "got_f" : "got_m", { name: o.n })) : el("h1", {}, T("h1")),
      el("p", { class: "lead" }, o ? T("got_lead") : T("lead")),
      o ? null : el("ol", { class: "how" }, ["step1", "step2", "step3"].map((k, i) => el("li", {}, el("span", { class: "n" }, String(i + 1)), el("span", {}, T(k))))),
      el("div", { class: "form" },
        el("label", { for: "nm" }, T("name")), nameIn,
        el("p", { class: "label" }, T("iam")),
        el("div", { class: "chips" }, g("m", T("man")), g("f", T("woman")))),
      startBtn,
      el("p", { class: "fine" }, T("privacy"))));
  }

  function rateRow(text, value, set) {
    return el("div", { class: "row" },
      el("p", { class: "stmt" }, text),
      el("div", { class: "seg", role: "group", "aria-label": text },
        P.scale.map((s, k) => el("button", { type: "button", class: "s" + (k + 1), "aria-pressed": String(value === k + 1),
          onclick: () => set(value === k + 1 ? 0 : k + 1) }, L(s)))));
  }

  function renderArea(i) {
    const area = P.areas[i];
    const offset = P.areas.slice(0, i).reduce((n, a) => n + a.items.length, 0);
    app.append(el("section", { class: "area" },
      el("p", { class: "tag" }, T("of", { i: i + 1, n: N }) + " · " + T("tag")),
      el("h2", {}, L(area.t)),
      area.note ? el("p", { class: "lead area-note" }, L(area.note)) : null,
      el("p", { class: "fine" }, T("rate_hint")),
      el("div", { class: "rows" }, area.items.map((it, k) => rateRow(say(it, st.me.g), st.me.r[offset + k], (v) => { st.me.r[offset + k] = v; persist(); render(); }))),
      nav(i - 1, i + 1, T("next"))));
  }

  function renderOwn() {
    const input = el("input", { type: "text", maxlength: OWN_LEN, placeholder: T("own_ph") });
    const add = () => {
      const t = input.value.trim().slice(0, OWN_LEN);
      if (!t || st.me.o.length >= OWN_MAX) return;
      st.me.o.push({ t, r: 1 }); persist(); render();
    };
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") add(); });
    app.append(el("section", { class: "area" },
      el("p", { class: "tag" }, T("of", { i: N + 1, n: N + 1 }) + " · " + T("tag")),
      el("h2", {}, T("own")),
      el("p", { class: "fine" }, T("own_hint")),
      el("div", { class: "rows" }, st.me.o.map((x, k) => el("div", { class: "own" },
        rateRow(x.t, x.r, (v) => { st.me.o[k].r = v || x.r; persist(); render(); }),
        el("button", { type: "button", class: "ghost small", onclick: () => { st.me.o.splice(k, 1); persist(); render(); } }, T("remove"))))),
      st.me.o.length < OWN_MAX ? el("div", { class: "addrow" }, input, el("button", { type: "button", class: "ghost", onclick: add }, T("add"))) : null,
      nav(N - 1, N + 1, T("finish"))));
  }

  function nav(prev, next, label) {
    return el("div", { class: "nav" },
      el("button", { type: "button", class: "ghost", onclick: () => go(prev) }, T("back")),
      el("button", { type: "button", class: "btn", onclick: () => finishOr(next) }, label));
  }
  function finishOr(next) {
    if (next <= N) return go(next);
    // the second person goes straight to the comparison
    if (st.other) { st.result = { a: st.other, b: { ...st.me }, mine: true }; history.replaceState(null, "", base() + "#a=" + readHash().a + "&b=" + pack(st.me)); render(); window.scrollTo(0, 0); return; }
    go(N + 1);
  }

  function shareBox(url, msgKey, hintText) {
    const msg = T(msgKey, { url });
    const copyBtn = el("button", { type: "button", class: "ghost", onclick: async () => {
      try { await navigator.clipboard.writeText(url); copyBtn.textContent = T("copied"); } catch { field.select(); }
    } }, T("copy"));
    const field = el("input", { type: "text", readonly: true, value: url, class: "linkfield", onfocus: (e) => e.target.select() });
    const send = () => {
      if (navigator.share) navigator.share({ text: msg }).catch(() => {});
      else window.open("https://wa.me/?text=" + encodeURIComponent(msg), "_blank", "noopener");
    };
    return el("div", { class: "share" }, el("p", { class: "lead" }, hintText), field,
      el("div", { class: "nav" }, copyBtn, el("button", { type: "button", class: "btn", onclick: send }, T("share"))));
  }

  function renderDone() {
    const url = base() + "#a=" + pack(st.me);
    app.append(el("section", { class: "intro" },
      el("p", { class: "tag" }, T("tag")),
      el("h1", {}, T("ready")),
      shareBox(url, "msg_a", T("send_hint")),
      el("button", { type: "button", class: "ghost", onclick: () => go(0) }, T("back")),
      el("p", { class: "fine" }, T("privacy"))));
  }

  // ---------- the comparison ----------
  // 1 need it, 2 want it, 3 don't mind, 4 no-go. a must against a no-go breaks it;
  // two steps apart is worth a talk; the same or one step apart fits.
  function verdict(x, y) {
    if (!x || !y) return null;
    const d = Math.abs(x - y);
    if (d === 3) return "break";
    if (d === 2) return "talk";
    return "fit";
  }

  // how each one feels loved: their need-it answers in the love area, or want-it when there are none
  function lovedBlock(a, b) {
    const area = P.areas.find((x) => x.id === "love");
    if (!area) return null;
    const offset = P.areas.slice(0, P.areas.indexOf(area)).reduce((n, x) => n + x.items.length, 0);
    const pick = (p) => {
      const rated = area.items.map((it, k) => ({ t: L(it), v: p.r[offset + k] }));
      const need = rated.filter((x) => x.v === 1);
      return need.length ? need : rated.filter((x) => x.v === 2);
    };
    const one = (p) => {
      const list = pick(p);
      return el("div", { class: "ownres" }, el("h4", {}, p.n),
        list.length ? el("ul", { class: "cmps" }, list.map((x) => el("li", { class: "cmp" }, el("p", { class: "stmt" }, x.t), el("p", { class: "both" }, el("b", { class: "v" + x.v }, L(P.scale[x.v - 1])))))) : el("p", { class: "fine" }, T("loved_none")));
    };
    return el("div", { class: "loved" }, el("h3", {}, T("loved")), one(a), one(b));
  }

  function renderResult({ a, b, mine }) {
    const rows = { break: [], talk: [], fit: [] };
    ITEMS.forEach((it, k) => { const v = verdict(a.r[k], b.r[k]); if (v) rows[v].push({ t: shared(it), x: a.r[k], y: b.r[k] }); });
    const total = rows.break.length + rows.talk.length + rows.fit.length;
    const pct = total ? Math.round((rows.fit.length / total) * 100) : 0;
    const label = (v) => (v ? L(P.scale[v - 1]) : "—");
    const line = (r) => el("li", { class: "cmp" }, el("p", { class: "stmt" }, r.t),
      el("p", { class: "both" }, el("span", {}, a.n + ": ", el("b", { class: "v" + r.x }, label(r.x))), el("span", {}, b.n + ": ", el("b", { class: "v" + r.y }, label(r.y)))));
    const fitList = el("ul", { class: "cmps", hidden: rows.fit.length > 6 }, rows.fit.map(line));
    const ownBlock = (p) => p.o.length ? el("div", { class: "ownres" }, el("h4", {}, p.n), el("ul", { class: "cmps" }, p.o.map((x) => el("li", { class: "cmp" }, el("p", { class: "stmt" }, x.t), el("p", { class: "both" }, el("b", { class: "v" + x.r }, label(x.r))))))) : null;

    app.append(el("section", { class: "result" },
      el("p", { class: "tag" }, T("tag")),
      el("h1", {}, a.n + " & " + b.n),
      el("p", { class: "score" }, T("fit", { p: pct })),
      el("div", { class: "meter", role: "img", "aria-label": T("fit", { p: pct }) }, el("i", { style: "width:" + pct + "%" })),
      el("h3", { class: "h-break" }, T("breaks") + " · " + rows.break.length),
      rows.break.length ? el("ul", { class: "cmps" }, rows.break.map(line)) : el("p", { class: "fine" }, T("none_break")),
      el("h3", {}, T("talk") + " · " + rows.talk.length),
      el("ul", { class: "cmps" }, rows.talk.map(line)),
      el("h3", {}, T("fits") + " · " + rows.fit.length),
      rows.fit.length > 6 ? el("button", { type: "button", class: "ghost small", onclick: (e) => { fitList.hidden = false; e.target.remove(); } }, T("show")) : null,
      fitList,
      (a.o.length || b.o.length) ? el("h3", {}, T("owns")) : null,
      ownBlock(a), ownBlock(b),
      lovedBlock(a, b),
      mine ? el("div", { class: "back-box" }, el("h3", {}, T("send_back")), shareBox(location.href, "msg_b", T("send_back_hint", { name: a.n }))) : null,
      el("p", { class: "fine" }, T("note")),
      el("button", { type: "button", class: "ghost", onclick: () => { history.replaceState(null, "", base()); st.result = null; st.other = null; replyFor = null; st.me = blank(); persist(); go(-1); } }, T("new_pact"))));
  }

  setLang(st.lang);
})();

// the pure blueprint: asks the questions from questions.js step by step (with voice input),
// sends the answers to /api/analyze and turns the answer into a book: phone view or pdf.
// vanilla, no dependencies. all reader-facing copy lives in questions.js and copy.js.
(function () {
  const Q = window.PUR_Q;
  const C = window.PUR_COPY;
  const app = document.getElementById("app");
  const bar = document.getElementById("bar");

  const T = {
    en: {
      tag: "the pure blueprint", h1a: "your", h1b: "blueprint.",
      lead: "honest answers about your body, your mind, your responsibility and your ego. from them your own 90-day plan is written: for your age, your life, your goal.",
      meta1: "<b>{q} questions</b> in {s} short steps", meta2: "<b>about 15 minutes</b>, speak instead of typing", meta3: "<b>written for you</b>, nothing from a template",
      start: "begin", next: "next", back: "back", step: "step", of: "of", go: "go on",
      closed: "the blueprint opens soon. follow the build on instagram.", closedBtn: "follow paul brinkmann",
      under18: "the pure blueprint is for men aged 18 and over.",
      crisis: "if you are in a crisis, talk to someone today. germany: telefonseelsorge 0800 111 0 111 or 0800 111 0 222, free, day and night. elsewhere: your local crisis line or emergency number.",
      multi: "choose all that apply", optional: "optional",
      reviewTag: "last step", reviewH: "ready.", reviewLead: "the blueprint takes one to three minutes to write.",
      voicePrivacy: "voice input uses your browser's speech recognition (apple or google).",
      generate: "write my blueprint",
      wait: ["reading your answers", "finding the pattern behind them", "choosing your three priorities", "making every first step small", "writing your 90 days"],
      errBusy: "too many blueprints are being written right now. try again in a few minutes.",
      errLimit: "you have written several blueprints in the last hour. try again later.",
      errGeneric: "something went wrong while writing your blueprint. your answers are kept, try again.",
      morning: "morning", day: "day", evening: "evening",
      restart: "start over", sign: "paul brinkmann", date: "{d}",
      disclaimer: "this blueprint is guidance from the pure method, not medical advice. talk to your doctor before you change training, food, cold or breathwork, especially with a health condition or medication.",
    },
    de: {
      tag: "der pure blueprint", h1a: "dein", h1b: "blueprint.",
      lead: "ehrliche antworten über deinen körper, deinen geist, deine verantwortung und dein ego. daraus wird dein eigener 90-tage-plan geschrieben: für dein alter, dein leben, dein ziel.",
      meta1: "<b>{q} fragen</b> in {s} kurzen schritten", meta2: "<b>etwa 15 minuten</b>, sprechen statt tippen", meta3: "<b>für dich geschrieben</b>, nichts aus einer vorlage",
      start: "beginnen", next: "weiter", back: "zurück", step: "schritt", of: "von", go: "weiter",
      closed: "der blueprint öffnet bald. verfolge den aufbau auf instagram.", closedBtn: "paul brinkmann folgen",
      under18: "der pure blueprint ist für männer ab 18 jahren.",
      crisis: "wenn du in einer krise bist, sprich heute mit jemandem. telefonseelsorge 0800 111 0 111 oder 0800 111 0 222, kostenlos, tag und nacht. außerhalb deutschlands: dein örtliches krisentelefon oder der notruf.",
      multi: "alles auswählen, was zutrifft", optional: "optional",
      reviewTag: "letzter schritt", reviewH: "bereit.", reviewLead: "der blueprint braucht ein bis drei minuten.",
      voicePrivacy: "die spracheingabe nutzt die spracherkennung deines browsers (apple oder google).",
      generate: "meinen blueprint schreiben",
      wait: ["deine antworten werden gelesen", "das muster dahinter wird gesucht", "deine drei prioritäten werden gewählt", "jeder erste schritt wird klein gemacht", "deine 90 tage werden geschrieben"],
      errBusy: "gerade werden zu viele blueprints geschrieben. versuch es in ein paar minuten noch einmal.",
      errLimit: "du hast in der letzten stunde schon mehrere blueprints geschrieben. versuch es später noch einmal.",
      errGeneric: "beim schreiben deines blueprints ist etwas schiefgegangen. deine antworten bleiben erhalten, versuch es noch einmal.",
      morning: "morgen", day: "tag", evening: "abend",
      restart: "neu beginnen", sign: "paul brinkmann", date: "{d}",
      disclaimer: "dieser blueprint ist eine orientierung aus der pure methode, keine ärztliche beratung. sprich mit deinem arzt, bevor du training, ernährung, kälte oder atemarbeit änderst, besonders bei erkrankungen oder medikamenten.",
    },
    fr: {
      tag: "le blueprint pure", h1a: "ton", h1b: "blueprint.",
      lead: "des réponses honnêtes sur ton corps, ton esprit, ta responsabilité et ton ego. à partir d'elles, ton propre plan de 90 jours est écrit : pour ton âge, ta vie, ton objectif.",
      meta1: "<b>{q} questions</b> en {s} courtes étapes", meta2: "<b>environ 15 minutes</b>, parler au lieu de taper", meta3: "<b>écrit pour toi</b>, rien d'un modèle",
      start: "commencer", next: "suivant", back: "retour", step: "étape", of: "sur", go: "continuer",
      closed: "le blueprint ouvre bientôt. suis la construction sur instagram.", closedBtn: "suivre paul brinkmann",
      under18: "le blueprint pure est destiné aux hommes de 18 ans et plus.",
      crisis: "si tu es en crise, parle à quelqu'un aujourd'hui : un médecin, une personne de confiance, ou la ligne de crise ou le numéro d'urgence de ton pays. en allemagne : telefonseelsorge 0800 111 0 111.",
      multi: "choisis tout ce qui s'applique", optional: "facultatif",
      reviewTag: "dernière étape", reviewH: "prêt.", reviewLead: "l'écriture du blueprint prend une à trois minutes.",
      voicePrivacy: "la saisie vocale utilise la reconnaissance vocale de ton navigateur (apple ou google).",
      generate: "écrire mon blueprint",
      wait: ["lecture de tes réponses", "recherche du schéma derrière elles", "choix de tes trois priorités", "chaque premier pas devient petit", "écriture de tes 90 jours"],
      errBusy: "trop de blueprints sont en cours d'écriture. réessaie dans quelques minutes.",
      errLimit: "tu as déjà écrit plusieurs blueprints cette heure-ci. réessaie plus tard.",
      errGeneric: "un problème est survenu pendant l'écriture. tes réponses sont conservées, réessaie.",
      morning: "matin", day: "journée", evening: "soir",
      restart: "recommencer", sign: "paul brinkmann", date: "{d}",
      disclaimer: "ce blueprint est une orientation de la méthode pure, pas un avis médical. parle à ton médecin avant de changer ton entraînement, ton alimentation, le froid ou la respiration, surtout en cas de maladie ou de traitement.",
    },
    es: {
      tag: "el blueprint pure", h1a: "tu", h1b: "blueprint.",
      lead: "respuestas honestas sobre tu cuerpo, tu mente, tu responsabilidad y tu ego. con ellas se escribe tu propio plan de 90 días: para tu edad, tu vida, tu objetivo.",
      meta1: "<b>{q} preguntas</b> en {s} pasos cortos", meta2: "<b>unos 15 minutos</b>, hablar en vez de escribir", meta3: "<b>escrito para ti</b>, nada de plantillas",
      start: "empezar", next: "siguiente", back: "atrás", step: "paso", of: "de", go: "seguir",
      closed: "el blueprint abre pronto. sigue la construcción en instagram.", closedBtn: "seguir a paul brinkmann",
      under18: "el blueprint pure es para hombres de 18 años o más.",
      crisis: "si estás en crisis, habla hoy con alguien: un médico, una persona de confianza, o la línea de crisis o el número de emergencias de tu país. en alemania: telefonseelsorge 0800 111 0 111.",
      multi: "elige todo lo que corresponda", optional: "opcional",
      reviewTag: "último paso", reviewH: "listo.", reviewLead: "escribir el blueprint lleva de uno a tres minutos.",
      voicePrivacy: "la entrada de voz usa el reconocimiento de voz de tu navegador (apple o google).",
      generate: "escribir mi blueprint",
      wait: ["leyendo tus respuestas", "buscando el patrón detrás de ellas", "eligiendo tus tres prioridades", "haciendo pequeño cada primer paso", "escribiendo tus 90 días"],
      errBusy: "ahora se están escribiendo demasiados blueprints. inténtalo de nuevo en unos minutos.",
      errLimit: "ya has escrito varios blueprints en la última hora. inténtalo más tarde.",
      errGeneric: "algo salió mal al escribir tu blueprint. tus respuestas se conservan, inténtalo de nuevo.",
      morning: "mañana", day: "día", evening: "noche",
      restart: "empezar de nuevo", sign: "paul brinkmann", date: "{d}",
      disclaimer: "este blueprint es una orientación del método pure, no un consejo médico. habla con tu médico antes de cambiar entrenamiento, alimentación, frío o respiración, sobre todo si tienes una enfermedad o tomas medicación.",
    },
    ar: {
      tag: "مخطط pure", h1a: "مخططك", h1b: "الشخصي.",
      lead: "إجابات صادقة عن جسدك وعقلك ومسؤوليتك وأناك. منها تُكتب خطتك الخاصة لمدة 90 يومًا: لعمرك وحياتك وهدفك.",
      meta1: "<b>{q} سؤالًا</b> في {s} خطوات قصيرة", meta2: "<b>حوالي 15 دقيقة</b>، تحدّث بدل الكتابة", meta3: "<b>مكتوب لك</b>، لا شيء من قالب جاهز",
      start: "ابدأ", next: "التالي", back: "رجوع", step: "الخطوة", of: "من", go: "تابع",
      closed: "المخطط يفتح قريبًا. تابع البناء على إنستغرام.", closedBtn: "تابع paul brinkmann",
      under18: "مخطط pure مخصص للرجال من عمر 18 عامًا فما فوق.",
      crisis: "إذا كنت في أزمة، تحدث مع شخص اليوم: طبيب أو شخص تثق به أو خط الأزمات أو رقم الطوارئ في بلدك.",
      multi: "اختر كل ما ينطبق", optional: "اختياري",
      reviewTag: "الخطوة الأخيرة", reviewH: "جاهز.", reviewLead: "تستغرق كتابة المخطط من دقيقة إلى ثلاث دقائق.",
      voicePrivacy: "الإدخال الصوتي يستخدم خاصية التعرف على الكلام في متصفحك (apple أو google).",
      generate: "اكتب مخططي",
      wait: ["قراءة إجاباتك", "البحث عن النمط خلفها", "اختيار أولوياتك الثلاث", "جعل كل خطوة أولى صغيرة", "كتابة أيامك التسعين"],
      errBusy: "يتم الآن كتابة عدد كبير من المخططات. حاول مرة أخرى بعد بضع دقائق.",
      errLimit: "لقد كتبت عدة مخططات في الساعة الأخيرة. حاول لاحقًا.",
      errGeneric: "حدث خطأ أثناء كتابة مخططك. إجاباتك محفوظة، حاول مرة أخرى.",
      morning: "الصباح", day: "النهار", evening: "المساء",
      restart: "ابدأ من جديد", sign: "paul brinkmann", date: "{d}",
      disclaimer: "هذا المخطط إرشاد من طريقة pure وليس نصيحة طبية. تحدث مع طبيبك قبل تغيير التدريب أو الطعام أو البرد أو تمارين التنفس، خاصة إذا كان لديك مرض أو تتناول أدوية.",
    },
    ru: {
      tag: "blueprint pure", h1a: "твой", h1b: "blueprint.",
      lead: "честные ответы о твоём теле, уме, ответственности и эго. по ним пишется твой собственный план на 90 дней: под твой возраст, твою жизнь, твою цель.",
      meta1: "<b>{q} вопросов</b> в {s} коротких шагах", meta2: "<b>около 15 минут</b>, говори вместо того, чтобы печатать", meta3: "<b>написано для тебя</b>, ничего по шаблону",
      start: "начать", next: "дальше", back: "назад", step: "шаг", of: "из", go: "дальше",
      closed: "blueprint скоро откроется. следи за созданием в instagram.", closedBtn: "подписаться на paul brinkmann",
      under18: "blueprint pure предназначен для мужчин от 18 лет.",
      crisis: "если ты в кризисе, поговори с кем-нибудь сегодня: с врачом, с близким человеком или позвони на линию помощи или в экстренную службу своей страны.",
      multi: "выбери всё, что подходит", optional: "необязательно",
      reviewTag: "последний шаг", reviewH: "готово.", reviewLead: "написание blueprint занимает от одной до трёх минут.",
      voicePrivacy: "голосовой ввод использует распознавание речи твоего браузера (apple или google).",
      generate: "написать мой blueprint",
      wait: ["читаю твои ответы", "ищу закономерность за ними", "выбираю три твоих приоритета", "делаю каждый первый шаг маленьким", "пишу твои 90 дней"],
      errBusy: "сейчас пишется слишком много blueprint. попробуй через несколько минут.",
      errLimit: "за последний час ты уже написал несколько blueprint. попробуй позже.",
      errGeneric: "при написании blueprint что-то пошло не так. твои ответы сохранены, попробуй ещё раз.",
      morning: "утро", day: "день", evening: "вечер",
      restart: "начать заново", sign: "paul brinkmann", date: "{d}",
      disclaimer: "этот blueprint — ориентир метода pure, а не медицинская консультация. поговори с врачом, прежде чем менять тренировки, питание, холод или дыхание, особенно при заболеваниях или приёме лекарств.",
    },
  };

  const KEY = "pure-blueprint-v2";
  const store = {
    load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } },
    save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode: nothing kept */ } },
    clear() { try { localStorage.removeItem(KEY); } catch { /* ignore */ } },
  };

  const N = Q.sections.length;
  // steps: -1 intro, 0..N-1 sections, N review, N+1 writing, N+2 book; "between" shows the motivation card after step n
  const saved = store.load();
  const st = {
    lang: saved.lang || pickLang(),
    step: saved.step ?? -1,
    answers: saved.answers || {},
    blueprint: saved.blueprint || null,
    scores: saved.scores || null,
    created: saved.created || null,
    open: null,
    error: "",
    softMissing: false,
    between: null,
    view: "phone",
    chapters: null,
  };

  function pickLang() {
    const want = (navigator.language || "en").slice(0, 2);
    return T[want] ? want : "en";
  }
  const t = () => T[st.lang];
  const L = (obj) => (obj ? obj[st.lang] || obj.en : "");
  const B = (key, vars) => fill(L(C.book[key]), vars);
  const fill = (s, vars) => String(s || "").replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] != null ? vars[k] : m));
  const persist = () => store.save({ lang: st.lang, step: st.step === N + 1 && !st.blueprint ? N : st.step, answers: st.answers, blueprint: st.blueprint, scores: st.scores, created: st.created });

  // native append turns null into the text "null", so empty slots are dropped first
  const add = (parent, ...kids) => parent.append(...kids.flat().filter((k) => k != null && k !== false));
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v; // only our own strings, never answers or model output
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) n.append(k.nodeType ? k : document.createTextNode(String(k)));
    return n;
  }
  const SVG = "http://www.w3.org/2000/svg";
  function svg(tag, attrs, ...kids) {
    const n = document.createElementNS(SVG, tag);
    for (const [k, v] of Object.entries(attrs || {})) n.setAttribute(k, v);
    for (const k of kids.flat()) if (k != null) n.append(k.nodeType ? k : document.createTextNode(String(k)));
    return n;
  }

  function setLang(l) {
    st.lang = l;
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.querySelectorAll(".lb").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    if (st.step === N + 2) st.chapters = null;
    persist();
    render();
  }
  document.querySelectorAll(".lb").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  function go(step) {
    stopVoice();
    st.step = step;
    st.softMissing = false;
    st.between = null;
    st.error = "";
    persist();
    render();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  const visibleItems = (sid) => Q.items.filter((it) => it.section === sid && Q.visible(it, st.answers));
  const isAnswered = (it) => {
    const v = st.answers[it.id];
    if (it.type === "multi") return Array.isArray(v) && v.length > 0;
    if (it.type === "number") return Number.isInteger(v) && v >= it.min && v <= it.max;
    if (it.type === "text" || it.type === "textarea" || it.type === "voice") return typeof v === "string" && v.trim().length > 0;
    return v !== undefined;
  };
  const unanswered = (sid) => visibleItems(sid).filter((it) => !it.optional && !isAnswered(it));

  function render() {
    const s = st.step;
    document.body.dataset.view = s === N + 2 ? st.view : "";
    bar.style.width = s < 0 ? "0" : Math.min(100, Math.round(((s + 1) / (N + 1)) * 100)) + "%";
    app.replaceChildren();
    if (st.between != null) return renderBetween(st.between);
    if (s < 0) return renderIntro();
    if (s < N) return renderSection(Q.sections[s], s);
    if (s === N) return renderReview();
    if (s === N + 1) return renderLoading();
    return renderBook();
  }

  // ---------- intro ----------

  function renderIntro() {
    const x = t();
    const qCount = Q.items.length;
    add(app,
      el("p", { class: "tag" }, x.tag),
      el("h1", {}, x.h1a + " ", el("em", {}, x.h1b)),
      el("p", { class: "lead" }, x.lead),
      el("p", { class: "test-line" }, L(C.intro_test)),
      el("div", { class: "meta" },
        el("span", { html: fill(x.meta1, { q: qCount, s: N }) }), el("span", { html: x.meta2 }), el("span", { html: x.meta3 })),
    );
    const actions = el("div", { class: "actions" });
    if (st.open === false) {
      add(actions, el("p", { class: "lead" }, x.closed), el("a", { class: "btn", href: "https://www.instagram.com/buildpaul/", target: "_blank", rel: "noopener noreferrer" }, x.closedBtn));
    } else {
      add(actions, el("span"), el("button", { class: "btn", type: "button", onclick: () => go(0), disabled: st.open === null }, x.start));
    }
    add(app, actions, renderBuilding());
  }

  function renderBuilding() {
    const b = C.building;
    const W = 600, H = 400;
    const g = svg("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": L(b.roof) + " · P U R E" });
    // roof
    g.append(svg("polygon", { points: `30,118 300,22 570,118`, class: "b-fill" }));
    g.append(svg("text", { x: 300, y: 98, "text-anchor": "middle", class: "b-roof" }, L(b.roof)));
    g.append(svg("rect", { x: 40, y: 118, width: 520, height: 18, class: "b-col" }));
    // four pillars
    b.pillars.forEach((p, i) => {
      const x = 62 + i * 130;
      g.append(svg("rect", { x: x - 6, y: 136, width: 88, height: 10, class: "b-col" }));
      g.append(svg("rect", { x, y: 146, width: 76, height: 176, class: "b-col" }));
      for (const f of [19, 38, 57]) g.append(svg("line", { x1: x + f, y1: 152, x2: x + f, y2: 316, class: "b-flute" }));
      g.append(svg("rect", { x: x - 6, y: 322, width: 88, height: 10, class: "b-col" }));
      g.append(svg("rect", { x: x + 14, y: 210, width: 48, height: 50, fill: "#fff" }));
      g.append(svg("text", { x: x + 38, y: 252, "text-anchor": "middle", class: "b-letter" }, p.letter));
    });
    // foundation steps
    g.append(svg("rect", { x: 30, y: 332, width: 540, height: 16, class: "b-col" }));
    g.append(svg("rect", { x: 14, y: 348, width: 572, height: 16, class: "b-col" }));
    g.append(svg("text", { x: 300, y: 390, "text-anchor": "middle", class: "b-small" }, "P · U · R · E"));
    const cards = b.pillars.map((p) =>
      el("div", { class: "point-card" },
        el("p", { class: "pl", "aria-hidden": "true" }, p.letter),
        el("p", { class: "pn" }, L(p.name)),
        el("ol", {}, p.points.map((pt) => { const v = L(pt); return el("li", { class: v === "—" ? "open" : null }, v); }))));
    return el("figure", { class: "building" },
      el("p", { class: "tag" }, L(b.title)),
      g,
      el("figcaption", {}, L(b.caption)),
      el("div", { class: "points" }, cards));
  }

  // ---------- questionnaire ----------

  const LETTER = { p: "P", u: "U", r: "R", e: "E" };

  function renderSection(sec, idx) {
    const x = t();
    const letter = LETTER[sec.id] || "";
    add(app,
      el("div", { class: "step-head" },
        letter ? el("span", { class: "step-letter", "aria-hidden": "true" }, letter) : null,
        el("p", { class: "tag" }, `${x.step} ${idx + 1} ${x.of} ${N}`),
        el("h2", {}, L(sec.title)),
        el("p", { class: "lead" }, L(sec.intro)),
      ),
    );
    for (const it of visibleItems(sec.id)) add(app, renderItem(it));

    const open = unanswered(sec.id);
    const blocking = open.filter((it) => it.required);
    const softBox = st.softMissing && open.length
      ? el("div", { class: "soft", role: "status" },
          el("p", {}, blocking.length ? L(C.missing.required_note) : L(C.missing.note)),
          el("div", { class: "soft-actions" },
            el("button", { class: "ghost strong", type: "button", onclick: () => { const q = document.getElementById("q-" + open[0].id); if (q) q.scrollIntoView({ block: "center" }); } }, L(C.missing.answer)),
            blocking.length ? null : el("button", { class: "ghost", type: "button", onclick: () => finishStep(idx) }, L(C.missing.continue))))
      : null;
    add(app, softBox,
      el("div", { class: "actions" },
        el("button", { class: "ghost", type: "button", onclick: () => go(idx - 1) }, x.back),
        el("button", { class: "btn", type: "button", onclick: () => {
          if (unanswered(sec.id).length) { st.softMissing = true; render(); const box = app.querySelector(".soft"); if (box) box.scrollIntoView({ block: "center" }); return; }
          finishStep(idx);
        } }, x.next)));
  }

  // a short card between the steps: you are on the right path, don't quit
  function finishStep(idx) {
    stopVoice();
    const card = C.interstitials.find((i) => i.after_step === idx + 1);
    if (!card || idx + 1 >= N) return go(idx + 1);
    st.between = idx;
    st.softMissing = false;
    render();
    window.scrollTo(0, 0);
  }

  let betweenTimer;
  function renderBetween(idx) {
    const card = C.interstitials.find((i) => i.after_step === idx + 1);
    const x = t();
    const next = () => { clearTimeout(betweenTimer); go(idx + 1); };
    add(app, el("div", { class: "between", role: "status" },
      el("p", { class: "tag" }, `${x.step} ${idx + 1} ${x.of} ${N}`),
      el("div", { class: "between-mark", "aria-hidden": "true" }, "✓"),
      el("h2", {}, L(card.head)),
      el("p", { class: "lead" }, L(card.line)),
      el("div", { class: "between-bar", "aria-hidden": "true" }, el("i")),
      el("button", { class: "btn", type: "button", onclick: next }, x.go)));
    clearTimeout(betweenTimer);
    betweenTimer = setTimeout(next, 4500);
  }

  function renderItem(it) {
    const x = t();
    const id = "q-" + it.id;
    const wrap = el("div", { class: "q" + (st.softMissing && !isAnswered(it) ? " open" : ""), id });
    const code = it.module && it.module !== "syn" && !it.module.startsWith("meta") ? el("span", { class: "q-code" }, it.module.toUpperCase()) : null;
    if (it.optional) add(wrap, el("p", { class: "tag" }, x.optional));
    add(wrap, el("p", { class: "q-text" + (it.type === "voice" ? " voice-q" : ""), id: id + "-l" }, code, L(it.q)));
    const set = (v) => { st.answers[it.id] = v; persist(); wrap.classList.remove("open"); };

    if (it.type === "voice") return renderVoice(it, wrap, set);

    if (it.type === "text" || it.type === "number") {
      const input = el("input", { id: id + "-i", type: it.type === "number" ? "number" : "text", inputmode: it.type === "number" ? "numeric" : null, min: it.min, max: it.type === "number" ? it.max : null, maxlength: it.type === "text" ? it.max : null, autocomplete: it.id === "name" ? "given-name" : "off", "aria-labelledby": id + "-l" });
      input.value = st.answers[it.id] ?? "";
      const note = el("div");
      const showNote = () => {
        note.replaceChildren();
        if (it.id === "age" && input.value && Number(input.value) < 18) note.append(el("p", { class: "note" }, x.under18));
      };
      input.addEventListener("input", () => {
        if (it.type === "number") {
          const n = parseInt(input.value, 10);
          if (Number.isInteger(n)) set(n); else { delete st.answers[it.id]; persist(); }
          showNote();
        } else set(input.value);
      });
      // age changes which questions are asked later, so recompute when the field is left
      if (it.id === "age") input.addEventListener("change", () => { const y = window.scrollY; render(); window.scrollTo(0, y); });
      add(wrap, input, note);
      showNote();
      return wrap;
    }

    const options = it.type === "scale" ? Q.scale : it.options;
    const group = el("div", { class: "opts" + (it.type === "scale" ? " scale" : ""), role: it.type === "multi" ? "group" : "radiogroup", "aria-labelledby": id + "-l" });
    if (it.type === "multi") add(wrap, el("p", { class: "hint" }, x.multi));
    for (const o of options) {
      const cur = st.answers[it.id];
      const on = it.type === "multi" ? Array.isArray(cur) && cur.includes(o.v) : cur === o.v;
      const b = el("button", { class: "opt", type: "button", role: it.type === "multi" ? "checkbox" : "radio", "aria-checked": String(on) }, L(o.l));
      b.addEventListener("click", () => {
        if (it.type === "multi") {
          let list = Array.isArray(st.answers[it.id]) ? [...st.answers[it.id]] : [];
          if (list.includes(o.v)) list = list.filter((v) => v !== o.v);
          else list = o.v === it.exclusive ? [o.v] : [...list.filter((v) => v !== it.exclusive), o.v];
          set(list);
        } else set(o.v);
        // answers that change later questions or show a note need a redraw; the rest only update the buttons
        if (["relationship", "inner"].includes(it.id) || it.type === "multi") { const y = window.scrollY; render(); window.scrollTo(0, y); }
        else group.querySelectorAll(".opt").forEach((btn, i) => btn.setAttribute("aria-checked", String(options[i].v === o.v)));
      });
      group.append(b);
    }
    add(wrap, group);
    if (it.id === "inner" && st.answers.inner === "crisis") add(wrap, el("p", { class: "note", role: "note" }, x.crisis));
    return wrap;
  }

  // ---------- voice input: speak instead of typing, typing stays as a fallback ----------

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const LOCALE = { en: "en-US", de: "de-DE", fr: "fr-FR", es: "es-ES", ar: "ar-SA", ru: "ru-RU" };
  let active = null; // { rec, stop }

  function stopVoice() {
    if (active) { const a = active; active = null; a.stop(); }
  }

  function renderVoice(it, wrap, set) {
    const V = C.voice;
    const isGoal = it.id === "goal";
    const id = "q-" + it.id;
    const hint = el("p", { class: "hint" }, L(isGoal ? V.goal_hint : V.story_hint));
    const area = el("textarea", { id: id + "-i", maxlength: it.max, "aria-labelledby": id + "-l", class: "voice-text" });
    area.value = st.answers[it.id] || "";
    const live = el("p", { class: "voice-live", "aria-live": "polite" });
    const status = el("p", { class: "voice-status" });
    const showArea = () => { area.hidden = false; typeBtn.hidden = true; };
    area.hidden = !area.value && Boolean(Recognition);
    area.addEventListener("input", () => set(area.value));

    const mic = el("button", { class: "mic", type: "button", "aria-pressed": "false" },
      el("span", { class: "mic-dot", "aria-hidden": "true" }), el("span", { class: "mic-label" }, L(area.value ? V.again : V.start)));
    const typeBtn = el("button", { class: "ghost", type: "button", onclick: () => { showArea(); area.focus(); } }, L(V.type_instead));
    typeBtn.hidden = !area.hidden;

    if (!Recognition) {
      add(wrap, hint, el("p", { class: "note soft-note" }, L(V.unsupported)), area);
      area.hidden = false;
      return wrap;
    }

    mic.addEventListener("click", () => {
      if (active && active.item === it.id) return stopVoice();
      stopVoice();
      const rec = new Recognition();
      rec.lang = LOCALE[st.lang] || "en-US";
      rec.continuous = true;
      rec.interimResults = true;
      let base = area.value ? area.value.replace(/\s+$/, "") + " " : "";
      let keep = true;
      rec.onresult = (e) => {
        let interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) { base += r[0].transcript.trim() + " "; } else interim += r[0].transcript;
        }
        const text = (base + interim).slice(0, it.max);
        area.value = base.slice(0, it.max).trim();
        live.textContent = text.trim();
        set(area.value);
      };
      rec.onerror = (e) => {
        if (e.error === "not-allowed" || e.error === "service-not-allowed") { keep = false; status.textContent = L(V.denied); showArea(); }
      };
      // browsers end a session after a pause; keep listening until he presses stop
      rec.onend = () => { if (keep && active && active.rec === rec) { try { rec.start(); } catch { finish(); } } else finish(); };
      const finish = () => {
        mic.setAttribute("aria-pressed", "false");
        mic.classList.remove("on");
        mic.querySelector(".mic-label").textContent = L(area.value ? V.again : V.start);
        status.textContent = "";
        if (area.value) { area.hidden = false; typeBtn.hidden = true; }
        live.textContent = "";
      };
      active = { rec, item: it.id, stop: () => { keep = false; try { rec.stop(); } catch { /* already stopped */ } finish(); } };
      try { rec.start(); } catch { active = null; return; }
      mic.setAttribute("aria-pressed", "true");
      mic.classList.add("on");
      mic.querySelector(".mic-label").textContent = L(V.stop);
      status.textContent = L(V.listening);
    });

    add(wrap, hint, el("div", { class: "voice" }, mic, typeBtn), status, live, area);
    return wrap;
  }

  // ---------- review and writing ----------

  function renderReview() {
    const x = t();
    const K = C.consent;
    const box = el("input", { type: "checkbox", id: "consent" });
    const btn = el("button", { class: "btn", type: "button", disabled: true, onclick: submit }, x.generate);
    box.addEventListener("change", () => (btn.disabled = !box.checked));
    add(app,
      el("p", { class: "tag" }, x.reviewTag),
      el("h2", {}, x.reviewH),
      el("p", { class: "lead" }, x.reviewLead),
      st.answers.inner === "crisis" ? el("p", { class: "note" }, x.crisis) : null,
      el("label", { class: "consent", for: "consent" }, box, el("span", { class: "consent-main" }, L(K.checkbox))),
      el("div", { class: "fine" },
        el("p", {}, L(K.stores_nothing)),
        el("p", {}, L(K.small_print) + " " + x.voicePrivacy),
        el("p", {}, L(K.orientation))),
      st.error ? el("p", { class: "err", role: "alert" }, st.error) : null,
      el("div", { class: "actions" }, el("button", { class: "ghost", type: "button", onclick: () => go(N - 1) }, x.back), btn),
    );
  }

  let waitTimer;
  function renderLoading() {
    const x = t();
    const line = el("p", { "aria-live": "polite" }, x.wait[0]);
    add(app, el("div", { class: "loading" }, el("p", { class: "tag" }, x.tag), el("div", { class: "line", "aria-hidden": "true" }), line));
    let i = 0;
    clearInterval(waitTimer);
    waitTimer = setInterval(() => { i = Math.min(i + 1, x.wait.length - 1); line.textContent = x.wait[i]; }, 16000);
  }

  async function submit() {
    // the same rules the server applies
    const check = Q.validate(st.answers);
    if (!check.ok) {
      const first = Q.sections.findIndex((s) => check.errors.some((id) => Q.byId[id].section === s.id));
      st.step = Math.max(0, first); st.softMissing = true; persist(); render(); return;
    }
    go(N + 1);
    try {
      const r = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lang: st.lang, consent: true, answers: check.answers }) });
      const data = await r.json().catch(() => ({}));
      clearInterval(waitTimer);
      if (r.ok && data.blueprint) {
        st.blueprint = data.blueprint;
        st.scores = data.scores || Q.score(check.answers);
        st.created = new Date().toISOString().slice(0, 10);
        go(N + 2);
        return;
      }
      const x = t();
      st.error = r.status === 429 ? x.errLimit : data.error === "busy" ? x.errBusy : data.error === "coming_soon" ? x.closed : x.errGeneric;
    } catch {
      st.error = t().errGeneric;
    }
    clearInterval(waitTimer);
    st.step = N; persist(); render();
  }

  // ---------- the book ----------

  const PILLARS = [
    { letter: "P", mods: ["p0", "p1", "p2", "p3", "p4", "p5"] },
    { letter: "U", mods: ["u0", "u1", "u2", "u3", "u4", "u5"] },
    { letter: "R", mods: ["r0", "r1", "r2", "r3", "r4", "r5"] },
    { letter: "E", mods: ["e1", "e2", "ef", "e5"] },
  ];
  const levelName = (code) => {
    if (Q.blocks[code]) return L(Q.blocks[code]);
    const e = C.building.pillars.find((p) => p.letter === "E");
    if (code === "e1") return L(e.points[0]);
    if (code === "e2") return L(e.points[1]);
    if (code === "e5") return L(e.points[4]);
    if (code === "ef") return "fuck around · find out";
    return code;
  };
  const pillarName = (letter) => L(C.building.pillars.find((p) => p.letter === letter).name);
  const paras = (text) => String(text || "").split(/\n+/).filter(Boolean).map((p) => el("p", {}, p));
  const list = (items, cls) => el("ul", { class: cls || "clean" }, (items || []).map((i) => el("li", {}, i)));

  async function loadChapters() {
    if (st.chapters) return st.chapters;
    try {
      const r = await fetch(`/blueprint/book/${st.lang}.json`);
      st.chapters = r.ok ? await r.json() : [];
    } catch { st.chapters = []; }
    return st.chapters;
  }
  // each of paul's notes appears once in the book, at its first matching place
  let usedPaul = new Set();
  const paulNote = (level) => {
    if (!st.chapters) return el("div", { "data-paul": level, hidden: true });
    const notes = st.chapters.find((c) => c.id === "notes");
    const sec = notes && notes.sections.find((s) => s.level === level);
    if (!sec || usedPaul.has(level)) return null;
    usedPaul.add(level);
    return el("aside", { class: "paul" },
      el("p", { class: "paul-tag" }, B("from_pauls_life")),
      sec.blocks.map((b) => (b.items && b.items.length ? list(b.items) : el("p", {}, b.text))));
  };

  function renderBook() {
    const x = t();
    const b = st.blueprint || {};
    const name = st.answers.name || "";
    const scores = st.scores || Q.score(st.answers);
    const book = el("article", { class: "book" });
    usedPaul = new Set();
    add(app, el("div", { class: "book-tools no-print" },
      el("div", { class: "seg", role: "group", "aria-label": B("view_phone") + " / " + B("view_pdf") },
        el("button", { type: "button", "aria-pressed": String(st.view === "phone"), onclick: () => { st.view = "phone"; render(); } }, B("view_phone")),
        el("button", { type: "button", "aria-pressed": String(st.view === "pdf"), onclick: () => { st.view = "pdf"; render(); } }, B("view_pdf"))),
      el("button", { class: "btn", type: "button", onclick: savePdf }, B("save_pdf"))), book);

    // cover
    add(book, el("section", { class: "cover part" },
      el("p", { class: "tag" }, "P · U · R · E\u00a0\u00a0 M E T H O D"),
      el("h1", {}, name ? name + "." : x.h1a + " " + x.h1b),
      el("p", { class: "cover-line" }, B("cover_line")),
      el("p", { class: "cover-meta" }, (st.created || "") + " · " + B("made_for", { name: name || "" }).trim()),
      el("p", { class: "cover-sign" }, "paul brinkmann · " + L(C.ui.founder))));

    // opening and the three sources
    add(book, el("section", { class: "part" },
      el("p", { class: "opening" }, B("opening", { name: name || "" }).replace(/^,\s*/, "")),
      ...paras(b.intro),
      sourcesGraphic(),
      el("p", { class: "tag", style: "margin-top:34px" }, B("map_title")),
      mapGraphic(scores)));

    // contents
    const pillarsIn = PILLARS.filter((P) => (b.pillars || []).some((p) => p.pillar === P.letter));
    const toc = [["pt-prio", B("priorities")], ["pt-ladder", B("ladder_title")],
      ...pillarsIn.map((P) => ["pt-" + P.letter, P.letter + " · " + pillarName(P.letter)]),
      ["pt-90", B("timeline")], ["pt-day", B("daily")], ["pt-method", B("method_part")]];
    add(book, el("nav", { class: "part", "aria-label": B("toc") },
      el("p", { class: "tag" }, B("toc")),
      el("ol", { class: "toc" }, toc.map(([id, label]) => el("li", {}, el("a", { href: "#" + id }, label))))));

    // insight
    if (b.insight) add(book, el("section", { class: "part" }, paras(b.insight).map((n) => { n.className = "insight"; return n; })));

    // three priorities
    add(book, el("section", { class: "part", id: "pt-prio" },
      el("p", { class: "tag" }, B("priorities")),
      el("div", { class: "prio" }, (b.priorities || []).map((p, i) => el("div", { class: "prio-card" },
        el("span", { class: "prio-n" }, String(i + 1)),
        el("span", { class: "code" }, String(p.level || "").toUpperCase() + " · " + levelName(p.level)),
        el("h3", {}, p.title),
        el("p", {}, p.why),
        el("div", { class: "start" }, el("p", { class: "start-tag" }, B("start_small")), el("p", { class: "start-text" }, p.start)),
        growthGraphic(p.growth),
        paulNote(p.level)))),
      paulNote("core"),
      el("p", { class: "never" }, B("never_too_late"))));

    // the ladder
    add(book, el("section", { class: "part", id: "pt-ladder" },
      el("p", { class: "tag" }, B("ladder_title")),
      ladderGraphic(),
      el("p", { class: "ladder-why" }, B("ladder_why")),
      b.ladder ? el("p", {}, b.ladder.exercise) : null,
      b.ladder && b.ladder.note ? el("p", { class: "hint" }, b.ladder.note) : null,
      paulNote("p2")));

    // one chapter per pillar
    for (const P of PILLARS) {
      const mine = (b.pillars || []).find((p) => p.pillar === P.letter);
      if (!mine) continue;
      add(book, el("section", { class: "part pillar-part", id: "pt-" + P.letter },
        el("div", { class: "pillar-head" }, el("span", { class: "pillar-big", "aria-hidden": "true" }, P.letter),
          el("div", {}, el("p", { class: "tag" }, B("your_pillar")), el("h2", {}, pillarName(P.letter)))),
        ...paras(mine.intro),
        el("ol", { class: "levels" }, (mine.levels || []).map((lv) => el("li", { class: "level" },
          el("div", { class: "level-head" },
            el("span", { class: "code" }, String(lv.level || "").toUpperCase()),
            el("span", { class: "level-name" }, levelName(lv.level)),
            meter(scores[lv.level])),
          el("p", { class: "start-text" }, lv.start),
          lv.next ? el("p", { class: "next" }, "→ " + lv.next) : null,
          paulNote(lv.level),
          chapterSlot(lv.level))))));
    }
    if (b.ego && !(b.pillars || []).some((p) => p.pillar === "E")) add(book, el("section", { class: "part" }, el("h2", {}, L(C.ui.ego_section)), ...paras(b.ego)));

    // 90 days, the day, the rules
    add(book, el("section", { class: "part", id: "pt-90" },
      el("p", { class: "tag" }, B("timeline")),
      timelineGraphic(b.phases || []),
      el("div", { class: "phases" }, (b.phases || []).map((p) => el("div", { class: "phase" }, el("h4", {}, p.days), el("p", { class: "focus" }, p.focus), list(p.actions))))));
    add(book, el("section", { class: "part", id: "pt-day" },
      el("p", { class: "tag" }, B("daily")),
      el("div", { class: "day" },
        ["morning", "day", "evening"].map((k) => el("div", {}, el("h4", {}, x[k]), list(b.daily && b.daily[k])))),
      el("ol", { class: "nn" }, (b.non_negotiables || []).map((n) => el("li", {}, n))),
      b.safety ? el("p", { class: "note" }, b.safety) : null));

    // closing
    add(book, el("section", { class: "part closing-part" },
      el("p", { class: "closing" }, b.message),
      el("p", { class: "sign" }, x.sign),
      el("p", { class: "hint" }, x.disclaimer)));

    // the method itself, most important chapters first
    const method = el("section", { class: "part method", id: "pt-method" }, el("p", { class: "tag" }, B("method_part")), el("p", { class: "hint" }, B("method_hint")));
    add(book, method);
    loadChapters().then((chs) => {
      if (st.step !== N + 2) return;
      const order = (c) => (c.id === "pure" ? 1000 : Math.max(0, ...c.levels.map((l) => scores[l] || 0)));
      const sorted = chs.filter((c) => c.id !== "notes").sort((a, z) => order(z) - order(a));
      add(method, sorted.map((c) => chapterEl(c, st.view === "pdf")));
      // links to chapters and paul boxes now that chapters are here
      document.querySelectorAll(".chapter-slot").forEach((slot) => fillSlot(slot));
      document.querySelectorAll("[data-paul]").forEach((n) => { const box = paulNote(n.dataset.paul); if (box) n.replaceWith(box); else n.remove(); });
    });

    add(app, el("div", { class: "actions no-print" },
      el("button", { class: "ghost", type: "button", onclick: () => { store.clear(); st.answers = {}; st.blueprint = null; st.scores = null; go(-1); } }, x.restart),
      el("button", { class: "btn", type: "button", onclick: savePdf }, B("save_pdf"))));
  }

  function chapterSlot(level) {
    return el("div", { class: "chapter-slot", "data-level": level });
  }
  function fillSlot(slot) {
    const level = slot.dataset.level;
    const ch = (st.chapters || []).find((c) => c.id === level);
    if (!ch) return;
    slot.replaceChildren(el("a", { class: "to-chapter", href: "#ch-" + ch.id, onclick: () => { const d = document.getElementById("ch-" + ch.id); if (d) d.open = true; } },
      B("chapter_open") + " · " + ch.title + " →"));
  }
  function chapterEl(c, open) {
    return el("details", { class: "chapter", id: "ch-" + c.id, open },
      el("summary", {}, el("span", { class: "chapter-title" }, c.title), c.subtitle ? el("span", { class: "chapter-sub" }, c.subtitle) : null),
      el("div", { class: "chapter-body" }, c.sections.map(sectionEl)));
  }
  function sectionEl(s) {
    return el("div", { class: "ch-sec" },
      s.heading ? el("h4", {}, s.heading) : null,
      s.blocks.map((bk) => {
        if (bk.t === "sub") return el("h5", {}, bk.text);
        if (bk.t === "list") return list(bk.items);
        if (bk.t === "steps") return el("ol", { class: "steps" }, bk.items.map((i) => el("li", {}, i)));
        if (bk.t === "science") return el("p", { class: "science" }, bk.text);
        if (bk.t === "quote") return el("blockquote", {}, bk.text);
        if (bk.t === "paul") return el("aside", { class: "paul" }, el("p", { class: "paul-tag" }, B("from_pauls_life")), el("p", {}, bk.text));
        return el("p", {}, bk.text);
      }));
  }

  function savePdf() {
    st.view = "pdf";
    render();
    document.querySelectorAll("details").forEach((d) => (d.open = true));
    setTimeout(() => window.print(), 300);
  }

  // ---------- graphics ----------

  function meter(v) {
    const n = Math.max(0, Math.min(100, Number(v) || 0));
    return el("span", { class: "meter", role: "img", "aria-label": n + " / 100" }, el("i", { style: `width:${n}%` }));
  }

  function mapGraphic(scores) {
    return el("div", { class: "map", role: "img", "aria-label": B("map_title") + ": " + B("map_hint") },
      PILLARS.map((P) => el("div", { class: "map-row" },
        el("span", { class: "map-letter", "aria-hidden": "true" }, P.letter),
        el("div", { class: "map-cells", style: `grid-template-columns:repeat(${P.mods.length},minmax(0,1fr))` }, P.mods.map((m) => {
          const raw = scores[m];
          const v = Math.max(0, Math.min(100, Number(raw) || 0));
          const cls = "map-cell" + (raw == null ? " none" : v >= 55 ? " hot" : "");
          return el("div", { class: cls, style: `--v:${(v / 100) * 0.95}`, title: levelName(m) + (raw == null ? "" : " · " + v) },
            el("span", { class: "map-code" }, m.toUpperCase()), el("span", { class: "map-name" }, levelName(m)));
        })))),
      el("div", { class: "map-legend", "aria-hidden": "true" }, el("i"), el("span", {}, B("map_hint"))));
  }

  function sourcesGraphic() {
    const items = [["source_answers", "1"], ["source_method", "2"], ["source_ai", "3"]];
    return el("figure", { class: "sources" },
      el("p", { class: "tag" }, B("sources_title")),
      el("div", { class: "sources-row" }, items.map(([k, n]) => el("div", { class: "source" }, el("span", { class: "source-n" }, n), el("p", {}, B(k))))),
      el("div", { class: "sources-arrow", "aria-hidden": "true" }, "↓"),
      el("p", { class: "sources-result" }, t().h1a + " " + t().h1b));
  }

  function growthGraphic(g) {
    if (!g) return null;
    const keys = ["week1", "week2", "weeks34", "month2", "month3"];
    return el("div", { class: "growth" }, el("p", { class: "start-tag" }, B("grows")),
      el("ol", {}, keys.filter((k) => g[k]).map((k) => el("li", {}, el("span", { class: "g-when" }, B(k)), el("span", { class: "g-what" }, g[k])))));
  }

  function ladderGraphic() {
    const W = 600, H = 210, base = 170, unit = 40;
    const label = [1, 2, 3].map((n) => B(n === 1 ? "ladder_rep" : "ladder_reps", { n })).join(" · ");
    const g = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "ladder", role: "img", "aria-label": B("ladder_title") + ": " + label + " · " + B("ladder_rest") });
    g.append(svg("line", { x1: 10, y1: base, x2: 590, y2: base, class: "ladder-floor" }));
    [1, 2, 3].forEach((n, i) => {
      const x = 20 + i * 190;
      for (let k = 0; k < n; k++) g.append(svg("rect", { x, y: base - (k + 1) * unit, width: 64, height: unit - 6, class: "ladder-rep" }));
      g.append(svg("text", { x: x + 32, y: base + 26, "text-anchor": "middle", class: "ladder-label" }, B(n === 1 ? "ladder_rep" : "ladder_reps", { n })));
      // one minute rest after every set
      g.append(svg("line", { x1: x + 76, y1: base - 14, x2: x + 180, y2: base - 14, class: "ladder-rest" }));
      g.append(svg("circle", { cx: x + 128, cy: base - 42, r: 13, fill: "none", class: "ladder-rest" }));
      g.append(svg("line", { x1: x + 128, y1: base - 42, x2: x + 128, y2: base - 50, class: "ladder-floor" }));
      g.append(svg("line", { x1: x + 128, y1: base - 42, x2: x + 134, y2: base - 42, class: "ladder-floor" }));
      g.append(svg("text", { x: x + 128, y: base + 26, "text-anchor": "middle", class: "ladder-small" }, B("ladder_rest")));
    });
    return g;
  }

  function timelineGraphic(phases) {
    const W = 600, H = 70;
    const g = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "timeline", role: "img", "aria-label": B("timeline") });
    [0, 1, 2].forEach((i) => {
      g.append(svg("rect", { x: 10 + i * 195, y: 20, width: 190, height: 14, rx: 2, class: "tl-bar tl-" + i }));
      g.append(svg("text", { x: 10 + i * 195, y: 56, class: "ladder-small" }, (phases[i] && phases[i].days) || ""));
    });
    g.append(svg("text", { x: 590, y: 56, "text-anchor": "end", class: "ladder-small" }, "90"));
    return g;
  }

  // ---------- start ----------

  setLang(st.lang);
  fetch("/api/analyze", { method: "GET" })
    .then((r) => r.json())
    .then((d) => { st.open = Boolean(d.open); })
    .catch(() => { st.open = false; })
    .finally(() => { if (st.step < 0 && st.between == null) render(); });
})();

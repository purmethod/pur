// the pur blueprint page: asks the questions from questions.js section by section,
// sends the answers to /api/analyze and renders the blueprint. vanilla, no dependencies.
(function () {
  const Q = window.PUR_Q;
  const app = document.getElementById("app");
  const bar = document.getElementById("bar");

  const T = {
    en: {
      tag: "the pur blueprint", h1a: "your", h1b: "blueprint.",
      lead: "honest answers about your body, your mind and your responsibility. from them a personal 90-day plan is written for you: for your age, your life, your goal.",
      m1: "<b>68 questions</b> in 8 short steps", m2: "<b>about 12 minutes</b>", m3: "<b>written for you</b>, nothing from a template",
      start: "begin", next: "next", back: "back", step: "step", of: "of",
      closed: "the blueprint opens soon. follow the build on instagram.", closedBtn: "follow paul pur",
      missing: "answer the marked questions to go on.",
      under18: "the pur blueprint is for men aged 18 and over.",
      crisis: "if you are in a crisis, talk to someone today. germany: telefonseelsorge 0800 111 0 111 or 0800 111 0 222, free, day and night. elsewhere: your local crisis line or emergency number.",
      multi: "choose all that apply", optional: "optional",
      reviewTag: "last step", reviewH: "ready.", reviewLead: "your answers are complete. the blueprint takes one to three minutes to write.",
      consent: "i agree that my answers, including my health information, are sent to anthropic (claude) to write my blueprint. purmethod.com does not store them. the blueprint is guidance, not medical advice.",
      generate: "write my blueprint",
      wait: ["reading your answers", "finding the pattern behind them", "choosing your three priorities", "scaling every protocol to you", "writing your 90 days"],
      errBusy: "too many blueprints are being written right now. try again in a few minutes.",
      errLimit: "you have written several blueprints in the last hour. try again later.",
      errGeneric: "something went wrong while writing your blueprint. your answers are kept, try again.",
      retry: "try again",
      insight: "what i see", priorities: "your three priorities", firstStep: "tomorrow",
      physical: "physical control", mind: "understanding the mind", responsibility: "responsibility", sexual: "sexual energy",
      daily: "your day", morning: "morning", day: "day", evening: "evening",
      phases: "your 90 days", nn: "non-negotiables", safety: "watch out", message: "from paul",
      print: "save as pdf", restart: "start over", sign: "paul pur",
      disclaimer: "this blueprint is guidance from the pur method, not medical advice. talk to your doctor before you change training, food, cold or breathwork, especially with a health condition or medication.",
    },
    de: {
      tag: "der pur blueprint", h1a: "dein", h1b: "blueprint.",
      lead: "ehrliche antworten über deinen körper, deinen geist und deine verantwortung. daraus wird ein persönlicher 90-tage-plan für dich geschrieben: für dein alter, dein leben, dein ziel.",
      m1: "<b>68 fragen</b> in 8 kurzen schritten", m2: "<b>etwa 12 minuten</b>", m3: "<b>für dich geschrieben</b>, nichts aus einer vorlage",
      start: "beginnen", next: "weiter", back: "zurück", step: "schritt", of: "von",
      closed: "der blueprint öffnet bald. verfolge den aufbau auf instagram.", closedBtn: "paul pur folgen",
      missing: "beantworte die markierten fragen, um weiterzugehen.",
      under18: "der pur blueprint ist für männer ab 18 jahren.",
      crisis: "wenn du in einer krise bist, sprich heute mit jemandem. telefonseelsorge 0800 111 0 111 oder 0800 111 0 222, kostenlos, tag und nacht. außerhalb deutschlands: dein örtliches krisentelefon oder der notruf.",
      multi: "alles auswählen, was zutrifft", optional: "optional",
      reviewTag: "letzter schritt", reviewH: "bereit.", reviewLead: "deine antworten sind vollständig. der blueprint braucht ein bis drei minuten.",
      consent: "ich bin einverstanden, dass meine antworten, auch meine gesundheitsangaben, an anthropic (claude) gesendet werden, um meinen blueprint zu schreiben. purmethod.com speichert sie nicht. der blueprint ist eine orientierung, keine ärztliche beratung.",
      generate: "meinen blueprint schreiben",
      wait: ["deine antworten werden gelesen", "das muster dahinter wird gesucht", "deine drei prioritäten werden gewählt", "jedes protokoll wird auf dich skaliert", "deine 90 tage werden geschrieben"],
      errBusy: "gerade werden zu viele blueprints geschrieben. versuch es in ein paar minuten noch einmal.",
      errLimit: "du hast in der letzten stunde schon mehrere blueprints geschrieben. versuch es später noch einmal.",
      errGeneric: "beim schreiben deines blueprints ist etwas schiefgegangen. deine antworten bleiben erhalten, versuch es noch einmal.",
      retry: "noch einmal versuchen",
      insight: "was ich sehe", priorities: "deine drei prioritäten", firstStep: "morgen",
      physical: "körperliche kontrolle", mind: "den geist verstehen", responsibility: "verantwortung", sexual: "sexuelle energie",
      daily: "dein tag", morning: "morgen", day: "tag", evening: "abend",
      phases: "deine 90 tage", nn: "nicht verhandelbar", safety: "pass auf", message: "von paul",
      print: "als pdf sichern", restart: "neu beginnen", sign: "paul pur",
      disclaimer: "dieser blueprint ist eine orientierung aus der pur methode, keine ärztliche beratung. sprich mit deinem arzt, bevor du training, ernährung, kälte oder atemarbeit änderst, besonders bei erkrankungen oder medikamenten.",
    },
    fr: {
      tag: "le blueprint pur", h1a: "ton", h1b: "blueprint.",
      lead: "des réponses honnêtes sur ton corps, ton esprit et ta responsabilité. à partir d'elles, un plan personnel de 90 jours est écrit pour toi : pour ton âge, ta vie, ton objectif.",
      m1: "<b>68 questions</b> en 8 courtes étapes", m2: "<b>environ 12 minutes</b>", m3: "<b>écrit pour toi</b>, rien d'un modèle",
      start: "commencer", next: "suivant", back: "retour", step: "étape", of: "sur",
      closed: "le blueprint ouvre bientôt. suis la construction sur instagram.", closedBtn: "suivre paul pur",
      missing: "réponds aux questions marquées pour continuer.",
      under18: "le blueprint pur est destiné aux hommes de 18 ans et plus.",
      crisis: "si tu es en crise, parle à quelqu'un aujourd'hui : un médecin, une personne de confiance, ou la ligne de crise ou le numéro d'urgence de ton pays. en allemagne : telefonseelsorge 0800 111 0 111.",
      multi: "choisis tout ce qui s'applique", optional: "facultatif",
      reviewTag: "dernière étape", reviewH: "prêt.", reviewLead: "tes réponses sont complètes. l'écriture du blueprint prend une à trois minutes.",
      consent: "j'accepte que mes réponses, y compris mes informations de santé, soient envoyées à anthropic (claude) pour écrire mon blueprint. purmethod.com ne les conserve pas. le blueprint est une orientation, pas un avis médical.",
      generate: "écrire mon blueprint",
      wait: ["lecture de tes réponses", "recherche du schéma derrière elles", "choix de tes trois priorités", "adaptation de chaque protocole à toi", "écriture de tes 90 jours"],
      errBusy: "trop de blueprints sont en cours d'écriture. réessaie dans quelques minutes.",
      errLimit: "tu as déjà écrit plusieurs blueprints cette heure-ci. réessaie plus tard.",
      errGeneric: "un problème est survenu pendant l'écriture. tes réponses sont conservées, réessaie.",
      retry: "réessayer",
      insight: "ce que je vois", priorities: "tes trois priorités", firstStep: "demain",
      physical: "contrôle physique", mind: "comprendre l'esprit", responsibility: "responsabilité", sexual: "énergie sexuelle",
      daily: "ta journée", morning: "matin", day: "journée", evening: "soir",
      phases: "tes 90 jours", nn: "non négociable", safety: "attention", message: "de paul",
      print: "enregistrer en pdf", restart: "recommencer", sign: "paul pur",
      disclaimer: "ce blueprint est une orientation de la méthode pur, pas un avis médical. parle à ton médecin avant de changer ton entraînement, ton alimentation, le froid ou la respiration, surtout en cas de maladie ou de traitement.",
    },
    es: {
      tag: "el blueprint pur", h1a: "tu", h1b: "blueprint.",
      lead: "respuestas honestas sobre tu cuerpo, tu mente y tu responsabilidad. con ellas se escribe un plan personal de 90 días para ti: para tu edad, tu vida, tu objetivo.",
      m1: "<b>68 preguntas</b> en 8 pasos cortos", m2: "<b>unos 12 minutos</b>", m3: "<b>escrito para ti</b>, nada de plantillas",
      start: "empezar", next: "siguiente", back: "atrás", step: "paso", of: "de",
      closed: "el blueprint abre pronto. sigue la construcción en instagram.", closedBtn: "seguir a paul pur",
      missing: "responde las preguntas marcadas para continuar.",
      under18: "el blueprint pur es para hombres de 18 años o más.",
      crisis: "si estás en crisis, habla hoy con alguien: un médico, una persona de confianza, o la línea de crisis o el número de emergencias de tu país. en alemania: telefonseelsorge 0800 111 0 111.",
      multi: "elige todo lo que corresponda", optional: "opcional",
      reviewTag: "último paso", reviewH: "listo.", reviewLead: "tus respuestas están completas. escribir el blueprint lleva de uno a tres minutos.",
      consent: "acepto que mis respuestas, incluida mi información de salud, se envíen a anthropic (claude) para escribir mi blueprint. purmethod.com no las guarda. el blueprint es una orientación, no un consejo médico.",
      generate: "escribir mi blueprint",
      wait: ["leyendo tus respuestas", "buscando el patrón detrás de ellas", "eligiendo tus tres prioridades", "ajustando cada protocolo a ti", "escribiendo tus 90 días"],
      errBusy: "ahora se están escribiendo demasiados blueprints. inténtalo de nuevo en unos minutos.",
      errLimit: "ya has escrito varios blueprints en la última hora. inténtalo más tarde.",
      errGeneric: "algo salió mal al escribir tu blueprint. tus respuestas se conservan, inténtalo de nuevo.",
      retry: "intentar de nuevo",
      insight: "lo que veo", priorities: "tus tres prioridades", firstStep: "mañana",
      physical: "control físico", mind: "entender la mente", responsibility: "responsabilidad", sexual: "energía sexual",
      daily: "tu día", morning: "mañana", day: "día", evening: "noche",
      phases: "tus 90 días", nn: "innegociables", safety: "cuidado", message: "de paul",
      print: "guardar como pdf", restart: "empezar de nuevo", sign: "paul pur",
      disclaimer: "este blueprint es una orientación del método pur, no un consejo médico. habla con tu médico antes de cambiar entrenamiento, alimentación, frío o respiración, sobre todo si tienes una enfermedad o tomas medicación.",
    },
    ar: {
      tag: "مخطط pur", h1a: "مخططك", h1b: "الشخصي.",
      lead: "إجابات صادقة عن جسدك وعقلك ومسؤوليتك. منها تُكتب لك خطة شخصية لمدة 90 يومًا: لعمرك وحياتك وهدفك.",
      m1: "<b>68 سؤالًا</b> في 8 خطوات قصيرة", m2: "<b>حوالي 12 دقيقة</b>", m3: "<b>مكتوب لك</b>، لا شيء من قالب جاهز",
      start: "ابدأ", next: "التالي", back: "رجوع", step: "الخطوة", of: "من",
      closed: "المخطط يفتح قريبًا. تابع البناء على إنستغرام.", closedBtn: "تابع paul pur",
      missing: "أجب عن الأسئلة المعلّمة للمتابعة.",
      under18: "مخطط pur مخصص للرجال من عمر 18 عامًا فما فوق.",
      crisis: "إذا كنت في أزمة، تحدث مع شخص اليوم: طبيب أو شخص تثق به أو خط الأزمات أو رقم الطوارئ في بلدك.",
      multi: "اختر كل ما ينطبق", optional: "اختياري",
      reviewTag: "الخطوة الأخيرة", reviewH: "جاهز.", reviewLead: "إجاباتك مكتملة. تستغرق كتابة المخطط من دقيقة إلى ثلاث دقائق.",
      consent: "أوافق على إرسال إجاباتي، بما فيها معلوماتي الصحية، إلى anthropic (claude) لكتابة مخططي. لا يحتفظ بها purmethod.com. المخطط إرشاد وليس نصيحة طبية.",
      generate: "اكتب مخططي",
      wait: ["قراءة إجاباتك", "البحث عن النمط خلفها", "اختيار أولوياتك الثلاث", "تكييف كل بروتوكول معك", "كتابة أيامك التسعين"],
      errBusy: "يتم الآن كتابة عدد كبير من المخططات. حاول مرة أخرى بعد بضع دقائق.",
      errLimit: "لقد كتبت عدة مخططات في الساعة الأخيرة. حاول لاحقًا.",
      errGeneric: "حدث خطأ أثناء كتابة مخططك. إجاباتك محفوظة، حاول مرة أخرى.",
      retry: "حاول مرة أخرى",
      insight: "ما أراه", priorities: "أولوياتك الثلاث", firstStep: "غدًا",
      physical: "التحكم الجسدي", mind: "فهم العقل", responsibility: "المسؤولية", sexual: "الطاقة الجنسية",
      daily: "يومك", morning: "الصباح", day: "النهار", evening: "المساء",
      phases: "أيامك التسعون", nn: "غير قابل للتفاوض", safety: "انتبه", message: "من paul",
      print: "حفظ كملف pdf", restart: "ابدأ من جديد", sign: "paul pur",
      disclaimer: "هذا المخطط إرشاد من طريقة pur وليس نصيحة طبية. تحدث مع طبيبك قبل تغيير التدريب أو الطعام أو البرد أو تمارين التنفس، خاصة إذا كان لديك مرض أو تتناول أدوية.",
    },
    ru: {
      tag: "blueprint pur", h1a: "твой", h1b: "blueprint.",
      lead: "честные ответы о твоём теле, уме и ответственности. по ним для тебя пишется личный план на 90 дней: под твой возраст, твою жизнь, твою цель.",
      m1: "<b>68 вопросов</b> в 8 коротких шагах", m2: "<b>около 12 минут</b>", m3: "<b>написано для тебя</b>, ничего по шаблону",
      start: "начать", next: "дальше", back: "назад", step: "шаг", of: "из",
      closed: "blueprint скоро откроется. следи за созданием в instagram.", closedBtn: "подписаться на paul pur",
      missing: "ответь на отмеченные вопросы, чтобы продолжить.",
      under18: "blueprint pur предназначен для мужчин от 18 лет.",
      crisis: "если ты в кризисе, поговори с кем-нибудь сегодня: с врачом, с близким человеком или позвони на линию помощи или в экстренную службу своей страны.",
      multi: "выбери всё, что подходит", optional: "необязательно",
      reviewTag: "последний шаг", reviewH: "готово.", reviewLead: "твои ответы полные. написание blueprint занимает от одной до трёх минут.",
      consent: "я согласен, что мои ответы, включая данные о здоровье, будут отправлены в anthropic (claude), чтобы написать мой blueprint. purmethod.com их не хранит. blueprint — это ориентир, а не медицинская консультация.",
      generate: "написать мой blueprint",
      wait: ["читаю твои ответы", "ищу закономерность за ними", "выбираю три твоих приоритета", "подстраиваю каждый протокол под тебя", "пишу твои 90 дней"],
      errBusy: "сейчас пишется слишком много blueprint. попробуй через несколько минут.",
      errLimit: "за последний час ты уже написал несколько blueprint. попробуй позже.",
      errGeneric: "при написании blueprint что-то пошло не так. твои ответы сохранены, попробуй ещё раз.",
      retry: "попробовать снова",
      insight: "что я вижу", priorities: "три твоих приоритета", firstStep: "завтра",
      physical: "физический контроль", mind: "понимание ума", responsibility: "ответственность", sexual: "сексуальная энергия",
      daily: "твой день", morning: "утро", day: "день", evening: "вечер",
      phases: "твои 90 дней", nn: "без компромиссов", safety: "осторожно", message: "от paul",
      print: "сохранить как pdf", restart: "начать заново", sign: "paul pur",
      disclaimer: "этот blueprint — ориентир метода pur, а не медицинская консультация. поговори с врачом, прежде чем менять тренировки, питание, холод или дыхание, особенно при заболеваниях или приёме лекарств.",
    },
  };

  const KEY = "pur-blueprint-v1";
  const store = {
    load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } },
    save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode: fine, nothing kept */ } },
    clear() { try { localStorage.removeItem(KEY); } catch { /* ignore */ } },
  };

  const saved = store.load();
  const st = {
    lang: saved.lang || pickLang(),
    step: saved.step ?? -1, // -1 intro, 0..n-1 sections, n review, n+1 loading, n+2 result
    answers: saved.answers || {},
    blueprint: saved.blueprint || null,
    open: null,
    error: "",
    showMissing: false,
  };
  const N = Q.sections.length;

  function pickLang() {
    const want = (navigator.language || "en").slice(0, 2);
    return T[want] ? want : "en";
  }
  const t = () => T[st.lang];
  const L = (obj) => obj[st.lang] || obj.en;
  const persist = () => store.save({ lang: st.lang, step: st.step >= N + 1 && !st.blueprint ? N : st.step, answers: st.answers, blueprint: st.blueprint });

  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v; // only used with our own strings, never with answers or model output
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat()) if (k != null) n.append(k.nodeType ? k : document.createTextNode(String(k)));
    return n;
  }

  function setLang(l) {
    st.lang = l;
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.querySelectorAll(".lb").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    persist();
    render();
  }
  document.querySelectorAll(".lb").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  function go(step) {
    st.step = step;
    st.showMissing = false;
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
    if (it.type === "text" || it.type === "textarea") return typeof v === "string" && v.trim().length > 0;
    return v !== undefined;
  };
  const missingIn = (sid) => visibleItems(sid).filter((it) => it.required && !isAnswered(it));

  function render() {
    const s = st.step;
    bar.style.width = s < 0 ? "0" : Math.min(100, Math.round(((s + 1) / (N + 1)) * 100)) + "%";
    app.replaceChildren();
    if (s < 0) return renderIntro();
    if (s < N) return renderSection(Q.sections[s], s);
    if (s === N) return renderReview();
    if (s === N + 1) return renderLoading();
    return renderBlueprint();
  }

  function renderIntro() {
    const x = t();
    app.append(
      el("p", { class: "tag" }, x.tag),
      el("h1", {}, x.h1a + " ", el("em", {}, x.h1b)),
      el("p", { class: "lead" }, x.lead),
      el("div", { class: "meta" }, el("span", { html: x.m1 }), el("span", { html: x.m2 }), el("span", { html: x.m3 })),
    );
    const actions = el("div", { class: "actions" });
    if (st.open === false) {
      actions.append(el("p", { class: "lead" }, x.closed), el("a", { class: "btn", href: "https://www.instagram.com/paulpur_/", target: "_blank", rel: "noopener noreferrer" }, x.closedBtn));
    } else {
      actions.append(el("span"), el("button", { class: "btn", type: "button", onclick: () => go(0), disabled: st.open === null }, x.start));
    }
    app.append(actions);
  }

  function renderSection(sec, idx) {
    const x = t();
    const letter = { p: "P", u: "U", r: "R" }[sec.id] || "";
    app.append(
      el("div", { class: "step-head" },
        letter ? el("span", { class: "step-letter", "aria-hidden": "true" }, letter) : null,
        el("p", { class: "tag" }, `${x.step} ${idx + 1} ${x.of} ${N}`),
        el("h2", {}, L(sec.title)),
        el("p", { class: "lead" }, L(sec.intro)),
      ),
    );
    for (const it of visibleItems(sec.id)) app.append(renderItem(it));
    const miss = missingIn(sec.id);
    if (st.showMissing && miss.length) app.append(el("p", { class: "err", role: "alert" }, x.missing));
    app.append(
      el("div", { class: "actions" },
        el("button", { class: "ghost", type: "button", onclick: () => go(idx - 1) }, x.back),
        el("button", {
          class: "btn", type: "button",
          onclick: () => {
            if (missingIn(sec.id).length) { st.showMissing = true; render(); const first = app.querySelector(".q.missing"); if (first) first.scrollIntoView({ block: "center" }); return; }
            go(idx + 1);
          },
        }, x.next),
      ),
    );
  }

  function renderItem(it) {
    const x = t();
    const id = "q-" + it.id;
    const wrap = el("div", { class: "q" + (st.showMissing && it.required && !isAnswered(it) ? " missing" : ""), id });
    const code = it.module && it.module !== "syn" ? el("span", { class: "q-code" }, it.module.toUpperCase()) : null;
    const label = el("p", { class: "q-text", id: id + "-l" }, code, L(it.q), it.required ? "" : ` (${x.optional})`);
    wrap.append(label);
    const set = (v) => { st.answers[it.id] = v; persist(); };

    if (it.type === "text" || it.type === "number" || it.type === "textarea") {
      const input = it.type === "textarea"
        ? el("textarea", { id: id + "-i", maxlength: it.max, "aria-labelledby": id + "-l" })
        : el("input", { id: id + "-i", type: it.type === "number" ? "number" : "text", inputmode: it.type === "number" ? "numeric" : null, min: it.min, max: it.type === "number" ? it.max : null, maxlength: it.type === "text" ? it.max : null, autocomplete: it.id === "name" ? "given-name" : "off", "aria-labelledby": id + "-l" });
      input.value = st.answers[it.id] ?? "";
      const count = it.type === "textarea" ? el("p", { class: "count" }, `${input.value.length} / ${it.max}`) : null;
      const note = el("div");
      const showNote = () => {
        note.replaceChildren();
        if (it.id === "age" && input.value && Number(input.value) < 18) note.append(el("p", { class: "note" }, x.under18));
      };
      input.addEventListener("input", () => {
        if (it.type === "number") {
          const n = parseInt(input.value, 10);
          if (Number.isInteger(n)) set(n); else delete st.answers[it.id];
          persist();
          showNote();
        } else {
          set(input.value);
          if (count) count.textContent = `${input.value.length} / ${it.max}`;
        }
      });
      // age changes which questions are asked later, so recompute when the field is left
      if (it.id === "age") input.addEventListener("change", () => render());
      wrap.append(input, count, note);
      showNote();
      return wrap;
    }

    const options = it.type === "scale" ? Q.scale : it.options;
    const group = el("div", { class: "opts" + (it.type === "scale" ? " scale" : ""), role: it.type === "multi" ? "group" : "radiogroup", "aria-labelledby": id + "-l" });
    if (it.type === "multi") wrap.append(el("p", { class: "count", style: "text-align:start;margin:-8px 0 10px" }, x.multi));
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
        wrap.classList.remove("missing");
      });
      group.append(b);
    }
    wrap.append(group);
    if (it.id === "inner" && st.answers.inner === "crisis") wrap.append(el("p", { class: "note", role: "note" }, x.crisis));
    return wrap;
  }

  function renderReview() {
    const x = t();
    const box = el("input", { type: "checkbox", id: "consent" });
    const btn = el("button", { class: "btn", type: "button", disabled: true, onclick: submit }, x.generate);
    box.addEventListener("change", () => (btn.disabled = !box.checked));
    app.append(
      el("p", { class: "tag" }, x.reviewTag),
      el("h2", {}, x.reviewH),
      el("p", { class: "lead" }, x.reviewLead),
      st.answers.inner === "crisis" ? el("p", { class: "note" }, x.crisis) : null,
      el("label", { class: "consent", for: "consent" }, box, el("span", {}, x.consent)),
      st.error ? el("p", { class: "err", role: "alert" }, st.error) : null,
      el("div", { class: "actions" }, el("button", { class: "ghost", type: "button", onclick: () => go(N - 1) }, x.back), btn),
    );
  }

  let waitTimer;
  function renderLoading() {
    const x = t();
    const line = el("p", { "aria-live": "polite" }, x.wait[0]);
    app.append(el("div", { class: "loading" }, el("p", { class: "tag" }, x.tag), el("div", { class: "line", "aria-hidden": "true" }), line));
    let i = 0;
    clearInterval(waitTimer);
    waitTimer = setInterval(() => { i = Math.min(i + 1, x.wait.length - 1); line.textContent = x.wait[i]; }, 14000);
  }

  async function submit() {
    // a fresh check against the same rules the server uses
    const check = Q.validate(st.answers);
    if (!check.ok) {
      const first = Q.sections.findIndex((s) => check.errors.some((id) => Q.byId[id].section === s.id));
      st.step = Math.max(0, first); st.showMissing = true; persist(); render(); return;
    }
    go(N + 1);
    try {
      const r = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lang: st.lang, consent: true, answers: check.answers }) });
      const data = await r.json().catch(() => ({}));
      clearInterval(waitTimer);
      if (r.ok && data.blueprint) { st.blueprint = data.blueprint; go(N + 2); return; }
      const x = t();
      st.error = r.status === 429 ? x.errLimit : data.error === "busy" ? x.errBusy : data.error === "coming_soon" ? x.closed : x.errGeneric;
    } catch {
      st.error = t().errGeneric;
    }
    clearInterval(waitTimer);
    st.step = N; persist(); render();
  }

  function paras(text) {
    return String(text || "").split(/\n+/).filter(Boolean).map((p) => el("p", {}, p));
  }
  const list = (items) => el("ul", { class: "clean" }, (items || []).map((i) => el("li", {}, i)));

  function renderBlueprint() {
    const x = t();
    const b = st.blueprint || {};
    const sec = (title, ...kids) => el("section", {}, title ? el("p", { class: "tag" }, title) : null, ...kids);
    const wrap = el("div", { class: "bp" });
    app.append(wrap);
    wrap.append(
      el("p", { class: "tag" }, x.tag),
      el("h1", {}, x.h1a + " ", el("em", {}, x.h1b)),
      sec(null, el("p", { class: "greet" }, b.greeting)),
      sec(x.insight, ...paras(b.insight)),
      sec(x.priorities, el("div", { class: "prio" }, (b.priorities || []).map((p) =>
        el("div", {}, el("span", { class: "code" }, p.level), el("h3", {}, p.title), el("p", {}, p.why), el("p", { class: "first" }, el("b", {}, x.firstStep + ": "), p.first_step))))),
      sec(x.physical, ...paras(b.physical)),
      sec(x.mind, ...paras(b.mind)),
      sec(x.responsibility, ...paras(b.responsibility)),
      sec(x.sexual, ...paras(b.sexual)),
      sec(x.daily, el("div", { class: "day" },
        el("div", {}, el("h4", {}, x.morning), list(b.daily && b.daily.morning)),
        el("div", {}, el("h4", {}, x.day), list(b.daily && b.daily.day)),
        el("div", {}, el("h4", {}, x.evening), list(b.daily && b.daily.evening)))),
      sec(x.phases, el("div", { class: "phases" }, (b.phases || []).map((p) =>
        el("div", { class: "phase" }, el("h4", {}, p.days), el("p", { class: "focus" }, p.focus), list(p.actions))))),
      sec(x.nn, el("ol", { class: "nn" }, (b.non_negotiables || []).map((n) => el("li", {}, n)))),
      b.safety ? sec(x.safety, el("p", { class: "note" }, b.safety)) : null,
      sec(x.message, el("p", { class: "closing" }, b.message), el("p", { class: "sign" }, x.sign)),
      el("p", { class: "count", style: "text-align:start;margin-top:24px" }, x.disclaimer),
      el("div", { class: "actions" },
        el("button", { class: "ghost", type: "button", onclick: () => { store.clear(); st.answers = {}; st.blueprint = null; go(-1); } }, x.restart),
        el("button", { class: "btn", type: "button", onclick: () => window.print() }, x.print)),
    );
  }

  setLang(st.lang);
  fetch("/api/analyze", { method: "GET" })
    .then((r) => r.json())
    .then((d) => { st.open = Boolean(d.open); })
    .catch(() => { st.open = false; })
    .finally(() => { if (st.step < 0) render(); });
})();

// the pure questionnaire: four pillars (P, U, R, E), profile, health check and two spoken answers.
// one file for the page and the api, so both validate the same questions.
(function (root) {
  const Q = {
 "langs": [
  "en",
  "de",
  "fr",
  "es",
  "ar",
  "ru"
 ],
 "sections": [
  {
   "id": "you",
   "title": {
    "en": "you",
    "de": "du",
    "fr": "toi",
    "es": "tú",
    "ar": "أنت",
    "ru": "ты"
   },
   "intro": {
    "en": "who you are and what you want, so the blueprint fits your life.",
    "de": "wer du bist und was du willst, damit der blueprint zu deinem leben passt.",
    "fr": "qui tu es et ce que tu veux, pour que le blueprint colle à ta vie.",
    "es": "quién eres y qué quieres, para que el blueprint encaje con tu vida.",
    "ar": "من أنت وماذا تريد، حتى يناسب المخطط حياتك.",
    "ru": "кто ты и чего ты хочешь, чтобы blueprint подходил к твоей жизни."
   }
  },
  {
   "id": "body",
   "title": {
    "en": "body",
    "de": "körper",
    "fr": "corps",
    "es": "cuerpo",
    "ar": "الجسد",
    "ru": "тело"
   },
   "intro": {
    "en": "where your body stands today. no judgement, only the starting point.",
    "de": "wo dein körper heute steht. keine bewertung, nur der startpunkt.",
    "fr": "où en est ton corps aujourd'hui. aucun jugement, seulement le point de départ.",
    "es": "dónde está tu cuerpo hoy. sin juicios, solo el punto de partida.",
    "ar": "أين يقف جسدك اليوم. بلا أحكام، فقط نقطة البداية.",
    "ru": "где сегодня твоё тело. без оценок, только точка старта."
   }
  },
  {
   "id": "habits",
   "title": {
    "en": "habits",
    "de": "gewohnheiten",
    "fr": "habitudes",
    "es": "hábitos",
    "ar": "العادات",
    "ru": "привычки"
   },
   "intro": {
    "en": "be honest. nobody sees these answers except the system that writes your blueprint.",
    "de": "sei ehrlich. niemand sieht diese antworten außer dem system, das deinen blueprint schreibt.",
    "fr": "sois honnête. personne ne voit ces réponses, à part le système qui écrit ton blueprint.",
    "es": "sé honesto. nadie ve estas respuestas, solo el sistema que escribe tu blueprint.",
    "ar": "كن صادقًا. لا أحد يرى هذه الإجابات سوى النظام الذي يكتب مخططك.",
    "ru": "будь честен. эти ответы не видит никто, кроме системы, которая пишет твой blueprint."
   }
  },
  {
   "id": "health",
   "title": {
    "en": "health check",
    "de": "gesundheits-check",
    "fr": "bilan santé",
    "es": "chequeo de salud",
    "ar": "فحص صحي",
    "ru": "проверка здоровья"
   },
   "intro": {
    "en": "breathwork, cold and fasting are strong tools. these answers decide which of them are safe for you.",
    "de": "atemarbeit, kälte und fasten sind starke werkzeuge. diese antworten entscheiden, welche davon für dich sicher sind.",
    "fr": "la respiration, le froid et le jeûne sont des outils puissants. ces réponses décident lesquels sont sûrs pour toi.",
    "es": "la respiración, el frío y el ayuno son herramientas fuertes. estas respuestas deciden cuáles son seguras para ti.",
    "ar": "التنفس والبرد والصيام أدوات قوية. هذه الإجابات تحدد أيها آمن لك.",
    "ru": "дыхание, холод и голодание — сильные инструменты. эти ответы решают, какие из них для тебя безопасны."
   }
  },
  {
   "id": "p",
   "title": {
    "en": "physical control",
    "de": "physical control",
    "fr": "contrôle physique",
    "es": "control físico",
    "ar": "التحكم الجسدي",
    "ru": "физический контроль"
   },
   "intro": {
    "en": "the pillar of physical control: sexual control, sleep, movement, food, breath, temperature.",
    "de": "die säule physical control: sexuelle kontrolle, schlaf, bewegung, ernährung, atem, temperatur.",
    "fr": "le pilier « contrôle physique » : contrôle sexuel, sommeil, mouvement, alimentation, respiration, température.",
    "es": "el pilar «control físico»: control sexual, sueño, movimiento, alimentación, respiración, temperatura.",
    "ar": "ركيزة التحكم الجسدي: التحكم الجنسي، النوم، الحركة، الطعام، التنفس، الحرارة.",
    "ru": "опора «физический контроль»: сексуальный контроль, сон, движение, питание, дыхание, температура."
   }
  },
  {
   "id": "u",
   "title": {
    "en": "understanding the mind",
    "de": "understanding the mind",
    "fr": "comprendre l'esprit",
    "es": "entender la mente",
    "ar": "فهم العقل",
    "ru": "понимание ума"
   },
   "intro": {
    "en": "the pillar of understanding the mind: awareness, impulses, dopamine, attention, identity, emotions. your mind is not your brain.",
    "de": "die säule understanding the mind: bewusstsein, impulse, dopamin, aufmerksamkeit, identität, emotionen. dein geist ist nicht dein gehirn.",
    "fr": "le pilier « comprendre l'esprit » : conscience, impulsions, dopamine, attention, identité, émotions. ton esprit n'est pas ton cerveau.",
    "es": "el pilar «entender la mente»: conciencia, impulsos, dopamina, atención, identidad, emociones. tu mente no es tu cerebro.",
    "ar": "ركيزة فهم العقل: الوعي، الدوافع، الدوبامين، الانتباه، الهوية، المشاعر. عقلك ليس دماغك.",
    "ru": "опора «понимание ума»: осознанность, импульсы, дофамин, внимание, идентичность, эмоции. твой ум — это не твой мозг."
   }
  },
  {
   "id": "r",
   "title": {
    "en": "responsibility",
    "de": "responsibility",
    "fr": "responsabilité",
    "es": "responsabilidad",
    "ar": "المسؤولية",
    "ru": "ответственность"
   },
   "intro": {
    "en": "the pillar of responsibility: accountability, promises, principles, relationships, trust, legacy.",
    "de": "die säule responsibility: selbstverantwortung, versprechen, prinzipien, beziehung, vertrauen, vermächtnis.",
    "fr": "le pilier « responsabilité » : responsabilité de soi, promesses, principes, relations, confiance, héritage.",
    "es": "el pilar «responsabilidad»: autorresponsabilidad, promesas, principios, relaciones, confianza, legado.",
    "ar": "ركيزة المسؤولية: المسؤولية الذاتية، الوعود، المبادئ، العلاقات، الثقة، الإرث.",
    "ru": "опора «ответственность»: самоответственность, обещания, принципы, отношения, доверие, наследие."
   }
  },
  {
   "id": "e",
   "title": {
    "en": "ego",
    "de": "ego",
    "fr": "ego",
    "es": "ego",
    "ar": "الأنا",
    "ru": "эго"
   },
   "intro": {
    "en": "the pillar of ego: what the ego is, and how to kill it, without drugs. the end boss: something is greater than you.",
    "de": "die säule ego: was das ego ist und wie du es tötest, ohne drogen. der endboss: etwas ist größer als du.",
    "fr": "le pilier « ego » : ce qu'est l'ego, et comment le tuer, sans drogues. le boss final : quelque chose est plus grand que toi.",
    "es": "el pilar «ego»: qué es el ego y cómo matarlo, sin drogas. el jefe final: hay algo más grande que tú.",
    "ar": "ركيزة الأنا: ما هي الأنا، وكيف تقتلها من دون مخدرات. الزعيم الأخير: هناك ما هو أكبر منك.",
    "ru": "опора «эго»: что такое эго и как его убить, без наркотиков. финальный босс: есть что-то больше тебя."
   }
  },
  {
   "id": "values",
   "title": {
    "en": "direction",
    "de": "richtung",
    "fr": "direction",
    "es": "dirección",
    "ar": "الاتجاه",
    "ru": "направление"
   },
   "intro": {
    "en": "what has held you back, what your life should become, and how i should speak to you.",
    "de": "was dich bisher aufgehalten hat, was aus deinem leben werden soll, und wie ich mit dir sprechen soll.",
    "fr": "ce qui t'a retenu jusqu'ici, ce que ta vie doit devenir, et comment je dois te parler.",
    "es": "lo que te ha frenado hasta ahora, en qué quieres convertir tu vida, y cómo debo hablarte.",
    "ar": "ما الذي أوقفك حتى الآن، وما الذي تريد أن تصبح عليه حياتك، وكيف أتحدث إليك.",
    "ru": "что тебя до сих пор держало, какой должна стать твоя жизнь, и как мне с тобой говорить."
   }
  }
 ],
 "items": [
  {
   "id": "name",
   "section": "you",
   "type": "text",
   "q": {
    "en": "what should i call you?",
    "de": "wie soll ich dich nennen?",
    "fr": "comment dois-je t'appeler ?",
    "es": "¿cómo debo llamarte?",
    "ar": "بماذا أناديك؟",
    "ru": "как мне тебя называть?"
   },
   "max": 40
  },
  {
   "id": "age",
   "section": "you",
   "type": "number",
   "q": {
    "en": "how old are you?",
    "de": "wie alt bist du?",
    "fr": "quel âge as-tu ?",
    "es": "¿cuántos años tienes?",
    "ar": "كم عمرك؟",
    "ru": "сколько тебе лет?"
   },
   "min": 18,
   "max": 100,
   "required": true
  },
  {
   "id": "relationship",
   "section": "you",
   "type": "single",
   "q": {
    "en": "your relationship right now",
    "de": "deine beziehung gerade",
    "fr": "ta relation en ce moment",
    "es": "tu relación ahora mismo",
    "ar": "علاقتك الآن",
    "ru": "твои отношения сейчас"
   },
   "options": [
    {
     "v": "single",
     "l": {
      "en": "single",
      "de": "single",
      "fr": "célibataire",
      "es": "soltero",
      "ar": "أعزب",
      "ru": "один"
     }
    },
    {
     "v": "dating",
     "l": {
      "en": "dating",
      "de": "am kennenlernen",
      "fr": "en train de rencontrer quelqu'un",
      "es": "conociendo a alguien",
      "ar": "في مرحلة تعارف",
      "ru": "знакомлюсь"
     }
    },
    {
     "v": "relationship",
     "l": {
      "en": "in a relationship",
      "de": "in einer beziehung",
      "fr": "en couple",
      "es": "en pareja",
      "ar": "في علاقة",
      "ru": "в отношениях"
     }
    },
    {
     "v": "married",
     "l": {
      "en": "married",
      "de": "verheiratet",
      "fr": "marié",
      "es": "casado",
      "ar": "متزوج",
      "ru": "женат"
     }
    },
    {
     "v": "separated",
     "l": {
      "en": "separated or divorced",
      "de": "getrennt oder geschieden",
      "fr": "séparé ou divorcé",
      "es": "separado o divorciado",
      "ar": "منفصل أو مطلق",
      "ru": "в разводе или расстались"
     }
    },
    {
     "v": "widowed",
     "l": {
      "en": "widowed",
      "de": "verwitwet",
      "fr": "veuf",
      "es": "viudo",
      "ar": "أرمل",
      "ru": "вдовец"
     }
    }
   ]
  },
  {
   "id": "relationship_goal",
   "section": "you",
   "type": "multi",
   "q": {
    "en": "be honest: what do you want with women?",
    "de": "sei ehrlich: was willst du mit frauen?",
    "fr": "sois honnête : qu'est-ce que tu veux avec les femmes ?",
    "es": "sé sincero: ¿qué quieres con las mujeres?",
    "ar": "كن صريحًا: ماذا تريد في علاقتك مع النساء؟",
    "ru": "будь честен: что ты ищешь в отношениях с женщинами?"
   },
   "options": [
    {
     "v": "ons",
     "l": {
      "en": "one-night stands",
      "de": "one-night-stands",
      "fr": "des coups d'un soir",
      "es": "rollos de una noche",
      "ar": "علاقات لليلة واحدة",
      "ru": "связи на одну ночь"
     }
    },
    {
     "v": "open",
     "l": {
      "en": "an open relationship",
      "de": "eine offene beziehung",
      "fr": "une relation libre",
      "es": "una relación abierta",
      "ar": "علاقة مفتوحة",
      "ru": "свободные отношения"
     }
    },
    {
     "v": "family",
     "l": {
      "en": "married, with children",
      "de": "verheiratet, mit kindern",
      "fr": "marié, avec des enfants",
      "es": "casado, con hijos",
      "ar": "الزواج والأطفال",
      "ru": "брак и дети"
     }
    },
    {
     "v": "biglove",
     "l": {
      "en": "the great love",
      "de": "die große liebe",
      "fr": "le grand amour",
      "es": "el gran amor",
      "ar": "حبّ العمر",
      "ru": "большая любовь"
     }
    },
    {
     "v": "unsure",
     "l": {
      "en": "i do not know yet",
      "de": "weiß ich gerade nicht",
      "fr": "je ne sais pas encore",
      "es": "todavía no lo sé",
      "ar": "لا أعرف بعد",
      "ru": "пока не знаю"
     }
    }
   ],
   "exclusive": "unsure"
  },
  {
   "id": "children",
   "section": "you",
   "type": "single",
   "q": {
    "en": "children",
    "de": "kinder",
    "fr": "enfants",
    "es": "hijos",
    "ar": "الأطفال",
    "ru": "дети"
   },
   "options": [
    {
     "v": "none_no",
     "l": {
      "en": "none, and i don't want any",
      "de": "keine, und ich will keine",
      "fr": "aucun, et je n'en veux pas",
      "es": "ninguno, y no quiero",
      "ar": "لا، ولا أريد",
      "ru": "нет и не хочу"
     }
    },
    {
     "v": "none_want",
     "l": {
      "en": "none yet, i want children",
      "de": "noch keine, ich will kinder",
      "fr": "pas encore, j'en veux",
      "es": "todavía no, quiero hijos",
      "ar": "ليس بعد، أريد أطفالًا",
      "ru": "пока нет, хочу детей"
     }
    },
    {
     "v": "young",
     "l": {
      "en": "yes, young children",
      "de": "ja, kleine kinder",
      "fr": "oui, jeunes enfants",
      "es": "sí, hijos pequeños",
      "ar": "نعم، أطفال صغار",
      "ru": "да, маленькие дети"
     }
    },
    {
     "v": "teens",
     "l": {
      "en": "yes, teenagers",
      "de": "ja, teenager",
      "fr": "oui, adolescents",
      "es": "sí, adolescentes",
      "ar": "نعم، مراهقون",
      "ru": "да, подростки"
     }
    },
    {
     "v": "adult",
     "l": {
      "en": "yes, adult children",
      "de": "ja, erwachsene kinder",
      "fr": "oui, enfants adultes",
      "es": "sí, hijos adultos",
      "ar": "نعم، أبناء بالغون",
      "ru": "да, взрослые дети"
     }
    },
    {
     "v": "grand",
     "l": {
      "en": "yes, and grandchildren",
      "de": "ja, und enkel",
      "fr": "oui, et des petits-enfants",
      "es": "sí, y nietos",
      "ar": "نعم، وأحفاد",
      "ru": "да, и внуки"
     }
    }
   ]
  },
  {
   "id": "dependents",
   "section": "you",
   "type": "multi",
   "q": {
    "en": "who depends on you?",
    "de": "wer verlässt sich auf dich?",
    "fr": "qui compte sur toi ?",
    "es": "¿quién depende de ti?",
    "ar": "من يعتمد عليك؟",
    "ru": "кто на тебя опирается?"
   },
   "options": [
    {
     "v": "partner",
     "l": {
      "en": "a partner",
      "de": "eine partnerin",
      "fr": "une partenaire",
      "es": "una pareja",
      "ar": "شريكة",
      "ru": "партнёрша"
     }
    },
    {
     "v": "children",
     "l": {
      "en": "children",
      "de": "kinder",
      "fr": "des enfants",
      "es": "hijos",
      "ar": "أطفال",
      "ru": "дети"
     }
    },
    {
     "v": "parents",
     "l": {
      "en": "parents",
      "de": "eltern",
      "fr": "des parents",
      "es": "padres",
      "ar": "الوالدان",
      "ru": "родители"
     }
    },
    {
     "v": "team",
     "l": {
      "en": "a team or employees",
      "de": "ein team oder mitarbeiter",
      "fr": "une équipe ou des salariés",
      "es": "un equipo o empleados",
      "ar": "فريق أو موظفون",
      "ru": "команда или сотрудники"
     }
    },
    {
     "v": "nobody",
     "l": {
      "en": "nobody right now",
      "de": "gerade niemand",
      "fr": "personne pour l'instant",
      "es": "nadie por ahora",
      "ar": "لا أحد حاليًا",
      "ru": "сейчас никто"
     }
    }
   ],
   "exclusive": "nobody"
  },
  {
   "id": "friends",
   "section": "you",
   "type": "single",
   "q": {
    "en": "how many people could you call at three in the morning if things were bad?",
    "de": "wie viele menschen könntest du nachts um drei anrufen, wenn es dir schlecht geht?",
    "fr": "combien de personnes pourrais-tu appeler à trois heures du matin si ça allait mal ?",
    "es": "¿a cuántas personas podrías llamar a las tres de la madrugada si te fuera mal?",
    "ar": "كم شخصًا يمكنك أن تتصل به في الثالثة فجرًا إذا كنت في حال سيئة؟",
    "ru": "скольким людям ты мог бы позвонить в три часа ночи, если тебе плохо?"
   },
   "options": [
    {
     "v": "none",
     "l": {
      "en": "nobody",
      "de": "niemanden",
      "fr": "personne",
      "es": "a nadie",
      "ar": "لا أحد",
      "ru": "никому"
     }
    },
    {
     "v": "one",
     "l": {
      "en": "one",
      "de": "einen",
      "fr": "une",
      "es": "a una",
      "ar": "شخص واحد",
      "ru": "одному"
     }
    },
    {
     "v": "few",
     "l": {
      "en": "two or three",
      "de": "zwei oder drei",
      "fr": "deux ou trois",
      "es": "a dos o tres",
      "ar": "شخصين أو ثلاثة",
      "ru": "двум или трём"
     }
    },
    {
     "v": "many",
     "l": {
      "en": "more than three",
      "de": "mehr als drei",
      "fr": "plus de trois",
      "es": "a más de tres",
      "ar": "أكثر من ثلاثة",
      "ru": "больше чем трём"
     }
    }
   ]
  },
  {
   "id": "work",
   "section": "you",
   "type": "single",
   "q": {
    "en": "what fills your days?",
    "de": "was füllt deine tage?",
    "fr": "qu'est-ce qui remplit tes journées ?",
    "es": "¿qué llena tus días?",
    "ar": "ما الذي يملأ أيامك؟",
    "ru": "чем заполнены твои дни?"
   },
   "options": [
    {
     "v": "employed",
     "l": {
      "en": "employed",
      "de": "angestellt",
      "fr": "salarié",
      "es": "empleado",
      "ar": "موظف",
      "ru": "работаю по найму"
     }
    },
    {
     "v": "self",
     "l": {
      "en": "self-employed or founder",
      "de": "selbstständig oder gründer",
      "fr": "indépendant ou fondateur",
      "es": "autónomo o fundador",
      "ar": "عمل حر أو مؤسس",
      "ru": "свой бизнес или фриланс"
     }
    },
    {
     "v": "student",
     "l": {
      "en": "studying or in training",
      "de": "studium oder ausbildung",
      "fr": "études ou formation",
      "es": "estudios o formación",
      "ar": "دراسة أو تدريب",
      "ru": "учёба"
     }
    },
    {
     "v": "shift",
     "l": {
      "en": "shift or night work",
      "de": "schicht- oder nachtarbeit",
      "fr": "travail posté ou de nuit",
      "es": "turnos o trabajo nocturno",
      "ar": "عمل بنظام الورديات أو ليلي",
      "ru": "сменная или ночная работа"
     }
    },
    {
     "v": "none",
     "l": {
      "en": "not working right now",
      "de": "gerade ohne arbeit",
      "fr": "sans travail en ce moment",
      "es": "sin trabajo ahora",
      "ar": "لا أعمل حاليًا",
      "ru": "сейчас не работаю"
     }
    },
    {
     "v": "retired",
     "l": {
      "en": "retired",
      "de": "im ruhestand",
      "fr": "à la retraite",
      "es": "jubilado",
      "ar": "متقاعد",
      "ru": "на пенсии"
     }
    }
   ]
  },
  {
   "id": "daytype",
   "section": "you",
   "type": "single",
   "q": {
    "en": "your normal day is",
    "de": "dein normaler tag ist",
    "fr": "ta journée normale est",
    "es": "tu día normal es",
    "ar": "يومك العادي",
    "ru": "твой обычный день"
   },
   "options": [
    {
     "v": "sitting",
     "l": {
      "en": "mostly sitting",
      "de": "meistens sitzend",
      "fr": "surtout assis",
      "es": "sobre todo sentado",
      "ar": "جلوس في الغالب",
      "ru": "в основном сидя"
     }
    },
    {
     "v": "mixed",
     "l": {
      "en": "mixed",
      "de": "gemischt",
      "fr": "mixte",
      "es": "mixto",
      "ar": "مختلط",
      "ru": "смешанный"
     }
    },
    {
     "v": "physical",
     "l": {
      "en": "physically demanding",
      "de": "körperlich fordernd",
      "fr": "physiquement exigeante",
      "es": "físicamente exigente",
      "ar": "مجهد بدنيًا",
      "ru": "физически тяжёлый"
     }
    }
   ]
  },
  {
   "id": "goal",
   "section": "you",
   "type": "voice",
   "q": {
    "en": "imagine 90 days have passed and it worked. what has changed, and what do you notice first? your body, your energy, your relationship, women, your work: say what really matters to you, how you see yourself today, and why you want to change something now.",
    "de": "stell dir vor, 90 tage sind vorbei und es hat funktioniert. was hat sich verändert, woran merkst du es zuerst? dein körper, deine energie, deine beziehung, frauen, deine arbeit: sag, was dir wirklich wichtig ist, wie du dich heute siehst und warum du gerade jetzt etwas ändern willst.",
    "fr": "imagine que 90 jours sont passés et que ça a marché. qu'est-ce qui a changé, et qu'est-ce que tu remarques en premier ? ton corps, ton énergie, ta relation, les femmes, ton travail : dis ce qui compte vraiment pour toi, comment tu te vois aujourd'hui et pourquoi tu veux changer quelque chose maintenant.",
    "es": "imagina que han pasado 90 días y ha funcionado. ¿qué ha cambiado y qué es lo primero que notas? tu cuerpo, tu energía, tu relación, las mujeres, tu trabajo: di lo que de verdad te importa, cómo te ves hoy y por qué quieres cambiar algo justo ahora.",
    "ar": "تخيّل أن 90 يومًا مرّت وأن الأمر نجح. ما الذي تغيّر، وما أول شيء تلاحظه؟ جسدك، طاقتك، علاقتك، النساء، عملك: قل ما يهمّك حقًا، وكيف ترى نفسك اليوم، ولماذا تريد أن تغيّر شيئًا الآن بالذات.",
    "ru": "представь, что прошло 90 дней и всё получилось. что изменилось и что ты замечаешь первым? твоё тело, твоя энергия, твои отношения, женщины, твоя работа: скажи, что для тебя действительно важно, каким ты видишь себя сегодня и почему хочешь что-то изменить именно сейчас."
   },
   "max": 2000
  },
  {
   "id": "wake",
   "section": "body",
   "type": "single",
   "q": {
    "en": "when do you usually wake up?",
    "de": "wann wachst du meistens auf?",
    "fr": "à quelle heure te réveilles-tu d'habitude ?",
    "es": "¿a qué hora sueles despertarte?",
    "ar": "متى تستيقظ عادةً؟",
    "ru": "когда ты обычно просыпаешься?"
   },
   "options": [
    {
     "v": "lt5",
     "l": {
      "en": "before 5:00",
      "de": "vor 5:00",
      "fr": "avant 5h",
      "es": "antes de las 5:00",
      "ar": "قبل الخامسة",
      "ru": "до 5:00"
     }
    },
    {
     "v": "5_6",
     "l": {
      "en": "5:00 to 6:00",
      "de": "5:00 bis 6:00",
      "fr": "5h à 6h",
      "es": "de 5:00 a 6:00",
      "ar": "من الخامسة إلى السادسة",
      "ru": "5:00–6:00"
     }
    },
    {
     "v": "6_7",
     "l": {
      "en": "6:00 to 7:00",
      "de": "6:00 bis 7:00",
      "fr": "6h à 7h",
      "es": "de 6:00 a 7:00",
      "ar": "من السادسة إلى السابعة",
      "ru": "6:00–7:00"
     }
    },
    {
     "v": "7_8",
     "l": {
      "en": "7:00 to 8:00",
      "de": "7:00 bis 8:00",
      "fr": "7h à 8h",
      "es": "de 7:00 a 8:00",
      "ar": "من السابعة إلى الثامنة",
      "ru": "7:00–8:00"
     }
    },
    {
     "v": "gt8",
     "l": {
      "en": "after 8:00",
      "de": "nach 8:00",
      "fr": "après 8h",
      "es": "después de las 8:00",
      "ar": "بعد الثامنة",
      "ru": "после 8:00"
     }
    },
    {
     "v": "irregular",
     "l": {
      "en": "it changes a lot",
      "de": "das ändert sich stark",
      "fr": "ça change beaucoup",
      "es": "cambia mucho",
      "ar": "يتغير كثيرًا",
      "ru": "сильно меняется"
     }
    }
   ]
  },
  {
   "id": "sleep",
   "section": "body",
   "type": "single",
   "q": {
    "en": "how many hours do you really sleep?",
    "de": "wie viele stunden schläfst du wirklich?",
    "fr": "combien d'heures dors-tu vraiment ?",
    "es": "¿cuántas horas duermes de verdad?",
    "ar": "كم ساعة تنام فعلًا؟",
    "ru": "сколько часов ты реально спишь?"
   },
   "options": [
    {
     "v": "lt5",
     "l": {
      "en": "under 5",
      "de": "unter 5",
      "fr": "moins de 5",
      "es": "menos de 5",
      "ar": "أقل من 5",
      "ru": "меньше 5"
     }
    },
    {
     "v": "5_6",
     "l": {
      "en": "5 to 6",
      "de": "5 bis 6",
      "fr": "5 à 6",
      "es": "5 a 6",
      "ar": "5 إلى 6",
      "ru": "5–6"
     }
    },
    {
     "v": "6_7",
     "l": {
      "en": "6 to 7",
      "de": "6 bis 7",
      "fr": "6 à 7",
      "es": "6 a 7",
      "ar": "6 إلى 7",
      "ru": "6–7"
     }
    },
    {
     "v": "7_8",
     "l": {
      "en": "7 to 8",
      "de": "7 bis 8",
      "fr": "7 à 8",
      "es": "7 a 8",
      "ar": "7 إلى 8",
      "ru": "7–8"
     }
    },
    {
     "v": "gt8",
     "l": {
      "en": "more than 8",
      "de": "mehr als 8",
      "fr": "plus de 8",
      "es": "más de 8",
      "ar": "أكثر من 8",
      "ru": "больше 8"
     }
    }
   ]
  },
  {
   "id": "training",
   "section": "body",
   "type": "single",
   "q": {
    "en": "how often do you train in a normal week?",
    "de": "wie oft trainierst du in einer normalen woche?",
    "fr": "combien de fois t'entraînes-tu par semaine normale ?",
    "es": "¿cuántas veces entrenas en una semana normal?",
    "ar": "كم مرة تتدرب في أسبوع عادي؟",
    "ru": "как часто ты тренируешься в обычную неделю?"
   },
   "options": [
    {
     "v": "none",
     "l": {
      "en": "not at all",
      "de": "gar nicht",
      "fr": "pas du tout",
      "es": "nada",
      "ar": "لا أتدرب",
      "ru": "совсем нет"
     }
    },
    {
     "v": "walk",
     "l": {
      "en": "only walking",
      "de": "nur gehen",
      "fr": "seulement de la marche",
      "es": "solo caminar",
      "ar": "المشي فقط",
      "ru": "только хожу пешком"
     }
    },
    {
     "v": "1_2",
     "l": {
      "en": "1 to 2 times",
      "de": "1 bis 2 mal",
      "fr": "1 à 2 fois",
      "es": "1 a 2 veces",
      "ar": "مرة إلى مرتين",
      "ru": "1–2 раза"
     }
    },
    {
     "v": "3_4",
     "l": {
      "en": "3 to 4 times",
      "de": "3 bis 4 mal",
      "fr": "3 à 4 fois",
      "es": "3 a 4 veces",
      "ar": "3 إلى 4 مرات",
      "ru": "3–4 раза"
     }
    },
    {
     "v": "5p",
     "l": {
      "en": "5 times or more",
      "de": "5 mal oder öfter",
      "fr": "5 fois ou plus",
      "es": "5 veces o más",
      "ar": "5 مرات أو أكثر",
      "ru": "5 раз и больше"
     }
    }
   ]
  },
  {
   "id": "pullups",
   "section": "body",
   "type": "single",
   "q": {
    "en": "how many clean pull-ups can you do?",
    "de": "wie viele saubere klimmzüge schaffst du?",
    "fr": "combien de tractions propres peux-tu faire ?",
    "es": "¿cuántas dominadas limpias puedes hacer?",
    "ar": "كم عقلة نظيفة تستطيع أن تؤدي؟",
    "ru": "сколько чистых подтягиваний ты делаешь?"
   },
   "options": [
    {
     "v": "0",
     "l": {
      "en": "none",
      "de": "keinen",
      "fr": "aucune",
      "es": "ninguna",
      "ar": "ولا واحدة",
      "ru": "ни одного"
     }
    },
    {
     "v": "1_5",
     "l": {
      "en": "1 to 5",
      "de": "1 bis 5",
      "fr": "1 à 5",
      "es": "1 a 5",
      "ar": "1 إلى 5",
      "ru": "1–5"
     }
    },
    {
     "v": "6_12",
     "l": {
      "en": "6 to 12",
      "de": "6 bis 12",
      "fr": "6 à 12",
      "es": "6 a 12",
      "ar": "6 إلى 12",
      "ru": "6–12"
     }
    },
    {
     "v": "gt12",
     "l": {
      "en": "more than 12",
      "de": "mehr als 12",
      "fr": "plus de 12",
      "es": "más de 12",
      "ar": "أكثر من 12",
      "ru": "больше 12"
     }
    },
    {
     "v": "unknown",
     "l": {
      "en": "i don't know",
      "de": "weiß ich nicht",
      "fr": "je ne sais pas",
      "es": "no lo sé",
      "ar": "لا أعرف",
      "ru": "не знаю"
     }
    }
   ]
  },
  {
   "id": "energy",
   "section": "body",
   "type": "single",
   "q": {
    "en": "your energy on a normal day",
    "de": "deine energie an einem normalen tag",
    "fr": "ton énergie un jour normal",
    "es": "tu energía en un día normal",
    "ar": "طاقتك في يوم عادي",
    "ru": "твоя энергия в обычный день"
   },
   "options": [
    {
     "v": "low",
     "l": {
      "en": "tired most of the time",
      "de": "fast immer müde",
      "fr": "fatigué presque tout le temps",
      "es": "cansado casi siempre",
      "ar": "متعب معظم الوقت",
      "ru": "почти всегда уставший"
     }
    },
    {
     "v": "dip",
     "l": {
      "en": "a slump in the afternoon",
      "de": "ein tief am nachmittag",
      "fr": "un coup de barre l'après-midi",
      "es": "un bajón por la tarde",
      "ar": "هبوط بعد الظهر",
      "ru": "спад после обеда"
     }
    },
    {
     "v": "swing",
     "l": {
      "en": "up and down, hard to predict",
      "de": "auf und ab, schwer vorherzusagen",
      "fr": "des hauts et des bas, difficile à prévoir",
      "es": "altibajos, difícil de prever",
      "ar": "صعود وهبوط، يصعب توقّعه",
      "ru": "то вверх, то вниз, трудно предсказать"
     }
    },
    {
     "v": "good",
     "l": {
      "en": "mostly good",
      "de": "meistens gut",
      "fr": "plutôt bonne",
      "es": "casi siempre buena",
      "ar": "جيدة في الغالب",
      "ru": "в основном хорошая"
     }
    },
    {
     "v": "high",
     "l": {
      "en": "high, all day",
      "de": "hoch, den ganzen tag",
      "fr": "haute, toute la journée",
      "es": "alta, todo el día",
      "ar": "عالية طوال اليوم",
      "ru": "высокая, весь день"
     }
    }
   ]
  },
  {
   "id": "belly",
   "section": "body",
   "type": "single",
   "q": {
    "en": "your belly, honestly",
    "de": "dein bauch, ehrlich",
    "fr": "ton ventre, honnêtement",
    "es": "tu barriga, con sinceridad",
    "ar": "بطنك، بصراحة",
    "ru": "твой живот, честно"
   },
   "options": [
    {
     "v": "flat",
     "l": {
      "en": "flat",
      "de": "flach",
      "fr": "plat",
      "es": "plana",
      "ar": "مسطّح",
      "ru": "плоский"
     }
    },
    {
     "v": "little",
     "l": {
      "en": "a little extra",
      "de": "ein bisschen zu viel",
      "fr": "un peu en trop",
      "es": "un poco de más",
      "ar": "زيادة بسيطة",
      "ru": "немного лишнего"
     }
    },
    {
     "v": "clear",
     "l": {
      "en": "clearly a belly",
      "de": "deutlicher bauch",
      "fr": "du ventre, clairement",
      "es": "barriga clara",
      "ar": "كرش واضح",
      "ru": "заметный живот"
     }
    },
    {
     "v": "large",
     "l": {
      "en": "a large belly",
      "de": "großer bauch",
      "fr": "un gros ventre",
      "es": "barriga grande",
      "ar": "كرش كبير",
      "ru": "большой живот"
     }
    }
   ]
  },
  {
   "id": "eating",
   "section": "body",
   "type": "single",
   "q": {
    "en": "how do you eat on a normal day?",
    "de": "wie isst du an einem normalen tag?",
    "fr": "comment manges-tu un jour normal ?",
    "es": "¿cómo comes en un día normal?",
    "ar": "كيف تأكل في يوم عادي؟",
    "ru": "как ты ешь в обычный день?"
   },
   "options": [
    {
     "v": "graze",
     "l": {
      "en": "whenever i feel like it",
      "de": "wann immer ich lust habe",
      "fr": "dès que j'en ai envie",
      "es": "cuando me apetece",
      "ar": "متى ما رغبت",
      "ru": "когда захочется"
     }
    },
    {
     "v": "meals_snacks",
     "l": {
      "en": "meals plus snacks",
      "de": "mahlzeiten plus snacks",
      "fr": "repas et grignotages",
      "es": "comidas y picoteo",
      "ar": "وجبات مع وجبات خفيفة",
      "ru": "приёмы пищи и перекусы"
     }
    },
    {
     "v": "meals",
     "l": {
      "en": "2 to 3 meals, no snacks",
      "de": "2 bis 3 mahlzeiten, keine snacks",
      "fr": "2 à 3 repas, sans grignotage",
      "es": "2 a 3 comidas, sin picoteo",
      "ar": "2 إلى 3 وجبات بدون وجبات خفيفة",
      "ru": "2–3 приёма пищи без перекусов"
     }
    },
    {
     "v": "window",
     "l": {
      "en": "a fixed eating window (e.g. 16:8)",
      "de": "ein festes essensfenster (z. b. 16:8)",
      "fr": "une fenêtre alimentaire fixe (ex. 16:8)",
      "es": "una ventana fija de comida (p. ej. 16:8)",
      "ar": "نافذة أكل ثابتة (مثل 16:8)",
      "ru": "фиксированное окно питания (напр. 16:8)"
     }
    },
    {
     "v": "omad",
     "l": {
      "en": "one meal a day",
      "de": "eine mahlzeit am tag",
      "fr": "un seul repas par jour",
      "es": "una sola comida al día",
      "ar": "وجبة واحدة في اليوم",
      "ru": "один приём пищи в день"
     }
    }
   ]
  },
  {
   "id": "daylight",
   "section": "body",
   "type": "single",
   "q": {
    "en": "time outside in daylight on a normal day",
    "de": "zeit draußen im tageslicht an einem normalen tag",
    "fr": "temps dehors à la lumière du jour, un jour normal",
    "es": "tiempo al aire libre con luz de día en un día normal",
    "ar": "الوقت في ضوء النهار خارج المنزل في يوم عادي",
    "ru": "время на улице при дневном свете в обычный день"
   },
   "options": [
    {
     "v": "lt15",
     "l": {
      "en": "under 15 minutes",
      "de": "unter 15 minuten",
      "fr": "moins de 15 minutes",
      "es": "menos de 15 minutos",
      "ar": "أقل من 15 دقيقة",
      "ru": "меньше 15 минут"
     }
    },
    {
     "v": "15_60",
     "l": {
      "en": "15 to 60 minutes",
      "de": "15 bis 60 minuten",
      "fr": "15 à 60 minutes",
      "es": "de 15 a 60 minutos",
      "ar": "من 15 إلى 60 دقيقة",
      "ru": "от 15 до 60 минут"
     }
    },
    {
     "v": "gt60",
     "l": {
      "en": "more than an hour",
      "de": "mehr als eine stunde",
      "fr": "plus d'une heure",
      "es": "más de una hora",
      "ar": "أكثر من ساعة",
      "ru": "больше часа"
     }
    }
   ]
  },
  {
   "id": "fasting",
   "section": "body",
   "type": "single",
   "q": {
    "en": "your experience with fasting",
    "de": "deine erfahrung mit fasten",
    "fr": "ton expérience du jeûne",
    "es": "tu experiencia con el ayuno",
    "ar": "خبرتك مع الصيام",
    "ru": "твой опыт голодания"
   },
   "options": [
    {
     "v": "never",
     "l": {
      "en": "never done it",
      "de": "noch nie gemacht",
      "fr": "jamais fait",
      "es": "nunca lo he hecho",
      "ar": "لم أجربه قط",
      "ru": "никогда"
     }
    },
    {
     "v": "tried",
     "l": {
      "en": "tried it a few times",
      "de": "ein paar mal probiert",
      "fr": "essayé quelques fois",
      "es": "lo he probado algunas veces",
      "ar": "جربته بضع مرات",
      "ru": "пробовал несколько раз"
     }
    },
    {
     "v": "regular",
     "l": {
      "en": "i fast regularly",
      "de": "ich faste regelmäßig",
      "fr": "je jeûne régulièrement",
      "es": "ayuno con regularidad",
      "ar": "أصوم بانتظام",
      "ru": "голодаю регулярно"
     }
    }
   ]
  },
  {
   "id": "cold",
   "section": "body",
   "type": "single",
   "q": {
    "en": "your experience with cold",
    "de": "deine erfahrung mit kälte",
    "fr": "ton expérience du froid",
    "es": "tu experiencia con el frío",
    "ar": "خبرتك مع البرد",
    "ru": "твой опыт с холодом"
   },
   "options": [
    {
     "v": "never",
     "l": {
      "en": "none",
      "de": "keine",
      "fr": "aucune",
      "es": "ninguna",
      "ar": "لا شيء",
      "ru": "никакого"
     }
    },
    {
     "v": "sometimes",
     "l": {
      "en": "a cold shower now and then",
      "de": "ab und zu kalt duschen",
      "fr": "une douche froide de temps en temps",
      "es": "una ducha fría de vez en cuando",
      "ar": "دش بارد من حين لآخر",
      "ru": "иногда холодный душ"
     }
    },
    {
     "v": "daily",
     "l": {
      "en": "cold shower every day",
      "de": "jeden tag kalt duschen",
      "fr": "douche froide tous les jours",
      "es": "ducha fría cada día",
      "ar": "دش بارد كل يوم",
      "ru": "холодный душ каждый день"
     }
    },
    {
     "v": "ice",
     "l": {
      "en": "ice baths or open water regularly",
      "de": "regelmäßig eisbad oder freiwasser",
      "fr": "bains glacés ou eau libre régulièrement",
      "es": "baños de hielo o aguas abiertas con regularidad",
      "ar": "حمامات ثلج أو مياه مفتوحة بانتظام",
      "ru": "регулярно ледяные ванны или открытая вода"
     }
    }
   ]
  },
  {
   "id": "breathwork",
   "section": "body",
   "type": "single",
   "q": {
    "en": "your experience with breathwork",
    "de": "deine erfahrung mit atemarbeit",
    "fr": "ton expérience du travail de respiration",
    "es": "tu experiencia con la respiración consciente",
    "ar": "خبرتك مع تمارين التنفس",
    "ru": "твой опыт дыхательных практик"
   },
   "options": [
    {
     "v": "none",
     "l": {
      "en": "none",
      "de": "keine",
      "fr": "aucune",
      "es": "ninguna",
      "ar": "لا شيء",
      "ru": "никакого"
     }
    },
    {
     "v": "some",
     "l": {
      "en": "a little",
      "de": "ein wenig",
      "fr": "un peu",
      "es": "un poco",
      "ar": "القليل",
      "ru": "немного"
     }
    },
    {
     "v": "regular",
     "l": {
      "en": "regularly, e.g. wim hof method",
      "de": "regelmäßig, z. b. wim hof methode",
      "fr": "régulièrement, ex. méthode wim hof",
      "es": "con regularidad, p. ej. método wim hof",
      "ar": "بانتظام، مثل طريقة ويم هوف",
      "ru": "регулярно, напр. метод вима хофа"
     }
    }
   ]
  },
  {
   "id": "alcohol",
   "section": "habits",
   "type": "single",
   "q": {
    "en": "alcohol",
    "de": "alkohol",
    "fr": "alcool",
    "es": "alcohol",
    "ar": "الكحول",
    "ru": "алкоголь"
   },
   "options": [
    {
     "v": "never",
     "l": {
      "en": "never",
      "de": "nie",
      "fr": "jamais",
      "es": "nunca",
      "ar": "أبدًا",
      "ru": "никогда"
     }
    },
    {
     "v": "monthly",
     "l": {
      "en": "once a month or less",
      "de": "einmal im monat oder seltener",
      "fr": "une fois par mois ou moins",
      "es": "una vez al mes o menos",
      "ar": "مرة في الشهر أو أقل",
      "ru": "раз в месяц или реже"
     }
    },
    {
     "v": "weekly",
     "l": {
      "en": "weekly",
      "de": "wöchentlich",
      "fr": "chaque semaine",
      "es": "cada semana",
      "ar": "أسبوعيًا",
      "ru": "каждую неделю"
     }
    },
    {
     "v": "several",
     "l": {
      "en": "several times a week",
      "de": "mehrmals pro woche",
      "fr": "plusieurs fois par semaine",
      "es": "varias veces por semana",
      "ar": "عدة مرات في الأسبوع",
      "ru": "несколько раз в неделю"
     }
    },
    {
     "v": "daily",
     "l": {
      "en": "daily",
      "de": "täglich",
      "fr": "tous les jours",
      "es": "a diario",
      "ar": "يوميًا",
      "ru": "ежедневно"
     }
    }
   ]
  },
  {
   "id": "nicotine",
   "section": "habits",
   "type": "single",
   "q": {
    "en": "nicotine (cigarettes, vapes, snus)",
    "de": "nikotin (zigaretten, vapes, snus)",
    "fr": "nicotine (cigarettes, vapes, snus)",
    "es": "nicotina (cigarrillos, vapeo, snus)",
    "ar": "النيكوتين (سجائر، فيب، سنوس)",
    "ru": "никотин (сигареты, вейп, снюс)"
   },
   "options": [
    {
     "v": "no",
     "l": {
      "en": "no",
      "de": "nein",
      "fr": "non",
      "es": "no",
      "ar": "لا",
      "ru": "нет"
     }
    },
    {
     "v": "sometimes",
     "l": {
      "en": "sometimes",
      "de": "manchmal",
      "fr": "parfois",
      "es": "a veces",
      "ar": "أحيانًا",
      "ru": "иногда"
     }
    },
    {
     "v": "daily",
     "l": {
      "en": "daily",
      "de": "täglich",
      "fr": "tous les jours",
      "es": "a diario",
      "ar": "يوميًا",
      "ru": "ежедневно"
     }
    }
   ]
  },
  {
   "id": "porn",
   "section": "habits",
   "type": "single",
   "q": {
    "en": "pornography",
    "de": "pornografie",
    "fr": "pornographie",
    "es": "pornografía",
    "ar": "الإباحية",
    "ru": "порнография"
   },
   "options": [
    {
     "v": "never",
     "l": {
      "en": "never",
      "de": "nie",
      "fr": "jamais",
      "es": "nunca",
      "ar": "أبدًا",
      "ru": "никогда"
     }
    },
    {
     "v": "monthly",
     "l": {
      "en": "once a month or less",
      "de": "einmal im monat oder seltener",
      "fr": "une fois par mois ou moins",
      "es": "una vez al mes o menos",
      "ar": "مرة في الشهر أو أقل",
      "ru": "раз в месяц или реже"
     }
    },
    {
     "v": "weekly",
     "l": {
      "en": "weekly",
      "de": "wöchentlich",
      "fr": "chaque semaine",
      "es": "cada semana",
      "ar": "أسبوعيًا",
      "ru": "каждую неделю"
     }
    },
    {
     "v": "several",
     "l": {
      "en": "several times a week",
      "de": "mehrmals pro woche",
      "fr": "plusieurs fois par semaine",
      "es": "varias veces por semana",
      "ar": "عدة مرات في الأسبوع",
      "ru": "несколько раз в неделю"
     }
    },
    {
     "v": "daily",
     "l": {
      "en": "daily",
      "de": "täglich",
      "fr": "tous les jours",
      "es": "a diario",
      "ar": "يوميًا",
      "ru": "ежедневно"
     }
    }
   ]
  },
  {
   "id": "morning",
   "section": "habits",
   "type": "single",
   "optional": true,
   "q": {
    "en": "morning erections, in a normal week",
    "de": "morgenerektionen in einer normalen woche",
    "fr": "érections matinales, sur une semaine normale",
    "es": "erecciones matutinas, en una semana normal",
    "ar": "الانتصاب الصباحي في أسبوع عادي",
    "ru": "утренняя эрекция в обычную неделю"
   },
   "options": [
    {
     "v": "most",
     "l": {
      "en": "most mornings",
      "de": "an den meisten morgen",
      "fr": "la plupart des matins",
      "es": "la mayoría de las mañanas",
      "ar": "معظم الصباحات",
      "ru": "почти каждое утро"
     }
    },
    {
     "v": "some",
     "l": {
      "en": "some mornings",
      "de": "an manchen morgen",
      "fr": "certains matins",
      "es": "algunas mañanas",
      "ar": "بعض الصباحات",
      "ru": "иногда"
     }
    },
    {
     "v": "rare",
     "l": {
      "en": "rarely or never",
      "de": "selten oder nie",
      "fr": "rarement ou jamais",
      "es": "rara vez o nunca",
      "ar": "نادرًا أو أبدًا",
      "ru": "редко или никогда"
     }
    },
    {
     "v": "unknown",
     "l": {
      "en": "i don't pay attention to it",
      "de": "achte ich nicht drauf",
      "fr": "je n'y fais pas attention",
      "es": "no me fijo",
      "ar": "لا أنتبه لذلك",
      "ru": "не обращаю внимания"
     }
    }
   ]
  },
  {
   "id": "control",
   "section": "habits",
   "type": "single",
   "optional": true,
   "q": {
    "en": "during sex, do you decide when you come?",
    "de": "beim sex: entscheidest du, wann du kommst?",
    "fr": "pendant le sexe, est-ce toi qui décides quand tu jouis ?",
    "es": "en el sexo, ¿decides tú cuándo llegas al orgasmo?",
    "ar": "أثناء الجماع، هل تقرر أنت متى تقذف؟",
    "ru": "во время секса ты сам решаешь, когда кончить?"
   },
   "options": [
    {
     "v": "yes",
     "l": {
      "en": "mostly yes",
      "de": "meistens ja",
      "fr": "la plupart du temps",
      "es": "casi siempre",
      "ar": "غالبًا نعم",
      "ru": "чаще всего да"
     }
    },
    {
     "v": "sometimes",
     "l": {
      "en": "sometimes",
      "de": "manchmal",
      "fr": "parfois",
      "es": "a veces",
      "ar": "أحيانًا",
      "ru": "иногда"
     }
    },
    {
     "v": "rarely",
     "l": {
      "en": "rarely, it comes too early",
      "de": "selten, es kommt zu früh",
      "fr": "rarement, ça vient trop tôt",
      "es": "pocas veces, llega demasiado pronto",
      "ar": "نادرًا، يأتي مبكرًا جدًا",
      "ru": "редко, всё происходит слишком быстро"
     }
    },
    {
     "v": "none",
     "l": {
      "en": "no sex at the moment",
      "de": "gerade kein sex",
      "fr": "pas de sexe en ce moment",
      "es": "ahora mismo no tengo sexo",
      "ar": "لا علاقة جنسية حاليًا",
      "ru": "сейчас секса нет"
     }
    }
   ]
  },
  {
   "id": "libido",
   "section": "habits",
   "type": "single",
   "optional": true,
   "q": {
    "en": "your desire for sex right now",
    "de": "deine lust auf sex gerade",
    "fr": "ton désir sexuel en ce moment",
    "es": "tu deseo sexual ahora mismo",
    "ar": "رغبتك الجنسية حاليًا",
    "ru": "твоё сексуальное желание сейчас"
   },
   "options": [
    {
     "v": "strong",
     "l": {
      "en": "strong",
      "de": "stark",
      "fr": "fort",
      "es": "fuerte",
      "ar": "قوية",
      "ru": "сильное"
     }
    },
    {
     "v": "normal",
     "l": {
      "en": "normal",
      "de": "normal",
      "fr": "normal",
      "es": "normal",
      "ar": "عادية",
      "ru": "обычное"
     }
    },
    {
     "v": "low",
     "l": {
      "en": "low",
      "de": "gering",
      "fr": "faible",
      "es": "bajo",
      "ar": "ضعيفة",
      "ru": "слабое"
     }
    },
    {
     "v": "gone",
     "l": {
      "en": "almost gone",
      "de": "fast weg",
      "fr": "presque disparu",
      "es": "casi desaparecido",
      "ar": "شبه معدومة",
      "ru": "почти пропало"
     }
    }
   ]
  },
  {
   "id": "phone_morning",
   "section": "habits",
   "type": "single",
   "q": {
    "en": "your phone in the first hour after waking",
    "de": "dein handy in der ersten stunde nach dem aufwachen",
    "fr": "ton téléphone dans la première heure après le réveil",
    "es": "tu móvil en la primera hora después de despertar",
    "ar": "هاتفك في الساعة الأولى بعد الاستيقاظ",
    "ru": "твой телефон в первый час после пробуждения"
   },
   "options": [
    {
     "v": "no",
     "l": {
      "en": "i don't touch it",
      "de": "ich fasse es nicht an",
      "fr": "je n'y touche pas",
      "es": "no lo toco",
      "ar": "لا ألمسه",
      "ru": "не трогаю"
     }
    },
    {
     "v": "sometimes",
     "l": {
      "en": "sometimes",
      "de": "manchmal",
      "fr": "parfois",
      "es": "a veces",
      "ar": "أحيانًا",
      "ru": "иногда"
     }
    },
    {
     "v": "always",
     "l": {
      "en": "within minutes of waking",
      "de": "wenige minuten nach dem aufwachen",
      "fr": "quelques minutes après le réveil",
      "es": "a los pocos minutos de despertar",
      "ar": "خلال دقائق من الاستيقاظ",
      "ru": "через несколько минут после пробуждения"
     }
    }
   ]
  },
  {
   "id": "screen",
   "section": "habits",
   "type": "single",
   "q": {
    "en": "screen time in your free time, per day",
    "de": "bildschirmzeit in deiner freizeit, pro tag",
    "fr": "temps d'écran sur ton temps libre, par jour",
    "es": "tiempo de pantalla en tu tiempo libre, al día",
    "ar": "وقت الشاشة في وقت فراغك يوميًا",
    "ru": "экранное время в свободное время, в день"
   },
   "options": [
    {
     "v": "lt1",
     "l": {
      "en": "under 1 hour",
      "de": "unter 1 stunde",
      "fr": "moins d'1 heure",
      "es": "menos de 1 hora",
      "ar": "أقل من ساعة",
      "ru": "меньше 1 часа"
     }
    },
    {
     "v": "1_2",
     "l": {
      "en": "1 to 2 hours",
      "de": "1 bis 2 stunden",
      "fr": "1 à 2 heures",
      "es": "1 a 2 horas",
      "ar": "ساعة إلى ساعتين",
      "ru": "1–2 часа"
     }
    },
    {
     "v": "2_4",
     "l": {
      "en": "2 to 4 hours",
      "de": "2 bis 4 stunden",
      "fr": "2 à 4 heures",
      "es": "2 a 4 horas",
      "ar": "ساعتان إلى 4 ساعات",
      "ru": "2–4 часа"
     }
    },
    {
     "v": "gt4",
     "l": {
      "en": "more than 4 hours",
      "de": "mehr als 4 stunden",
      "fr": "plus de 4 heures",
      "es": "más de 4 horas",
      "ar": "أكثر من 4 ساعات",
      "ru": "больше 4 часов"
     }
    }
   ]
  },
  {
   "id": "conditions",
   "section": "health",
   "type": "multi",
   "q": {
    "en": "does any of this apply to you?",
    "de": "trifft etwas davon auf dich zu?",
    "fr": "l'un de ces points te concerne-t-il ?",
    "es": "¿te aplica algo de esto?",
    "ar": "هل ينطبق عليك أي مما يلي؟",
    "ru": "относится ли к тебе что-то из этого?"
   },
   "required": true,
   "exclusive": "none",
   "options": [
    {
     "v": "heart",
     "l": {
      "en": "heart disease or heart rhythm problems",
      "de": "herzerkrankung oder herzrhythmusstörungen",
      "fr": "maladie cardiaque ou troubles du rythme",
      "es": "enfermedad cardíaca o arritmias",
      "ar": "مرض قلبي أو اضطراب في نظم القلب",
      "ru": "болезнь сердца или нарушения ритма"
     }
    },
    {
     "v": "bp",
     "l": {
      "en": "high blood pressure",
      "de": "bluthochdruck",
      "fr": "hypertension",
      "es": "presión arterial alta",
      "ar": "ارتفاع ضغط الدم",
      "ru": "высокое давление"
     }
    },
    {
     "v": "epilepsy",
     "l": {
      "en": "epilepsy or fainting",
      "de": "epilepsie oder ohnmachtsanfälle",
      "fr": "épilepsie ou évanouissements",
      "es": "epilepsia o desmayos",
      "ar": "صرع أو إغماء",
      "ru": "эпилепсия или обмороки"
     }
    },
    {
     "v": "diabetes",
     "l": {
      "en": "diabetes or blood sugar medication",
      "de": "diabetes oder medikamente für den blutzucker",
      "fr": "diabète ou médicaments pour la glycémie",
      "es": "diabetes o medicación para el azúcar",
      "ar": "سكري أو أدوية للسكر",
      "ru": "диабет или препараты от сахара"
     }
    },
    {
     "v": "eating_disorder",
     "l": {
      "en": "an eating disorder, now or in the past",
      "de": "eine essstörung, jetzt oder früher",
      "fr": "un trouble alimentaire, actuel ou passé",
      "es": "un trastorno alimentario, ahora o antes",
      "ar": "اضطراب في الأكل، حاليًا أو سابقًا",
      "ru": "расстройство пищевого поведения, сейчас или раньше"
     }
    },
    {
     "v": "acute",
     "l": {
      "en": "recent surgery, injury or acute illness",
      "de": "kürzliche op, verletzung oder akute erkrankung",
      "fr": "opération récente, blessure ou maladie aiguë",
      "es": "cirugía reciente, lesión o enfermedad aguda",
      "ar": "جراحة حديثة أو إصابة أو مرض حاد",
      "ru": "недавняя операция, травма или острая болезнь"
     }
    },
    {
     "v": "circulation",
     "l": {
      "en": "raynaud's or circulation problems",
      "de": "raynaud oder durchblutungsstörungen",
      "fr": "raynaud ou troubles circulatoires",
      "es": "raynaud o problemas de circulación",
      "ar": "متلازمة رينو أو مشاكل في الدورة الدموية",
      "ru": "синдром рейно или проблемы с кровообращением"
     }
    },
    {
     "v": "treatment",
     "l": {
      "en": "in medical treatment for something else",
      "de": "in ärztlicher behandlung wegen etwas anderem",
      "fr": "suivi médical pour autre chose",
      "es": "en tratamiento médico por otra cosa",
      "ar": "تحت علاج طبي لأمر آخر",
      "ru": "лечусь у врача от чего-то другого"
     }
    },
    {
     "v": "none",
     "l": {
      "en": "none of these",
      "de": "nichts davon",
      "fr": "rien de tout cela",
      "es": "nada de esto",
      "ar": "لا شيء مما سبق",
      "ru": "ничего из этого"
     }
    }
   ]
  },
  {
   "id": "medication",
   "section": "health",
   "type": "single",
   "q": {
    "en": "do you take medication regularly?",
    "de": "nimmst du regelmäßig medikamente?",
    "fr": "prends-tu des médicaments régulièrement ?",
    "es": "¿tomas medicación con regularidad?",
    "ar": "هل تتناول أدوية بانتظام؟",
    "ru": "принимаешь ли ты регулярно лекарства?"
   },
   "required": true,
   "options": [
    {
     "v": "no",
     "l": {
      "en": "no",
      "de": "nein",
      "fr": "non",
      "es": "no",
      "ar": "لا",
      "ru": "нет"
     }
    },
    {
     "v": "yes",
     "l": {
      "en": "yes",
      "de": "ja",
      "fr": "oui",
      "es": "sí",
      "ar": "نعم",
      "ru": "да"
     }
    }
   ]
  },
  {
   "id": "inner",
   "section": "health",
   "type": "single",
   "q": {
    "en": "how are you doing inside right now?",
    "de": "wie geht es dir innerlich gerade?",
    "fr": "comment vas-tu intérieurement en ce moment ?",
    "es": "¿cómo estás por dentro ahora mismo?",
    "ar": "كيف حالك من الداخل الآن؟",
    "ru": "как ты сейчас внутри?"
   },
   "required": true,
   "options": [
    {
     "v": "stable",
     "l": {
      "en": "stable",
      "de": "stabil",
      "fr": "stable",
      "es": "estable",
      "ar": "مستقر",
      "ru": "стабильно"
     }
    },
    {
     "v": "pressure",
     "l": {
      "en": "under pressure, but i manage",
      "de": "unter druck, aber ich komme klar",
      "fr": "sous pression, mais je gère",
      "es": "bajo presión, pero me las arreglo",
      "ar": "تحت ضغط لكنني أتدبر أمري",
      "ru": "под давлением, но справляюсь"
     }
    },
    {
     "v": "heavy",
     "l": {
      "en": "heavy, most days are a struggle",
      "de": "schwer, die meisten tage sind ein kampf",
      "fr": "lourd, la plupart des jours sont un combat",
      "es": "pesado, casi todos los días son una lucha",
      "ar": "ثقيل، معظم الأيام صراع",
      "ru": "тяжело, большинство дней — борьба"
     }
    },
    {
     "v": "crisis",
     "l": {
      "en": "i am in a crisis",
      "de": "ich bin in einer krise",
      "fr": "je suis en crise",
      "es": "estoy en crisis",
      "ar": "أنا في أزمة",
      "ru": "я в кризисе"
     }
    }
   ]
  },
  {
   "id": "p0_1",
   "section": "p",
   "type": "scale",
   "module": "p0",
   "polarity": 1,
   "q": {
    "de": "wenn sich sexuelle energie aufstaut, landet sie meistens bei porno oder schneller selbstbefriedigung?",
    "en": "when sexual energy builds up, does it usually end in porn or quick masturbation?",
    "fr": "quand ton énergie sexuelle monte, est-ce qu'elle finit le plus souvent dans le porno ou une masturbation rapide ?",
    "es": "cuando tu energía sexual se acumula, ¿suele terminar en porno o en una masturbación rápida?",
    "ar": "عندما تتراكم طاقتك الجنسية، هل تنتهي غالبًا في الأفلام الإباحية أو في عادة سرية سريعة؟",
    "ru": "когда накапливается сексуальная энергия, она обычно уходит в порно или быструю мастурбацию?"
   },
   "reads": {
    "yes": "His sexual energy leaves as quick relief instead of power: porn or masturbation is likely his default answer to stress, boredom or loneliness. He has not yet felt what this energy does when he holds it and directs it.",
    "no": "He already treats sexual energy as something to direct, not just to dump, which shows real control at the foundation. Cross-check with his porn frequency: a no next to weekly or daily porn means he does not see the pattern yet."
   },
   "traits": [
    {
     "trait": "dopamine_balance",
     "w": -0.8
    },
    {
     "trait": "impulse_control",
     "w": -0.7
    },
    {
     "trait": "connection",
     "w": -0.4
    }
   ]
  },
  {
   "id": "p0_2",
   "section": "p",
   "type": "scale",
   "module": "p0",
   "polarity": -1,
   "q": {
    "de": "hast du deinen beckenboden schon einmal gezielt trainiert?",
    "en": "have you ever trained your pelvic floor on purpose?",
    "fr": "as-tu déjà entraîné ton plancher pelvien de façon ciblée ?",
    "es": "¿alguna vez has entrenado tu suelo pélvico de forma consciente?",
    "ar": "هل سبق أن درّبت عضلات قاع الحوض عن قصد؟",
    "ru": "ты когда-нибудь целенаправленно тренировал мышцы тазового дна?"
   },
   "reads": {
    "yes": "He has gone below the surface and trained a muscle most men do not even know exists; he is curious and willing to experiment with his body. If he noticed changes, he already has his own proof that the body answers training.",
    "no": "The foundation of sexual control is untrained ground, as it was for paul until 28: not a failure, just never learned. His start is simply finding and feeling the muscle, nothing more."
   },
   "traits": [
    {
     "trait": "body_connection",
     "w": 0.8
    },
    {
     "trait": "self_awareness",
     "w": 0.5
    },
    {
     "trait": "openness",
     "w": 0.4
    }
   ]
  },
  {
   "id": "p1_1",
   "section": "p",
   "type": "scale",
   "module": "p1",
   "polarity": 1,
   "q": {
    "de": "bleibst du abends oft länger wach, als du eigentlich willst?",
    "en": "do you often stay up later than you actually want to?",
    "fr": "est-ce que tu restes souvent éveillé le soir plus tard que tu ne le voudrais vraiment ?",
    "es": "¿sueles quedarte despierto por la noche más tarde de lo que realmente quieres?",
    "ar": "هل تسهر كثيرًا أطول مما تريد فعلًا؟",
    "ru": "ты часто засиживаешься вечером дольше, чем на самом деле хочешь?"
   },
   "reads": {
    "yes": "He does not yet know how good real sleep can feel, he is not disciplined enough yet, and he has not understood that at the start he has to force himself. The knowing is there, the doing is missing; his lever is the same wake-up time every day, not an earlier bedtime.",
    "no": "His evenings end when they should: either he already values sleep or a structure (work, training, family) holds him. Sleep is likely a strength to build on, not his first construction site."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": -0.8
    },
    {
     "trait": "self_trust",
     "w": -0.4
    },
    {
     "trait": "dopamine_balance",
     "w": -0.3
    }
   ]
  },
  {
   "id": "p1_2",
   "section": "p",
   "type": "scale",
   "module": "p1",
   "polarity": -1,
   "q": {
    "de": "legst du handy und bildschirme mindestens 30 minuten vor dem schlafen weg?",
    "en": "do you put your phone and screens away at least 30 minutes before sleep?",
    "fr": "est-ce que tu laisses ton téléphone et les écrans de côté au moins 30 minutes avant de dormir ?",
    "es": "¿dejas el móvil y las pantallas al menos 30 minutos antes de dormir?",
    "ar": "هل تبتعد عن هاتفك والشاشات قبل النوم بثلاثين دقيقة على الأقل؟",
    "ru": "ты откладываешь телефон и экраны хотя бы за 30 минут до сна?"
   },
   "reads": {
    "yes": "He already draws a line between his day and his sleep; the phone does not own his last minutes, so his evenings are not run by stimulation. That is a basic discipline the rest of the sleep work can stand on.",
    "no": "The screen is probably the last thing he sees at night and likely the first in the morning (compare phone_morning); his brain gets input right up to the moment it should switch off. For him sleep is lost in the evening, not only at bedtime."
   },
   "traits": [
    {
     "trait": "dopamine_balance",
     "w": 0.7
    },
    {
     "trait": "discipline",
     "w": 0.5
    },
    {
     "trait": "impulse_control",
     "w": 0.4
    }
   ]
  },
  {
   "id": "p2_1",
   "section": "p",
   "type": "scale",
   "module": "p2",
   "polarity": 1,
   "q": {
    "de": "gibt es wochen, in denen du kein einziges mal so trainierst, dass du ins schwitzen kommst?",
    "en": "are there weeks in which you do not once train hard enough to sweat?",
    "fr": "y a-t-il des semaines où tu ne t'entraînes pas une seule fois au point de transpirer ?",
    "es": "¿hay semanas en las que no entrenas ni una sola vez hasta sudar?",
    "ar": "هل تمرّ عليك أسابيع لا تتمرّن فيها ولو مرة واحدة حتى تتعرّق؟",
    "ru": "бывают ли недели, когда ты ни разу не тренируешься так, чтобы вспотеть?"
   },
   "reads": {
    "yes": "Movement is optional in his life, not part of who he is; his body only gets challenged when mood or circumstances allow. He needs the ladder at its very lowest, one push-up, until a day without movement starts to feel wrong.",
    "no": "His body gets challenged at least once a week, so a base exists. Whether it is a ritual or occasional effort shows in p2_2 and in his pull-up count."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": -0.7
    },
    {
     "trait": "body_connection",
     "w": -0.6
    }
   ]
  },
  {
   "id": "p2_2",
   "section": "p",
   "type": "scale",
   "module": "p2",
   "polarity": -1,
   "q": {
    "de": "trainierst du auch an tagen, an denen du keine lust hast?",
    "en": "do you train even on days when you do not feel like it?",
    "fr": "est-ce que tu t'entraînes aussi les jours où tu n'en as pas envie ?",
    "es": "¿entrenas también los días en que no tienes ganas?",
    "ar": "هل تتمرّن حتى في الأيام التي لا تكون فيها راغبًا في ذلك؟",
    "ru": "ты тренируешься и в те дни, когда нет желания?"
   },
   "reads": {
    "yes": "He trains on decision, not on mood: the core of the ladder is already in place, and he has proof that he keeps promises to himself. The blueprint should build on what he already does, not replace it.",
    "no": "His training lives on motivation, so it comes and goes and the habit is not anchored. For him the rule 'same small load every day for 30 days, no progression' matters more than any program."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": 0.9
    },
    {
     "trait": "self_trust",
     "w": 0.5
    },
    {
     "trait": "body_connection",
     "w": 0.3
    }
   ]
  },
  {
   "id": "p3_1",
   "section": "p",
   "type": "scale",
   "module": "p3",
   "polarity": 1,
   "q": {
    "de": "isst du oft, obwohl du keinen hunger hast, zum beispiel aus stress oder als belohnung?",
    "en": "do you often eat when you are not hungry, for example out of stress or as a reward?",
    "fr": "est-ce que tu manges souvent sans avoir faim, par exemple par stress ou pour te récompenser ?",
    "es": "¿comes a menudo sin tener hambre, por ejemplo por estrés o como premio?",
    "ar": "هل تأكل كثيرًا وأنت لست جائعًا، مثلًا بسبب التوتر أو كمكافأة لنفسك؟",
    "ru": "ты часто ешь, когда не голоден, например от стресса или в награду себе?"
   },
   "reads": {
    "yes": "Food is one of his regulators: stress or emptiness gets answered with eating, the learned loop stress, eat, calm, repeat. It is an emotion pattern showing up on the plate, and the same pattern likely runs through phone or porn (compare u1_1).",
    "no": "He mostly eats from hunger, so food is not his escape valve and his eating can be changed through structure (window, quality) rather than emotions. If stress has to go somewhere, look at phone, porn or nicotine instead."
   },
   "traits": [
    {
     "trait": "stress_regulation",
     "w": -0.7
    },
    {
     "trait": "impulse_control",
     "w": -0.6
    },
    {
     "trait": "dopamine_balance",
     "w": -0.3
    }
   ]
  },
  {
   "id": "p3_2",
   "section": "p",
   "type": "scale",
   "module": "p3",
   "polarity": -1,
   "q": {
    "de": "hörst du meistens auf zu essen, wenn du satt bist, auch wenn es noch gut schmeckt?",
    "en": "do you usually stop eating when you're full, even if it still tastes good?",
    "fr": "est-ce que tu t’arrêtes généralement de manger quand tu es rassasié, même si c’est encore bon ?",
    "es": "¿sueles dejar de comer cuando ya estás lleno, aunque todavía esté rico?",
    "ar": "هل تتوقف عادةً عن الأكل عندما تشبع، حتى لو كان الطعام ما زال لذيذاً؟",
    "ru": "ты обычно перестаёшь есть, когда сыт, даже если ещё вкусно?"
   },
   "reads": {
    "yes": "He trusts his body's 'enough' over the taste in his mouth; around food his impulse control works and he can feel his own signals. A good base for a shorter eating window or one meal a day.",
    "no": "Taste wins over the body's 'enough' signal: the impulse decides in the moment and his body's voice is quiet. The work starts with noticing the moment he is full, not with a diet."
   },
   "traits": [
    {
     "trait": "impulse_control",
     "w": 0.8
    },
    {
     "trait": "body_connection",
     "w": 0.6
    },
    {
     "trait": "discipline",
     "w": 0.3
    }
   ]
  },
  {
   "id": "p4_1",
   "section": "p",
   "type": "scale",
   "module": "p4",
   "polarity": -1,
   "q": {
    "de": "merkst du in stressigen momenten, wie du gerade atmest?",
    "en": "in stressful moments, do you notice how you are breathing?",
    "fr": "dans les moments de stress, remarques-tu comment tu respires ?",
    "es": "en los momentos de estrés, ¿notas cómo estás respirando?",
    "ar": "في لحظات التوتر، هل تنتبه إلى طريقة تنفّسك؟",
    "ru": "в моменты стресса ты замечаешь, как ты дышишь?"
   },
   "reads": {
    "yes": "He feels the link between his state and his body: under stress he notices his breath change. That awareness is the first step; whether he already uses breath as a lever shows in p4_2.",
    "no": "Stress runs through his body unnoticed; he likely breathes shallow for long stretches and only meets stress as thoughts or mood. His first step is just noticing his breath, before any technique."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": 0.7
    },
    {
     "trait": "body_connection",
     "w": 0.7
    },
    {
     "trait": "stress_regulation",
     "w": 0.2
    }
   ]
  },
  {
   "id": "p4_2",
   "section": "p",
   "type": "scale",
   "module": "p4",
   "polarity": -1,
   "q": {
    "de": "nutzt du deinen atem schon bewusst, um dich zu beruhigen oder wacher zu werden?",
    "en": "do you already use your breath on purpose to calm down or wake yourself up?",
    "fr": "est-ce que tu utilises déjà ta respiration consciemment pour te calmer ou te réveiller ?",
    "es": "¿ya usas tu respiración de forma consciente para calmarte o despejarte?",
    "ar": "هل تستخدم تنفسك بوعي فعلاً لتهدّئ نفسك أو لتنشّطها؟",
    "ru": "ты уже сознательно используешь дыхание, чтобы успокоиться или взбодриться?"
   },
   "reads": {
    "yes": "He already has a tool to change his state from the inside, without phone, food or substances. He is ready to go deeper (wim hof, longer exhale) and use breath as a natural high.",
    "no": "He has no inner tool to shift his state yet, so he probably reaches for outside things (phone, food, coffee, nicotine) to calm down or get going. Breath is the easiest lever to hand him: five slow breaths before a stressful moment."
   },
   "traits": [
    {
     "trait": "stress_regulation",
     "w": 0.8
    },
    {
     "trait": "body_connection",
     "w": 0.5
    },
    {
     "trait": "self_awareness",
     "w": 0.3
    }
   ]
  },
  {
   "id": "p5_1",
   "section": "p",
   "type": "scale",
   "module": "p5",
   "polarity": 1,
   "q": {
    "de": "nimmst du oft den bequemen weg, obwohl du weißt, dass dich der unbequeme stärker machen würde?",
    "en": "do you often take the easy way, even though you know the hard one would make you stronger?",
    "fr": "prends-tu souvent le chemin le plus facile, alors que tu sais que le plus dur te rendrait plus fort ?",
    "es": "¿sueles elegir el camino cómodo, aunque sabes que el incómodo te haría más fuerte?",
    "ar": "هل تختار غالبًا الطريق المريح، مع أنك تعرف أن الطريق الصعب سيجعلك أقوى؟",
    "ru": "ты часто выбираешь лёгкий путь, хотя знаешь, что трудный сделал бы тебя сильнее?"
   },
   "reads": {
    "yes": "Comfort decides for him in the moment, even against what he knows; the same gap between knowing and doing as in sleep. Voluntary discomfort is exactly his missing training: each small 'did it anyway' builds proof that he can do what he decided.",
    "no": "He can stay with discomfort when it serves him and already chooses long-term gain over short-term ease. A solid base for cold exposure and harder training."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": -0.7
    },
    {
     "trait": "self_trust",
     "w": -0.4
    },
    {
     "trait": "stress_regulation",
     "w": -0.4
    }
   ]
  },
  {
   "id": "p5_2",
   "section": "p",
   "type": "scale",
   "module": "p5",
   "polarity": -1,
   "q": {
    "de": "wenn du dir etwas unbequemes vornimmst, zum beispiel kalt zu duschen: tust du es, ohne lange mit dir zu verhandeln?",
    "en": "when you plan something uncomfortable, a cold shower for example: do you do it without long negotiating with yourself?",
    "fr": "quand tu prévois quelque chose d'inconfortable, une douche froide par exemple : est-ce que tu le fais sans négocier longtemps avec toi-même ?",
    "es": "cuando te propones algo incómodo, por ejemplo una ducha fría: ¿lo haces sin negociar mucho contigo mismo?",
    "ar": "عندما تنوي فعل شيء غير مريح، مثل دش بارد: هل تفعله من دون أن تجادل نفسك طويلًا؟",
    "ru": "когда ты собираешься сделать что-то неприятное, например принять холодный душ: ты делаешь это, не торгуясь долго с собой?"
   },
   "reads": {
    "yes": "He decides and goes; his inner negotiator is weak, so he trusts his decisions more than his mood. Cold can become his daily proof and his natural high.",
    "no": "Before every discomfort there is a long inner debate, and the debate usually wins: his feeling in the moment still outvotes his decision. Start so low he barely notices it, and let the cold become the place where he trains doing what he decided."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": 0.7
    },
    {
     "trait": "self_trust",
     "w": 0.6
    },
    {
     "trait": "stress_regulation",
     "w": 0.4
    }
   ]
  },
  {
   "id": "u0_1",
   "section": "u",
   "type": "scale",
   "module": "u0",
   "polarity": 1,
   "q": {
    "de": "reagierst du oft schon, bevor du merkst, was du fühlst?",
    "en": "do you often react before you notice what you are feeling?",
    "fr": "réagis-tu souvent avant même de remarquer ce que tu ressens ?",
    "es": "¿sueles reaccionar antes de darte cuenta de lo que sientes?",
    "ar": "هل تتصرّف غالبًا قبل أن تنتبه لما تشعر به؟",
    "ru": "ты часто реагируешь раньше, чем замечаешь, что чувствуешь?"
   },
   "reads": {
    "yes": "He lives on autopilot: the reaction fires before he has even seen the feeling, so the space between stimulus and response does not exist for him yet. Until he builds that pause, every other mind module (impulses, dopamine, emotions) stays theory for him.",
    "no": "He usually catches the feeling before he acts, so he already has the space between stimulus and response. That is the foundation of the mind pillar; his work is to use the pause to choose, not only to notice."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": -0.9
    },
    {
     "trait": "impulse_control",
     "w": -0.6
    },
    {
     "trait": "stress_regulation",
     "w": -0.4
    }
   ]
  },
  {
   "id": "u0_2",
   "section": "u",
   "type": "scale",
   "module": "u0",
   "polarity": -1,
   "q": {
    "de": "hast du schon einmal einen drang bemerkt, etwa zum handy zu greifen, und ihm bewusst nicht nachgegeben?",
    "en": "have you ever noticed an urge, like reaching for your phone, and on purpose not followed it?",
    "fr": "as-tu déjà remarqué une envie, comme celle de prendre ton téléphone, et choisi exprès de ne pas y céder ?",
    "es": "¿alguna vez has notado un impulso, como coger el móvil, y a propósito no le has hecho caso?",
    "ar": "هل سبق أن لاحظت رغبة، مثل أن تمدّ يدك إلى هاتفك، ثم اخترت عن قصد ألا تستجيب لها؟",
    "ru": "ты когда-нибудь замечал порыв, например взять телефон, и сознательно ему не поддавался?"
   },
   "reads": {
    "yes": "He has already felt that an impulse is a signal, not a command, and he knows the moment of choice from his own experience. He has proof he can find the gap; now it needs daily repetition in small things until it becomes his normal.",
    "no": "He has never stood between the urge and the action on purpose, so he probably still treats every impulse as an order. He does not yet know that the wave often passes if he waits, or that he can watch his thoughts instead of being them."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": 0.8
    },
    {
     "trait": "impulse_control",
     "w": 0.8
    },
    {
     "trait": "discipline",
     "w": 0.3
    }
   ]
  },
  {
   "id": "u1_1",
   "section": "u",
   "type": "scale",
   "module": "u1",
   "polarity": 1,
   "q": {
    "de": "greifst du bei stress automatisch zu etwas, das schnell beruhigt: handy, essen, porno, nikotin?",
    "en": "under stress, do you automatically reach for something that calms you fast: phone, food, porn, nicotine?",
    "fr": "sous stress, est-ce que tu attrapes automatiquement quelque chose qui calme vite : téléphone, nourriture, porno, nicotine ?",
    "es": "con estrés, ¿recurres automáticamente a algo que calma rápido: móvil, comida, porno, nicotina?",
    "ar": "تحت التوتر، هل تمدّ يدك تلقائيًا إلى شيء يهدّئك بسرعة: الهاتف، الطعام، الإباحية، النيكوتين؟",
    "ru": "в стрессе ты на автомате хватаешься за то, что быстро успокаивает: телефон, еду, порно, никотин?"
   },
   "reads": {
    "yes": "Stress goes straight into a quick fix: feeling, impulse and action run so fast that he never registers what he actually felt. The phone, food, porn or nicotine is not the real need, it numbs a feeling he has not looked at, and his focus and sexual energy leak out through it.",
    "no": "Under stress he still has some space before he reaches for something, so the quick fix does not run him. His next step is to use that space to name the feeling underneath the stress."
   },
   "traits": [
    {
     "trait": "impulse_control",
     "w": -0.9
    },
    {
     "trait": "stress_regulation",
     "w": -0.7
    },
    {
     "trait": "dopamine_balance",
     "w": -0.5
    },
    {
     "trait": "self_awareness",
     "w": -0.3
    }
   ]
  },
  {
   "id": "u1_2",
   "section": "u",
   "type": "scale",
   "module": "u1",
   "polarity": -1,
   "q": {
    "de": "merkst du, wenn hinter deinem hunger oder deiner lust eigentlich langeweile oder einsamkeit steckt?",
    "en": "do you notice when boredom or loneliness is hiding behind your hunger or desire?",
    "fr": "remarques-tu quand c'est en fait l'ennui ou la solitude qui se cache derrière ta faim ou ton envie ?",
    "es": "¿notas cuando detrás de tu hambre o tus ganas en realidad hay aburrimiento o soledad?",
    "ar": "هل تنتبه عندما يكون وراء جوعك أو رغبتك في الحقيقة ملل أو وحدة؟",
    "ru": "замечаешь ли ты, когда за твоим голодом или желанием на самом деле стоят скука или одиночество?"
   },
   "reads": {
    "yes": "He can read the signal behind a craving and separate real need from habit or emotion wearing the mask of need. With food, porn and women his own impulses can hardly fool him, and he can deal with the real feeling instead of feeding it.",
    "no": "Every pull feels like real hunger or real desire to him, so he feeds boredom and loneliness with food, screens or porn. He has not learned yet to ask what kind of hunger this is before acting, so the feeling underneath stays unmet and comes back."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": 0.9
    },
    {
     "trait": "impulse_control",
     "w": 0.5
    },
    {
     "trait": "body_connection",
     "w": 0.4
    }
   ]
  },
  {
   "id": "u2_1",
   "section": "u",
   "type": "scale",
   "module": "u2",
   "polarity": 1,
   "q": {
    "de": "fühlt sich ein normaler tag ohne handy, videos oder porno für dich leer oder langweilig an?",
    "en": "does a normal day without phone, videos or porn feel empty or boring to you?",
    "fr": "une journée normale sans téléphone, vidéos ni porno te paraît-elle vide ou ennuyeuse ?",
    "es": "¿un día normal sin móvil, vídeos ni porno te parece vacío o aburrido?",
    "ar": "هل يبدو لك يوم عادي بلا هاتف ولا فيديوهات ولا إباحية فارغًا أو مملًا؟",
    "ru": "обычный день без телефона, видео и порно кажется тебе пустым или скучным?"
   },
   "reads": {
    "yes": "His reward system is tuned to artificial spikes, so normal life feels flat and he needs more and more input to feel normal. That is not a weak character but a hijacked system, and he has not yet gone through a reset and its flat phase to find out what real rewards feel like again.",
    "no": "Real things like work, training and quiet still give him enough reward, so his dopamine system is not badly hijacked. That is a strong base: he can build drive and focus on natural rewards instead of fighting a flat baseline."
   },
   "traits": [
    {
     "trait": "dopamine_balance",
     "w": -0.9
    },
    {
     "trait": "discipline",
     "w": -0.4
    },
    {
     "trait": "direction",
     "w": -0.3
    }
   ]
  },
  {
   "id": "u2_2",
   "section": "u",
   "type": "scale",
   "module": "u2",
   "polarity": 1,
   "q": {
    "de": "hast du eine gewohnheit, die dir schnell einen kick gibt, dich danach aber leerer zurücklässt?",
    "en": "do you have a habit that gives you a quick kick but leaves you emptier afterwards?",
    "fr": "as-tu une habitude qui te donne un plaisir rapide, mais te laisse plus vide ensuite ?",
    "es": "¿tienes algún hábito que te da un subidón rápido, pero después te deja más vacío?",
    "ar": "هل لديك عادة تمنحك متعة سريعة، لكنها تتركك بعدها تشعر بفراغ أكبر؟",
    "ru": "есть ли у тебя привычка, которая даёт быстрый кайф, но потом оставляет тебя ещё более пустым?"
   },
   "reads": {
    "yes": "He knows exactly which habit drains him, which shows honesty, but knowing has not been enough to stop it. The habit owns his wanting; he needs a reset with the trigger removed, not more insight.",
    "no": "Either his habits really are clean, or he does not yet see how the quick kick costs him later. Read it against his porn, phone and screen answers: if those are high, this no is a blind spot, not freedom."
   },
   "traits": [
    {
     "trait": "dopamine_balance",
     "w": -0.7
    },
    {
     "trait": "impulse_control",
     "w": -0.5
    },
    {
     "trait": "self_awareness",
     "w": 0.3
    }
   ]
  },
  {
   "id": "u3_1",
   "section": "u",
   "type": "scale",
   "module": "u3",
   "polarity": 1,
   "q": {
    "de": "springst du automatisch zwischen apps, gedanken oder fantasien hin und her, wenn du eigentlich bei einer sache bleiben willst?",
    "en": "do you automatically jump between apps, thoughts or fantasies when you actually want to stay on one thing?",
    "fr": "sautes-tu automatiquement d’une appli, d’une pensée ou d’un fantasme à l’autre, alors que tu veux rester sur une seule chose ?",
    "es": "¿saltas automáticamente entre apps, pensamientos o fantasías cuando en realidad quieres centrarte en una sola cosa?",
    "ar": "هل تقفز تلقائياً بين التطبيقات أو الأفكار أو الخيالات، بينما تريد في الحقيقة أن تبقى على شيء واحد؟",
    "ru": "ты на автомате прыгаешь между приложениями, мыслями или фантазиями, когда на самом деле хочешь заниматься чем-то одним?"
   },
   "reads": {
    "yes": "His attention belongs to whatever pulls hardest; the apps are built for exactly that and he has no defence yet. If his mind also drifts into fantasy, his sexual energy is leaking into his head, and the same scattered attention likely shows up in his work and with a woman.",
    "no": "He can keep his attention where he decides, which is rare today and a real advantage. His focus is a resource he can direct into deep work and into being really present with people."
   },
   "traits": [
    {
     "trait": "impulse_control",
     "w": -0.6
    },
    {
     "trait": "dopamine_balance",
     "w": -0.5
    },
    {
     "trait": "discipline",
     "w": -0.4
    }
   ]
  },
  {
   "id": "u3_2",
   "section": "u",
   "type": "scale",
   "module": "u3",
   "polarity": -1,
   "q": {
    "de": "bleibst du an einem normalen tag mindestens einmal 30 minuten bei einer sache, ohne aufs handy zu schauen?",
    "en": "on a normal day, do you stay with one thing for 30 minutes at least once, without checking your phone?",
    "fr": "un jour normal, restes-tu au moins une fois 30 minutes sur une seule chose sans regarder ton téléphone ?",
    "es": "en un día normal, ¿te quedas al menos una vez 30 minutos con una sola cosa sin mirar el móvil?",
    "ar": "في يوم عادي، هل تبقى مرة واحدة على الأقل 30 دقيقة على شيء واحد دون أن تنظر إلى هاتفك؟",
    "ru": "в обычный день ты хотя бы раз занимаешься одним делом 30 минут, не заглядывая в телефон?"
   },
   "reads": {
    "yes": "His attention is not fully captured by the phone, so deep work is within reach for him. The next level is a fixed daily focus block, with the phone out of the room by default instead of relying on willpower.",
    "no": "The phone breaks in within minutes, so the slot machine is training his attention, not him. He is fighting a device built to win with willpower alone, and has not yet used his environment (phone in another room) to make focus easy."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": 0.8
    },
    {
     "trait": "impulse_control",
     "w": 0.6
    },
    {
     "trait": "dopamine_balance",
     "w": 0.5
    }
   ]
  },
  {
   "id": "u4_1",
   "section": "u",
   "type": "scale",
   "module": "u4",
   "polarity": 1,
   "q": {
    "de": "ändern sich deine meinung und dein verhalten stark, je nachdem, mit wem du zusammen bist?",
    "en": "do your opinions and your behaviour change a lot depending on who you are with?",
    "fr": "tes opinions et ton comportement changent-ils beaucoup selon les personnes avec qui tu es ?",
    "es": "¿tus opiniones y tu forma de actuar cambian mucho según con quién estés?",
    "ar": "هل تتغيّر آراؤك وتصرّفاتك كثيرًا بحسب الأشخاص الذين تكون معهم؟",
    "ru": "сильно ли меняются твои мнения и поведение в зависимости от того, с кем ты находишься?"
   },
   "reads": {
    "yes": "He follows the social impulse to belong and be approved, and becomes a different man depending on who is in the room. He has no clear 'who i am, what i do and what i do not do' yet, so his opinions, boundaries and decisions are borrowed from others.",
    "no": "He stays recognisably himself with different people, so there is a core identity to build on. The open question is whether that identity was chosen by him or is still an old story others wrote for him."
   },
   "traits": [
    {
     "trait": "self_trust",
     "w": -0.8
    },
    {
     "trait": "direction",
     "w": -0.5
    },
    {
     "trait": "ego_freedom",
     "w": -0.4
    }
   ]
  },
  {
   "id": "u4_2",
   "section": "u",
   "type": "scale",
   "module": "u4",
   "polarity": -1,
   "q": {
    "de": "handelst du heute schon wie der mann, der du werden willst?",
    "en": "do you already act today like the man you want to become?",
    "fr": "agis-tu déjà aujourd’hui comme l’homme que tu veux devenir ?",
    "es": "¿ya actúas hoy como el hombre en el que quieres convertirte?",
    "ar": "هل تتصرّف اليوم بالفعل مثل الرجل الذي تريد أن تصبحه؟",
    "ru": "ведёшь ли ты себя уже сегодня как мужчина, которым хочешь стать?"
   },
   "reads": {
    "yes": "His actions already match the man he wants to be, so his identity rests on evidence, not just intention. Every repeated action is a vote for that identity; his job is to keep voting and raise the standard.",
    "no": "There is a gap between the man he talks about and the man he lives, so his values are still wishes, not what really drives his decisions. He is probably trying to change behaviour without changing who he believes he is, and needs tiny daily actions that prove the new identity."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": 0.7
    },
    {
     "trait": "self_trust",
     "w": 0.7
    },
    {
     "trait": "direction",
     "w": 0.6
    }
   ]
  },
  {
   "id": "u5_1",
   "section": "u",
   "type": "scale",
   "module": "u5",
   "polarity": 1,
   "q": {
    "de": "gehst du bei kritik sofort in die verteidigung?",
    "en": "when you are criticised, do you go straight into defence?",
    "fr": "face à une critique, passes-tu tout de suite en mode défense ?",
    "es": "cuando te critican, ¿te pones a la defensiva enseguida?",
    "ar": "عندما تُنتقد، هل تتخذ موقف الدفاع فورًا؟",
    "ru": "когда тебя критикуют, ты сразу уходишь в оборону?"
   },
   "reads": {
    "yes": "Criticism hits his identity, not just his behaviour, so he defends instead of learning, and his ego is easily touched. He reacts to his own interpretation of the words; the stoic pause between being criticised and feeling attacked is not there yet.",
    "no": "He can take criticism and check what is true in it, which shows a stable sense of self. For him criticism is information he can use, a sign he already has some of the stoic calm this module is about."
   },
   "traits": [
    {
     "trait": "stress_regulation",
     "w": -0.7
    },
    {
     "trait": "ego_freedom",
     "w": -0.7
    },
    {
     "trait": "openness",
     "w": -0.6
    }
   ]
  },
  {
   "id": "u5_2",
   "section": "u",
   "type": "scale",
   "module": "u5",
   "polarity": -1,
   "q": {
    "de": "bleibst du im streit ruhig und sagst trotzdem ehrlich, was du denkst?",
    "en": "in an argument, do you stay calm and still say honestly what you think?",
    "fr": "dans une dispute, restes-tu calme tout en disant honnêtement ce que tu penses ?",
    "es": "en una discusión, ¿mantienes la calma y aun así dices con honestidad lo que piensas?",
    "ar": "أثناء الخلاف، هل تبقى هادئًا وتقول مع ذلك بصدق ما تفكّر فيه؟",
    "ru": "в ссоре ты остаёшься спокойным и всё равно честно говоришь, что думаешь?"
   },
   "reads": {
    "yes": "He can say the true thing without aggression or avoidance, which is rare and makes him trusted and respected. He feels the emotion fully and still responds instead of reacting.",
    "no": "In conflict he shuts down, plays along or explodes, so the emotion runs him and not the other way round. Avoided truth turns into resentment and lost respect, from others and from himself; he needs to train honest conflict in small, low-stakes moments first."
   },
   "traits": [
    {
     "trait": "stress_regulation",
     "w": 0.8
    },
    {
     "trait": "connection",
     "w": 0.6
    },
    {
     "trait": "self_trust",
     "w": 0.4
    },
    {
     "trait": "ego_freedom",
     "w": 0.3
    }
   ]
  },
  {
   "id": "r0_1",
   "section": "r",
   "type": "scale",
   "module": "r0",
   "polarity": 1,
   "q": {
    "de": "siehst du die gründe dafür, wo du heute stehst, eher bei anderen, den umständen oder deiner vergangenheit als bei dir?",
    "en": "do you see the reasons for where you stand today more in other people, circumstances or your past than in yourself?",
    "fr": "vois-tu les raisons de là où tu en es aujourd'hui plutôt chez les autres, dans les circonstances ou ton passé qu'en toi-même ?",
    "es": "¿ves las razones de dónde estás hoy más en los demás, en las circunstancias o en tu pasado que en ti mismo?",
    "ar": "هل ترى أسباب ما وصلت إليه اليوم في الآخرين أو الظروف أو ماضيك أكثر مما تراها في نفسك؟",
    "ru": "ты видишь причины того, где ты сейчас, скорее в других людях, обстоятельствах или своём прошлом, чем в себе?"
   },
   "reads": {
    "yes": "He still explains his situation from the outside: the cause sits with other people, circumstances or his past, so the solution seems to sit there too, and he waits for something to change before he does. He has not yet separated fault (who caused it) from responsibility (what he does now), and the energy that goes into explaining is missing for building.",
    "no": "He has largely stopped waiting for rescue and treats himself as the only variable he can change, even where others were at fault. That is the foundation the whole responsibility pillar stands on, so he can go straight to action."
   },
   "traits": [
    {
     "trait": "direction",
     "w": -0.6
    },
    {
     "trait": "self_trust",
     "w": -0.5
    },
    {
     "trait": "self_awareness",
     "w": -0.3
    }
   ]
  },
  {
   "id": "r0_2",
   "section": "r",
   "type": "scale",
   "module": "r0",
   "polarity": -1,
   "q": {
    "de": "wenn eine deiner entscheidungen schiefgeht, stehst du dazu, auch wenn es niemand merkt?",
    "en": "when one of your decisions goes wrong, do you own it, even if nobody would notice?",
    "fr": "quand une de tes décisions tourne mal, est-ce que tu l'assumes, même si personne ne le remarquerait ?",
    "es": "cuando una de tus decisiones sale mal, ¿la asumes aunque nadie se dé cuenta?",
    "ar": "عندما يفشل قرار اتخذته، هل تتحمّل مسؤوليته حتى لو لم يلاحظ أحد؟",
    "ru": "когда твоё решение оборачивается неудачей, берёшь ли ты ответственность на себя, даже если никто не заметит?"
   },
   "reads": {
    "yes": "He owns his mistakes without an audience: he does not hide them, push them onto others or quietly forget them. His accountability does not depend on being watched, which is the base of real self-trust.",
    "no": "His ownership still depends on being seen: when nobody notices, the mistake gets hidden, explained away or blamed on something else. The private man and the public man are not yet the same man, and every hidden mistake quietly costs him self-trust."
   },
   "traits": [
    {
     "trait": "self_trust",
     "w": 0.6
    },
    {
     "trait": "discipline",
     "w": 0.4
    },
    {
     "trait": "ego_freedom",
     "w": 0.3
    }
   ]
  },
  {
   "id": "r1_1",
   "section": "r",
   "type": "scale",
   "module": "r1",
   "polarity": 1,
   "q": {
    "de": "brichst du oft versprechen, die du nur dir selbst gegeben hast?",
    "en": "do you often break promises you made only to yourself?",
    "fr": "romps-tu souvent des promesses que tu n'as faites qu'à toi-même ?",
    "es": "¿rompes a menudo promesas que solo te has hecho a ti mismo?",
    "ar": "هل تُخلف كثيراً وعوداً لم تقطعها إلا لنفسك؟",
    "ru": "часто ли ты нарушаешь обещания, которые давал только самому себе?"
   },
   "reads": {
    "yes": "He is teaching himself that his own word is worthless: every broken private promise is a withdrawal from his self-trust, which is why he can feel unsure, flat and unmotivated without knowing why. He probably promises himself too much at once instead of starting so small that he cannot fail.",
    "no": "He keeps the promises nobody else hears, so his self-trust account is growing and his decisions carry less doubt. Either he already follows through, or he simply promises himself little; his open answers show which."
   },
   "traits": [
    {
     "trait": "self_trust",
     "w": -0.7
    },
    {
     "trait": "discipline",
     "w": -0.6
    },
    {
     "trait": "impulse_control",
     "w": -0.3
    }
   ]
  },
  {
   "id": "r1_2",
   "section": "r",
   "type": "scale",
   "module": "r1",
   "polarity": -1,
   "q": {
    "de": "nimmst du ein versprechen an dich selbst so ernst wie eins an einen guten freund?",
    "en": "do you take a promise to yourself as seriously as one to a good friend?",
    "fr": "prends-tu une promesse faite à toi-même aussi au sérieux qu'une promesse faite à un bon ami ?",
    "es": "¿te tomas una promesa a ti mismo tan en serio como una promesa a un buen amigo?",
    "ar": "هل تأخذ وعدك لنفسك بنفس الجدية التي تأخذ بها وعدك لصديق عزيز؟",
    "ru": "относишься ли ты к обещанию самому себе так же серьёзно, как к обещанию хорошему другу?"
   },
   "reads": {
    "yes": "His word counts the same whether anyone else is involved or not, so the private man and the public man are close to being one man. That is real self-respect and the ground of a quiet, stable confidence.",
    "no": "He shows up for others but lets himself down: his reliability is driven by not wanting to disappoint someone, not by respect for himself. He ranks himself last, and a man who does not keep his word to himself slowly stops trusting his own decisions."
   },
   "traits": [
    {
     "trait": "self_trust",
     "w": 0.7
    },
    {
     "trait": "discipline",
     "w": 0.4
    }
   ]
  },
  {
   "id": "r2_1",
   "section": "r",
   "type": "scale",
   "module": "r2",
   "polarity": 1,
   "q": {
    "de": "wenn dir jemand sehr wichtig ist, sagst du dann ja, obwohl du nein meinst?",
    "en": "when someone matters a lot to you, do you say yes even when you mean no?",
    "fr": "quand quelqu'un compte beaucoup pour toi, dis-tu oui même quand tu penses non ?",
    "es": "cuando alguien te importa mucho, ¿dices que sí aunque quieras decir que no?",
    "ar": "عندما يكون شخص ما مهماً جداً بالنسبة لك، هل تقول نعم وأنت تقصد لا؟",
    "ru": "когда человек очень важен для тебя, говоришь ли ты «да», хотя на самом деле хочешь сказать «нет»?"
   },
   "reads": {
    "yes": "His lines only hold while nothing is at stake: attraction, fear of losing the person or of being alone overrides them in the moment. He swallows things, builds silent resentment, and the person he bends for slowly loses respect for him.",
    "no": "He can hold a calm no even with people he loves or wants, which means his values were decided before the pressure came. That makes him respected instead of walked on, and it protects him from talking himself past red flags."
   },
   "traits": [
    {
     "trait": "self_trust",
     "w": -0.6
    },
    {
     "trait": "direction",
     "w": -0.4
    },
    {
     "trait": "connection",
     "w": -0.3
    }
   ]
  },
  {
   "id": "r2_2",
   "section": "r",
   "type": "scale",
   "module": "r2",
   "polarity": -1,
   "q": {
    "de": "könntest du sofort sagen, was für dich nicht verhandelbar ist?",
    "en": "could you say right away what is non-negotiable for you?",
    "fr": "pourrais-tu dire tout de suite ce qui, pour toi, n'est pas négociable ?",
    "es": "¿podrías decir ahora mismo qué es innegociable para ti?",
    "ar": "هل تستطيع أن تقول فورًا ما الذي لا تقبل التفاوض عليه؟",
    "ru": "смог бы ты сразу сказать, что для тебя не обсуждается?"
   },
   "reads": {
    "yes": "His values are decided in advance, so under pressure (attraction, money, approval, a heated moment) he has a reference point instead of negotiating. He knows where he ends and others begin, which makes him easy to trust and hard to push around.",
    "no": "He negotiates his values in real time, and under pressure the mind justifies whatever ends the discomfort fastest. Because his no-gos have no name yet, red flags and his own lines get crossed before he even notices."
   },
   "traits": [
    {
     "trait": "direction",
     "w": 0.6
    },
    {
     "trait": "self_trust",
     "w": 0.4
    },
    {
     "trait": "self_awareness",
     "w": 0.4
    }
   ]
  },
  {
   "id": "r3_1",
   "section": "r",
   "type": "scale",
   "module": "r3",
   "polarity": 1,
   "q": {
    "de": "wenn jemand, der dir nahesteht, schlecht drauf ist, bringt dich das schnell aus dem gleichgewicht?",
    "en": "when someone close to you is in a bad mood, does it quickly throw you off balance?",
    "fr": "quand quelqu'un de proche est de mauvaise humeur, est-ce que ça te déstabilise vite ?",
    "es": "cuando alguien cercano está de mal humor, ¿te desestabiliza enseguida?",
    "ar": "عندما يكون شخص قريب منك في مزاج سيئ، هل يُفقدك ذلك توازنك بسرعة؟",
    "ru": "когда у близкого человека плохое настроение, это быстро выбивает тебя из равновесия?"
   },
   "reads": {
    "yes": "His emotional anchor sits in other people: when someone close is cold, distant or upset, he becomes anxious, angry or needy, and they end up having to manage him. In a relationship that is the opposite of leadership, because the other person cannot relax while carrying his state as well as their own.",
    "no": "He stays steady while someone close to him struggles, which is the core of relationship leadership: caring, but not pulled under. Worth checking that it is real calm and not distance, because stable is not the same as cold."
   },
   "traits": [
    {
     "trait": "stress_regulation",
     "w": -0.6
    },
    {
     "trait": "self_trust",
     "w": -0.5
    }
   ]
  },
  {
   "id": "r3_2",
   "section": "r",
   "type": "scale",
   "module": "r3",
   "polarity": -1,
   "q": {
    "de": "bleibst du ruhig und zugewandt, wenn es in einer beziehung schwierig wird?",
    "en": "when things get hard in a relationship, do you stay calm and warm?",
    "fr": "restes-tu calme et bienveillant quand ça devient difficile dans une relation ?",
    "es": "¿te mantienes tranquilo y cercano cuando una relación se pone difícil?",
    "ar": "هل تبقى هادئًا وقريبًا عندما تصعب الأمور في العلاقة؟",
    "ru": "остаёшься ли ты спокойным и тёплым, когда в отношениях становится трудно?"
   },
   "reads": {
    "yes": "He holds the frame when it gets hard: warm and steady, not seeking approval, not chasing, not punishing with distance. He does not need the other person's approval to feel okay about himself, which is what lets a partner relax and lets attraction last.",
    "no": "Under pressure he falls into pleasing, chasing or going cold, and all three mean his stability still comes from the other person's behaviour, not from within. His partner then has to manage him, which slowly kills attraction and trust."
   },
   "traits": [
    {
     "trait": "stress_regulation",
     "w": 0.5
    },
    {
     "trait": "self_trust",
     "w": 0.5
    },
    {
     "trait": "connection",
     "w": 0.4
    }
   ]
  },
  {
   "id": "r4_1",
   "section": "r",
   "type": "scale",
   "module": "r4",
   "polarity": 1,
   "q": {
    "de": "gibst du dich vor anderen oft sicherer, als du dich wirklich fühlst?",
    "en": "do you often act more sure of yourself in front of others than you really feel?",
    "fr": "fais-tu souvent semblant d'être plus sûr de toi devant les autres que tu ne l'es vraiment ?",
    "es": "¿sueles aparentar ante los demás más seguridad de la que realmente sientes?",
    "ar": "هل تتظاهر غالباً أمام الآخرين بثقة أكبر مما تشعر به فعلاً؟",
    "ru": "часто ли ты при других держишься увереннее, чем чувствуешь себя на самом деле?"
   },
   "reads": {
    "yes": "There is a gap between the man he shows and the man he feels like: his confidence is performed, not built. People usually sense that gap, so it costs him trust, and the uncertainty underneath typically comes from too many broken small promises to himself.",
    "no": "What he shows and what he feels mostly match: either he is genuinely steady, or he lets his uncertainty show instead of hiding it. Both are honest, and no mask is eating his energy."
   },
   "traits": [
    {
     "trait": "self_trust",
     "w": -0.6
    },
    {
     "trait": "ego_freedom",
     "w": -0.4
    },
    {
     "trait": "connection",
     "w": -0.2
    }
   ]
  },
  {
   "id": "r4_2",
   "section": "r",
   "type": "scale",
   "module": "r4",
   "polarity": -1,
   "q": {
    "de": "tust du, was du sagst, auch bei kleinen zusagen wie pünktlich sein oder zurückrufen?",
    "en": "do you do what you say, even with small commitments like being on time or calling back?",
    "fr": "fais-tu ce que tu dis, même pour de petits engagements comme être à l'heure ou rappeler ?",
    "es": "¿haces lo que dices, incluso en compromisos pequeños como llegar puntual o devolver una llamada?",
    "ar": "هل تفعل ما تقوله، حتى في الالتزامات الصغيرة مثل أن تكون في الموعد أو أن تعاود الاتصال؟",
    "ru": "ты делаешь то, что говоришь, даже в мелочах: прийти вовремя или перезвонить?"
   },
   "reads": {
    "yes": "His word works like currency: he does what he says in small things, over time, so people can organise around him and trust him with what matters. That is durable wealth, and the base for taking on bigger commitments.",
    "no": "His word has little value right now, to others and to himself, because small promises are not kept consistently. He may still be hoping for one big turnaround, when trust only comes back through small kept promises repeated over time."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": 0.7
    },
    {
     "trait": "self_trust",
     "w": 0.6
    },
    {
     "trait": "direction",
     "w": 0.3
    }
   ]
  },
  {
   "id": "r5_1",
   "section": "r",
   "type": "scale",
   "module": "r5",
   "polarity": 1,
   "q": {
    "de": "weißt du oft nicht so richtig, wofür du das alles machst?",
    "en": "do you often not really know what you are doing all this for?",
    "fr": "t'arrive-t-il souvent de ne pas vraiment savoir pourquoi tu fais tout ça ?",
    "es": "¿a menudo no sabes muy bien para qué haces todo esto?",
    "ar": "هل يحدث كثيرًا ألا تعرف حقًا لماذا تفعل كل هذا؟",
    "ru": "часто ли ты толком не знаешь, ради чего всё это делаешь?"
   },
   "reads": {
    "yes": "He is living without a compass, so daily choices are made by the pull of the moment (comfort, phone, impulse) because nothing larger is pulling him. He is most likely still in the 'fuck around' part of the curve, and his motivation feels flat because no bigger why stands behind his days.",
    "no": "He has a direction bigger than the single day, which gives his choices a reference point and makes discipline easier to hold. His open answers show whether that direction is still about getting (money, status) or already about building something that outlasts him."
   },
   "traits": [
    {
     "trait": "direction",
     "w": -0.8
    },
    {
     "trait": "discipline",
     "w": -0.3
    }
   ]
  },
  {
   "id": "r5_2",
   "section": "r",
   "type": "scale",
   "module": "r5",
   "polarity": -1,
   "q": {
    "de": "fragst du dich bei wichtigen entscheidungen, ob du später stolz darauf zurückblicken wirst?",
    "en": "when you make an important decision, do you ask yourself whether you will look back on it with pride?",
    "fr": "avant une décision importante, te demandes-tu si tu en seras fier plus tard ?",
    "es": "antes de una decisión importante, ¿te preguntas si más adelante estarás orgulloso de ella?",
    "ar": "قبل القرارات المهمة، هل تسأل نفسك إن كنت ستنظر إليها لاحقاً بفخر؟",
    "ru": "перед важными решениями спрашиваешь ли ты себя, будешь ли потом гордиться ими?"
   },
   "reads": {
    "yes": "He already thinks beyond the moment: big decisions are checked against the man he wants to have been, not only against what feels good now. That long view is what lets him step out of the pull of an impulse, and it is where legacy begins.",
    "no": "His decisions are made from the present moment: what feels right, what is easy, what others expect. Short-term comfort keeps winning because nothing yet connects his daily choices to what he wants to leave behind."
   },
   "traits": [
    {
     "trait": "direction",
     "w": 0.7
    },
    {
     "trait": "impulse_control",
     "w": 0.4
    },
    {
     "trait": "self_awareness",
     "w": 0.3
    }
   ]
  },
  {
   "id": "e1_1",
   "section": "e",
   "type": "scale",
   "module": "e1",
   "polarity": 1,
   "q": {
    "de": "vergleichst du dich oft mit anderen männern, bei geld, körper oder frauen?",
    "en": "do you often compare yourself to other men when it comes to money, body or women?",
    "fr": "te compares-tu souvent à d'autres hommes, côté argent, physique ou femmes ?",
    "es": "¿te comparas mucho con otros hombres en dinero, físico o mujeres?",
    "ar": "هل تقارن نفسك كثيراً برجال آخرين في المال أو الجسد أو النساء؟",
    "ru": "часто ли ты сравниваешь себя с другими мужчинами: деньги, тело, женщины?"
   },
   "reads": {
    "yes": "His worth rides on other men's scoreboards: it rises and falls with their money, bodies and women, so he never fully owns it. That is the ego running him, and the energy he burns on comparing is missing on his own path.",
    "no": "Other men's money, bodies or women do not decide his worth, so the ego has less grip on him here. His energy can go into his own path instead of a race against everyone else."
   },
   "traits": [
    {
     "trait": "ego_freedom",
     "w": -0.9
    },
    {
     "trait": "self_trust",
     "w": -0.5
    },
    {
     "trait": "direction",
     "w": -0.3
    }
   ]
  },
  {
   "id": "e1_2",
   "section": "e",
   "type": "scale",
   "module": "e1",
   "polarity": -1,
   "q": {
    "de": "gibst du vor anderen zu, dass du falsch lagst, ohne ein „aber“ hinterherzuschieben?",
    "en": "do you admit in front of others that you were wrong, without adding a “but”?",
    "fr": "reconnais-tu devant les autres que tu avais tort, sans ajouter de « mais » ?",
    "es": "¿admites delante de otros que te equivocaste, sin añadir un «pero»?",
    "ar": "هل تعترف أمام الآخرين بأنك كنت مخطئًا، من دون أن تضيف «لكن»؟",
    "ru": "признаёшь ли ты при других, что был неправ, не добавляя «но»?"
   },
   "reads": {
    "yes": "He can let go of being right and of his image: a mistake is something he did, not who he is. That keeps the ego small, lets him learn fast, and makes his word worth more to the people around him.",
    "no": "His ego has to win and guard the image, so a mistake gets an excuse instead of a lesson. Whoever cannot say 'i was wrong' tends to repeat the mistake, and the people close to him feel the constant fight."
   },
   "traits": [
    {
     "trait": "ego_freedom",
     "w": 0.9
    },
    {
     "trait": "openness",
     "w": 0.6
    },
    {
     "trait": "self_trust",
     "w": 0.3
    }
   ]
  },
  {
   "id": "e2_1",
   "section": "e",
   "type": "scale",
   "module": "e2",
   "polarity": 1,
   "q": {
    "de": "fällt dir bei anderen das ego eher auf als bei dir selbst?",
    "en": "do you notice ego in other people more than in yourself?",
    "fr": "remarques-tu l'ego plus chez les autres que chez toi-même ?",
    "es": "¿notas el ego más en los demás que en ti mismo?",
    "ar": "هل تلاحظ الأنا عند الآخرين أكثر مما تلاحظها في نفسك؟",
    "ru": "замечаешь ли ты эго у других чаще, чем у себя?"
   },
   "reads": {
    "yes": "He knows ego as something other people have, the show-offs and know-it-alls, but has not yet named his own. That blind spot is where his ego works best, unseen and deciding for him; his first step is the definition: what is my ego, and where does it show up in me.",
    "no": "He looks at himself first and has started to see his own ego, not only other people's. For him ego is not a word to use against others, which makes this pillar workable right away."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": -0.8
    },
    {
     "trait": "ego_freedom",
     "w": -0.6
    },
    {
     "trait": "openness",
     "w": -0.3
    }
   ]
  },
  {
   "id": "e2_2",
   "section": "e",
   "type": "scale",
   "module": "e2",
   "polarity": -1,
   "q": {
    "de": "merkst du im moment selbst, wenn du nur recht haben oder gut dastehen willst?",
    "en": "do you notice in the moment when all you want is to be right or to look good?",
    "fr": "remarques-tu sur le moment quand tout ce que tu veux, c'est avoir raison ou faire bonne figure ?",
    "es": "¿notas en el momento cuando lo único que quieres es tener razón o quedar bien?",
    "ar": "هل تنتبه في اللحظة نفسها عندما يكون كل ما تريده أن تكون على حق أو أن تظهر بمظهر جيد؟",
    "ru": "замечаешь ли ты в моменте, когда тебе просто хочется быть правым или хорошо выглядеть?"
   },
   "reads": {
    "yes": "He can step back and see his ego as one voice, not as himself, so there is a gap between its reaction and his choice. That gap is the base for letting the ego go: you can only drop what you can see.",
    "no": "He and his ego are still one: its reactions feel like his character, 'that's just how i am'. Because he cannot tell when the ego is talking, it talks for him in arguments, with women and with money."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": 0.9
    },
    {
     "trait": "ego_freedom",
     "w": 0.7
    },
    {
     "trait": "impulse_control",
     "w": 0.3
    }
   ]
  },
  {
   "id": "ef_1",
   "section": "e",
   "type": "scale",
   "module": "ef",
   "polarity": 1,
   "q": {
    "de": "machst du bei geld, sex oder beziehungen immer wieder dieselben fehler?",
    "en": "do you keep making the same mistakes with money, sex or relationships?",
    "fr": "refais-tu sans cesse les mêmes erreurs avec l'argent, le sexe ou les relations ?",
    "es": "¿cometes una y otra vez los mismos errores con el dinero, el sexo o las relaciones?",
    "ar": "هل تكرر الأخطاء نفسها مرة بعد مرة في المال أو الجنس أو العلاقات؟",
    "ru": "повторяешь ли ты снова и снова одни и те же ошибки в деньгах, сексе или отношениях?"
   },
   "reads": {
    "yes": "He is in the 80% at the bottom of the curve, 'fuck around': he plays, loses and plays again the same way. The losses cost him but do not teach him, because he never stops to find out why; it is not bad luck, it is the missing find-out step.",
    "no": "Either he learns from his mistakes and is already climbing the curve, or he takes so few risks that there is little to learn from. Read it together with ef_2 to tell which."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": -0.6
    },
    {
     "trait": "openness",
     "w": -0.5
    },
    {
     "trait": "direction",
     "w": -0.3
    }
   ]
  },
  {
   "id": "ef_2",
   "section": "e",
   "type": "scale",
   "module": "ef",
   "polarity": -1,
   "q": {
    "de": "machst du nach einem rückschlag weiter, bis du herausfindest, was funktioniert?",
    "en": "after a setback, do you keep going until you find out what works?",
    "fr": "après un échec, continues-tu jusqu'à trouver ce qui marche ?",
    "es": "¿sigues adelante después de un revés hasta descubrir qué funciona?",
    "ar": "هل تواصل بعد الخسارة حتى تكتشف ما الذي ينجح؟",
    "ru": "продолжаешь ли ты после неудачи, пока не разберёшься, что работает?"
   },
   "reads": {
    "yes": "He goes through the losses instead of around them: a setback is a lesson to him, not a verdict, and his ego is small enough to take it. That is the rare way up the curve from fuck around to find out, and the men who walk it are the ones who end up creating.",
    "no": "A setback stops him or sends him to the next new thing, so he starts over again and again without ever finding out. He stays low on the curve, not for lack of talent but because his ego cannot bear losing long enough to learn."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": 0.7
    },
    {
     "trait": "openness",
     "w": 0.6
    },
    {
     "trait": "self_trust",
     "w": 0.4
    },
    {
     "trait": "ego_freedom",
     "w": 0.3
    }
   ]
  },
  {
   "id": "e5_1",
   "section": "e",
   "type": "scale",
   "module": "e5",
   "polarity": 1,
   "q": {
    "de": "dreht sich dein alltag gerade vor allem um deine eigenen ziele und bedürfnisse?",
    "en": "is your everyday life right now mostly about your own goals and needs?",
    "fr": "en ce moment, ton quotidien tourne-t-il surtout autour de tes propres objectifs et besoins ?",
    "es": "¿tu día a día gira ahora sobre todo en torno a tus propios objetivos y necesidades?",
    "ar": "هل تدور حياتك اليومية الآن في الغالب حول أهدافك واحتياجاتك أنت؟",
    "ru": "крутится ли твоя повседневная жизнь сейчас в основном вокруг твоих собственных целей и потребностей?"
   },
   "reads": {
    "yes": "Right now there is no roof over his life: he is the biggest thing in it, so the ego sits where something greater should be. When it gets hard, he has only himself as a reason to keep going, and that rarely carries a man through.",
    "no": "Something or someone in his life matters more than he does, a person, a task, a belief. That takes weight off the ego and gives him a reason to hold on when his own motivation runs out."
   },
   "traits": [
    {
     "trait": "ego_freedom",
     "w": -0.8
    },
    {
     "trait": "direction",
     "w": -0.5
    },
    {
     "trait": "connection",
     "w": -0.4
    }
   ]
  },
  {
   "id": "e5_2",
   "section": "e",
   "type": "scale",
   "module": "e5",
   "polarity": -1,
   "q": {
    "de": "fühlst du dich als teil von etwas, das größer ist als du, egal wie du es nennst?",
    "en": "do you feel part of something greater than you, whatever you call it?",
    "fr": "as-tu le sentiment de faire partie de quelque chose de plus grand que toi, peu importe le nom que tu lui donnes ?",
    "es": "¿te sientes parte de algo más grande que tú, lo llames como lo llames?",
    "ar": "هل تشعر أنك جزء من شيء أكبر منك، أياً كان الاسم الذي تعطيه له؟",
    "ru": "чувствуешь ли ты себя частью чего-то большего, чем ты, как бы ты это ни называл?"
   },
   "reads": {
    "yes": "He feels part of something greater than himself, whatever he calls it: the roof over his pillars is there. He is already facing the end boss of the ego pillar, the ego does not need to be the center, and he has something beyond himself to serve.",
    "no": "He does not feel part of anything bigger yet and carries everything on his own ego, with no roof over his pillars. The blueprint should help him find what he wants to serve, without telling him what to believe."
   },
   "traits": [
    {
     "trait": "ego_freedom",
     "w": 0.6
    },
    {
     "trait": "connection",
     "w": 0.6
    },
    {
     "trait": "direction",
     "w": 0.5
    }
   ]
  },
  {
   "id": "story",
   "section": "values",
   "type": "voice",
   "optional": true,
   "max": 2500,
   "q": {
    "en": "what has held you back so far? tell me about your life: what shaped you, what you are proud of, what keeps you awake at night. get everything off your chest, i am listening.",
    "de": "was hat dich bisher aufgehalten? erzähl mir von deinem leben: was dich geprägt hat, worauf du stolz bist, was dich nachts wach hält. sprich dir alles von der seele, ich höre dir zu.",
    "fr": "qu'est-ce qui t'a retenu jusqu'ici ? parle-moi de ta vie : ce qui t'a marqué, ce dont tu es fier, ce qui t'empêche de dormir. vide ton sac, je t'écoute.",
    "es": "¿qué te ha frenado hasta ahora? háblame de tu vida: lo que te marcó, de qué estás orgulloso, qué te quita el sueño. desahógate, te escucho.",
    "ar": "ما الذي أوقفك حتى الآن؟ احكِ لي عن حياتك: ما الذي صنعك، وما الذي تفخر به، وما الذي يبقيك مستيقظًا في الليل. أخرج كل ما في صدرك، أنا أسمعك.",
    "ru": "что тебя до сих пор останавливало? расскажи мне о своей жизни: что тебя сформировало, чем ты гордишься, что не даёт тебе спать по ночам. выговорись, я тебя слушаю."
   }
  },
  {
   "id": "meta_partner",
   "section": "values",
   "type": "scale",
   "q": {
    "de": "willst du mit einer frau etwas festes aufbauen, statt unverbindlich zu bleiben?",
    "en": "do you want to build something real with one woman instead of keeping it casual?",
    "fr": "veux-tu construire quelque chose de sérieux avec une seule femme, au lieu de rester sans engagement ?",
    "es": "¿quieres construir algo serio con una sola mujer, en vez de seguir sin compromiso?",
    "ar": "هل تريد أن تبني علاقة جادة مع امرأة واحدة، بدلاً من أن تبقى بلا التزام؟",
    "ru": "ты хочешь построить что-то серьёзное с одной женщиной, а не оставаться без обязательств?"
   },
   "showIf": {
    "relationship": [
     "single",
     "dating",
     "separated",
     "widowed"
    ]
   },
   "polarity": 1,
   "reads": {
    "yes": "He wants commitment, not only encounters. In relationships he is already heading where Paul says it counts long term: one woman, family, children. What stands between him and that woman is usually not finding the right one but becoming the steady, reliable man she can trust: body, word, principles, and seeing red flags early.",
    "no": "Right now he wants it light and open. That can be an honest phase, since encounters happen along the way. If he is separated, widowed or past his mid-30s, a no often hides fear of being tied down or hurt again. Read it next to relationship_goal and children before deciding which it is."
   },
   "traits": [
    {
     "trait": "connection",
     "w": 0.7
    },
    {
     "trait": "direction",
     "w": 0.6
    }
   ]
  },
  {
   "id": "meta_freedom",
   "section": "values",
   "type": "scale",
   "q": {
    "de": "sind dir freiheit und reisen gerade wichtiger, als eine familie zu gründen?",
    "en": "do freedom and travel matter more to you right now than starting a family?",
    "fr": "la liberté et les voyages comptent-ils plus pour toi en ce moment que fonder une famille ?",
    "es": "¿ahora mismo te importan más la libertad y viajar que formar una familia?",
    "ar": "هل الحرية والسفر أهم بالنسبة لك الآن من تكوين أسرة؟",
    "ru": "свобода и путешествия для тебя сейчас важнее, чем завести семью?"
   },
   "showIf": {
    "age_max": 45
   },
   "polarity": 1,
   "reads": {
    "yes": "He is in his freedom phase: exploring, not settling. For a young man that is normal, and the plan should not push family on him. The risk is the curve: freedom without learning keeps him with the 80% who only fuck around. He should use this phase to build body, discipline and principles, so he is ready when family becomes his project.",
    "no": "Family already matters more to him than freedom. He thinks long term, which fits Paul's view that family and children count most. For him relationship leadership, trust and legacy are this year's work, not later topics. If he is also single and avoids commitment, the real point is the gap between what he wants and how he lives."
   },
   "traits": [
    {
     "trait": "openness",
     "w": 0.4
    },
    {
     "trait": "direction",
     "w": -0.3
    },
    {
     "trait": "connection",
     "w": -0.3
    }
   ]
  },
  {
   "id": "meta_principles",
   "section": "values",
   "type": "scale",
   "q": {
    "de": "hast du das gefühl, dass dir nie jemand gezeigt hat, wie man als mann klare grenzen setzt und führt?",
    "en": "do you feel nobody ever showed you how to set clear boundaries and lead as a man?",
    "fr": "as-tu l'impression que personne ne t'a jamais montré comment poser des limites claires et montrer la voie en tant qu'homme ?",
    "es": "¿sientes que nadie te enseñó nunca a poner límites claros y a liderar como hombre?",
    "ar": "هل تشعر أن أحدًا لم يُرِك يومًا كيف تضع حدودًا واضحة وتقود كرجل؟",
    "ru": "тебе кажется, что никто никогда не показывал тебе, как ставить чёткие границы и вести за собой как мужчина?"
   },
   "polarity": 1,
   "reads": {
    "yes": "Nobody gave him a frame. He probably says yes when he means no and gives in under pressure, because he never learned where he ends and others begin. It is not his fault, but it is his responsibility now. Admitting it shows he wants guidance, so his plan should give him the frame he never got, starting with one clear no-go he keeps.",
    "no": "Someone showed him, or he built his own frame, so principles and boundaries are not new to him. Check this against his R answers: a no next to weak boundaries means he knows the theory but does not live it yet."
   },
   "traits": [
    {
     "trait": "direction",
     "w": -0.6
    },
    {
     "trait": "self_trust",
     "w": -0.4
    },
    {
     "trait": "openness",
     "w": 0.3
    }
   ]
  },
  {
   "id": "restarts",
   "section": "values",
   "type": "scale",
   "module": "syn",
   "polarity": 1,
   "q": {
    "en": "have you often started something and stopped again after a few weeks, like training, eating better or sleeping earlier?",
    "de": "hast du schon oft etwas angefangen und nach ein paar wochen wieder aufgehört, zum beispiel training, ernährung oder früher schlafen?",
    "fr": "t'est-il souvent arrivé de commencer quelque chose puis d'arrêter au bout de quelques semaines, par exemple le sport, l'alimentation ou te coucher plus tôt ?",
    "es": "¿has empezado a menudo algo y lo has dejado a las pocas semanas, por ejemplo entrenar, comer mejor o dormir antes?",
    "ar": "هل بدأت كثيرًا شيئًا ثم توقّفت عنه بعد أسابيع قليلة، مثل التمرين أو الأكل الصحي أو النوم مبكرًا؟",
    "ru": "часто ли ты что-то начинал и через пару недель бросал, например тренировки, правильное питание или ранний сон?"
   },
   "reads": {
    "yes": "He knows the pattern of starting strong and stopping: the start is not his problem, the weeks after it are. Every restart that fades is one more broken promise to himself, so his plan must be so small that it survives the days without motivation, and the first 30 days must not grow too fast.",
    "no": "Either he keeps what he starts, which is real self-trust to build on, or he rarely starts anything new. His habits and his R answers show which."
   },
   "traits": [
    {
     "trait": "discipline",
     "w": -0.7
    },
    {
     "trait": "self_trust",
     "w": -0.6
    },
    {
     "trait": "self_awareness",
     "w": 0.2
    }
   ]
  },
  {
   "id": "syn_1",
   "section": "values",
   "type": "scale",
   "q": {
    "de": "spürst du, dass du gerade unter deinen möglichkeiten lebst?",
    "en": "do you feel you are living below your potential right now?",
    "fr": "as-tu l'impression de vivre en dessous de ton potentiel en ce moment ?",
    "es": "¿sientes que ahora mismo vives por debajo de tu potencial?",
    "ar": "هل تشعر أنك تعيش الآن أقل من إمكانياتك؟",
    "ru": "ты чувствуешь, что сейчас живёшь ниже своих возможностей?"
   },
   "module": "syn",
   "polarity": 1,
   "reads": {
    "yes": "He sees the gap between the man he is and the man he could be, and that honesty is the fuel for these 90 days. Knowing has not been enough so far, which suggests his self-trust is dented by promises to himself he did not keep. He does not need more pressure; he needs one step so small he cannot fail it.",
    "no": "Either he really lives close to what he wants, and his body and discipline answers will confirm it, or he does not see the gap yet. If the rest of his answers show heavy phone or porn use or broken sleep, a no here is his ego protecting the picture he has of himself."
   },
   "traits": [
    {
     "trait": "self_awareness",
     "w": 0.5
    },
    {
     "trait": "self_trust",
     "w": -0.5
    },
    {
     "trait": "direction",
     "w": -0.4
    },
    {
     "trait": "ego_freedom",
     "w": 0.3
    }
   ]
  },
  {
   "id": "syn_2",
   "section": "values",
   "type": "scale",
   "q": {
    "de": "bist du bereit, 90 tage lang jeden tag einen kleinen schritt zu gehen, auch an tagen ohne lust?",
    "en": "are you ready to take one small step every day for 90 days, even on days you do not feel like it?",
    "fr": "es-tu prêt à faire un petit pas chaque jour pendant 90 jours, même les jours sans envie ?",
    "es": "¿estás dispuesto a dar un pequeño paso cada día durante 90 días, incluso los días sin ganas?",
    "ar": "هل أنت مستعد أن تخطو خطوة صغيرة كل يوم لمدة 90 يومًا، حتى في الأيام التي لا ترغب فيها؟",
    "ru": "ты готов 90 дней каждый день делать маленький шаг, даже в дни, когда нет желания?"
   },
   "module": "syn",
   "polarity": -1,
   "reads": {
    "yes": "He has decided before the plan even starts: one small step a day, also on the days without motivation, the same attitude that carried Paul through his first three hard months. A yes is easy on a screen, though. The real test comes in weeks one and two, so his plan must hold up on the days he has no motivation.",
    "no": "He is not ready to commit to a daily step, or he does not trust himself to keep it up for 90 days, probably because he has started and stopped before. For him the core rule matters most: start so low he barely notices it, one alarm, one push-up, until his brain wants more."
   },
   "traits": [
    {
     "trait": "direction",
     "w": 0.6
    },
    {
     "trait": "discipline",
     "w": 0.5
    },
    {
     "trait": "self_trust",
     "w": 0.4
    },
    {
     "trait": "openness",
     "w": 0.3
    }
   ]
  },
  {
   "id": "tone",
   "section": "values",
   "type": "single",
   "q": {
    "en": "how should i speak to you?",
    "de": "wie soll ich mit dir sprechen?",
    "fr": "comment dois-je te parler ?",
    "es": "¿cómo debo hablarte?",
    "ar": "كيف يجب أن أتحدث إليك؟",
    "ru": "как мне с тобой говорить?"
   },
   "options": [
    {
     "v": "calm",
     "l": {
      "en": "calm and patient",
      "de": "ruhig und geduldig",
      "fr": "calme et patient",
      "es": "tranquilo y paciente",
      "ar": "بهدوء وصبر",
      "ru": "спокойно и терпеливо"
     }
    },
    {
     "v": "direct",
     "l": {
      "en": "clear and direct",
      "de": "klar und direkt",
      "fr": "clair et direct",
      "es": "claro y directo",
      "ar": "بوضوح ومباشرة",
      "ru": "ясно и прямо"
     }
    },
    {
     "v": "brutal",
     "l": {
      "en": "brutally honest",
      "de": "brutal ehrlich",
      "fr": "brutalement honnête",
      "es": "brutalmente honesto",
      "ar": "بصراحة قاسية",
      "ru": "жёстко и честно"
     }
    }
   ]
  }
 ],
 "scale": [
  {
   "v": 0,
   "l": {
    "en": "no",
    "de": "nein",
    "fr": "non",
    "es": "no",
    "ar": "لا",
    "ru": "нет"
   }
  },
  {
   "v": 1,
   "l": {
    "en": "rather no",
    "de": "eher nein",
    "fr": "plutôt non",
    "es": "más bien no",
    "ar": "غالبًا لا",
    "ru": "скорее нет"
   }
  },
  {
   "v": 2,
   "l": {
    "en": "rather yes",
    "de": "eher ja",
    "fr": "plutôt oui",
    "es": "más bien sí",
    "ar": "غالبًا نعم",
    "ru": "скорее да"
   }
  },
  {
   "v": 3,
   "l": {
    "en": "yes",
    "de": "ja",
    "fr": "oui",
    "es": "sí",
    "ar": "نعم",
    "ru": "да"
   }
  }
 ],
 "blocks": {
  "p0": {
   "en": "sexual control",
   "de": "sexualkontrolle",
   "fr": "contrôle sexuel",
   "es": "control sexual",
   "ar": "التحكم الجنسي",
   "ru": "сексуальный контроль"
  },
  "p1": {
   "en": "sleep",
   "de": "schlaf",
   "fr": "sommeil",
   "es": "sueño",
   "ar": "النوم",
   "ru": "сон"
  },
  "p2": {
   "en": "movement",
   "de": "bewegung",
   "fr": "mouvement",
   "es": "movimiento",
   "ar": "الحركة",
   "ru": "движение"
  },
  "p3": {
   "en": "food",
   "de": "ernährung",
   "fr": "alimentation",
   "es": "comida",
   "ar": "الطعام",
   "ru": "питание"
  },
  "p4": {
   "en": "breath",
   "de": "atem",
   "fr": "respiration",
   "es": "respiración",
   "ar": "التنفس",
   "ru": "дыхание"
  },
  "p5": {
   "en": "temperature",
   "de": "temperatur",
   "fr": "température",
   "es": "temperatura",
   "ar": "الحرارة",
   "ru": "температура"
  },
  "u0": {
   "en": "awareness",
   "de": "bewusstsein",
   "fr": "conscience",
   "es": "conciencia",
   "ar": "الوعي",
   "ru": "осознанность"
  },
  "u1": {
   "en": "impulse awareness",
   "de": "impulsbewusstsein",
   "fr": "conscience des impulsions",
   "es": "conciencia del impulso",
   "ar": "وعي الدافع",
   "ru": "осознанность импульсов"
  },
  "u2": {
   "en": "dopamine system",
   "de": "dopaminsystem",
   "fr": "système dopaminergique",
   "es": "sistema de dopamina",
   "ar": "نظام الدوبامين",
   "ru": "система дофамина"
  },
  "u3": {
   "en": "attention control",
   "de": "aufmerksamkeitskontrolle",
   "fr": "contrôle de l’attention",
   "es": "control de la atención",
   "ar": "التحكم في الانتباه",
   "ru": "контроль внимания"
  },
  "u4": {
   "en": "identity architecture",
   "de": "identitätsarchitektur",
   "fr": "architecture de l’identité",
   "es": "arquitectura de identidad",
   "ar": "هندسة الهوية",
   "ru": "архитектура идентичности"
  },
  "u5": {
   "en": "emotional regulation",
   "de": "emotionale regulierung",
   "fr": "régulation émotionnelle",
   "es": "regulación emocional",
   "ar": "التنظيم العاطفي",
   "ru": "эмоциональная регуляция"
  },
  "r0": {
   "en": "self accountability",
   "de": "rechenschaft vor dir selbst",
   "fr": "auto responsabilité",
   "es": "auto responsabilidad",
   "ar": "المساءلة الذاتية",
   "ru": "самоответственность"
  },
  "r1": {
   "en": "self responsibility",
   "de": "selbstverantwortung",
   "fr": "responsabilité personnelle",
   "es": "responsabilidad personal",
   "ar": "المسؤولية الذاتية",
   "ru": "личная ответственность"
  },
  "r2": {
   "en": "principles",
   "de": "prinzipien",
   "fr": "principes",
   "es": "principios",
   "ar": "المبادئ",
   "ru": "принципы"
  },
  "r3": {
   "en": "relationship leadership",
   "de": "beziehungsführung",
   "fr": "leadership relationnel",
   "es": "liderazgo relacional",
   "ar": "قيادة العلاقات",
   "ru": "лидерство в отношениях"
  },
  "r4": {
   "en": "trust economy",
   "de": "vertrauensökonomie",
   "fr": "économie de la confiance",
   "es": "economía de confianza",
   "ar": "اقتصاد الثقة",
   "ru": "экономика доверия"
  },
  "r5": {
   "en": "legacy thinking",
   "de": "vermächtnisdenken",
   "fr": "pensée héritage",
   "es": "pensamiento de legado",
   "ar": "تفكير الإرث",
   "ru": "мышление о наследии"
  },
  "e1": {
   "en": "kill the ego, without drugs",
   "de": "das ego töten, ohne drogen",
   "fr": "tuer l'ego, sans drogues",
   "es": "matar el ego, sin drogas",
   "ar": "قتل الأنا من دون مخدرات",
   "ru": "убить эго, без наркотиков"
  },
  "e2": {
   "en": "what the ego is",
   "de": "was das ego ist",
   "fr": "ce qu'est l'ego",
   "es": "qué es el ego",
   "ar": "ما هي الأنا",
   "ru": "что такое эго"
  },
  "e5": {
   "en": "the end boss: something is greater than you",
   "de": "der endboss: etwas ist größer als du",
   "fr": "le boss final : quelque chose est plus grand que toi",
   "es": "el jefe final: hay algo más grande que tú",
   "ar": "الزعيم الأخير: هناك ما هو أكبر منك",
   "ru": "финальный босс: есть что-то больше тебя"
  },
  "ef": {
   "en": "fuck around · find out",
   "de": "fuck around · find out",
   "fr": "fuck around · find out",
   "es": "fuck around · find out",
   "ar": "fuck around · find out",
   "ru": "fuck around · find out"
  }
 },
 "order": [
  "p0",
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "u0",
  "u1",
  "u2",
  "u3",
  "u4",
  "u5",
  "r0",
  "r1",
  "r2",
  "r3",
  "r4",
  "r5",
  "e1",
  "e2",
  "ef",
  "e5"
 ],
 "traits": [
  "discipline",
  "self_awareness",
  "impulse_control",
  "dopamine_balance",
  "stress_regulation",
  "body_connection",
  "connection",
  "self_trust",
  "direction",
  "ego_freedom",
  "openness"
 ]
};
  const byId = Object.fromEntries(Q.items.map((it) => [it.id, it]));
  const TEXT = ["text", "textarea", "voice"];

  // is this question asked, given the answers so far?
  function visible(it, a) {
    const s = it.showIf;
    if (!s) return true;
    if (s.relationship && !s.relationship.includes(a.relationship)) return false;
    if (s.age_max && Number(a.age) > s.age_max) return false;
    return true;
  }

  // strict check of everything the page sends: only known ids, only known values, bounded text
  function validate(raw) {
    const a = {};
    const errors = [];
    const src = raw && typeof raw === "object" ? raw : {};
    for (const it of Q.items) {
      let v = src[it.id];
      if (TEXT.includes(it.type)) {
        v = typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, it.max) : "";
        if (v) a[it.id] = v;
      } else if (it.type === "number") {
        const n = Number(v);
        if (Number.isInteger(n) && n >= it.min && n <= it.max) a[it.id] = n;
      } else if (it.type === "scale") {
        if ([0, 1, 2, 3].includes(v)) a[it.id] = v;
      } else if (it.type === "single") {
        if (it.options.some((o) => o.v === v)) a[it.id] = v;
      } else if (it.type === "multi") {
        if (Array.isArray(v)) {
          let list = [...new Set(v.filter((x) => it.options.some((o) => o.v === x)))];
          if (it.exclusive && list.includes(it.exclusive) && list.length > 1) list = list.filter((x) => x !== it.exclusive);
          if (list.length) a[it.id] = list;
        }
      }
    }
    for (const it of Q.items) {
      if (it.required && visible(it, a) && a[it.id] === undefined) errors.push(it.id);
      if (!visible(it, a)) delete a[it.id];
    }
    return { ok: errors.length === 0, answers: a, errors };
  }

  // what his habits say about a level, 0 solid .. 100 needs work. people judge themselves
  // kindly; frequencies and hours are harder to bend, so they weigh in on the score.
  const HABITS = {
    p0: { porn: { never: 0, monthly: 25, weekly: 55, several: 80, daily: 100 }, morning: { most: 0, some: 40, rare: 90 }, control: { yes: 0, sometimes: 50, rarely: 100 } },
    p1: { sleep: { lt5: 100, "5_6": 75, "6_7": 40, "7_8": 0, gt8: 30 }, wake: { lt5: 20, "5_6": 0, "6_7": 0, "7_8": 15, gt8: 60, irregular: 100 }, daylight: { lt15: 70, "15_60": 30, gt60: 0 } },
    p2: { training: { none: 100, walk: 70, "1_2": 40, "3_4": 10, "5p": 0 }, pullups: { 0: 90, "1_5": 55, "6_12": 20, gt12: 0 } },
    p3: { eating: { graze: 90, meals_snacks: 50, meals: 10, window: 10, omad: 30 }, belly: { flat: 0, little: 35, clear: 70, large: 100 } },
    p4: { breathwork: { none: 70, some: 35, regular: 0 } },
    p5: { cold: { never: 70, sometimes: 35, daily: 0, ice: 0 } },
    u1: { nicotine: { no: 0, sometimes: 50, daily: 100 }, alcohol: { never: 0, monthly: 10, weekly: 40, several: 75, daily: 100 } },
    u2: { screen: { lt1: 0, "1_2": 30, "2_4": 65, gt4: 100 }, porn: { never: 0, monthly: 20, weekly: 50, several: 75, daily: 100 } },
    u3: { phone_morning: { no: 0, sometimes: 50, always: 100 }, screen: { lt1: 0, "1_2": 30, "2_4": 65, gt4: 100 } },
  };
  const HABIT_WEIGHT = 0.35;

  // 0 = solid, 100 = this level needs the most work, null = not answered
  function score(a) {
    const out = {};
    for (const mod of Q.order) {
      const its = Q.items.filter((it) => it.module === mod);
      let sum = 0, n = 0;
      for (const it of its) {
        if (a[it.id] === undefined) continue;
        sum += it.polarity > 0 ? a[it.id] : 3 - a[it.id];
        n++;
      }
      const own = n ? (sum / (n * 3)) * 100 : null;
      const hv = Object.entries(HABITS[mod] || {}).map(([id, map]) => map[a[id]]).filter((v) => v !== undefined);
      const habit = hv.length ? hv.reduce((x, y) => x + y, 0) / hv.length : null;
      out[mod] = own === null ? (habit === null ? null : Math.round(habit)) : Math.round(habit === null ? own : own * (1 - HABIT_WEIGHT) + habit * HABIT_WEIGHT);
    }
    return out;
  }

  // where what he says about himself and what he does disagree. english, for the model only.
  function blindspots(a) {
    const out = [];
    const has = (id, ...vals) => vals.includes(a[id]);
    if (a.p0_1 !== undefined && a.p0_1 <= 1 && has("porn", "several", "daily")) out.push("he says porn is not his default outlet, yet he watches it several times a week or daily. he does not see this pattern yet.");
    if (a.p1_1 !== undefined && a.p1_1 <= 1 && (has("sleep", "lt5", "5_6") || (has("wake", "irregular") && a.work !== "shift"))) out.push("he says he rarely stays up later than he wants, yet he sleeps under six hours or wakes at no fixed time. his sleep is worse than he thinks.");
    if (a.p2_2 !== undefined && a.p2_2 >= 2 && has("training", "none", "walk")) out.push("he says he trains even on days without motivation, yet he trains less than once a week. the discipline exists in his head more than in his week.");
    if (a.u3_2 !== undefined && a.u3_2 >= 2 && has("phone_morning", "always") && has("screen", "gt4")) out.push("he says he can stay on one thing for 30 minutes, yet his phone comes first every morning and he spends over four hours a day on screens.");
    if (a.r4_2 !== undefined && a.r4_2 >= 2 && a.r1_1 !== undefined && a.r1_1 >= 2) out.push("he says people can count on his word, yet he often breaks promises to himself. the first person his word fails is himself.");
    if (a.e2_1 === 3 && a.e2_2 !== undefined && a.e2_2 <= 1) out.push("he sees ego clearly in others and rarely in himself. that is the ego's favourite hiding place.");
    if (a.p3_2 !== undefined && a.p3_2 >= 2 && has("belly", "clear", "large")) out.push("he says he stops eating when full, yet he carries a clear belly. what he eats or drinks between meals may be the gap.");
    if (a.u1_2 !== undefined && a.u1_2 >= 2 && a.u1_1 !== undefined && a.u1_1 >= 2) out.push("he believes he can tell real hunger and want from boredom, yet under stress he reaches for phone, food, porn or nicotine without deciding. knowing is not yet stopping.");
    if (a.syn_1 !== undefined && a.syn_1 >= 2 && a.syn_2 !== undefined && a.syn_2 <= 1) out.push("he feels he lives below his potential, yet he is not ready to trade comfort for change. the first 30 days must be so small that readiness is not needed.");
    if (a.r1_1 !== undefined && a.r1_1 <= 1 && a.restarts !== undefined && a.restarts >= 2) out.push("he says he rarely breaks promises to himself, yet he has often started something and dropped it after a few weeks. the promises he does not count are the ones that cost him.");
    if (a.syn_2 !== undefined && a.syn_2 >= 2 && a.restarts !== undefined && a.restarts >= 2) out.push("he says he is ready for a small daily step for 90 days, and he has felt ready before, then stopped after a few weeks. his readiness is real today; the plan has to carry him through week three, not his motivation.");
    if (has("libido", "low", "gone") && Number(a.age) < 45) out.push("his desire for sex is low for his age. sleep, stress, alcohol, body fat and porn all pull on it; a doctor can check the rest.");
    return out;
  }

  // -100 (weak) .. 100 (strong) per trait, from the weights of the answered scale questions
  function traits(a) {
    const acc = {};
    for (const it of Q.items) {
      if (it.type !== "scale" || a[it.id] === undefined || !it.traits) continue;
      const yes = (a[it.id] - 1.5) / 1.5; // -1 = no, 1 = yes
      for (const { trait, w } of it.traits) {
        acc[trait] = acc[trait] || { s: 0, n: 0 };
        acc[trait].s += w * yes;
        acc[trait].n += Math.abs(w);
      }
    }
    const out = {};
    for (const t of Q.traits) out[t] = acc[t] && acc[t].n ? Math.round((acc[t].s / acc[t].n) * 100) : null;
    return out;
  }

  // what the blueprint must not recommend, decided here and not left to the model
  function safety(a) {
    const c = a.conditions || [];
    const age = Number(a.age) || 0;
    return {
      noBreathHolds: c.includes("heart") || c.includes("bp") || c.includes("epilepsy") || c.includes("acute") || c.includes("circulation") || age >= 65,
      // erection trouble can be an early sign of heart and vessel disease (thompson et al., jama 2005)
      sexualDoctorCheck: a.morning === "rare" || a.libido === "gone",
      coldOnlyGentle: c.includes("heart") || c.includes("bp") || c.includes("circulation") || c.includes("acute") || age >= 65,
      noFasting: c.includes("diabetes") || c.includes("eating_disorder") || c.includes("acute") || a.medication === "yes",
      noFoodRules: c.includes("eating_disorder"),
      doctorFirst: c.some((x) => x !== "none") || a.medication === "yes" || age >= 65,
      crisis: a.inner === "crisis",
      heavy: a.inner === "heavy",
    };
  }

  // readable english summary of the answers for the model, with what each answer reveals.
  // the spoken texts (goal, story) are left out here: the api passes them separately as his own words.
  function describe(a) {
    const lines = [];
    const label = (it, v) => {
      if (it.type === "scale") return Q.scale.find((o) => o.v === v).l.en;
      if (it.type === "single") return it.options.find((o) => o.v === v).l.en;
      if (it.type === "multi") return v.map((x) => it.options.find((o) => o.v === x).l.en).join(", ");
      return String(v);
    };
    for (const s of Q.sections) {
      const its = Q.items.filter((x) => x.section === s.id && x.type !== "voice" && a[x.id] !== undefined);
      if (!its.length) continue;
      lines.push(`\n## ${s.title.en}`);
      for (const it of its) {
        const tag = it.module ? `[${it.module.toUpperCase()}] ` : "";
        let line = `- ${tag}${it.q.en} -> ${label(it, a[it.id])}`;
        if (it.reads) line += `\n  reveals: ${a[it.id] >= 2 ? it.reads.yes : it.reads.no}${a[it.id] === 1 || a[it.id] === 2 ? " (leaning, not certain)" : ""}`;
        lines.push(line);
      }
    }
    return lines.join("\n");
  }

  Q.byId = byId;
  Q.visible = visible;
  Q.validate = validate;
  Q.score = score;
  Q.traits_of = traits;
  Q.safety = safety;
  Q.describe = describe;
  Q.blindspots = blindspots;

  if (typeof module !== "undefined" && module.exports) module.exports = Q;
  else root.PUR_Q = Q;

})(typeof globalThis !== "undefined" ? globalThis : this);

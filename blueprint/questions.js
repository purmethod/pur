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
    }
   ]
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
    "en": "what do you want to change in the next 90 days? how should your relationship be, how do you want to meet women, do you want more sex or less fighting at home? just tell me what you want, how you see yourself and what your goals are: body, relationship, women.",
    "de": "was willst du in den nächsten 90 tagen ändern? wie soll deine beziehung sein, wie willst du frauen kennenlernen, willst du mehr sex oder weniger streit zu hause? erzähl einfach, was du willst, wie du dich siehst und was deine ziele sind: körper, beziehung, frauen.",
    "fr": "qu'est-ce que tu veux changer dans les 90 prochains jours ? comment tu veux que soit ta relation, comment tu veux rencontrer des femmes, tu veux plus de sexe ou moins de disputes à la maison ? raconte simplement ce que tu veux, comment tu te vois et quels sont tes objectifs : corps, relation, femmes.",
    "es": "¿qué quieres cambiar en los próximos 90 días? ¿cómo quieres que sea tu relación, cómo quieres conocer mujeres, quieres más sexo o menos peleas en casa? cuéntame sin más qué quieres, cómo te ves y cuáles son tus metas: cuerpo, relación, mujeres.",
    "ar": "ما الذي تريد أن تغيّره في الأيام التسعين القادمة؟ كيف تريد أن تكون علاقتك، كيف تريد أن تتعرّف على النساء، هل تريد جنسًا أكثر أو خلافات أقل في البيت؟ احكِ لي ببساطة ما تريده، وكيف ترى نفسك، وما أهدافك: الجسد، العلاقة، النساء.",
    "ru": "что ты хочешь изменить за следующие 90 дней? какими должны быть твои отношения, как ты хочешь знакомиться с женщинами, хочешь больше секса или меньше ссор дома? просто расскажи, чего ты хочешь, каким ты себя видишь и какие у тебя цели: тело, отношения, женщины."
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
   "id": "condition",
   "section": "body",
   "type": "single",
   "q": {
    "en": "how would you rate your physical condition today?",
    "de": "wie schätzt du deine körperliche verfassung heute ein?",
    "fr": "comment évalues-tu ta condition physique aujourd'hui ?",
    "es": "¿cómo valoras tu condición física hoy?",
    "ar": "كيف تقيّم حالتك البدنية اليوم؟",
    "ru": "как ты оцениваешь свою физическую форму сегодня?"
   },
   "options": [
    {
     "v": "1",
     "l": {
      "en": "weak",
      "de": "schwach",
      "fr": "faible",
      "es": "débil",
      "ar": "ضعيفة",
      "ru": "слабая"
     }
    },
    {
     "v": "2",
     "l": {
      "en": "below average",
      "de": "unter durchschnitt",
      "fr": "en dessous de la moyenne",
      "es": "por debajo de la media",
      "ar": "أقل من المتوسط",
      "ru": "ниже среднего"
     }
    },
    {
     "v": "3",
     "l": {
      "en": "average",
      "de": "durchschnitt",
      "fr": "moyenne",
      "es": "media",
      "ar": "متوسطة",
      "ru": "средняя"
     }
    },
    {
     "v": "4",
     "l": {
      "en": "good",
      "de": "gut",
      "fr": "bonne",
      "es": "buena",
      "ar": "جيدة",
      "ru": "хорошая"
     }
    },
    {
     "v": "5",
     "l": {
      "en": "very good",
      "de": "sehr gut",
      "fr": "très bonne",
      "es": "muy buena",
      "ar": "جيدة جدًا",
      "ru": "очень хорошая"
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
    "de": "entlädst du deine sexuelle energie meistens durch pornos oder schnelle selbstbefriedigung, statt sie in ein ritual, in deinen fokus oder in echte verbindung zu lenken?",
    "en": "do you mostly release your sexual energy through porn or quick masturbation, instead of channeling it into a ritual, your focus, or real connection?",
    "fr": "est-ce que tu évacues surtout ton énergie sexuelle par le porno ou une masturbation rapide, au lieu de la diriger vers un rituel, ta concentration ou une vraie connexion ?",
    "es": "¿descargas tu energía sexual sobre todo con porno o masturbación rápida, en lugar de canalizarla hacia un ritual, tu enfoque o una conexión real?",
    "ar": "هل تُفرّغ طاقتك الجنسية غالباً في الأفلام الإباحية أو في عادة سرية سريعة، بدلاً من أن توجّهها نحو طقس أو تركيز أو تواصل حقيقي؟",
    "ru": "ты чаще всего сливаешь свою сексуальную энергию в порно или быструю мастурбацию, вместо того чтобы направлять её в ритуал, в фокус или в настоящую близость?"
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
    "de": "hast du deinen beckenboden schon mal bewusst trainiert und beobachtet, was sich dadurch verändert?",
    "en": "have you ever trained your pelvic floor on purpose and watched what changed?",
    "fr": "as-tu déjà entraîné consciemment ton plancher pelvien et observé ce que ça a changé ?",
    "es": "¿alguna vez entrenaste conscientemente tu suelo pélvico y observaste qué cambió?",
    "ar": "هل سبق أن درّبت عضلات قاع الحوض بوعي ولاحظت ما الذي تغيّر؟",
    "ru": "ты когда-нибудь осознанно тренировал мышцы тазового дна и замечал, что от этого меняется?"
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
    "de": "gehst du oft ohne echten grund spät ins bett, obwohl du weißt, dass es dir nicht guttut?",
    "en": "do you often go to bed late for no real reason, even though you know it's not good for you?",
    "fr": "est-ce que tu te couches souvent tard sans vraie raison, alors que tu sais que ça ne te fait pas du bien ?",
    "es": "¿sueles acostarte tarde sin una razón real, aunque sabes que no te hace bien?",
    "ar": "هل كثيراً ما تتأخر في النوم من دون سبب حقيقي، مع أنك تعرف أن هذا ليس في صالحك؟",
    "ru": "ты часто ложишься поздно без особой причины, хотя знаешь, что тебе это не на пользу?"
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
    "de": "hältst du die letzten 30 minuten vor dem schlafen meistens frei von handy, videos und lärm?",
    "en": "do you usually keep the last 30 minutes before sleep free of phone, videos, and noise?",
    "fr": "est-ce que tu gardes généralement les 30 dernières minutes avant de dormir sans téléphone, sans vidéos et sans bruit ?",
    "es": "¿sueles mantener los últimos 30 minutos antes de dormir libres de móvil, videos y ruido?",
    "ar": "هل تجعل عادةً آخر 30 دقيقة قبل النوم خالية من الهاتف والفيديوهات والضجيج؟",
    "ru": "ты обычно проводишь последние 30 минут перед сном без телефона, видео и шума?"
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
    "de": "vergeht manchmal eine ganze woche, ohne dass du deinen körper ein einziges mal richtig forderst?",
    "en": "does a whole week sometimes go by without you pushing your body even once?",
    "fr": "est-ce qu’il t’arrive de passer une semaine entière sans mettre ton corps à l’épreuve une seule fois ?",
    "es": "¿a veces pasa una semana entera sin que le exijas de verdad a tu cuerpo ni una sola vez?",
    "ar": "هل يمرّ عليك أحياناً أسبوع كامل من دون أن تتحدّى جسدك تحدياً حقيقياً ولو مرة واحدة؟",
    "ru": "бывает, что проходит целая неделя, а ты ни разу по-настоящему не нагрузил своё тело?"
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
    "de": "hast du gerade ein festes trainingsritual, das du auch ohne lust durchziehst?",
    "en": "do you currently have a fixed training ritual that you stick to even when you don't feel like it?",
    "fr": "as-tu en ce moment un rituel d’entraînement fixe que tu tiens même quand tu n’as pas envie ?",
    "es": "¿tienes ahora mismo un ritual fijo de entrenamiento que cumples aunque no tengas ganas?",
    "ar": "هل لديك حالياً طقس تدريب ثابت تلتزم به حتى عندما لا تشعر بالرغبة؟",
    "ru": "есть ли у тебя сейчас постоянный тренировочный ритуал, который ты соблюдаешь, даже когда нет настроения?"
   },
   "reads": {
    "yes": "He trains on decision, not on mood: the core of the ladder is already in place, and he has proof that he keeps promises to himself. The blueprint should build on his ritual, not replace it.",
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
    "de": "isst du oft aus stress, als belohnung oder um dich zu betäuben, statt aus echtem hunger?",
    "en": "do you often eat out of stress, as a reward, or to numb yourself, rather than from real hunger?",
    "fr": "est-ce que tu manges souvent par stress, pour te récompenser ou pour t’anesthésier, plutôt que par vraie faim ?",
    "es": "¿comes a menudo por estrés, como premio o para anestesiarte, en vez de por hambre real?",
    "ar": "هل كثيراً ما تأكل بسبب التوتر، أو كمكافأة لنفسك، أو لتخدّر مشاعرك، بدلاً من أن تأكل لأنك جائع فعلاً؟",
    "ru": "ты часто ешь от стресса, в награду себе или чтобы заглушить чувства, а не от настоящего голода?"
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
    "de": "merkst du, dass stress sich auf deinen atem auswirkt?",
    "en": "do you notice that stress affects your breathing?",
    "fr": "est-ce que tu remarques que le stress agit sur ta respiration ?",
    "es": "¿notas que el estrés afecta a tu respiración?",
    "ar": "هل تلاحظ أن التوتر يؤثر على تنفسك؟",
    "ru": "ты замечаешь, что стресс влияет на твоё дыхание?"
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
    "de": "weichst du unbequemen dingen schnell aus, obwohl du weißt, dass sie dich stärker machen würden?",
    "en": "do you quickly dodge uncomfortable things even though you know they would make you stronger?",
    "fr": "est-ce que tu fuis vite ce qui est inconfortable, alors que tu sais que ça te rendrait plus fort ?",
    "es": "¿esquivas rápido lo incómodo aunque sabes que te haría más fuerte?",
    "ar": "هل تتهرّب بسرعة من الأشياء غير المريحة، مع أنك تعرف أنها ستجعلك أقوى؟",
    "ru": "ты быстро уходишь от неприятного, хотя знаешь, что это сделало бы тебя сильнее?"
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
    "de": "kannst du kalt duschen oder dich etwas unangenehmem stellen, ohne lange mit dir zu verhandeln?",
    "en": "can you take a cold shower or face something uncomfortable without negotiating with yourself for long?",
    "fr": "est-ce que tu peux prendre une douche froide ou affronter quelque chose de désagréable sans négocier longtemps avec toi-même ?",
    "es": "¿puedes darte una ducha fría o enfrentarte a algo incómodo sin negociar mucho contigo mismo?",
    "ar": "هل تستطيع أن تأخذ دشاً بارداً أو تواجه شيئاً غير مريح من دون أن تجادل نفسك طويلاً؟",
    "ru": "можешь ли ты встать под холодный душ или пойти на что-то неприятное, не торгуясь долго с собой?"
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
    "de": "reagierst du oft einfach, ohne zu merken, was du gerade fühlst?",
    "en": "do you often just react, without noticing what you are feeling?",
    "fr": "réagis-tu souvent tout de suite, sans remarquer ce que tu ressens ?",
    "es": "¿sueles reaccionar sin más, sin darte cuenta de lo que sientes?",
    "ar": "هل تتصرّف غالباً بردّة فعل سريعة، دون أن تنتبه لما تشعر به؟",
    "ru": "часто ли ты просто реагируешь, не замечая, что чувствуешь?"
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
    "de": "hast du schon mal dieses experiment gemacht: einen impuls bemerken (zum beispiel den drang, aufs handy zu schauen) und dann bewusst nicht darauf reagieren?",
    "en": "have you ever tried this experiment: notice an impulse (like the urge to check your phone) and then consciously not act on it?",
    "fr": "as-tu déjà fait cette expérience : remarquer une impulsion (par exemple l’envie de regarder ton téléphone) puis choisir consciemment de ne pas y réagir ?",
    "es": "¿has hecho alguna vez este experimento: notar un impulso (por ejemplo, las ganas de mirar el móvil) y luego, a propósito, no reaccionar?",
    "ar": "هل جرّبت يوماً هذه التجربة: أن تلاحظ دافعاً (مثل الرغبة في النظر إلى هاتفك)، ثم تختار بوعي ألّا تستجيب له؟",
    "ru": "пробовал ли ты такой эксперимент: заметить импульс (например, желание заглянуть в телефон) и сознательно на него не реагировать?"
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
    "de": "greifst du bei stress automatisch zu handy, essen, porno oder nikotin, ohne dich bewusst dafür zu entscheiden?",
    "en": "when you are stressed, do you automatically reach for your phone, food, porn or nicotine without consciously deciding to?",
    "fr": "quand tu es stressé, te jettes-tu automatiquement sur ton téléphone, la nourriture, le porno ou la nicotine, sans l’avoir décidé consciemment ?",
    "es": "cuando estás estresado, ¿recurres automáticamente al móvil, la comida, el porno o la nicotina sin decidirlo conscientemente?",
    "ar": "عندما تكون متوتراً، هل تلجأ تلقائياً إلى الهاتف أو الطعام أو الإباحية أو النيكوتين دون أن تقرّر ذلك بوعي؟",
    "ru": "в стрессе ты на автомате хватаешься за телефон, еду, порно или никотин, даже не решив этого осознанно?"
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
    "de": "kannst du unterscheiden, ob du wirklich hunger oder lust hast, oder ob du nur gelangweilt oder einsam bist?",
    "en": "can you tell whether you are really hungry or really want something, or whether you are just bored or lonely?",
    "fr": "sais-tu distinguer si tu as vraiment faim ou vraiment envie, ou si tu t’ennuies ou te sens seul ?",
    "es": "¿sabes distinguir si de verdad tienes hambre o ganas, o si simplemente estás aburrido o te sientes solo?",
    "ar": "هل تستطيع أن تميّز إن كنت جائعاً أو راغباً في شيء حقاً، أم أنك فقط تشعر بالملل أو الوحدة؟",
    "ru": "можешь ли ты отличить, правда ли ты голоден или чего-то хочешь, или тебе просто скучно или одиноко?"
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
    "de": "findest du arbeit, training oder ruhe langweilig im vergleich zu handy, videos oder porno?",
    "en": "do work, training or quiet feel boring to you compared to your phone, videos or porn?",
    "fr": "le travail, l’entraînement ou le calme te paraissent-ils ennuyeux comparés au téléphone, aux vidéos ou au porno ?",
    "es": "¿el trabajo, el entrenamiento o la calma te parecen aburridos comparados con el móvil, los vídeos o el porno?",
    "ar": "هل يبدو لك العمل أو التمرين أو الهدوء مملاً مقارنةً بالهاتف أو الفيديوهات أو الإباحية؟",
    "ru": "работа, тренировка или тишина кажутся тебе скучными по сравнению с телефоном, видео или порно?"
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
    "de": "kannst du 30 minuten bei einer sache bleiben, ohne zwischendurch aufs handy zu schauen?",
    "en": "can you stay on one thing for 30 minutes without checking your phone in between?",
    "fr": "peux-tu rester 30 minutes sur une seule chose sans regarder ton téléphone entre-temps ?",
    "es": "¿puedes quedarte 30 minutos con una sola cosa sin mirar el móvil entre medias?",
    "ar": "هل تستطيع أن تبقى 30 دقيقة على شيء واحد دون أن تنظر إلى هاتفك في الأثناء؟",
    "ru": "можешь ли ты 30 минут заниматься одним делом, ни разу не заглянув в телефон?"
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
    "de": "passt du dich anderen so sehr an, dass du manchmal nicht mehr weißt, wer du eigentlich bist?",
    "en": "do you adapt to others so much that you sometimes no longer know who you really are?",
    "fr": "t’adaptes-tu tellement aux autres que tu ne sais parfois plus qui tu es vraiment ?",
    "es": "¿te adaptas tanto a los demás que a veces ya no sabes quién eres de verdad?",
    "ar": "هل تتأقلم مع الآخرين إلى درجة أنك أحياناً لا تعود تعرف من أنت حقاً؟",
    "ru": "подстраиваешься ли ты под других так сильно, что иногда уже не понимаешь, кто ты на самом деле?"
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
    "de": "wirst du bei kritik sofort angespannt, statt erst mal zu schauen, was dran ist?",
    "en": "when you get criticized, do you tense up right away instead of first checking if there is something to it?",
    "fr": "face à une critique, te crispes-tu tout de suite au lieu de regarder d’abord s’il y a du vrai ?",
    "es": "cuando te critican, ¿te tensas enseguida en lugar de mirar primero si tienen algo de razón?",
    "ar": "عندما ينتقدك أحد، هل تتوتّر فوراً بدلاً من أن ترى أولاً إن كان في كلامه شيء من الصحة؟",
    "ru": "когда тебя критикуют, ты сразу напрягаешься, вместо того чтобы сначала посмотреть, есть ли в этом доля правды?"
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
    "de": "kannst du im streit ruhig und ehrlich bleiben, ohne kalt zu werden, dich zu verstellen oder auszurasten?",
    "en": "can you stay calm and honest in an argument without going cold, faking it or blowing up?",
    "fr": "peux-tu rester calme et honnête dans une dispute, sans devenir froid, faire semblant ou exploser ?",
    "es": "¿puedes mantener la calma y la honestidad en una discusión sin volverte frío, fingir o explotar?",
    "ar": "هل تستطيع أن تبقى هادئاً وصادقاً أثناء الخلاف، دون أن تصبح بارداً أو تتظاهر أو تنفجر غضباً؟",
    "ru": "можешь ли ты в ссоре оставаться спокойным и честным, не становясь холодным, не притворяясь и не срываясь?"
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
    "de": "gibst du oft anderen, den umständen oder deiner vergangenheit die schuld daran, wo du heute stehst?",
    "en": "do you often blame other people, circumstances or your past for where you are today?",
    "fr": "rends-tu souvent les autres, les circonstances ou ton passé responsables de là où tu en es aujourd'hui ?",
    "es": "¿sueles echar la culpa a los demás, a las circunstancias o a tu pasado de dónde estás hoy?",
    "ar": "هل تُلقي اللوم غالباً على الآخرين أو على الظروف أو على ماضيك في ما وصلتَ إليه اليوم؟",
    "ru": "часто ли ты винишь других людей, обстоятельства или своё прошлое в том, где ты сейчас?"
   },
   "reads": {
    "yes": "He still lives inside a victim story: the cause of his situation sits outside him, so the solution does too, and he is waiting for something or someone to change before he does. He has not yet separated fault (who caused it) from responsibility (what he does now), and the energy that goes into blaming is missing for building.",
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
    "de": "könntest du sofort sagen, wofür du stehst und was für dich ein no-go ist?",
    "en": "could you say right away what you stand for and what is a no-go for you?",
    "fr": "pourrais-tu dire tout de suite ce que tu défends et ce qui est hors de question pour toi ?",
    "es": "¿podrías decir ahora mismo qué defiendes y qué no aceptas bajo ningún concepto?",
    "ar": "هل تستطيع أن تقول فوراً ما الذي تؤمن به وما هي خطوطك الحمراء؟",
    "ru": "смог бы ты сразу сказать, какие у тебя принципы и что для тебя абсолютно недопустимо?"
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
    "de": "bleibst du ruhig und klar, wenn es in einer beziehung schwierig wird, ohne dich zu verbiegen, hinterherzulaufen oder kalt zu werden?",
    "en": "do you stay calm and clear when things get hard in a relationship, without bending over backwards, chasing, or going cold?",
    "fr": "restes-tu calme et clair quand ça devient difficile dans une relation, sans te plier en quatre, courir après l'autre ou devenir froid ?",
    "es": "¿te mantienes tranquilo y claro cuando una relación se pone difícil, sin desvivirte por agradar, perseguir a la otra persona ni volverte frío?",
    "ar": "هل تبقى هادئاً وواضحاً عندما تصعب الأمور في العلاقة، من دون أن تتنازل عن نفسك لإرضاء الطرف الآخر أو تلهث وراءه أو تصبح بارداً؟",
    "ru": "остаёшься ли ты спокойным и ясным, когда в отношениях становится трудно, не прогибаясь, не бегая за человеком и не становясь холодным?"
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
    "de": "bist du gerade so konsequent, dass man sich auf dein wort verlassen kann, auch du selbst?",
    "en": "are you consistent enough right now that people can count on your word, you included?",
    "fr": "es-tu en ce moment assez constant pour qu'on puisse compter sur ta parole, toi compris ?",
    "es": "¿eres ahora lo bastante constante como para que se pueda confiar en tu palabra, incluido tú mismo?",
    "ar": "هل أنت ثابت بما يكفي هذه الأيام ليعتمد الناس على كلمتك، وتعتمد أنت عليها أيضاً؟",
    "ru": "достаточно ли ты сейчас последователен, чтобы на твоё слово можно было положиться, в том числе тебе самому?"
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
    "de": "lebst du eher in den tag hinein, ohne zu wissen, wofür du das alles machst?",
    "en": "do you mostly live day to day, without knowing what it is all for?",
    "fr": "vis-tu plutôt au jour le jour, sans savoir pourquoi tu fais tout ça ?",
    "es": "¿vives más bien al día, sin saber para qué haces todo esto?",
    "ar": "هل تعيش يوماً بيوم في الغالب، من دون أن تعرف لماذا تفعل كل هذا؟",
    "ru": "живёшь ли ты скорее одним днём, не понимая, ради чего всё это делаешь?"
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
    "de": "kannst du vor anderen zugeben, dass du falsch lagst, ohne dich rauszureden?",
    "en": "can you admit in front of others that you were wrong, without making excuses?",
    "fr": "peux-tu reconnaître devant les autres que tu avais tort, sans te chercher d'excuses ?",
    "es": "¿puedes admitir delante de otros que te equivocaste, sin poner excusas?",
    "ar": "هل تستطيع أن تعترف أمام الآخرين بأنك كنت مخطئاً، دون أن تختلق الأعذار؟",
    "ru": "можешь ли ты признать при других, что был неправ, без оправданий?"
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
    "de": "merkst du, wenn gerade dein ego spricht und nicht du?",
    "en": "do you notice when it is your ego talking and not you?",
    "fr": "te rends-tu compte quand c'est ton ego qui parle, et pas toi ?",
    "es": "¿te das cuenta de cuándo habla tu ego y no tú?",
    "ar": "هل تنتبه حين تكون الأنا هي التي تتكلم، لا أنت؟",
    "ru": "замечаешь ли ты, когда говорит твоё эго, а не ты?"
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
    "de": "dreht sich in deinem leben gerade fast alles nur um dich?",
    "en": "does almost everything in your life right now revolve around you?",
    "fr": "est-ce qu'en ce moment presque tout dans ta vie tourne autour de toi ?",
    "es": "¿ahora mismo casi todo en tu vida gira en torno a ti?",
    "ar": "هل يدور كل شيء تقريباً في حياتك الآن حولك أنت؟",
    "ru": "крутится ли сейчас почти всё в твоей жизни только вокруг тебя?"
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
    "en": "what has held you back so far? tell me about your life. get everything off your chest, i am listening. this is your chance to let it all out: your wishes, your worries, everything.",
    "de": "was hat dich bisher aufgehalten? erzähl mir von deinem leben. sprich dir alles von der seele, ich höre dir zu. hier ist die gelegenheit, alles loszuwerden: deine wünsche, deine sorgen, alles.",
    "fr": "qu'est-ce qui t'a retenu jusqu'ici ? parle-moi de ta vie. vide ton sac, je t'écoute. c'est l'occasion de tout sortir : tes envies, tes soucis, tout.",
    "es": "¿qué te ha frenado hasta ahora? háblame de tu vida. desahógate, te escucho. aquí tienes la ocasión de soltarlo todo: tus deseos, tus preocupaciones, todo.",
    "ar": "ما الذي أوقفك حتى الآن؟ احكِ لي عن حياتك. أخرج كل ما في صدرك، أنا أسمعك. هذه فرصتك لتتخلّص من كل شيء: أمنياتك، همومك، كل شيء.",
    "ru": "что тебя до сих пор останавливало? расскажи мне о своей жизни. выговорись, я тебя слушаю. здесь можно сбросить всё: твои желания, твои тревоги, всё."
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
    "de": "hast du das gefühl, dass dir nie jemand gezeigt hat, wie man nach prinzipien lebt, grenzen setzt und als mann führt?",
    "en": "do you feel nobody ever showed you how to live by principles, set boundaries and lead as a man?",
    "fr": "as-tu l'impression que personne ne t'a jamais appris à vivre selon des principes, à poser des limites et à montrer la voie en tant qu'homme ?",
    "es": "¿sientes que nadie te enseñó nunca a vivir con principios, a poner límites y a liderar como hombre?",
    "ar": "هل تشعر أن أحداً لم يعلّمك يوماً كيف تعيش وفق مبادئ، وتضع حدوداً، وتقود كرجل؟",
    "ru": "тебе кажется, что никто никогда не учил тебя жить по принципам, ставить границы и быть мужчиной, который ведёт за собой?"
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
    "de": "bist du bereit, 90 tage bequemlichkeit gegen echte veränderung einzutauschen?",
    "en": "are you ready to trade 90 days of comfort for real change?",
    "fr": "es-tu prêt à échanger 90 jours de confort contre un vrai changement ?",
    "es": "¿estás dispuesto a dejar la comodidad durante 90 días para cambiar de verdad?",
    "ar": "هل أنت مستعد أن تتخلى عن راحتك 90 يوماً مقابل تغيير حقيقي؟",
    "ru": "ты готов отказаться от комфорта на 90 дней ради настоящих перемен?"
   },
   "module": "syn",
   "polarity": -1,
   "reads": {
    "yes": "He has decided before the plan even starts: he is willing to pay with comfort, the same attitude that carried Paul through his first three hard months. A yes is easy on a screen, though. The real test comes in weeks one and two, so his plan must hold up on the days he has no motivation.",
    "no": "He is not ready to give up comfort, or he does not trust himself to keep it up for 90 days, probably because he has started and stopped before. For him the core rule matters most: start so low he barely notices it, one alarm, one push-up, until his brain wants more."
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
   "de": "selbstverantwortung",
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
      out[mod] = n ? Math.round((sum / (n * 3)) * 100) : null;
    }
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
      noBreathHolds: c.includes("heart") || c.includes("bp") || c.includes("epilepsy") || c.includes("acute"),
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

  if (typeof module !== "undefined" && module.exports) module.exports = Q;
  else root.PUR_Q = Q;

})(typeof globalThis !== "undefined" ? globalThis : this);

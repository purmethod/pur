// the pur questionnaire: paul's 42 original questions (6 languages) plus profile and health check.
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
    "en": "who you are, so the blueprint fits your life and your age.",
    "de": "wer du bist, damit der blueprint zu deinem leben und deinem alter passt.",
    "fr": "qui tu es, pour que le blueprint corresponde à ta vie et à ton âge.",
    "es": "quién eres, para que el blueprint encaje con tu vida y tu edad.",
    "ar": "من أنت، حتى يناسب المخطط حياتك وعمرك.",
    "ru": "кто ты, чтобы blueprint подходил к твоей жизни и твоему возрасту."
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
    "es": "dónde está tu cuerpo hoy. sin juicio, solo el punto de partida.",
    "ar": "أين يقف جسدك اليوم. لا حكم، فقط نقطة البداية.",
    "ru": "где сегодня находится твоё тело. без оценки, только точка старта."
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
    "fr": "sois honnête. personne ne voit ces réponses à part le système qui écrit ton blueprint.",
    "es": "sé honesto. nadie ve estas respuestas excepto el sistema que escribe tu blueprint.",
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
    "de": "körperliche kontrolle",
    "fr": "contrôle physique",
    "es": "control físico",
    "ar": "التحكم الجسدي",
    "ru": "физический контроль"
   },
   "intro": {
    "en": "pillar i. sexual control, sleep, movement, food, breath, temperature.",
    "de": "säule i. sexuelle kontrolle, schlaf, bewegung, ernährung, atem, temperatur.",
    "fr": "pilier i. contrôle sexuel, sommeil, mouvement, alimentation, respiration, température.",
    "es": "pilar i. control sexual, sueño, movimiento, alimentación, respiración, temperatura.",
    "ar": "الركيزة الأولى. التحكم الجنسي، النوم، الحركة، الطعام، التنفس، الحرارة.",
    "ru": "опора i. сексуальный контроль, сон, движение, питание, дыхание, температура."
   }
  },
  {
   "id": "u",
   "title": {
    "en": "understanding the mind",
    "de": "den geist verstehen",
    "fr": "comprendre l'esprit",
    "es": "entender la mente",
    "ar": "فهم العقل",
    "ru": "понимание ума"
   },
   "intro": {
    "en": "pillar ii. awareness, impulse, dopamine, attention, identity, emotion.",
    "de": "säule ii. bewusstsein, impuls, dopamin, aufmerksamkeit, identität, emotion.",
    "fr": "pilier ii. conscience, impulsion, dopamine, attention, identité, émotion.",
    "es": "pilar ii. conciencia, impulso, dopamina, atención, identidad, emoción.",
    "ar": "الركيزة الثانية. الوعي، الاندفاع، الدوبامين، الانتباه، الهوية، العاطفة.",
    "ru": "опора ii. осознанность, импульс, дофамин, внимание, идентичность, эмоции."
   }
  },
  {
   "id": "r",
   "title": {
    "en": "responsibility",
    "de": "verantwortung",
    "fr": "responsabilité",
    "es": "responsabilidad",
    "ar": "المسؤولية",
    "ru": "ответственность"
   },
   "intro": {
    "en": "pillar iii. accountability, promises, principles, relationships, trust, legacy.",
    "de": "säule iii. selbstverantwortung, versprechen, prinzipien, beziehung, vertrauen, vermächtnis.",
    "fr": "pilier iii. responsabilité de soi, promesses, principes, relations, confiance, héritage.",
    "es": "pilar iii. autorresponsabilidad, promesas, principios, relaciones, confianza, legado.",
    "ar": "الركيزة الثالثة. المسؤولية الذاتية، الوعود، المبادئ، العلاقات، الثقة، الإرث.",
    "ru": "опора iii. самоответственность, обещания, принципы, отношения, доверие, наследие."
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
    "en": "what you want your life to become, and how i should speak to you.",
    "de": "was aus deinem leben werden soll, und wie ich mit dir sprechen soll.",
    "fr": "ce que ta vie doit devenir, et comment je dois te parler.",
    "es": "en qué quieres que se convierta tu vida, y cómo debo hablarte.",
    "ar": "ما الذي تريد أن تصبح عليه حياتك، وكيف يجب أن أتحدث إليك.",
    "ru": "какой должна стать твоя жизнь, и как мне с тобой говорить."
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
   "max": 40,
   "required": true
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "type": "textarea",
   "q": {
    "en": "what is the one thing that has to change in the next 90 days?",
    "de": "was ist das eine, das sich in den nächsten 90 tagen ändern muss?",
    "fr": "quelle est la chose qui doit changer dans les 90 prochains jours ?",
    "es": "¿qué es lo único que tiene que cambiar en los próximos 90 días?",
    "ar": "ما الشيء الوحيد الذي يجب أن يتغير في الأيام التسعين القادمة؟",
    "ru": "что одно должно измениться в ближайшие 90 дней?"
   },
   "max": 300,
   "required": true
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "required": true,
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
   "q": {
    "en": "does your sexual energy mostly leave your life through consumption instead of strengthening your body, focus, or connection?",
    "de": "verlässt deine sexuelle energie dein leben eher durch konsum, statt deinen körper, fokus oder echte verbindung zu stärken?",
    "fr": "est ce que ton énergie sexuelle quitte surtout ta vie par la consommation au lieu de renforcer ton corps, ton focus ou une vraie connexion ?",
    "es": "¿tu energía sexual sale de tu vida más por consumo que por fortalecer tu cuerpo, enfoque o conexión real?",
    "ar": "هل تخرج طاقتك الجنسية من حياتك غالباً عبر الاستهلاك بدلاً من تقوية جسدك أو تركيزك أو اتصالك الحقيقي؟",
    "ru": "уходит ли твоя сексуальная энергия в потребление вместо того чтобы усиливать тело, фокус или реальную связь?"
   },
   "module": "p0",
   "polarity": 1,
   "required": true
  },
  {
   "id": "p0_2",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "have you ever deliberately trained your pelvic floor and observed what changed?",
    "de": "hast du deinen beckenboden jemals bewusst trainiert und beobachtet, was sich verändert?",
    "fr": "as tu déjà entraîné consciemment ton plancher pelvien et observé ce qui a changé ?",
    "es": "¿alguna vez entrenaste conscientemente tu suelo pélvico y observaste qué cambió?",
    "ar": "هل دربت قاع الحوض بوعي من قبل ولاحظت ما الذي تغيّر؟",
    "ru": "тренировал ли ты сознательно тазовое дно и наблюдал, что изменилось?"
   },
   "module": "p0",
   "polarity": -1,
   "required": true
  },
  {
   "id": "p1_1",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you go to bed later than you know is good for you even when nothing important is left?",
    "de": "gehst du später schlafen, als du weißt, dass es dir guttut, obwohl nichts wichtiges mehr ansteht?",
    "fr": "te couches tu plus tard que tu le sais bon pour toi même quand il ne reste rien d’important ?",
    "es": "¿te acuestas más tarde de lo que sabes que te conviene aunque ya no quede nada importante?",
    "ar": "هل تنام متأخراً أكثر مما تعرف أنه جيد لك حتى عندما لا يبقى شيء مهم؟",
    "ru": "ложишься ли ты спать позже, чем знаешь полезным для себя, даже когда ничего важного уже не осталось?"
   },
   "module": "p1",
   "polarity": 1,
   "required": true
  },
  {
   "id": "p1_2",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you usually protect the last 30 minutes before sleep from phone, video, and noise?",
    "de": "schützt du die letzten 30 minuten vor dem schlafen meistens vor handy, videos und lärm?",
    "fr": "protèges tu généralement les 30 dernières minutes avant le sommeil des écrans et du bruit ?",
    "es": "¿proteges normalmente los últimos 30 minutos antes de dormir de móvil, video y ruido?",
    "ar": "هل تحمي آخر 30 دقيقة قبل النوم من الهاتف والفيديو والضجيج؟",
    "ru": "защищаешь ли ты последние 30 минут перед сном от телефона, видео и шума?"
   },
   "module": "p1",
   "polarity": -1,
   "required": true
  },
  {
   "id": "p2_1",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "does a whole week sometimes pass without you deliberately challenging your body?",
    "de": "vergeht manchmal eine ganze woche, ohne dass du deinen körper bewusst gefordert hast?",
    "fr": "est ce qu’une semaine entière passe parfois sans que tu défies délibérément ton corps ?",
    "es": "¿a veces pasa una semana entera sin desafiar deliberadamente tu cuerpo?",
    "ar": "هل تمر أحياناً أسبوع كامل من دون أن تتحدى جسدك بوعي؟",
    "ru": "бывает ли так, что проходит целая неделя без осознанного физического вызова для твоего тела?"
   },
   "module": "p2",
   "polarity": 1,
   "required": true
  },
  {
   "id": "p2_2",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you currently have a fixed training ritual rather than training only when you feel like it?",
    "de": "hast du aktuell ein festes trainingsritual statt nur zu trainieren, wenn du lust hast?",
    "fr": "as tu actuellement un rituel d’entraînement fixe au lieu de t’entraîner seulement quand tu en as envie ?",
    "es": "¿tienes actualmente un ritual fijo de entrenamiento en vez de entrenar solo cuando te apetece?",
    "ar": "هل لديك حالياً طقس تدريب ثابت بدلاً من التدريب فقط عندما تشعر بالرغبة؟",
    "ru": "есть ли у тебя сейчас фиксированный тренировочный ритуал, а не тренировки только по настроению?"
   },
   "module": "p2",
   "polarity": -1,
   "required": true
  },
  {
   "id": "p3_1",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you often eat for relief, reward, or numbness rather than real hunger?",
    "de": "isst du oft aus erleichterung, belohnung oder betäubung statt aus echtem hunger?",
    "fr": "manges tu souvent pour le soulagement, la récompense ou l’engourdissement au lieu de la vraie faim ?",
    "es": "¿comes a menudo por alivio, recompensa o entumecimiento y no por hambre real?",
    "ar": "هل تأكل كثيراً من أجل الراحة أو المكافأة أو التخدير بدلاً من الجوع الحقيقي؟",
    "ru": "ешь ли ты часто ради облегчения, награды или онемения, а не из настоящего голода?"
   },
   "module": "p3",
   "polarity": 1,
   "required": true
  },
  {
   "id": "p3_2",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "can you stop eating when your body has enough even if the food still tastes good?",
    "de": "kannst du aufhören zu essen, wenn dein körper genug hat, selbst wenn es noch gut schmeckt?",
    "fr": "peux tu t’arrêter de manger quand ton corps en a assez même si c’est encore bon ?",
    "es": "¿puedes dejar de comer cuando tu cuerpo ya tiene suficiente aunque siga sabiendo bien?",
    "ar": "هل تستطيع التوقف عن الأكل عندما يكتفي جسدك حتى لو بقي الطعام لذيذاً؟",
    "ru": "можешь ли ты остановиться, когда телу уже достаточно, даже если еда всё ещё вкусная?"
   },
   "module": "p3",
   "polarity": -1,
   "required": true
  },
  {
   "id": "p4_1",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you notice that stress shortens your breath before you notice your thoughts?",
    "de": "merkst du, dass stress deinen atem verkürzt, bevor du deine gedanken bemerkst?",
    "fr": "remarques tu que le stress raccourcit ta respiration avant même de remarquer tes pensées ?",
    "es": "¿notas que el estrés acorta tu respiración antes de darte cuenta de tus pensamientos?",
    "ar": "هل تلاحظ أن التوتر يقصر تنفسك قبل أن تلاحظ أفكارك؟",
    "ru": "замечаешь ли ты, что стресс укорачивает дыхание раньше, чем ты замечаешь мысли?"
   },
   "module": "p4",
   "polarity": 1,
   "required": true
  },
  {
   "id": "p4_2",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you already use your breath on purpose to change your state?",
    "de": "nutzt du deinen atem bereits bewusst, um deinen zustand zu verändern?",
    "fr": "utilises tu déjà ta respiration consciemment pour changer ton état ?",
    "es": "¿ya usas tu respiración de forma consciente para cambiar tu estado?",
    "ar": "هل تستخدم تنفسك بالفعل بوعي لتغيير حالتك؟",
    "ru": "используешь ли ты уже дыхание сознательно для смены состояния?"
   },
   "module": "p4",
   "polarity": -1,
   "required": true
  },
  {
   "id": "p5_1",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "do you avoid discomfort quickly even when you know discomfort would sharpen you?",
    "de": "weichst du unbehagen schnell aus, obwohl du weißt, dass es dich schärfen würde?",
    "fr": "évites tu rapidement l’inconfort même quand tu sais qu’il te rendrait plus tranchant ?",
    "es": "¿evitas la incomodidad rápido aunque sepas que te haría más afilado?",
    "ar": "هل تتجنب الانزعاج بسرعة رغم أنك تعرف أنه كان سيجعلك أكثر حدة؟",
    "ru": "избегаешь ли ты дискомфорта быстро, даже когда знаешь, что он сделал бы тебя острее?"
   },
   "module": "p5",
   "polarity": 1,
   "required": true
  },
  {
   "id": "p5_2",
   "section": "p",
   "type": "scale",
   "q": {
    "en": "can you step into cold or discomfort without a long inner negotiation?",
    "de": "kannst du bewusst in kälte oder unbehagen gehen, ohne lange innerlich zu verhandeln?",
    "fr": "peux tu entrer dans le froid ou l’inconfort sans longue négociation intérieure ?",
    "es": "¿puedes entrar en frío o incomodidad sin una larga negociación interna?",
    "ar": "هل تستطيع دخول البرد أو الانزعاج دون مفاوضة داخلية طويلة؟",
    "ru": "можешь ли ты входить в холод или дискомфорт без долгой внутренней торговли?"
   },
   "module": "p5",
   "polarity": -1,
   "required": true
  },
  {
   "id": "u0_1",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "do you often react before you even notice what you are feeling?",
    "de": "reagierst du oft, bevor du überhaupt bemerkst, was du gerade fühlst?",
    "fr": "réagis tu souvent avant même de remarquer ce que tu ressens ?",
    "es": "¿reaccionas a menudo antes de notar lo que estás sintiendo?",
    "ar": "هل تتفاعل كثيراً قبل أن تلاحظ حتى ما الذي تشعر به؟",
    "ru": "реагируешь ли ты часто до того, как вообще заметишь, что чувствуешь?"
   },
   "module": "u0",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u0_2",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "can you watch an impulse without obeying it right away?",
    "de": "kannst du einen impuls beobachten, ohne ihm sofort zu gehorchen?",
    "fr": "peux tu regarder une impulsion sans lui obéir tout de suite ?",
    "es": "¿puedes observar un impulso sin obedecerlo de inmediato?",
    "ar": "هل تستطيع مراقبة دافع دون أن تطيعه فوراً؟",
    "ru": "можешь ли ты наблюдать импульс, не подчиняясь ему сразу?"
   },
   "module": "u0",
   "polarity": -1,
   "required": true
  },
  {
   "id": "u1_1",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "when stress hits, do you move toward phone, food, porn, nicotine, or noise before you consciously choose?",
    "de": "bewegst du dich bei stress zu handy, essen, porno, nikotin oder lärm, bevor du bewusst wählst?",
    "fr": "quand le stress arrive, vas tu vers le téléphone, la nourriture, le porno, la nicotine ou le bruit avant de choisir consciemment ?",
    "es": "cuando llega el estrés, ¿te mueves hacia móvil, comida, porno, nicotina o ruido antes de elegir conscientemente?",
    "ar": "عندما يأتي التوتر، هل تتجه إلى الهاتف أو الطعام أو الإباحية أو النيكوتين أو الضوضاء قبل أن تختار بوعي؟",
    "ru": "когда приходит стресс, тянешься ли ты к телефону, еде, порно, никотину или шуму до осознанного выбора?"
   },
   "module": "u1",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u1_2",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "can you clearly feel the difference between hunger, loneliness, boredom, and real desire?",
    "de": "kannst du den unterschied zwischen hunger, einsamkeit, langeweile und echtem verlangen klar spüren?",
    "fr": "peux tu sentir clairement la différence entre faim, solitude, ennui et vrai désir ?",
    "es": "¿puedes sentir claramente la diferencia entre hambre, soledad, aburrimiento y deseo real?",
    "ar": "هل تستطيع أن تميّز بوضوح بين الجوع والوحدة والملل والرغبة الحقيقية؟",
    "ru": "можешь ли ты чётко чувствовать разницу между голодом, одиночеством, скукой и настоящим желанием?"
   },
   "module": "u1",
   "polarity": -1,
   "required": true
  },
  {
   "id": "u2_1",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "do normal life, silence, work, or training feel weaker to you than screens, fantasy, or quick stimulation?",
    "de": "fühlen sich stille, arbeit oder training für dich schwächer an als bildschirm, fantasie oder schnelle stimulation?",
    "fr": "la vie normale, le silence, le travail ou l’entraînement te paraissent ils plus faibles que les écrans, la fantaisie ou la stimulation rapide ?",
    "es": "¿la vida normal, el silencio, el trabajo o el entrenamiento te parecen más débiles que pantallas, fantasía o estimulación rápida?",
    "ar": "هل تبدو لك الحياة العادية أو الصمت أو العمل أو التدريب أضعف من الشاشات أو الخيال أو التحفيز السريع؟",
    "ru": "кажутся ли тебе обычная жизнь, тишина, работа или тренировка слабее экранов, фантазий или быстрой стимуляции?"
   },
   "module": "u2",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u2_2",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "is there at least one habit in your life that you know is training your reward system against you?",
    "de": "gibt es mindestens eine gewohnheit in deinem leben, von der du weißt, dass sie dein belohnungssystem gegen dich trainiert?",
    "fr": "y a t il au moins une habitude dans ta vie que tu sais entraîner ton système de récompense contre toi ?",
    "es": "¿hay al menos un hábito en tu vida que sabes que está entrenando tu sistema de recompensa en tu contra?",
    "ar": "هل توجد عادة واحدة على الأقل تعرف أنها تدرب نظام المكافأة ضدك؟",
    "ru": "есть ли хотя бы одна привычка в твоей жизни, о которой ты знаешь, что она тренирует твою систему награды против тебя?"
   },
   "module": "u2",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u3_1",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "do you automatically switch between apps, tabs, thoughts, or fantasies when you should stay on one thing?",
    "de": "wechselst du automatisch zwischen apps, tabs, gedanken oder fantasien, wenn du bei einer sache bleiben solltest?",
    "fr": "passes tu automatiquement d’une application, d’un onglet ou d’une pensée à une autre quand tu devrais rester sur une seule chose ?",
    "es": "¿cambias automáticamente entre apps, pestañas, pensamientos o fantasías cuando deberías quedarte en una sola cosa?",
    "ar": "هل تنتقل تلقائياً بين التطبيقات أو الأفكار أو الخيالات عندما يجب أن تبقى على شيء واحد؟",
    "ru": "переключаешься ли ты автоматически между приложениями, вкладками, мыслями или фантазиями, когда должен оставаться на одной вещи?"
   },
   "module": "u3",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u3_2",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "can you focus 30 minutes on one task without checking something else?",
    "de": "kannst du dich 30 minuten auf eine sache konzentrieren, ohne etwas anderes zu checken?",
    "fr": "peux tu te concentrer 30 minutes sur une seule tâche sans vérifier autre chose ?",
    "es": "¿puedes concentrarte 30 minutos en una tarea sin revisar otra cosa?",
    "ar": "هل تستطيع التركيز 30 دقيقة على مهمة واحدة من دون فحص شيء آخر؟",
    "ru": "можешь ли ты 30 минут фокусироваться на одной задаче, не проверяя что то другое?"
   },
   "module": "u3",
   "polarity": -1,
   "required": true
  },
  {
   "id": "u4_1",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "do you adapt so much that you sometimes no longer know what actually comes from you?",
    "de": "passt du dich so sehr an, dass du manchmal nicht mehr weißt, was eigentlich wirklich von dir kommt?",
    "fr": "t’adaptes tu tellement que tu ne sais parfois plus ce qui vient vraiment de toi ?",
    "es": "¿te adaptas tanto que a veces ya no sabes qué viene realmente de ti?",
    "ar": "هل تتكيف كثيراً حتى أنك أحياناً لا تعرف ما الذي يأتي فعلاً منك؟",
    "ru": "адаптируешься ли ты так сильно, что иногда уже не знаешь, что реально исходит от тебя?"
   },
   "module": "u4",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u4_2",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "do you already act like the man you say you want to become?",
    "de": "handelst du bereits wie der mann, von dem du sagst, dass du ihn werden willst?",
    "fr": "agis tu déjà comme l’homme que tu dis vouloir devenir ?",
    "es": "¿ya actúas como el hombre que dices que quieres llegar a ser?",
    "ar": "هل تتصرف بالفعل مثل الرجل الذي تقول إنك تريد أن تصبحه؟",
    "ru": "действуешь ли ты уже как мужчина, которым говоришь, что хочешь стать?"
   },
   "module": "u4",
   "polarity": -1,
   "required": true
  },
  {
   "id": "u5_1",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "does criticism create inner tension in you faster than curiosity?",
    "de": "erzeugt kritik in dir schneller spannung als neugier?",
    "fr": "la critique crée t elle en toi plus vite de la tension que de la curiosité ?",
    "es": "¿la crítica crea en ti tensión más rápido que curiosidad?",
    "ar": "هل تخلق فيك الانتقادات توتراً أسرع من الفضول؟",
    "ru": "создаёт ли критика в тебе напряжение быстрее, чем любопытство?"
   },
   "module": "u5",
   "polarity": 1,
   "required": true
  },
  {
   "id": "u5_2",
   "section": "u",
   "type": "scale",
   "q": {
    "en": "can you stay honest and calm in conflict without becoming cold, fake, or explosive?",
    "de": "kannst du in konflikt ruhig und ehrlich bleiben, ohne kalt, falsch oder explosiv zu werden?",
    "fr": "peux tu rester honnête et calme dans le conflit sans devenir froid, faux ou explosif ?",
    "es": "¿puedes mantenerte honesto y calmado en conflicto sin volverte frío, falso o explosivo?",
    "ar": "هل تستطيع أن تبقى صادقاً وهادئاً في الصراع من دون أن تصبح بارداً أو زائفاً أو منفجراً؟",
    "ru": "можешь ли ты оставаться честным и спокойным в конфликте, не становясь холодным, фальшивым или взрывным?"
   },
   "module": "u5",
   "polarity": -1,
   "required": true
  },
  {
   "id": "r0_1",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do you still blame circumstances, people, or the past more than you want to admit?",
    "de": "gibst du umständen, menschen oder der vergangenheit noch mehr schuld, als du zugeben willst?",
    "fr": "blâmes tu encore les circonstances, les gens ou le passé plus que tu ne voudrais l’admettre ?",
    "es": "¿sigues culpando a circunstancias, personas o al pasado más de lo que quieres admitir?",
    "ar": "هل ما زلت تلوم الظروف أو الناس أو الماضي أكثر مما تريد أن تعترف؟",
    "ru": "обвиняешь ли ты обстоятельства, людей или прошлое больше, чем хочешь признать?"
   },
   "module": "r0",
   "polarity": 1,
   "required": true
  },
  {
   "id": "r0_2",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do you fully own the consequences of your decisions even when nobody sees them?",
    "de": "übernimmst du die folgen deiner entscheidungen vollständig, auch wenn niemand es sieht?",
    "fr": "assumes tu pleinement les conséquences de tes décisions même quand personne ne les voit ?",
    "es": "¿asumes plenamente las consecuencias de tus decisiones incluso cuando nadie las ve?",
    "ar": "هل تتحمل نتائج قراراتك بالكامل حتى عندما لا يراها أحد؟",
    "ru": "полностью ли ты принимаешь последствия своих решений, даже когда никто их не видит?"
   },
   "module": "r0",
   "polarity": -1,
   "required": true
  },
  {
   "id": "r1_1",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do you make promises to yourself that you later break in private?",
    "de": "machst du dir selbst versprechen, die du später heimlich brichst?",
    "fr": "te fais tu des promesses que tu casses ensuite en privé ?",
    "es": "¿te haces promesas que luego rompes en privado?",
    "ar": "هل تعد نفسك بأشياء ثم تكسرها في الخفاء؟",
    "ru": "даёшь ли ты себе обещания, которые потом нарушаешь втайне?"
   },
   "module": "r1",
   "polarity": 1,
   "required": true
  },
  {
   "id": "r1_2",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "is your word to yourself currently as strong as your word to other people?",
    "de": "ist dein wort an dich selbst aktuell so stark wie dein wort an andere?",
    "fr": "ta parole envers toi même est elle actuellement aussi forte que ta parole envers les autres ?",
    "es": "¿tu palabra contigo es actualmente tan fuerte como tu palabra con otras personas?",
    "ar": "هل كلمتك لنفسك الآن قوية مثل كلمتك للآخرين؟",
    "ru": "твоё слово себе сейчас так же сильно, как твоё слово другим?"
   },
   "module": "r1",
   "polarity": -1,
   "required": true
  },
  {
   "id": "r2_1",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do your boundaries become weaker when the person in front of you matters a lot to you?",
    "de": "werden deine grenzen schwächer, wenn dir die person vor dir sehr wichtig ist?",
    "fr": "tes limites deviennent elles plus faibles quand la personne en face compte beaucoup pour toi ?",
    "es": "¿tus límites se debilitan cuando la persona que tienes delante te importa mucho?",
    "ar": "هل تصبح حدودك أضعف عندما تكون الشخص المقابل مهماً جداً لك؟",
    "ru": "становятся ли твои границы слабее, когда человек напротив очень важен для тебя?"
   },
   "module": "r2",
   "polarity": 1,
   "required": true
  },
  {
   "id": "r2_2",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "have you clearly written what you stand for and what you will not tolerate?",
    "de": "hast du klar aufgeschrieben, wofür du stehst und was du nicht duldest?",
    "fr": "as tu clairement écrit ce que tu défends et ce que tu ne tolères pas ?",
    "es": "¿has escrito claramente lo que defiendes y lo que no toleras?",
    "ar": "هل كتبت بوضوح ما الذي تمثله وما الذي لن تقبله؟",
    "ru": "записал ли ты ясно, за что стоишь и что не будешь терпеть?"
   },
   "module": "r2",
   "polarity": -1,
   "required": true
  },
  {
   "id": "r3_1",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "does another person's mood sometimes control your inner state more than you want?",
    "de": "kontrolliert die stimmung eines anderen menschen manchmal deinen inneren zustand mehr, als du willst?",
    "fr": "l’humeur d’une autre personne contrôle t elle parfois ton état intérieur plus que tu ne le voudrais ?",
    "es": "¿el estado de ánimo de otra persona controla a veces tu estado interior más de lo que te gustaría?",
    "ar": "هل تتحكم مزاجية شخص آخر أحياناً في حالتك الداخلية أكثر مما تريد؟",
    "ru": "контролирует ли настроение другого человека твоё внутреннее состояние больше, чем тебе хотелось бы?"
   },
   "module": "r3",
   "polarity": 1,
   "required": true
  },
  {
   "id": "r3_2",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "can you stay grounded in a relationship without pleasing, chasing, or hardening?",
    "de": "kannst du in einer beziehung geerdet bleiben, ohne zu gefallen, zu jagen oder hart zu werden?",
    "fr": "peux tu rester centré dans une relation sans plaire, poursuivre ou te durcir ?",
    "es": "¿puedes mantenerte centrado en una relación sin complacer, perseguir ni endurecerte?",
    "ar": "هل تستطيع أن تبقى ثابتاً في العلاقة من دون إرضاء أو مطاردة أو تصلب؟",
    "ru": "можешь ли ты оставаться заземлённым в отношениях без угождения, погони или ожесточения?"
   },
   "module": "r3",
   "polarity": -1,
   "required": true
  },
  {
   "id": "r4_1",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do people sometimes feel more uncertainty in you than you want to show?",
    "de": "spüren menschen manchmal mehr unsicherheit in dir, als du zeigen willst?",
    "fr": "les gens sentent ils parfois plus d’incertitude en toi que tu ne veux montrer ?",
    "es": "¿la gente siente a veces más inseguridad en ti de la que quieres mostrar?",
    "ar": "هل يشعر الناس أحياناً بعدم يقين فيك أكثر مما تريد أن تُظهره؟",
    "ru": "чувствуют ли люди иногда в тебе больше неуверенности, чем ты хочешь показать?"
   },
   "module": "r4",
   "polarity": 1,
   "required": true
  },
  {
   "id": "r4_2",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "are you currently consistent enough that your life feels bankable to yourself?",
    "de": "bist du aktuell so konsistent, dass dein leben sich für dich selbst bankfähig anfühlt?",
    "fr": "es tu actuellement assez cohérent pour que ta vie te paraisse fiable à toi même ?",
    "es": "¿eres actualmente lo bastante consistente como para que tu vida te parezca fiable a ti mismo?",
    "ar": "هل أنت حالياً متسق بما يكفي ليبدو لك أن حياتك يمكن الوثوق بها؟",
    "ru": "достаточно ли ты сейчас последователен, чтобы твоя жизнь казалась тебе самому надёжной?"
   },
   "module": "r4",
   "polarity": -1,
   "required": true
  },
  {
   "id": "r5_1",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do you live more from day to day than from a larger direction or mission?",
    "de": "lebst du eher von tag zu tag als aus einer größeren richtung oder mission heraus?",
    "fr": "vis tu davantage au jour le jour qu’à partir d’une direction ou mission plus grande ?",
    "es": "¿vives más de día en día que desde una dirección o misión más grande?",
    "ar": "هل تعيش يوماً بيوم أكثر من العيش من اتجاه أو مهمة أكبر؟",
    "ru": "живёшь ли ты больше от дня к дню, чем из более большого направления или миссии?"
   },
   "module": "r5",
   "polarity": 1,
   "required": true
  },
  {
   "id": "r5_2",
   "section": "r",
   "type": "scale",
   "q": {
    "en": "do you make important decisions with the man at 40, 50, or 60 already in mind?",
    "de": "triffst du wichtige entscheidungen bereits mit dem mann von 40, 50 oder 60 im blick?",
    "fr": "prends tu des décisions importantes en gardant déjà en tête l’homme de 40, 50 ou 60 ans ?",
    "es": "¿tomas decisiones importantes con el hombre de 40, 50 o 60 años ya en mente?",
    "ar": "هل تتخذ قرارات مهمة مع وضع الرجل في سن 40 أو 50 أو 60 في ذهنك؟",
    "ru": "принимаешь ли ты важные решения, уже держа в уме мужчину 40, 50 или 60 лет?"
   },
   "module": "r5",
   "polarity": -1,
   "required": true
  },
  {
   "id": "meta_partner",
   "section": "values",
   "type": "scale",
   "q": {
    "en": "do you want to build deeply with one woman rather than stay undefined forever?",
    "de": "willst du mit einer frau tief etwas aufbauen, statt für immer unklar zu bleiben?",
    "fr": "veux tu construire profondément avec une femme au lieu de rester indéfini pour toujours ?",
    "es": "¿quieres construir profundamente con una mujer en lugar de quedarte indefinido para siempre?",
    "ar": "هل تريد أن تبني بعمق مع امرأة واحدة بدلاً من البقاء غير محدد إلى الأبد؟",
    "ru": "хочешь ли ты строить глубоко с одной женщиной вместо того чтобы навсегда оставаться неопределённым?"
   },
   "required": true,
   "showIf": {
    "relationship": [
     "single",
     "dating",
     "separated",
     "widowed"
    ]
   }
  },
  {
   "id": "meta_freedom",
   "section": "values",
   "type": "scale",
   "q": {
    "en": "does freedom, travel, and movement matter more to you right now than building family?",
    "de": "ist dir freiheit, reisen und bewegung aktuell wichtiger als familienaufbau?",
    "fr": "la liberté, le voyage et le mouvement comptent ils plus pour toi maintenant que construire une famille ?",
    "es": "¿la libertad, los viajes y el movimiento importan más para ti ahora que construir familia?",
    "ar": "هل الحرية والسفر والحركة أهم لك الآن من بناء عائلة؟",
    "ru": "свобода, путешествия и движение сейчас важнее для тебя, чем построение семьи?"
   },
   "required": true,
   "showIf": {
    "age_max": 45
   }
  },
  {
   "id": "meta_principles",
   "section": "values",
   "type": "scale",
   "q": {
    "en": "do you feel nobody clearly taught you principles, boundaries, and masculine direction?",
    "de": "hast du das gefühl, dass dir nie klar prinzipien, grenzen und männliche führung beigebracht wurden?",
    "fr": "as tu l’impression que personne ne t’a clairement appris les principes, les limites et la direction masculine ?",
    "es": "¿sientes que nadie te enseñó claramente principios, límites y dirección masculina?",
    "ar": "هل تشعر أن لا أحد علّمك بوضوح المبادئ والحدود والاتجاه الرجولي؟",
    "ru": "есть ли у тебя чувство, что никто ясно не научил тебя принципам, границам и мужскому направлению?"
   },
   "required": true
  },
  {
   "id": "syn_1",
   "section": "values",
   "type": "scale",
   "q": {
    "en": "do you know you have been living below what is possible for you?",
    "de": "weißt du, dass du unter dem lebst, was für dich möglich wäre?",
    "fr": "sais tu que tu vis en dessous de ce qui est possible pour toi ?",
    "es": "¿sabes que has estado viviendo por debajo de lo posible para ti?",
    "ar": "هل تعرف أنك كنت تعيش دون ما هو ممكن لك؟",
    "ru": "знаешь ли ты, что живёшь ниже того, что для тебя возможно?"
   },
   "module": "syn",
   "polarity": 1,
   "required": true
  },
  {
   "id": "syn_2",
   "section": "values",
   "type": "scale",
   "q": {
    "en": "are you ready to trade 90 days of comfort for 90 days of real change?",
    "de": "bist du bereit, 90 tage komfort gegen 90 tage echte veränderung zu tauschen?",
    "fr": "es tu prêt à échanger 90 jours de confort contre 90 jours de vrai changement ?",
    "es": "¿estás listo para cambiar 90 días de comodidad por 90 días de cambio real?",
    "ar": "هل أنت مستعد لاستبدال 90 يوماً من الراحة بـ 90 يوماً من التغيير الحقيقي؟",
    "ru": "готов ли ты обменять 90 дней комфорта на 90 дней реального изменения?"
   },
   "module": "syn",
   "polarity": -1,
   "required": true
  },
  {
   "id": "obstacle",
   "section": "values",
   "type": "textarea",
   "q": {
    "en": "what has stopped you so far?",
    "de": "was hat dich bisher aufgehalten?",
    "fr": "qu'est-ce qui t'a arrêté jusqu'ici ?",
    "es": "¿qué te ha frenado hasta ahora?",
    "ar": "ما الذي أوقفك حتى الآن؟",
    "ru": "что тебя до сих пор останавливало?"
   },
   "max": 300,
   "required": false
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
   "required": true,
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
  "r5"
 ]
};

  const byId = Object.fromEntries(Q.items.map((it) => [it.id, it]));

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
      if (it.type === "text" || it.type === "textarea") {
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

  // 0 = solid, 100 = this level needs the most work
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

  // readable english summary of the answers, used to brief the model
  function describe(a) {
    const lines = [];
    const label = (it, v) => {
      if (it.type === "scale") return Q.scale.find((o) => o.v === v).l.en;
      if (it.type === "single") return it.options.find((o) => o.v === v).l.en;
      if (it.type === "multi") return v.map((x) => it.options.find((o) => o.v === x).l.en).join(", ");
      return String(v);
    };
    for (const s of Q.sections) {
      lines.push(`\n## ${s.title.en}`);
      for (const it of Q.items.filter((x) => x.section === s.id)) {
        if (a[it.id] === undefined) continue;
        const tag = it.module ? `[${it.module.toUpperCase()}] ` : "";
        lines.push(`- ${tag}${it.q.en} -> ${label(it, a[it.id])}`);
      }
    }
    return lines.join("\n");
  }

  Q.byId = byId;
  Q.visible = visible;
  Q.validate = validate;
  Q.score = score;
  Q.safety = safety;
  Q.describe = describe;

  if (typeof module !== "undefined" && module.exports) module.exports = Q;
  else root.PUR_Q = Q;
})(typeof globalThis !== "undefined" ? globalThis : this);

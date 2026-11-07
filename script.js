/* ==================================================
   AMIGO SECRETO FAMILIAR
   Datos e interacciones de la página.
   Los textos editables están agrupados en PARTICIPANTS y TRANSLATIONS.
   ================================================== */

/* 1. CONFIGURACIÓN: cambia aquí la fecha de la cuenta regresiva.
   Formato: AAAA-MM-DDTHH:MM:SS (hora local del evento). */
const EVENT_DATE = "2026-12-23T19:00:00";

/* 2. PARTICIPANTES: edita nombres y tres deseos en los tres idiomas.
   Para añadir a alguien, copia un bloque completo y cambia sus datos. */
const PARTICIPANTS = [
  { name: "Francis", wishes: {
    es: ["Opción 1", "Opción 2", "Opción 3"],
    en: ["Option 1", "Option 2", "Option 3"],
    ru: ["Вариант 1", "Вариант 2", "Вариант 3"]
  }},
  { name: "Guisell", wishes: {
    es: ["Una gift card de Victoria Secret", "Una crema de cara coreana", "Cepillo eléctrico para pelo", "Una polera de color oscuro", "Tallas de cuerpo color oscuro"],
    en: ["A Victoria's Secret gift card","A Korean face cream", "An electric hairbrush", "A dark-colored sweatshirt", "Dark-colored bath towels"],
    ru: [ "Подарочная карта Victoria's Secret", "Корейский крем для лица", "Электрическая щётка для волос", "Толстовка тёмного цвета","Банные полотенца тёмного цвета"]
  }},
  { name: "Andres", wishes: {
    es: ["Opción 1", "Opción 2", "Opción 3"],
    en: ["Option 1", "Option 2", "Option 3"],
    ru: ["Вариант 1", "Вариант 2", "Вариант 3"]
  }},
  { name: "Tamar", wishes: {
     es: [
   {name: "Shower speaker",
    link: "https://www.target.com/p/jlab-pop-party-portable-speaker/-/A-94730083?preselect=94633183#lnk=sametab"},
   {name: "Collapsible reusable water bottle",
    link: "https://www.target.com/p/unique-bargains-durable-water-bottle-collapsible-cup-500ml-hand-wash-silicone/-/A-1011615324?preselect=1011615321#lnk=sametab"}
],
     en: [
   {name: "Shower speaker",
    link: "https://www.target.com/p/jlab-pop-party-portable-speaker/-/A-94730083?preselect=94633183#lnk=sametab"},
   {name: "Collapsible reusable water bottle",
    link: "https://www.target.com/p/unique-bargains-durable-water-bottle-collapsible-cup-500ml-hand-wash-silicone/-/A-1011615324?preselect=1011615321#lnk=sametab"}
],
     ru: [
   {name: "Shower speaker",
    link: "https://www.target.com/p/jlab-pop-party-portable-speaker/-/A-94730083?preselect=94633183#lnk=sametab"},
   {name: "Collapsible reusable water bottle",
    link: "https://www.target.com/p/unique-bargains-durable-water-bottle-collapsible-cup-500ml-hand-wash-silicone/-/A-1011615324?preselect=1011615321#lnk=sametab"}
]
  }},
  { name: "Julio", wishes: {
    es: ["Opción 1", "Opción 2", "Opción 3"],
    en:  ["Option 1", "Option 2", "Option 3"],
    ru: ["Вариант 1", "Вариант 2", "Вариант 3"]
  }},
  { name: "Lisset", wishes: {
    es: ["Opción 1", "Opción 2", "Opción 3"],
    en:  ["Option 1", "Option 2", "Option 3"],
    ru:["Вариант 1", "Вариант 2", "Вариант 3"]
  }},
  { name: "Diego", wishes: {
    es: ["Opción 1", "Opción 2", "Opción 3"],
    en:  ["Option 1", "Option 2", "Option 3"],
    ru: ["Вариант 1", "Вариант 2", "Вариант 3"]
  }},
  { name: "Sebas", wishes: {
    es: ["Opción 1", "Opción 2", "Opción 3"],
    en: ["Option 1", "Option 2", "Option 3"],
    ru:["Вариант 1", "Вариант 2", "Вариант 3"]
  }}
];

/* 3. TRADUCCIONES: modifica aquí los textos de la página.
   Mantén las mismas claves en ES, EN y RU. */
const TRANSLATIONS = {
  es: {
    navRules: "Las reglas", navWishes: "Lista de deseos", navMessages: "Mensajes",
    eyebrow: "✦ American dentist David Burbank edition",
    heroTitle1: "Un regalo.", heroTitle2: "Una sorpresa.",
    heroLead: "Una vez más, la familia se reúne para celebrar la Navidad, intercambiar regalos y fingir que nadie tiene motivos para sospechar del sorteo.",
    heroButton1: "Ver lista de deseos", heroButton2: "Repasar las reglas",
    heroNote: "¿Qué es un regalo? ¿Qué es un presente?",
    artTagTop: "¡Sorpresa!", artTagBottom: "Con cariño<br>y algo de misterio",
    countdownTitle: "El gran día se acerca...",
    countdownIntro: "Recuerda: recibirás un regalo y deberás fingir que no lo esperabas.",
    countdownRunning: "Prepara tu mejor cara de sorpresa.",
    countdownToday: "¡Llegó el gran día! Que empiece el intercambio 🎁",
    countdownPast: "El encuentro ya pasó. ¡Que vivan los recuerdos familiares!",
    days: "días", hours: "horas", minutes: "minutos", seconds: "segundos",
    rulesTitle: "Las reglas del juego",
    rulesIntro: "Son pocas, son sencillas y sí, las vamos a cumplir (eso esperamos).",
    rule1Title: "Presupuesto",
    rule1Text: "S/ 100 para Perú o US$ 50 para Estados Unidos. La creatividad no tiene límite; la tarjeta de crédito, sí.",
    rule2Title: "Secreto, por favor",
    rule2Text: "No reveles a quién te tocó. Las indirectas cuentan como sospechosas y los interrogatorios no son válidos.",
    rule3Title: "Piensa en esa persona",
    rule3Text: "Usa la lista de deseos como guía. El verdadero valor del regalo está en el detalle y la intención.",
    rule4Title: "Llega a tiempo",
    rule4Text: "Ven a la hora acordada. La puntualidad también es un regalo.",
    wishesTitle: "La lista de deseos",
    wishesIntro: "Una pequeña ayuda para tu amigo secreto. No es una orden de compra… pero casi.",
    messageKicker: "03", messageTitle: "Lo importante no es el regalo…",
    messageSubtitle: "…es compartir y reírnos juntos",
    messageSignoff: "El comité desorganizador 🎄",
    messageButton: "Dame otra frase",
    footerBrand: "Amigo Secreto Familiar",
    footerText: "Hecho con cariño y espíritu navideño", backTop: "Volver arriba ↑",
    phrases: [
  "«La Navidad une a la familia. El amigo secreto pone a prueba esa unión.»",
  "«Una pregunta sospechosa siempre empieza con “solo por curiosidad…”.»",
  "«La creatividad no tiene límite; la tarjeta de crédito, sí.»",
  "«Actúa con naturalidad. Nadie sospechará de ti. Quizá.»",
  "«El azar es una cosa maravillosa, especialmente cuando nadie lo cuestiona.»",
  "«Recuerda: el regalo es secreto. Las sospechas, no tanto.»",
  "«La transparencia del sorteo está garantizada por el comité que organizó el sorteo.»",
  "La Coca-Cola tiene una vaina específica que te hace bien.",
  "El frío no existe.",
  "¿Estás de luto? Sí, por el mundo puto.",
  "Mis principios: las 3 Fs.",
  "El que pide al mundo poco es un loco.",
  "Los tres personajes del teatro: jeringa, bacín y trapo.",
  "Si la saludas, la ves."
]
  },
  en: {
    navRules: "The rules", navWishes: "Wish list", navMessages: "Messages",
    eyebrow: "✦ American dentist David Burbank edition",
    heroTitle1: "A gift.", heroTitle2: "A surprise.",
    heroLead: "Once again, the family gets together to celebrate Christmas, exchange gifts, and pretend nobody has any reason to question the draw.",
    heroButton1: "See the wish list", heroButton2: "Review the rules",
    heroNote: "What is a gift? What is a present?",
    artTagTop: "Surprise!", artTagBottom: "With love<br>and a little mystery",
    countdownTitle: "The big day is getting closer...",
    countdownIntro: "Remember: you'll receive a gift and have to pretend you weren't expecting it.",
    countdownRunning: "Start practicing your surprised face.",
    countdownToday: "The big day is here! Let the gift exchange begin 🎁",
    countdownPast: "The gathering is over. Long live family memories!",
    days: "days", hours: "hours", minutes: "minutes", seconds: "seconds",
    rulesTitle: "The rules of the game",
    rulesIntro: "There aren't many, they're simple, and yes, we intend to follow them (hopefully).",
    rule1Title: "Budget",
    rule1Text: "S/ 100 in Peru or US$ 50 in the United States. Creativity has no limits; your credit card does.",
    rule2Title: "Keep it secret",
    rule2Text: "Don't reveal who you picked. Suspicious hints and interrogations are strictly forbidden.",
    rule3Title: "Think about that person",
    rule3Text: "Use the wish list as a guide. A gift's real value is in the thought and intention behind it.",
    rule4Title: "Be on time",
    rule4Text: "Please arrive at the agreed time. Punctuality is a gift too.",
    wishesTitle: "The wish list",
    wishesIntro: "A little help for your Secret Santa. Not exactly a shopping order… but almost.",
    messageKicker: "03", messageTitle: "It's not really about the gift…",
    messageSubtitle: "…it's about being together and having a laugh",
    messageSignoff: "The disorganizing committee",
    messageButton: "Give me another line",
    footerBrand: "Family Secret Santa", footerText: "Made with love and Christmas spirit",
    backTop: "Back to top ↑",
    phrases: [
  "«Christmas brings the family together. Secret Santa puts that bond to the test.»",
  "«A suspicious question always starts with “just out of curiosity…”.»",
  "«Creativity has no limits; your credit card does.»",
  "«Act natural. Nobody will suspect you. Probably.»",
  "«Chance is a wonderful thing, especially when nobody questions it.»",
  "«Remember: the gift is secret. The suspicions, not so much.»",
  "«The transparency of the draw is guaranteed by the committee that organized the draw.»",
  "Coca-Cola has this one specific thing that's good for you.",
  "Cold doesn't exist.",
  "My principles: the three Fs.",
  "Anyone who asks little of the world is a fool.",
  "If you say hello to her, you'll see her."
]
  },
  ru: {
    navRules: "Правила", navWishes: "Список желаний", navMessages: "Послания",
    eyebrow: "✦ Специальный выпуск: доктор Дэвид Бёрбанк",
    heroTitle1: "Подарок.", heroTitle2: "Сюрприз.",
    heroLead: "Снова семья собирается праздновать Рождество, обмениваться подарками и делать вид, что результаты жеребьёвки никого не удивляют.",
    heroButton1: "Список желаний", heroButton2: "Повторить правила",
    heroNote: "Что такое подарок? Что такое презент?",
    artTagTop: "Сюрприз!", artTagBottom: "С любовью<br>и небольшой тайной",
    countdownTitle: "Большой день приближается...",
    countdownIntro: "Помни: ты получишь подарок и должен будешь сделать вид, что совсем его не ожидал.",
    countdownRunning: "Тренируй самое убедительное удивлённое лицо.",
    countdownToday: "Этот день настал! Да начнётся обмен подарками 🎁",
    countdownPast: "Встреча закончилась. Да здравствуют семейные воспоминания!",
    days: "дней", hours: "часов", minutes: "минут", seconds: "секунд",
    rulesTitle: "Правила игры",
    rulesIntro: "Правил немного, они простые, и мы, конечно, будем их соблюдать (наверное).",
    rule1Title: "Бюджет",
    rule1Text: "100 солей в Перу или 50 долларов США. У творчества нет границ, а у кредитной карты — есть.",
    rule2Title: "Секретность",
    rule2Text: "Не раскрывай, кто тебе достался. Намёки подозрительны, допросы запрещены.",
    rule3Title: "Подумай об этом человеке",
    rule3Text: "Используй список желаний как подсказку. Настоящая ценность подарка — во внимании и заботе.",
    rule4Title: "Не опаздывай",
    rule4Text: "Приходи вовремя. Пунктуальность — тоже подарок.",
    wishesTitle: "Список желаний",
    wishesIntro: "Небольшая подсказка для твоего Тайного Санты. Это не приказ к покупке… почти.",
    messageKicker: "03", messageTitle: "Главное — не подарок…",
    messageSubtitle: "…а возможность быть вместе и посмеяться",
    messageSignoff: "Комитет по дезорганизации",
    messageButton: "Ещё одну фразу",
    footerBrand: "Семейный Тайный Санта",
    footerText: "С любовью и рождественским настроением", backTop: "Наверх ↑",
    phrases: [
  "«Рождество объединяет семью. Тайный Санта проверяет прочность этой связи.»",
  "«Подозрительный вопрос всегда начинается со слов: „Просто из любопытства…“»",
  "«У творчества нет границ, а у кредитной карты — есть.»",
  "«Веди себя естественно. Никто тебя не заподозрит. Наверное.»",
  "«Случай — замечательная вещь, особенно когда никто его не ставит под сомнение.»",
  "«Помни: подарок — секрет. Подозрения — не совсем.»",
  "«Прозрачность жеребьёвки гарантирована комитетом, который её организовал.»",
  "В Coca-Cola есть одна особенная штука, которая тебе полезна.",
  "Холода не существует.",
  "Мои принципы: три буквы «Ф».",
  "Кто мало просит от мира, тот дурак.",
  "Поздоровайся с ней — и увидишь её."
]
  }
};

/* 4. CAMBIO DE IDIOMA: aplica traducciones y vuelve a dibujar la lista. */
let currentLanguage = "es";
let previousPhraseIndex = -1;

function changeLanguage(language) {
  if (!TRANSLATIONS[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (TRANSLATIONS[language][key] !== undefined) element.textContent = TRANSLATIONS[language][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    const key = element.dataset.i18nHtml;
    if (TRANSLATIONS[language][key] !== undefined) element.innerHTML = TRANSLATIONS[language][key];
  });
  document.querySelectorAll(".language-button").forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderParticipants();
  updateCountdown();
  showRandomPhrase(true);
}

/* 5. LISTA DE DESEOS: crea una tarjeta y tres viñetas por persona. */
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderParticipants() {
  const grid = document.getElementById("wishesGrid");

  grid.innerHTML = PARTICIPANTS.map(person => {
    const wishes = person.wishes[currentLanguage] || person.wishes.es;

    const items = wishes.map(wish => {
      // Si es un texto simple, lo muestra normalmente.
      if (typeof wish === "string") {
        return `<li>${escapeHTML(wish)}</li>`;
      }

      // Si es un objeto, muestra el nombre como enlace.
      const name = escapeHTML(wish.name);
      const link = escapeHTML(wish.link);

      return `
        <li>
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            ${name} ↗
          </a>
        </li>
      `;
    }).join("");

    return `
      <article class="wish-card">
        <h3>${escapeHTML(person.name)}</h3>
        <ul>${items}</ul>
      </article>
    `;
  }).join("");
}

/* 6. CUENTA REGRESIVA: para cambiar la fecha, edita EVENT_DATE al inicio. */
function updateCountdown() {
  const target = new Date(EVENT_DATE).getTime();
  const distance = target - Date.now();
  const message = document.getElementById("countdownMessage");

  if (Number.isNaN(target)) {
    message.textContent = "Check the EVENT_DATE setting in script.js.";
    return;
  }
  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "0";
    });
    message.textContent = distance > -86400000 ? TRANSLATIONS[currentLanguage].countdownToday : TRANSLATIONS[currentLanguage].countdownPast;
    return;
  }
  const seconds = Math.floor(distance / 1000);
  document.getElementById("days").textContent = Math.floor(seconds / 86400);
  document.getElementById("hours").textContent = Math.floor((seconds % 86400) / 3600);
  document.getElementById("minutes").textContent = Math.floor((seconds % 3600) / 60);
  document.getElementById("seconds").textContent = seconds % 60;
  message.textContent = TRANSLATIONS[currentLanguage].countdownRunning;
}

/* 7. GENERADOR DE FRASES: las frases se editan en TRANSLATIONS > phrases. */
function showRandomPhrase(allowSame = false) {
  const phrases = TRANSLATIONS[currentLanguage].phrases;
  if (!phrases.length) return;
  let index = Math.floor(Math.random() * phrases.length);
  if (!allowSame && phrases.length > 1) {
    while (index === previousPhraseIndex) index = Math.floor(Math.random() * phrases.length);
  }
  previousPhraseIndex = index;
  document.getElementById("randomMessage").textContent = phrases[index];
}

/* 8. MENÚ MÓVIL */
function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));
}

/* 9. INICIO: conecta los botones y actualiza la cuenta regresiva. */
document.addEventListener("DOMContentLoaded", () => {
  renderParticipants();
  document.querySelectorAll(".language-button").forEach(button => {
    button.addEventListener("click", () => changeLanguage(button.dataset.language));
  });
  document.getElementById("newMessageButton").addEventListener("click", () => showRandomPhrase());
  setupMenu();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  showRandomPhrase(true);
});

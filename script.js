/*
 * AMIGO SECRETO FAMILIAR
 * Edita PARTICIPANTS y EVENT_DETAILS para personalizar la página.
 * No necesitas modificar el resto del código para cambiar nombres y deseos.
 */

const PARTICIPANTS = [
  {
    name: "Francis",
    relation: "La que siempre organiza",
    emoji: "🧁",
    color: "#ffe4d9",
    description: "Le gustan los detalles bonitos, el café y las cosas para relajarse.",
    wishes: ["Taza bonita", "Café especial", "Velas aromáticas"],
    avoid: "Adornos que ocupen mucho espacio"
  },
  {
    name: "Guisell",
    relation: "El tecnológico",
    emoji: "🎧",
    color: "#dcecf7",
    description: "Fan de la tecnología, los videojuegos y los accesorios útiles.",
    wishes: ["Accesorios para escritorio", "Tarjeta de regalo", "Audífonos deportivos"],
    avoid: "Ropa (mejor no arriesgar la talla)"
  },
  {
    name: "Andres",
    relation: "La creativa",
    emoji: "🎨",
    color: "#fbe6a8",
    description: "Disfruta leer, dibujar y probar actividades nuevas.",
    wishes: ["Libros", "Materiales de arte", "Agenda bonita"],
    avoid: "Perfumes muy dulces"
  },
  {
    name: "Tamar",
    relation: "El de buen diente",
    emoji: "🍫",
    color: "#dcebd9",
    description: "Amante de la comida, las películas y los planes tranquilos.",
    wishes: ["Chocolates", "Kit para preparar algo rico", "Accesorios para películas en casa"],
    avoid: "Tazas: ya tiene una colección sospechosa"
  },
    {
    name: "Julio",
    relation: "El de buen diente",
    emoji: "🍫",
    color: "#dcebd9",
    description: "Amante de la comida, las películas y los planes tranquilos.",
    wishes: ["Chocolates", "Kit para preparar algo rico", "Accesorios para películas en casa"],
    avoid: "Tazas: ya tiene una colección sospechosa"
  },
      {
    name: "Lisset",
    relation: "El de buen diente",
    emoji: "🍫",
    color: "#dcebd9",
    description: "Amante de la comida, las películas y los planes tranquilos.",
    wishes: ["Chocolates", "Kit para preparar algo rico", "Accesorios para películas en casa"],
    avoid: "Tazas: ya tiene una colección sospechosa"
  }, 
    {
    name: "Diego",
    relation: "El de buen diente",
    emoji: "🍫",
    color: "#dcebd9",
    description: "Amante de la comida, las películas y los planes tranquilos.",
    wishes: ["Chocolates", "Kit para preparar algo rico", "Accesorios para películas en casa"],
    avoid: "Tazas: ya tiene una colección sospechosa"
  },
    {
    name: "Sebas",
    relation: "El de buen diente",
    emoji: "🍫",
    color: "#dcebd9",
    description: "Amante de la comida, las películas y los planes tranquilos.",
    wishes: ["Chocolates", "Kit para preparar algo rico", "Accesorios para películas en casa"],
    avoid: "Tazas: ya tiene una colección sospechosa"
  }
];

const EVENT_DETAILS = {
  // Formato: AAAA-MM-DDTHH:MM:SS. Usa la hora local del lugar del evento.
  dateTime: "2026-12-23T19:00:00",
  dateLabel: "24 de diciembre de 2026",
  timeLabel: "7:00 p. m.",
  location: "donde será",
  address: "The meeting point: Avenida Boulevard",
  durationHours: 4
};

const FUN_MESSAGES = [
  "«El espíritu navideño es compartir. Las pistas del regalo, no tanto».",
  "«Recuerda: una pregunta sospechosa empieza con “solo por curiosidad…”».",
  "«No importa el tamaño del regalo. Importa el tamaño de la sonrisa (y que venga envuelto)».",
  "«El mejor regalo es estar juntos. El segundo mejor es que hayan seguido tu lista de deseos».",
  "«Mantén la calma y actúa con naturalidad. Nadie sospechará de ti. Quizá».",
  "«Si alguien dice que no necesita nada, revisa la lista de deseos una vez más».",
  "«Se busca: persona capaz de envolver un regalo sin gastar más cinta que papel».",
  "«La Navidad es mágica: hace desaparecer el presupuesto en una sola visita a la tienda»."
];

const $ = (selector) => document.querySelector(selector);

function renderParticipants(filter = "") {
  const grid = $("#wishesGrid");
  const query = filter.trim().toLocaleLowerCase("es");
  const visible = PARTICIPANTS.filter(person => {
    const haystack = [person.name, person.relation, person.description, ...person.wishes, person.avoid]
      .join(" ").toLocaleLowerCase("es");
    return haystack.includes(query);
  });

  $("#participantCount").textContent =
    `${visible.length} ${visible.length === 1 ? "participante" : "participantes"}`;

  if (!visible.length) {
    grid.innerHTML = '<div class="no-results">No encontramos a esa persona. Prueba con otro nombre. 🔎</div>';
    return;
  }

  grid.innerHTML = visible.map(person => `
    <article class="wish-card">
      <div class="avatar" style="--avatar-bg: ${escapeAttribute(person.color || "#e3f1e4")}" aria-hidden="true">${escapeHTML(person.emoji || "🎁")}</div>
      <div>
        <div class="wish-meta">${escapeHTML(person.relation || "Integrante de la familia")}</div>
        <h3>${escapeHTML(person.name)}</h3>
        <p>${escapeHTML(person.description || "")}</p>
        <div class="wish-tags">${(person.wishes || []).map(wish => `<span class="wish-tag">${escapeHTML(wish)}</span>`).join("")}</div>
        ${person.avoid ? `<p style="margin-top:10px;font-size:.8rem"><strong>Mejor evitar:</strong> ${escapeHTML(person.avoid)}</p>` : ""}
      </div>
    </article>
  `).join("");
}

// Evita que textos introducidos en los datos se interpreten como HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
function escapeAttribute(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}

function updateCountdown() {
  const target = new Date(EVENT_DETAILS.dateTime).getTime();
  const now = Date.now();
  const distance = target - now;
  const message = $("#countdownMessage");

  if (Number.isNaN(target)) {
    message.textContent = "Configura la fecha del encuentro en script.js.";
    ["days", "hours", "minutes", "seconds"].forEach(id => $("#" + id).textContent = "--");
    return;
  }

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => $("#" + id).textContent = "0");
    message.textContent = distance > -24 * 60 * 60 * 1000
      ? "¡Llegó el gran día! Que empiece el intercambio 🎁"
      : "El encuentro ya pasó. ¡Que vivan los recuerdos familiares!";
    return;
  }

  const seconds = Math.floor(distance / 1000);
  $("#days").textContent = Math.floor(seconds / 86400);
  $("#hours").textContent = Math.floor((seconds % 86400) / 3600);
  $("#minutes").textContent = Math.floor((seconds % 3600) / 60);
  $("#seconds").textContent = seconds % 60;
  message.textContent = "Prepara tu mejor cara de sorpresa.";
}

function updateEventDetails() {
  $("#eventDateText").textContent = EVENT_DETAILS.dateLabel;
  $("#eventTimeText").textContent = EVENT_DETAILS.timeLabel;
  $("#eventLocationText").textContent = EVENT_DETAILS.location;
  $("#eventAddressText").textContent = EVENT_DETAILS.address;
  createCalendarFile();
}

function formatICSDate(date) {
  const pad = n => String(n).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

function createCalendarFile() {
  const start = new Date(EVENT_DETAILS.dateTime);
  if (Number.isNaN(start.getTime())) return;
  const end = new Date(start.getTime() + (EVENT_DETAILS.durationHours || 4) * 60 * 60 * 1000);
  const escapeICS = value => String(value).replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
  const content = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Amigo Secreto Familiar//ES",
    "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
    `UID:amigo-secreto-${start.getTime()}@familia`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    "SUMMARY:Amigo Secreto Familiar 🎁",
    `LOCATION:${escapeICS(EVENT_DETAILS.location + " - " + EVENT_DETAILS.address)}`,
    "DESCRIPTION:No olvides tu regalo y tus ganas de pasarla bien.",
    "END:VEVENT", "END:VCALENDAR"
  ].join("\r\n");
  $("#calendarLink").href = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
}

function setupNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    toggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    toggle.textContent = "☰";
  }));
}

function setupMessages() {
  const button = $("#newMessageButton");
  const output = $("#randomMessage");
  let previous = -1;
  button.addEventListener("click", () => {
    let next;
    do { next = Math.floor(Math.random() * FUN_MESSAGES.length); } while (FUN_MESSAGES.length > 1 && next === previous);
    previous = next;
    output.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 260, easing: "ease-out" });
    output.textContent = FUN_MESSAGES[next];
  });
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll(".section-heading, .rule-card, .wish-card, .event-card");
  targets.forEach(el => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderParticipants();
  updateEventDetails();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  $("#wishSearch").addEventListener("input", event => renderParticipants(event.target.value));
  setupNavigation();
  setupMessages();
  setupRevealAnimations();
});

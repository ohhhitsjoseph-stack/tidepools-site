const personaData = {
  amy: {
    name: "Amy",
    role: "Personal CFO",
    tagline: "CFO mode: decisive, strategic, human",
    color: "#2a6df4",
    expertise: ["Capital planning", "Risk analysis", "Budget clarity"],
    memory: "Remembers your spending patterns, preferred risk level, and monthly targets.",
    sources: ["Budget ledger", "Forecast model", "Weekly reports"],
    library: ["2024-2026 budget ledger", "Portfolio tracker (CSV)", "Income goals & debt map"],
  },
  noah: {
    name: "Noah",
    role: "Brand Designer",
    tagline: "Creative mode: bold, crisp, distinct",
    color: "#111827",
    expertise: ["Visual identity", "Story systems", "Brand tone"],
    memory: "Tracks your brand adjectives, favorite references, and launch timelines.",
    sources: ["Moodboards", "Logo iterations", "Campaign calendar"],
    library: ["Brand reference deck", "Typography kit", "Launch checklist"],
  },
  riley: {
    name: "Riley",
    role: "Life Coach",
    tagline: "Clarity mode: warm, focused, steady",
    color: "#16a34a",
    expertise: ["Goal clarity", "Habit design", "Decision support"],
    memory: "Keeps your core goals, boundaries, and weekly reflection prompts on hand.",
    sources: ["Weekly reflections", "Values audit", "Energy tracker"],
    library: ["Habit library", "Personal commitments", "Values map"],
  },
};

const nameEl = document.getElementById("personaName");
const roleEl = document.getElementById("personaRole");
const avatarEl = document.getElementById("personaAvatar");
const taglineEl = document.getElementById("personaTagline");
const expertiseEl = document.getElementById("expertiseChips");
const memoryEl = document.getElementById("memoryWindow");
const sourcesEl = document.getElementById("dataSources");
const libraryEl = document.getElementById("dataList");
const inputFieldEl = document.getElementById("inputField");

const setPersona = (key) => {
  const persona = personaData[key];
  if (!persona) return;

  nameEl.textContent = persona.name;
  roleEl.textContent = persona.role;
  avatarEl.textContent = persona.name.charAt(0).toUpperCase();
  taglineEl.textContent = persona.tagline;
  memoryEl.textContent = persona.memory;

  expertiseEl.innerHTML = persona.expertise.map((item) => `<span>${item}</span>`).join("");
  sourcesEl.innerHTML = persona.sources.map((item) => `<li>${item}</li>`).join("");
  libraryEl.innerHTML = persona.library.map((item) => `<li>${item}</li>`).join("");
  inputFieldEl.textContent = `Message ${persona.name}…`;

  document.documentElement.style.setProperty("--accent", persona.color);
  document.documentElement.style.setProperty(
    "--accent-soft",
    `${persona.color}22`
  );
  document.documentElement.style.setProperty("--outgoing", persona.color);
};

const personaCards = document.querySelectorAll(".persona-card");

personaCards.forEach((card) => {
  card.addEventListener("click", () => {
    personaCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    setPersona(card.dataset.persona);
  });
});

setPersona("amy");

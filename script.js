// Mapa de requisitos por ramo (id) con sus requisitos
const requisitos = {
  // Primer año sin requisitos
  "fund_privado": [],
  "fund_publico": [],
  "historia": [],
  "sociologia": [],
  "lenguaje": [],
  "taller_oral": [],

  "derecho_economia": [],
  "criminologia": [],
  "teoria_sistema": [],
  "metod_investigacion": [],
  "tradiciones": [],
  "razonamiento": [],

  // Segundo Año
  "constitucional1": ["fund_publico"],
  "privado1": ["fund_privado"],
  "penal1": ["criminologia"],
  "procesal1": ["teoria_sistema"],
  "validez": [],
  "ingles1": [],

  "privado2": ["privado1"],
  "penal2": ["penal1"],
  "procesal2": ["procesal1"],
  "constitucional2": ["constitucional1"],
  "internacional": ["validez"],
  "ingles2": ["ingles1"],

  // Tercer Año
  "privado3": ["privado2"],
  "penal3": ["penal2"],
  "procesal3": ["procesal2"],
  "administrativo1": ["constitucional2"],
  "laboral1": [],
  "ingles3": ["ingles2"],

  "privado4": ["privado3"],
  "penal4": ["penal3"],
  "procesal4": ["procesal3"],
  "administrativo2": ["constitucional2"],
  "laboral2": ["laboral1"],
  "ingles4": ["ingles3"],

  // Cuarto Año
  "privado5": ["privado4"],
  "procesal_penal": ["penal4"],
  "procesal_especial": ["procesal4"],
  "tributario": ["administrativo2"],
  "comercial1": ["privado4"],
  "ingles5": ["ingles4"],

  "comercial2": ["comercial1"],
  "privado6": ["privado5"],
  "clinica1": ["privado5", "procesal_especial", "procesal_penal"],
  "etica_prof": ["procesal_especial", "procesal_penal"],
  "estrategias_litigacion": [],

  // Quinto Año
  "clinica2": ["clinica1"],
  "fund_bienes_personas": ["privado6", "procesal_especial"],
  "fund_fuentes_obligaciones": ["privado6", "procesal_especial"],
  "fund_constitucional": ["privado6", "procesal_especial"],
  "fund_procesal": ["privado6", "procesal_especial"],
  "resolucion_casos": ["privado6", "procesal_especial"],
  "ingles6": ["ingles5"],
};

// Guarda los ramos aprobados
const aprobados = new Set();

function puedeAprobar(id) {
  const reqs = requisitos[id] || [];
  // Un ramo sin requisitos siempre puede aprobarse
  if (reqs.length === 0) return true;
  // Todos los requisitos deben estar aprobados
  return reqs.every(r => aprobados.has(r));
}

function aprobar(div) {
  const id = div.id;
  if (!puedeAprobar(id)) {
    alert("Debes aprobar primero los ramos requisito para desbloquear este ramo.");
    return;
  }
  if (aprobados.has(id)) return; // ya aprobado

  aprobados.add(id);
  actualizarVisual();
}

function actualizarVisual() {
  document.querySelectorAll(".ramo").forEach(div => {
    const id = div.id;
    if (aprobados.has(id)) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
    } else if (!puedeAprobar(id)) {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    } else {
      div.classList.remove("bloqueado", "aprobado");
    }
  });
}

// Inicia la visualización
actualizarVisual();


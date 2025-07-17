// script.js

const cursos = [
  // Primer año I Semestre
  { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [], semestre: "Primer Año - I Semestre" },
  { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [], semestre: "Primer Año - I Semestre" },
  { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [], semestre: "Primer Año - I Semestre" },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [], semestre: "Primer Año - I Semestre" },
  { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [], semestre: "Primer Año - I Semestre" },
  { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [], semestre: "Primer Año - I Semestre" },

  // Primer año II Semestre
  { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [], semestre: "Primer Año - II Semestre" },
  { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [], semestre: "Primer Año - II Semestre" },
  { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [], semestre: "Primer Año - II Semestre" },
  { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [], semestre: "Primer Año - II Semestre" },
  { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [], semestre: "Primer Año - II Semestre" },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [], semestre: "Primer Año - II Semestre" },

  // Segundo Año III Semestre
  { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"], semestre: "Segundo Año - III Semestre" },
  { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"], semestre: "Segundo Año - III Semestre" },
  { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"], semestre: "Segundo Año - III Semestre" },
  { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"], semestre: "Segundo Año - III Semestre" },
  { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [], semestre: "Segundo Año - III Semestre" },
  { id: "ingles1", nombre: "Inglés I", requisitos: [], semestre: "Segundo Año - III Semestre" },

  // Segundo Año IV Semestre
  { id: "privado2", nombre: "Privado II", requisitos: ["privado1"], semestre: "Segundo Año - IV Semestre" },
  { id: "penal2", nombre: "Penal II", requisitos: ["penal1"], semestre: "Segundo Año - IV Semestre" },
  { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"], semestre: "Segundo Año - IV Semestre" },
  { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"], semestre: "Segundo Año - IV Semestre" },
  { id: "internacional", nombre: "Internacional", requisitos: ["validez"], semestre: "Segundo Año - IV Semestre" },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"], semestre: "Segundo Año - IV Semestre" },

  // Tercer Año V Semestre
  { id: "privado3", nombre: "Privado III", requisitos: ["privado2"], semestre: "Tercer Año - V Semestre" },
  { id: "penal3", nombre: "Penal III", requisitos: ["penal2"], semestre: "Tercer Año - V Semestre" },
  { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"], semestre: "Tercer Año - V Semestre" },
  { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"], semestre: "Tercer Año - V Semestre" },
  { id: "laboral1", nombre: "Laboral I", requisitos: [], semestre: "Tercer Año - V Semestre" },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"], semestre: "Tercer Año - V Semestre" },

  // Tercer Año VI Semestre
  { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"], semestre: "Tercer Año - VI Semestre" },
  { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"], semestre: "Tercer Año - VI Semestre" },
  { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"], semestre: "Tercer Año - VI Semestre" },
  { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"], semestre: "Tercer Año - VI Semestre" },
  { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"], semestre: "Tercer Año - VI Semestre" },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"], semestre: "Tercer Año - VI Semestre" },

  // Cuarto Año VII Semestre
  { id: "privado5", nombre: "Privado V", requisitos: ["privado4"], semestre: "Cuarto Año - VII Semestre" },
  { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"], semestre: "Cuarto Año - VII Semestre" },
  { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"], semestre: "Cuarto Año - VII Semestre" },
  { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"], semestre: "Cuarto Año - VII Semestre" },
  { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"], semestre: "Cuarto Año - VII Semestre" },
  { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"], semestre: "Cuarto Año - VII Semestre" },

  // Cuarto Año VIII Semestre
  { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"], semestre: "Cuarto Año - VIII Semestre" },
  { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"], semestre: "Cuarto Año - VIII Semestre" },
  { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_especial", "procesal_penal"], semestre: "Cuarto Año - VIII Semestre" },
  { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial", "procesal_penal"], semestre: "Cuarto Año - VIII Semestre" },
  { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [], semestre: "Cuarto Año - VIII Semestre" },

  // Quinto Año IX Semestre
  { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"], semestre: "Quinto Año - IX Semestre" },
  { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6", "procesal_especial"], semestre: "Quinto Año - IX Semestre" },
  { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_especial"], semestre: "Quinto Año - IX Semestre" },
  { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6", "procesal_especial"], semestre: "Quinto Año - IX Semestre" },
  { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6", "procesal_especial"], semestre: "Quinto Año - IX Semestre" },
  { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_especial"], semestre: "Quinto Año - IX Semestre" },
  { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"], semestre: "Quinto Año - IX Semestre" }
];

const aprobados = {};
const contenedorSemestres = document.getElementById("semestres-container");

// Función que revisa si el ramo puede aprobarse (tiene requisitos aprobados)
function puedeAprobar(id) {
  const curso = cursos.find(c => c.id === id);
  if (!curso) return false;
  return curso.requisitos.every(r => aprobados[r]);
}

// Función para toggle (aprobar/desaprobar) ramo si está desbloqueado
function toggleAprobar(id) {
  if (aprobados[id]) {
    aprobados[id] = false;
  } else {
    if (!puedeAprobar(id)) {
      alert("Este ramo está bloqueado. Debes aprobar los requisitos primero.");
      return;
    }
    aprobados[id] = true;
  }
  actualizarVisual();
}

// Crear divs para cada semestre y sus ramos
function crearEstructura() {
  // Limpiar contenido previo
  contenedorSemestres.innerHTML = "";

  // Agrupar cursos por semestre
  const semestres = {};
  cursos.forEach(curso => {
    if (!semestres[curso.semestre]) semestres[curso.semestre] = [];
    semestres[curso.semestre].push(curso);
  });

  // Crear contenedores para cada semestre
  for (const semestre in semestres) {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    // Añadir ramos
    semestres[semestre].forEach(curso => {
      const divRamo = document.createElement("div");
      divRamo.classList.add("ramo");
      divRamo.id = curso.id;
      divRamo.textContent = curso.nombre;

      divRamo.addEventListener("click", () => toggleAprobar(curso.id));

      divSemestre.appendChild(divRamo);
    });

    contenedorSemestres.appendChild(divSemestre);
  }
}

// Actualiza colores y clases de los ramos según estado aprobado o bloqueado
function actualizarVisual() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (!div) return;
    if (aprobados[curso.id]) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
    } else if (!puedeAprobar(curso.id)) {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    } else {
      div.classList.remove("bloqueado", "aprobado");
    }
  });
}

crearEstructura();
actualizarVisual();

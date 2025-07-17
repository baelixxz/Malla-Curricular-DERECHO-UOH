// script.js

// Lista completa de cursos con id, nombre, requisitos y año/semestre
const cursos = [
  // Primer Año
  { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [], año: 1, semestre: 1 },
  { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [], año: 1, semestre: 1 },
  { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [], año: 1, semestre: 1 },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [], año: 1, semestre: 1 },
  { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [], año: 1, semestre: 1 },
  { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [], año: 1, semestre: 1 },
  { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [], año: 1, semestre: 2 },
  { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [], año: 1, semestre: 2 },
  { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [], año: 1, semestre: 2 },
  { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [], año: 1, semestre: 2 },
  { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [], año: 1, semestre: 2 },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [], año: 1, semestre: 2 },

  // Segundo Año
  { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"], año: 2, semestre: 3 },
  { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"], año: 2, semestre: 3 },
  { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"], año: 2, semestre: 3 },
  { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"], año: 2, semestre: 3 },
  { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [], año: 2, semestre: 3 },
  { id: "ingles1", nombre: "Inglés I", requisitos: [], año: 2, semestre: 3 },
  { id: "privado2", nombre: "Privado II", requisitos: ["privado1"], año: 2, semestre: 4 },
  { id: "penal2", nombre: "Penal II", requisitos: ["penal1"], año: 2, semestre: 4 },
  { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"], año: 2, semestre: 4 },
  { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"], año: 2, semestre: 4 },
  { id: "internacional", nombre: "Internacional", requisitos: ["validez"], año: 2, semestre: 4 },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"], año: 2, semestre: 4 },

  // Tercer Año
  { id: "privado3", nombre: "Privado III", requisitos: ["privado2"], año: 3, semestre: 5 },
  { id: "penal3", nombre: "Penal III", requisitos: ["penal2"], año: 3, semestre: 5 },
  { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"], año: 3, semestre: 5 },
  { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"], año: 3, semestre: 5 },
  { id: "laboral1", nombre: "Laboral I", requisitos: [], año: 3, semestre: 5 },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"], año: 3, semestre: 5 },
  { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"], año: 3, semestre: 6 },
  { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"], año: 3, semestre: 6 },
  { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"], año: 3, semestre: 6 },
  { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"], año: 3, semestre: 6 },
  { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"], año: 3, semestre: 6 },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"], año: 3, semestre: 6 },

  // Cuarto Año
  { id: "privado5", nombre: "Privado V", requisitos: ["privado4"], año: 4, semestre: 7 },
  { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"], año: 4, semestre: 7 },
  { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"], año: 4, semestre: 7 },
  { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"], año: 4, semestre: 7 },
  { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"], año: 4, semestre: 7 },
  { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"], año: 4, semestre: 7 },
  { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"], año: 4, semestre: 8 },
  { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"], año: 4, semestre: 8 },
  { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_especial", "procesal_penal"], año: 4, semestre: 8 },
  { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial", "procesal_penal"], año: 4, semestre: 8 },
  { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [], año: 4, semestre: 8 },

  // Quinto Año
  { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"], año: 5, semestre: 9 },
  { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6", "procesal_especial"], año: 5, semestre: 9 },
  { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_especial"], año: 5, semestre: 9 },
  { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6", "procesal_especial"], año: 5, semestre: 9 },
  { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6", "procesal_especial"], año: 5, semestre: 9 },
  { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_especial"], año: 5, semestre: 9 },
  { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"], año: 5, semestre: 9 },
];

// Colores para cuando se apruebe el ramo (en orden)
const coloresAprobado = ["#f70071", "#ff1b82", "#ff5aa4", "#ff96c5"];

const malla = document.getElementById("malla");
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || {};

// Para llevar el índice del color a usar
let colorIndex = 0;

// Función para verificar si se puede aprobar el ramo (todos requisitos aprobados + año desbloqueado)
function puedeAprobar(id) {
  const curso = cursos.find(c => c.id === id);
  if (!curso) return false;

  // Verificar si todos los requisitos están aprobados
  const requisitosCumplidos = curso.requisitos.every(r => aprobados[r]);

  // Verificar si el año está desbloqueado
  if (curso.año === 1) return requisitosCumplidos; // Primer año siempre desbloqueado si requisitos

  // Años posteriores: se desbloquea si se aprobaron TODOS los ramos del año anterior
  const añoAnterior = curso.año - 1;
  const ramosAñoAnterior = cursos.filter(c => c.año === añoAnterior);
  const añoAnteriorCompleto = ramosAñoAnterior.every(r => aprobados[r.id]);

  return requisitosCumplidos && añoAnteriorCompleto;
}

// Función para aprobar o desaprobar (toggle) el ramo
function aprobar(id) {
  if (!puedeAprobar(id)) {
    alert("Este ramo está bloqueado. Debes aprobar los requisitos y años anteriores primero.");
    return;
  }
  if (aprobados[id]) {
    // Desaprobar
    delete aprobados[id];
  } else {
    // Aprobar y asignar color siguiente
    aprobados[id] = coloresAprobado[colorIndex];
    colorIndex = (colorIndex + 1) % coloresAprobado.length;
  }
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
  actualizarVisual();
}

// Crear el DOM para cada ramo
function crearRamo(curso) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = curso.id;
  div.textContent = curso.nombre;

  div.addEventListener("click", () => aprobar(curso.id));

  malla.appendChild(div);
}

// Actualizar la vista visual de todos los ramos
function actualizarVisual() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (!div) return;

    if (aprobados[curso.id]) {
      div.style.backgroundColor = aprobados[curso.id];
      div.style.color = "white";
      div.style.fontStyle = "italic";
      div.style.textDecoration = "line-through";
      div.style.cursor = "default";
      div.classList.remove("bloqueado");
    } else if (!puedeAprobar(curso.id)) {
      div.style.backgroundColor = "#ffc0cb";
      div.style.color = "#b55a70";
      div.style.fontStyle = "normal";
      div.style.textDecoration = "none";
      div.style.cursor = "default";
      div.classList.add("bloqueado");
    } else {
      div.style.backgroundColor = "#ff96c5";
      div.style.color = "#4b1c33";
      div.style.fontStyle = "normal";
      div.style.textDecoration = "none";
      div.style.cursor = "pointer";
      div.classList.remove("bloqueado");
    }
  });
}

// Crear todos los ramos inicialmente
cursos.forEach(crearRamo);
actualizarVisual();

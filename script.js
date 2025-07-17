// script.js

const cursos = [
  // Primer Año
  { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [], anio: 1, semestre: 1 },
  { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [], anio: 1, semestre: 1 },
  { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [], anio: 1, semestre: 1 },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [], anio: 1, semestre: 1 },
  { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [], anio: 1, semestre: 1 },
  { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [], anio: 1, semestre: 1 },

  { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [], anio: 1, semestre: 2 },
  { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [], anio: 1, semestre: 2 },
  { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [], anio: 1, semestre: 2 },
  { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [], anio: 1, semestre: 2 },
  { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [], anio: 1, semestre: 2 },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [], anio: 1, semestre: 2 },

  // Segundo Año
  { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"], anio: 2, semestre: 3 },
  { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"], anio: 2, semestre: 3 },
  { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"], anio: 2, semestre: 3 },
  { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"], anio: 2, semestre: 3 },
  { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [], anio: 2, semestre: 3 },
  { id: "ingles1", nombre: "Inglés I", requisitos: [], anio: 2, semestre: 3 },

  { id: "privado2", nombre: "Privado II", requisitos: ["privado1"], anio: 2, semestre: 4 },
  { id: "penal2", nombre: "Penal II", requisitos: ["penal1"], anio: 2, semestre: 4 },
  { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"], anio: 2, semestre: 4 },
  { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"], anio: 2, semestre: 4 },
  { id: "internacional", nombre: "Internacional", requisitos: ["validez"], anio: 2, semestre: 4 },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"], anio: 2, semestre: 4 },

  // Tercer Año
  { id: "privado3", nombre: "Privado III", requisitos: ["privado2"], anio: 3, semestre: 5 },
  { id: "penal3", nombre: "Penal III", requisitos: ["penal2"], anio: 3, semestre: 5 },
  { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"], anio: 3, semestre: 5 },
  { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"], anio: 3, semestre: 5 },
  { id: "laboral1", nombre: "Laboral I", requisitos: [], anio: 3, semestre: 5 },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"], anio: 3, semestre: 5 },

  { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"], anio: 3, semestre: 6 },
  { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"], anio: 3, semestre: 6 },
  { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"], anio: 3, semestre: 6 },
  { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"], anio: 3, semestre: 6 },
  { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"], anio: 3, semestre: 6 },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"], anio: 3, semestre: 6 },

  // Cuarto Año
  { id: "privado5", nombre: "Privado V", requisitos: ["privado4"], anio: 4, semestre: 7 },
  { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"], anio: 4, semestre: 7 },
  { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"], anio: 4, semestre: 7 },
  { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"], anio: 4, semestre: 7 },
  { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"], anio: 4, semestre: 7 },
  { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"], anio: 4, semestre: 7 },

  { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"], anio: 4, semestre: 8 },
  { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"], anio: 4, semestre: 8 },
  { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_especial", "procesal_penal"], anio: 4, semestre: 8 },
  { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial", "procesal_penal"], anio: 4, semestre: 8 },
  { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [], anio: 4, semestre: 8 },

  // Quinto Año
  { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"], anio: 5, semestre: 9 },
  { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6", "procesal_especial"], anio: 5, semestre: 9 },
  { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_especial"], anio: 5, semestre: 9 },
  { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6", "procesal_especial"], anio: 5, semestre: 9 },
  { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6", "procesal_especial"], anio: 5, semestre: 9 },
  { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_especial"], anio: 5, semestre: 9 },
  { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"], anio: 5, semestre: 9 },
];

const malla = document.getElementById("malla");
const aprobados = {};

function puedeAprobar(id) {
  const curso = cursos.find(c => c.id === id);
  if (!curso) return false;
  return curso.requisitos.every(r => aprobados[r]);
}

function toggleAprobar(id) {
  if (!aprobados[id]) {
    if (!puedeAprobar(id)) {
      alert("Este ramo está bloqueado. Debes aprobar los requisitos primero.");
      return;
    }
    aprobados[id] = true;
  } else {
    delete aprobados[id];
  }
  actualizarVisual();
}

function crearMalla() {
  // Limpiar contenedor
  malla.innerHTML = "";

  // Agrupar cursos por año y semestre
  const agrupado = {};
  cursos.forEach(c => {
    if (!agrupado[c.anio]) agrupado[c.anio] = {};
    if (!agrupado[c.anio][c.semestre]) agrupado[c.anio][c.semestre] = [];
    agrupado[c.anio][c.semestre].push(c);
  });

  // Crear estructura HTML
  Object.keys(agrupado)
    .sort((a, b) => a - b)
    .forEach(anioKey => {
      const anioDiv = document.createElement("div");
      anioDiv.className = "anio";

      const h2 = document.createElement("h2");
      h2.textContent = `Año ${anioKey}`;
      anioDiv.appendChild(h2);

      const semestres = agrupado[anioKey];
      Object.keys(semestres)
        .sort((a, b) => a - b)
        .forEach(semKey => {
          const semestreDiv = document.createElement("div");
          semestreDiv.className = "semestre";

          const h3 = document.createElement("h3");
          h3.textContent = `Semestre ${semKey}`;
          semestreDiv.appendChild(h3);

          semestres[semKey].forEach(curso => {
            const ramoDiv = document.createElement("div");
            ramoDiv.className = "ramo";
            ramoDiv.id = curso.id;
            ramoDiv.textContent = curso.nombre;
            ramoDiv.addEventListener("click", () => toggleAprobar(curso.id));
            semestreDiv.appendChild(ramoDiv);
          });

          anioDiv.appendChild(semestreDiv);
        });

      malla.appendChild(anioDiv);
    });
  actualizarVisual();
}

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

// Inicialización
crearMalla();

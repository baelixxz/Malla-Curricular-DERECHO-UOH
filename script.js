// Datos de cursos agrupados por semestre
const cursosPorSemestre = [
  {
    nombre: "Primer Año - I Semestre",
    cursos: [
      { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [] },
      { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [] },
      { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [] },
      { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [] },
      { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [] },
      { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [] },
    ]
  },
  {
    nombre: "Primer Año - II Semestre",
    cursos: [
      { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [] },
      { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [] },
      { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [] },
      { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [] },
      { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [] },
      { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [] },
    ]
  },
  {
    nombre: "Segundo Año - III Semestre",
    cursos: [
      { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"] },
      { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"] },
      { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"] },
      { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"] },
      { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [] },
      { id: "ingles1", nombre: "Inglés I", requisitos: [] },
    ]
  },
  {
    nombre: "Segundo Año - IV Semestre",
    cursos: [
      { id: "privado2", nombre: "Privado II", requisitos: ["privado1"] },
      { id: "penal2", nombre: "Penal II", requisitos: ["penal1"] },
      { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"] },
      { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"] },
      { id: "internacional", nombre: "Internacional", requisitos: ["validez"] },
      { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },
    ]
  },
];

// Estado aprobados
const aprobados = {};

// Chequea si el ramo puede aprobarse (todos los requisitos aprobados)
function puedeAprobar(id) {
  for (const semestre of cursosPorSemestre) {
    for (const curso of semestre.cursos) {
      if (curso.id === id) {
        return curso.requisitos.every(r => aprobados[r]);
      }
    }
  }
  return false;
}

// Alterna estado aprobado, si puede aprobarse
function toggleAprobar(id) {
  if (!puedeAprobar(id)) {
    alert("Este ramo está bloqueado. Debes aprobar los requisitos primero.");
    return;
  }
  aprobados[id] = !aprobados[id];
  actualizarVisual();
}

// Crea el HTML para semestres y ramos
function generarMalla() {
  const malla = document.getElementById('malla');
  malla.innerHTML = '';
  for (const semestre of cursosPorSemestre) {
    const divSemestre = document.createElement('div');
    divSemestre.className = 'semestre';

    const h2 = document.createElement('h2');
    h2.textContent = semestre.nombre;
    divSemestre.appendChild(h2);

    for (const curso of semestre.cursos) {
      const divRamo = document.createElement('div');
      divRamo.className = 'ramo';
      divRamo.id = curso.id;
      divRamo.textContent = curso.nombre;
      divRamo.addEventListener('click', () => toggleAprobar(curso.id));
      divSemestre.appendChild(divRamo);
    }

    malla.appendChild(divSemestre);
  }
}

// Actualiza visual para mostrar bloqueados y aprobados
function actualizarVisual() {
  for (const semestre of cursosPorSemestre) {
    for (const curso of semestre.cursos) {
      const div = document.getElementById(curso.id);
      if (aprobados[curso.id]) {
        div.classList.add('aprobado');
        div.classList.remove('bloqueado');
      } else if (!puedeAprobar(curso.id)) {
        div.classList.add('bloqueado');
        div.classList.remove('aprobado');
      } else {
        div.classList.remove('bloqueado', 'aprobado');
      }
    }
  }
}

generarMalla();
actualizarVisual();

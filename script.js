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
  }
];

const aprobados = {};

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

function toggleAprobar(id) {
  if (!puedeAprobar(id)) {
    alert("Este ramo está bloqueado. Debes aprobar los requisitos primero.");
    return;
  }
  aprobados[id] = !aprobados[id];
  actualizarVisual();
}

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

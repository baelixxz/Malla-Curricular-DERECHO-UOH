// Datos organizados por años y semestres con cursos (ramos)
const malla = [
  {
    nombre: "Primer Año",
    semestres: [
      {
        nombre: "I Semestre",
        cursos: [
          { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [] },
          { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [] },
          { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [] },
          { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [] },
          { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [] },
          { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [] },
        ],
      },
      {
        nombre: "II Semestre",
        cursos: [
          { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [] },
          { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [] },
          { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [] },
          { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [] },
          { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [] },
          { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [] },
        ],
      },
    ],
  },
  {
    nombre: "Segundo Año",
    semestres: [
      {
        nombre: "III Semestre",
        cursos: [
          { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"] },
          { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"] },
          { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"] },
          { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"] },
          { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [] },
          { id: "ingles1", nombre: "Inglés I", requisitos: [] },
        ],
      },
      {
        nombre: "IV Semestre",
        cursos: [
          { id: "privado2", nombre: "Privado II", requisitos: ["privado1"] },
          { id: "penal2", nombre: "Penal II", requisitos: ["penal1"] },
          { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"] },
          { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"] },
          { id: "internacional", nombre: "Internacional", requisitos: ["validez"] },
          { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },
        ],
      },
    ],
  },
  {
    nombre: "Tercer Año",
    semestres: [
      {
        nombre: "V Semestre",
        cursos: [
          { id: "privado3", nombre: "Privado III", requisitos: ["privado2"] },
          { id: "penal3", nombre: "Penal III", requisitos: ["penal2"] },
          { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"] },
          { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"] },
          { id: "laboral1", nombre: "Laboral I", requisitos: [] },
          { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"] },
        ],
      },
      {
        nombre: "VI Semestre",
        cursos: [
          { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"] },
          { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"] },
          { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"] },
          { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"] },
          { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"] },
          { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"] },
        ],
      },
    ],
  },
  {
    nombre: "Cuarto Año",
    semestres: [
      {
        nombre: "VII Semestre",
        cursos: [
          { id: "privado5", nombre: "Privado V", requisitos: ["privado4"] },
          { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"] },
          { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"] },
          { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"] },
          { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"] },
          { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"] },
        ],
      },
      {
        nombre: "VIII Semestre",
        cursos: [
          { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"] },
          { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"] },
          { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_especial", "procesal_penal"] },
          { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial", "procesal_penal"] },
          { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [] },
        ],
      },
    ],
  },
  {
    nombre: "Quinto Año",
    semestres: [
      {
        nombre: "IX Semestre",
        cursos: [
          { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"] },
          { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6", "procesal_especial"] },
          { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_especial"] },
          { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6", "procesal_especial"] },
          { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6", "procesal_especial"] },
          { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_especial"] },
          { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"] },
        ],
      },
    ],
  },
];

const contenedorAnos = document.getElementById('contenedor-anos');

const aprobados = new Set();

// Función para verificar si un curso se puede aprobar (todos los requisitos aprobados)
function puedeAprobar(id) {
  // Buscar el curso
  for (const ano of malla) {
    for (const semestre of ano.semestres) {
      const curso = semestre.cursos.find(c => c.id === id);
      if (curso) {
        return curso.requisitos.every(r => aprobados.has(r));
      }
    }
  }
  return false; // No encontrado
}

// Crear elementos DOM de años, semestres y ramos
function renderizarMalla() {
  contenedorAnos.innerHTML = '';
  malla.forEach((ano, indexAno) => {
    const divAno = document.createElement('div');
    divAno.classList.add('ano');

    const tituloAno = document.createElement('h2');
    tituloAno.textContent = ano.nombre;
    divAno.appendChild(tituloAno);

    const divSemestres = document.createElement('div');
    divSemestres.classList.add('semestres');

    ano.semestres.forEach(semestre => {
      const divSemestre = document.createElement('div');
      divSemestre.classList.add('semestre');

      const tituloSemestre = document.createElement('h3');
      tituloSemestre.textContent = semestre.nombre;
      divSemestre.appendChild(tituloSemestre);

      semestre.cursos.forEach(curso => {
        const divRamo = document.createElement('div');
        divRamo.classList.add('ramo');
        divRamo.id = curso.id;
        divRamo.textContent = curso.nombre;

        if (aprobados.has(curso.id)) {
          divRamo.classList.add('aprobado');
        } else if (!puedeAprobar(curso.id)) {
          divRamo.classList.add('bloqueado');
        }

        divRamo.addEventListener('click', () => {
          if (aprobados.has(curso.id)) {
            // Desaprobar para poder retroceder
            aprobados.delete(curso.id);
            actualizarVisual();
          } else if (puedeAprobar(curso.id)) {
            aprobados.add(curso.id);
            actualizarVisual();
            // Si aprobó todos los cursos del año, pasa al siguiente (scroll)
            if (todosAprobadosAno(indexAno)) {
              if (indexAno + 1 < malla.length) {
                const proxAno = contenedorAnos.children[indexAno + 1];
                proxAno.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          } else {
            alert('Este ramo está bloqueado. Debes aprobar los requisitos primero.');
          }
        });

        divSemestre.appendChild(divRamo);
      });

      divSemestres.appendChild(divSemestre);
    });

    divAno.appendChild(divSemestres);
    contenedorAnos.appendChild(divAno);
  });
}

function todosAprobadosAno(indexAno) {
  const ano = malla[indexAno];
  return ano.semestres.every(semestre =>
    semestre.cursos.every(curso => aprobados.has(curso.id))
  );
}

function actualizarVisual() {
  // Simplemente rerenderiza toda la malla (podrías optimizar pero es claro)
  renderizarMalla();
}

// Inicializar
renderizarMalla();

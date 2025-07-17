const malla = document.getElementById('malla');
const aprobados = {};

// Estructura con años, semestres y ramos
// Solo ramos relevantes para cada semestre y año según tu lista
const bloques = [
  {
    nombre: "Primer y Segundo Año",
    anios: [
      {
        nombre: "Primer Año",
        semestres: [
          {
            nombre: "I Semestre",
            ramos: [
              { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [] },
              { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [] },
              { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [] },
              { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [] },
              { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [] },
              { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [] },
            ]
          },
          {
            nombre: "II Semestre",
            ramos: [
              { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [] },
              { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [] },
              { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [] },
              { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [] },
              { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [] },
              { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [] },
            ]
          }
        ]
      },
      {
        nombre: "Segundo Año",
        semestres: [
          {
            nombre: "III Semestre",
            ramos: [
              { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"] },
              { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"] },
              { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"] },
              { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"] },
              { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [] },
              { id: "ingles1", nombre: "Inglés I", requisitos: [] },
            ]
          },
          {
            nombre: "IV Semestre",
            ramos: [
              { id: "privado2", nombre: "Privado II", requisitos: ["privado1"] },
              { id: "penal2", nombre: "Penal II", requisitos: ["penal1"] },
              { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"] },
              { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"] },
              { id: "internacional", nombre: "Internacional", requisitos: ["validez"] },
              { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },
            ]
          }
        ]
      }
    ]
  },

  {
    nombre: "Tercer y Cuarto Año",
    anios: [
      {
        nombre: "Tercer Año",
        semestres: [
          {
            nombre: "V Semestre",
            ramos: [
              { id: "privado3", nombre: "Privado III", requisitos: ["privado2"] },
              { id: "penal3", nombre: "Penal III", requisitos: ["penal2"] },
              { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"] },
              { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"] },
              { id: "laboral1", nombre: "Laboral I", requisitos: [] },
              { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"] },
            ]
          },
          {
            nombre: "VI Semestre",
            ramos: [
              { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"] },
              { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"] },
              { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"] },
              { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"] },
              { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"] },
              { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"] },
            ]
          }
        ]
      },
      {
        nombre: "Cuarto Año",
        semestres: [
          {
            nombre: "VII Semestre",
            ramos: [
              { id: "privado5", nombre: "Privado V", requisitos: ["privado4"] },
              { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"] },
              { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"] },
              { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"] },
              { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"] },
              { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"] },
            ]
          },
          {
            nombre: "VIII Semestre",
            ramos: [
              { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"] },
              { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"] },
              { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_especial", "procesal_penal"] },
              { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial", "procesal_penal"] },
              { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [] },
            ]
          }
        ]
      }
    ]
  },

  {
    nombre: "Quinto Año",
    anios: [
      {
        nombre: "Quinto Año",
        semestres: [
          {
            nombre: "IX Semestre",
            ramos: [
              { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"] },
              { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6", "procesal_especial"] },
              { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_especial"] },
              { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6", "procesal_especial"] },
              { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6", "procesal_especial"] },
              { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_especial"] },
              { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"] }
            ]
          }
        ]
      }
    ]
  }
];

// Función para saber si un ramo está aprobado
function estaAprobado(id) {
  return !!aprobados[id];
}

// Puede aprobar si todos requisitos están aprobados y además el bloque está desbloqueado
function puedeAprobar(ramo, bloqueIndex) {
  // Primero, verificar que bloque previo esté aprobado (excepto primer bloque)
  if (bloqueIndex > 0) {
    // Revisar todos ramos de bloque anterior aprobados
    const bloquePrevio = bloques[bloqueIndex - 1];
    for (const anio of bloquePrevio.anios) {
      for (const semestre of anio.semestres) {
        for (const r of semestre.ramos) {
          if (!estaAprobado(r.id)) return false;
        }
      }
    }
  }
  // Luego verificar requisitos del ramo
  return ramo.requisitos.every(req => estaAprobado(req));
}

// Al aprobar un ramo
function aprobar(id) {
  // Encontrar ramo y bloque donde está
  let ramoObj = null;
  let bloqueIndex = -1;
  for (let i = 0; i < bloques.length; i++) {
    outer: for (const anio of bloques[i].anios) {
      for (const semestre of anio.semestres) {
        for (const r of semestre.ramos) {
          if (r.id === id) {
            ramoObj = r;
            bloqueIndex = i;
            break outer;
          }
        }
      }
    }
    if (ramoObj) break;
  }
  if (!ramoObj) return;

  if (!puedeAprobar(ramoObj, bloqueIndex)) {
    alert("Este ramo está bloqueado. Debes aprobar los requisitos y los años anteriores primero.");
    return;
  }
  aprobados[id] = true;
  actualizarVisual();
}

function crearElementoRamo(ramo, bloqueIndex) {
  const div = document.createElement('div');
  div.classList.add('ramo');
  div.id = ramo.id;
  div.textContent = ramo.nombre;

  // Si no puede aprobar, bloquear
  if (!puedeAprobar(ramo, bloqueIndex)) {
    div.classList.add('bloqueado');
  }

  if (estaAprobado(ramo.id)) {
    div.classList.add('aprobado');
  }

  div.addEventListener('click', () => {
    if (!div.classList.contains('bloqueado') && !div.classList.contains('aprobado')) {
      aprobar(ramo.id);
    }
  });

  return div;
}

// Renderizado de la malla curricular
function renderizarMalla() {
  malla.innerHTML = "";

  bloques.forEach((bloque, bloqueIndex) => {
    const bloqueDiv = document.createElement('div');
    bloqueDiv.classList.add('bloque-container');

    const tituloBloque = document.createElement('h2');
    tituloBloque.classList.add('bloque-titulo');
    tituloBloque.textContent = bloque.nombre;
    bloqueDiv.appendChild(tituloBloque);

    const aniosDiv = document.createElement('div');
    aniosDiv.classList.add('anio-container');

    bloque.anios.forEach(anio => {
      const anioDiv = document.createElement('div');
      anioDiv.classList.add('anio');

      const tituloAnio = document.createElement('h3');
      tituloAnio.classList.add('anio-titulo');
      tituloAnio.textContent = anio.nombre;
      anioDiv.appendChild(tituloAnio);

      anio.semestres.forEach(semestre => {
        const semestreDiv = document.createElement('div');
        semestreDiv.classList.add('semestre');

        const tituloSemestre = document.createElement('h4');
        tituloSemestre.classList.add('semestre-titulo');
        tituloSemestre.textContent = semestre.nombre;
        semestreDiv.appendChild(tituloSemestre);

        semestre.ramos.forEach(ramo => {
          const ramoDiv = crearElementoRamo(ramo, bloqueIndex);
          semestreDiv.appendChild(ramoDiv);
        });

        anioDiv.appendChild(semestreDiv);
      });

      aniosDiv.appendChild(anioDiv);
    });

    bloqueDiv.appendChild(aniosDiv);
    malla.appendChild(bloqueDiv);
  });
}

function actualizarVisual() {
  renderizarMalla();
}

// Render inicial
renderizarMalla();

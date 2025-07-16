const cursos = [
  // Primer año I Semestre
  { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [] },
  { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [] },
  { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [] },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [] },
  { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [] },
  { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [] },

  // Primer año II Semestre
  { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [] },
  { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [] },
  { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [] },
  { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [] },
  { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [] },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [] },

  // Segundo Año III Semestre
  { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"] },
  { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"] },
  { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"] },
  { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"] },
  { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [] },
  { id: "ingles1", nombre: "Inglés I", requisitos: [] },

  // Segundo Año IV Semestre
  { id: "privado2", nombre: "Privado II", requisitos: ["privado1"] },
  { id: "penal2", nombre: "Penal II", requisitos: ["penal1"] },
  { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"] },
  { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"] },
  { id: "internacional", nombre: "Internacional", requisitos: ["validez"] },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },

  // Tercer Año V Semestre
  { id: "privado3", nombre: "Privado III", requisitos: ["privado2"] },
  { id: "penal3", nombre: "Penal III", requisitos: ["penal2"] },
  { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"] },
  { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"] },
  { id: "laboral1", nombre: "Laboral I", requisitos: [] },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"] },

  // Tercer Año VI Semestre
  { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"] },
  { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"] },
  { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"] },
  { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"] },
  { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"] },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"] },

  // Cuarto Año VII Semestre
  { id: "privado5", nombre: "Privado V", requisitos: ["privado4"] },
  { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"] },
  { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"] },
  { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"] },
  { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"] },
  { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"] },

  // Cuarto Año VIII Semestre
  { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"] },
  { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"] },
  { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_especial", "procesal_penal"] },
  { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial", "procesal_penal"] },
  { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [] },

  // Quinto Año IX Semestre
  { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"] },
  { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6", "procesal_especial"] },
  { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_especial"] },
  { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6", "procesal_especial"] },
  { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6", "procesal_especial"] },
  { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_especial"] },
  { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"] }
];

const malla = document.getElementById("malla");
const estado = {};

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "course bloqueado";
  div.id = curso.id;

  const nombre = document.createElement("h3");
  nombre.textContent = curso.nombre;
  div.appendChild(nombre);

  const status = document.createElement("p");
  status.className = "status-text";
  div.appendChild(status);

  const btn = document.createElement("button");
  btn.textContent = "Aprobar";
  btn.onclick = () => aprobarCurso(curso.id);
  div.appendChild(btn);

  malla.appendChild(div);

  estado[curso.id] = {
    aprobado: false,
    requisitos: curso.requisitos,
    elemento: div,
    statusTexto: status,
    boton: btn,
  };
}

function actualizarCursos() {
  cursos.forEach(curso => {
    const cursoEstado = estado[curso.id];
    const bloqueado = curso.requisitos.some(req => !estado[req]?.aprobado);

    if (cursoEstado.aprobado) {
      cursoEstado.statusTexto.textContent = "✅ Aprobado";
      cursoEstado.boton.style.display = "none";
      cursoEstado.elemento.className = "course aprobado";
    } else if (bloqueado) {
      cursoEstado.statusTexto.textContent = "🔒 Ramo bloqueado";
      cursoEstado.boton.style.display = "none";
      cursoEstado.elemento.className = "course bloqueado";
    } else {
      cursoEstado.statusTexto.textContent = "Ramo desbloqueado";
      cursoEstado.boton.style.display = "inline-block";
      cursoEstado.elemento.className = "course desbloqueado";
    }
  });
}

function aprobarCurso(id) {
  estado[id].aprobado = true;
  actualizarCursos();
}

cursos.forEach(crearCurso);
actualizarCursos();

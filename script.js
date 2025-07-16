const cursos = [
  // Primer año - I y II Semestre
  { id: "privado_fund", nombre: "Fundamentos de Derecho Privado", requisitos: [] },
  { id: "publico_fund", nombre: "Fundamentos de Derecho Público", requisitos: [] },
  { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [] },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [] },
  { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [] },
  { id: "taller_exp", nombre: "Taller de Expresión Oral y Escrita", requisitos: [] },
  { id: "eco", nombre: "Derecho y Economía", requisitos: [] },
  { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [] },
  { id: "sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [] },
  { id: "metodologia", nombre: "Metodología Jurídico-Social", requisitos: [] },
  { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [] },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [] },

  // Segundo año
  { id: "const1", nombre: "Constitucional I", requisitos: ["publico_fund"] },
  { id: "privado1", nombre: "Privado I", requisitos: ["privado_fund"] },
  { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"] },
  { id: "procesal1", nombre: "Procesal I", requisitos: ["sistema"] },
  { id: "validez", nombre: "Validez Espacial y Temporal", requisitos: [] },
  { id: "ingles1", nombre: "Inglés I", requisitos: [] },
  { id: "privado2", nombre: "Privado II", requisitos: ["privado1"] },
  { id: "penal2", nombre: "Penal II", requisitos: ["penal1"] },
  { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"] },
  { id: "const2", nombre: "Constitucional II", requisitos: ["const1"] },
  { id: "internacional", nombre: "Internacional", requisitos: ["validez"] },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },

  // Tercer año
  { id: "privado3", nombre: "Privado III", requisitos: ["privado2"] },
  { id: "penal3", nombre: "Penal III", requisitos: ["penal2"] },
  { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"] },
  { id: "administrativo", nombre: "Administrativo", requisitos: ["const2"] },
  { id: "laboral1", nombre: "Laboral I", requisitos: [] },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"] },
  { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"] },
  { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"] },
  { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"] },
  { id: "administrativo2", nombre: "Administrativo II", requisitos: ["const2"] },
  { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"] },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"] },

  // Cuarto año
  { id: "privado5", nombre: "Privado V", requisitos: ["privado4"] },
  { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"] },
  { id: "procesal_esp", nombre: "Procesal Especial", requisitos: ["procesal4"] },
  { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"] },
  { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"] },
  { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"] },
  { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"] },
  { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"] },
  { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5", "procesal_esp", "procesal_penal"] },
  { id: "etica", nombre: "Ética Profesional", requisitos: ["procesal_esp", "procesal_penal"] },
  { id: "litigacion", nombre: "Técnicas de Litigación", requisitos: [] },

  // Quinto año
  { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"] },
  { id: "civil_bienes", nombre: "Bienes y Personas", requisitos: ["privado6", "procesal_esp"] },
  { id: "civil_fuentes", nombre: "Fuentes de las Obligaciones", requisitos: ["privado6", "procesal_esp"] },
  { id: "const_fund", nombre: "Const. Fund.", requisitos: ["privado6", "procesal_esp"] },
  { id: "proc_fund", nombre: "Procesal Fund.", requisitos: ["privado6", "procesal_esp"] },
  { id: "resolucion", nombre: "Resolución de Casos", requisitos: ["privado6", "procesal_esp"] },
  { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"] },
];

const malla = document.getElementById("malla");
const estado = {};

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "course locked";
  div.id = curso.id;
  div.innerHTML = `${curso.nombre}<div class="status">Aprobado</div>`;
  div.onclick = () => aprobarCurso(curso.id);
  malla.appendChild(div);
  estado[curso.id] = { aprobado: false, requisitos: curso.requisitos, elemento: div };
}

function actualizarCursos() {
  cursos.forEach(c => {
    const bloqueado = c.requisitos.some(req => !estado[req]?.aprobado);
    const clase = estado[c.id].aprobado
      ? "course approved"
      : bloqueado
      ? "course locked"
      : "course unlocked";
    estado[c.id].elemento.className = clase;
  });
}

function aprobarCurso(id) {
  if (estado[id].elemento.classList.contains("locked")) return;
  estado[id].aprobado = !estado[id].aprobado;
  actualizarCursos();
}

cursos.forEach(crearCurso);
actualizarCursos();

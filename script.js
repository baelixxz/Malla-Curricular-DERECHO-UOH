// Lista de cursos con sus requisitos
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

const aprobados = {};

function puedeAprobar(id) {
  const curso = cursos.find(c => c.id === id);
  if (!curso) return false;
  if (curso.requisitos.length === 0) return true;
  return curso.requisitos.every(r => aprobados[r]);
}

function aprobar(elemento) {
  const id = elemento.id;
  if (!puedeAprobar(id)) {
    alert("Este ramo está bloqueado. Debes aprobar los requisitos primero.");
    return;
  }
  aprobados[id] = true;
  actualizarVisual();
}

function actualizarVisual() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (aprobados[curso.id]) {
      div.classList.add('aprobado');
      div.classList.remove('bloqueado');
      // No cambiar estilos inline, solo clases CSS
    } else if (!puedeAprobar(curso.id)) {
      div.classList.add('bloqueado');
      div.classList.remove('aprobado');
    } else {
      div.classList.remove('bloqueado', 'aprobado');
    }
  });
}

window.onload = () => {
  // Crear los divs de los cursos
  const malla = document.getElementById('malla');
  // Agrupar cursos por año y semestre
  const agrupados = {};

  cursos.forEach(curso => {
    // Extraemos año (por ejemplo, "Primer Año", "Segundo Año", etc)
    // Según semestres, asumimos así:
    // I y II semestres: Primer Año
    // III y IV: Segundo Año
    // V y VI: Tercer Año
    // VII y VIII: Cuarto Año
    // IX y X: Quinto Año (aunque solo IX hay)
    let anio = "";
    let semestre = "";

    // Identificación simplificada por semestre
    if (["fund_privado","fund_publico","historia","sociologia","lenguaje","taller_oral","derecho_economia","criminologia","teoria_sistema","metod_investigacion","tradiciones","razonamiento"].includes(curso.id)) {
      anio = "Primer Año";
      if (["fund_privado","fund_publico","historia","sociologia","lenguaje","taller_oral"].includes(curso.id)) semestre = "Semestre I";
      else semestre = "Semestre II";
    } else if (["constitucional1","privado1","penal1","procesal1","validez","ingles1","privado2","penal2","procesal2","constitucional2","internacional","ingles2"].includes(curso.id)) {
      anio = "Segundo Año";
      if (["constitucional1","privado1","penal1","procesal1","validez","ingles1"].includes(curso.id)) semestre = "Semestre III";
      else semestre = "Semestre IV";
    } else if (["privado3","penal3","procesal3","administrativo1","laboral1","ingles3","privado4","penal4","procesal4","administrativo2","laboral2","ingles4"].includes(curso.id)) {
      anio = "Tercer Año";
      if (["privado3","penal3","procesal3","administrativo1","laboral1","ingles3"].includes(curso.id)) semestre = "Semestre V";
      else semestre = "Semestre VI";
    } else if (["privado5","procesal_penal","procesal_especial","tributario","comercial1","ingles5","comercial2","privado6","clinica1","etica_prof","estrategias_litigacion"].includes(curso.id)) {
      anio = "Cuarto Año";
      if (["privado5","procesal_penal","procesal_especial","tributario","comercial1","ingles5"].includes(curso.id)) semestre = "Semestre VII";
      else semestre = "Semestre VIII";
    } else {
      anio = "Quinto Año";
      semestre = "Semestre IX";
    }

    if (!agrupados[anio]) agrupados[anio] = {};
    if (!agrupados[anio][semestre]) agrupados[anio][semestre] = [];
    agrupados[anio][semestre].push(curso);
  });

  for (const anio in agrupados) {
    const contAnio = document.createElement('div');
    contAnio.classList.add('anio');
    const h2 = document.createElement('h2');
    h2.textContent = anio;
    contAnio.appendChild(h2);

    for (const semestre in agrupados[anio]) {
      const contSemestre = document.createElement('div');
      contSemestre.classList.add('semestre');
      const h3 = document.createElement('h3');
      h3.textContent = semestre;
      contSemestre.appendChild(h3);

      agrupados[anio][semestre].forEach(curso => {
        const div = document.createElement('div');
        div.classList.add('ramo');
        div.id = curso.id;
        div.textContent = curso.nombre;

        div.addEventListener('click', () => aprobar(div));
        contSemestre.appendChild(div);
      });

      contAnio.appendChild(contSemestre);
    }

    malla.appendChild(contAnio);
  }

  actualizarVisual();
};

const cursos = [
  { id: "fund_privado", nombre: "Fundamentos de Derecho Privado", requisitos: [] },
  { id: "fund_publico", nombre: "Fundamentos de Derecho Público", requisitos: [] },
  { id: "historia", nombre: "Historia de las Ideas e Instituciones Jurídicas", requisitos: [] },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [] },
  { id: "lenguaje", nombre: "Lenguaje del Derecho", requisitos: [] },
  { id: "taller_oral", nombre: "Taller de Expresión Oral y Escrita", requisitos: [] },

  { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [] },
  { id: "criminologia", nombre: "Criminología y Política Criminal", requisitos: [] },
  { id: "teoria_sistema", nombre: "Teoría del Sistema Jurídico", requisitos: [] },
  { id: "metod_investigacion", nombre: "Metodología de la Investigación Jurídico-Social", requisitos: [] },
  { id: "tradiciones", nombre: "Tradiciones Jurídicas Comparadas", requisitos: [] },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [] },

  { id: "constitucional1", nombre: "Constitucional I", requisitos: ["fund_publico"] },
  { id: "privado1", nombre: "Privado I", requisitos: ["fund_privado"] },
  { id: "penal1", nombre: "Penal I", requisitos: ["criminologia"] },
  { id: "procesal1", nombre: "Procesal I", requisitos: ["teoria_sistema"] },
  { id: "validez", nombre: "Validez Espacial y Temporal del Derecho", requisitos: [] },
  { id: "ingles1", nombre: "Inglés I", requisitos: [] },

  { id: "privado2", nombre: "Privado II", requisitos: ["privado1"] },
  { id: "penal2", nombre: "Penal II", requisitos: ["penal1"] },
  { id: "procesal2", nombre: "Procesal II", requisitos: ["procesal1"] },
  { id: "constitucional2", nombre: "Constitucional II", requisitos: ["constitucional1"] },
  { id: "internacional", nombre: "Internacional", requisitos: ["validez"] },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },

  { id: "privado3", nombre: "Privado III", requisitos: ["privado2"] },
  { id: "penal3", nombre: "Penal III", requisitos: ["penal2"] },
  { id: "procesal3", nombre: "Procesal III", requisitos: ["procesal2"] },
  { id: "administrativo1", nombre: "Administrativo", requisitos: ["constitucional2"] },
  { id: "laboral1", nombre: "Laboral I", requisitos: [] },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"] },

  { id: "privado4", nombre: "Privado IV", requisitos: ["privado3"] },
  { id: "penal4", nombre: "Penal IV", requisitos: ["penal3"] },
  { id: "procesal4", nombre: "Procesal IV", requisitos: ["procesal3"] },
  { id: "administrativo2", nombre: "Administrativo II", requisitos: ["constitucional2"] },
  { id: "laboral2", nombre: "Laboral II", requisitos: ["laboral1"] },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"] },

  { id: "privado5", nombre: "Privado V", requisitos: ["privado4"] },
  { id: "procesal_penal", nombre: "Procesal Penal", requisitos: ["penal4"] },
  { id: "procesal_especial", nombre: "Procesal Especial", requisitos: ["procesal4"] },
  { id: "tributario", nombre: "Tributario", requisitos: ["administrativo2"] },
  { id: "comercial1", nombre: "Comercial I", requisitos: ["privado4"] },
  { id: "ingles5", nombre: "Inglés V", requisitos: ["ingles4"] },

  { id: "comercial2", nombre: "Comercial II", requisitos: ["comercial1"] },
  { id: "privado6", nombre: "Privado VI", requisitos: ["privado5"] },
  { id: "clinica1", nombre: "Clínica Jurídica I", requisitos: ["privado5","procesal_especial","procesal_penal"] },
  { id: "etica_prof", nombre: "Ética Profesional", requisitos: ["procesal_especial","procesal_penal"] },
  { id: "estrategias_litigacion", nombre: "Estrategias y Técnicas de Litigación", requisitos: [] },

  { id: "clinica2", nombre: "Clínica Jurídica II", requisitos: ["clinica1"] },
  { id: "fund_bienes_personas", nombre: "Instituciones Fundamentales del Derecho Civil: Bienes y Personas", requisitos: ["privado6","procesal_especial"] },
  { id: "fund_fuentes_obligaciones", nombre: "Instituciones Fundamentales del Derecho Civil: Fuentes de las Obligaciones", requisitos: ["privado6","procesal_especial"] },
  { id: "fund_constitucional", nombre: "Instituciones Fundamentales del Derecho Constitucional", requisitos: ["privado6","procesal_especial"] },
  { id: "fund_procesal", nombre: "Instituciones Fundamentales del Derecho Procesal", requisitos: ["privado6","procesal_especial"] },
  { id: "resolucion_casos", nombre: "Resolución de Casos", requisitos: ["privado6","procesal_especial"] },
  { id: "ingles6", nombre: "Inglés VI", requisitos: ["ingles5"] },
];

const aprobados = JSON.parse(localStorage.getItem('aprobados') || '{}');

function puedeAprobar(id) {
  const curso = cursos.find(c => c.id === id);
  if (!curso) return false;
  return curso.requisitos.every(r => aprobados[r]);
}

function aprobar(id) {
  if (!puedeAprobar(id)) {
    alert("Debes aprobar primero los requisitos para este ramo.");
    return;
  }
  aprobados[id] = true;
  localStorage.setItem('aprobados', JSON.stringify(aprobados));
  actualizarVisual();
}

function actualizarVisual() {
  cursos.forEach(curso => {
    const elem = document.getElementById(curso.id);
    if (!elem) return;

    if (aprobados[curso.id]) {
      elem.classList.add('aprobado');
      elem.classList.remove('bloqueado');
    } else if (!puedeAprobar(curso.id)) {
      elem.classList.add('bloqueado');
      elem.classList.remove('aprobado');
    } else {
      elem.classList.remove('bloqueado', 'aprobado');
    }
  });

  // Control para desbloquear años según avance:

  // Verificar si primer y segundo año completos
  const primerAnioIds = cursos.filter(c => c.id.startsWith('fund_') || c.id === 'historia' || c.id === 'sociologia' || c.id === 'lenguaje' || c.id === 'taller_oral' || 
    ['derecho_economia', 'criminologia', 'teoria_sistema', 'metod_investigacion', 'tradiciones', 'razonamiento'].includes(c.id)
  ).map(c => c.id);

  const segundoAnioIds = ['constitucional1', 'privado1', 'penal1', 'procesal1', 'validez', 'ingles1', 'privado2', 'penal2', 'procesal2', 'constitucional2', 'internacional', 'ingles2'];

  const primerYSegundoCompletos = primerAnioIds.every(id => aprobados[id]) && segundoAnioIds.every(id => aprobados[id]);

  // Si no completo primero y segundo, bloquea tercero, cuarto y quinto
  if (!primerYSegundoCompletos) {
    // bloquea tercero, cuarto, quinto años
    const idsBloquear = cursos.filter(c => !primerAnioIds.includes(c.id) && !segundoAnioIds.includes(c.id)).map(c => c.id);
    idsBloquear.forEach(id => {
      const elem = document.getElementById(id);
      if (elem && !aprobados[id]) elem.classList.add('bloqueado');
    });
  } else {
    // Desbloquea tercero y cuarto
    const terceroCuarto = cursos.filter(c => ['privado3','penal3','procesal3','administrativo1','laboral1','ingles3',
                                               'privado4','penal4','procesal4','administrativo2','laboral2','ingles4',
                                               'privado5','procesal_penal','procesal_especial','tributario','comercial1','ingles5',
                                               'comercial2','privado6','clinica1','etica_prof','estrategias_litigacion'].includes(c.id)).map(c => c.id);

    terceroCuarto.forEach(id => {
      const elem = document.getElementById(id);
      if (elem && !aprobados[id]) elem.classList.remove('bloqueado');
    });

    // Requiere que tercero y cuarto completos para desbloquear quinto
    const tercerYCuartoIds = terceroCuarto;
    const quintoAnioIds = ['clinica2','fund_bienes_personas','fund_fuentes_obligaciones','fund_constitucional','fund_procesal','resolucion_casos','ingles6'];
    const tercerYCuartoCompletos = tercerYCuartoIds.every(id => aprobados[id]);

    if (!tercerYCuartoCompletos) {
      quintoAnioIds.forEach(id => {
        const elem = document.getElementById(id);
        if (elem && !aprobados[id]) elem.classList.add('bloqueado');
      });
    } else {
      quintoAnioIds.forEach(id => {
        const elem = document.getElementById(id);
        if (elem && !aprobados[id]) elem.classList.remove('bloqueado');
      });
    }
  }
}

window.onload = () => {
  actualizarVisual();
};

// Diccionario de requisitos por ID
const requisitos = {
  'ramo13': ['ramo2'], // Ejemplo: Privado I requiere Fundamentos Derecho Privado
  'ramo14': ['ramo8'], // Penal I requiere Criminología y Política Criminal
  'ramo15': ['ramo9'], // Procesal I requiere Teoría del Sistema Jurídico
  'ramo16': ['ramo3'], // Constitucional I requiere Fundamentos Derecho Público
  'ramo17': ['ramo12'], // Inglés I requiere Razonamiento Jurídico

  'ramo18': ['ramo13'], // Privado II requiere Privado I
  'ramo19': ['ramo14'], // Penal II requiere Penal I
  'ramo20': ['ramo15'], // Procesal II requiere Procesal I
  'ramo21': ['ramo16'], // Constitucional II requiere Constitucional I
  'ramo22': ['ramo10'], // Internacional requiere Validez Espacial y Temporal
  'ramo23': ['ramo17'], // Inglés II requiere Inglés I

  'ramo24': ['ramo18'], // Privado III
  'ramo25': ['ramo19'], // Penal III
  'ramo26': ['ramo20'], // Procesal III
  'ramo27': ['ramo21'], // Administrativo requiere Constitucional II
  'ramo29': ['ramo23'], // Inglés III

  'ramo30': ['ramo24'], // Privado IV
  'ramo31': ['ramo25'], // Penal IV
  'ramo32': ['ramo26'], // Procesal IV
  'ramo33': ['ramo21'], // Administrativo II
  'ramo34': ['ramo28'], // Laboral II requiere Laboral I
  'ramo35': ['ramo29'], // Inglés IV

  'ramo36': ['ramo30'], // Privado V
  'ramo37': ['ramo31'], // Procesal Penal
  'ramo38': ['ramo32'], // Procesal Especial
  'ramo39': ['ramo33'], // Tributario
  'ramo40': ['ramo30'], // Comercial I requiere Privado IV
  'ramo41': ['ramo35'], // Inglés V

  'ramo42': ['ramo40'], // Comercial II
  'ramo43': ['ramo36', 'ramo37', 'ramo38'], // Clínica Jurídica I
  'ramo44': ['ramo37', 'ramo38'], // Ética Profesional
  'ramo46': ['ramo43'], // Clínica Jurídica II
  'ramo47': ['ramo36', 'ramo38'], // Instituciones Fundamentales Civil Bienes y Personas
  'ramo48': ['ramo36', 'ramo38'], // Instituciones Fundamentales Civil Obligaciones
  'ramo49': ['ramo36', 'ramo38'], // Constitucional Fund.
  'ramo50': ['ramo36', 'ramo38'], // Procesal Fund.
  'ramo51': ['ramo36', 'ramo38'], // Resolución de Casos
  'ramo52': ['ramo41'], // Inglés VI
};

function aprobar(element) {
  if (element.classList.contains('aprobado')) return;

  element.classList.add('aprobado');

  // Revisa si otros ramos se pueden desbloquear
  const ramos = document.querySelectorAll('.ramo');
  ramos.forEach(ramo => {
    const id = ramo.id;
    const reqs = requisitos[id];
    if (!reqs) return;

    const todosAprobados = reqs.every(req => {
      const reqElement = document.getElementById(req);
      return reqElement && reqElement.classList.contains('aprobado');
    });

    if (todosAprobados) {
      ramo.classList.remove('bloqueado');
      ramo.classList.add('desbloqueado');
    }
  });
}

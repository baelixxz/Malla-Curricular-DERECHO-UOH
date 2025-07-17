const requisitos = {
  // Estructura: 'idCurso': ['idCursoRequisito1', 'idCursoRequisito2']
  'constitucional1': ['fundpublico'],
  'privado1': ['fundprivado'],
  'penal1': ['crimino'],
  'procesal1': ['teosistema'],
  'privado2': ['privado1'],
  'penal2': ['penal1'],
  'procesal2': ['procesal1'],
  'constitucional2': ['constitucional1'],
  'internacional': ['validez'],
  'ingles2': ['ingles1'],
  'privado3': ['privado2'],
  'penal3': ['penal2'],
  'procesal3': ['procesal2'],
  'administrativo1': ['constitucional2'],
  'laboral1': [],
  'ingles3': ['ingles2'],
  'privado4': ['privado3'],
  'penal4': ['penal3'],
  'procesal4': ['procesal3'],
  'administrativo2': ['constitucional2'],
  'laboral2': ['laboral1'],
  'ingles4': ['ingles3'],
  'privado5': ['privado4'],
  'procesalpenal': ['penal4'],
  'procesalespecial': ['procesal4'],
  'tributario': ['administrativo2'],
  'comercial1': ['privado4'],
  'ingles5': ['ingles4'],
  'comercial2': ['comercial1'],
  'privado6': ['privado5'],
  'clinicai': ['privado5', 'procesalpenal', 'procesalespecial'],
  'etica': ['procesalespecial', 'procesalpenal'],
  'litigacion': [],
  'clinica2': ['clinicai'],
  'civilbienes': ['privado6', 'procesalespecial'],
  'civilfuentes': ['privado6', 'procesalespecial'],
  'constitucionalf': ['privado6', 'procesalespecial'],
  'procesalf': ['privado6', 'procesalespecial'],
  'resolucion': ['privado6', 'procesalespecial'],
  'ingles6': ['ingles5']
};

function aprobar(id) {
  const curso = document.getElementById(id);
  if (!curso || curso.classList.contains('bloqueado') || curso.classList.contains('aprobado')) return;

  curso.classList.add('aprobado');

  // Revisa si otros cursos dependen de este y desbloquéalos si corresponde
  for (let [cursoId, prereqs] of Object.entries(requisitos)) {
    if (document.getElementById(cursoId)?.classList.contains('aprobado')) continue;

    const todosAprobados = prereqs.every(pr => document.getElementById(pr)?.classList.contains('aprobado'));

    if (todosAprobados) {
      const desbloquear = document.getElementById(cursoId);
      if (desbloquear) {
        desbloquear.classList.remove('bloqueado');
      }
    }
  }
}

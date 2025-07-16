const cursos = [
  // Semestre 1
  { id: "fund_privado", nombre: "Fund. Derecho Privado", requisitos: [], semestre: 1 },
  { id: "fund_publico", nombre: "Fund. Derecho Público", requisitos: [], semestre: 1 },
  { id: "historia", nombre: "Historia Jurídica", requisitos: [], semestre: 1 },
  { id: "sociologia", nombre: "Sociología Jurídica", requisitos: [], semestre: 1 },
  { id: "lenguaje", nombre: "Lenguaje Jurídico", requisitos: [], semestre: 1 },
  { id: "taller_oral", nombre: "Taller Oral y Escrita", requisitos: [], semestre: 1 },
  // Semestre 2
  { id: "derecho_economia", nombre: "Derecho y Economía", requisitos: [], semestre: 2 },
  { id: "criminologia", nombre: "Criminología", requisitos: [], semestre: 2 },
  { id: "teoria_sistema", nombre: "Teoría del Sistema", requisitos: [], semestre: 2 },
  { id: "metod_investigacion", nombre: "Metodología Jurídica", requisitos: [], semestre: 2 },
  { id: "tradiciones", nombre: "Tradiciones Comparadas", requisitos: [], semestre: 2 },
  { id: "razonamiento", nombre: "Razonamiento Jurídico", requisitos: [], semestre: 2 },
  // Agrega más semestres aquí si deseas...
];

const malla = document.getElementById("malla");
const aprobados = {};

function puedeAprobar(id) {
  const curso = cursos.find(c => c.id === id);
  if (!curso) return false;
  return curso.requisitos.every(r => aprobados[r]);
}

function aprobar(id) {
  if (!puedeAprobar(id)) {
    alert("Este ramo está bloqueado. Debes aprobar los requisitos primero.");
    return;
  }
  aprobados[id] = true;
  actualizarVisual();
}

function crearRamos() {
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = curso.id;
    div.textContent = curso.nombre;
    div.addEventListener("click", () => aprobar(curso.id));
    malla.appendChild(div);
  });
}

function actualizarVisual() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (aprobados[curso.id]) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
    } else if (!puedeAprobar(curso.id)) {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    } else {
      div.classList.remove("bloqueado", "aprobado");
    }
  });
}

crearRamos();
actualizarVisual();

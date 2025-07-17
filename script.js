document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function actualizarEstado() {
    ramos.forEach(ramo => {
      const requisitos = ramo.getAttribute("data-requisitos");
      if (!requisitos || requisitos.trim() === "") {
        ramo.classList.remove("bloqueado");
        ramo.classList.add("desbloqueado");
      } else {
        const requisitosIds = requisitos.split(",");
        const cumplidos = requisitosIds.every(id => {
          const req = document.getElementById(id);
          return req && req.classList.contains("aprobado");
        });

        if (cumplidos) {
          ramo.classList.remove("bloqueado");
          ramo.classList.add("desbloqueado");
        } else {
          ramo.classList.remove("desbloqueado");
          ramo.classList.add("bloqueado");
        }
      }
    });
  }

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("desbloqueado")) {
        if (ramo.classList.contains("aprobado")) {
          // Si ya está aprobado y lo tocas, se desmarca
          ramo.classList.remove("aprobado");
        } else {
          // Si no está aprobado, lo marcas como aprobado
          ramo.classList.add("aprobado");
        }
        actualizarEstado(); // Vuelve a revisar los requisitos después de cualquier cambio
      }
    });
  });

  actualizarEstado();
});

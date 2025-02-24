window.onload = function () {
    const elements = {
      nombre: document.getElementById("nombre"),
      apellidos: document.getElementById("apellidos"),
      email: document.getElementById("email"),
      clave: document.getElementById("clave"),
      formulario: document.querySelector("form"),
    };
  
    const spans = {
      nombre: document.getElementById("nombreSpan"),
      apellidos: document.getElementById("apellidosSpan"),
      email: document.getElementById("emailSpan"),
      clave: document.getElementById("claveSpan"),
    };
  
    const regex = {
      email: /^[A-Za-z0-9-]{3,20}@[A-Za-z0-9]{3,20}\.[A-Za-z]{2,3}$/,
      clave: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/,
    };
  
    function validarCampo(campo, span, mensajeError, regexExp = null) {
      const valor = campo.value.trim();
      const esValido = valor !== "" && (!regexExp || regexExp.test(valor));

      span.classList.remove("letraRoja", "letraVerde", "aviso");
      campo.classList.remove("fondoRojo");
      span.innerHTML = "";
  
      const img = document.createElement("img");
      img.setAttribute("src", esValido ? "./public/img/emoji-smile-fill.svg" : "./public/img/emoji-frown-fill.svg");
      img.style.filter = esValido
        ? "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)"
        : "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
  
      span.textContent = esValido ? `Campo ${campo.id} correcto` : mensajeError;
      span.appendChild(img);
      span.classList.add(esValido ? "letraVerde" : "letraRoja");
      if (!esValido) campo.classList.add("fondoRojo");
  
      return esValido;
    }
  
    const validadores = {
      nombre: () => validarCampo(elements.nombre, spans.nombre, "No se puede poner nombre vacío"),
      apellidos: () => validarCampo(elements.apellidos, spans.apellidos, "No se puede poner apellidos vacío"),
      email: () => validarCampo(elements.email, spans.email, "Campo email inválido", regex.email),
      clave: () => validarCampo(elements.clave, spans.clave, "Campo clave inválido", regex.clave),
    };
  
    Object.keys(elements).forEach((key) => {
      if (key !== "formulario") {
        elements[key].addEventListener("keydown", validadores[key]);
      }
    });
  
    function verificarTodo() {
      return Object.values(validadores).every((validator) => validator());
    }
  
    elements.formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!verificarTodo()) return;
  
      const datosForm = {
        nombre: elements.nombre.value,
        apellidos: elements.apellidos.value,
        email: elements.email.value,
        clave: elements.clave.value,
        tipo: "REGISTRADO",
      };
  
      fetch("Controller/registroEnvio.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosForm),
      })
        .then((response) => {
          if (!response.ok) throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
          return response.json();
        })
        .then((data) => manejarRespuesta(data))
        .catch((error) => mostrarErrorConexion(error));
    });
  
    function manejarRespuesta(data) {
      if (data.success) {
        alert("Usuario registrado correctamente.");
        window.location.href = "login.php";
      } else {
        mostrarErrorCampo(elements.email, spans.email, data.message);
      }
    }

    function mostrarErrorConexion(error) {
      console.error("Error:", error);
      mostrarErrorCampo(elements.email, spans.email, "Error de conexión con el servidor.");
    }
    function mostrarErrorCampo(campo, span, mensaje) {
      validarCampo(campo, span, mensaje);
    }
  };
  
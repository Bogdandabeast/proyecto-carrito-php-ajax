document.addEventListener("DOMContentLoaded", function(){
        let email_invitado = document.getElementById("email_invitado");
        let email = document.getElementById("email");
        let clave = document.getElementById("clave");
        let formulario = document.querySelector("form");
    
        let emailSpan = document.getElementById("emailSpan");
        let claveSpan = document.getElementById("claveSpan");
    
        const emailER = /^[A-Za-z0-9-]{3,20}@[A-Za-z0-9]{3,20}\.[A-Za-z]{2,3}$/;
        const claveER = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
    
        function emailV(email) {

            if (email.value.trim() === "") {
                emailSpan.classList.remove("letraVerde");
                email.classList.add("fondoRojo");
                emailSpan.classList.remove("aviso");
    
                let img = document.createElement("img");
                img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
                img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
    
                emailSpan.textContent = "No se puede poner email vacío";
                emailSpan.appendChild(img);
                emailSpan.classList.add("letraRoja");
    
                return false;
            } else if (!emailER.test(email.value.trim())) {
                emailSpan.classList.remove("letraVerde");
                email.classList.add("fondoRojo");
                emailSpan.classList.remove("aviso");
    
                let img = document.createElement("img");
                img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
                img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
    
                emailSpan.textContent = "Formato de email inválido";
                emailSpan.appendChild(img);
                emailSpan.classList.add("letraRoja");
    
                return false;
            } else {
                emailSpan.classList.remove("letraRoja");
                email.classList.remove("fondoRojo");
                emailSpan.classList.remove("aviso");
    
                let img = document.createElement("img");
                img.setAttribute("src", "./public/img/emoji-smile-fill.svg");
                img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)";
    
                emailSpan.textContent = "Email correcto";
                emailSpan.appendChild(img);
                emailSpan.classList.add("letraVerde");
    
                return true;
            }
        }
    
        function claveV(clave) {
            if (clave.value.trim() === "") {
                claveSpan.classList.remove("letraVerde");
                clave.classList.add("fondoRojo");
                claveSpan.classList.remove("aviso");
    
                let img = document.createElement("img");
                img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
                img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
    
                claveSpan.textContent = "No se puede poner clave vacía";
                claveSpan.appendChild(img);
                claveSpan.classList.add("letraRoja");
    
                return false;
            } else if (!claveER.test(clave.value.trim())) {
                claveSpan.classList.remove("letraVerde");
                clave.classList.add("fondoRojo");
                claveSpan.classList.remove("aviso");
    
                let img = document.createElement("img");
                img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
                img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
    
                claveSpan.textContent = "La clave debe tener al menos 8 caracteres, con mayúsculas, minúsculas, un número y un carácter especial";
                claveSpan.appendChild(img);
                claveSpan.classList.add("letraRoja");
    
                return false;
            } else {
                claveSpan.classList.remove("letraRoja");
                clave.classList.remove("fondoRojo");
                claveSpan.classList.remove("aviso");
    
                let img = document.createElement("img");
                img.setAttribute("src", "./public/img/emoji-smile-fill.svg");
                img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)";
    
                claveSpan.textContent = "Clave correcta";
                claveSpan.appendChild(img);
                claveSpan.classList.add("letraVerde");
    
                return true;
            }
        }
    
        email.addEventListener("blur", function() { emailV(email) });

        clave.addEventListener("blur", function() { claveV(clave) });
        email_invitado.addEventListener("blur", function() { emailV(email_invitado) });


    
        function verificarTodo() {
            let valido = true;
            if (!emailV(email)) {
                valido = false;
            }
            if (!claveV(clave)) {
                valido = false;
            }
            return valido;
        }
    
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            if (verificarTodo()) {

                let formData = {email:email.value, clave:clave.value};    
                let options = {
                    method: 'POST',
                    body: JSON.stringify(formData)
                };
                
    
                fetch('./Controller/loginEnvio.php', options)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Error en la respuesta del servidor: " + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.success) {
                            alert("Usuario logeado correctamente.");
                            window.location.href = "../usuario.php";
                        } else {
                            alert("Error al logear usuario: " + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert("Ocurrió un error en la comunicación con el servidor.");
                    });
            } else {
                emailV(email);
                claveV(clave);
            }
        });

        document.getElementById("invitado").addEventListener("click", function() {
            document.getElementById("formularioLogin").style.display = "none";
            document.getElementById("formularioInvitado").style.display = "flex";
        });

        document.getElementById("login").addEventListener("click", function() {
            document.getElementById("formularioLogin").style.display = "flex";
            document.getElementById("formularioInvitado").style.display = "none";

        });

        document.getElementById("formularioInvitado").addEventListener("submit", function(e) {
            e.preventDefault();
            if (emailV(email_invitado)) {

                let formData = {email:email.value};    
                let options = {
                    method: 'POST',
                    body: JSON.stringify(formData)
                };
                fetch('./Controller/loginEnvio.php', options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error en la respuesta del servidor: " + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        alert("Usuario logeado correctamente.");
                        window.location.href = "../invitado.php";
                    } else {
                        alert("Error al entrar como invitado: " + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Ocurrió un error en la comunicación con el servidor.");
                }); 
        } 
            
    })
    
    
    
    








});
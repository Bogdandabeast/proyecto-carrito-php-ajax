document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("formularioLogin").addEventListener("submit",function(e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let clave = document.getElementById("clave").value;

        const emailER = /^[A-Za-z0-9-]{3,20}@[A-Za-z0-9]{3,20}\.[A-Za-z]{2,3}$/;
        const claveER = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;






    })
    function updateFieldStatus(field, fieldSpan, isValid, message, imgSrc, imgFilter, classToAdd) {
        // Restablecer clases y contenido
        fieldSpan.classList.remove("letraVerde", "letraRoja");
        field.classList.remove("fondoRojo");
        fieldSpan.classList.remove("aviso");
        fieldSpan.textContent = message;
    
        // Crear y configurar la imagen
        let img = document.createElement("img");
        img.setAttribute("src", imgSrc);
        img.style.filter = imgFilter;
        fieldSpan.appendChild(img);
    
        // Agregar la clase correspondiente
        fieldSpan.classList.add(classToAdd);
    
        // Si no es válido, agregar fondo rojo al campo
        if (!isValid) {
            field.classList.add("fondoRojo");
        }
    }
    
    function validateField(field, fieldSpan, regex, emptyMessage, invalidMessage) {
        let value = field.value.trim();
    
        if (value === "") {
            updateFieldStatus(
                field,
                fieldSpan,
                false,
                emptyMessage,
                "./public/img/emoji-frown-fill.svg",
                "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)",
                "letraRoja"
            );
            return false;
        } else if (!regex.test(value)) {
            updateFieldStatus(
                field,
                fieldSpan,
                false,
                invalidMessage,
                "./public/img/emoji-frown-fill.svg",
                "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)",
                "letraRoja"
            );
            return false;
        } else {
            updateFieldStatus(
                field,
                fieldSpan,
                true,
                "Campo correcto",
                "./public/img/emoji-smile-fill.svg",
                "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)",
                "letraVerde"
            );
            return true;
        }
    }
    
    function emailV() {
        const emptyMessage = "No se puede poner email vacío";
        const invalidMessage = "Email inválido. Debe tener de 3 a 20 caracteres alfanuméricos o guión, una arroba, de 3 a 20 caracteres alfanuméricos, un punto y 2 o 3 letras";
        return validateField(email, emailSpan, emailER, emptyMessage, invalidMessage);
    }
    
    function claveV() {
        const emptyMessage = "No se puede poner clave vacía";
        const invalidMessage = "La clave debe tener al menos 8 caracteres, con al menos una letra mayúscula, una minúscula, un carácter no alfanumérico y un número";
        return validateField(clave, claveSpan, claveER, emptyMessage, invalidMessage);
    }
    
    








});
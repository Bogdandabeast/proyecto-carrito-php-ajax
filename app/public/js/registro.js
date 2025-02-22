window.onload = function(){
//todas las variables del formulario
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("email");
let clave = document.getElementById("clave");
let formulario = document.querySelector("form");

//variables avisos de error
let nombreSpan = document.getElementById("nombreSpan");
let apellidosSpan = document.getElementById("apellidosSpan");
let emailSpan = document.getElementById("emailSpan");
let claveSpan = document.getElementById("claveSpan");

//expresion regulares
const emailER = /^[A-Za-z0-9-]{3,20}@[A-Za-z0-9]{3,20}\.[A-Za-z]{2,3}$/;
const claveER = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;

//funciones de verificacion de campos
//verificar nombre
function nombreV(){
    if (nombre.value.trim() === "") {
        //remover clase con letra verde si caso ya tiene
        nombreSpan.classList.remove("letraVerde");
        //agregar clase de fondo rojo
        nombre.classList.add("fondoRojo");
        //remover clase con display none para que aparezca lo elemento de span
        nombreSpan.classList.remove("aviso");

        //crear elemento que sera la imagen
        let img = document.createElement("img");
        
        //valor de enlace Elemento imagen
        img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
        
        //aplicar filtro rojo a la imagen para que se quede rojo
        img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
        
        //texto de campo Span nombre
        nombreSpan.textContent = "No se puede poner nombre vacío";
        //agregar imagen a campo
        nombreSpan.appendChild(img);

        //agregar clase letra roja
        nombreSpan.classList.add("letraRoja");
        return false;
    } else {
        //remover clase con letra roja si caso ya tiene
        nombreSpan.classList.remove("letraRoja");
        //quitar clase de fondo rojo
        nombre.classList.remove("fondoRojo");
        //Remover clase con display none para que aparezca lo elemento de span
        nombreSpan.classList.remove("aviso");
        
        //crear elemento
        let img = document.createElement("img");
        
        //valor de enlace Elemento
        img.setAttribute("src", "./public/img/emoji-smile-fill.svg");
        
        //aplicar filtro verde a la imagen
        img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)";
        
        //texto de campo nombre
        nombreSpan.textContent = "Campo Nombre correcto";
        //agregar imagen a campo
        nombreSpan.appendChild(img);
        
        //agregar clase letra verde
        nombreSpan.classList.add("letraVerde");
        return true;
    }
}
//verificar apellido
function apellidosV(){
    if(apellidos.value.trim() == ""){
        //remover valse con letra verde si caso ya tiene
        apellidosSpan.classList.remove("letraVerde");
        //poner fondo rojo a campo
        apellidos.classList.add("fondoRojo");
         //remover clase con display none para que aparezca lo elemento de span
         apellidosSpan.classList.remove("aviso");

         //crear elemento que sera la imagen
         let img = document.createElement("img");
         
         //valor de enlace Elemento imagen
         img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
         
         //aplicar filtro rojo a la imagen para que se quede rojo
         img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
         
         //texto de campo Span nombre
         apellidosSpan.textContent = "No se puede poner apellidos vacío";
         //agregar imagen a campo
         apellidosSpan.appendChild(img);
 
         //agregar clase letra roja
         apellidosSpan.classList.add("letraRoja");
         return false;
     } else {
         //remover clase con letra roja si caso ya tiene
         apellidosSpan.classList.remove("letraRoja");

         //quitar fondo rojo
         apellidos.classList.remove("fondoRojo");

         //remover clase con display none para que aparezca lo elemento de span
         apellidosSpan.classList.remove("aviso");
         
         //crear elemento
         let img = document.createElement("img");
         
         //valor de enlace Elemento
         img.setAttribute("src", "./public/img/emoji-smile-fill.svg");
         
         //aplicar filtro verde a la imagen
         img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)";
         
         //texto de campo apellidos
         apellidosSpan.textContent = "Campo apellidos correcto";
         //agregar imagen a campo
         apellidosSpan.appendChild(img);
         
         //agregar clase letra verde
         apellidosSpan.classList.add("letraVerde");
         return true;
     }
}
//verificar email
function emailV(){
    if(email.value.trim() == ""){
          //remover valse con letra verde si caso ya tiene
          emailSpan.classList.remove("letraVerde");
          //poner fondo rojo a campo
          email.classList.add("fondoRojo");
           //remover clase con display none para que aparezca lo elemento de span
           emailSpan.classList.remove("aviso");
  
           //crear elemento que sera la imagen
           let img = document.createElement("img");
           
           //valor de enlace Elemento imagen
           img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
           
           //aplicar filtro rojo a la imagen para que se quede rojo
           img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
           
           //texto de campo Span nombre
           emailSpan.textContent = "No se puede poner email vacío";
           //agregar imagen a campo
           emailSpan.appendChild(img);
   
           //agregar clase letra roja
           emailSpan.classList.add("letraRoja");
           return false;
    }else if(!emailER.test(email.value.trim())){
            //remover valse con letra verde si caso ya tiene
            emailSpan.classList.remove("letraVerde");
            //poner fondo rojo a campo
            email.classList.add("fondoRojo");
            //remover clase con display none para que aparezca lo elemento de span
            emailSpan.classList.remove("aviso");

            //crear elemento que sera la imagen
            let img = document.createElement("img");
            
            //valor de enlace Elemento imagen
            img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
            
            //aplicar filtro rojo a la imagen para que se quede rojo
            img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
            
            //texto de campo Span nombre
            emailSpan.textContent = "Campo email 3 a 20 caracteres alfanuméricos o guión, una arroba, de 3 a 20 caracteres alfanuméricos, un punto y 2 o 3 letras";
            //agregar imagen a campo
            emailSpan.appendChild(img);
    
            //agregar clase letra roja
            emailSpan.classList.add("letraRoja");
            return false;
    }else{
            //remover clase con letra roja si caso ya tiene
            emailSpan.classList.remove("letraRoja");

            //quitar fondo rojo
            email.classList.remove("fondoRojo");

            //remover clase con display none para que aparezca lo elemento de span
            emailSpan.classList.remove("aviso");
            
            //crear elemento
            let img = document.createElement("img");
            
            //valor de enlace Elemento
            img.setAttribute("src", "./public/img/emoji-smile-fill.svg");
            
            //aplicar filtro verde a la imagen
            img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)";
            
            //texto de campo email
            emailSpan.textContent = "Campo email correcto";
            //agregar imagen a campo
            emailSpan.appendChild(img);
            
            //agregar clase letra verde
            emailSpan.classList.add("letraVerde");
            return true;
    }
}
//verifivar clave
function claveV(){
    if(clave.value.trim() == ""){
        //remover valse con letra verde si caso ya tiene
        claveSpan.classList.remove("letraVerde");
        //poner fondo rojo a campo
        clave.classList.add("fondoRojo");
         //remover clase con display none para que aparezca lo elemento de span
         claveSpan.classList.remove("aviso");

         //crear elemento que sera la imagen
         let img = document.createElement("img");
         
         //valor de enlace Elemento imagen
         img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
         
         //aplicar filtro rojo a la imagen para que se quede rojo
         img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
         
         //texto de campo Span nombre
         claveSpan.textContent = "No se puede poner clave vacío";
         //agregar imagen a campo
         claveSpan.appendChild(img);
 
         //agregar clase letra roja
         claveSpan.classList.add("letraRoja");
         return false;
  }else if(!claveER.test(clave.value.trim())){
          //remover valse con letra verde si caso ya tiene
          claveSpan.classList.remove("letraVerde");
          //poner fondo rojo a campo
          clave.classList.add("fondoRojo");
          //remover clase con display none para que aparezca lo elemento de span
          claveSpan.classList.remove("aviso");

          //crear elemento que sera la imagen
          let img = document.createElement("img");
          
          //valor de enlace Elemento imagen
          img.setAttribute("src", "./public/img/emoji-frown-fill.svg");
          
          //aplicar filtro rojo a la imagen para que se quede rojo
          img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(0deg) brightness(90%) contrast(100%)";
          
          //texto de campo Span nombre
          claveSpan.textContent = "Campo clave  longitud mínima de 8, con al menos una letra mayúscula, una minúscula, un carácter no alfanumérico y un número";
          //agregar imagen a campo
          claveSpan.appendChild(img);
  
          //agregar clase letra roja
          claveSpan.classList.add("letraRoja");
          return false;
  }else{
          //remover clase con letra roja si caso ya tiene
          claveSpan.classList.remove("letraRoja");

          //quitar fondo rojo
          clave.classList.remove("fondoRojo");

          //remover clase con display none para que aparezca lo elemento de span
          claveSpan.classList.remove("aviso");
          
          //crear elemento
          let img = document.createElement("img");
          
          //valor de enlace Elemento
          img.setAttribute("src", "./public/img/emoji-smile-fill.svg");
          
          //aplicar filtro verde a la imagen
          img.style.filter = "invert(24%) sepia(100%) saturate(2600%) hue-rotate(90deg) brightness(90%) contrast(100%)";
          
          //texto de campo clave
          claveSpan.textContent = "Campo clave correcto";
          //agregar imagen a campo
          claveSpan.appendChild(img);
          
          //agregar clase letra verde
          claveSpan.classList.add("letraVerde");
          return true;
  }
}
//eventos de verificacion
//eventos del campo nombre
nombre.addEventListener("blur", () => { 
    nombreV();
});

//eventos del campo apellidos
apellidos.addEventListener("blur", () => { 
    apellidosV();
});

//eventos del campo email
email.addEventListener("blur", () => { 
    emailV();
});

//eventos del campo clave
clave.addEventListener("blur", () => { 
    claveV();
});

//evento que verifica todos los campos y hace el fetch PHP
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let verifica = verificarTodo();
    
    if(verifica) {    
        //crear un objeto con los valores del formulario ********* lo que me da problemas
        let datosForm = {
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value,
            email: document.getElementById("email").value,
            clave: document.getElementById("clave").value,
            tipo: "REGISTRADO"
        };
        //objeto con la configuracion de la base de datos
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Asegúrate de enviar los datos como JSON
            },
            body: JSON.stringify(datosForm) // Aquí pasamos los datos correctamente
        };

fetch('Controller/registroEnvio.php', options)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor: " + response.statusText);
        }
        return response.json(); // Esperamos una respuesta en formato JSON
    })
    .then(data => {
        if (data.success) {
            alert("Usuario registrado correctamente.");
            window.location.href = "usuario.php"; // Redirigir al usuario
        } else {
            alert("Error al registrar usuario: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error en la comunicación con el servidor.");
    });
    } else {
        nombreV();
        apellidosV();
        emailV();
        claveV();
    }
});

//funcion que va a hacer una ultima verificacion
function verificarTodo(){
    //variable mas importante valido
    let valido = false;
    if(nombreV()){
        valido = true;
    }
    if(apellidosV()){
        valido = true;
    }
    if(emailV()){
        valido = true;
    }
    if(claveV()){
        valido = true;
    }
    if(valido){
    return true;
    }else{
    return false;
    }
}
}

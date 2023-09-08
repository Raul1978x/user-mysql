
window.onload = () => {
    const formulario = document.getElementById("registrationForm");
    const btn = document.querySelector(".traerUsuario")


   formulario.addEventListener("submit", (event) => {
       event.preventDefault();
       agregarUsuario();
   });

   btn.addEventListener("click", traeUsuarios);

};

const usuarios = document.querySelector(".contenedorUsuarios")


function verRegistro(){
    usuarios.innerHTML = `
    <div class="contenedorUsuarios">
        <h2>Registro de Usuario</h2>
        <form id="registrationForm">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Registrarse</button>
        </form>
    </div>`
}


function agregarUsuario() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const userData = {
        email: email,
        password: password
    };

    fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
        if(response.ok) {return response.json();
        }else {
            throw new Error("Registracion fallida")
        }
    })
        .then(data => {
            console.log("Registro exitoso:", data);
            alert("registro existoso")
        })
        .catch(error => {
            console.error("Error en el registro:", error);
            alert("error al registrar usuario")
        });
}

function traeUsuarios() {

    fetch("http://localhost:8080/api/v1/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            data.forEach((usuario) => {
                usuarios.innerHtml += `<h2>${usuario.nombre}</h2>`
            })
        })
        .catch(error => {
            console.error("Error al obtener usuarios:", error);
            // Manejo de errores, como mostrar un mensaje de error al usuario.
        });
}



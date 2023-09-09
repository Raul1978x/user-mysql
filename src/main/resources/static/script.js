const usuarios = document.querySelector(".contenedorUsuarios")
const form = document.querySelector(".registrationForm")

window.onload = () =>{
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        agregarUsuario()
    })
}

function agregarUsuario() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const direccion = document.querySelector("#direccion").value;
    const codigoPostal = document.querySelector("#codigoPostal").value;
    const dni = document.querySelector("#dni").value;
    const telefono = document.querySelector("#telefono").value;

    const userData = {
        nombre,
        apellido,
        direccion,
        codigoPostal,
        dni,
        telefono,
        email,
        password
    };

    console.log("userData:", userData);

    fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Registro exitoso:", data);
            alert("registro existoso")
        })
        .catch(error => {
            console.error("Error en el registro:", error);
            // Manejo de errores, como mostrar un mensaje de error al usuario.
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
            usuarios.innerHTML = ""
            data.forEach((usuario) => {
                usuarios.innerHTML += `
                <article>
                    <h2>${usuario.nombre + " " + usuario.apellido} </h2>
                    <p>email: ${usuario.email}</p>
                    <p>direccion: ${usuario.direccion}</p>
                    <p>codigo postal: ${usuario.codigoPostal}</p>
                </article>`
            })
        })
        .catch(error => {
            console.error("Error al obtener usuarios:", error);
            // Manejo de errores, como mostrar un mensaje de error al usuario.
        });
}

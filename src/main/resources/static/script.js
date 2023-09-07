const usuarios = document.querySelector(".contenedorUsuarios")

function verUsuarios(user){
    usuarios.innerHTML = `
    <div class="containerUsuario">
        <h1>usuarios</h1>
    </div>`
}

function verRegistro(){
    usuarios.innerHTML = `
    <div class="containerUsuario">
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
                console.log(usuario)
                console.log("usuarios",usuarios)
                usuarios.innerHTML += `
                <article>
                    <h2>${usuario.nombre + " " + usuario.apellido} </h2>
                    <p>email: ${usuario.email}</p>
                    <p>direccion: ${usuario.direccion}</p>
                    <p>codigo postal: ${usuario.codigoPostal}</p>
                </article>`

                usuarios.innerHtml += usuario
            })
        })
        .catch(error => {
            console.error("Error al obtener usuarios:", error);
            // Manejo de errores, como mostrar un mensaje de error al usuario.
        });
}


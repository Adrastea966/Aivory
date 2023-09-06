//Registro y Loggin
document.addEventListener('DOMContentLoaded', () => {
    let userButton = document.getElementById('user');
    let overlay = document.getElementById('overlay');
    let closeButton = document.getElementById('close');
    let registroLink = document.querySelector('.registro-link');
    let form = document.querySelector('.form');
    let formRegistro = document.querySelector('.form-registro');
    let btnRegistro = document.querySelector('.registro')

    userButton.addEventListener('click', () => {
        overlay.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    registroLink.addEventListener('click', (event) => {
        event.preventDefault();
        form.style.display = 'none';
        btnRegistro.style.display = 'none';
        formRegistro.style.display = 'block';
    });

    //Evento para guardar datos en localStorage y mostrar mensaje de éxito o error
    let registroUsuarioBtn = document.getElementById('registro-usuario');
    registroUsuarioBtn.addEventListener('click', () => {
        let registroName = document.getElementById('name-registro').value;
        let registroPass = document.getElementById('pass-registro').value;

        // Verificar si los campos están vacíos
        if (!registroName || !registroPass) {
            alert('Error: Ingresa datos en todos los campos para poder registrarte.');
            return; //Detener la función si faltan datos
        }

        //Verificar si el usuario ya existe en el localStorage
        let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        let usuarioExistente = usuariosRegistrados.find((usuario) => usuario.nombre === registroName);

        if (usuarioExistente) {
            alert('Este usuario ya está registrado. Por favor, elige otro nombre de usuario.');
        } else {

            //Almacenar el nuevo usuario en localStorage
            usuariosRegistrados.push({ nombre: registroName, contraseña: registroPass });
            localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

            alert('Datos guardados con éxito.');

            //Limpiar campos de registro
            document.getElementById('name-registro').value = '';
            document.getElementById('pass-registro').value = '';
        }
    });

    //Loggin
    let iniciarSesionBtn = document.getElementById('iniciar-sesion');
    iniciarSesionBtn.addEventListener('click', () => {
        let loginName = document.getElementById('name').value;
        let loginPass = document.getElementById('pass').value;

        //Obtener los usuarios registrados del localStorage
        let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        let usuarioEncontrado = usuariosRegistrados.find((usuario) => usuario.nombre === loginName && usuario.contraseña === loginPass);

        if (usuarioEncontrado) {
            alert('Inicio de sesión exitoso.');

            // Limpiar campos de inicio de sesión
            document.getElementById('name').value = '';
            document.getElementById('pass').value = '';
        } else {
            alert('Error: Datos incorrectos, vuelve a intentar.');
        }
    });
});
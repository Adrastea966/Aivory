const iniciarSesion = () => {
    const user = 'Eli';
    const pass = '1234';
    const maxIntentos = 3;
    let contadorIntentos = 0;

    while (contadorIntentos <= maxIntentos) {
        const intentosRestantes = maxIntentos - contadorIntentos;
        const nombreUsuario = prompt('Ingresa tu nombre de usuario');
        const passIngresada = prompt('Ingresa tu contraseña');

        if (nombreUsuario === user && passIngresada === pass) {
            alert(`Bienvenido/a ${user}`);
            return;
        } else {
            contadorIntentos += 1;
            alert(`Incorrecto, te quedan ${intentosRestantes} intento(s)`);
        }
    }

    alert('Has agotado todos los intentos. Espere un tiempo antes de volver a intentarlo.');
};

iniciarSesion();
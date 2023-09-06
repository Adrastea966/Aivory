//Array de objetos
document.addEventListener('DOMContentLoaded', function () {
    const arrayDeObjetos = [
        { nombre: 'Desarrollo web', id: 1, categoria: 'Trabajo' },
        { nombre: 'Diseño grafico', id: 2, categoria: 'Trabajo' },
        { nombre: 'Desarrollo web', id: 3, categoria: 'Curiosidad' },
        { nombre: 'Chatsonic', id: 4, categoria: 'Ocio' },
        { nombre: 'Writings', id: 5, categoria: 'Curiosidad' }
    ];

    const verTrabajosButton = document.querySelector('.ver-trabajos');

    verTrabajosButton.addEventListener('click', function () {
        const categoriaTrabajo = arrayDeObjetos.find(objeto => objeto.categoria === 'Trabajo');

        if (categoriaTrabajo) {
            const trabajos = arrayDeObjetos.filter(objeto => objeto.categoria === 'Trabajo');
            console.log(trabajos);
        } else {
            console.log("No se encontraron AI con esa categoría");
        }
    });
});
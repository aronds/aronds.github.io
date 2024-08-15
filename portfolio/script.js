// Escucha el evento 'DOMContentLoaded' para garantizar que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces dentro del elemento con la clase 'sidebar'
    const links = document.querySelectorAll('.sidebar a');
    // Selecciona todos los elementos div dentro del elemento con la clase 'content'
    const contentDivs = document.querySelectorAll('.content > div');

    // Itera sobre cada enlace
    links.forEach(function(link) {
        // Agrega un event listener para el evento 'click' a cada enlace
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace al hacer clic

            // Obtiene el ID del objetivo del enlace (elimina el primer carácter '#')
            const targetId = this.getAttribute('href').substring(1);
            // Obtiene el elemento div de contenido correspondiente al ID
            const targetDiv = document.getElementById(targetId);

            // Oculta todos los divs de contenido
            contentDivs.forEach(function(div) {
                div.style.display = 'none';
            });

            // Muestra el div de contenido correspondiente al enlace seleccionado
            targetDiv.style.display = 'block';
        });
    });
});

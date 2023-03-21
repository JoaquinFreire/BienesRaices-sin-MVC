document.addEventListener('DOMContentLoaded', function() {
    eventlisteners();
    darkMode();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // console.log(prefiereDarkMode.matches);

    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if (prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {

        setTimeout(() => {
            document.body.classList.toggle('dark-mode');
            setTimeout(() => {
                document.body.classList.toggle('dark-mode');
                setTimeout(() => {
                    document.body.classList.toggle('dark-mode');
                }, 200)
            }, 200);

        }, 200);


    });
}


function eventlisteners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {

    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar'); //si tiene la clase la agrega y si no la tiene la quita, sencillo


    /* if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
 */
}
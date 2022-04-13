const navToggle = document.querySelector(".nav-toggle");
// seleccionamos la clase navtoggle , declaramos la constante navToggle es igual a ddocument.quuerySelector()dentro del parentesis ponemos la clase
//que seleccionamos en el archivo html.
//hacemos lo mismo para el que tiene clase nav-menu
const navMenu = document.querySelector(".nav-menu");
//cuando le de clic a toggle, le añadiremos un .addEventListenner() va a escuchar le evento ("Clic", le psamos una funcion () => {
//    que simplemente navMenu.classList le va a hacer un toogle a la clase que nosotros queremos hacerle toggle () toggle va hacer exactamente 
//lo que queremos si esta la clase la añade si no esta la elimina, le haremos toogle a "nav-menu_visible" que tomamos del styles.css


 navToggle.addEventListener("Clic", () => {
    navMenu.classList.toggle(".nav-menu_visible");

});

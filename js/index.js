
// cuando click en .Button-grafico/ .Button-web
    // Proyectos-div--grafico / Proyectos-div--web isVisible

const buttonGrafico = document.querySelector(".Proyectos-button--grafico")
const buttonWeb = document.querySelector(".Proyectos-button--web")
const proyectosGrafico = document.querySelector(".Proyectos-div--grafico")
const proyectosWeb = document.querySelector(".Proyectos-div--web")

buttonGrafico.addEventListener("click", () => {
    proyectosGrafico.classList.toggle("isVisible")
})

buttonWeb.addEventListener("click", () => {
    proyectosWeb.classList.toggle("isVisible")
})
    
    




const projectButtons = document.querySelectorAll('.Proyectos-div--button')

projectButtons.forEach(buttonDiv => {
    buttonDiv.addEventListener('click', () => {
        // Alterna la clase isActive en el contenedor
        buttonDiv.classList.toggle('isActive')
    })
})



// cuando click en menu-a--work
    // a manu-a--work-div se le add isVisible

const menuWorkLink = document.querySelector('.Menu-a--work')
const menuWorkDiv = document.querySelector('.Menu-a--work-div')


menuWorkLink.addEventListener('click', (event) => {
    event.preventDefault() 
    menuWorkDiv.classList.toggle('isVisible')
})


// cuando click en menu-a--work
    // a manu-a--work-div se le add isVisible
const menuContactoLink = document.querySelector('.Menu-a--contacto')
const menuContactoDiv = document.querySelector('.Menu-a--contacto-div')


menuContactoLink.addEventListener('click', (event) => {
    event.preventDefault()
    menuContactoDiv.classList.toggle('isVisible')
})






const work = document.querySelector(".Nav-a--work")
const workInfo = document.querySelector(".Work")
const hamburguesa = document.querySelector(".Header-menu")
const menu = document.querySelector(".Menu")

// Como tengo fallos que que los desplegables se queden abiertos cuando su max-width no corresponde, creo una funcion para cerrar todos los menus, para luego aplicarlo en el momento el que se modifique el ancho de la ventana
function closeAllMenus() {
    workInfo.classList.remove("isVisible")
    menu.classList.remove("isVisible")
    work.classList.remove("isVisible")
    hamburguesa.classList.remove("isVisible")
}

// Cuando click en .Work, solo se le toggle la clase isVisible si la pantalla es mayor a 768px
work.addEventListener("click", () => {
        if (window.matchMedia("(min-width: 769px)").matches) {
        workInfo.classList.toggle("isVisible")
        work.classList.toggle("isVisible")
    }
})

// Cuando click en .Heade-menu, solo se le toggle la clase isVisible si la pantalla es menor a 768px
hamburguesa.addEventListener("click", (e) => {

    if (window.matchMedia("(max-width: 768px)").matches) {
        menu.classList.toggle("isVisible")
        hamburguesa.classList.toggle("isVisible")
    }
})

// Cuando se cambie el tamaño de la pantalla (se agrande o achique) se activa la funcion closeAllMenus --> esta idea de hacer que se cierren todas las pantallas me lo ha dado chatgpt cuando le conté mi problema con los desplegables de los proyectos en pantallas grandes y responsive, pues se me mantenian ambos abiertos
window.addEventListener("resize", () => {
    closeAllMenus()
})




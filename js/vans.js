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
    
    // Cerrar todos los menus
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
    
    // Cuando se cambie el tamaño de la pantalla (se agrande o achique) se activa la funcion closeAllMenus 
    window.addEventListener("resize", () => {
        closeAllMenus()
    })
    



let foto= 0
let numFotos= 3
let anchoImagen= 100 / numFotos  /* Le quitamos 10% */


// Cuando hago CLICK en .Next
    // foto++
    // .Slide-wrapper le style transform translateX()
    // .Slide-div con posición i le style scale


const next=document.querySelector(`.Next`)
console.log(next)
const prev=document.querySelector(`.Prev`)
console.log(prev)
const slideWrapper=document.querySelector(`.Slide-wrapper`)
console.log(slideWrapper)
const slideDiv=document.querySelectorAll(`.Slide-div`)
console.log(slideDiv)

let mostrarImagen = ()=> {
    slideWrapper.style.transform=`translateX(-${anchoImagen * foto}%)`

    slideDiv.forEach((_,i)=>{        
        slideDiv[i].classList.remove(`isActive`)
    })
    slideDiv[foto].classList.add(`isActive`)
}

next.addEventListener(`click`, ()=>{
    foto++
    if(foto>=3){
        foto=0
    }
    console.log(foto)
    
    mostrarImagen()
    
    
})
prev.addEventListener(`click`, ()=>{
    foto--
    if(foto <= -1 ){
        foto=2
    }
    console.log(foto)
    
    mostrarImagen()
})

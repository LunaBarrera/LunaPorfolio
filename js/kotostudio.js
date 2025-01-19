





const cursor = document.querySelector('.Cursor')
const slide = document.querySelectorAll('.Slide-div')
const cursorScale = document.querySelector('.Cursor-scale')
const feedVideo = document.querySelectorAll('.Feed-video')
const feedImagen = document.querySelectorAll('.Feed-img')
const especial = document.querySelectorAll('.Especial')
const logo = document.querySelector('.Header-h1')
const nav = document.querySelectorAll('.Nav-li')
const redes = document.querySelectorAll('.Redes-li')
const info = document.querySelectorAll('.Info-li')
const cursorSpan=document.querySelector(`.Cursor-span`)
const cursorSpanSlide=document.querySelector(`.Cursor-span--slide`)
const cursorSpanNext=document.querySelector(`.Cursor-span--next`)
const cursorSpanPrev=document.querySelector(`.Cursor-span--prev`)
const cursorSpanFeed=document.querySelector(`.Cursor-span--feed`)
const heroGrid=document.querySelector(`.Hero-grid`)


let distanciaX = 0
let distanciaY = 0
let escala = 1
let cursorAmpliar= ()=>{
    escala = 2.5
    cursorScale.style.transform=`scale(${escala})`
}
let cursorDisminuye= ()=>{
    escala=1
    cursorScale.style.transform=`scale(${escala})`
}


window.addEventListener('mousemove', (e) => {
    let { clientX, clientY } = e;

    distanciaX = clientX
    distanciaY = clientY

    cursor.style.transform = `translateX(${distanciaX}px) translateY(${distanciaY}px)`
})


// cuando mouseover en todos .Slide-div
    // .cursorScale le scale

// cuando mouseout en todos .Slide-div
    // .cursorScale le scale


slide.forEach((_,i)=>{
    slide[i].addEventListener('mouseover', ()=>{
        escala = 2.5

        cursorSpanSlide.style.opacity= 1

        cursorScale.style.transform=`scale(${escala})`
    })

    
})

slide.forEach((_,i)=>{
    slide[i].addEventListener('mouseout', ()=>{
        escala=1

        cursorSpanSlide.style.opacity= 0

        cursorScale.style.transform=`scale(${escala})`
    })

    
})



// cuando mouseover en todos .Feed-video
    // .cursorScale le scale

// cuando mouseout en todos .Feed-video
    // .cursorScale le scale


    feedVideo.forEach((_,i)=>{
        feedVideo[i].addEventListener('mouseover', () => {
            escala = 2.5
    
            cursorSpanFeed.style.opacity= 1
    
            cursorScale.style.transform=`scale(${escala})`    
        })
    })
    
    feedVideo.forEach((_,i)=>{
        feedVideo[i].addEventListener('mouseout', ()=>{
            escala=1
    
            cursorSpanFeed.style.opacity= 0
    
            cursorScale.style.transform=`scale(${escala})`
        })
    })
    


// cuando mouseover en todos .Feed-img
    // .cursorScale le scale

// cuando mouseout en todos .Feed-img
    // .cursorScale le scale


feedImagen.forEach((_,i)=>{
    feedImagen[i].addEventListener('mouseover', () => {
        escala = 2.5

        cursorSpanFeed.style.opacity= 1

        cursorScale.style.transform=`scale(${escala})`    
    })
})

feedImagen.forEach((_,i)=>{
    feedImagen[i].addEventListener('mouseout', ()=>{
        escala=1

        cursorSpanFeed.style.opacity= 0

        cursorScale.style.transform=`scale(${escala})`
    })
})



// cuando mouseover en .Especial
    // .cursorScale le scale
    // .cursor le style mix blend mode - difference

// cuando mouseout en .Especial
    // .cursorScale le scale
    // .cursor le style mix blend mode - unset



especial.forEach((_,i)=>{
    especial[i].addEventListener('mouseover', () => {
        escala = 2.5
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `difference`

        heroGrid.classList.add(`isVisible`)
    
    })
})

especial.forEach((_,i)=>{
    especial[i].addEventListener('mouseout', ()=>{
        escala=1
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `unset`

        heroGrid.classList.remove(`isVisible`)
    })
})


// cuando mouseover en .Header-h1
    // .cursorScale le scale
    // .cursor le style mix blend mode - difference

// cuando mouseout en .Header-h1
    // .cursorScale le scale
    // .cursor le style mix blend mode - unset


    
logo.addEventListener('mouseover',() => {
    escala = 2.5
    cursorScale.style.transform=`scale(${escala})`
    
    cursor.style.mixBlendMode= `difference`

})

logo.addEventListener('mouseout', ()=>{
    escala=1
    cursorScale.style.transform=`scale(${escala})`
    
    cursor.style.mixBlendMode= `unset`
})


// cuando mouseover en .Nav-li
    // .cursorScale le scale
    // .cursor le style mix blend mode - difference

// cuando mouseout en .Nav-li
    // .cursorScale le scale
    // .cursor le style mix blend mode - unset


 
nav.forEach((_,i)=>{
    nav[i].addEventListener('mouseover', () => {
        escala = 2.5
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `difference`
    
    })
})

nav.forEach((_,i)=>{
    nav[i].addEventListener('mouseout', ()=>{
        escala=1
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `unset`
    })
})


// cuando mouseover en .Redes-li
    // .cursorScale le scale
    // .cursor le style mix blend mode - difference

// cuando mouseout en .Redes-li
    // .cursorScale le scale
    // .cursor le style mix blend mode - unset


    
redes.forEach((_,i)=>{
    redes[i].addEventListener('mouseover', () => {
        escala = 2.5
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `difference`
    
    })
})

redes.forEach((_,i)=>{
    redes[i].addEventListener('mouseout', ()=>{
        escala=1
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `unset`
    })
})


// cuando mouseover en .Info-li
    // .cursorScale le scale
    // .cursor le style mix blend mode - difference

// cuando mouseout en .Info-li
    // .cursorScale le scale
    // .cursor le style mix blend mode - unset



    
info.forEach((_,i)=>{
    info[i].addEventListener('mouseover', () => {
        escala = 2.5
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `difference`
    
    })
})

info.forEach((_,i)=>{
    info[i].addEventListener('mouseout', ()=>{
        escala=1
        cursorScale.style.transform=`scale(${escala})`
        
        cursor.style.mixBlendMode= `unset`
    })
})



    





let foto= 0
let numFotos=13
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
    if(foto>=13){
        foto=0
    }
    console.log(foto)
    
    mostrarImagen()
    
    
})
prev.addEventListener(`click`, ()=>{
    foto--
    if(foto <= -1 ){
        foto=12
    }
    console.log(foto)
    
    mostrarImagen()
})

next.addEventListener('mouseover', ()=>{
    escala = 2.5

    cursorSpanNext.style.opacity= 1
    cursorScale.style.transform=`scale(${escala})`
})

next.addEventListener('mouseout', ()=>{
    escala=1

    cursorSpanNext.style.opacity= 0
    cursorScale.style.transform=`scale(${escala})`
})
     

prev.addEventListener('mouseover', ()=>{
    escala = 2.5

    cursorSpanPrev.style.opacity= 1
    cursorScale.style.transform=`scale(${escala})`
})

prev.addEventListener('mouseout', ()=>{
    escala=1

    cursorSpanPrev.style.opacity= 0
    cursorScale.style.transform=`scale(${escala})`
})
        

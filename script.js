//Menu

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
});

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
});

// Modals
function onClick(image){
    document.getElementById("imageZoom").src = image.src;
    document.getElementById("modal").style.display = "block";
    let imgText = document.getElementById("imgText");
    imgText.innerHTML = image.alt;
}

// Btn ir arriba
const arriba = document.getElementById("arriba");
arriba.addEventListener('click', ()=>{
    window.scrollTo(0,0);
});

window.onscroll = () =>{
    agregar_btn_arriba();
}

const agregar_btn_arriba = () =>{
    if (window.scrollY < 300) {
        arriba.classList.remove("flecha-arriba-activo");
    } else {
        arriba.classList.add("flecha-arriba-activo");

    }
}




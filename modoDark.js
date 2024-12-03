const mododark = document.querySelector("#modo-dark");
const body = document.querySelector("body");
const tarjeta = document.querySelector(".contenedor");
const presentacion = document.querySelector(".tarjetapresentacion");

const estadoDarkMode = localStorage.getItem("dark-mode");

function activarModoDark(){
    body.classList.add("modo-dark__body");
    tarjeta.classList.add("modo-dark__tarjeta");
    presentacion.classList.add("modo-dark__tarjetapresentacion");
    localStorage.setItem("dark-mode","activado");
}

function desactivarModoDark(){
    body.classList.remove("modo-dark__body");
    tarjeta.classList.remove("modo-dark__tarjeta");
    presentacion.classList.remove("modo-dark__tarjetapresentacion");
    localStorage.setItem("dark-mode","desactivado");
}

if(estadoDarkMode === "activado"){
    activarModoDark();
    mododark.textContent="Modo light";
}
else{
    desactivarModoDark();
    mododark.textContent="Modo Dark";
}

mododark.addEventListener("click",()=>{
    const estadoDarkMode = localStorage.getItem("dark-mode");
    
    if(estadoDarkMode==="desactivado"){
        activarModoDark();
        mododark.textContent="Modo light";
    }
    else{
        desactivarModoDark();
        mododark.textContent="Modo dark";
    }
});
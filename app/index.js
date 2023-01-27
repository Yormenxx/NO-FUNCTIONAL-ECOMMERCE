
const $btn = document.getElementById("btn");
const $ocultar_prod = document.getElementById("ocultar_prod")
const $btn_mas = document.getElementById("btn_mas")
const $items_container = document.querySelector(".items-container")

$btn.addEventListener("click", ()=>{

    $items_container.classList.toggle("activate")

});

$btn_mas.addEventListener("click", ()=>{
    $ocultar_prod.classList.toggle("Mostrar-prod")

    if($ocultar_prod.classList.contains("Mostrar-prod")){

        $btn_mas.innerHTML="Ocultar productos"
    
    }else{
        $btn_mas.innerHTML="Mostrar productos"
    }
    
})


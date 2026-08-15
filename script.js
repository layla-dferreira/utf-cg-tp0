// window.alert("Essa pagina é interativa");

function abrirFechar() {
    const titulo = document.querySelector("#sobreMim");
    const estilo = document.querySelector("h2");
    const tituloVisibilidade = window.getComputedStyle(titulo).getPropertyValue('visibility');

    if (tituloVisibilidade == "hidden") {
        titulo.style.visibility = "visible"; 
        estilo.style.color = "#8f0b5c57";
        estilo.style.transition = "all 0.6s ease-out";
    } else {
        titulo.style.visibility = "hidden"; 
        estilo.style.color = "#8f0b5c";
        estilo.style.transition = "all 0.4s ease-out";
    }
}

window.alert("Essa pagina é interativa");

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

function trocarConteudo() {
   const imagem = document.getElementById("foto");
   const musica = document.getElementById("musica");
   const nome = document.getElementById("nome");
   const conteudo = document.getElementById("sobreMim");

   if (imagem.src.includes("fotoLayla.jpeg")) {
      imagem.src = "midia/fotoNoopy.jpeg";
      nome.textContent = "Snoopy";
      conteudo.textContent = "Esse é o meu cachorrindo Noopy, nessa foto estavamos voltando de viagem, cabo frio, ele amou a praia, mesmo odiando água.";
      musica.play();
   } else {
      imagem.src = "midia/fotoLayla.jpeg";
      nome.textContent = "Layla Ferreira";
      conteudo.textContent = "Olá, eu sou a Layla Ferreira, tenho 21 anos e tenho TEA nível um de suporte, estudo no CEFET-MG a quase 6 anos, fiz técnico em Informática com início em 2020 e terminei em 2022, e agora estou cursando Engenharia de Computação, estou começando o sétimo período agora, no segundo semestre de 2026. Também fiz um estágio na CI&T. Me identifico muito com a parte de web e visão computacional na área da tecnologia, também amo exatas, gosto de desenhar e colorir, amo a cor rosa(como dá para perceber pelo site rsrs). Como lazer, eu gosto de ir ao cinema, ao parque e ir ao estádio ver o cabuloso jogar, tanto o feminino quanto o masculino. Minha comida favorita é batata frita e a comida que não gosto é de carne e peixe. Moro com meu pai e minha irmã, também temos um cachorrinho, o Snoopy.";
      musica.pause();
   }
}

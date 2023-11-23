document.addEventListener("DOMContentLoaded", function () {
    function criarMoradores(idCasa) {
      const numMoradores = Math.floor(Math.random() * 5) + 1; 
      let local = ["pos_cozinha", "pos_sala", "pos_quarto", "pos_quintal", "pos_varanda"];
      let moradorTipo = ["pessoa 2 parada.png", "pessoa 3 parada.png", "pessoa 4 parada.png"]
      console.log("rodou");
      for (let i = 1; i <= numMoradores; i++) {
        const morador = document.createElement("img");
        morador.className = "morador " + `${local[i - 1]}`;
        morador.src = `..\\Imagens\\${moradorTipo[Math.floor(Math.random() * 3)]}`;
        document.getElementById(`casa${idCasa}`).appendChild(morador);
      }
    }
  
    function moverMoradores() {
      for (let i = 1; i <= 8; i++) {
        let moradores = document.getElementById(`casa${i}`).getElementsByClassName("morador");
        let local = ["pos_cozinha", "pos_sala", "pos_quarto", "pos_quintal", "pos_varanda"];
        console.log("executando");
    
        local = local.sort(() => Math.random() - 0.5);
    
        moradores = Array.from(moradores);
    
        moradores.forEach((morador) => {
          morador.classList.forEach((classe) => {
            if (local.includes(classe)) {
              morador.classList.remove(classe);
            }
          });
    
          let novaPosicao;
          do {
            novaPosicao = local.shift();
          } while (moradores.some((m) => m.classList.contains(novaPosicao)));
    
          morador.classList.add(novaPosicao);
        });
      }
    }
  
    function lidarComInteracao() {
      const locaisPropicios = document.querySelectorAll(".vaso, .vaso2, .vaso3, .pneu, .garrafa, .piscina, .caixa");
    
      locaisPropicios.forEach((local) => {
        local.addEventListener("click", () => {
          let residencia = local.parentNode;
          console.log(residencia);
          let locaisMesmaClasse = residencia.querySelectorAll(`.${local.classList.value}`);
          console.log(local.classList);
          locaisMesmaClasse.forEach((lugar) => {
            console.log(lugar);
            lugar.classList.toggle("off");
          });
        });
      });
    }

    for (let i = 1; i <= 8; i++) {
      criarMoradores(i);
    }
    // setInterval(moverMoradores, 6000);
    lidarComInteracao();
  });
  
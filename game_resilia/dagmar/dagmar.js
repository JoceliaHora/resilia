function faseDagmar(){
    alert("Dagmar precisa escolher entre 3 caminhos diferentes para salvar o Rei, digite o numero que corresponde ao caminho para salva-lo");
    
    let fase = prompt("1. Subterraneo do reino \n2. Beber porção pra ficar invisivel \n3.Portal");

    if (fase == 1){
        alert("GAME OVER! Dagmar usou uma vela para clarear seu caminho, mas havia material inflamável no subterraneo, ela causaou uma explosão e não conseguiu salvar o Rei");
        location.replace("subterraneo.html");
    }
    else if(fase ==2){
        alert ("GAME OVER!! \n Dagmar bebeu uma porção errada e se transformou em pedra")
        location.replace("pedra.html");
    }
    else if (fase==3){
        alert("VOCÊ VENCEU! \n Dagmar abriu um portal e conseguiu chegar até a torre onde o Rei estava preso e o resgatou!");
        location.replace("portal.html");
    }
}

function voltar(){
    location.replace("dagmar.html");
}
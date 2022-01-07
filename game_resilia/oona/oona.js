function faseOnna(){
    alert("Sabendo que Oona precisa escolher entre 3 caminhos diferentes para salvar o Rei, digite o numero que corresponde ao caminho para salva-lo");
    
    let fase = prompt("1. Floresta \n2. Mar \n3.Beco dos Elfos");

    if (fase == 1){
        alert("GAME OVER - Oona não conseguiu vencer batalha com os ogros na floresta");
        location.replace("oona_floresta.html");
    }
    else if(fase ==2){
        let fase1Estagio2 = prompt("Oona encontrou um navio pirata, o que ela deve fazer agora? \n 1.entrar pelo alçapão e navegar escondida. \n2.Fazer amizade com os piratas.")

        location.replace("oona_floresta.html");
        if (fase1Estagio2 ==1){
            alert("Game Over - Oona foi capiturada pelos piratas e jogada no oceano");
            location.replace("oceano.html");
        } else if (fase1Estagio2 ==2){
            alert("VOCÊ VENCEU - Oona se uniu aos piratas tomou um navio e conseguiu salvar o Rei Zog");
            location.replace("piratas.html");
        }
    }
    else if (fase==3){
        alert("GAME OVER - oona foi capturada pelos elfos");
        location.replace("oona_elfos.html");
    }
}

function voltar(){
    location.replace("oona.html");
}



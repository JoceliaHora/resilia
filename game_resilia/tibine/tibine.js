function faseTibine(){
    alert("A princesa Tibine precisa escolher entre 3 caminhos diferentes para salvar o Rei, digite o numero que corresponde ao caminho para salva-lo");
    
    let fase = prompt("1. Pantano \n2. Cidade do futuro \n3.por dentro da terra dos sonhos");

    if (fase == 1){
        alert("VOCÊ VENCEU Tibine conseguiu resgatar seu pai o Rei");
        location.replace("pantano.html");
    }
    else if(fase ==2){
        alert ("GAME OVER!! \n Tibine foi rendida por bandidos do futuro, e não conseguiu salvar seu pai")
        location.replace("futuro.html");
    }
    else if (fase==3){
        alert("GAME OVER \n Tibine foi caputurada pelo feiticeiro que traiu seu pai, e jogada na cadeira");
        location.replace("terradossonhos.html");
    }
}

function voltar(){
    location.replace("tibine.html");
}



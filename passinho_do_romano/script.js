function confirma (){
    var textAreaContet = document.getElementById("id_textarea").value;
    var deslocamento = document.getElementById ("deslocamento_id").value;
    var mensagem = document.getElementById("resultado_id");
    var radio = document.getElementById("codificador").checked; 
    console.log(radio);
    if (radio == true){
        mensagem.innerHTML = codificadorCezar(textAreaContet, parseInt(deslocamento));
    }else{
        mensagem.innerHTML = decodificadorCezar(textAreaContet, parseInt(deslocamento));
    }
}

function codificadorCezar(palavra, deslocamento){// função do ponto de vista de quem desenvolve
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z']
    var resultado = "";
    var contador = 0;
    for(let i = 0; i < letras.length; i++){
       // console.log(i)
        if(letras[i] == palavra[contador]){
            //console.log(letras[i] + " na posição " + i);
            contador++;
            resultado = resultado + letras[i+deslocamento];
            i = -1;
        }
    }
    return resultado;
}
function decodificadorCezar(palavra, deslocamento){
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z']
    var resultado = "";
    var contador = 0;
    for(let i = 26; i < letras.length; i++){
       // console.log(i)
        if(letras[i] == palavra[contador]){
            //console.log(letras[i] + " na posição " + i);
            contador++;
            resultado = resultado + letras[i-deslocamento];
            i = 26;
        }
    }
    return resultado;

}

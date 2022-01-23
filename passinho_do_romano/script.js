function confirma (){
    var selectContent = document.getElementById("id_select").value;
    var textAreaContent = document.getElementById("id_textarea").value;
    var deslocamento = document.getElementById ("deslocamento_id").value;
    var resultadoArea = document.getElementById("resultado_id");
    var radio = document.getElementById("codificador").checked; 
    
    
    if (selectContent == "base64"){
        if(radio == true){
            resultadoArea.innerHTML = codificadorBase64(textAreaContent);
        } else {
            var teste = decodificadorBase64(textAreaContent);
            console.log(teste)
            resultadoArea.innerHTML = teste;
        }
    }else if (selectContent == "cesar"){
        if (radio ==true){
            resultadoArea.innerHTML = codificadorCezar(textAreaContent.toLowerCase(), parseInt(deslocamento));
        } else {
            var teste = decodificadorCezar(textAreaContent.toLowerCase(), parseInt(deslocamento));
            resultadoArea.innerHTML = "";
            resultadoArea.innerHTML = teste;
        }
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
    } console.log(resultado);
    return resultado;

}

function codificadorBase64(palavra){
    var resultado = btoa(palavra)
    return resultado;
}

function decodificadorBase64(palavra){
    var resultado = atob(palavra)
    return resultado;
}

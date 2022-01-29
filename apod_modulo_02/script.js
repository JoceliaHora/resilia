$('.vid').hide();
$('.pic').hide();
$('.descricao_titulo').hide();
function setApod() {
    var data = document.getElementById("data").value
    var link = `https://api.nasa.gov/planetary/apod?api_key=j3gAcBzYdK0oGQdLD6Eaj9SF9Dq6NTIplK9ybvZi&date=${data}`;
    $.ajax({url: link,
        success: function(apod){           
            console.log(apod)
            $('.title').text(apod.title)
            $('.descricao').text(apod.explanation)
            $('.descricao_titulo').show();
            if(apod.media_type === "image"){
                $('.pic').attr('src', apod.url);
                $('.pic').show();
                $('.vid').hide();
            }else{
                $('.vid').attr('src', apod.url);
                $('.vid').show();
                $('.pic').hide();
            }
        }, error: function() {  
            $('.descricao').text("Data inválida, escolha uma data entre 20 de Junho de 1995 até hoje.");
        }
    })
}
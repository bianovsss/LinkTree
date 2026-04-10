$(function(){
 
 
    //ENTRADA
 
    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("#subtitulo");
    var icones = $("svg");
    var fundo = $("body");
    var botao_modoEscuro = $("#modoEscuro");
    var terceiro_titulo = $("h3");

    
    
    
    var modoEscuro = false

    //PROCESSAMENTO

    botao_modoEscuro.click(()=>{
        
        if (modoEscuro == false ){
           
            botoes.css("background-color","#faefec");
            botoes.css("color","#303237");

            fundo.css("background-image","url('https://i.pinimg.com/1200x/56/9c/5b/569c5b8cc6b26a46d842a16cd7ca998f.jpg')")
            titulo.css("color","#944d68");
            subtitulo.css("color" , "#944d68")
            terceiro_titulo.css("color", "#944d68")
            icones.css("fill", "white")
            
            
            

            modoEscuro = true 
            
        }else{

            botoes.css("background-color","#303237");
            botoes.css("color","white");
            fundo.css("background-image","url('https://i.pinimg.com/736x/61/6d/e3/616de3487634a7b0c0db672bcfc476b9.jpg')")
            titulo.css("color","white");
            subtitulo.css("color" , "white")
            terceiro_titulo.css("color", "white")
            icones.css("fill", "white")
            

            modoEscuro = false
        }

    });




    //SAIDA
 
 
 
 
});
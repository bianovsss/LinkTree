$(function(){
 
 
    //ENTRADA
 
    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("#subtitulo");
    var icones = $("svg");
    var fundo = $("body");
    var botao_modoEscuro = $("#modoEscuro");
    
    var modoEscuro = false

    //PROCESSAMENTO

    botao_modoEscuro.click(()=>{
        
        if (modoEscuro == false ){
           
            botoes.css("background-color","white");
            botoes.css("color","black");

            modoEscuro = true 
            
        }else{

            botoes.css("background-color","#303237");
            botoes.css("color","white");

            modoEscuro = false
        }

    });




    //SAIDA
 
 
 
 
});
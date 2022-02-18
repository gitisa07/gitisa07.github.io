//equivale ao window.onload
$(function(){

    // criar sua função para carregar as receitas.
    $.ajax({url: "https://rafaelescalfoni.github.io/desenv_web/receitas.json", success: function(result){
        $(".receitas").html(result);
        var newP = $("<p>");
        newP.text("Está funcionando!");
        $(".receitas").append(newP);

        let titulo = $("<h3>");
        let tituloText = $(document.createTextNode('undefined'));
        titulo.append(tituloText);
        $(".receitas").append(titulo);
        $(".receitas").append(tituloText);



      }});
});


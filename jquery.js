$( document ).ready(function() {
    $("#menu1").change(function() {
        $(".turtles1").css("background-image", "url('" + $(this).val() + "')");
    });
    $("#menu2").change(function() {
        $(".turtles2").css("background-image", "url('" + $(this).val() + "')");
    });
    $("#menuebox").hide();
    $("#but1").hover(function(){
        $('#background').css("background-image", 'url("beach.jpg")')
    });
    $("#but2").hover(function(){
        $('#background').css("background-image", 'url("earth.jpg")')
    });
    $("#but3").hover(function(){
        $('#background').css("background-image", 'url("dojo.jpg")')
    });
    $("#but4").hover(function(){
        $('#background').css("background-image", 'url("forest.jpg")')
    });
    $("#but5").hover(function(){
        $('#background').css("background-image", 'url("matrix.jpg")')
    });
    $("#but6").hover(function(){
        $('#background').css("background-image", 'url("snow.jpg")')
    });
    $( "button" ).click(function(){
        $( "#arenaselection" ).hide();{
                $("#menuebox").toggle()
        } 
    });
  });
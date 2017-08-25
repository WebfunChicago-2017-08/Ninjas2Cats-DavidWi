$(document).ready(function(){
    
    $("img").click(function(){
        var y = $(this).attr("src");
        var x = $(this).attr('data-alt-src');
        $(this).attr("src", x);
        $(this).attr("data-alt-src", y);
    })
})
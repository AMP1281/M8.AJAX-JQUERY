$(document).ready(function(){
    $("#button").click(function(e){
        e.preventDefault();
        $.get("test.json",function(data){
            console.log(data);
        });

    });

});
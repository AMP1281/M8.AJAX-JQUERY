
$(document).ready(function(){
    $("#button").click(function(e){
        e.preventDefault();
        $.getJSON("http://api.icndb.com/jokes/random", function (data) {
            $.each(data,function(index,item){
                $("#texto").html(`
                ${item.joke}
            `);
            });
        });
    });
});


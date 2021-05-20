
$(document).ready(function(){
    $("#button1, #button2").click(function(e){
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


      $(document).ready(function()
      {
         $("#myModal").modal("show");
      });



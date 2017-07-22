// Check off specific todos by clicking on them, and "undo" them by clicking again
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

//Remove the todo from the list by clicking on the span/trash can icon
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
})

// Add a new task to the bottom of the list when you press enter
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //Grab new todo text from input box
    var todoText = $(this).val();
    $(this).val("");
    //Create a new li and add to bottm of ul
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
  }
);

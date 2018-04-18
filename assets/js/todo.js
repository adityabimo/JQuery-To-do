// check list todo
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click to delete
$('ul').on("click","span",function(event){

  $(this).parent().fadeOut(500,function(){
      $(this).remove();
  });
  //fungsi untuk menghentikan trigger ke parent(li,ul,body)
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  //13 adalah kode enter
  if(event.which === 13){
    var todo = $(this).val();
    $(this).val("");

    //create new li
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todo+"</li>");
  }
});

$('.fa-plus').click(function(){
  $("input[type='text']").fadeToggle();
});

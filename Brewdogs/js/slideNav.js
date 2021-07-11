$(function(){
  $("#top").click(function(){
    const cible = $(this).attr("href");
    const position = $(cible).offset().top;
    $("html,body").animate({scrollTop: position}, 1500);
  });
});

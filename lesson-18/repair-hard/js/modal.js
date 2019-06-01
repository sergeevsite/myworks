$(document).ready(function() {
  // Модальное окно
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });

  // Кнопка наверх
  var moveTop = $('#top');

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
      moveTop.addClass('move_none');
    }else{
        moveTop.removeClass('move_none');
    }
  });

  moveTop.on('click', function(){
    $('body,html').animate({scrollTop:0},600);
  });

});

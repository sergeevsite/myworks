/* Скрипт загрузки карты */

var excellence = $('.excellence');
var excellenceTop = excellence.offset().top;
$(window).bind('scroll', function(){
  var windowTop = $(this).scrollTop();
  if (windowTop > excellenceTop) {
    $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A32f5ea56de6cc60007c95e055523096ce3f8aed26291c6ee07ae1927dac57809&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false&amp;"></script>')
    $(window).unbind('scroll');
  }
});

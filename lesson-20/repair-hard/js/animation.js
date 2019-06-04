$(document).ready(function() {
  var fadeInUp = $('.card');
  var fadeInLeft = $('.offer-block');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 1800) {
      fadeInUp.addClass('card_animation');
    }
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      fadeInLeft.addClass('offer-block_animation');
    }
  });
});
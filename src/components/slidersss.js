$(document).ready(function(){
  $('#pres__title-1').on('click', function(){
  $('#pres__title-1').toggleClass('active__button');
  $('.pres__name-title').removeClass('active__button');
  $('pres__title-1').addClass('active__button');
  });

  $('#pres__title-2').on('click', function(){
  $('#pres__title-2').toggleClass('active__button');
  $('.pres__name-title').removeClass('active__button');
  $('pres__title-2').addClass('active__button');
  });

  $('#pres__title-3').on('click', function(){
  $('#pres__title-3').toggleClass('active__button');
  $('.pres__name-title').removeClass('active__button');
  $('pres__title-3').addClass('active__button');
  });
}
);


$(document).ready(function(){
  $('#pres__title-1').on('click', function(){
  $('#pres__title-1').toggleClass('active__button');
  $('.pres__items').removeClass('active');
  $('#slide__1').addClass('active');
  });

  $('#pres__title-2').on('click', function(){
  $('#pres__title-2').toggleClass('active__button');
  $('.pres__items').removeClass('active');
  $('#slide__2').addClass('active');
  });

  $('#pres__title-3').on('click', function(){
  $('#pres__title-3').toggleClass('active__button');
  $('.pres__items').removeClass('active');
  $('#slide__3').addClass('active');
  });
}
);
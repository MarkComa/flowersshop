$(document).ready(function() {

 const flowersSlider = new Swiper('.flowers__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  //активация управления с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  //Настройки адаптации

    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,   
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,   
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});

 const reviewsSlider = new Swiper('.reviews__slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://chelyabinsk.cvety-love.ru/wp-content/uploads/2020/03/buket-nevesty-iz-pionov-i-pionovidnyh-roz.jpg',
      opts : {
        caption : 'First caption',   
      }
    },
    {
      src  : 'https://birgelinlik.com/assets/upload/2018/03/gelinlik-modeli-74a892689445790af778f6f7f0f2c17f.jpg',
      opts : {
        caption : 'Second caption',
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});

// замена классов при нажатии все цветы     
  $("#viewmore").on('click', function(){
    document.querySelectorAll('[data-more]')
    $('[data-more]').toggleClass('d-none')
    console.log(1)
  });

  // функционирование кнопок + и - 
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
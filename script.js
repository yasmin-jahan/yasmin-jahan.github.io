
$(document).ready(function () {
  $(".set > a").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
  let swiper3 = new Swiper(".bannerSwiper", {
    pagination: {
      el: ".swiper-p-1",
    },
  });
  let swiper2 = new Swiper('#swiper-2', {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '#swiper-btn-next-2',
      prevEl: '#swiper-btn-prev-2',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 42,
      },
      
    },
  });


  var swiper = new Swiper(".mySwiper_3", {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-option",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  let btn = $('.button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  var swiper = new Swiper(".mySwiper_4", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".update_Pagination_4",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });















  $(".hamburger").click(function () {
    $(".header_nav").addClass('header_mobile_nav_active');
    $(".black_overlay").show();
    // $(".close-btn").show();
  });

  $(".close-btn").click(function () {
    $(".header_nav").removeClass('header_mobile_nav_active');
    $(".black_overlay").hide();
    //  show black overlay 
  });
  $(".black_overlay").click(function () {
    $(".header_nav").removeClass('header_mobile_nav_active');
    $(".black_overlay").hide();
  });

  function MatchHeight() {
    $('.download_content h3').matchHeight({});
  }
  MatchHeight(); 

});







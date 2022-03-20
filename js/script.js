$('.slider').slick({
    slideToShow:1,
    slideToScroll:1,
    prevArrow:'<span class="prev_arrow"><i class="fa fa-chevron-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-right"></i></span>',
    adaptiveHeight:true,
    asNavFor:'.slider-nav',
    cssEase: 'ease-out',

})

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<span class="prev_arrow"><i class="fa fa-chevron-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-right"></i></span>',
    // asNavFor: '.slider',
    dots:false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth:true,
  });
      
  $.fancybox.defaults.buttons = [ 
    'slideShow',
    'share',
    'thumbs',
    'zoom',
    'fullScreen',
    'close',
    
  ];
  
  $('[data-fancybox="images"]').fancybox({
    baseClass: 'myFancyBox',
    thumbs: {
      autoStart: true,
      axis: 'x'
    }
  })



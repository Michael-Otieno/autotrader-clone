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

$(document).ready(function(){
  $(".accordion- p").click(function(){
    var id = this.id
    $(".accordion-content").each(function(){
      if($("#"+id).next()[0].id!=this.id){
        $(this).slideUp();
      }
    });
    $(this).next().toggle();
  })
})









// // Get the modal
// var modal = document.getElementById("myModal");
// // Get the button that opens the modal
// var btn = document.getElementById("myModalBtn");
// // var container = document.querySelector('.container-fluid-body')
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
//   // container.style.overflow="hidden";

// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



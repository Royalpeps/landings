//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require particles.js.js
//= require app/particlesService.js
//= require_tree ./app


// Please do not put any code in here. Create a new .js file in
// app/assets/javascripts/app instead, and put your code there


$('#productOwner').click(function(){
  $('.form-container').addClass('active')

})

$('.form-container i').on('click', function(){
  $('.form-container').removeClass('active')
})


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  $('.landing').addClass('animated fadeIn')
})

// function update() {
//   if ($(window).scrollTop() > 10) {
//     $('#share_scroll').animate({
//       "bottom": '0px'
//     }, 200);
//     } else {
//       $('#share_scroll').animate({
//         "bottom": '-90px'
//     }, 200);
//   }
// }

// setInterval(update, 500);

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);
  js.id=id;
  js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);
}}

(document, 'script', 'twitter-wjs');





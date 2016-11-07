/**
    Waits until the main animation is finished to execute the sequence of animation
*/

$('.navbar').removeClass('navbar-fixed-top');
$(".circle-animated").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
  //fade in text
  $('.fadeIn-text').fadeIn('fast', function(){
    // execute function after 3000 seconds
    setTimeout(function(){
    	$('#splash-screen').fadeOut('slow', function(){
            $('.navbar').addClass('navbar-fixed-top');
            $('#main-page').fadeIn('slow', function(){
                resetWritable();//Reset the writable text
            });  
      });
    }, 1500);
    
  });
});
var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
  // Has scrolled class on header
  var zvalue = $(document).scrollTop();
  if ( zvalue > 75 )
    $( '.site-header' ).addClass( 'scrolled' );
  else
    $( '.site-header' ).removeClass( 'scrolled' );
}

jQuery(document).ready(function($){

  // ON SCROLL EVENTS
  if (!isTouch){
    $(document).scroll(function() {
      scrollHeader();
    });
  };

  // TOUCH SCROLL
  $(document).on({
    'touchmove': function(e) {
      scrollHeader(); // Replace this with your code.
    }
  });

  // Responsive Slider
  jQuery('#hero-slider').slippry();
});

$(function(){
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    $('#ios-notice').removeClass('hidden');
    $('.parallax-container').height( 350 );
  } else {
    $(window).resize(function(){
      var parallaxHeight = 350;
      $('.parallax-container').height(parallaxHeight);
    }).trigger('resize');
    //getFeed('username','yourkeygoeshere');
  }

  $( '.mobile-menu' ).on( 'click', function(){
    $( '.main-nav' ).toggleClass( 'mobile-open' );
    $( this ).toggleClass( 'closed' );
  });
});

function getFeed(userVal, accountKey){
  var feed = new Instafeed({
    get: 'user',
    userId: userVal,
    clientId: accountKey,
    sortBy: 'most-recent'
  });

  feed.run();
}

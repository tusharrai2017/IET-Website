(function($){
  $(function(){

    $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.parallax').parallax();
    $('.slider').slider();
  }); // end of document ready
})(jQuery); // end of jQuery name space

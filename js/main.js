$(document).ready(function() {
  $('#js-btn-submit').click(function () {
    $('#js-load').show();
    setTimeout(function() {
      $('#js-load').hide();
      $('.alert').show()
        .css( {'opacity': 0, 'top': '0' } )
        .animate( { 'opacity': '1', 'top' : 20 }, 500 );
    },1000);
    setTimeout(function() {
      $('.alert').fadeTo(500, 0).slideUp(500, function() {
        $(this).hide();
      });
    }, 4000);
  });
  $('.alert-close').click(function(e) {
    e.preventDefault();
    var parent = $(this).parent('.alert');
    parent.fadeOut('slow', function() {
      $(this).hide();
    });
  });
});

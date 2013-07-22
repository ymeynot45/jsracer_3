$(document).ready(function() {
  
  $(document).bind('keyup', function(q) {
    console.log('we pressed q');

  });
});


// $('body').bind('keyup click',
//                function(e){
//                    // stuff to do on 'click' and 'keyup' happens in here...
//                    alert('woo! A : ' + e.type + ' happened!');
//                });
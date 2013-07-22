$(document).ready(function() {
  
  $(document).bind('keyup', function(keystroke) {
    if(keystroke.keyCode == 81){
    console.log('we pressed q');} 
    else if(keystroke.keyCode == 80){
    console.log('we pressed p');}
  });
});


// $('body').bind('keyup click',
//                function(e){
//                    // stuff to do on 'click' and 'keyup' happens in here...
//                    alert('woo! A : ' + e.type + ' happened!');
//                });
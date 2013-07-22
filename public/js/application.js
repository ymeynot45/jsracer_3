$(document).ready(function(){
  $(document).bind('keyup', function(keystroke){
    var current_position_1 = $("#player1_strip > .active");
    var current_position_2 = $("#player2_strip > .active");
    if(keystroke.keyCode == 81){
      console.log('we pressed q');
      current_position_1.removeClass('active').next().addClass('active');
    }
    else if(keystroke.keyCode == 80){
      console.log('we pressed p');
      current_position_2.removeClass('active').next().addClass('active');
    }
    if ($('#player1_strip td:last-child').attr('class') == "active"){
      alert("Player 1 wins");
      $(document).unbind('keyup');
    }
    // if either player has .lastchild active alert that player wins
    // disable keyup for q & 
    else if ($('#player2_strip td:last-child').attr('class') == "active"){
      alert("Player 2 wins");
      $(document).unbind('keyup');
    }
  });
});

$(document).ready(function(){
  $(document).bind('keyup', function(keystroke){
    var current_position_1 = $("#player1_strip > .active");
    var current_position_2 = $("#player2_strip > .active");
    var player1_name = $('#player1').text();
    var player2_name = $('#player2').text();
    var url = "/winner";
    if(keystroke.keyCode == 81){
      current_position_1.removeClass('active').next().addClass('active');
    }
    else if(keystroke.keyCode == 80){
      current_position_2.removeClass('active').next().addClass('active');
    }

    if ($('#player1_strip td:last-child').attr('class') == "active"){
      $(document).unbind('keyup');
      $.post(url, {"winner": player1_name}, function(response) {
        var new_body = $(response).filter('#result-container');
        $(document).find('#container').html(new_body);
      });
    }
    else if ($('#player2_strip td:last-child').attr('class') == "active"){
      $(document).unbind('keyup');
      $.post(url, {"winner": player2_name}, function(response) {
        var new_body = $(response).filter('#result-container');
        $(document).find('#container').html(new_body);
      });
    }
  });
});

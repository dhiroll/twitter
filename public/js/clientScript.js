$(document).ready(function () {
  $('.blocInputTweet').hide();

    $('#tweet').click(function () {
      var tweet = $("#twitterTextarea").val();
      socket.emit('send_message', { message: tweet });
    });

    socket.on('new_message', function (data) {
      $('.messages').append(
        '<li>' + data.tweet + '</li>'
      )
    });

  });

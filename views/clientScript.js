
      var socket = null;

      $(document).ready(function() {
        initClicks();
      });

      $("#shortTweetbox").click(function(){
        console.log("clicked");
        $(".blocInputTweet").show(),
        $(".blocInputTweet-shorten").hide();
    });
      function initClicks() {
        $('#tweet').click(function() {
          initConnection($('#twitterTextarea').val());
          initListeners();
        });
      }
      $('#modalTwitter').modal();

      
    

      function initConnection(name) {
        // (2) la connexion se fait qu'une seule fois par client
        // Une connexion `socket` est maintenue ouverte entre le serveur et le client
        socket = io.connect('http://localhost:3000');

        // (4) le client déclenche l'évènement `identification` et transmet son `name`
        socket.emit('identification', {name: name});
      }

      function initListeners() {
        // (5) la création de l'écouteur `new_connection` ne doit se faire qu'une seule fois
        socket.on('new_connection', function(data) {
          console.log(data.name + ' has joined');
        });

        // d'autres écouteurs peuvent être créés ici `socket.on(...);`
      }
   
  
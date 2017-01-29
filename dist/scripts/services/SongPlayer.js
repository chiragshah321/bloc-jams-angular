(function(){
    function SongPlayer() {
        var SongPlayer = {};
        
        SongPlayer.play = function(song) {
          var currentBuzzObject = new buzz.sound(song.audioUrl, {
              formats: ['mp3'],
              preload: true
          }); 
            
            currentBuzzObject.play(); /*global buzz*/
        };
        
        return SongPlayer;
    }
    
    angular /*global angular*/
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
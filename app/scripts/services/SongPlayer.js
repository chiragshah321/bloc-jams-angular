(function(){
    function SongPlayer() {
        var SongPlayer = {};
        
        var currentSong = null;
        
        /**
         * @desc Buzz oject audio files
         * @type {Object}
         */
        var currentBuzzObject = null;
        
        /**
         *@function setSong
         *@desc Stop currently playing song and loads new audio files as currentBuzzObject
         *@param {Object} song
         */
        
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
 
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            currentSong = song;
        };
        
        SongPlayer.play = function(song) {
        if(currentSong !== song) {
            setSong(song);
            currentBuzzObject.play();
            song.playing = true;
        } else if (currentSong === song) {
            if (currentBuzzObject.isPaused()){
                currentBuzzObject.play();
            }
        }
           
    }; /*global buzz*/
        
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
    };
        
        return SongPlayer;
  }
    
    angular /*global angular*/
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
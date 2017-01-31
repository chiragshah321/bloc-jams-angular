(function(){
    function SongPlayer() {
        var SongPlayer = {};
        
        
         /**
         * @desc Song object 
         * @type {Object}
         */
        var currentSong = null;
        
        /**
         * @desc Buzz object audio files
         * @type {Object}
         */
        var currentBuzzObject = null;
        
        /**
        *@function playSong
        *@desc Plays the currenBuzzObject as the currentSong object
        *@param 
        */
         var playSong = function() {
              currentBuzzObject.play();
              song.playing = true; /*global song*/
             };
             
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
            playSong();
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
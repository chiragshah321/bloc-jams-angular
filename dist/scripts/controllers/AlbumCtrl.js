 (function() {
     function AlbumCtrl() {
         this.albumData = {};
         this.albumData.push(angular.copy(albumPicasso)); /*global albumPicasso*/
     }
 
     angular /*global angular*/
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
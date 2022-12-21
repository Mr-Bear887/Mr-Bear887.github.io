function Preloader() {
  var view = View.getInstance();

  var loadingPercentage;

  var imageSources;
  var soundSources;

  var that = this;

  this.init = function() {
    loadingPercentage = view.create('div');

    view.addClass(loadingPercentage, 'loading-percentage');
    view.setHTML(loadingPercentage, '0%');
    view.appendToBody(loadingPercentage);

    imageSources = {
      1: 'back-btn.png',
      2: 'bg.png',
      3: 'bullet.png',
      4: 'clear-map-btn.png',
      5: 'coin.png',
      6: 'delete-all-btn.png',
      7: 'editor-btn.png',
      8: 'elements.png',
      9: 'enemies.png',
      10: 'flag-pole.png',
      11: 'flag.png',
      12: 'start-screen.png',
      13: 'grid-large-btn.png',
      14: 'grid-medium-btn.png',
      15: 'grid-small-btn.png',
      16: 'grid.png',
      17: 'lvl-size.png',
      18: 'mario-head.png',
      19: 'mario-sprites.png',
      20: 'powerups.png',
      21: 'save-map-btn.png',
      22: 'saved-btn.png',
      23: 'slider-left.png',
      24: 'slider-right.png',
      25: 'start-btn.png'
    };

    that.loadImages(imageSources);
  };

  this.loadImages = function(imageSources) {
    var images = {};
    var loadedImages = 0;
    var totalImages = 0;

    for (var key in imageSources) {
      totalImages++;
    }

    for (var key in imageSources) {
      images[key] = new Image();
      images[key].src = imageSources[key];

      images[key].onload = function() {
        loadedImages++;
        percentage = Math.floor(loadedImages * 100 / totalImages);

        view.setHTML(loadingPercentage, percentage + '%'); //displaying percentage

        if (loadedImages >= totalImages) {
          view.removeFromBody(loadingPercentage);
          that.initMainApp();
        }
      };
    }
  };

  this.initMainApp = function() {
    var marioMakerInstance = MarioMaker.getInstance();
    marioMakerInstance.init();
  };
}

window.onload = function() {
  var preloader = new Preloader();
  preloader.init();
};
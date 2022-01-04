import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(670, 340, 'logo');

    // update progress bar
    this.load.on('progress', function (value) {
      //TODO
    });

    // update file progress text
    this.load.on('fileprogress', function (file) {
      //TODO
    });

    // remove progress bar when complete
    this.load.on('complete', function () {
    }.bind(this));
    this.loadGameAssets();
    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);

  }

  loadGameAssets() {
    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('playButton', 'assets/ui/play.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('menuButon', 'assets/ui/Home.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['assets/sounds/ambient.mp3']);
  }

  ready() {
    this.scene.start('Title');
    this.readyCount++;
    if (this.sys.game.globals.globalConfig.root.common.isHomeScreenAvailable) {
      console.log("Madhuri");
    }
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};

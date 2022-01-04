import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  create () {
    //Bg 
    var bg = this.add.image(670, 340, 'bg');
    bg.setScale(0.6);
    // Game
    this.gameButton = new Button(this, config.width / 2 - 290, config.height / 2 - 20, 'playButton', 'playButton', '', 'Game');
    this.gameButton.setScale(0.6);

    // Options
    this.optionsButton = new Button(this, 1205, 60, 'blueButton2', 'blueButton2', '', 'Options');
    this.optionsButton.setScale(0.6);

    // Credits
    this.creditsButton = new Button(this, 210, 60, 'blueButton1', 'blueButton1', '', 'Credits');
    this.creditsButton.setScale(0.6);


    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
    //  gameText,
      gameButton
    );
  }
};

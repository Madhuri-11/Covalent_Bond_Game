import 'phaser';
import config from '../Config/config';

export default class ResultsScene extends Phaser.Scene {
  constructor () {
    super('Results');
  }

  create () {
    this.creditsText = this.add.text(0, 110, 'Completed', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Madhuri Anandani', { fontSize: '26px', fill: '#fff' });
    this.madeByText01 = this.add.text(0, 100, 'Play and Learn Covalent Bond', { fontSize: '26px', fill: '#fff' });
    this.madeByText02 = this.add.text(0, 200, ' ', { fontSize: '22px', fill: '#fff' });
    this.madeByText03 = this.add.text(0, 300, ' ', { fontSize: '22px', fill: '#fff' });
    
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    this.madeByText.setY(1500);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: 0,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: 400,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};
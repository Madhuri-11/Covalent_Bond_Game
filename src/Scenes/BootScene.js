import 'phaser';


export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/ui/Loading_Logo.png');
    this.load.image('bg', 'assets/ui/Splash_f1.png');

  }

  create () {
    this.scene.start('Preloader');
  }
};
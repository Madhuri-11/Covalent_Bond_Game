import 'phaser';
import config from './Config/config';
import SettingsScene from './Scenes/SettingsScene';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
import GameConfigGlobaData from "../src/Config/gameConfig.json";


class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    const globalConfig = GameConfigGlobaData;
    this.globals = { model, globalConfig , bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Home', SettingsScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
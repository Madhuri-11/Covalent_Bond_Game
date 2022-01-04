import 'phaser';
import Button from '../Objects/Button';


export default class SettingsScene extends Phaser.Scene {
    constructor() {
        super('Home');
    }

    preload() {
        // load images
        this.load.image('popupBg', 'assets/Popup/block1.png');
        this.load.image('save', 'assets/Popup/Save.png');

        this.timedEvent = this.time.delayedCall(5000, this.ready, [], this);

    }

    create() {
        this.model = this.sys.game.globals.model;
        this.bg = this.add.image(670, 340, 'popupBg');
        this.bg.setScale(0.6);
        this.text = this.add.text(570, 100, 'Settings', { fontSize: 40 });
        this.musicButton = this.add.image(480, 250, 'checkedBox');
        this.musicText = this.add.text(650, 240, 'Music Enabled', { fontSize: 24 });

        this.soundButton = this.add.image(480, 300, 'checkedBox');
        this.soundText = this.add.text(650, 290, 'Sound Enabled', { fontSize: 24 });

        this.musicButton.setInteractive();
        this.soundButton.setInteractive();

        this.musicButton.on('pointerdown', function () {
            this.model.musicOn = !this.model.musicOn;
            this.updateAudio();
        }.bind(this));

        this.soundButton.on('pointerdown', function () {
            this.model.soundOn = !this.model.soundOn;
            this.updateAudio();
        }.bind(this));

        this.menuButton = new Button(this, 660, 450, 'save', 'save', '', 'Game');
        this.menuButton.setScale(0.6);

        this.updateAudio();
    }

    updateAudio() {
        if (this.model.musicOn === false) {
            this.musicButton.setTexture('box');
            this.sys.game.globals.bgMusic.stop();
            this.model.bgMusicPlaying = false;
        } else {
            this.musicButton.setTexture('checkedBox');
            if (this.model.bgMusicPlaying === false) {
                this.sys.game.globals.bgMusic.play();
                this.model.bgMusicPlaying = true;
            }
        }

        if (this.model.soundOn === false) {
            this.soundButton.setTexture('box');
        } else {
            this.soundButton.setTexture('checkedBox');
        }
    }

    ready() {
        this.scene.start('Game');
    }
};



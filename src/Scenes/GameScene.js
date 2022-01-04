import 'phaser';
import Button from '../Objects/Button';

var O2_Check, CH4_Check, NH3_Check, CH4, NH3, O2, clonesArray, winFont, tryAgain, win;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    CH4 = ["Carbon", "Hydrogen", "Hydrogen", "Hydrogen", "Hydrogen"];
    O2 = ["Oxygen", "Oxygen"];
    NH3 = ["Hydrogen", "Hydrogen", "Hydrogen", "Nitrogen"];
    CH4_Check = [];
    O2_Check = [];
    NH3_Check = [];
    clonesArray = [];

  }

  preload() {
    // load images
    this.load.image('background01', 'assets/ui/background.png');
    this.load.image('compLogo', 'assets/ui/logo.png');
    this.load.image('ScoreBoard', 'assets/ui/Score.png');
    this.load.image('TimeBoard', 'assets/ui/Time.png');
    this.load.image('Misc', 'assets/ui/Music.png');
    this.load.image('FullScreen', 'assets/ui/Full_Screen.png');
    this.load.image('Help', 'assets/ui/Help.png');
    this.load.image('HomeIcon', 'assets/ui/Home.png');


    this.load.image('reset', './assets/ui/reset.png');
    this.load.image('carbon', 'assets/ui/1c.png');
    this.load.image('hydrogen', 'assets/ui/1h.png');
    this.load.image('nitrogen', 'assets/ui/1N.png');
    this.load.image('oxygen', 'assets/ui/1o.png');
    this.load.image('mole', 'assets/ui/blank_circle.png');
    this.load.bitmapFont('winFont', 'assets/fonts/Font-outro-export.png', 'assets/fonts/Font-outro-export.xml');
    this.timedEvent = this.time.delayedCall(20000, this.clear, [], this);


  }

  create() {
    var background01 = this.add.image(670, 330, 'background01');
    background01.setScale(0.6);
    this.createDropZone("experiment", 500, 500);
    this.compLogo = this.add.image(132, 47, 'compLogo');
    this.compLogo.setScale(0.6);
    this.ScoreBoard = this.add.image(327, 50, 'ScoreBoard');
    this.ScoreBoard.setScale(0.6);
    this.TimeBoard = this.add.image(478, 50, 'TimeBoard');
    this.TimeBoard.setScale(0.6);

    this.settingsButton = new Button(this, 210, 50, 'blueButton1', 'blueButton1', '', 'Home');
    this.settingsButton.setScale(0.6);
    this.soundButton = new Button(this, 590, 50, 'blueButton2', 'blueButton2', '', 'Home');
    this.soundButton.setScale(0.6);

    this.Misc = new Button(this, 972, 50, 'Misc', 'Misc', '', 'Home');
    this.Misc.setScale(0.6);

    this.FullScreen = new Button(this, 1203, 50, 'FullScreen', 'FullScreen', 'Press F', '');
    this.FullScreen.setScale(0.6);

    this.Help = new Button(this, 1049, 50, 'Help', 'Help', '', 'Home');
    this.Help.setScale(0.6);

    this.Home = new Button(this, 1126, 50, 'HomeIcon', 'HomeIcon', '', 'Home');
    this.Home.setScale(0.6);

    for (var i = 0; i < 99; i++) {
      this.createMolecules(250, 205, 'Carbon', 'carbon');
      this.createMolecules(510, 205, 'Hydrogen', 'hydrogen');
      this.createMolecules(380, 205, 'Oxygen', 'oxygen');
      this.createMolecules(630, 205, 'Nitrogen', 'nitrogen');
    }

    var FKey = this.input.keyboard.addKey('F');

    FKey.on('down', function () {

      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
      }
      else {
        this.scale.startFullscreen();
      }
    }, this);
    this.input.on('drop', function (pointer, gameObject, dropZone) {
      if (dropZone.checkObj == "var2") {
        O2_Check.push(gameObject.name);
        O2_Check.sort();
        if (O2_Check.length == 2) {
          if (JSON.stringify(O2) == JSON.stringify(O2_Check)) {
            // winFont.visible = true;
            // win = true;
            // tryAgain.visible = false;
          }
          else {
            console.log("Wrong");
            // tryAgain.visible = true;
            // win = true;
            // winFont.visible = false;

          }
        }
      }
      if (dropZone.checkObj == "var4") {
        NH3_Check.push(gameObject.name);
        NH3_Check.sort();
        if (NH3_Check.length == 4) {
          if (JSON.stringify(NH3) == JSON.stringify(NH3_Check)) {
            //  alert("NH3 Matched");
            winFont.visible = true;
            win = true;
            tryAgain.visible = false;
          }
          else {
            console.log("Wrong");
            tryAgain.visible = true;
            win = true;
            winFont.visible = false;

          }
        }
      }
      if (dropZone.checkObj == "var5") {
        CH4_Check.push(gameObject.name);
        CH4_Check.sort();
        if (CH4_Check.length == 5) {
          if (JSON.stringify(CH4) == JSON.stringify(CH4_Check)) {
            //  alert("CH4 Matched");
            winFont.visible = true;
            win = true;
            tryAgain.visible = false;

          }
          else {
            console.log("Wrong");
            tryAgain.visible = true;
            win = true;
            winFont.visible = false;

          }
        }
      }
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;
      clonesArray.push(gameObject);
      gameObject.input.enabled = false;

    });

    //CH4 DropZone
    this.createZone("H1_CH4", 195, 555, 32, "Hydrogen", "var5");
    this.createZone("H2_CH4", 243, 505, 32, "Hydrogen", "var5");
    this.createZone("H3_CH4", 243, 555, 32, "Hydrogen", "var5");
    this.createZone("H4_CH4", 243, 600, 32, "Hydrogen", "var5");//done
    this.createZone("C1_CH4", 290, 555, 32, "Carbon", "var5");

    //O2 DropZone
    this.createZone("O1_O2", 643, 552, 32, "Oxygen", "var2");
    this.createZone("O2_O2", 699, 552, 32, "Oxygen", "var2");

    //NH3 DropZone
    this.createZone("H1_NH3", 1042, 522, 32, "Hydrogen", "var4");
    this.createZone("H2_NH3", 1042, 580, 32, "Hydrogen", "var4");
    this.createZone("H3_NH3", 1141, 553, 32, "Hydrogen", "var4");
    this.createZone("N1_NH3", 1082, 552, 32, "Nitrogen", "var4");

  }

  update() {
    this.clearFonts();
  }


  clearFonts() {
    if (win) {
      this.timedEvent = this.time.delayedCall(2000, this.clearWins, [], this);
    }
    else {
      clearTimeout();
    }
  }

  OnResetButtonClick() {
    O2_Check.length = 0;
    NH3_Check.length = 0;
    CH4_Check.length = 0;
    winFont.visible = false;
    win = false;
    tryAgain.visible = false;

    for (var i = 0; i < clonesArray.length; i++) {
      clonesArray[i].visible = false;
    }

  }


  createZone(zoname, x, y, radius, matchElement, checkObj) {
    var zonename = this.add.zone(x, y).setCircleDropZone(radius);
    zonename.name = zoname;
    zonename.checkObj = checkObj;
    this.graphics = this.add.graphics();
    this.graphics.matchElement = matchElement;
    this.graphics.checkObj = checkObj;
    this.graphics.lineStyle(2, 0xffff00);
    this.graphics.strokeCircle(zonename.x, zonename.y, zonename.input.hitArea.radius);
  }

  createDropZone(zoname, x, y) {
    var zonname = this.add.zone(300, 300, 300, 300).setRectangleDropZone(500, 350);
    zonname.name = zoname;
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(2, 0xffff00);
    this.graphics.strokeRect(730, 88, 500, 350);
  }

  createMolecules(x, y, molename, key) {
    var moleculename = this.add.sprite(x, y, key).setInteractive();
    moleculename.name = molename;
    moleculename.setScale(0.6, 0.6);
    this.input.setDraggable(moleculename);
    this.input.makePixelPerfect(moleculename);
    this.input.on('dragstart', function (pointer, gameObject) {

      gameObject.setScale(0.6, 0.6);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {

      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

    });
  }

  clear() {
    // this.scene.start('Results');
  }

  clearWins() {
    if (winFont.visible || tryAgain.visible) {
      winFont.visible = false;
      win = false;
      tryAgain.visible = false;
    }

  }

};


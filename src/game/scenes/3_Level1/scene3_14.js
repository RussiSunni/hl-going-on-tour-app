import WideButton from '../Custom_Classes/WideButton.js'
import BackButton from '../Custom_Classes/BackButton.js'
import SaveProgress from '../Custom_Classes/SaveProgress.js'

export default class Scene3_14 extends Phaser.Scene {
    constructor() {
        super('Scene3_14');
    }

    init(data) {
        this.music = data.music;
    }

    preload() {
        // Plugin.
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        // Module music.
        this.load.audio('theme-module3', [
            'assets/Audio/Music/3_Level1/theme-module3.mp3',
        ]);
        // Audio. 
        this.load.audio("next-button", ["assets/Audio/SFX/General/next-button.mp3"]);
        this.load.audio("rock2", ["assets/Audio/Music/3_Level1/genre-quiz/rock2.mp3"]);

        // Sprites.
        this.load.image('notes-bg', 'assets/Images/3_Level1/notes-bg.png');
        this.load.image('play-btn', 'assets/Images/3_Level1/genre-quiz/play-btn-round.png');
        this.load.image('stars', 'assets/Images/3_Level1/stars.png');
        this.load.image('next-arrow', 'assets/Images/General/next-arrow.png');
    }

    create() {
        // Music.
        // Check if music is playing.
        if (typeof this.music == 'undefined') {
            this.music = this.sound.add('theme-module3');
            this.music.setVolume(0.1);
            this.music.loop = true
        }
        else {
            this.music.pause();
        }

        var isCorrect = false

        // Music tracks
        this.rock2 = this.sound.add("rock2");

        // BG.
        this.cameras.main.setBackgroundColor("#959fe4");
        var bg = this.add.sprite(0, 0, 'notes-bg').setOrigin(0);
        bg.alpha = 0.5

        // playBtn.
        var playBtn = this.add.sprite(0, 0, 'play-btn').setOrigin(0.5);
        playBtn.x = 1920 - 100
        playBtn.y = 100
        playBtn.setScale(0.3)
        playBtn.alpha = 1
        playBtn.setInteractive({ cursor: 'pointer' })
        playBtn.on('pointerdown', function () {
            this.rock2.play()
        }, this);

        // Stars.
        var stars = this.add.sprite(400, 100, 'stars').setOrigin(0.5);
        stars.setScale(0.6)

        // Header.
        var header = this.add.graphics();
        header.fillStyle(0xffffff, 1);
        header.fillRoundedRect(260, 320, 1380, 140, 72);
        var headerText = this.add.rexBBCodeText(960, 390,
            `[b]Press the Play button above[/b]
and select to which music genre this song belongs to.`,
            { fontFamily: "Arial", fontSize: "84px", fill: "#000000", align: "center" });
        headerText.setOrigin(0.5).setScale(0.5)
        headerText.alpha = 1

        // Button 1.
        var btn1Graphic = this.add.graphics();
        btn1Graphic.fillStyle(0xffffff, 1);
        btn1Graphic.fillRoundedRect(0, 0, 690, 120, 8);
        var btn1Text = this.add.text(100, 60, "A. Rock", { fontFamily: "Arial", fontSize: "72px", fill: "#000000" });
        btn1Text.setOrigin(0.5).setScale(0.5)
        var btn1 = this.add.container(260, 480, [btn1Graphic, btn1Text]);
        btn1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 690, 120), Phaser.Geom.Rectangle.Contains);
        btn1.on('pointerover', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "pointer";
        });
        btn1.on('pointerout', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "default";
        });
        btn1.on('pointerdown', function () {
            isCorrect = true
        }, this);
        btn1Graphic.alpha = 1

        // Button 2.
        var btn2Graphic = this.add.graphics();
        btn2Graphic.fillStyle(0xffffff, 1);
        btn2Graphic.fillRoundedRect(0, 0, 690, 120, 8);
        var btn2Text = this.add.text(100, 60, "B. Jazz", { fontFamily: "Arial", fontSize: "72px", fill: "#000000" });
        btn2Text.setOrigin(0.5).setScale(0.5)
        var btn2 = this.add.container(960, 480, [btn2Graphic, btn2Text]);
        btn2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 690, 120), Phaser.Geom.Rectangle.Contains);
        btn2.on('pointerover', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "pointer";
        });
        btn2.on('pointerout', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "default";
        });
        btn2.on('pointerdown', function () {
            isCorrect = false
        }, this);
        btn2Graphic.alpha = 1

        // Button 3.
        var btn3Graphic = this.add.graphics();
        btn3Graphic.fillStyle(0xffffff, 1);
        btn3Graphic.fillRoundedRect(0, 0, 690, 120, 8);
        var btn3Text = this.add.text(100, 60, "C. Country", { fontFamily: "Arial", fontSize: "72px", fill: "#000000" });
        btn3Text.setOrigin(0.5).setScale(0.5)
        var btn3 = this.add.container(260, 620, [btn3Graphic, btn3Text]);
        btn3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 690, 120), Phaser.Geom.Rectangle.Contains);
        btn3.on('pointerover', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "pointer";
        });
        btn3.on('pointerout', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "default";
        });
        btn3.on('pointerdown', function () {
            isCorrect = false
        }, this);
        btn3Graphic.alpha = 1

        // Button 4.
        var btn4Graphic = this.add.graphics();
        btn4Graphic.fillStyle(0xffffff, 1);
        btn4Graphic.fillRoundedRect(0, 0, 690, 120, 8);
        var btn4Text = this.add.text(100, 60, "D. Rap", { fontFamily: "Arial", fontSize: "72px", fill: "#000000" });
        btn4Text.setOrigin(0.5).setScale(0.5)
        var btn4 = this.add.container(960, 620, [btn4Graphic, btn4Text]);
        btn4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 690, 120), Phaser.Geom.Rectangle.Contains);
        btn4.on('pointerover', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "pointer";
        });
        btn4.on('pointerout', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "default";
        });
        btn4.on('pointerdown', function () {
            isCorrect = false
        }, this);
        btn4Graphic.alpha = 1

        // Submit button.
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const submitBtn = new WideButton(this, 0, 0, 'Submit', this.nextBtnAudio);
        submitBtn.on('pointerdown', function () {
            this.rock2.stop()
            if (isCorrect) {
                this.scene.start("Scene3_14_correct", { music: this.music });
            }
            else {
                this.scene.start("Scene3_14_incorrect", { music: this.music });
            }
        }, this);
        submitBtn.x = 960 - 130
        submitBtn.y = 1080 - 70
        submitBtn.alpha = 1

        // Back button.
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const backBtn = new BackButton(this, -60, 540, 'next-arrow', this.nextBtnAudio);
        backBtn.on('pointerdown', function () {
            this.scene.start("Scene3_13");
        }, this);
        backBtn.y = backBtn.y - 40

        // Save user progress.
        const save = new SaveProgress(this)
    }
}
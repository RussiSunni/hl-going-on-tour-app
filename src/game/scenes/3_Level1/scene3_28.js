import SideButton from '../Custom_Classes/SideButton.js'
import BackButton from '../Custom_Classes/BackButton.js'
import SaveProgress from '../Custom_Classes/SaveProgress.js'

export default class Scene3_28 extends Phaser.Scene {
    constructor() {
        super('Scene3_28');
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
        // Sprites.
        this.load.image('next-arrow', 'assets/Images/General/next-arrow.png');
        this.load.image('BG3-23', 'assets/Images/3_Level1/myth-fact-bg.jpg');
        // Video.
        this.load.video('myth-vid', 'assets/Videos/3_Level1/myth-vid.mp4');
    }

    create() {
        // Music.
        // Check if music is playing.
        if (typeof this.music == 'undefined') {
            this.music = this.sound.add('theme-module3');
            this.music.play();
            this.music.setVolume(0.1);
            this.music.loop = true
        }

        // BG.
        var bg = this.add.sprite(0, 0, 'BG3-23').setOrigin(0.0)

        // Video.
        const vid = this.add.video(0, 0, 'myth-vid');
        vid.setOrigin(0)

        // Main button ---
        // Graphic.
        const btnGraphic = this.add.graphics();
        btnGraphic.fillStyle(0xffffff, 1)
            .fillRoundedRect(560, 350, 800, 600, 16)
            .lineStyle(6, 0x000000, 1)
            .strokeRoundedRect(560, 350, 800, 600, 16)
        // Text.
        this.btnText = this.add.rexBBCodeText(960, 650,
            `[b]Myth or Fact?[/b]

Vaping just uses
flavored water,
so it's not dangerous.`,
            { fontFamily: "Arial", fontSize: "108px", color: '#000000', align: 'center' }).setOrigin(0.5);
        // Dealing with text quality.
        this.btnText.scale = 0.4

        btnGraphic.setInteractive(new Phaser.Geom.Rectangle(560, 350, 800, 600), Phaser.Geom.Rectangle.Contains)
        btnGraphic.on('pointerover', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "pointer";
        });
        btnGraphic.on('pointerout', function () {
            // Change mouse cursor.
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.cursor = "default";
        });
        var isAnswer = false;
        btnGraphic.on('pointerdown', () => {
            if (!isAnswer) {
                vid.alpha = 1
                vid.play();

                this.btnText.setText(`[b]Myth[/b]

There isn't even water in vaping
cartridges. They are filled with liquids
that contain chemicals, nicotine and
flavorings.
51% of teens think they are only
vaping "flavored water".
            `)
            }
            else {
                vid.alpha = 0
                this.btnText.setText(`[b]Myth or Fact?[/b]

Vaping just uses
flavored water,
so it's not dangerous.`)
            }

            isAnswer = !isAnswer
        });

        // Next button.     
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const nextBtn = new SideButton(this, 1920 - 90, 540, 'next-arrow', this.nextBtnAudio);
        nextBtn.on('pointerdown', function () {
            this.scene.start("Scene3_29", { music: this.music });
        }, this);
        nextBtn.y = nextBtn.y - 40

        // Back button.
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const backBtn = new BackButton(this, -60, 540, 'next-arrow', this.nextBtnAudio);
        backBtn.on('pointerdown', function () {
            this.scene.start("Scene3_27");
        }, this);
        backBtn.y = backBtn.y - 40

        // Save user progress.
        const save = new SaveProgress(this)
    }
}
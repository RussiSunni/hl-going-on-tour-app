import SideButton from '../Custom_Classes/SideButton.js'
import BackButton from '../Custom_Classes/BackButton.js'
import SaveProgress from '../Custom_Classes/SaveProgress.js'

export default class Scene4_4 extends Phaser.Scene {
    constructor() {
        super('Scene4_4');
    }
    preload() {
        // Plugin.
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        // Audio.
        this.load.audio("next-button", ["assets/Audio/SFX/General/next-button.mp3"]);
        // Sprites.        
        this.load.image('wood-bg-4-4', 'assets/Images/4_Level2/stamps/wood-bg.jpg');
        this.load.image('next-arrow', 'assets/Images/General/next-arrow.png');
        this.load.image('x-mark', 'assets/Images/General/x-mark.png');
        this.load.image('tick', 'assets/Images/General/tick.png');
        this.load.image('text-bg-4-4', 'assets/Images/General/text-card.png');
        this.load.image('envelope', 'assets/Images/4_Level2/stamps/envelope.png');
        this.load.image('stamp1', 'assets/Images/4_Level2/stamps/stamp1.png');
        this.load.image('stamp2', 'assets/Images/4_Level2/stamps/stamp2.png');
        this.load.image('stamp3', 'assets/Images/4_Level2/stamps/stamp3.png');
    }

    create() {
        // BG.
        var bg = this.add.sprite(0, 0, 'wood-bg-4-4').setOrigin(0)
        var envelope = this.add.sprite(400, 300, 'envelope').setOrigin(0)
        envelope.scale = 1.1

        // Stamps.
        // Stamp 1.
        var stamp1 = this.add.sprite(900, 360, 'stamp1').setOrigin(0)
        stamp1.angle = 1
        stamp1.setInteractive({
            useHandCursor: true
        });
        stamp1.on('pointerdown', () => {
            localStorage.setItem("stamp1", "true");
            this.scene.start("Scene4_4A");
        });

        var stamp2 = this.add.sprite(1140, 360, 'stamp2').setOrigin(0)
        stamp2.angle = -3
        stamp2.setInteractive({
            useHandCursor: true
        });
        stamp2.on('pointerdown', () => {
            localStorage.setItem("stamp2", "true");
            this.scene.start("Scene4_4B");
        });

        var stamp3 = this.add.sprite(1320, 340, 'stamp3').setOrigin(0)
        stamp3.setInteractive({
            useHandCursor: true
        });
        stamp3.on('pointerdown', () => {
            localStorage.setItem("stamp3", "true");
            this.scene.start("Scene4_4C");
        });

        const circle1 = this.add.circle(930, 380, 30, 0x01ac42);
        var tick1 = this.add.sprite(930, 380, 'tick').setOrigin(0.5)

        if (localStorage.getItem("stamp1") != "true") {
            circle1.setAlpha(0)
            tick1.setAlpha(0)
        }

        const circle2 = this.add.circle(1300, 510, 30, 0x01ac42)
        var tick2 = this.add.sprite(1300, 510, 'tick').setOrigin(0.5)

        if (localStorage.getItem("stamp2") != "true") {
            circle2.setAlpha(0)
            tick2.setAlpha(0)
        }

        const circle3 = this.add.circle(1480, 400, 30, 0x01ac42)
        var tick3 = this.add.sprite(1480, 400, 'tick').setOrigin(0.5)

        if (localStorage.getItem("stamp3") != "true") {
            circle3.setAlpha(0)
            tick3.setAlpha(0)
        }

        // Title.
        this.textBg = this.add.graphics();
        this.textBg.fillStyle(0xFFFFFF, 1);
        this.textBg.fillRoundedRect(-30, 0, 600, 150, 32);
        this.instructionText = this.add.rexBBCodeText(55, 75,
            `Facts about New York City`,
            { fontFamily: "Arial", fontSize: "72px", color: '#000000' }).setOrigin(0.0, 0.5);
        // Dealing with text quality.
        this.instructionText.scale = 0.5
        this.instructionTextCtnr = this.add.container(0, 55, [this.textBg, this.instructionText]);


        // Text background.
        var textCard = this.add.sprite(1360, 140, 'text-bg-4-4').setOrigin(0.5)
        //Text.
        this.text = this.add.rexBBCodeText(1360, 140,
            `New York City is famous for many
things. [b]Click[/b] on the 3 stamps to
learn more.`,
            { fontFamily: "Arial", fontSize: "84px", color: '#000000', align: 'center' }).setOrigin(0.5);
        // Dealing with text quality.
        this.text.scale = 0.5

        // Next button.
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const nextBtn = new SideButton(this, 1920 - 90, 540, 'next-arrow', this.nextBtnAudio);
        nextBtn.on('pointerdown', function () {
            this.scene.start("Scene4_5");
        }, this);
        nextBtn.y = nextBtn.y - 40

        // Back button.
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const backBtn = new BackButton(this, -60, 540, 'next-arrow', this.nextBtnAudio);
        backBtn.on('pointerdown', function () {
            this.scene.start("Scene4_3");
        }, this);
        backBtn.y = backBtn.y - 40

        // Save user progress.
        const save = new SaveProgress(this)
    }
}
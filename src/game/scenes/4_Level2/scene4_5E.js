import CloseButton from '../Custom_Classes/CloseButton.js'

export default class Scene4_5E extends Phaser.Scene {
    constructor() {
        super('Scene4_5E');
    }
    preload() {
        // Plugin.
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        // Audio.
        this.load.audio("next-button", ["assets/Audio/SFX/General/next-button.mp3"]);
        // Sprites.        
        this.load.image('x-mark', 'assets/Images/General/x-mark.png');
        this.load.image('bg-blurred-4-5', 'assets/Images/4_Level2/phone/bg-blurred.jpg');
        this.load.image('empire-state', 'assets/Images/4_Level2/phone/empire-state.png');
    }

    create() {
        // BG.
        var bg = this.add.sprite(0, 0, 'bg-blurred-4-5').setOrigin(0)

        //Text.
        this.textBg = this.add.graphics();
        this.textBg.fillStyle(0xFFFFFF, 1);
        this.textBg.fillRoundedRect(960 - 800, 540 - 450, 1600, 900, 64);

        this.heading = this.add.rexBBCodeText(1100, 265,
            `[b]Empire State Building[/b]`,
            { fontFamily: "Arial", fontSize: "84px", color: '#000000', align: 'center' }).setOrigin(0.5);
        // Dealing with text quality.
        this.heading.scale = 0.5

        this.text = this.add.text(1100, 600,
            `The Empire State Building is a 102-story Art Deco
skyscraper in Midtown Manhatten, New York City.
The building was built from 1930 to 1931. Its name
is delivered from "Empire State", the nickname of
the state of New York.`,
            { fontFamily: "Arial", fontSize: "84px", color: '#000000', align: 'center' }).setOrigin(0.5);
        // Dealing with text quality.
        this.text.scale = 0.5

        // image
        var image = this.add.sprite(300, 160, 'empire-state').setOrigin(0)

        // Close button.     
        this.nextBtnAudio = this.sound.add("next-button", { loop: false });
        const closeBtn = new CloseButton(this, 1920 - 240, 170, 'x-mark', this.nextBtnAudio);
        closeBtn.on('pointerdown', function () {
            this.scene.start('Scene4_5');
        }, this);
    }
}
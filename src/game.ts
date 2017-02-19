module MyGameName {

    export class Game extends Phaser.Game {

        constructor() {

            // init game
            super(Global.GAME_WIDTH,Global.GAME_HEIGHT , Phaser.AUTO, 'content');

            // add states
            this.state.add('Boot', Boot);

            // start
            this.state.start('Boot');

        }

    }

} 
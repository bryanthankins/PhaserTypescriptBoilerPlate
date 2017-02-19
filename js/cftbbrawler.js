var MyGameName;
(function (MyGameName) {
    var Global = (function () {
        function Global() {
        }
        return Global;
    }());
    // game size
    Global.GAME_WIDTH = 1024;
    Global.GAME_HEIGHT = 640;
    MyGameName.Global = Global;
})(MyGameName || (MyGameName = {}));
// -------------------------------------------------------------------------
window.onload = function () {
    var game = new MyGameName.Game();
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyGameName;
(function (MyGameName) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = 
            // init game
            _super.call(this, MyGameName.Global.GAME_WIDTH, MyGameName.Global.GAME_HEIGHT, Phaser.AUTO, 'content') || this;
            // add states
            _this.state.add('Boot', MyGameName.Boot);
            // start
            _this.state.start('Boot');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    MyGameName.Game = Game;
})(MyGameName || (MyGameName = {}));
var MyGameName;
(function (MyGameName) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/phaser2.png');
        };
        Boot.prototype.create = function () {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
            }
            else {
            }
            //this.game.state.start('Preloader', true, false);
            this.game.add.sprite(300, 300, 'preloadBar');
        };
        return Boot;
    }(Phaser.State));
    MyGameName.Boot = Boot;
})(MyGameName || (MyGameName = {}));
//# sourceMappingURL=cftbbrawler.js.map
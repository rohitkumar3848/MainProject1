let Globals = require('Globals');

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: {
            default: null,
            type: cc.Label
        }
    },

    // onLoad() {
    //     // Display the score when the Score scene is loaded

    // },

    change() {
        cc.log("New Chnages done");
    },

    start() {
        // Additional logic for the score screen if needed
        this.scoreLabel.string = "Score:" + Globals.score.toString();
        this.node.on('touchend', this.onTapToPlayAgain, this);
    },

    onTapToPlayAgain() {
        cc.director.loadScene('Game');
    }
});


cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
		this.com_score = this.node.getChildByName("ui_scoreBar").getComponent("UI_Number");

		this.node.active = false;
	},

	init(gold, onContinue) {
		this.com_score.setNumber(gold);
	},

    // update (dt) {},
});

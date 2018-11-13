
cc.Class({
	extends: cc.Component,

	properties: {
	},

	onLoad() {
		this.com_score = this.node.getChildByName("ui_scoreBar").getComponent("UI_Number");
		this.btn_continue = this.node.getChildByName("btn_continue");

		//this.node.active = false;
	},

	init(gold, onContinue) {
		this.com_score.setNumber(gold);
		this.onContinue = onContinue;
		if (this.onContinue == null) {
			this.btn_continue.active = false;
		}
	},

	onClick_continue() {
		if (this.onContinue != null) {
			this.onContinue();
		}
	}
});

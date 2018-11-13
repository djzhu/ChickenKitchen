"use strict";
cc._RF.push(module, 'fb994e8g9tEA4YG9lnfImn0', 'UI_Settlement');
// Script/UI/UI_Settlement.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.com_score = this.node.getChildByName("ui_scoreBar").getComponent("UI_Number");
		this.btn_continue = this.node.getChildByName("btn_continue");

		//this.node.active = false;
	},
	init: function init(gold, onContinue) {
		this.com_score.setNumber(gold);
		this.onContinue = onContinue;
		if (this.onContinue == null) {
			this.btn_continue.active = false;
		}
	},
	onClick_continue: function onClick_continue() {
		if (this.onContinue != null) {
			this.onContinue();
		}
	}
});

cc._RF.pop();
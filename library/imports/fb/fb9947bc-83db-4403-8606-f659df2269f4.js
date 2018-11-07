"use strict";
cc._RF.push(module, 'fb994e8g9tEA4YG9lnfImn0', 'UI_Settlement');
// Script/UI/UI_Settlement.js

"use strict";

cc.Class({
				extends: cc.Component,

				properties: {},

				onLoad: function onLoad() {
								this.com_score = this.node.getChildByName("ui_scoreBar").getComponent("UI_Number");

								this.node.active = false;
				},
				init: function init(gold, onContinue) {
								this.com_score.setNumber(gold);
				}
}

// update (dt) {},
);

cc._RF.pop();
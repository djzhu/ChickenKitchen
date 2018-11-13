(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/UI/UI_Settlement.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fb994e8g9tEA4YG9lnfImn0', 'UI_Settlement', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=UI_Settlement.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game/Game_Bubble.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9a419tMv8NBlKk72fuxZVHJ', 'Game_Bubble', __filename);
// Script/Game/Game_Bubble.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		moodNode: []
	},

	onLoad: function onLoad() {
		this.moodNode = new Array(3);
		for (var i = 0; i < this.moodNode.length; i++) {
			this.moodNode[i] = this.node.getChildByName("add_mood" + i);
		}

		//this.setMood(1);
	},


	// moodLevel: 0红 1黄 2绿
	setMood: function setMood(moodLevel) {
		for (var i = 0; i < this.moodNode.length; i++) {
			this.moodNode[i].active = i == moodLevel ? true : false;
		}
	}

	// update (dt) {},

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
        //# sourceMappingURL=Game_Bubble.js.map
        
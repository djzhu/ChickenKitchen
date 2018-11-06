"use strict";
cc._RF.push(module, '9a419tMv8NBlKk72fuxZVHJ', 'Game_Bubble');
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
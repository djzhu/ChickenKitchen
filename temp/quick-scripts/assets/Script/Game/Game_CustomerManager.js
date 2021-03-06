(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game/Game_CustomerManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e4d8cR4DPRLsa++gqRMbyo+', 'Game_CustomerManager', __filename);
// Script/Game/Game_CustomerManager.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		customer: [], // 所有顾客对象
		lineUpPos: [], // 队伍上的点位
		bubble: null
	},

	onLoad: function onLoad() {
		this.customer = new Array(8);
		this.lineUpPos = new Array(8);
		for (var i = 0; i < this.customer.length; i++) {
			this.customer[i] = this.node.getChildByName("ch_role" + i);
			this.customer[i].active = false;
			this.lineUpPos[i] = new cc.Vec2(this.customer[i].x, this.customer[i].y);
		}

		this.bubble = this.node.getChildByName("add_bubble");
		this.bubble.active = false;
		this.bubbleLocPos = new cc.Vec2(18, 24);

		//this.moveSpeed = 1; // 移动速度
		this.moveTime = 1; // 移动时间

		//cc.log(this.customer[0].getComponent("Game_Customer").gold);
		//var customer = this.customer[0].getComponent("Game_Customer");
		//customer.setTo(30, 55);
		//customer.moveTo(1, 30, 35, ()=> {cc.log("finish..")});
		//this.initCunstomer();
	},


	// 移动速度
	setSpeed: function setSpeed(speed) {
		if (speed > 0) {
			this.moveTime = 1 / speed;
		}
	},


	// 初始化顾客
	initCunstomer: function initCunstomer(onFinish) {
		this.currentCustomer = new Array(6); // 当前队列上的顾客
		for (var i = 0; i < this.currentCustomer.length; i++) {
			this.currentCustomer[i] = this.getRandomCustomer();
			this.currentCustomer[i].getComponent("Game_Customer").setTo(this.lineUpPos[i + 1].x, this.lineUpPos[i + 1].y);
		}
		// 往前移动
		this.moveForward(onFinish);
	},


	// 一个顾客离开 moodLevel: 0愤怒 1平静 2开心
	satisfyCustomer: function satisfyCustomer(moodLevel, onFinish) {
		var _this = this;

		// 添加mood
		this.bubble.active = true;
		this.bubble.getComponent("Game_Bubble").setMood(moodLevel);
		this.bubble.parent = this.currentCustomer[0];
		this.bubble.position = this.bubbleLocPos;
		// 第一个离开
		var pos = this.currentCustomer[0].position;
		var customer = this.currentCustomer[0].getComponent("Game_Customer");
		customer.moveTo(this.moveTime * 2, pos.x + 120, pos.y, function () {
			var bubbleNode = customer.node.getChildByName("add_bubble");
			if (bubbleNode != null) {
				// 下一个顾客提前把气泡拿走使用了，上一个顾客销毁时就不需要处理气泡了
				bubbleNode.parent = _this.node;
				bubbleNode.active = false;
			}
			customer.node.destroy();
		});
		// 队列往前排一个，并在最后新建一个
		for (var i = 0; i < this.currentCustomer.length - 1; i++) {
			this.currentCustomer[i] = this.currentCustomer[i + 1];
		}
		this.currentCustomer[i] = this.getRandomCustomer();
		this.currentCustomer[i].getComponent("Game_Customer").setTo(this.lineUpPos[i + 1].x, this.lineUpPos[i + 1].y);
		// 往前移动
		this.moveForward(onFinish);

		// 得分
		if (moodLevel == 2) {
			return customer.gold;
		} else if (moodLevel == 1) {
			return parseInt(customer.gold * 0.7);
		} else {
			return 0;
		}
	},


	// 随机取一个客户
	getRandomCustomer: function getRandomCustomer() {
		var rd = parseInt(Math.random() * this.customer.length);
		var node = cc.instantiate(this.customer[rd]);
		node.active = true;
		node.parent = this.node;
		node.setSiblingIndex(0);
		return node;
	},


	// 向前移动一个位置
	moveForward: function moveForward(onFinish) {
		var _this2 = this;

		var _loop = function _loop() {
			var customer = _this2.currentCustomer[i].getComponent("Game_Customer");
			var index = i;
			_this2.scheduleOnce(function () {
				customer.moveTo(_this2.moveTime, _this2.lineUpPos[index].x, _this2.lineUpPos[index].y, function () {
					if (index == _this2.currentCustomer.length - 1) {
						onFinish();
					}
				});
			}, i * 0.3);
		};

		for (var i = 0; i < this.currentCustomer.length; i++) {
			_loop();
		}
	}
}

// update (dt) {},
);

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
        //# sourceMappingURL=Game_CustomerManager.js.map
        
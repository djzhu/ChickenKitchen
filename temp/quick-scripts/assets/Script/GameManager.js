(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/GameManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ce17d3IigdAtYkm0qCo534B', 'GameManager', __filename);
// Script/GameManager.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onDestroy: function onDestroy() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	start: function start() {
		var _this = this;

		this.gold = 0;

		// 顾客入场
		cc.find("Canvas/Customer").getComponent("Game_CustomerManager").initCunstomer();
		// 3 2 1 go
		cc.find("Canvas/UI/ui_countDown").getComponent("UI_CountDown").startCountDown(function () {
			//cc.log("->>>> count down finish");
			// 走时间
			cc.find("Canvas/UI/ui_timeBar").getComponent("UI_Timer").init(150, _this.onTimeOver);
			// 初始化金币
			cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").setNumber(_this.gold);
			// 烧菜
			cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_cooking"); // 厨师烧菜动画 loop
			// 互动
			cc.find("Canvas/UI/ui_play").getComponent("Game_Play").playAction(function (result) {
				//cc.log("+++>" + result);
				if (result == 0) {
					cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_lost"); // 厨师失败动画
				} else {
					cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_win"); // 厨师胜利动画
				}

				cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register"); // 收银机动画

				// 走一个顾客并计算收益
				var gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(0);
				_this.gold += gold;
				cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(_this.gold);
			});
		});
		// 操作 - 厨师动画 收钱 走一个 下一个
		// cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_cooking"); // 厨师烧菜动画 loop
		// cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_win"); // 厨师胜利动画
		// cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_lost"); // 厨师失败动画
		// 时间到结算
	},


	// 时间结束
	onTimeOver: function onTimeOver() {
		cc.log("Time Over!!");
	},
	onKeyDown: function onKeyDown(event) {
		switch (event.keyCode) {
			case cc.macro.KEY.a:
				{
					cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register"); // 收银机动画
					var gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(0); // 走一个顾客并计算收益
					this.gold += gold;
					cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
					break;
				}
			case cc.macro.KEY.s:
				{
					cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register");
					var _gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(1);
					this.gold += _gold;
					cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
					break;
				}
			case cc.macro.KEY.d:
				{
					cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register");
					var _gold2 = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(2);
					this.gold += _gold2;
					cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
					break;
				}
			case cc.macro.KEY.c:
				{
					//cc.find("Canvas/UI/ui_countDown").getComponent("UI_CountDown").startCountDown(() => { cc.log("->>>> count down finish"); });
					break;
				}
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
        //# sourceMappingURL=GameManager.js.map
        
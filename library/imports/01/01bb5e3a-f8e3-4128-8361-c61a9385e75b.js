"use strict";
cc._RF.push(module, '01bb546+ONBKINhxhqThedb', 'Game_Play');
// Script/Game/Game_Play.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {},
    playAction: function playAction(onFinish) {
        this.onFinish = onFinish;
        this.onFinish(2); // 0 1 2
    }

    // update (dt) {},

});

cc._RF.pop();
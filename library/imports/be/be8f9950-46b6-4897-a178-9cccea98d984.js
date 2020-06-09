"use strict";
cc._RF.push(module, 'be8f9lQRrZIl6F4nMzqmNmE', 'doubleMagic');
// script/magicstones/doubleMagic.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var com = require('common');
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onBeginContact: function onBeginContact(contact, self, other) {
        if (other.node.group == "ball") {
            var ball = cc.find("Canvas/Ball");
            cc.find("Canvas").addChild(cc.instantiate(ball));
            this.boom();
        }
    },
    boom: function boom() {
        var x = this.node.getComponent("position").x;
        var y = this.node.getComponent("position").y;
        com.MAP_OBJ[x][y] = null;
        this.node.destroy();
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
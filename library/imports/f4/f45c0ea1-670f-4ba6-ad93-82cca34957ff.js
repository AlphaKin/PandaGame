"use strict";
cc._RF.push(module, 'f45c06hZw9Lpq2TgsyjSVf/', 'block_boom_effect');
// script/blocks/block_boom_effect.js

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

    start: function start() {},
    onDestory: function onDestory() {
        this.node.destroy();
    },
    update: function update(dt) {
        if (this.node.opacity == 0) {
            // let part = cc.instantiate(this.node);
            // cc.find("Canvas/blocks").addChild(part);
            // part.setPosition(this.node.getPosition().x + 20, this.node.getPosition().y + 20 );

        }
    }
});

cc._RF.pop();
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/blocks/block_parts.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b926e+7BP1KPqs6K5SXmmLA', 'block_parts', __filename);
// script/blocks/block_parts.js

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
        isBoom: false,
        _grav: 0,
        _opacityVic: 0,
        _rigidbody: cc.Component
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


    onLoad: function onLoad() {
        // cc.director.getPhysicsManager().enabled = true; // 开启了物理引擎
        //         cc.director.getPhysicsManager().gravity = cc.v2(0, -320);// 重力加速度的配置
        this._rigidbody = this.node.getComponent(cc.RigidBody);
    },
    boom: function boom(offest, grav, opacityVic) {
        this._grav = grav;
        this._opacityVic = opacityVic;
        this._rigidbody.linearVelocity = cc.v2(offest, grav);
        this.isBoom = true;
    },
    start: function start() {},
    update: function update(dt) {
        if (this.isBoom) {
            this._rigidbody.linearVelocity = cc.v2(this._rigidbody.linearVelocity.x, this._rigidbody.linearVelocity.y - this._grav);
            if (this.node.opacity > 0) this.node.opacity -= this._opacityVic;else this.node.destroy();
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
        //# sourceMappingURL=block_parts.js.map
        
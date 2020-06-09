(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/blocks/block_add.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9308dyER5BARKJl8JQK22W3', 'block_add', __filename);
// script/blocks/block_add.js

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
        audio: cc.AudioClip,
        _isContacted: true
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

    onBeginContact: function onBeginContact(contact, self, other) {
        if (this._isContacted && other.node.group == "ball") {
            com.score = com.score + 10;
            this.boom();
            this._isContacted = false;
        }
    },
    boom: function boom() {
        cc.audioEngine.play(this.audio, false, 0.5);
        this.node.getChildByName("stone_part1").getComponent("block_parts").boom(-100, 5, 15);
        this.node.getChildByName("stone_part2").getComponent("block_parts").boom(0, -5, 15);
        this.node.getChildByName("stone_part3").getComponent("block_parts").boom(100, 5, 15);
        this.node.removeComponent(cc.RigidBody);
        com.score = com.score + 10;
        var x = this.node.getComponent("position").x;
        var y = this.node.getComponent("position").y;
        com.MAP_OBJ[x][y] = null;
    },
    start: function start() {}
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
        //# sourceMappingURL=block_add.js.map
        
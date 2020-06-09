(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/HelloWorld.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld', __filename);
// script/HelloWorld.js

"use strict";

var _global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        ball: {
            default: null,
            type: cc.Node,
            pos_x: 0,
            pos_y: 0
        },
        setting_button: {
            default: null,
            type: cc.Node
        },
        setting_box: {
            default: null,
            type: cc.Prefab
        },
        parent: {
            default: null,
            type: cc.Node
        },
        broken_stone: {
            default: null,
            type: cc.Node
        }
        // bgm: {
        //     type: cc.AudioSource,
        //     default: null
        // }, 
    },

    // use this for initialization
    onLoad: function onLoad() {
        // this.bgm = cc.find("Canvas/background/bgm")
        // console.log(this.bgm)
        this.ball = cc.find("Canvas/background/ball");
        this.broken_stone = cc.find("Canvas/background/broken_stone");
        this.setting_button = cc.find("Canvas/background/setting_button");
        // this.bgm.volume = 0.1
        // this.bgm.play()

        // console.log(this.bgm)

        console.log(this.ball);
        this.ball.pos_x = this.ball.x;
        this.ball.pos_y = this.ball.y;
        var that = this;

        this.ball.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta();
            that.ball.x += delta.x;
            that.ball.y += delta.y;
        });

        this.ball.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (that.isOverlap(that.ball, that.broken_stone)) {
                // 如果重叠。击碎石块 开始游戏,
                console.log("开始游戏");
                var block_fragile = cc.find("Canvas/background/broken_stone").getComponent("block_fragile");
                block_fragile.boom();
                cc.director.loadScene("Game");
            }
            // 把ball放回原处
            that.ball.x = that.ball.pos_x;
            that.ball.y = that.ball.pos_y;
        });
        this.setting_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了设置");
            if (!_global.global.setting_box) {
                console.log("实例化了prefab");
                var node = cc.instantiate(that.setting_box);
                _global.global.setting_box = node;
            }
            _global.global.setting_box.parent = that.parent || that.node;
        });
    },

    // called every frame
    update: function update(dt) {},

    // 判断两个节点是否重叠
    isOverlap: function isOverlap(a, b) {
        var b_l = a.x - a.width / 2;
        var b_r = a.x + a.width / 2;
        var b_t = a.y + a.height / 2;
        var b_b = a.y - a.height / 2;
        var s_l = b.x - b.width / 2;
        var s_r = b.x + b.width / 2;
        var s_t = b.y + b.height / 2;
        var s_b = b.y - b.height / 2;
        return !(b_l > s_r || b_r < s_l || b_t < s_b || b_b > s_t);
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
        //# sourceMappingURL=HelloWorld.js.map
        
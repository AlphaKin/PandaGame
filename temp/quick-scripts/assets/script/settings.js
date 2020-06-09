(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/settings.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e1d26nwXvxDhYwADetWVkkE', 'settings', __filename);
// script/settings.js

"use strict";

var _global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {
        close: {
            default: null,
            type: cc.Node
        },
        music_button: {
            default: null,
            type: cc.Prefab
        },
        shock_button: {
            default: null,
            type: cc.Prefab
        },
        acoustics_button: {
            default: null,
            type: cc.Prefab
        },
        music_off_button: {
            default: null,
            type: cc.Prefab
        },
        shock_off_button: {
            default: null,
            type: cc.Prefab
        },
        acoustics_off_button: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        console.log(this);
        console.log(this.node);
        this.close = this.node.getChildByName("close");
        this.music_button = this.node.getChildByName("music_on_off");
        this.shock_button = this.node.getChildByName("shock_on_off");
        this.acoustics_button = this.node.getChildByName("acoustics_on_off");
        this.music_off_button = this.node.getChildByName("music_off");
        this.shock_off_button = this.node.getChildByName("shock_off");
        this.acoustics_off_button = this.node.getChildByName("acoustics_off");
        this.music_off_button.active = false;
        this.shock_off_button.active = false;
        this.acoustics_off_button.active = false;
        var that = this;
        console.log(this.music_button);
        this.close.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了关闭");
            cc.find("Canvas").getComponent("gameManager").gameResume();
            that.node.parent = null;
        });
        this.music_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了music按钮");
            that.music_button.active = false;
            that.music_off_button.active = true;
        });
        this.shock_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了shock_button");
            that.shock_button.active = false;
            that.shock_off_button.active = true;
        });
        this.acoustics_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了acoustics_button");
            that.acoustics_button.active = false;
            that.acoustics_off_button.active = true;
        });

        this.music_off_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了music按钮");
            that.music_button.active = true;
            that.music_off_button.active = false;
        });
        this.shock_off_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了shock_button");
            that.shock_button.active = true;
            that.shock_off_button.active = false;
        });
        this.acoustics_off_button.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了acoustics_button");
            that.acoustics_button.active = true;
            that.acoustics_off_button.active = false;
        });
    },
    start: function start() {
        console.log(_global.global);
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
        //# sourceMappingURL=settings.js.map
        
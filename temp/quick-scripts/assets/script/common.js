(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/common.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3ff5eBLFO5Gpqj0gbKw9i5+', 'common', __filename);
// script/common.js

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

module.exports = {
    MAP_WIDTH: 10,
    MAP_HEIGHT: 15,
    MAP: new Array(10),
    MAP_OBJ: new Array(10),
    BLOCK_BASE_NUM: 20,
    nowLevel: 0,
    score: 100,
    boom_range: 2,

    block_table: ["block_fragile", "block_base", "block_add", "block_decrease", "block_boom", "block_pass", "doubleMagic"],

    //fragile - base - add - decrease - boom - pass - doubleMagic - 
    level_config: [[30, 20, 10, 5, 20, 1, 1], [2, 2, 2, 2, 2, 1, 1], [3, 3, 3, 3, 3, 1, 1], [4, 4, 4, 4, 4, 1, 1], [5, 5, 5, 5, 5, 1, 1], [5, 5, 5, 5, 5, 1, 1], [5, 5, 5, 5, 5, 1, 1], [5, 5, 5, 5, 5, 1, 1], [5, 5, 5, 5, 5, 1, 1], [5, 5, 5, 5, 5, 1, 1]]
};

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
        //# sourceMappingURL=common.js.map
        
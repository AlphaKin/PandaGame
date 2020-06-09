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
var global = require('global');
cc.Class({
    extends: cc.Component,
    properties: {
        blocks: [cc.Prefab],
        arch: cc.Prefab,
        btn_setting: cc.Node,
        btn_pause: cc.Node,
        ui_setting: cc.Prefab,
        _nowConfig: null
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


    onLoad () {
        let that = this;
        this.btn_setting.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("点击了设置");
            let node = cc.instantiate(that.ui_setting);
            cc.find("Canvas/blocks").addChild(node);
            let size = cc.winSize;
            node.setPosition(cc.v2(size.width/2, size.height/2));
            that.gamePause();
        })
    },

    start () {
        this.initGame();
    },

    initGame(){
        for(let i=0; i<com.MAP_WIDTH; ++i){
            com.MAP[i] = new Array(com.MAP_HEIGHT);
            com.MAP_OBJ[i] = new Array(com.MAP_HEIGHT);
        }
        let root = cc.find("Canvas/blocks");
        root.destroyAllChildren();
        for(let i=0; i<com.MAP_WIDTH; ++i){
            for(let j=0; j<com.MAP_HEIGHT; ++j){
                com.MAP[i][j] = -1;
                com.MAP_OBJ[i][j] = null;
                // let block = cc.instantiate(this.arch);
                // root.addChild(block);
                // block.setPosition(cc.v2(i * 105 + 63, j * 105 + 70));
            }
        }
        this.loadBlocks();
    },

    clearMap(){
        for(let i=0; i<com.MAP_WIDTH; ++i){
            for(let j=0; j<com.MAP_HEIGHT; ++j){
                com.MAP[i][j] = -1;
            }
        }
    },

    generatePostion(){
        return [
            Math.floor(Math.random() * (com.MAP_WIDTH)),
            Math.floor(Math.random() * (com.MAP_HEIGHT))
        ];
    },

    gamePause(){
        cc.director.pause();
    },

    gameResume(){
        cc.director.resume();
    },

    nextLevel(){
        if(com.nowLevel == com.level_config.length - 1){
            alert("All pass");
        }else{
            ++com.nowLevel;
            this.initGame();
            this.gameResume();
        }
    },

    loadBlocks(){
        this.clearMap();
        this._nowConfig = com.level_config[com.nowLevel];
        let blocksRoot = cc.find("Canvas/blocks");
        let level_ui = cc.find("Canvas/title/ui_level").getComponent("levelUI");
        level_ui.updateLevel();
        for(let i=0; i<this._nowConfig.length; ++i){
            let cnt = 0;
            while(cnt < this._nowConfig[i]){
                let pos;
                do{
                    pos = this.generatePostion();
                    // console.log(pos[0] + " " + pos[1]);
                }while(com.MAP[pos[0]][pos[1]] != -1);
                // console.log("OK - " + i + " ------------------");
                com.MAP[pos[0]][pos[1]] = i;

                let block = cc.instantiate(this.blocks[i]);
                // console.log(block);
                let bp = block.getComponent("position");
                bp.x = pos[0]; bp.y = pos[1];
                bp.spt_name = com.block_table[i];
                com.MAP_OBJ[pos[0]][pos[1]] = block;
                block.setPosition(cc.v2(pos[0] * 105 + 63, pos[1] * 105 + 70));
                blocksRoot.addChild(block);
                ++cnt;
            }
        }
    },
    update (dt) {
        cc.find("Canvas/title/score_ui").getComponent(cc.Label).string = com.score;
    },
});

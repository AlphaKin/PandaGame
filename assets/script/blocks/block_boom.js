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
        parts: cc.Prefab,
        audio: cc.AudioClip,
        isBoom: false,
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

    // onLoad () {},
    onBeginContact(contact, self, other){
        if(this._isContacted && other.node.group == "ball"){
            this.boom();
            this._isContacted = false;
        }
    },
    boom(){
        cc.audioEngine.play(this.audio, false, 1);
        let bp = this.node.getComponent("position");
        com.MAP_OBJ[bp.x][bp.y] = null;
        let part = cc.instantiate(this.parts);
        cc.find("Canvas/blocks").addChild(part);
        part.setPosition(this.node.getPosition());
        com.score = com.score - 5;
        const dir = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]];
        dir.forEach((item,index,array) => {
            let xx = bp.x + item[0];
            let yy = bp.y + item[1];
            if(xx < com.MAP_WIDTH && xx >= 0 && yy < com.MAP_HEIGHT && yy >= 0){
                let block = com.MAP_OBJ[xx][yy];
                if(block != null){
                    let sptName = block.getComponent("position").spt_name;
                    if(sptName != null){
                        if(sptName == "block_pass"){
                            alert("game over");
                        }else{
                            console.log(sptName + "(" + xx +"," + yy + ") will boom")
                            block.getComponent(sptName).boom();
                        }
                    }
                }
            }
        });
        this.node.destroy();
    },
    start () {
    },

    // update (dt) {
    // },
});

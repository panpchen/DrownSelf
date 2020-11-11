import { UIManager, UIType } from "../UIManager";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "./BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DecryptPopUI extends BaseUI {
    @property(cc.Label)
    titleLabel: cc.Label = null;
    @property(cc.Label)
    infoLabel: cc.Label = null;

    private _isOver: boolean = false;

    init(ob) {
        if (ob.isRight) {
            this.titleLabel.string = `答对了`;
        } else {
            this.titleLabel.string = `答错了`;
        }
        this._isOver = ob.isOver;
        this.infoLabel.string = ob.info;
    }

    onClickHide() {
        this.hide();
        if (this._isOver) {
            UIManager.instance.showUI(UIType.ResultUI);
        }
    }
}

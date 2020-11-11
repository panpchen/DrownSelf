import Game from "../Game";
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
export default class SecretUI extends BaseUI {

    @property(cc.Node)
    window: cc.Node = null;

    clickBackGame() {
        this.hide();
        UIManager.instance.showUI(UIType.MenuUI);
    }

    clickAgainGame() {
        this.hide();
        Game.instance.startGame();
    }

    clickHideWindow() {
        this.window.active = false;
    }
}

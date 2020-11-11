import BgAni from "./BgAni";
import { ItemConfig } from "./Config/ItemConfig";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:

import { UIManager, UIType } from "./UIManager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(cc.Toggle)
    toggleList: cc.Toggle[] = [];
    @property(cc.Label)
    titleLabel: cc.Label = null;
    @property(cc.Prefab)
    bgAniPrefab: cc.Prefab = null;
    @property(cc.Node)
    bgQuestion: cc.Node = null;
    @property(cc.Node)
    gameNode: cc.Node = null;
    @property(cc.Node)
    aniParent: cc.Node = null;

    public static instance: Game = null;
    private _curItemId: number = 0;
    private _itemData = null;
    private _aniNode = null;

    onLoad() {
        Game.instance = this;
        this.gameNode.active = false;
    }

    startGame() {
        this.gameNode.active = true;
        this._curItemId = 0;
        this._itemData = null;
        this._updateContent()
    }

    onToggleEvent(toggle: cc.Toggle, index) {
        if (index == this._itemData.answerId) {
            this._curItemId++;
            const isOver = this._curItemId > ItemConfig.getItemsLength() - 1;
            if (!isOver) {
                this.scheduleOnce(() => {
                    this._updateContent();
                }, 0.3);
                // this._updateContent();
            }
            UIManager.instance.showUI(UIType.DecryptPopUI, { info: this._itemData.reasons[index], isRight: true, isOver: isOver });
        } else {
            UIManager.instance.showUI(UIType.DecryptPopUI, { info: this._itemData.reasons[index], isRight: false, isOver: false });
        }
    }

    _updateContent() {
        this._itemData = ItemConfig.getItemConfigById(this._curItemId);
        this.bgQuestion.scaleX = this._curItemId % 2 == 0 ? 1 : -1;
        this.titleLabel.string = this._itemData.title;
        if (!this._aniNode) {
            this._aniNode = cc.instantiate(this.bgAniPrefab);
            this._aniNode.parent = this.aniParent;
        }
        this._aniNode.getComponent(BgAni).loadBg(this._itemData.aniId);
        this.toggleList.forEach((toggle, id) => {
            toggle.node.getChildByName("name").getComponent(cc.Label).string = this._itemData.options[id];
        });
    }

    resetAllToggle() {
        this.toggleList.forEach(toggle => {
            toggle.interactable = true;
            toggle.isChecked = false;
            toggle.node.getChildByName("name").color = cc.color(52, 52, 52, 255);
        });
    }
}

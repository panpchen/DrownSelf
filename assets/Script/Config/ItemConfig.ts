// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const ItemsConfigs = [
    {
        id: 0,
        title: "发生你发生溺水情况时，你首先会怎么做呢？",
        options: ["保持冷静，不乱挥手蹬脚", "不断地挣扎"],
        reasons: ["冷静能帮助你想出自救方法", "盲目的挣扎会使溺水情况加重"],
        answerId: 0,
        aniId: 0
    },
    {
        id: 1,
        title: "你的裤兜里还装着手机，你应该？",
        options: ["保护好，不能丢失", "扔掉"],
        reasons: ["手机的密度比水重，不利于溺水者浮出水面", "比水重的如书包、手机、鞋子等应扔掉，比水轻的衣服不用脱掉"],
        answerId: 1,
        aniId: 1
    },
    {
        id: 2,
        title: "如何帮助你的身体浮出水面？",
        options: ["放松身体", "使劲挣扎划水"],
        reasons: ["人的身体密度和水差不多，放松身体有助于浮出水面", "使劲挣扎划水无法使身体浮在水面"],
        answerId: 0,
        aniId: 2
    },
    {
        id: 3,
        title: "当你浮到水面后，应该调整成那种姿势?",
        options: ["身体仰位，头部后仰，使口鼻露出水面", "保持挣扎划水"],
        reasons: ["这个姿势有利于保持呼吸和增强水的浮力", "挣扎会丧失体力和无法保持浮在水面"],
        answerId: 0,
        aniId: 2
    },
    {
        id: 4,
        title: "成功浮在水面后，我们要如何呼吸？",
        options: ["用鼻吸气，用鼻呼气，吸气要深，呼气要深", "用嘴吸气，用鼻呼气，吸气要深，呼气要浅"],
        reasons: ["鼻子吸气容易发生呛水", "嘴巴吸气不易发生呛水，肺部保持较多的空气，使人体密度减少，有助于漂浮"],
        answerId: 1,
        aniId: 2
    },
    {
        id: 5,
        title: "当你的腿部抽筋时，你会怎么做呢？",
        options: ["伸直抽筋的腿，用手将脚趾向上扳", "使劲蹬腿"],
        reasons: ["正确做法，可以缓解腿部抽筋", "错误做法，不能缓解抽筋状况"],
        answerId: 0,
        aniId: 3
    },
    {
        id: 6,
        title: "当你的手指抽筋时，你会怎么做呢？",
        options: ["将手握拳，然后用力张开，迅速反复几次", "甩手"],
        reasons: ["正确做法，可以缓解手部抽筋", "错误做法，不能缓解抽筋状况"],
        answerId: 0,
        aniId: 4
    },
    {
        id: 7,
        title: "当被水草缠绕时，你会怎么做呢？",
        options: ["使劲挣扎", "深吸一口气潜入水下，用手迅速将水草解脱"],
        reasons: ["挣扎过程中容易使水草缠绕的更紧", "可准确解开水草缠绕"],
        answerId: 1,
        aniId: 5
    },
    {
        id: 8,
        title: "当你在游泳时碰上暗流或旋涡，应该怎么做？",
        options: ["沿其切线方向游离旋涡中心", "直立踩水或潜入水中"],
        reasons: ["遇到旋涡离得越远越好", "无效做法，会被卷入旋涡"],
        answerId: 0,
        aniId: 6
    },
    {
        id: 9,
        title: "当你看到漂浮物，你会怎么做呢？",
        options: ["推开", "抓住"],
        reasons: ["错误做法，漂浮物可以帮助你浮在水面", "正确做法，漂浮物可以帮助你浮在水面"],
        answerId: 1,
        aniId: 7
    },
    {
        id: 10,
        title: "当你看到对面有人时，你会怎么做呢？",
        options: ["保持镇定，然后呼救", "挣扎着向有人的地方靠近"],
        reasons: ["通过呼救可较快的引起他人的注意", "消耗体力，且不易被发现"],
        answerId: 0,
        aniId: 8
    },
]

export class ItemConfig {

    static getItemConfigById(id) {
        return ItemsConfigs[id];
    }

    static getItemsLength() {
        return ItemsConfigs.length;
    }
}


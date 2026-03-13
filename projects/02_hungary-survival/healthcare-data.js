const healthData = {
    "emergency": {
        "title": "🚑 紧急急诊 (Ügyelet)",
        "guide": "匈牙利急诊分为成人和儿童。若非生命危险，公立急诊排队可能需4-8小时。紧急求助拨打 112。",
        "sections": [
            {
                "name": "关键地点与电话",
                "list": [
                    { "h": "Hol van a legközelebbi felnőtt ügyelet?", "z": "最近的成人急诊在哪？" },
                    { "h": "Gyerekügyeletet keresek.", "z": "我正在找儿童急诊。" },
                    { "h": "Mentők: 112", "z": "救护车：112" }
                ]
            },
            {
                "name": "描述紧急状况",
                "list": [
                    { "h": "Erős légszomjam van.", "z": "我呼吸非常困难。" },
                    { "h": "Erősen vérzik.", "z": "流血不止。" },
                    { "h": "Mellkasi fájdalom.", "z": "胸口剧痛（疑似心脏问题）。" },
                    { "h": "Eszméletlen állapot.", "z": "昏迷不醒。" }
                ]
            }
        ],
        "tips": "⚠️ 提示：在匈牙利，救护车只处理真正危及生命的情况，否则可能会产生费用。"
    },
    "gp": {
        "title": "👨‍⚕️ 家庭医生 (Háziorvos)",
        "guide": "所有非紧急疾病的第一站。你需要根据地址卡（Lakcímkártya）归属地进行登记。",
        "sections": [
            {
                "name": "必备证件",
                "list": [
                    { "h": "TAJ-kártya", "z": "医保卡（绿卡）" },
                    { "h": "Lakcímkártya", "z": "地址卡" },
                    { "h": "Személyi igazolvány / Útlevél", "z": "身份证/护照" }
                ]
            },
            {
                "name": "预约与看诊",
                "list": [
                    { "h": "Szeretnék időpontot kérni.", "z": "我想预约一个时间。" },
                    { "h": "Betegszabadságra van szükségem.", "z": "我需要开病假条。" },
                    { "h": "Beutalót kérek szakrendelésre.", "z": "我需要专科转诊单。" }
                ]
            }
        ],
        "tips": "💡 提示：公立医院除急诊外，看专科医生必须先经过家庭医生开具 Beutaló（转诊单）。"
    },
    "pharmacy": {
        "title": "💊 药店买药 (Patika)",
        "guide": "匈牙利药店通常有绿色的十字标志。大部分强效药需要 E-Recept（电子处方）。",
        "sections": [
            {
                "name": "购药话术",
                "list": [
                    { "h": "Itt a TAJ-kártyám, van e-receptem.", "z": "这是医保卡，我有电子处方。" },
                    { "h": "Valami fájdalomcsillapítót kérek.", "z": "我想要一些止痛药。" },
                    { "h": "Lázcsillapító szirup gyerekeknek.", "z": "给孩子的退烧糖浆。" },
                    { "h": "Hányszor kell bevenni?", "z": "一天要服用几次？" }
                ]
            }
        ],
        "tips": "🔍 提示：药店橱窗会贴出当晚值班药店（Ügyeletes Patika）的地址。"
    },
    "specialist": {
        "title": "🦷 牙科与专科 (Szakrendelés)",
        "guide": "包括牙科、妇科、皮肤科等。公立预约排队较久，私立医疗速度快但价格贵。",
        "sections": [
            {
                "name": "专科分类",
                "list": [
                    { "h": "Fogászat", "z": "牙科" },
                    { "h": "Nőgyógyászat", "z": "妇科" },
                    { "h": "Bőrgyógyászat", "z": "皮肤科" },
                    { "h": "Szemészet", "z": "眼科" }
                ]
            }
        ],
        "tips": "💰 提示：私立诊所通常叫 'Magánrendelő'，看牙医建议提前购买补充保险。"
    }
};
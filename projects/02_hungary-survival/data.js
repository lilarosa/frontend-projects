const cultureData = {
    // 1. 新手入门
    guide: {
        title: "生存第一课",
        sections: [
            {
                subtitle: "移动支付与现金",
                items: [
                    "市区换钱：认准 Correct Change (橙色招牌)，汇率全城最稳。",
                    "银行卡：Revolut 在匈牙利极其普及，汇率优于本地银行卡。",
                    "小费习惯：餐厅通常含10-12.5%服务费，若不含，建议给10%现金。"
                ]
            },
            {
                subtitle: "必备APP清单",
                items: [
                    "BudapestGO：买所有种类的公交票、查实时时刻表。",
                    "Wolt/Foodora：当地主流的外卖配送平台。",
                    "MÁV：跨城市火车票提前在App买有折扣。"
                ]
            }
        ]
    },

    // 2. 7天安顿计划 (完整版)
    onboarding: [
        { day: "D1", title: "通讯与票务", tasks: ["办理手机号 (Telekom/Yettel)", "BudapestGO 购买月票", "下载 Wolt 解决首餐"], tip: "机场办卡比市区贵不少，急用可先买 eSim。" },
        { day: "D2", title: "确认合同", tasks: ["与房东签署正规租赁合同", "核对家具清单与水电底数", "索取地址报备表"], tip: "拍照保存所有墙角和家电原始状态。" },
        { day: "D3", title: "居留申报", tasks: ["Enter Hungary 官网注册", "上传合同与护照扫描件", "完成首次入境申报"], tip: "官网有时需要翻墙或使用本地网络才顺畅。" },
        { day: "D4", title: "政务注册", tasks: ["去 Kormányablak 办 Ügyfélkapu", "领取基础法律手册", "咨询医生划分"], tip: "Ügyfélkapu 账号是你在匈牙利的电子身份证。" },
        { day: "D5", title: "金融服务", tasks: ["银行开户 (OTP/Erste)", "申请 HUF 福林账户", "激活手机银行"], tip: "学生办卡通常免年费，记得带学生证或在读证明。" },
        { day: "D6", title: "税务社保", tasks: ["NAV 申领个人税号卡", "确认 TAJ 医保申请状态", "登记个人联系信息"], tip: "税号卡 (Adókártya) 是打工和退税的必备。" },
        { day: "D7", title: "生活整备", tasks: ["熟悉社区垃圾分类点", "寻找最近的 ALDI/LIDL", "办理健身房/借书证"], tip: "周日大部分商铺关门早，下午4点前完成采购。" }
    ],

    // 3. 住房攻略
    housing: {
        title: "住房避坑指南",
        sections: [
            {
                subtitle: "成本核算",
                items: [
                    "公共费 (Common Cost)：包含楼梯清扫、垃圾费，问清是否含水费。",
                    "取暖类型：Cirkó (燃气) > Távfűtés (集中供暖) > Elektromos (电暖)。",
                    "水电费：匈牙利实行预估制或读表制，建议每月按实际读数缴费。"
                ]
            },
            {
                subtitle: "合同风险",
                items: [
                    "违约金：通常中途退租押金不退，需确认合同是否有转租条款。",
                    "外交官条款：由于签证被拒导致的退租，可尝试协商退还押金。"
                ]
            }
        ]
    },

    // 4. 地址卡专题
    address: {
        title: "地址卡办理细节",
        sections: [
            {
                subtitle: "申请核心",
                items: [
                    "表格：Lakcímbejelentő lap，必须用蓝笔填写，不能涂改。",
                    "签字：所有房东必须在‘所有者’栏签字，缺一不可。",
                    "期限：搬家后 3 天内应去政务中心更新地址。"
                ]
            }
        ]
    }
};
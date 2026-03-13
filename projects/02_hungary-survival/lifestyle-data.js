const lifestyleData = [
    {
        id: "traffic_pass",
        category: "traffic",
        title: "🎫 购买布达佩斯月票",
        difficulty: "⭐",
        steps: ["下载 BudapestGO App", "注册账号并绑定个人信息", "选择月票(Bérlet)并购买", "乘车前扫描二维码"],
        tips: "学生票只需 3450 Ft，但必须持有有效的匈牙利实体学生证。"
    },
    {
        id: "address_card",
        category: "admin",
        title: "🏠 办理地址卡 (Lakcímkártya)",
        difficulty: "⭐⭐⭐",
        steps: ["准备好房东签字的地址表", "前往 Kormányablak (政府窗口)", "取号排队等待办理", "现场领取卡片"],
        tips: "房东签字必须清晰，且需两位证人签字。建议早晨 8 点前去排队。"
    },
    {
        id: "utility_pay",
        category: "home",
        title: "✉️ 缴纳水电费/黄色单子",
        difficulty: "⭐⭐",
        steps: ["收到邮局寄来的黄/白单子", "携带单子前往 Posta (邮局)", "交给柜员并支付现金或刷卡", "保留盖章的回执"],
        tips: "现在也可以用 iCsekk App 直接扫描单子上的二维码在线支付。"
    }
];
// 追加到 lifestyleData 数组中
const taxData = [
    {
        id: "tax_szja",
        category: "tax",
        title: "💰 个人所得税 (SZJA)",
        difficulty: "⭐⭐",
        steps: ["每年5月20日前完成申报", "登录 Ügyfélkapu (电子政务网)", "确认 NAV 自动生成的报表", "如有补缴需转账至指定账户"],
        tips: "25岁以下年轻人、四个孩子以上的母亲或新婚夫妇可以申请减税优惠。"
    },
    {
        id: "tax_property_buy",
        category: "tax",
        title: "🏠 买房契税 (Illeték)",
        difficulty: "⭐⭐⭐",
        steps: ["购房合同签署后 NAV 会寄信", "核实房产成交价格的 4%", "在规定期限内完成转账", "初次买房且35岁以下可申请减免或分期"],
        tips: "这是买房后最大的一笔额外支出，务必在预算中留出这 4%。"
    },
    {
        id: "tax_car",
        category: "tax",
        title: "🚗 汽车税 (Gépjárműadó)",
        difficulty: "⭐",
        steps: ["NAV 会根据车辆登记信息自动寄单", "每年分两期缴纳（3月和9月）", "通过银行转账或邮局黄色单子缴纳", "逾期会产生利息"],
        tips: "税额取决于车辆功率和车龄，车越新、功率越大，税越高。"
    },
    {
        id: "tax_district",
        category: "tax",
        title: "🏛️ 区级建筑税 (Építményadó)",
        difficulty: "⭐⭐",
        steps: ["核实房产所在区政府的规定", "每年向区政府进行申报", "按平米数缴纳年度税费", "部分区自住房免征，具体咨询区政府"],
        tips: "并不是每个区都有，五区、六区等核心地带的商业用途房产此税较高。"
    },
    {
        id: "tax_sell_house",
        category: "tax",
        title: "📑 售房所得税",
        difficulty: "⭐⭐⭐",
        steps: ["计算售出价与买入价的差额", "扣除装修及中介费用", "根据持有年限核算比例", "持有满5年后售房完全免税"],
        tips: "持有第1年卖需缴差价的15%，第2年90%基数...第5年0基数。"
    }
];

// 合并数据
lifestyleData.push(...taxData);
const leisureData = {
    thermal: {
        title: "♨️ 温泉攻略 (Thermal Baths)",
        process: "<strong>攻略：</strong><br>1. 塞切尼(Széchenyi)最有名，盖莱特(Gellért)最美。<br>2. 必须先淋浴。<br>3. 刷手环找柜子。",
        docs: "需带：泳衣、拖鞋(Papucs)、毛巾、泳帽。",
        notes: "💡 提示：手环丢失赔偿昂贵，请佩戴好。",
        list: [
            { h: "Kérnék egy kabint.", c: "我要一个更衣间。" },
            { h: "Hány fokos a víz?", c: "水温是多少？" }
        ]
    },
    // 确保这个 key 叫 "bar"
nightlife: {
        title: "🍺 酒吧与夜生活 (Sórakozás)",
        process: "匈牙利有着独特的‘废墟酒吧’(Ruin Pub)文化。在布达佩斯，第七区是酒吧最集中的地方。通常直接入座或在吧台点餐。",
        docs: "身份证/护照 (进场可能查验), 银行卡",
        notes: "⚠️ 潜规则：匈牙利喝啤酒传统上是不碰杯的（源于1848年历史）。在毁坏酒吧请注意保管好个人财物。",
        list: [
            { "h": "Egy korsó sört kérek.", "c": "请给我一杯大杯啤酒(0.5L)。" },
            { "h": "Egy pohár sört kérek.", "c": "请给我一杯小杯啤酒(0.3L)。" },
            { "h": "Kérek egy Fröccsöt!", "c": "我要一杯苏打调酒(苏打+白葡)。" },
            { "h": "Fizetni szeretnék.", "c": "我想买单。" },
            { "h": "Egészségedre!", "c": "干杯！" }
        ]
    },
    

    winter_sports: {
        title: "⛸️ 滑冰与户外 (Ice Skating)",
        process: "<strong>攻略：</strong><br>1. 城市公园滑冰场全欧最美。<br>2. 建议提前网上购票。",
        docs: "需带：手套(必备)、长袜、身份证。",
        notes: "💡 提示：冬季限定，夏季这里会变成划船的人造湖。",
        list: [
            { h: "Korcsolya bérlés", c: "租滑冰鞋" }
        ]
    },
    zoo_circus: {
        title: "🐘 动物园/马戏团 (Zoo & Circus)",
        process: "<strong>攻略：</strong><br>1. 动物园很大，适合走一整天。<br>2. 马戏团周末常有演出，票需抢购。",
        docs: "需带：学生证、少量现金。",
        notes: "💡 提示：马戏团室内恒温，是极佳的亲子选择。",
        list: [
            { h: "Állatkert", c: "动物园" }
        ]
    },
    shopping: {
        title: "🛍️ 购物中心 (Malls)",
        process: "<strong>攻略：</strong><br>1. Arena 面积最大，Westend 地段最便。<br>2. 满额可申请退税单。",
        docs: "需带：护照照片(退税用)。",
        notes: "💡 提示：周日商场一般营业到 18:00-19:00。",
        list: [
            { h: "Hol van a kijárat?", c: "出口在哪里？" }
        ]
    },
    kids_play: {
        title: "🎡 亲子娱乐 (Kids Play)",
        process: "<strong>攻略：</strong><br>1. Elevenpark (室内超大乐园)。<br>2. Cyberjump (蹦床公园)。<br>3. Miniversum (微缩景观)。",
        docs: "需带：防滑袜(Tapadós zokni)。",
        notes: "💡 提示：建议自带饮用水，馆内较贵。",
        list: [
            { h: "Játszóház", c: "室内游乐场" }
        ]
    },
    museums: {
        title: "🎨 博物馆/科学宫 (Museums)",
        process: "<strong>攻略：</strong><br>1. 国家博物馆和美术馆必看。<br>2. Csopa 科学宫互动性极强。",
        docs: "需带：学生证(26岁以下半价)。",
        notes: "💡 提示：大件行李需强制寄存储衣间。",
        list: [
            { h: "Múzeum", c: "博物馆" }
        ]
    },
    outside_budapest: {
        title: "🏰 其他城市景点 (Out of Budapest)",
        process: "<strong>核心目的地：</strong><br>1. <b>Szentendre (山丹丹)</b>：艺术小镇，HEV火车直达。<br>2. <b>Balaton (巴拉顿湖)</b>：匈牙利之海，夏季必选。<br>3. <b>Visegrád (维谢格拉德)</b>：彩云古堡，看多瑙河大拐弯。",
        docs: "需带：MÁV火车票、舒适的徒步鞋。",
        notes: "💡 提示：去巴拉顿建议坐高铁(InterCity)，2小时左右到。",
        list: [
            { h: "Retúrjegyet kérek.", c: "我要买往返票。" },
            { h: "Melyik vágányról indul a vonat?", c: "火车从哪个站台出发？" }
        ]
    },
    chinese_ent: {
        title: "🎤 华人娱乐 (China Town)",
        process: "<strong>攻略：</strong><br>1. 唐人街夏季夜市超热闹。<br>2. KTV 和火锅是布城华人的标配。",
        docs: "需带：微信/支付宝。",
        notes: "💡 提示：唐人街在 10 区 Jegenye utca。",
        list: [
            { h: "Kínai negyed", c: "唐人街" }
        ]
    }
};
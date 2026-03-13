const sceneData = {
    office: {
        title: "☕ 办公室聊天 (Small Talk)",
        categories: [
            {
                name: "早晨问候与咖啡时间",
                list: [
                    { h: "Hogy telt a hétvégéd?", c: "周末过得怎么样？" },
                    { h: "Kérsz egy kávét?", c: "要喝杯咖啡吗？" },
                    { h: "Hogy vagy ma?", c: "今天感觉如何？" },
                    { h: "Elég sűrű a mai nap.", c: "今天真的很忙（事儿多）。" }
                ]
            },
            {
                name: "午休与约饭",
                list: [
                    { h: "Mit ebédelsz ma?", c: "你今天午饭吃什么？" },
                    { h: "Van kedved együtt ebédelni?", c: "有兴趣一起吃午饭吗？" },
                    { h: "Tudsz egy jó helyet a közelben?", c: "附近有推荐的好地方吗？" }
                ]
            },
            {
                name: "下班与告别",
                list: [
                    { h: "Mikor mész haza?", c: "你几点回家？" },
                    { h: "Szép estét!", c: "祝有个美好的夜晚！" },
                    { h: "Holnap találkozunk!", c: "明天见！" }
                ]
            }
        ]
    },
    sightseeing: {
        title: "🎟️ 景点购票",
        categories: [
            {
                name: "票务咨询",
                list: [
                    { h: "Két felnőtt jegyet kérek.", c: "我要两张成人票。" },
                    { h: "Van diák vagy nyugdíjas kedvezmény?", c: "有学生或老人优惠吗？" },
                    { h: "Mennyibe kerül a családi jegy?", c: "家庭票多少钱？" },
                    { h: "Ingyenes a belépés gyerekeknek?", c: "小孩免票吗？" }
                ]
            },
            {
                name: "参观细节",
                list: [
                    { h: "Szabad fotózni bent?", c: "里面可以拍照吗？" },
                    { h: "Mikor zár a múzeum?", c: "博物馆几点关门？" },
                    { h: "Hol van a ruhatár?", c: "衣帽间在哪里？" }
                ]
            }
        ]
    },
    restaurant: {
        title: "🍽️ 餐厅点餐",
        categories: [
            {
                name: "入座与点餐",
                list: [
                    { h: "Két főre szeretnék asztalt.", c: "我想要一张两个人的桌子。" },
                    { h: "Kérhetném az étlapot?", c: "能给我看看菜单吗？" },
                    { h: "Mit ajánl a pincér?", c: "有什么推荐的吗？" },
                    { h: "Csapvizet kérhetek?", c: "可以给我点自来水吗？" }
                ]
            },
            {
                name: "口味偏好",
                list: [
                    { h: "Nem kérek bele csípőset.", c: "我不要放辣。" },
                    { h: "Gluténmentes ételek vannak?", c: "有无麸质食物吗？" }
                ]
            },
            {
                name: "结账地道词",
                list: [
                    { h: "Fizetni szeretnék!", c: "我想结账！" },
                    { h: "Külön vagy együtt?", c: "分开付还是合着付？" },
                    { h: "A többi a magáé.", c: "不用找了（给小费时的地道说法）。" }
                ]
            }
        ]
    },
    oif: {
        title: "🏛️ 移民局 (OIF)",
        categories: [
            {
                name: "预约与抵达 (30句精选)",
                list: [
                    { h: "Időpontra jöttem, itt a visszaigazolás.", c: "我是按预约来的，这是确认单。" },
                    { h: "Sorszámot szeretnék húzni ügyintézéshez.", c: "我想取个号办理业务。" },
                    { h: "Késem tíz percet, még érvényes az időpontom?", c: "我迟到了10分钟，预约还有效吗？" },
                    { h: "Nem kaptam visszaigazoló e-mailt.", c: "我没收到确认邮件。" },
                    { h: "Melyik ablaknál kell jelentkeznem?", c: "我该去哪个窗口报到？" },
                    { h: "Szeretnék időpontot módosítani.", c: "我想修改预约时间。" },
                    { h: "Meghosszabbítani jöttem a tartózkodási engedélyem.", c: "我来办理居留续签。" },
                    { h: "Itt kell várnom, amíg szólítanak?", c: "是在这等叫号吗？" }
                ]
            },
            {
                name: "居留卡、地址卡与材料",
                list: [
                    { h: "Elvesztettem a kártyámat, újat igényelnék.", c: "卡丢了，想申请补办。" },
                    { h: "Megváltozott a lakcímem, bejelenteni jöttem.", c: "地址变了，来报备。" },
                    { h: "Ez a kártya meddig érvényes?", c: "这张卡有效期到什么时候？" },
                    { h: "Itt vannak a hiánypótolt dokumentumok.", c: "这是补交的材料。" },
                    { h: "Milyen papír hiányzik még?", c: "还缺什么材料？" },
                    { h: "Kérem a munkáltatói igazolást.", c: "请给我工作证明。" },
                    { h: "Kell még ujjnyomatot adnom?", c: "还需要录指纹吗？" },
                    { h: "Mikor kapom meg a határozatot?", c: "我什么时候能拿到决定书？" },
                    { h: "Postán küldik ki a kártyát?", c: "卡是邮寄出的吗？" },
                    { h: "Szeretnék egy igazolást a folyamatban lévő ügyről.", c: "我想要一张证明，说明手续正在办理中。" }
                ]
            },
            {
                name: "进阶沟通",
                list: [
                    { h: "Beszélhetünk angolul?", c: "能说英语吗？" },
                    { h: "Lassabban mondaná, kérem?", c: "能请您说慢点吗？" },
                    { h: "Ezt leírná nekem egy papírra?", c: "能把这个写在纸上给我吗？" },
                    { h: "Nem értem ezt a kifejezést.", c: "我不理解这个词的意思。" }
                ]
            }
        ]
    },
    utility: {
        title: "💡 水电煤气与邮局",
        categories: [
            {
                name: "报数与账单",
                list: [
                    { h: "Szeretném diktálni a vízóra állását.", c: "我想报水表数。" },
                    { h: "Hol tudom befizetni ezt a csekket?", c: "哪里能付这张单子？" },
                    { h: "Nem kaptam meg a gázszámlát.", c: "我没收到煤气账单。" },
                    { h: "Túlfizetésem van, visszakérhetem?", c: "我多付了钱，能退吗？" },
                    { h: "Át szeretném írni a villanyórát.", c: "我想把电表过户。" }
                ]
            },
            {
                name: "邮局与包裹 (Posta)",
                list: [
                    { h: "Csomagot jöttem átvenni, itt az értesítő.", c: "我来取包裹，这是通知单。" },
                    { h: "Szeretnék feladni egy ajánlott levelet.", c: "我想寄一封挂号信。" },
                    { h: "Mikor érkezik meg a csomag Kínába?", c: "包裹什么时候到中国？" }
                ]
            }
        ]
    },
    market: {
        title: "🛒 超市与购物",
        categories: [
            {
                name: "寻找与选购",
                list: [
                    { h: "Hol találom a tejet / rizst?", c: "牛奶/大米在哪里？" },
                    { h: "Szeretnék 20 deka sonkát.", c: "我要200克火腿。" },
                    { h: "Hol van a próbafülke?", c: "试衣间在哪里？" }
                ]
            },
            {
                name: "结账与售后",
                list: [
                    { h: "Kártyával fizetek.", c: "我刷卡支付。" },
                    { h: "Kérek egy zacskót.", c: "请给我一个袋子。" },
                    { h: "Áfás számlát kérek.", c: "我要开公司税号发票。" }
                ]
            }
        ]
    },
    housing: {
        title: "🏠 房东、邻居与维修",
        categories: [
            {
                name: "房东沟通",
                list: [
                    { h: "Elromlott a kazán, nincs fűtés.", c: "锅炉坏了，没暖气。" },
                    { h: "Nincs meleg víz.", c: "没热水。" },
                    { h: "Beázik a fürdőszoba.", c: "浴室漏水了。" },
                    { h: "Átmentem a bérleti díjat.", c: "房租我转过去了。" }
                ]
            }
        ]
    },
    conflict: {
        title: "👊 应对歧视与恶意攻击",
        categories: [
            {
                name: "现场还击",
                list: [
                    { h: "Ne érjen hozzám!", c: "别碰我！" },
                    { h: "Hagyjon békén!", c: "离我远点！" },
                    { h: "Ez rasszizmus. Rendőrt hívok!", c: "这是种族歧视，我要报警！" },
                    { h: "Mi a baja velem?", c: "你对我有什么意见？" },
                    { h: "Felveszem videóra!", c: "我会录像存证！" }
                ]
            }
        ]
    },
    school: {
        title: "🏫 校园与老师沟通",
        categories: [
            {
                name: "日常接送与请假",
                list: [
                    { h: "Hogy érezte magát ma?", c: "孩子今天表现如何？" },
                    { h: "Volt bármilyen konfliktus?", c: "有发生什么冲突吗？" },
                    { h: "Miben tudok segíteni?", c: "我们需要如何配合？" },
                    { h: "Beteg, nem megy ma.", c: "病了，今天不去学校。" }
                ]
            }
        ]
    },
    emergency: {
        title: "🚨 紧急维权与警务",
        categories: [
            {
                name: "警察与事故",
                list: [
                    { h: "Itt vannak az iratok.", c: "这是证件。" },
                    { h: "Nem írok alá semmit.", c: "我不会签任何字。" },
                    { h: "Ön volt a hibás.", c: "是你的错。" },
                    { h: "Hívjunk rendőrt.", c: "报警吧。" }
                ]
            },
            {
                name: "银行挂失",
                list: [
                    { h: "Letiltom a kártyát.", c: "我要挂失卡。" }
                ]
            }
        ]
    },
    shopping_pro: {
        title: "🛒 超市与维权",
        categories: [
            {
                name: "纠纷处理",
                list: [
                    { h: "Kérem a panaszkönyvet!", c: "请给我投诉簿！" },
                    { h: "Ez nem az én hibám.", c: "这不是我的错。" },
                    { h: "Más volt az ár a polcon.", c: "货架价格不对。" },
                    { h: "Visszakérem a pénzt.", c: "我要退款。" }
                ]
            },
            {
                name: "精选肉柜",
                list: [
                    { h: "Darált húst kérek.", c: "我要肉馅。" },
                    { h: "Csont nélkül kérem.", c: "我要去骨的。" }
                ]
            }
        ]
    },
    medical: {
        title: "🏥 医疗确认",
        categories: [
            {
                name: "预约与确认",
                list: [
                    { h: "Időpontot szeretnék.", c: "我想预约时间。" },
                    { h: "Sürgős eset, hamarabb?", c: "很紧急，能快点吗？" },
                    { h: "Allergiás vagyok.", c: "我过敏。" },
                    { h: "Van erről lelet?", c: "有检查报告吗？" }
                ]
            }
        ]
    },
    doctor: {
        title: "🏥 看医生与药店",
        categories: [
            {
                name: "预约与症状",
                list: [
                    { h: "Időpontot kérnék a háziorvoshoz.", c: "我想约一下家庭医生。" },
                    { h: "Nagyon fáj a torkom és lázas vagyok.", c: "嗓子疼且发烧。" },
                    { h: "Fáj a gyomrom napok óta.", c: "胃疼好几天了。" }
                ]
            },
            {
                name: "处方与药店",
                list: [
                    { h: "Tudna felírni egy receptet?", c: "能给我开个处方吗？" },
                    { h: "Hányszor kell bevenni naponta?", c: "每天吃几次？" }
                ]
            }
        ]
    }
};

const proFormulas = [
    { a: "名词 + t", b: "kérek", desc: "最强买单/购物", note: "Kávét kérek (我要咖啡)" },
    { a: "Ez", b: "mennyibe kerül?", desc: "询问价格", note: "指着东西直接问，最快" },
    { a: "Hol van", b: "a 名词?", desc: "万能寻物/问路", note: "Hol van a WC? (厕所在哪？)" },
    { a: "Van", b: "名词?", desc: "确认是否有货", note: "Van szatyor? (有袋子吗？)" },
    { a: "Fizetni", b: "szeretnék", desc: "餐厅结账", note: "对服务员说这句，极地道" },
    { a: "名词 + t", b: "szeretnék", desc: "表达办事需求", note: "Időpontot szeretnék (我想预约)" },
    { a: "Beszél", b: "angolul?", desc: "寻求英语帮助", note: "沟通受阻时的救命稻草" },
    { a: "Lassabban", b: "lehet?", desc: "请求慢点说", note: "非常有礼貌的请求" },
    { a: "Nem", b: "értem", desc: "表达不理解", note: "诚实说不明白" },
    { a: "Fáj", b: "a 部位", desc: "描述身体疼痛", note: "Fáj a fejem (我头疼)" },
    { a: "Ez a busz", b: "megy a ...-ra?", desc: "确认公交方向", note: "上车前问司机" },
    { a: "Szabad", b: "?", desc: "询问许可", note: "想坐别人旁边或进门前问" },
    { a: "Lehet", b: "动作?", desc: "询问“可以...吗”", note: "Lehet kártyával fizetni? (能刷卡吗？)" },
    { a: "Bocsánat,", b: "原因", desc: "万能道歉开头", note: "Bocsánat, kések (抱歉我迟到了)" },
    { a: "Kész", b: "vagyok", desc: "表达“我搞定了”", note: "办完手续或吃完饭时说" },
    { a: "Nincs", b: "名词", desc: "表达“没有/坏了”", note: "Nincs meleg víz (没热水了)" },
    { a: "Mikor", b: "jön a ...?", desc: "询问时间", note: "Mikor jön a futár? (快递几点来？)" },
    { a: "Segíthetek", b: "?", desc: "主动提供帮助", note: "邻居搬东西时说这句" },
    { a: "Persze,", b: "一句肯定", desc: "爽快地答应", note: "Persze, rendben! (当然，没问题！)" },
    { a: "Hát...", b: "半句话", desc: "委婉的拒绝/迟疑", note: "匈牙利人想说不的时候常用开头" }
];

const vocab500Data = [
    {
        cat: "超市",
        list: [
            { h: "Tej", z: "牛奶" },
            { h: "Kenyér", z: "面包" },
            { h: "Tojás", z: "鸡蛋" },
            { h: "Víz (Savas)", z: "有气水(蓝盖)" },
            { h: "Víz (Mentes)", z: "无气水(粉盖)" },
            { h: "Csirke", z: "鸡肉" },
            { h: "Sertés", z: "猪肉" },
            { h: "Marha", z: "牛肉" },
            { h: "Zöldség", z: "蔬菜" },
            { h: "Gyümölcs", z: "水果" },
            { h: "Sajt", z: "奶酪" },
            { h: "Vaj", z: "黄油" },
            { h: "Liszt", z: "面粉" },
            { h: "Cukor", z: "糖" },
            { h: "Só", z: "盐" },
            { h: "Olaj", z: "油" },
            { h: "Rizs", z: "米饭/大米" },
            { h: "Tészta", z: "面条/意面" },
            { h: "Zacskó", z: "袋子" },
            { h: "Akció", z: "打折/促销" },
            { h: "Blokk", z: "收据" },
            { h: "Bankkártya", z: "银行卡" },
            { h: "Készpénz", z: "现金" },
            { h: "Önkiszolgáló", z: "自助结账" }
        ]
    },
    {
        cat: "交通",
        list: [
            { h: "Jegy", z: "车票" },
            { h: "Bérlet", z: "月票/季票" },
            { h: "Megálló", z: "站台" },
            { h: "Átszállás", z: "换乘" },
            { h: "Kijárat", z: "出口" },
            { h: "Bejárat", z: "入口" },
            { h: "Menetrend", z: "时刻表" },
            { h: "Késés", z: "晚点" },
            { h: "Ellenőr", z: "查票员" },
            { h: "Vágány", z: "月台/轨道号" },
            { h: "Villamos", z: "有轨电车" },
            { h: "Metró", z: "地铁" },
            { h: "Busz", z: "公交车" },
            { h: "HÉV", z: "城铁" },
            { h: "Repülőtér", z: "机场" },
            { h: "Pályaudvar", z: "火车站" }
        ]
    },
    {
        cat: "医疗健康",
        list: [
            { h: "Gyógyszertár / Patika", z: "药店" },
            { h: "Recept", z: "处方" },
            { h: "Lázmérő", z: "体温计" },
            { h: "Fájdalomcsillapító", z: "止痛药" },
            { h: "Vitamin", z: "维生素" },
            { h: "Maszk", z: "口罩" },
            { h: "Időpont", z: "预约" },
            { h: "Vérvétel", z: "抽血" },
            { h: "Fogorvos", z: "牙医" },
            { h: "Szemészet", z: "眼科" },
            { h: "Allergia", z: "过敏" },
            { h: "Köhögés", z: "咳嗽" }
        ]
    },
    {
        cat: "居家租房",
        list: [
            { h: "Lakás", z: "公寓/房子" },
            { h: "Bérleti díj", z: "房租" },
            { h: "Rezsi", z: "物业杂费(水电暖)" },
            { h: "Kaució", z: "押金" },
            { h: "Szerződés", z: "合同" },
            { h: "Kulcs", z: "钥匙" },
            { h: "Klíma", z: "空调" },
            { h: "Fűtés", z: "暖气" },
            { h: "Internet", z: "网络" },
            { h: "Mosógép", z: "洗衣机" },
            { h: "Hűtőszekrény", z: "冰箱" },
            { h: "Emelet", z: "楼层" },
            { h: "Lift", z: "电梯" },
            { h: "Szemét", z: "垃圾" }
        ]
    },
    {
        cat: "情绪反馈",
        list: [
            { h: "Boldog", z: "开心的" },
            { h: "Szomorú", z: "难过的" },
            { h: "Fáradt", z: "累的" },
            { h: "Éhes", z: "饿的" },
            { h: "Szomjas", z: "渴的" },
            { h: "Dühös", z: "生气的" },
            { h: "Félek", z: "我害怕" },
            { h: "Izgalmas", z: "兴奋的/刺激的" },
            { h: "Unalmas", z: "无聊的" },
            { h: "Tökéletes!", z: "完美！" },
            { h: "Rendben", z: "好的/没问题" },
            { h: "Sajnálom", z: "很抱歉/遗憾" }
        ]
    },
    {
        cat: "餐厅",
        list: [
            { h: "Étlap", z: "菜单" },
            { h: "Számla", z: "买单/账单" },
            { h: "Pohár", z: "杯子" },
            { h: "Kávé", z: "咖啡" },
            { h: "Tea", z: "茶" },
            { h: "Sör", z: "啤酒" },
            { h: "Bor", z: "葡萄酒" },
            { h: "Üdítő", z: "软饮/汽水" },
            { h: "Csípős", z: "辣的" },
            { h: "Finom", z: "美味的" },
            { h: "Asztal", z: "桌子" },
            { h: "Pincér", z: "服务员" },
            { h: "Foglalás", z: "预订" },
            { h: "Elvitelre", z: "打包外带" },
            { h: "Helyben", z: "在此食用" },
            { h: "Étterem", z: "餐厅" }
        ]
    },
    {
        cat: "生活办事",
        list: [
            { h: "Cím", z: "地址" },
            { h: "Telefonszám", z: "电话号码" },
            { h: "Lakcímkártya", z: "地址卡" },
            { h: "Időpont", z: "预约时间" },
            { h: "Iroda", z: "办公室" },
            { h: "Posta", z: "邮局" },
            { h: "Csomag", z: "包裹" },
            { h: "Bélyegző", z: "印章" },
            { h: "Aláírás", z: "签名" },
            { h: "Nyitva", z: "营业中" },
            { h: "Zárva", z: "已关门" },
            { h: "Ünnepnap", z: "节假日" },
            { h: "Ingyen", z: "免费" },
            { h: "WC / Mosdó", z: "厕所" }
        ]
    },
    {
        cat: "方位寻找",
        list: [
            { h: "Hol van?", z: "在哪里？" },
            { h: "Itt", z: "这里" },
            { h: "Ott", z: "那里" },
            { h: "Balra", z: "左转" },
            { h: "Jobbra", z: "右转" },
            { h: "Egyenesen", z: "直走" },
            { h: "Közel", z: "近" },
            { h: "Messze", z: "远" },
            { h: "Emelet", z: "楼层" },
            { h: "Földszint", z: "一楼/地面层" },
            { h: "Lift", z: "电梯" },
            { h: "Lépcső", z: "楼梯" },
            { h: "Utca", z: "街道" },
            { h: "Tér", z: "广场" }
        ]
    },
    {
        cat: "社交常用",
        list: [
            { h: "Szia!", z: "你好/再见(非正式)" },
            { h: "Jó napot!", z: "你好(正式)" },
            { h: "Jó reggelt!", z: "早上好" },
            { h: "Jó estét!", z: "晚上好" },
            { h: "Jó éjszakát!", z: "晚安" },
            { h: "Köszönöm", z: "谢谢" },
            { h: "Szívesen", z: "不客气" },
            { h: "Bocsánat", z: "抱歉/对不起" },
            { h: "Elnézést", z: "劳驾/打扰一下" },
            { h: "Igen", z: "是" },
            { h: "Nem", z: "不" },
            { h: "Tessék", z: "请/给你(给东西时)" },
            { h: "Nem értem", z: "我不明白" },
            { h: "Beszél angolul?", z: "你会说英语吗？" },
            { h: "Hogy vagy?", z: "你好吗？" },
            { h: "Viszlát!", z: "再见(正式)" }
        ]
    }
];

const emotionData = [
    { 
        level: "⭐⭐⭐⭐⭐", 
        title: "满分肯定 (Absolute Yes)", 
        color: "#10b981",
        list: [
            { h: "Persze!", c: "当然了！(最常用的地道首选)" },
            { h: "Szuper!", c: "超级棒！(听到好消息时)" },
            { h: "Tökéletes!", c: "完美！(事情办妥时)" }
        ]
    },
    { 
        level: "⭐⭐⭐⭐", 
        title: "礼貌确认 (Standard Yes)", 
        color: "#3b82f6",
        list: [
            { h: "Rendben.", c: "好的 / 没问题。" },
            { h: "Értem.", c: "明白了。" },
            { h: "Világos.", c: "清楚了。(很有气势的确认)" }
        ]
    },
    { 
        level: "⭐⭐⭐", 
        title: "中立/一般 (Neutral)", 
        color: "#64748b",
        list: [
            { h: "Meglátjuk.", c: "再说吧 / 看情况。" },
            { h: "Talán.", c: "也许吧。" },
            { h: "Mindegy.", c: "无所谓 / 都可以。" }
        ]
    },
    { 
        level: "⭐⭐", 
        title: "委婉拒绝/犹豫 (Soft No)", 
        color: "#f59e0b",
        list: [
            { h: "Hát...", c: "这个嘛... (匈牙利人拒绝的前奏)" },
            { h: "Sajnos nem.", c: "可惜不行。" },
            { h: "Majd máskor.", c: "下次吧。" }
        ]
    },
    { 
        level: "⭐", 
        title: "直接拒绝 (Hard No)", 
        color: "#ef4444",
        list: [
            { h: "Kizárt dolog.", c: "绝无可能。" },
            { h: "Szó sem lehet róla.", c: "门儿都没有。" }
        ]
    }
];
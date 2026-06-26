const poems = [
    {
        title: "定风波",
        author: "苏轼",
        dynasty: "Song-Dynastie",
        theme: "Gelassenheit",
        mood: "ruhig",
        lines: [
            {
                zh: "莫听穿林打叶声，何妨吟啸且徐行。",
                de: "Höre nicht auf den Regen, der durch den Wald rauscht; geh ruhig weiter, singend und langsam."
            },
            {
                zh: "竹杖芒鞋轻胜马，谁怕？",
                de: "Ein Bambusstab und Strohsandalen sind leichter als ein Pferd; wer sollte sich fürchten?"
            },
            {
                zh: "一蓑烟雨任平生。",
                de: "In einem Regenmantel überlasse ich mein Leben dem Nebel und Regen."
            },
            {
                zh: "回首向来萧瑟处，归去，也无风雨也无晴。",
                de: "Blicke ich zurück und gehe heim, gibt es weder Sturm noch Sonnenschein."
            }
        ],
        grammar: [
            {
                title: "Imperativ ohne Ausrufezeichen",
                text: "'Höre nicht...' und 'geh...' zeigen eine ruhige Aufforderung. Der Imperativ kann im Deutschen sehr direkt sein."
            },
            {
                title: "weder ... noch",
                text: "'weder Sturm noch Sonnenschein' bedeutet: 既没有风雨，也没有晴天. Beide Teile stehen negativ."
            },
            {
                title: "sich fürchten",
                text: "Reflexives Verb: ich fürchte mich, du fürchtest dich. Die Frage 'wer sollte sich fürchten?' klingt nach innerer Stärke."
            }
        ],
        words: [
            { de: "gelassen", zh: "从容的，淡定的", example: "Er bleibt auch im Regen gelassen." },
            { de: "rauschen", zh: "沙沙作响，呼啸", example: "Der Wind rauscht in den Bäumen." },
            { de: "zurückblicken", zh: "回首，回顾", example: "Später blicke ich ruhig darauf zurück." },
            { de: "weder ... noch", zh: "既不……也不……", example: "Es ist weder kalt noch warm." }
        ],
        reflection: "Das Gedicht ist für mich eine Lektion über innere Freiheit: Nicht jedes schlechte Wetter muss ein schlechtes Leben bedeuten."
    },
    {
        title: "静夜思",
        author: "李白",
        dynasty: "Tang-Dynastie",
        theme: "Heimweh",
        mood: "still",
        lines: [
            {
                zh: "床前明月光，疑是地上霜。",
                de: "Vor meinem Bett scheint helles Mondlicht; ich glaube fast, es sei Frost auf dem Boden."
            },
            {
                zh: "举头望明月，低头思故乡。",
                de: "Ich hebe den Kopf und betrachte den hellen Mond; ich senke den Kopf und denke an meine Heimat."
            }
        ],
        grammar: [
            {
                title: "Position: vor + Dativ",
                text: "'vor meinem Bett' nutzt den Dativ, weil es um einen Ort geht: wo? vor meinem Bett."
            },
            {
                title: "Konjunktiv I: es sei",
                text: "'es sei Frost' klingt literarischer als 'es ist Frost' und passt gut zu einer poetischen Vermutung."
            },
            {
                title: "an + Akkusativ denken",
                text: "'an meine Heimat denken': Das Verb 'denken' steht hier mit an + Akkusativ."
            }
        ],
        words: [
            { de: "das Mondlicht", zh: "月光", example: "Das Mondlicht fällt ins Zimmer." },
            { de: "der Frost", zh: "霜", example: "Am Morgen liegt Frost auf dem Gras." },
            { de: "die Heimat", zh: "故乡，家乡", example: "Ich denke oft an meine Heimat." },
            { de: "betrachten", zh: "凝视，观看", example: "Sie betrachtet den Mond lange." }
        ],
        reflection: "Die einfachen Bewegungen, Kopf heben und senken, machen das Heimweh sehr sichtbar."
    },
    {
        title: "春晓",
        author: "孟浩然",
        dynasty: "Tang-Dynastie",
        theme: "Frühling",
        mood: "wach",
        lines: [
            {
                zh: "春眠不觉晓，处处闻啼鸟。",
                de: "Im Frühlingsschlaf bemerke ich den Morgen nicht; überall höre ich Vögel singen."
            },
            {
                zh: "夜来风雨声，花落知多少。",
                de: "In der Nacht kamen Wind und Regen; wer weiß, wie viele Blüten gefallen sind?"
            }
        ],
        grammar: [
            {
                title: "Perfekt mit sein",
                text: "'Blüten sind gefallen' nutzt 'sein', weil 'fallen' eine Bewegung oder Zustandsveränderung beschreibt."
            },
            {
                title: "Indirekte Frage",
                text: "'wie viele Blüten gefallen sind' steht am Ende mit dem Verb 'sind'. Das ist typisch für Nebensätze."
            },
            {
                title: "überall",
                text: "'überall höre ich...' setzt den Ort an den Satzanfang. Danach kommt das Verb direkt auf Position 2."
            }
        ],
        words: [
            { de: "der Frühlingsschlaf", zh: "春眠", example: "Der Frühlingsschlaf ist tief und weich." },
            { de: "bemerken", zh: "察觉", example: "Ich bemerke den Morgen kaum." },
            { de: "die Blüte", zh: "花朵", example: "Viele Blüten liegen auf dem Weg." },
            { de: "gefallen sein", zh: "已经落下", example: "Die Blätter sind gefallen." }
        ],
        reflection: "Der Text zeigt, wie Natur und Zeit weitergehen, auch wenn man noch schläft."
    },
    {
        title: "夜雨寄北",
        author: "李商隐",
        dynasty: "Tang-Dynastie",
        theme: "Sehnsucht",
        mood: "regnerisch",
        lines: [
            { zh: "君问归期未有期，巴山夜雨涨秋池。", de: "Du fragst nach meiner Rückkehr; noch gibt es keinen Termin. In den Ba-Bergen lässt der Nachtregen den Herbstteich steigen." },
            { zh: "何当共剪西窗烛，却话巴山夜雨时。", de: "Wann werden wir gemeinsam am westlichen Fenster die Kerze kürzen und dann von diesem Nachtregen in Ba sprechen?" }
        ],
        grammar: [
            { title: "Frage mit wann", text: "'Wann werden wir...' fragt nach einem zukünftigen Zeitpunkt. Das Verb steht auf Position 2." },
            { title: "noch kein", text: "'noch gibt es keinen Termin' bedeutet: 还没有日期. 'keinen' steht im Akkusativ." },
            { title: "von + Dativ", text: "'von diesem Nachtregen sprechen' nutzt von + Dativ." }
        ],
        words: [
            { de: "die Rückkehr", zh: "归期，回来", example: "Ich warte auf deine Rückkehr." },
            { de: "der Nachtregen", zh: "夜雨", example: "Der Nachtregen klingt leise." },
            { de: "gemeinsam", zh: "共同地", example: "Wir lesen gemeinsam ein Gedicht." },
            { de: "die Kerze", zh: "蜡烛", example: "Die Kerze brennt am Fenster." }
        ],
        reflection: "Die Sehnsucht wird hier nicht laut, sondern sitzt in einer einfachen Frage nach dem Wiedersehen."
    },
    {
        title: "锦瑟",
        author: "李商隐",
        dynasty: "Tang-Dynastie",
        theme: "Erinnerung",
        mood: "rätselhaft",
        lines: [
            { zh: "锦瑟无端五十弦，一弦一柱思华年。", de: "Die prächtige Zither hat grundlos fünfzig Saiten; jede Saite und jeder Steg erinnert mich an blühende Jahre." },
            { zh: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。", de: "Zhuangzi verlor sich am Morgen im Traum vom Schmetterling; der König Wangdi vertraute sein Frühlingsherz dem Kuckuck an." },
            { zh: "沧海月明珠有泪，蓝田日暖玉生烟。", de: "Im blauen Meer glänzt der Mond, und Perlen tragen Tränen; in Lantian wärmt die Sonne Jade, aus der Rauch aufsteigt." },
            { zh: "此情可待成追忆，只是当时已惘然。", de: "Dieses Gefühl musste nicht erst Erinnerung werden; schon damals war es voller Verlorenheit." }
        ],
        grammar: [
            { title: "jede / jeder", text: "'jede Saite und jeder Steg' zeigt Genus: die Saite, der Steg." },
            { title: "sich verlieren", text: "'sich im Traum verlieren' ist reflexiv und bedeutet: 迷失在梦中." },
            { title: "schon damals", text: "'schon damals' verbindet Vergangenheit mit einer Einsicht im Heute." }
        ],
        words: [
            { de: "die Zither", zh: "瑟，古琴类乐器", example: "Die Zither klingt geheimnisvoll." },
            { de: "die Saite", zh: "弦", example: "Eine Saite klingt leise." },
            { de: "die Erinnerung", zh: "回忆", example: "Das Gefühl wird zur Erinnerung." },
            { de: "verloren", zh: "迷惘的，失落的", example: "Er wirkt still und verloren." }
        ],
        reflection: "Dieses Gedicht ist absichtlich schwebend: Es lernt uns, dass nicht jede Erinnerung ganz erklärbar ist."
    },
    {
        title: "无题",
        author: "李商隐",
        dynasty: "Tang-Dynastie",
        theme: "Liebe",
        mood: "zart",
        lines: [
            { zh: "相见时难别亦难，东风无力百花残。", de: "Sich zu begegnen ist schwer, sich zu trennen ebenso; der Ostwind ist kraftlos, und hundert Blumen welken." },
            { zh: "春蚕到死丝方尽，蜡炬成灰泪始干。", de: "Die Frühlingsraupe spinnt bis zum Tod ihren Faden; die Kerze wird erst zu Asche, dann trocknen ihre Tränen." },
            { zh: "晓镜但愁云鬓改，夜吟应觉月光寒。", de: "Am Morgen vor dem Spiegel fürchtet man nur, dass das dunkle Haar sich verändert; beim nächtlichen Dichten spürt man wohl kaltes Mondlicht." },
            { zh: "蓬山此去无多路，青鸟殷勤为探看。", de: "Zum Penglai-Berg ist der Weg von hier nicht weit; der blaue Vogel möge aufmerksam nach ihr sehen." }
        ],
        grammar: [
            { title: "zu + Infinitiv", text: "'sich zu begegnen' und 'sich zu trennen' machen Handlungen zu Subjekten." },
            { title: "ebenso", text: "'ebenso' bedeutet: 同样，也一样." },
            { title: "möge", text: "'möge' ist Konjunktiv und klingt wie ein poetischer Wunsch." }
        ],
        words: [
            { de: "sich begegnen", zh: "相见，相遇", example: "Wir begegnen uns im Frühling." },
            { de: "sich trennen", zh: "分别", example: "Es ist schwer, sich zu trennen." },
            { de: "welken", zh: "凋谢", example: "Die Blumen welken im Wind." },
            { de: "aufmerksam", zh: "殷勤的，留心的", example: "Sie hört aufmerksam zu." }
        ],
        reflection: "Die berühmten Bilder von Seide, Kerze und Tränen zeigen Liebe als Ausdauer und Schmerz zugleich."
    },
    {
        title: "登乐游原",
        author: "李商隐",
        dynasty: "Tang-Dynastie",
        theme: "Vergänglichkeit",
        mood: "abendlich",
        lines: [
            { zh: "向晚意不适，驱车登古原。", de: "Gegen Abend ist mir unwohl zumute; ich fahre hinaus und besteige die alte Ebene." },
            { zh: "夕阳无限好，只是近黄昏。", de: "Die Abendsonne ist unendlich schön, nur ist sie schon nahe an der Dämmerung." }
        ],
        grammar: [
            { title: "mir ist ... zumute", text: "'mir ist unwohl zumute' beschreibt eine innere Stimmung mit Dativ." },
            { title: "nahe an + Dativ", text: "'nahe an der Dämmerung' verwendet an + Dativ." },
            { title: "nur", text: "'nur' kann einen schönen Satz plötzlich einschränken." }
        ],
        words: [
            { de: "gegen Abend", zh: "傍晚时分", example: "Gegen Abend wird der Himmel rot." },
            { de: "unwohl", zh: "不适，不安", example: "Mir ist unwohl zumute." },
            { de: "die Abendsonne", zh: "夕阳", example: "Die Abendsonne ist warm." },
            { de: "die Dämmerung", zh: "黄昏", example: "Die Dämmerung kommt schnell." }
        ],
        reflection: "Schönheit und Ende stehen hier im selben Atemzug."
    },
    {
        title: "将进酒",
        author: "李白",
        dynasty: "Tang-Dynastie",
        theme: "Lebensdrang",
        mood: "rauschhaft",
        lines: [
            { zh: "君不见黄河之水天上来，奔流到海不复回。", de: "Siehst du nicht, wie das Wasser des Gelben Flusses vom Himmel kommt, zum Meer stürzt und nie zurückkehrt?" },
            { zh: "君不见高堂明镜悲白发，朝如青丝暮成雪。", de: "Siehst du nicht im hellen Spiegel der hohen Halle das traurige weiße Haar: am Morgen wie schwarze Seide, am Abend schon Schnee?" },
            { zh: "人生得意须尽欢，莫使金樽空对月。", de: "Wenn das Leben gelingt, soll man die Freude ausschöpfen; lass den goldenen Becher nicht leer dem Mond gegenüberstehen." }
        ],
        grammar: [
            { title: "Siehst du nicht", text: "Die Frageform macht den Satz dringlich und direkt." },
            { title: "wenn", text: "'Wenn das Leben gelingt' leitet einen Nebensatz ein; das Verb steht am Ende." },
            { title: "nicht leer", text: "'nicht leer' negiert hier einen Zustand." }
        ],
        words: [
            { de: "der Fluss", zh: "河流", example: "Der Fluss stürzt zum Meer." },
            { de: "zurückkehren", zh: "返回", example: "Das Wasser kehrt nicht zurück." },
            { de: "ausschöpfen", zh: "尽情享用，充分利用", example: "Man soll die Freude ausschöpfen." },
            { de: "der Becher", zh: "酒杯", example: "Der Becher steht im Mondlicht." }
        ],
        reflection: "Li Bai macht aus Vergänglichkeit keinen leisen Schmerz, sondern einen großen Ruf zum Leben."
    },
    {
        title: "月下独酌",
        author: "李白",
        dynasty: "Tang-Dynastie",
        theme: "Einsamkeit",
        mood: "frei",
        lines: [
            { zh: "花间一壶酒，独酌无相亲。", de: "Zwischen Blumen steht ein Krug Wein; allein trinke ich, ohne vertrauten Menschen." },
            { zh: "举杯邀明月，对影成三人。", de: "Ich hebe den Becher und lade den hellen Mond ein; mit meinem Schatten werden wir zu dritt." },
            { zh: "月既不解饮，影徒随我身。", de: "Der Mond versteht das Trinken nicht, der Schatten folgt nur meinem Körper." },
            { zh: "暂伴月将影，行乐须及春。", de: "Für kurze Zeit nehme ich Mond und Schatten zu Gefährten; Freude muss man im Frühling ergreifen." }
        ],
        grammar: [
            { title: "ohne + Akkusativ", text: "'ohne vertrauten Menschen' verwendet den Akkusativ." },
            { title: "zu dritt", text: "'zu dritt' bedeutet: 三个人一起." },
            { title: "müssen", text: "'Freude muss man ergreifen' klingt wie eine Lebensregel." }
        ],
        words: [
            { de: "der Krug", zh: "壶", example: "Ein Krug Wein steht im Garten." },
            { de: "einladen", zh: "邀请", example: "Ich lade den Mond ein." },
            { de: "der Schatten", zh: "影子", example: "Mein Schatten folgt mir." },
            { de: "der Gefährte", zh: "伙伴", example: "Der Mond wird mein Gefährte." }
        ],
        reflection: "Das Gedicht verwandelt Einsamkeit in Spiel und Freiheit."
    },
    {
        title: "望庐山瀑布",
        author: "李白",
        dynasty: "Tang-Dynastie",
        theme: "Natur",
        mood: "staunend",
        lines: [
            { zh: "日照香炉生紫烟，遥看瀑布挂前川。", de: "Die Sonne bescheint den Weihrauchgipfel, violetter Rauch steigt auf; aus der Ferne sehe ich den Wasserfall vor dem Fluss hängen." },
            { zh: "飞流直下三千尺，疑是银河落九天。", de: "Der fliegende Strom fällt gerade hinab, dreitausend Fuß tief; ich glaube, die Milchstraße stürze aus dem neunten Himmel." }
        ],
        grammar: [
            { title: "aus der Ferne", text: "Diese Wendung beschreibt den Blickpunkt: 从远处." },
            { title: "ich glaube", text: "'ich glaube' leitet eine Vermutung ein." },
            { title: "Konjunktiv: stürze", text: "'stürze' klingt poetisch und indirekt." }
        ],
        words: [
            { de: "der Wasserfall", zh: "瀑布", example: "Der Wasserfall fällt tief hinab." },
            { de: "aus der Ferne", zh: "从远处", example: "Aus der Ferne sehe ich den Berg." },
            { de: "hinabfallen", zh: "向下落", example: "Das Wasser fällt hinab." },
            { de: "die Milchstraße", zh: "银河", example: "Die Milchstraße leuchtet am Himmel." }
        ],
        reflection: "Li Bai übertreibt so groß, dass die Natur plötzlich kosmisch wirkt."
    },
    {
        title: "早发白帝城",
        author: "李白",
        dynasty: "Tang-Dynastie",
        theme: "Reise",
        mood: "leicht",
        lines: [
            { zh: "朝辞白帝彩云间，千里江陵一日还。", de: "Am Morgen verlasse ich Baidi zwischen farbigen Wolken; nach Jiangling, tausend Li entfernt, kehre ich an einem Tag zurück." },
            { zh: "两岸猿声啼不住，轻舟已过万重山。", de: "An beiden Ufern hören die Rufe der Affen nicht auf; das leichte Boot ist schon an unzähligen Bergen vorbeigefahren." }
        ],
        grammar: [
            { title: "Perfekt mit sein", text: "'ist vorbeigefahren' verwendet sein, weil es eine Bewegung ausdrückt." },
            { title: "nicht aufhören", text: "'hören nicht auf' bedeutet: 不停." },
            { title: "schon", text: "'schon' zeigt, dass etwas früher oder schneller passiert als erwartet." }
        ],
        words: [
            { de: "verlassen", zh: "离开", example: "Am Morgen verlasse ich die Stadt." },
            { de: "das Ufer", zh: "岸", example: "An beiden Ufern stehen Bäume." },
            { de: "das Boot", zh: "船", example: "Das Boot fährt schnell." },
            { de: "vorbeifahren", zh: "驶过", example: "Das Boot ist vorbeigefahren." }
        ],
        reflection: "Die Geschwindigkeit des Bootes fühlt sich wie eine befreite Seele an."
    },
    {
        title: "赠汪伦",
        author: "李白",
        dynasty: "Tang-Dynastie",
        theme: "Freundschaft",
        mood: "warm",
        lines: [
            { zh: "李白乘舟将欲行，忽闻岸上踏歌声。", de: "Li Bai steigt ins Boot und will gerade aufbrechen, da hört er plötzlich am Ufer singende Schritte." },
            { zh: "桃花潭水深千尺，不及汪伦送我情。", de: "Das Wasser des Pfirsichblüten-Teichs ist tausend Fuß tief, doch es reicht nicht an Wang Luns Abschiedsgefühl heran." }
        ],
        grammar: [
            { title: "will gerade", text: "'will gerade aufbrechen' bedeutet: 正要出发." },
            { title: "doch", text: "'doch' stellt einen Gegensatz her." },
            { title: "an etwas heranreichen", text: "Diese Wendung bedeutet: 比得上，达到." }
        ],
        words: [
            { de: "aufbrechen", zh: "出发", example: "Ich will gerade aufbrechen." },
            { de: "plötzlich", zh: "忽然", example: "Plötzlich höre ich Musik." },
            { de: "der Teich", zh: "潭，池塘", example: "Der Teich ist tief." },
            { de: "der Abschied", zh: "送别，告别", example: "Der Abschied ist warm." }
        ],
        reflection: "Freundschaft wird hier stärker als die Tiefe des Wassers."
    },
    {
        title: "登鹳雀楼",
        author: "王之涣",
        dynasty: "Tang-Dynastie",
        theme: "Weitblick",
        mood: "klar",
        lines: [
            { zh: "白日依山尽，黄河入海流。", de: "Die weiße Sonne sinkt hinter den Bergen, der Gelbe Fluss strömt ins Meer." },
            { zh: "欲穷千里目，更上一层楼。", de: "Willst du den Blick über tausend Li ausschöpfen, dann steige noch ein Stockwerk höher." }
        ],
        grammar: [
            { title: "wenn ausgelassen", text: "Im Deutschen kann man hier sinngemäß mit 'Willst du...' einen Bedingungssatz bilden." },
            { title: "Komparativ", text: "'höher' ist der Komparativ von 'hoch'." },
            { title: "dann", text: "'dann' verbindet Bedingung und Folge." }
        ],
        words: [
            { de: "sinken", zh: "落下", example: "Die Sonne sinkt hinter den Bergen." },
            { de: "strömen", zh: "流动，奔流", example: "Der Fluss strömt ins Meer." },
            { de: "der Blick", zh: "视野，目光", example: "Der Blick ist weit." },
            { de: "das Stockwerk", zh: "楼层", example: "Ich steige ein Stockwerk höher." }
        ],
        reflection: "Das Gedicht ist fast eine Lernregel: Wenn du mehr sehen willst, musst du höher steigen."
    },
    {
        title: "鹿柴",
        author: "王维",
        dynasty: "Tang-Dynastie",
        theme: "Stille",
        mood: "leer",
        lines: [
            { zh: "空山不见人，但闻人语响。", de: "Im leeren Berg sieht man keinen Menschen, nur hört man menschliche Stimmen widerhallen." },
            { zh: "返景入深林，复照青苔上。", de: "Zurückkehrendes Licht dringt in den tiefen Wald und scheint wieder auf das grüne Moos." }
        ],
        grammar: [
            { title: "man", text: "'man sieht' macht den Satz allgemein und ruhig." },
            { title: "kein", text: "'keinen Menschen' ist die Negation von 'einen Menschen'." },
            { title: "auf + Akkusativ", text: "'auf das Moos' beschreibt die Richtung des Lichts." }
        ],
        words: [
            { de: "leer", zh: "空的", example: "Der Berg ist leer." },
            { de: "widerhallen", zh: "回响", example: "Stimmen hallen im Wald wider." },
            { de: "eindringen", zh: "进入，透入", example: "Licht dringt in den Wald." },
            { de: "das Moos", zh: "苔藓", example: "Das Moos ist grün." }
        ],
        reflection: "Wang Wei zeigt Stille nicht als Nichts, sondern als Raum für kleine Wahrnehmungen."
    },
    {
        title: "相思",
        author: "王维",
        dynasty: "Tang-Dynastie",
        theme: "Sehnsucht",
        mood: "zart",
        lines: [
            { zh: "红豆生南国，春来发几枝。", de: "Rote Bohnen wachsen im südlichen Land; wenn der Frühling kommt, treiben sie einige Zweige." },
            { zh: "愿君多采撷，此物最相思。", de: "Ich wünsche, dass du viele davon pflückst; dieses Ding trägt die größte Sehnsucht." }
        ],
        grammar: [
            { title: "wenn", text: "'wenn der Frühling kommt' ist ein Nebensatz mit Verb am Ende." },
            { title: "wünschen", text: "'ich wünsche, dass...' leitet einen dass-Satz ein." },
            { title: "Superlativ", text: "'die größte Sehnsucht' ist eine Superlativform." }
        ],
        words: [
            { de: "wachsen", zh: "生长", example: "Rote Bohnen wachsen im Süden." },
            { de: "der Zweig", zh: "枝条", example: "Ein Zweig treibt im Frühling." },
            { de: "pflücken", zh: "采摘", example: "Sie pflückt rote Bohnen." },
            { de: "die Sehnsucht", zh: "相思，思念", example: "Das Gedicht trägt Sehnsucht." }
        ],
        reflection: "Ein kleines Ding wird zum Träger eines großen Gefühls."
    },
    {
        title: "山居秋暝",
        author: "王维",
        dynasty: "Tang-Dynastie",
        theme: "Bergleben",
        mood: "frisch",
        lines: [
            { zh: "空山新雨后，天气晚来秋。", de: "Im leeren Berg, nach frischem Regen, wird die Abendluft herbstlich." },
            { zh: "明月松间照，清泉石上流。", de: "Der helle Mond scheint zwischen Kiefern, die klare Quelle fließt über Steine." },
            { zh: "竹喧归浣女，莲动下渔舟。", de: "Im Bambus wird es laut: Waschende Frauen kehren heim; Lotosblätter bewegen sich, ein Fischerboot fährt hinab." },
            { zh: "随意春芳歇，王孙自可留。", de: "Mag die Frühlingsblüte ruhig vergehen; hier kann der edle Wanderer von selbst bleiben." }
        ],
        grammar: [
            { title: "nach + Dativ", text: "'nach frischem Regen' verwendet Dativ." },
            { title: "zwischen + Dativ", text: "'zwischen Kiefern' beschreibt einen Ort." },
            { title: "mögen", text: "'mag ... vergehen' klingt wie ein gelassener Einwand." }
        ],
        words: [
            { de: "herbstlich", zh: "秋天般的", example: "Die Abendluft wird herbstlich." },
            { de: "die Kiefer", zh: "松树", example: "Der Mond scheint zwischen Kiefern." },
            { de: "die Quelle", zh: "泉水", example: "Die Quelle fließt über Steine." },
            { de: "vergehen", zh: "逝去，凋谢", example: "Die Frühlingsblüte vergeht." }
        ],
        reflection: "Dieses Gedicht ist wie ein ruhiger Ort, an dem sogar Bewegung still wirkt."
    },
    {
        title: "望岳",
        author: "杜甫",
        dynasty: "Tang-Dynastie",
        theme: "Erhabenheit",
        mood: "aufsteigend",
        lines: [
            { zh: "岱宗夫如何？齐鲁青未了。", de: "Wie ist der große Taishan? Über Qi und Lu reicht sein Grün endlos weiter." },
            { zh: "造化钟神秀，阴阳割昏晓。", de: "Die Schöpfung sammelt dort göttliche Schönheit; Licht und Schatten teilen Morgen und Abend." },
            { zh: "荡胸生曾云，决眦入归鸟。", de: "Schichtwolken weiten die Brust; mit angestrengtem Blick verfolge ich heimkehrende Vögel." },
            { zh: "会当凌绝顶，一览众山小。", de: "Eines Tages werde ich den höchsten Gipfel erklimmen und mit einem Blick alle Berge klein sehen." }
        ],
        grammar: [
            { title: "werden + Infinitiv", text: "'werde ... erklimmen' beschreibt Zukunft." },
            { title: "mit + Dativ", text: "'mit einem Blick' nutzt Dativ." },
            { title: "Adjektiv am Ende", text: "'Berge klein sehen' beschreibt das Ergebnis der Wahrnehmung." }
        ],
        words: [
            { de: "endlos", zh: "无尽的", example: "Das Grün reicht endlos weiter." },
            { de: "die Schöpfung", zh: "造化", example: "Die Schöpfung sammelt Schönheit." },
            { de: "der Gipfel", zh: "山顶", example: "Ich erklimme den Gipfel." },
            { de: "erklimmen", zh: "攀登", example: "Wir erklimmen den Berg." }
        ],
        reflection: "Du Fu verbindet Naturgröße mit dem Wunsch, den eigenen Blick zu erhöhen."
    },
    {
        title: "春望",
        author: "杜甫",
        dynasty: "Tang-Dynastie",
        theme: "Krieg",
        mood: "schwer",
        lines: [
            { zh: "国破山河在，城春草木深。", de: "Das Reich ist zerbrochen, doch Berge und Flüsse bleiben; in der Stadt ist Frühling, Gras und Bäume stehen tief." },
            { zh: "感时花溅泪，恨别鸟惊心。", de: "Von der Zeit bewegt, lassen Blumen Tränen spritzen; aus Trennungsschmerz erschrecken Vögel das Herz." },
            { zh: "烽火连三月，家书抵万金。", de: "Kriegsfeuer dauern schon drei Monate; ein Brief von zu Hause ist zehntausend Goldstücke wert." },
            { zh: "白头搔更短，浑欲不胜簪。", de: "Ich kratze mein weißes Haar, es wird noch kürzer; bald kann es die Haarnadel kaum noch halten." }
        ],
        grammar: [
            { title: "doch", text: "'doch' zeigt den Gegensatz zwischen Zerstörung und bleibender Natur." },
            { title: "wert sein", text: "'ist ... wert' verlangt im Deutschen keinen Artikel vor dem Wertausdruck." },
            { title: "kaum noch", text: "'kaum noch' bedeutet: 几乎不再." }
        ],
        words: [
            { de: "zerbrochen", zh: "破碎的", example: "Das Reich ist zerbrochen." },
            { de: "der Trennungsschmerz", zh: "离别之痛", example: "Der Trennungsschmerz ist tief." },
            { de: "der Brief", zh: "信", example: "Ein Brief von zu Hause ist kostbar." },
            { de: "kaum noch", zh: "几乎不再", example: "Ich kann kaum noch schlafen." }
        ],
        reflection: "Der Frühling wird nicht hell, sondern macht den Schmerz der zerstörten Welt noch sichtbarer."
    },
    {
        title: "江雪",
        author: "柳宗元",
        dynasty: "Tang-Dynastie",
        theme: "Einsamkeit",
        mood: "kalt",
        lines: [
            { zh: "千山鸟飞绝，万径人踪灭。", de: "Über tausend Bergen ist kein fliegender Vogel mehr; auf zehntausend Wegen sind Menschenspuren verschwunden." },
            { zh: "孤舟蓑笠翁，独钓寒江雪。", de: "In einem einsamen Boot sitzt ein alter Mann mit Regenmantel und Hut; allein angelt er im Schnee des kalten Flusses." }
        ],
        grammar: [
            { title: "kein ... mehr", text: "'kein Vogel mehr' bedeutet: 不再有鸟." },
            { title: "Partizip II", text: "'verschwunden' beschreibt den Zustand nach dem Verschwinden." },
            { title: "allein", text: "'allein' kann sowohl einsam als auch selbstständig klingen." }
        ],
        words: [
            { de: "die Spur", zh: "踪迹", example: "Die Spuren sind verschwunden." },
            { de: "verschwinden", zh: "消失", example: "Die Menschen verschwinden im Schnee." },
            { de: "einsam", zh: "孤独的", example: "Ein einsames Boot liegt im Fluss." },
            { de: "angeln", zh: "钓鱼", example: "Der alte Mann angelt allein." }
        ],
        reflection: "Die Welt ist fast ausgelöscht, und gerade darin erscheint eine unbeugsame Einsamkeit."
    },
    {
        title: "枫桥夜泊",
        author: "张继",
        dynasty: "Tang-Dynastie",
        theme: "Reisenacht",
        mood: "melancholisch",
        lines: [
            { zh: "月落乌啼霜满天，江枫渔火对愁眠。", de: "Der Mond sinkt, Krähen rufen, Frost füllt den Himmel; Ahorn am Fluss und Fischerlichter stehen meinem sorgenvollen Schlaf gegenüber." },
            { zh: "姑苏城外寒山寺，夜半钟声到客船。", de: "Vom Hanshan-Tempel außerhalb der Stadt Gusu erreicht um Mitternacht der Glockenklang das Boot des Reisenden." }
        ],
        grammar: [
            { title: "Genitiv mit des", text: "'das Boot des Reisenden' zeigt Besitz oder Zugehörigkeit." },
            { title: "außerhalb + Genitiv", text: "'außerhalb der Stadt' verwendet den Genitiv." },
            { title: "erreichen", text: "'der Klang erreicht das Boot' ist transitiv und braucht Akkusativ." }
        ],
        words: [
            { de: "die Krähe", zh: "乌鸦", example: "Krähen rufen in der Nacht." },
            { de: "sorgenvoll", zh: "忧愁的", example: "Sein Schlaf ist sorgenvoll." },
            { de: "die Mitternacht", zh: "半夜", example: "Um Mitternacht klingt eine Glocke." },
            { de: "der Glockenklang", zh: "钟声", example: "Der Glockenklang erreicht das Boot." }
        ],
        reflection: "Das Gedicht ist fast ganz Klang und Kälte: eine Nacht, die man hört."
    },
    {
        title: "游子吟",
        author: "孟郊",
        dynasty: "Tang-Dynastie",
        theme: "Mutterliebe",
        mood: "dankbar",
        lines: [
            { zh: "慈母手中线，游子身上衣。", de: "Der Faden in der Hand der gütigen Mutter wird zum Kleid am Körper des reisenden Sohnes." },
            { zh: "临行密密缝，意恐迟迟归。", de: "Vor der Abreise näht sie Stich für Stich, aus Sorge, er könne spät zurückkehren." },
            { zh: "谁言寸草心，报得三春晖。", de: "Wer sagt, das Herz eines kleinen Grases könne den Glanz von drei Frühlingsmonaten vergelten?" }
        ],
        grammar: [
            { title: "aus Sorge", text: "'aus Sorge' erklärt den Grund einer Handlung." },
            { title: "Konjunktiv: könne", text: "'könne' macht den Satz indirekt und fragend." },
            { title: "wer sagt", text: "Eine rhetorische Frage stellt keine echte Frage, sondern betont eine Aussage." }
        ],
        words: [
            { de: "der Faden", zh: "线", example: "Der Faden liegt in ihrer Hand." },
            { de: "nähen", zh: "缝", example: "Die Mutter näht ein Kleid." },
            { de: "die Sorge", zh: "担心", example: "Aus Sorge näht sie langsam." },
            { de: "vergelten", zh: "报答", example: "Liebe kann man kaum vergelten." }
        ],
        reflection: "Die Liebe der Mutter wird durch eine kleine, genaue Handlung sichtbar."
    },
    {
        title: "凉州词",
        author: "王翰",
        dynasty: "Tang-Dynastie",
        theme: "Grenze",
        mood: "kühn",
        lines: [
            { zh: "葡萄美酒夜光杯，欲饮琵琶马上催。", de: "Traubenwein glänzt im leuchtenden Becher; kaum will man trinken, mahnt die Pipa schon vom Pferd." },
            { zh: "醉卧沙场君莫笑，古来征战几人回。", de: "Lach nicht, wenn ich betrunken auf dem Schlachtfeld liege; seit alten Zeiten, wie viele kehrten aus Kriegen zurück?" }
        ],
        grammar: [
            { title: "wenn", text: "'wenn ich ... liege' stellt eine Situation vor." },
            { title: "Imperativ", text: "'Lach nicht' ist ein negativer Imperativ." },
            { title: "seit + Dativ", text: "'seit alten Zeiten' verwendet den Dativ Plural." }
        ],
        words: [
            { de: "der Traubenwein", zh: "葡萄酒", example: "Der Traubenwein glänzt." },
            { de: "mahnen", zh: "催促，提醒", example: "Die Musik mahnt zum Aufbruch." },
            { de: "das Schlachtfeld", zh: "沙场，战场", example: "Er liegt auf dem Schlachtfeld." },
            { de: "zurückkehren", zh: "返回", example: "Nur wenige kehren zurück." }
        ],
        reflection: "Der Trinkspruch klingt mutig, aber darunter liegt die Härte des Krieges."
    },
    {
        title: "出塞",
        author: "王昌龄",
        dynasty: "Tang-Dynastie",
        theme: "Grenze",
        mood: "ernst",
        lines: [
            { zh: "秦时明月汉时关，万里长征人未还。", de: "Der helle Mond aus Qin-Zeiten, die Pässe aus Han-Zeiten; von langen Feldzügen über zehntausend Li kehren Menschen noch nicht heim." },
            { zh: "但使龙城飞将在，不教胡马度阴山。", de: "Wenn nur der fliegende General von Longcheng noch da wäre, ließe er die feindlichen Pferde nicht über den Yinshan ziehen." }
        ],
        grammar: [
            { title: "wenn nur", text: "'wenn nur...' drückt einen starken Wunsch aus." },
            { title: "Konjunktiv II", text: "'wäre' und 'ließe' zeigen eine gedachte Möglichkeit." },
            { title: "nicht ... ziehen lassen", text: "Die Konstruktion bedeutet: 不让……越过." }
        ],
        words: [
            { de: "der Pass", zh: "关塞", example: "Der Pass liegt im Norden." },
            { de: "der Feldzug", zh: "远征，征战", example: "Der Feldzug dauert lange." },
            { de: "feindlich", zh: "敌方的", example: "Feindliche Pferde ziehen nach Süden." },
            { de: "ziehen", zh: "行进，越过", example: "Sie ziehen über den Berg." }
        ],
        reflection: "Das Gedicht denkt an Helden, aber eigentlich spricht es von Menschen, die nicht heimkehren."
    },
    {
        title: "赋得古原草送别",
        author: "白居易",
        dynasty: "Tang-Dynastie",
        theme: "Abschied",
        mood: "lebendig",
        lines: [
            { zh: "离离原上草，一岁一枯荣。", de: "Dicht wächst das Gras auf der alten Ebene; jedes Jahr welkt es und wird wieder grün." },
            { zh: "野火烧不尽，春风吹又生。", de: "Wildes Feuer kann es nicht völlig verbrennen; der Frühlingswind bläst, und es wächst wieder." },
            { zh: "远芳侵古道，晴翠接荒城。", de: "Ferne Düfte dringen auf den alten Weg, helles Grün reicht bis zur verlassenen Stadt." },
            { zh: "又送王孙去，萋萋满别情。", de: "Wieder geleite ich einen edlen Freund fort; üppiges Gras ist voller Abschiedsgefühl." }
        ],
        grammar: [
            { title: "jedes Jahr", text: "'jedes Jahr' zeigt Wiederholung." },
            { title: "nicht völlig", text: "'nicht völlig verbrennen' bedeutet: nicht bis zum Ende zerstören." },
            { title: "bis zu + Dativ", text: "'bis zur Stadt' verwendet zu + Dativ." }
        ],
        words: [
            { de: "welken", zh: "枯萎", example: "Das Gras welkt im Herbst." },
            { de: "wieder", zh: "又，再", example: "Es wächst wieder." },
            { de: "verlassen", zh: "荒废的，离开的", example: "Die Stadt ist verlassen." },
            { de: "geleiten", zh: "送别，陪送", example: "Ich geleite den Freund fort." }
        ],
        reflection: "Das Gras macht Abschied weniger endgültig: Es kommt immer wieder."
    },
    {
        title: "泊秦淮",
        author: "杜牧",
        dynasty: "Tang-Dynastie",
        theme: "Geschichte",
        mood: "kritisch",
        lines: [
            { zh: "烟笼寒水月笼沙，夜泊秦淮近酒家。", de: "Nebel hüllt kaltes Wasser ein, Mondlicht hüllt den Sand; nachts ankere ich am Qinhuai-Fluss nahe bei Weinhäusern." },
            { zh: "商女不知亡国恨，隔江犹唱后庭花。", de: "Die Sängerinnen kennen den Schmerz des verlorenen Reiches nicht; jenseits des Flusses singen sie noch immer 'Blumen im Hinterhof'." }
        ],
        grammar: [
            { title: "nahe bei + Dativ", text: "'nahe bei Weinhäusern' beschreibt einen Ort." },
            { title: "jenseits + Genitiv", text: "'jenseits des Flusses' verwendet den Genitiv." },
            { title: "noch immer", text: "'noch immer' bedeutet: 仍然，还在." }
        ],
        words: [
            { de: "einhüllen", zh: "笼罩", example: "Nebel hüllt das Wasser ein." },
            { de: "ankern", zh: "停泊", example: "Das Boot ankert nachts." },
            { de: "jenseits", zh: "在……另一边", example: "Jenseits des Flusses hört man Musik." },
            { de: "das Reich", zh: "国家，王朝", example: "Das Reich ist verloren." }
        ],
        reflection: "Die schöne Nacht wird zu einer Frage nach Erinnerung und Verantwortung."
    }
];

const dictionaryEntries = [
    { term: "nicht", forms: ["nicht"], type: "Negationswort", zh: "不，否定", note: "常否定动词、形容词或整句", example: "Höre nicht auf den Regen." },
    { term: "auf", forms: ["auf"], type: "Präposition", zh: "在……上；对……；听从", note: "auf + Akkusativ/Dativ; auf etwas hören = 听从某事", example: "Höre nicht auf den Regen." },
    { term: "der", forms: ["den", "dem", "die", "das"], type: "bestimmter Artikel", zh: "定冠词：这个/那个", note: "会随性、数、格变化: der, die, das, den, dem", example: "Der Mond scheint. Ich sehe den Mond." },
    { term: "ein", forms: ["eine", "einen", "einem", "einer"], type: "unbestimmter Artikel", zh: "不定冠词：一个", note: "会随性、数、格变化", example: "Ein Bambusstab ist leichter." },
    { term: "und", forms: ["und"], type: "Konjunktion", zh: "和，并且", note: "连接同等成分，不改变语序", example: "Wind und Regen kamen in der Nacht." },
    { term: "als", forms: ["als"], type: "Vergleichswort", zh: "比，作为", note: "比较级常用: leichter als ...", example: "Leichter als ein Pferd." },
    { term: "wer", forms: ["wer"], type: "Fragepronomen", zh: "谁", note: "用于提问或诗意反问", example: "Wer sollte sich fürchten?" },
    { term: "sollen", forms: ["sollte", "soll"], type: "Modalverb", zh: "应该；会，竟然", note: "sollte 可表示委婉、假设或反问", example: "Wer sollte sich fürchten?" },
    { term: "sich", forms: ["sich", "mich", "dich"], type: "Reflexivpronomen", zh: "自己，反身代词", note: "用于 sich fürchten, sich erinnern 等反身动词", example: "Er fürchtet sich nicht." },
    { term: "ich", forms: ["ich"], type: "Personalpronomen", zh: "我", note: "第一人称单数主格", example: "Ich denke an meine Heimat." },
    { term: "mein", forms: ["meine", "meinem", "meinen"], type: "Possessivartikel", zh: "我的", note: "会随名词性、数、格变化", example: "Mein Leben. Meine Heimat." },
    { term: "es", forms: ["es"], type: "Pronomen", zh: "它；形式主语", note: "es gibt = 有，存在", example: "Es gibt weder Sturm noch Sonnenschein." },
    { term: "geben", forms: ["gibt"], type: "Verb", zh: "给；有", note: "es gibt + Akkusativ = 有……", example: "Es gibt weder Sturm noch Sonnenschein." },
    { term: "vor", forms: ["vor"], type: "Präposition", zh: "在……前面；之前", note: "地点用 Dativ: vor meinem Bett", example: "Vor meinem Bett scheint Mondlicht." },
    { term: "in", forms: ["in", "im"], type: "Präposition", zh: "在……里；进入", note: "im = in dem; 地点常用 Dativ", example: "Im Frühlingsschlaf bemerke ich den Morgen nicht." },
    { term: "fast", forms: ["fast"], type: "Adverb", zh: "几乎，差不多", note: "ich glaube fast = 我几乎以为", example: "Ich glaube fast, es sei Frost." },
    { term: "sein", forms: ["sei", "sind", "ist"], type: "Verb", zh: "是；存在", note: "sei 是 Konjunktiv I；sind 是复数/您形式", example: "Es sei Frost. Blüten sind gefallen." },
    { term: "wie", forms: ["wie"], type: "Fragewort", zh: "如何；多么；像", note: "wie viele = 多少", example: "Wie viele Blüten sind gefallen?" },
    { term: "viel", forms: ["viele", "vielen"], type: "Mengenwort", zh: "许多", note: "wie viele = 多少个", example: "Viele Blüten liegen auf dem Weg." },
    { term: "hören", forms: ["höre", "hört", "höre"], type: "Verb", zh: "听", note: "auf etwas hören = 听从、留意某事", example: "Höre nicht auf den Regen." },
    { term: "regen", forms: ["regen"], type: "Nomen, maskulin", zh: "雨", note: "der Regen", example: "Der Regen rauscht im Wald." },
    { term: "wald", forms: ["wald"], type: "Nomen, maskulin", zh: "森林", note: "der Wald; im Wald = 在森林里", example: "Der Wind geht durch den Wald." },
    { term: "rauschen", forms: ["rauscht"], type: "Verb", zh: "沙沙作响，呼啸", note: "常用于风、水、树叶的声音", example: "Der Wind rauscht in den Bäumen." },
    { term: "gehen", forms: ["geh", "gehe", "gehen", "geht"], type: "Verb", zh: "走，去", note: "geh = Imperativ du-Form", example: "Geh ruhig weiter." },
    { term: "ruhig", forms: ["ruhig"], type: "Adjektiv/Adverb", zh: "安静的；平静地", note: "既可形容人，也可修饰动作", example: "Er bleibt ruhig." },
    { term: "weiter", forms: ["weiter"], type: "Adverb", zh: "继续，向前", note: "weitergehen = 继续走", example: "Sie geht langsam weiter." },
    { term: "langsam", forms: ["langsam"], type: "Adjektiv/Adverb", zh: "慢的；慢慢地", note: "修饰动词时不用变化词尾", example: "Ich lese langsam." },
    { term: "bambusstab", forms: ["bambusstab"], type: "Nomen, maskulin", zh: "竹杖", note: "der Bambusstab", example: "Ein Bambusstab ist leicht." },
    { term: "strohsandalen", forms: ["strohsandalen"], type: "Nomen, Plural", zh: "草鞋", note: "复数形式", example: "Strohsandalen sind leicht." },
    { term: "leicht", forms: ["leichter"], type: "Adjektiv", zh: "轻的；容易的", note: "leichter = 比较级，更轻", example: "Das ist leichter als ein Pferd." },
    { term: "pferd", forms: ["pferd"], type: "Nomen, neutral", zh: "马", note: "das Pferd", example: "Das Pferd läuft schnell." },
    { term: "fürchten", forms: ["fürchten", "fürchte", "fürchtest"], type: "reflexives Verb", zh: "害怕", note: "sich fürchten = 感到害怕", example: "Wer sollte sich fürchten?" },
    { term: "regenmantel", forms: ["regenmantel"], type: "Nomen, maskulin", zh: "雨衣，蓑衣", note: "der Regenmantel", example: "Er trägt einen Regenmantel." },
    { term: "überlassen", forms: ["überlasse", "überlässt"], type: "Verb", zh: "交给，听任", note: "jemandem etwas überlassen", example: "Ich überlasse es dem Regen." },
    { term: "leben", forms: ["leben"], type: "Nomen/Verb", zh: "生命；生活；活着", note: "das Leben = 生活/生命", example: "Mein Leben ist ruhig." },
    { term: "nebel", forms: ["nebel"], type: "Nomen, maskulin", zh: "雾", note: "der Nebel", example: "Der Nebel liegt über dem See." },
    { term: "zurückblicken", forms: ["zurück", "zurückblicke", "zurückblickt"], type: "Verb", zh: "回首，回顾", note: "可分动词: ich blicke zurück", example: "Ich blicke ruhig zurück." },
    { term: "heim", forms: ["heim"], type: "Adverb", zh: "回家", note: "heimgehen = 回家", example: "Ich gehe heim." },
    { term: "weder", forms: ["weder"], type: "Konjunktion", zh: "既不", note: "weder ... noch = 既不……也不……", example: "Es gibt weder Sturm noch Sonnenschein." },
    { term: "noch", forms: ["noch"], type: "Konjunktion/Adverb", zh: "也不；还", note: "在 weder ... noch 中表示“也不”", example: "Weder kalt noch warm." },
    { term: "sturm", forms: ["sturm"], type: "Nomen, maskulin", zh: "暴风雨", note: "der Sturm", example: "Der Sturm ist vorbei." },
    { term: "sonnenschein", forms: ["sonnenschein"], type: "Nomen, maskulin", zh: "阳光", note: "der Sonnenschein", example: "Nach dem Regen kommt Sonnenschein." },
    { term: "bett", forms: ["bett"], type: "Nomen, neutral", zh: "床", note: "das Bett; vor meinem Bett = 在我的床前", example: "Vor meinem Bett ist Licht." },
    { term: "scheinen", forms: ["scheint"], type: "Verb", zh: "照耀；似乎", note: "hell scheinen = 明亮地照着", example: "Der Mond scheint hell." },
    { term: "hell", forms: ["helles", "hellen"], type: "Adjektiv", zh: "明亮的", note: "helles Mondlicht = 明亮的月光", example: "Helles Licht fällt ins Zimmer." },
    { term: "mondlicht", forms: ["mondlicht"], type: "Nomen, neutral", zh: "月光", note: "das Mondlicht", example: "Das Mondlicht fällt ins Zimmer." },
    { term: "glauben", forms: ["glaube"], type: "Verb", zh: "相信，以为", note: "ich glaube fast = 我几乎以为", example: "Ich glaube, es ist Frost." },
    { term: "frost", forms: ["frost"], type: "Nomen, maskulin", zh: "霜", note: "der Frost", example: "Frost liegt auf dem Boden." },
    { term: "boden", forms: ["boden"], type: "Nomen, maskulin", zh: "地面", note: "auf dem Boden = 在地上", example: "Die Blüten liegen auf dem Boden." },
    { term: "heben", forms: ["hebe"], type: "Verb", zh: "抬起，举起", note: "den Kopf heben", example: "Ich hebe den Kopf." },
    { term: "kopf", forms: ["kopf"], type: "Nomen, maskulin", zh: "头", note: "der Kopf", example: "Sie senkt den Kopf." },
    { term: "betrachten", forms: ["betrachte"], type: "Verb", zh: "观看，凝视", note: "比 sehen 更有“细看”的感觉", example: "Ich betrachte den Mond." },
    { term: "mond", forms: ["mond"], type: "Nomen, maskulin", zh: "月亮", note: "der Mond", example: "Der Mond ist hell." },
    { term: "senken", forms: ["senke"], type: "Verb", zh: "低下，降下", note: "den Kopf senken", example: "Ich senke den Kopf." },
    { term: "denken", forms: ["denke"], type: "Verb", zh: "想，思念", note: "an + Akkusativ denken", example: "Ich denke an meine Heimat." },
    { term: "heimat", forms: ["heimat"], type: "Nomen, feminin", zh: "故乡，家乡", note: "die Heimat; an meine Heimat", example: "Ich denke an meine Heimat." },
    { term: "Frühlingsschlaf", forms: ["Frühlingsschlaf"], type: "Nomen, maskulin", zh: "春眠", note: "诗意合成词", example: "Im Frühlingsschlaf bemerke ich den Morgen nicht." },
    { term: "bemerken", forms: ["bemerke"], type: "Verb", zh: "察觉，注意到", note: "etwas bemerken", example: "Ich bemerke den Morgen kaum." },
    { term: "morgen", forms: ["morgen"], type: "Nomen, maskulin", zh: "早晨", note: "der Morgen", example: "Der Morgen ist still." },
    { term: "überall", forms: ["überall"], type: "Adverb", zh: "到处", note: "放在句首时，动词仍在第二位", example: "Überall höre ich Vögel." },
    { term: "vogel", forms: ["vögel"], type: "Nomen, maskulin", zh: "鸟", note: "der Vogel; die Vögel", example: "Vögel singen im Frühling." },
    { term: "singen", forms: ["singen"], type: "Verb", zh: "唱，鸣叫", note: "Vögel singen = 鸟鸣", example: "Die Vögel singen." },
    { term: "nacht", forms: ["nacht"], type: "Nomen, feminin", zh: "夜晚", note: "in der Nacht", example: "In der Nacht kam Regen." },
    { term: "kommen", forms: ["kamen"], type: "Verb", zh: "来", note: "kamen = Präteritum, 过去式", example: "Wind und Regen kamen in der Nacht." },
    { term: "wind", forms: ["wind"], type: "Nomen, maskulin", zh: "风", note: "der Wind", example: "Der Wind ist kalt." },
    { term: "wissen", forms: ["weiß"], type: "Verb", zh: "知道", note: "wer weiß = 谁知道/不知道呢", example: "Wer weiß, wie viele gefallen sind?" },
    { term: "Blüte", forms: ["Blüten"], type: "Nomen, feminin", zh: "花朵", note: "die Blüte; die Blüten", example: "Viele Blüten sind gefallen." },
    { term: "fallen", forms: ["gefallen"], type: "Verb", zh: "落下", note: "Perfekt 常用 sein: ist/sind gefallen", example: "Die Blüten sind gefallen." }
];

const dictionary = new Map();

dictionaryEntries.forEach((entry) => {
    const searchable = [entry.term, ...(entry.forms || [])];
    searchable.forEach((form) => dictionary.set(normalizeWord(form), entry));
});

const poemSelect = document.getElementById("poemSelect");
const randomBtn = document.getElementById("randomBtn");
const poemTitle = document.getElementById("poemTitle");
const poemAuthor = document.getElementById("poemAuthor");
const poemDynasty = document.getElementById("poemDynasty");
const poemTheme = document.getElementById("poemTheme");
const moodBadge = document.getElementById("moodBadge");
const lineTable = document.getElementById("lineTable");
const grammarPanel = document.getElementById("grammarPanel");
const wordsPanel = document.getElementById("wordsPanel");
const reflectionPanel = document.getElementById("reflectionPanel");
const flashcardWord = document.getElementById("flashcardWord");
const flashcardAnswer = document.getElementById("flashcardAnswer");
const flipCardBtn = document.getElementById("flipCardBtn");
const notesInput = document.getElementById("notesInput");
const saveStatus = document.getElementById("saveStatus");
const lookupInput = document.getElementById("lookupInput");
const lookupBtn = document.getElementById("lookupBtn");
const lookupResult = document.getElementById("lookupResult");

let currentPoemIndex = 0;
let currentWordIndex = 0;
let cardIsFlipped = false;

function createOption(poem, index) {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${poem.title} · ${poem.author}`;
    return option;
}

function renderPoem(index) {
    const poem = poems[index];
    currentPoemIndex = index;
    currentWordIndex = 0;
    cardIsFlipped = false;

    poemSelect.value = index;
    poemTitle.textContent = poem.title;
    poemAuthor.textContent = poem.author;
    poemDynasty.textContent = poem.dynasty;
    poemTheme.textContent = poem.theme;
    moodBadge.textContent = poem.mood;

    lineTable.innerHTML = "";
    poem.lines.forEach((line) => {
        const row = document.createElement("article");
        row.className = "poem-line";
        row.innerHTML = `
            <p class="chinese">${line.zh}</p>
            <p class="german">${makeLookupText(line.de)}</p>
        `;
        lineTable.appendChild(row);
    });

    grammarPanel.innerHTML = poem.grammar.map((item) => `
        <article class="study-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join("");

    wordsPanel.innerHTML = poem.words.map((word) => `
        <article class="word-card">
            <h3>${word.de}</h3>
            <p>${word.zh}</p>
            <p>${word.example}</p>
        </article>
    `).join("");

    reflectionPanel.innerHTML = `
        <article class="study-card">
            <h3>Persönliche Lesart</h3>
            <p>${poem.reflection}</p>
        </article>
    `;

    renderFlashcard();
    loadNotes();
    clearLookup();
}

function makeLookupText(text) {
    return text.split(/(\s+)/).map((part) => {
        if (/^\s+$/.test(part)) {
            return part;
        }

        const match = part.match(/^([^A-Za-zÄÖÜäöüß]*)([A-Za-zÄÖÜäöüß]+)([^A-Za-zÄÖÜäöüß]*)$/);
        if (!match) {
            return escapeHtml(part);
        }

        const [, before, word, after] = match;
        return `${escapeHtml(before)}<button class="lookup-word" type="button" data-word="${escapeHtml(word)}">${escapeHtml(word)}</button>${escapeHtml(after)}`;
    }).join("");
}

function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function normalizeWord(word) {
    return word
        .trim()
        .toLowerCase()
        .replace(/[.,;:!?()"']/g, "")
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss");
}

function clearLookup() {
    lookupInput.value = "";
    lookupResult.innerHTML = "<p>Klicke ein deutsches Wort in der Übersetzung oder suche hier.</p>";
}

function lookupWord(rawWord) {
    const word = rawWord.trim();
    const key = normalizeWord(word);
    const entry = dictionary.get(key);

    lookupInput.value = word;

    if (entry) {
        lookupResult.innerHTML = `
            <h3>${entry.term}</h3>
            <p><strong>${entry.type}</strong> · ${entry.zh}</p>
            <p>${entry.note}</p>
            <p>${entry.example}</p>
            <div class="lookup-actions">
                <button class="small-button" type="button" data-save-word="${entry.term}">In Notizen merken</button>
                <a class="small-button" href="https://de.wiktionary.org/wiki/${encodeURIComponent(entry.term)}" target="_blank" rel="noreferrer">Online prüfen</a>
            </div>
        `;
        return;
    }

    lookupResult.innerHTML = `
        <h3>${word || "Unbekanntes Wort"}</h3>
        <p>Dieses Wort ist noch nicht in deiner lokalen Wortliste.</p>
        <p>Du kannst es online nachschlagen und danach in deine eigene Wortliste übernehmen.</p>
        <div class="lookup-actions">
            <button class="small-button" type="button" data-save-word="${escapeHtml(word)}">In Notizen merken</button>
            <a class="small-button" href="https://de.wiktionary.org/wiki/${encodeURIComponent(word)}" target="_blank" rel="noreferrer">Online suchen</a>
        </div>
    `;
}

function addLookupToNotes(word) {
    const text = word.trim();
    if (!text) return;

    const entry = dictionary.get(normalizeWord(text));
    const line = entry
        ? `\n- ${entry.term}: ${entry.zh}; Beispiel: ${entry.example}`
        : `\n- ${text}: `;

    notesInput.value = `${notesInput.value}${line}`;
    saveNotes();
    saveStatus.textContent = "Wort in den Notizen gespeichert.";
}

function renderFlashcard() {
    const poem = poems[currentPoemIndex];
    const word = poem.words[currentWordIndex];

    flashcardWord.textContent = word.de;
    flashcardAnswer.textContent = cardIsFlipped ? `${word.zh} · ${word.example}` : "";
    flipCardBtn.textContent = cardIsFlipped ? "Nächstes Wort" : "Bedeutung zeigen";
}

function handleFlashcard() {
    const poem = poems[currentPoemIndex];

    if (cardIsFlipped) {
        currentWordIndex = (currentWordIndex + 1) % poem.words.length;
        cardIsFlipped = false;
    } else {
        cardIsFlipped = true;
    }

    renderFlashcard();
}

function loadNotes() {
    const key = `poem-notes-${poems[currentPoemIndex].title}`;
    notesInput.value = localStorage.getItem(key) || "";
    saveStatus.textContent = "Notizen werden automatisch gespeichert.";
}

function saveNotes() {
    const key = `poem-notes-${poems[currentPoemIndex].title}`;
    localStorage.setItem(key, notesInput.value);
    saveStatus.textContent = "Gespeichert.";
}

poems.forEach((poem, index) => {
    poemSelect.appendChild(createOption(poem, index));
});

poemSelect.addEventListener("change", (event) => {
    renderPoem(Number(event.target.value));
});

randomBtn.addEventListener("click", () => {
    let nextIndex = Math.floor(Math.random() * poems.length);

    if (poems.length > 1 && nextIndex === currentPoemIndex) {
        nextIndex = (nextIndex + 1) % poems.length;
    }

    renderPoem(nextIndex);
});

document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(`${tab.dataset.tab}Panel`).classList.add("active");
    });
});

lineTable.addEventListener("click", (event) => {
    const wordButton = event.target.closest(".lookup-word");
    if (!wordButton) return;

    lookupWord(wordButton.dataset.word);
});

lookupBtn.addEventListener("click", () => {
    lookupWord(lookupInput.value);
});

lookupInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        lookupWord(lookupInput.value);
    }
});

lookupResult.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save-word]");
    if (!saveButton) return;

    addLookupToNotes(saveButton.dataset.saveWord);
});

flipCardBtn.addEventListener("click", handleFlashcard);
notesInput.addEventListener("input", saveNotes);

renderPoem(0);

const healthData = {
    "emergency": {
        "title": "🚑 紧急急诊 (Ügyelet)",
        "guide": "急诊流程：分诊 -> 等待 -> 看诊。非危及生命请勿拨打112。",
        "docs": ["TAJ-kártya (医保卡)", "Személyi igazolvány (身份证)", "Lakcímkártya (地址卡)"],
        "sections": [
            { "name": "紧急表述", "list": [{ "h": "Baleset történt.", "z": "发生了意外。" }, { "h": "Erős vérzés.", "z": "大出血。" }] }
        ],
        "tips": "⚠️ 提示：急诊排队通常按病情严重程度(Triázs)而非先来后到。"
    },
    "pregnancy": {
        "title": "🤰 怀孕流程 (Terhesség)",
        "guide": "确认怀孕后需联系助产士(Védőnő)领取小蓝本(Kiskönyv)。",
        "docs": ["TAJ-kártya", "Lakcímkártya", "Nőgyógyászati lelet (诊断报告)"],
        "sections": [
            { "name": "关键名词", "list": [{ "h": "Védőnő", "z": "地区助产士" }, { "h": "Kiskönyv", "z": "怀孕记录本" }] },
            { "name": "常用语", "list": [{ "h": "Babát várok.", "z": "我怀孕了。" }] }
        ],
        "tips": "📌 提示：小蓝本是你在匈牙利怀孕期间最重要的证件，每次产检必带。"
    },
    "newborn": {
        "title": "👶 新生儿 (Újszülött)",
        "guide": "出生后需办理证件并在一周内通知儿童家庭医生。",
        "docs": ["Születési anyakönyvi kivonat (出生证明)", "Gyermek TAJ-kártya", "Oltási könyv (疫苗本)"],
        "sections": [
            { "name": "产后关注", "list": [{ "h": "Kötelező oltások", "z": "强制性疫苗" }, { "h": "Csípőszűrés", "z": "髋关节筛查" }] }
        ],
        "tips": "🍼 提示：助产士会在你回家后第一周上门指导喂养。"
    },
    "gp": {
        "title": "👨‍⚕️ 家庭医生 (Háziorvos)",
        "guide": "非急症的首选。负责开转诊单、处方药和病假条。",
        "docs": ["TAJ-kártya", "Lakcímkártya"],
        "sections": [
            { "name": "核心功能", "list": [{ "h": "Beutalót kérek.", "z": "我需要转诊单。" }] }
        ],
        "tips": "💡 提示：一定要确认你的地址卡所属的医生是谁。"
    },
    "pharmacy": {
        "title": "💊 药店 (Patika)",
        "guide": "领取处方药或购买常备药。",
        "docs": ["TAJ-kártya (用于调取电子处方)"],
        "sections": [
            { "name": "常用语", "list": [{ "h": "Van e-receptem.", "z": "我有电子处方。" }] }
        ],
        "tips": "🔍 提示：值班药店通常在周末和深夜营业。"
    },
    "specialist": {
        "title": "🦷 专科牙科 (Szakrendelés)",
        "guide": "针对特定器官的检查。公立通常需要漫长的预约。",
        "docs": ["Beutaló (转诊单)", "TAJ-kártya", "Korábbi leletek"],
        "sections": [
            { "name": "专科类别", "list": [{ "h": "Fogászat", "z": "牙科" }, { "h": "Nőgyógyászat", "z": "妇科" }] }
        ],
        "tips": "💰 提示：很多专科如牙科，私立诊所(Magán)效率更高。"
    }
};

function openHealthDetail(key) {
    const data = healthData[key];
    if (!data) return;

    const modal = document.getElementById('healthModal');
    const container = document.getElementById('healthModalContent');
    
    let html = `
        <div class="detail-container">
            <h2 class="detail-title">${data.title}</h2>
            
            <div class="docs-box">
                <p>🪪 所需证件：</p>
                <ul>${data.docs.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>

            <div class="guide-box">${data.guide}</div>
    `;

    data.sections.forEach(sec => {
        html += `
            <div class="section-group">
                <h3 class="section-label"><span></span>${sec.name}</h3>
                <div class="phrase-grid">
                    ${sec.list.map(item => `
                        <div class="phrase-card">
                            <div class="hu">${item.h}</div>
                            <div class="zh">${item.z}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `<div class="tips-box">${data.tips}</div></div>`;
    container.innerHTML = html;
    modal.classList.add('active');
}

function closeHealthModal() {
    document.getElementById('healthModal').classList.remove('active');
}
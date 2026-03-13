// --- 1. 初始化 ---
const categoryColors = {
    "超市": "#3b82f6", "交通": "#f59e0b", "餐厅": "#ef4444",
    "医疗健康": "#10b981", "居家租房": "#8b5cf6", "情绪反馈": "#ec4899",
    "社交": "#6366f1", "全部": "#64748b"
};
document.addEventListener('DOMContentLoaded', () => {
    console.log("App Service Ready");
    // 移除了所有 updateVipUI 等带有 Vip 词汇的调用
});

// --- 2. 核心功能：显示场景内容 ---
function showScene(sceneKey) {
    const scene = sceneData[sceneKey];
    if (!scene) return;

    const container = document.getElementById('modalContent');
    
    let html = `
        <div class="scene-header" style="position:sticky; top:0; background:white; z-index:10; padding-bottom:10px; border-bottom:2px solid #f0f2f5;">
            <h2 style="margin:0;">${scene.title}</h2>
        </div>
        <div class="scene-scroll-body" style="overflow-y:auto; max-height:65vh; padding-top:15px;">
    `;
    
    scene.categories.forEach(cat => {
        html += `<h3 class="cat-title" style="color:#4a90e2; margin-top:15px;">📌 ${cat.name}</h3>`;
        cat.list.forEach(item => {
            html += `
                <div class="dialog-item" onclick="showDetailView('${item.h}', '${item.c}')" style="padding:12px; background:#f8fafc; border-radius:12px; margin-bottom:10px; border-left:4px solid #4a90e2;">
                    <p style="font-weight:bold; margin:0;">${item.h}</p>
                    <p style="color:#64748b; margin:5px 0 0 0; font-size:14px;">${item.c}</p>
                </div>`;
        });
    });
    
    html += `</div>`; 
    container.innerHTML = html;
    document.getElementById('studyModal').style.display = 'flex';
}

// --- 3. 核心分发：处理功能点击 (去 Pro 化) ---
function handleDetailOpen(type) {
    // 彻底删除了 isProUnlocked 判断和 showPayWall 调用
    if (type === '300词') {
        renderVocabList();
    } else if (type === '语序公式') {
        renderFormulas();
    } else if (type === '情绪表达') {
        renderEmotions();
    }
}

// --- 4. 子模块渲染函数 ---

function renderFormulas() {
    const container = document.getElementById('modalContent');
    let html = `
        <div class="feature-header" style="text-align:center; margin-bottom:20px;">
            <span class="badge-tag">🧱 积木逻辑</span>
            <h3>万能积木公式</h3>
            <p>记住拼装逻辑，沟通更简单</p>
        </div>
        <div class="formula-scroll-container">
    `;
    
    proFormulas.forEach((f, i) => {
        html += `
            <div class="formula-card">
                <span class="formula-number">#${i + 1}</span>
                <div class="brick-row">
                    <span class="brick brick-a">${f.a}</span>
                    <span class="brick-plus">+</span>
                    <span class="brick brick-b">${f.b}</span>
                </div>
                <div class="formula-info">
                    <strong>${f.desc}</strong>
                    <p>💡 例子：${f.note}</p>
                </div>
            </div>`;
    });
    
    html += `</div>`;
    container.innerHTML = html;
    document.getElementById('studyModal').style.display = 'flex';
}

function renderVocabList() {
    const container = document.getElementById('modalContent');
    const categories = ["全部", "超市", "餐厅","生活办事", "交通", "社交常用", "医疗健康", "居家租房", "方位寻找","情绪反馈"];
    
    container.innerHTML = `
        <div class="vocab-header" style="text-align:center; padding: 10px 0;">
            <h3 style="margin:0;">📖 核心生存词库</h3>
        </div>
        <div class="search-box" style="padding:10px;">
            <input type="text" id="vocabSearch" oninput="searchVocab()" placeholder="🔍 搜索中文或匈语..." 
                   style="width:100%; padding:12px; border-radius:12px; border:1px solid #e2e8f0; outline:none;">
        </div>
        <div class="category-tabs" style="display:flex; overflow-x:auto; gap:8px; padding:10px; white-space:nowrap;">
            ${categories.map(cat => `<button onclick="filterVocab('${cat}')" class="tab-btn">${cat}</button>`).join('')}
        </div>
        <div id="vocabListContainer" class="vocab-scroll-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:10px; max-height:55vh; overflow-y:auto;">
            ${generateVocabHTML('全部')}
        </div>
    `;
    document.getElementById('studyModal').style.display = 'flex';
}

// 3. 生成带颜色的卡片 HTML
function generateVocabHTML(filter) {
    let items = [];
    
    // 1. 收集匹配的数据
    vocab500Data.forEach(section => {
        // 使用 includes 增加兼容性，防止因为多一个空格导致匹配失败
        if (filter === '全部' || section.cat.includes(filter) || filter.includes(section.cat)) {
            const sectionItems = section.list.map(i => ({...i, category: section.cat}));
            items = items.concat(sectionItems);
        }
    });

    // 2. 检查是否有结果 (必须放在 map 之前)
    if (items.length === 0) {
        return `<div style="grid-column: 1/-1; text-align:center; padding:50px; color:#94a3b8;">
                    该分类 [${filter}] 下暂无词汇
                </div>`;
    }

    // 3. 统一返回生成的 HTML
   


    return items.map(item => {
        const color = categoryColors[item.category] || "#cbd5e1";
        return `
            <div class="vocab-card" onclick="toggleCard(this)" style="border-left: 5px solid ${color};">
                <div class="hu-word">${item.h}</div>
                <div class="zh-word" style="color: ${color}; font-weight: 600;">${item.z}</div>
            </div>
        `;
    }).join('');
}

// 翻牌逻辑 (确保这个函数在 generateVocabHTML 外面)
function toggleCard(el) {
    el.classList.toggle('revealed');
}
// --- 5. 弹窗控制 ---
function showDetailView(title, content) {
    const container = document.getElementById('modalContent');
    if (container) {
        container.innerHTML = `
            <div style="padding:10px;">
                <h3 style="color:#1e293b; border-bottom:2px solid #10b981; padding-bottom:10px;">${title}</h3>
                <p style="font-size:16px; line-height:1.6; color:#475569; background:#f8fafc; padding:15px; border-radius:12px;">${content}</p>
                <button onclick="closeModal()" style="width:100%; padding:12px; background:#10b981; color:white; border:none; border-radius:10px; margin-top:15px;">确定</button>
            </div>
        `;
        document.getElementById('studyModal').style.display = 'flex';
    }
}

function closeModal() { document.getElementById('studyModal').style.display = 'none'; }

// 点击背景关闭
window.onclick = function(event) {
    const modal = document.getElementById('studyModal');
    if (event.target == modal) closeModal();
}
function renderEmotions() {
    const container = document.getElementById('modalContent');
    if (!container) return;

    let html = `
        <div class="feature-header" style="text-align:center; margin-bottom:20px;">
            <span class="badge-tag">🎭 表达艺术</span>
            <h3>情绪/同意的5种等级</h3>
            <p>从礼貌拒绝到极度赞成</p>
        </div>
        <div class="emotion-scroll-body" style="overflow-y:auto; max-height:65vh;">
    `;

    // 遍历 5 个等级的数据
    emotionData.forEach(item => {
        html += `
            <div class="emotion-group" style="margin-bottom:25px;">
                <h4 style="color:${item.color}; border-left:4px solid ${item.color}; padding-left:10px; margin-bottom:12px;">
                    ${item.level} - ${item.title}
                </h4>
                <div class="emo-list" style="display:flex; flex-direction:column; gap:10px;">
        `;

        item.list.forEach(phrase => {
            html += `
                <div class="dialog-item" onclick="showDetailView('${phrase.h}', '${phrase.c}')" style="padding:12px; background:#f8fafc; border-radius:12px; border:1px solid #edf2f7;">
                    <p style="font-weight:bold; margin:0; color:#1e293b;">${phrase.h}</p>
                    <p style="color:#64748b; margin:5px 0 0 0; font-size:13px;">${phrase.c}</p>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    html += `</div>`;
    
    container.innerHTML = html;
    document.getElementById('studyModal').style.display = 'flex';
}
function filterVocab(cat) {
    const listContainer = document.getElementById('vocabListContainer');
    listContainer.style.opacity = '0'; // 做个简单的淡出效果
    
    setTimeout(() => {
        listContainer.innerHTML = generateVocabHTML(cat);
        listContainer.style.opacity = '1';
    }, 200);
}
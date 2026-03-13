function renderTasks(filter = 'all') {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    
    // --- 新增逻辑：如果是税务分类，先渲染计算器 ---
    if (filter === 'tax') {
        const calcWrapper = document.createElement('div');
        calcWrapper.innerHTML = renderTaxCalculator();
        list.appendChild(calcWrapper);
    }

    const filteredData = filter === 'all' ? lifestyleData : lifestyleData.filter(d => d.category === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = `task-card ${item.category}`;
        card.innerHTML = `
            <div class="task-header">
                <h3>${item.title}</h3>
                <span class="difficulty">${item.difficulty}</span>
            </div>
            <div class="task-steps">
                ${item.steps.map((s, i) => `<div class="step"><span>${i+1}</span> ${s}</div>`).join('')}
            </div>
            <div class="task-footer">💡 建议：${item.tips}</div>
        `;
        list.appendChild(card);
    });
}

// 按钮点击过滤逻辑
function filterTasks(cat) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // 兼容写法：处理 event 丢失问题
    if (event) {
        event.target.classList.add('active');
    }
    renderTasks(cat);
}

// 税务计算器模板
function renderTaxCalculator() {
    return `
        <div class="tax-calc-card fade-in">
            <h4>🏠 买房契税计算器 (Illeték)</h4>
            <div class="calc-box">
                <div class="calc-input">
                    <input type="number" id="housePrice" placeholder="输入房价 (单位: 万福林)">
                    <span class="unit">万 Ft</span>
                </div>
                <button class="calc-btn" onclick="calculateTax()">一键计算</button>
            </div>
            <div class="result-area">
                <p id="taxResult">需缴纳契税预计：0 Ft</p>
                <small>* 匈牙利法定购房契税通常为成交价的 4%</small>
            </div>
        </div>
    `;
}

// 计算逻辑
function calculateTax() {
    const price = document.getElementById('housePrice').value;
    if (!price || price <= 0) {
        alert("请输入有效的房价数字");
        return;
    }
    // 换算公式：房价(万) * 0.04 * 10000
    const tax = price * 400; 
    document.getElementById('taxResult').innerHTML = `需缴纳契税预计：<strong>${tax.toLocaleString()}</strong> Ft`;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => renderTasks('all'));
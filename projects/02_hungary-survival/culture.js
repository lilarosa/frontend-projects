// 1. 初始化数据：从本地存储获取已完成的任务和进度
let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

function renderPage(type) {
    const content = document.getElementById('content');
    const data = cultureData[type];
    
    // 切换底部导航按钮激活状态
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${type}`);
    if (activeBtn) activeBtn.classList.add('active');

    content.innerHTML = '';
    content.className = 'main-content fade-in';

    if (type === 'onboarding') {
        // --- 渲染 7天安顿计划 (带进度勾选) ---
        let html = '<div class="timeline">';
        data.forEach((item, dayIndex) => {
            html += `
                <div class="day-box">
                    <div class="day-side">
                        <span class="day-label">${item.day}</span>
                        <div class="line"></div>
                    </div>
                    <div class="day-main">
                        <h3>${item.title}</h3>
                        <div class="task-group">
                            ${item.tasks.map((t, taskIndex) => {
                                const taskId = `task-${dayIndex}-${taskIndex}`;
                                const isChecked = completedTasks.includes(taskId) ? 'checked' : '';
                                return `
                                    <label class="task-item ${isChecked ? 'done' : ''}">
                                        <input type="checkbox" ${isChecked} onchange="toggleTask('${taskId}', '${type}')">
                                        <span>${t}</span>
                                    </label>
                                `;
                            }).join('')}
                        </div>
                        <p class="day-tip">💡 ${item.tip}</p>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html + '</div>';
    } else {
        // --- 渲染普通信息页 (新手、住房、地址卡) ---
        let html = `<div class="info-container"><h2 class="page-title">${data.title}</h2>`;
        data.sections.forEach(sec => {
            html += `
                <div class="info-card fade-in">
                    <h4>${sec.subtitle}</h4>
                    <ul>
                        ${sec.items.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        content.innerHTML = html + '</div>';
    }
    window.scrollTo(0,0);
}

// 2. 核心功能：切换任务状态并计算总进度
function toggleTask(taskId, currentType) {
    const index = completedTasks.indexOf(taskId);
    if (index > -1) {
        completedTasks.splice(index, 1);
    } else {
        completedTasks.push(taskId);
    }
    
    // 同步到本地存储
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    
    // 重新渲染当前页面以显示勾选后的视觉效果（如删除线）
    renderPage(currentType);

    // 计算总百分比 (7天 * 3项 = 21)
    const totalTasks = 21; 
    const progress = Math.round((completedTasks.length / totalTasks) * 100);
    localStorage.setItem('survivalProgress', progress);
}

// 3. 页面初始化
window.onload = () => {
    // 默认打开新手指南页
    renderPage('guide');
};
// 1. Initialize progress from local storage
let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

function renderPage(type) {
    const content = document.getElementById('content');
    const data = cultureData[type];

    // Update active tab state
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${type}`);
    if (activeBtn) activeBtn.classList.add('active');

    content.innerHTML = '';
    content.className = 'main-content fade-in';

    if (type === 'onboarding') {
        // --- Render 7-day onboarding plan with progress checks ---
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
        // --- Render standard information pages ---
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

// 2. Toggle task status and calculate progress
function toggleTask(taskId, currentType) {
    const index = completedTasks.indexOf(taskId);
    if (index > -1) {
        completedTasks.splice(index, 1);
    } else {
        completedTasks.push(taskId);
    }

    // Sync to local storage
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));

    // Re-render current page after check state changes
    renderPage(currentType);

    // Calculate total percentage
    const totalTasks = 21;
    const progress = Math.round((completedTasks.length / totalTasks) * 100);
    localStorage.setItem('survivalProgress', progress);
}

// 3. Page initialization
window.onload = () => {
    // Open guide page by default
    renderPage('guide');
};

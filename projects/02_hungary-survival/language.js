const categoryColors = {
    "Supermarket": "#3b82f6", "Transport": "#f59e0b", "Restaurant": "#ef4444",
    "Healthcare": "#10b981", "Housing": "#8b5cf6", "Emotion": "#ec4899",
    "Social": "#6366f1", "All": "#64748b"
};
document.addEventListener('DOMContentLoaded', () => {
    console.log("App Service Ready");
    initEssentialToolWords();
    initToolWordCarousel();
});

function initEssentialToolWords() {
    document.querySelectorAll('.tool-word-card').forEach(card => {
        card.addEventListener('click', () => {
            const answer = card.querySelector('.v-hungarian');
            const willReveal = !card.classList.contains('revealed');

            document.querySelectorAll('.tool-word-card.revealed').forEach(openCard => {
                if (openCard !== card) {
                    openCard.classList.remove('revealed');
                    const openAnswer = openCard.querySelector('.v-hungarian');
                    if (openAnswer) {
                        openAnswer.textContent = '';
                        openAnswer.setAttribute('aria-hidden', 'true');
                    }
                }
            });

            card.classList.toggle('revealed', willReveal);

            if (!answer) return;
            if (willReveal) {
                answer.innerHTML = `${escapeHTML(card.dataset.word || '')}<small>${escapeHTML(card.dataset.tip || '')}</small>`;
                answer.setAttribute('aria-hidden', 'false');
            } else {
                answer.textContent = '';
                answer.setAttribute('aria-hidden', 'true');
            }
        });
    });
}

function initToolWordCarousel() {
    const strip = document.querySelector('.tool-word-strip');
    if (!strip) return;

    let isDragging = false;
    let dragMoved = false;
    let startX = 0;
    let startScrollLeft = 0;

    strip.addEventListener('pointerdown', event => {
        isDragging = true;
        dragMoved = false;
        startX = event.clientX;
        startScrollLeft = strip.scrollLeft;
        strip.classList.add('is-dragging');
    });

    strip.addEventListener('pointermove', event => {
        if (!isDragging) return;
        const distance = event.clientX - startX;
        if (Math.abs(distance) > 6) dragMoved = true;
        strip.scrollLeft = startScrollLeft - distance;
    });

    const stopDrag = () => {
        isDragging = false;
        strip.classList.remove('is-dragging');
    };

    strip.addEventListener('pointerup', stopDrag);
    strip.addEventListener('pointerleave', stopDrag);
    strip.addEventListener('pointercancel', stopDrag);

    strip.addEventListener('click', event => {
        if (!dragMoved) return;
        event.preventDefault();
        event.stopPropagation();
        dragMoved = false;
    }, true);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}

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

function handleDetailOpen(type) {
    if (type === 'Vocabulary' ) {
        renderVocabList();
    } else if (type === 'Formula' ) {
        renderFormulas();
    } else if (type === 'Emotion' ) {
        renderEmotions();
    }
}


function renderFormulas() {
    const container = document.getElementById('modalContent');
    let html = `
        <div class="feature-header" style="text-align:center; margin-bottom:20px;">
            <span class="badge-tag">🧱 Building Blocks</span>
            <h3>Sentence Building Blocks</h3>
            <p>Use reliable patterns for everyday communication</p>
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
                    <p>💡 Example: ${f.note}</p>
                </div>
            </div>`;
    });

    html += `</div>`;
    container.innerHTML = html;
    document.getElementById('studyModal').style.display = 'flex';
}

function renderVocabList() {
    const container = document.getElementById('modalContent');
    const categories = ["All", "Supermarket", "Restaurant", "Life Admin", "Transport", "Social", "Healthcare", "Housing", "Directions", "Emotion"];

    container.innerHTML = `
        <div class="vocab-header" style="text-align:center; padding: 10px 0;">
            <h3 style="margin:0;">📖 Core Survival Vocabulary</h3>
        </div>
        <div class="search-box" style="padding:10px;">
            <input type="text" id="vocabSearch" oninput="searchVocab()" placeholder="🔍 Search English or Hungarian..."
                   style="width:100%; padding:12px; border-radius:12px; border:1px solid #e2e8f0; outline:none;">
        </div>
        <div class="category-tabs" style="display:flex; overflow-x:auto; gap:8px; padding:10px; white-space:nowrap;">
            ${categories.map(cat => `<button onclick="filterVocab('${cat}')" class="tab-btn">${cat}</button>`).join('')}
        </div>
        <div id="vocabListContainer" class="vocab-scroll-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:10px; max-height:55vh; overflow-y:auto;">
            ${generateVocabHTML('All')}
        </div>
    `;
    document.getElementById('studyModal').style.display = 'flex';
}

function generateVocabHTML(filter) {
    let items = [];

    vocab500Data.forEach(section => {
        if (filter === 'All' || section.cat.includes(filter) || filter.includes(section.cat)) {
            const sectionItems = section.list.map(i => ({...i, category: section.cat}));
            items = items.concat(sectionItems);
        }
    });

    if (items.length === 0) {
        return `<div style="grid-column: 1/-1; text-align:center; padding:50px; color:#94a3b8;">
                    No vocabulary under [${filter}] yet
                </div>`;
    }




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

function toggleCard(el) {
    el.classList.toggle('revealed');
}
function showDetailView(title, content) {
    const container = document.getElementById('modalContent');
    if (container) {
        container.innerHTML = `
            <div style="padding:10px;">
                <h3 style="color:#1e293b; border-bottom:2px solid #10b981; padding-bottom:10px;">${title}</h3>
                <p style="font-size:16px; line-height:1.6; color:#475569; background:#f8fafc; padding:15px; border-radius:12px;">${content}</p>
                <button onclick="closeModal()" style="width:100%; padding:12px; background:#10b981; color:white; border:none; border-radius:10px; margin-top:15px;">Close</button>
            </div>
        `;
        document.getElementById('studyModal').style.display = 'flex';
    }
}

function closeModal() { document.getElementById('studyModal').style.display = 'none'; }

window.onclick = function(event) {
    const modal = document.getElementById('studyModal');
    if (event.target == modal) closeModal();
}
function renderEmotions() {
    const container = document.getElementById('modalContent');
    if (!container) return;

    let html = `
        <div class="feature-header" style="text-align:center; margin-bottom:20px;">
            <span class="badge-tag">🎭 Tone and Expression</span>
            <h3>Five Levels of Agreement</h3>
            <p>From polite refusal to strong agreement</p>
        </div>
        <div class="emotion-scroll-body" style="overflow-y:auto; max-height:65vh;">
    `;

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
    listContainer.style.opacity = '0';

    setTimeout(() => {
        listContainer.innerHTML = generateVocabHTML(cat);
        listContainer.style.opacity = '1';
    }, 200);
}

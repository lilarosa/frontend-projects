function renderTasks(filter = 'all') {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    // --- Render calculator first for tax category ---
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
            <div class="task-footer">💡 Tip: ${item.tips}</div>
        `;
        list.appendChild(card);
    });
}

// Filter button handling
function filterTasks(cat) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Compatibility handling for missing event
    if (event) {
        event.target.classList.add('active');
    }
    renderTasks(cat);
}

// Tax calculator template
function renderTaxCalculator() {
    return `
        <div class="tax-calc-card fade-in">
            <h4>🏠 Property transfer tax calculator (Illetek)</h4>
            <div class="calc-box">
                <div class="calc-input">
                    <input type="number" id="housePrice" placeholder="Enter property price">
                    <span class="unit">10k Ft</span>
                </div>
                <button class="calc-btn" onclick="calculateTax()">Calculate</button>
            </div>
            <div class="result-area">
                <p id="taxResult">Estimated tax: 0 Ft</p>
                <small>* Hungarian property transfer tax is usually 4% of the purchase price.</small>
            </div>
        </div>
    `;
}

// Calculation logic
function calculateTax() {
    const price = document.getElementById('housePrice').value;
    if (!price || price <= 0) {
        alert("Please enter a valid property price.");
        return;
    }
    // Formula: price unit multiplied by 4%
    const tax = price * 400;
    document.getElementById('taxResult').innerHTML = `Estimated tax: <strong>${tax.toLocaleString()}</strong> Ft`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => renderTasks('all'));

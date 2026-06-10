document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('safetyBody');

    let htmlContent = '';

    safetyData.forEach(item => {
        htmlContent += `
            <div class="safety-section">
                <div class="section-tag">${item.category}</div>
                <div class="do-dont-grid">
                    <div class="box dont">
                        <div class="box-header">❌ Avoid</div>
                        <ul>
                            ${item.donts.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="box do">
                        <div class="box-header">✅ Do this</div>
                        <ul>
                            ${item.dos.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
});

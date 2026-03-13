document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('safetyBody');
    
    let htmlContent = '';

    safetyData.forEach(item => {
        htmlContent += `
            <div class="safety-section">
                <div class="section-tag">${item.category}</div>
                <div class="do-dont-grid">
                    <div class="box dont">
                        <div class="box-header">❌ 别踩雷</div>
                        <ul>
                            ${item.donts.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="box do">
                        <div class="box-header">✅ 这样做</div>
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
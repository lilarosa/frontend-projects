function showLeisureDetail(key) {
    console.log("正在尝试加载键名:", key); // 调试：看点击的是不是 nightlife
    const data = leisureData[key];
    
    if (!data) {
        console.error("错误：在 leisureData 中找不到键名:", key);
        return;
    }

    const modal = document.getElementById('healthModal');
    // 注意：请确保你的 HTML 里 ID 到底是 healthContent 还是 healthModalContent
    const content = document.getElementById('healthContent'); 

    if (!content) {
        console.error("错误：找不到 ID 为 healthContent 的容器");
        return;
    }

    let html = `
        <h2 style="color:#2d3436; margin-bottom:15px; text-align:center;">${data.title}</h2>
        
        <div style="background:#eef2ff; padding:15px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#4338ca; line-height:1.6;">
            ${data.process}
        </div>
        
        <div style="background:#ecfdf5; padding:12px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#047857; border-left:4px solid #10b981;">
            🎒 <b>携带：</b> ${data.docs}
        </div>
        
        <div style="background:#fff7ed; padding:12px; border-radius:12px; margin-bottom:20px; font-size:13px; color:#9a3412; border: 1px solid #fed7aa;">
            ${data.notes}
        </div>

        <h3 style="font-size:16px; margin-bottom:10px; color:#1e293b; padding-left:5px;">💬 实用匈语</h3>
    `;

    // 确保 data.list 存在且是数组
    if (data.list && Array.isArray(data.list)) {
        data.list.forEach(item => {
            html += `
                <div style="background:#f8fafc; padding:12px; border-radius:10px; margin-bottom:8px; border:1px solid #f1f5f9;">
                    <div style="color:#d63031; font-weight:bold; font-size:15px;">${item.h}</div>
                    <div style="color:#64748b; font-size:13px;">${item.c}</div>
                </div>`;
        });
    }

    content.innerHTML = html;
    modal.classList.add('active');
    
    // 自动置顶 (确保容器存在再滚动)
    const scrollArea = document.querySelector('.modal-inner');
    if (scrollArea) scrollArea.scrollTop = 0;
}
// 关闭弹窗的函数
function closeHealthModal() {
    console.log("尝试关闭弹窗..."); // 调试用
    const modal = document.getElementById('healthModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// 你的显示函数（保持不变，但确保调用正确）
function showLeisureDetail(key) {
    console.log("正在尝试加载键名:", key);
    const data = leisureData[key];
    
    if (!data) {
        console.error("错误：在 leisureData 中找不到键名:", key);
        return;
    }

    const modal = document.getElementById('healthModal');
    const content = document.getElementById('healthContent'); 

    if (!content || !modal) {
        console.error("错误：找不到弹窗容器");
        return;
    }

    let html = `
        <h2 style="color:#2d3436; margin-bottom:15px; text-align:center;">${data.title}</h2>
        <div style="background:#eef2ff; padding:15px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#4338ca; line-height:1.6;">
            ${data.process}
        </div>
        <div style="background:#ecfdf5; padding:12px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#047857; border-left:4px solid #10b981;">
            🎒 <b>携带：</b> ${data.docs}
        </div>
        <div style="background:#fff7ed; padding:12px; border-radius:12px; margin-bottom:20px; font-size:13px; color:#9a3412; border: 1px solid #fed7aa;">
            ${data.notes}
        </div>
        <h3 style="font-size:16px; margin-bottom:10px; color:#1e293b; padding-left:5px;">💬 实用匈语</h3>
    `;

    if (data.list && Array.isArray(data.list)) {
        data.list.forEach(item => {
            html += `
                <div style="background:#f8fafc; padding:12px; border-radius:10px; margin-bottom:8px; border:1px solid #f1f5f9;">
                    <div style="color:#d63031; font-weight:bold; font-size:15px;">${item.h}</div>
                    <div style="color:#64748b; font-size:13px;">${item.c}</div>
                </div>`;
        });
    }

    content.innerHTML = html;
    modal.classList.add('active');
    
    const scrollArea = document.querySelector('.modal-inner');
    if (scrollArea) scrollArea.scrollTop = 0;
}
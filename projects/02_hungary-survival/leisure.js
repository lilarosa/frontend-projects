function showLeisureDetail(key) {
    console.log("Loading key:", key); // Debug log for clicked key
    const data = leisureData[key];

    if (!data) {
        console.error("Error: key not found in leisureData:", key);
        return;
    }

    const modal = document.getElementById('healthModal');
    // Make sure the modal content id matches the HTML
    const content = document.getElementById('healthContent');

    if (!content) {
        console.error("Error: cannot find healthContent container");
        return;
    }

    let html = `
        <h2 style="color:#2d3436; margin-bottom:15px; text-align:center;">${data.title}</h2>

        <div style="background:#eef2ff; padding:15px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#4338ca; line-height:1.6;">
            ${data.process}
        </div>

        <div style="background:#ecfdf5; padding:12px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#047857; border-left:4px solid #10b981;">
            🎒 <b>Bring:</b> ${data.docs}
        </div>

        <div style="background:#fff7ed; padding:12px; border-radius:12px; margin-bottom:20px; font-size:13px; color:#9a3412; border: 1px solid #fed7aa;">
            ${data.notes}
        </div>

        <h3 style="font-size:16px; margin-bottom:10px; color:#1e293b; padding-left:5px;">💬 Useful Hungarian</h3>
    `;

    // Ensure data.list exists and is an array
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

    // Scroll modal to top when possible
    const scrollArea = document.querySelector('.modal-inner');
    if (scrollArea) scrollArea.scrollTop = 0;
}
// Close modal function
function closeHealthModal() {
    console.log("Closing modal...");
    const modal = document.getElementById('healthModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Display function
function showLeisureDetail(key) {
    console.log("Loading key:", key);
    const data = leisureData[key];

    if (!data) {
        console.error("Error: key not found in leisureData:", key);
        return;
    }

    const modal = document.getElementById('healthModal');
    const content = document.getElementById('healthContent');

    if (!content || !modal) {
        console.error("Error: modal container not found");
        return;
    }

    let html = `
        <h2 style="color:#2d3436; margin-bottom:15px; text-align:center;">${data.title}</h2>
        <div style="background:#eef2ff; padding:15px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#4338ca; line-height:1.6;">
            ${data.process}
        </div>
        <div style="background:#ecfdf5; padding:12px; border-radius:12px; margin-bottom:15px; font-size:14px; color:#047857; border-left:4px solid #10b981;">
            🎒 <b>Bring:</b> ${data.docs}
        </div>
        <div style="background:#fff7ed; padding:12px; border-radius:12px; margin-bottom:20px; font-size:13px; color:#9a3412; border: 1px solid #fed7aa;">
            ${data.notes}
        </div>
        <h3 style="font-size:16px; margin-bottom:10px; color:#1e293b; padding-left:5px;">💬 Useful Hungarian</h3>
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

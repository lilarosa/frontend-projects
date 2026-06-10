const healthData = {
    emergency: {
        title: "🚑 Emergency care (Ugyelet)",
        guide: "Hungarian emergency care is triaged by severity. Call 112 only for urgent or life-threatening situations.",
        docs: ["TAJ card or insurance details", "Passport or ID", "Address card if available"],
        sections: [{ name: "Emergency phrases", list: [
            { h: "Baleset tortent.", z: "An accident happened." },
            { h: "Eros verzes.", z: "Heavy bleeding." },
            { h: "Nem kapok levegot.", z: "I cannot breathe." }
        ] }],
        tips: "Waiting time depends on severity, not arrival order."
    },
    pregnancy: {
        title: "🤰 Pregnancy care (Terhesseg)",
        guide: "After confirming pregnancy, contact a district midwife (Vedono) and obtain the pregnancy booklet.",
        docs: ["TAJ card", "Address card", "Gynecology report"],
        sections: [{ name: "Key terms", list: [
            { h: "Vedono", z: "District midwife" },
            { h: "Kiskonyv", z: "Pregnancy booklet" },
            { h: "Babat varok.", z: "I am pregnant." }
        ] }],
        tips: "Bring the booklet to every pregnancy appointment."
    },
    newborn: {
        title: "👶 Newborn care (Ujszulott)",
        guide: "After birth, arrange documents and contact the child's GP within the required period.",
        docs: ["Birth certificate", "Child TAJ card", "Vaccination booklet"],
        sections: [{ name: "After birth", list: [
            { h: "Kotelezo oltasok", z: "Mandatory vaccines" },
            { h: "Csiposzures", z: "Hip screening" }
        ] }],
        tips: "The midwife may visit at home after you return from hospital."
    },
    gp: {
        title: "👨‍⚕️ General practitioner (Haziorvos)",
        guide: "The GP is the first stop for non-emergency illness, referrals, prescriptions, and sick leave certificates.",
        docs: ["TAJ card", "Address card"],
        sections: [{ name: "Useful phrases", list: [
            { h: "Idopontot szeretnek kerni.", z: "I would like an appointment." },
            { h: "Beutalot kerek.", z: "I need a referral." }
        ] }],
        tips: "Confirm which GP is assigned to your registered address."
    },
    pharmacy: {
        title: "💊 Pharmacy (Patika)",
        guide: "Pharmacies can dispense e-prescriptions and advise on common over-the-counter medicines.",
        docs: ["TAJ card for e-prescriptions"],
        sections: [{ name: "Pharmacy phrases", list: [
            { h: "Van e-receptem.", z: "I have an e-prescription." },
            { h: "Hanyszor kell bevenni?", z: "How many times should I take it?" }
        ] }],
        tips: "Duty pharmacies are usually listed in pharmacy windows."
    },
    specialist: {
        title: "🦷 Specialist care (Szakrendeles)",
        guide: "Specialists include dentistry, gynecology, dermatology, eye care, and more. Public appointments may require a referral.",
        docs: ["Referral if required", "TAJ card", "Previous medical reports"],
        sections: [{ name: "Specialties", list: [
            { h: "Fogaszat", z: "Dentistry" },
            { h: "Nogyogyaszat", z: "Gynecology" }
        ] }],
        tips: "Private clinics are faster but costs should be confirmed before booking."
    }
};

function openHealthDetail(key) {
    const data = healthData[key];
    if (!data) return;
    const modal = document.getElementById('healthModal');
    const container = document.getElementById('healthModalContent');
    let html = '<div class="detail-container"><h2 class="detail-title">' + data.title + '</h2>';
    html += '<div class="docs-box"><p>Required documents:</p><ul>' + data.docs.map(d => '<li>' + d + '</li>').join('') + '</ul></div>';
    html += '<div class="guide-box">' + data.guide + '</div>';
    data.sections.forEach(sec => {
        html += '<div class="section-group"><h3 class="section-label"><span></span>' + sec.name + '</h3><div class="phrase-grid">';
        html += sec.list.map(item => '<div class="phrase-card"><div class="hu">' + item.h + '</div><div class="zh">' + item.z + '</div></div>').join('');
        html += '</div></div>';
    });
    html += '<div class="tips-box">' + data.tips + '</div></div>';
    container.innerHTML = html;
    modal.classList.add('active');
}

function closeHealthModal() {
    document.getElementById('healthModal').classList.remove('active');
}

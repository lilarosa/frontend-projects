const healthData = {
    emergency: {
        title: "🚑 Emergency care (Ugyelet)",
        guide: "Hungarian emergency care is triaged by severity. Call 112 only for urgent or life-threatening situations.",
        docs: ["TAJ card or insurance details", "Passport or ID", "Address card if available"],
        sections: [
            { name: "Emergency phrases", list: [
                { h: "Baleset tortent.", z: "An accident happened." },
                { h: "Eros verzes.", z: "Heavy bleeding." },
                { h: "Mellkasi fajdalom.", z: "Chest pain." },
                { h: "Nem kapok levegot.", z: "I cannot breathe." }
            ] }
        ],
        tips: "Emergency waiting time depends on severity, not arrival order."
    },
    pregnancy: {
        title: "🤰 Pregnancy care (Terhesseg)",
        guide: "After confirming pregnancy, contact a local midwife (Vedono) and obtain the pregnancy booklet.",
        docs: ["TAJ card", "Address card", "Gynecology report"],
        sections: [
            { name: "Key terms", list: [
                { h: "Vedono", z: "District midwife" },
                { h: "Kiskonyv", z: "Pregnancy booklet" },
                { h: "Babat varok.", z: "I am pregnant." }
            ] }
        ],
        tips: "Bring the booklet to every pregnancy appointment."
    },
    newborn: {
        title: "👶 Newborn care (Ujszulott)",
        guide: "After birth, arrange documents and contact the child's GP within the required period.",
        docs: ["Birth certificate", "Child TAJ card", "Vaccination booklet"],
        sections: [
            { name: "After birth", list: [
                { h: "Kotelezo oltasok", z: "Mandatory vaccines" },
                { h: "Csiposzures", z: "Hip screening" }
            ] }
        ],
        tips: "The midwife may visit at home after you return from hospital."
    },
    gp: {
        title: "👨‍⚕️ General practitioner (Haziorvos)",
        guide: "The GP is the first stop for non-emergency illness, referrals, prescriptions, and sick leave certificates.",
        docs: ["TAJ card", "Address card"],
        sections: [
            { name: "Useful phrases", list: [
                { h: "Idopontot szeretnek kerni.", z: "I would like an appointment." },
                { h: "Beutalot kerek.", z: "I need a referral." },
                { h: "Betegszabadsagra van szuksegem.", z: "I need sick leave documentation." }
            ] }
        ],
        tips: "Confirm which GP is assigned to your registered address."
    },
    pharmacy: {
        title: "💊 Pharmacy (Patika)",
        guide: "Hungarian pharmacies can dispense electronic prescriptions and advise on common over-the-counter medicine.",
        docs: ["TAJ card for e-prescriptions"],
        sections: [
            { name: "Pharmacy phrases", list: [
                { h: "Van e-receptem.", z: "I have an e-prescription." },
                { h: "Fajdalomcsillapitot kerek.", z: "I would like pain relief medicine." },
                { h: "Hanyszor kell bevenni?", z: "How many times should I take it?" }
            ] }
        ],
        tips: "Duty pharmacies are usually listed in pharmacy windows for nights and weekends."
    },
    specialist: {
        title: "🦷 Specialist care (Szakrendeles)",
        guide: "Specialists include dentistry, gynecology, dermatology, eye care, and more. Public appointments may require a referral.",
        docs: ["Referral if required", "TAJ card", "Previous medical reports"],
        sections: [
            { name: "Specialties", list: [
                { h: "Fogaszat", z: "Dentistry" },
                { h: "Nogyogyaszat", z: "Gynecology" },
                { h: "Borgyogyaszat", z: "Dermatology" },
                { h: "Szemeszet", z: "Ophthalmology" }
            ] }
        ],
        tips: "Private clinics are faster but costs should be confirmed before booking."
    }
};

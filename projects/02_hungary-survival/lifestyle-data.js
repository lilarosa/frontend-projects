const lifestyleData = [
    {
        id: "traffic_pass",
        category: "traffic",
        title: "🎫 Buy a Budapest monthly pass",
        difficulty: "⭐",
        steps: ["Install BudapestGO", "Create an account", "Choose the correct pass", "Validate tickets when required"],
        tips: "Student passes require valid student ID. Keep the physical ID with you during checks."
    },
    {
        id: "address_card",
        category: "admin",
        title: "🏠 Apply for an address card",
        difficulty: "⭐⭐⭐",
        steps: ["Prepare the signed address form", "Visit Kormanyablak", "Take a queue number", "Collect or confirm the card process"],
        tips: "Owner signatures must be clear. Go early if you do not have an appointment."
    },
    {
        id: "utility_pay",
        category: "home",
        title: "✉️ Pay utility bills",
        difficulty: "⭐⭐",
        steps: ["Check the bill or yellow slip", "Pay by bank transfer, post office, or app", "Save confirmation", "Track monthly meter readings"],
        tips: "The iCsekk app can scan many Hungarian payment slips."
    }
];
const taxData = [
    {
        id: "tax_szja",
        category: "tax",
        title: "💰 Personal income tax (SZJA)",
        difficulty: "⭐⭐",
        steps: ["Check your draft by May 20", "Log in through Ugyfelkapu", "Review NAV's prepared form", "Pay any remaining amount"],
        tips: "Some groups may receive tax benefits, including young workers under specific rules."
    },
    {
        id: "tax_property_buy",
        category: "tax",
        title: "🏠 Property transfer tax (Illetek)",
        difficulty: "⭐⭐⭐",
        steps: ["Sign the purchase contract", "Wait for NAV assessment", "Check the 4% calculation", "Pay or request installments if eligible"],
        tips: "This is often one of the largest extra costs after buying a property."
    },
    {
        id: "tax_car",
        category: "tax",
        title: "🚗 Vehicle tax",
        difficulty: "⭐",
        steps: ["Check vehicle registration data", "Pay in the required periods", "Use bank transfer or official payment channels", "Avoid late interest"],
        tips: "The amount depends on vehicle power and age."
    },
    {
        id: "tax_district",
        category: "tax",
        title: "🏛️ District building tax",
        difficulty: "⭐⭐",
        steps: ["Check district rules", "Submit annual declaration if required", "Pay based on square meters", "Ask the district office about exemptions"],
        tips: "Rules differ by district and by residential or commercial use."
    },
    {
        id: "tax_sell_house",
        category: "tax",
        title: "📑 Property sale income tax",
        difficulty: "⭐⭐⭐",
        steps: ["Calculate sale minus purchase price", "Deduct eligible costs", "Apply holding-period reduction", "Report if tax is due"],
        tips: "Hungarian property tax treatment changes with how long you held the property."
    }
];
lifestyleData.push(...taxData);

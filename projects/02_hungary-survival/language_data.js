const sceneData = {
    office: {
        title: "☕ Work Small Talk",
        categories: [
            { name: "Morning and coffee", list: [
                { h: "Hogy telt a hetveged?", c: "How was your weekend?" },
                { h: "Kersz egy kavet?", c: "Would you like a coffee?" },
                { h: "Eleg suru a mai nap.", c: "Today is quite busy." }
            ] },
            { name: "Lunch and after work", list: [
                { h: "Van kedved egyutt ebedelni?", c: "Would you like to have lunch together?" },
                { h: "Holnap talalkozunk!", c: "See you tomorrow!" }
            ] }
        ]
    },
    sightseeing: {
        title: "🎟️ Tickets and attractions",
        categories: [
            { name: "Ticket desk", list: [
                { h: "Ket felnott jegyet kerek.", c: "Two adult tickets, please." },
                { h: "Van diak kedvezmeny?", c: "Is there a student discount?" },
                { h: "Szabad fotozni bent?", c: "Is photography allowed inside?" }
            ] }
        ]
    },
    restaurant: {
        title: "🍽️ Restaurant ordering",
        categories: [
            { name: "Ordering and payment", list: [
                { h: "Ket fore szeretnek asztalt.", c: "I would like a table for two." },
                { h: "Mit ajanl?", c: "What do you recommend?" },
                { h: "Fizetni szeretnek.", c: "I would like to pay." }
            ] }
        ]
    },
    oif: {
        title: "🏛️ Immigration Office (OIF)",
        categories: [
            { name: "Appointments and documents", list: [
                { h: "Idopontra jottem.", c: "I came for an appointment." },
                { h: "Szeretnem meghosszabbitani a tartozkodasi engedelyem.", c: "I would like to renew my residence permit." },
                { h: "Milyen dokumentum hianyzik?", c: "Which document is missing?" },
                { h: "Beszelhetunk angolul?", c: "Can we speak English?" }
            ] }
        ]
    },
    doctor: {
        title: "🏥 Doctor visit",
        categories: [
            { name: "Symptoms", list: [
                { h: "Idopontot szeretnek kerni.", c: "I would like an appointment." },
                { h: "Lazam van.", c: "I have a fever." },
                { h: "Faj a torkom.", c: "My throat hurts." },
                { h: "Gyogyszert szedek.", c: "I am taking medicine." }
            ] }
        ]
    },
    market: {
        title: "🛒 Supermarket and market",
        categories: [
            { name: "Shopping", list: [
                { h: "Hol talalom a tejet?", c: "Where can I find the milk?" },
                { h: "Kartyaval fizetek.", c: "I will pay by card." },
                { h: "Kerek egy szatyrot.", c: "I would like a bag." }
            ] }
        ]
    },
    housing: {
        title: "🏠 Landlord and neighbors",
        categories: [
            { name: "Repairs", list: [
                { h: "Nincs meleg viz.", c: "There is no hot water." },
                { h: "Elromlott a kazan.", c: "The boiler is broken." },
                { h: "Tul hangos a szomszed.", c: "The neighbor is too loud." }
            ] }
        ]
    },
    conflict: {
        title: "👊 Conflict response",
        categories: [
            { name: "Protect yourself", list: [
                { h: "Ne erjen hozzam!", c: "Do not touch me!" },
                { h: "Hagyjon beken!", c: "Leave me alone!" },
                { h: "Rendort hivok.", c: "I am calling the police." }
            ] }
        ]
    },
    school: {
        title: "🏫 School communication",
        categories: [
            { name: "Teacher contact", list: [
                { h: "Hogy erezte magat ma?", c: "How was my child today?" },
                { h: "Beteg, ma nem jon.", c: "My child is sick and will not come today." },
                { h: "Miben tudok segiteni?", c: "How can I help?" }
            ] }
        ]
    },
    emergency: {
        title: "🚨 Emergency rights and police",
        categories: [
            { name: "Police and accidents", list: [
                { h: "Itt vannak az iratok.", c: "Here are my documents." },
                { h: "Nem irok ala semmit.", c: "I will not sign anything." },
                { h: "Tolmacsot kerek.", c: "I request an interpreter." }
            ] }
        ]
    },
    shopping_issue: {
        title: "🧾 Shopping complaints",
        categories: [
            { name: "Refunds and prices", list: [
                { h: "Rossz az ar.", c: "The price is wrong." },
                { h: "Szeretnem visszavinni.", c: "I would like to return it." },
                { h: "Hol van a panaszkonyv?", c: "Where is the complaint book?" }
            ] }
        ]
    }
};

const proFormulas = [
    { a: "Szeretnek", b: "idopontot kerni", desc: "I would like to request something politely.", note: "Szeretnek idopontot kerni. = I would like an appointment." },
    { a: "Hol van", b: "a bolt?", desc: "Ask where something is.", note: "Hol van a patika? = Where is the pharmacy?" },
    { a: "Nem ertem", b: "lassabban kerem", desc: "Ask for slower communication.", note: "Nem ertem, lassabban kerem. = I do not understand, slower please." }
];

const vocab500Data = [
    { cat: "All", list: [] },
    { cat: "Supermarket", list: [
        { h: "Tej", z: "Milk" }, { h: "Kenyer", z: "Bread" }, { h: "Szatyrot kerek", z: "A bag, please" }, { h: "Kartyaval fizetek", z: "I pay by card" }
    ] },
    { cat: "Restaurant", list: [
        { h: "Etterem", z: "Restaurant" }, { h: "Etel", z: "Food" }, { h: "Szamlat kerek", z: "The bill, please" }, { h: "Finom", z: "Delicious" }
    ] },
    { cat: "Transport", list: [
        { h: "Jegy", z: "Ticket" }, { h: "Berlet", z: "Pass" }, { h: "Megallo", z: "Stop" }, { h: "Vonat", z: "Train" }
    ] },
    { cat: "Healthcare", list: [
        { h: "Orvos", z: "Doctor" }, { h: "Patika", z: "Pharmacy" }, { h: "Lazam van", z: "I have a fever" }, { h: "Faj", z: "It hurts" }
    ] },
    { cat: "Housing", list: [
        { h: "Lakas", z: "Apartment" }, { h: "Berleti szerzodes", z: "Rental contract" }, { h: "Nincs meleg viz", z: "No hot water" }, { h: "Javitas", z: "Repair" }
    ] },
    { cat: "Social", list: [
        { h: "Szia", z: "Hello / bye" }, { h: "Koszonom", z: "Thank you" }, { h: "Bocsanat", z: "Sorry" }, { h: "Viszlat", z: "Goodbye" }
    ] }
];

const emotionData = [
    { level: "⭐⭐⭐⭐⭐", title: "Strong yes", color: "#10b981", list: [
        { h: "Persze!", c: "Of course." }, { h: "Szuper!", c: "Great." }, { h: "Tokeletes!", c: "Perfect." }
    ] },
    { level: "⭐⭐⭐⭐", title: "Standard confirmation", color: "#3b82f6", list: [
        { h: "Rendben.", c: "Alright." }, { h: "Ertem.", c: "I understand." }, { h: "Vilagos.", c: "Clear." }
    ] },
    { level: "⭐⭐⭐", title: "Neutral", color: "#64748b", list: [
        { h: "Meglatjuk.", c: "We will see." }, { h: "Talan.", c: "Maybe." }, { h: "Mindegy.", c: "Either way is fine." }
    ] },
    { level: "⭐⭐", title: "Soft no", color: "#f59e0b", list: [
        { h: "Sajnos nem.", c: "Unfortunately not." }, { h: "Majd maskor.", c: "Maybe another time." }
    ] },
    { level: "⭐", title: "Hard no", color: "#ef4444", list: [
        { h: "Kizart dolog.", c: "No way." }, { h: "Szo sem lehet rola.", c: "Absolutely not." }
    ] }
];

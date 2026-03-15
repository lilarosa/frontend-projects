function init() {
    updateTime();
    updateReminder();
    highlightCurrentTask();
    renderDaily();

    setInterval(updateTime, 1000);
    setInterval(updateReminder, 60000);
    setInterval(highlightCurrentTask, 60000);
}

function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const time = hour + ":" + (minutes < 10 ? "0" : "") + minutes;
    document.getElementById("time").innerText = "Current time: " + time;
    let greeting = "";
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("greeting").innerText = greeting;
}

function callDaughter() {
    document.getElementById("status").innerText = "Calling daughter...";
    window.location.href = "tel:13641220025";
}

function callSon() {
    document.getElementById("status").innerText = "Calling son...";
    window.location.href = "tel:13910013385";
}

function callHelper() {
    document.getElementById("status").innerText = "Calling emergency help...";
    window.location.href = "tel:120";
}

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        if (page.id === pageId) {
            page.classList.remove("hidden");
        } else {
            page.classList.add("hidden");
        }
    });
    if (pageId === "taskPage") {
        highlightCurrentTask();
        setTimeout(scrollToCurrentTask, 300);
    }
}

function scrollToCurrentTask() {
    const now = new Date();
    const hour = now.getHours();
    const tasks = document.querySelectorAll("#taskList li");
    for (let task of tasks) {
        let start = parseInt(task.getAttribute("data-start"));
        let end = parseInt(task.getAttribute("data-end"));
        if (hour >= start && hour < end) {
            task.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
        }
    }
}

function toggleTask(task) {
    let now = new Date();
    let hour = now.getHours();
    let start = parseInt(task.getAttribute("data-start"));
    let end = parseInt(task.getAttribute("data-end"));
    if (task.classList.contains("done")) {
        return;
    }
    if (hour < start) {
        alert("Task has not started yet.");
        return;
    }
    if (hour >= end) {
        alert("Task is already expired.");
        return;
    }
    task.classList.add("done");
    task.innerText = "Done - " + task.innerText.replace("Done - ", "");
}

let lastReminder = "";
function updateReminder() {
    const now = new Date();
    const hour = now.getHours();
    const reminder = document.getElementById("reminder");

    if (7 <= hour && hour < 9) {
        reminder.innerText = "Reminder: morning medicine.";
        if (lastReminder !== "Take your morning medicine.") {
            speak("Take your morning medicine.");
            lastReminder = "Take your morning medicine.";
        }
    } else if (9 <= hour && hour < 11) {
        reminder.innerText = "Reminder: breakfast time.";
        if (lastReminder !== "It is time for breakfast.") {
            speak("It is time for breakfast.");
            lastReminder = "It is time for breakfast.";
        }
    } else if (11 <= hour && hour < 12) {
        reminder.innerText = "Reminder: noon medicine.";
        if (lastReminder !== "Take your noon medicine.") {
            speak("Take your noon medicine.");
            lastReminder = "Take your noon medicine.";
        }
    } else if (12 <= hour && hour < 14) {
        reminder.innerText = "Reminder: lunch time.";
        if (lastReminder !== "It is time for lunch.") {
            speak("It is time for lunch.");
            lastReminder = "It is time for lunch.";
        }
    } else if (14 <= hour && hour < 16) {
        reminder.innerText = "Reminder: afternoon medicine.";
        if (lastReminder !== "Take your afternoon medicine.") {
            speak("Take your afternoon medicine.");
            lastReminder = "Take your afternoon medicine.";
        }
    } else if (16 <= hour && hour < 18) {
        reminder.innerText = "Reminder: walk and rest.";
        if (lastReminder !== "Time for a walk and rest.") {
            speak("Time for a walk and rest.");
            lastReminder = "Time for a walk and rest.";
        }
    } else if (18 <= hour && hour < 20) {
        reminder.innerText = "Reminder: dinner time.";
        if (lastReminder !== "It is time for dinner.") {
            speak("It is time for dinner.");
            lastReminder = "It is time for dinner.";
        }
    } else if (20 <= hour && hour < 22) {
        reminder.innerText = "Reminder: night medicine.";
        if (lastReminder !== "Take your night medicine.") {
            speak("Take your night medicine.");
            lastReminder = "Take your night medicine.";
        }
    } else if (22 <= hour && hour < 24) {
        reminder.innerText = "Reminder: brush teeth.";
        if (lastReminder !== "Please brush your teeth.") {
            speak("Please brush your teeth.");
            lastReminder = "Please brush your teeth.";
        }
    } else if (0 <= hour && hour < 7) {
        reminder.innerText = "Reminder: sleep time.";
        if (lastReminder !== "It is time to sleep.") {
            speak("It is time to sleep.");
            lastReminder = "It is time to sleep.";
        }
    } else {
        reminder.innerText = "Reminder: take medicine on time.";
    }
}

function highlightCurrentTask() {
    const now = new Date();
    const hour = now.getHours();
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach((task) => {
        let start = parseInt(task.getAttribute("data-start"));
        let end = parseInt(task.getAttribute("data-end"));
        if (hour >= start && hour < end) {
            task.style.backgroundColor = "#b7efb0";
        } else {
            task.style.backgroundColor = "#eee";
        }
    });
}

function speak(text) {
    speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-US";
    msg.rate = 0.8;
    msg.pitch = 1;
    msg.volume = 1;
    speechSynthesis.speak(msg);
}

let currentDaily = 0;
const dailyItems = [
    {
        title: "The Stone Monkey",
        text: "On the Mountain of Flowers and Fruit, a magic stone split open and a stone monkey was born. He became the leader and found a safe cave behind a waterfall."
    },
    {
        title: "Havoc in Heaven",
        text: "Sun Wukong learned powerful skills and caused trouble in Heaven. The gods could not stop him, so he was sealed under a mountain."
    },
    {
        title: "The Pilgrimage Begins",
        text: "Tang Sanzang rescued Sun Wukong and they began a long journey to the West."
    }
];

function renderDaily() {
    const item = dailyItems[currentDaily];
    document.getElementById("dailyTitle").innerText = item.title;
    document.getElementById("dailyText").innerText = item.text;
}

function nextDaily() {
    speechSynthesis.cancel();
    currentDaily++;
    if (currentDaily >= dailyItems.length) {
        currentDaily = 0;
    }
    renderDaily();
}

function prevDaily() {
    speechSynthesis.cancel();
    currentDaily--;
    if (currentDaily < 0) {
        currentDaily = dailyItems.length - 1;
    }
    renderDaily();
}

function readDaily() {
    const item = dailyItems[currentDaily];
    speak(item.title + ". " + item.text);
}

function togglePause() {
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
    } else {
        speechSynthesis.pause();
    }
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker-en.js");
}

document.addEventListener("DOMContentLoaded", init);

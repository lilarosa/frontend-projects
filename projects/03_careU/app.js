
// 初始化函数
// 每秒更新一次时间、提醒和任务高亮
function init() {
    updateTime();
    updateReminder();
    highlightCurrentTask();
    renderDaily();

    setInterval(updateTime, 1000);       // 每秒更新时间
    setInterval(updateReminder, 60000);  // 每分钟检查提醒
    setInterval(highlightCurrentTask, 60000); // 每分钟更新任务高亮
}

 // 时间和问候语更新
function updateTime(){
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const time = hour + ":" + (minutes < 10 ? "0" : "") + minutes;
        document.getElementById("time").innerText= "现在时间：" + time; ;
        let greeting = "";
        if (hour< 12){
            greeting = "早上好！妈妈❤️";
        } else if (hour < 18){
            greeting = "下午好！妈妈❤️";
        } else {
            greeting = "晚上好！妈妈❤️";
        }
        document.getElementById("greeting").innerText = greeting;
    }


    // 打电话功能
    function callDaughter(){
        document.getElementById("status").innerText = "正在打给女儿...";
        window.location.href = "tel:13641220025";
        
    }
    function callSon(){
        document.getElementById("status").innerText = "正在打给儿子...";
        window.location.href = "tel:13910013385";
    }
    function callHelper(){
        document.getElementById("status").innerText = "已呼叫求助...";
            window.location.href = "tel:120";
    }
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
        .then(function(registration) {
            console.log("Service Worker registered");
        })
        .catch(function(error) {
            console.log("Service Worker registration failed:", error);
        });
    }

    // 页面导航
    function showPage(pageId) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.remove("hidden");
            } else {
                page.classList.add("hidden");
            }
            if (pageId === "taskPage") {
                highlightCurrentTask();
                setTimeout(scrollToCurrentTask, 300);
            }
        });
    }

    // 滚动到当前任务
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
    // 任务完成标记和提醒更新
    function toggleTask(task) {
        let now = new Date();
        let hour = now.getHours();
        let start = parseInt(task.getAttribute("data-start"));
        let end = parseInt(task.getAttribute("data-end"));
        if (task.classList.contains("done")) {
            return;
        } if (hour < start) {
            alert("任务还未开始哦！");
            return;
        } if (hour >= end) {
            alert("任务已过期了哦！");
            return;
        } else {
            task.classList.add("done"); 
            task.innerText ="✅" + task.innerText.replace("✅", "");
        }
    }

    // 提醒更新
    let lastReminder = "";
    function updateReminder() {
        const now = new Date();
        const hour = now.getHours();
        const reminder = document.getElementById("reminder");
        
        if (7 <= hour && hour < 9) {
            reminder.innerText = "提醒：该吃早药了！💊";
                if (lastReminder !== "现在该吃早饭前的药了") {
                    speak("现在该吃早饭前的药了");
                    lastReminder = "现在该吃早饭前的药了";
                }
            
        } else if (9 <= hour && hour < 11 ) {
            reminder.innerText = "提醒：吃早饭了吗？🥛";  
                if (lastReminder !== "现在该吃早饭了") {
                        speak("现在该吃早饭了");
                        lastReminder = "现在该吃早饭了";
                    } 
            
        } else if (11 <= hour && hour < 12) {
             reminder.innerText = "提醒：该吃午药了！💊"; 
                if (lastReminder !== "现在该吃午饭前的药了") {
                    speak("现在该吃午饭前的药了");
                    lastReminder = "现在该吃午饭前的药了"; 
             
        }
        }

        else if (12 <= hour && hour < 14 ) {
            reminder.innerText = "提醒：吃午饭了吗？😋";  
            if (lastReminder !== "现在该吃午饭了") {
                speak("现在该吃午饭了");
                lastReminder = "现在该吃午饭了";
            }
           
        }
        else if (14 <= hour && hour < 16) {
            reminder.innerText = "提醒：吃午后药了吗？💊"; 
            if (lastReminder !== "现在该吃午后药了") {
                speak("现在该吃午后药了");
                lastReminder = "现在该吃午后药了";
            }
           
        }

        else if (16 <= hour && hour < 18) {
            reminder.innerText = "提醒：散步午休？🚶‍♂️";
            if (lastReminder !== "现在该散步午休了") {
                speak("现在该散步午休了");
                lastReminder = "现在该散步午休了";
            }   
            
        }

         else if (18 <= hour && hour < 20) {
            reminder.innerText = "提醒：吃晚饭了吗？🥣";  
            if (lastReminder !== "现在该吃晚饭了") {
                speak("现在该吃晚饭了");
                lastReminder = "现在该吃晚饭了";
            }
            
        }
         else if (20 <= hour && hour < 22) {
            reminder.innerText = "提醒：吃完上的药了吗？💊";
                if (lastReminder !== "现在该吃晚上的药了") {
                    speak("现在该吃晚上的药了");
                    lastReminder = "现在该吃晚上的药了";
                }      
            
        }
         else if (22 <= hour && hour < 24) {
            reminder.innerText = "提醒：刷牙了吗？🪥"; 
                if (lastReminder !== "现在该刷牙了") {
                    speak("现在该刷牙了");
                    lastReminder = "现在该刷牙了";
                }     
            
        }
         else if (0 <= hour && hour < 7) {
            reminder.innerText = "提醒：闭上眼睡觉吧！💊";  
                if (lastReminder !== "现在该睡觉了") {
                    speak("现在该睡觉了");
                    lastReminder = "现在该睡觉了";
                } 
          
        }
         
        else {
            reminder.innerText = "提醒：记得按时服药！";
        }
        }
    

// 任务高亮
    function highlightCurrentTask() {
        const now = new Date();
        const hour = now.getHours();
        const tasks = document.querySelectorAll("#taskList li");
        tasks.forEach(task => {
            let start = parseInt(task.getAttribute("data-start"));
            let end = parseInt(task.getAttribute("data-end"));
            if (hour >= start && hour < end) {
                task.style.backgroundColor = "#b7efb0";
            } else {
                task.style.backgroundColor = "#eee";
            }
        });
    }
    
// 语音提醒
function speak(text) {
    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "zh-CN";
    msg.rate = 0.8;
    msg.pitch = 1;
    msg.volume = 1;

    msg.onerror = (e) => console.log("提醒语音错误", e);

    speechSynthesis.speak(msg);
}
// 每日一文内容

let currentDaily = 0;
const dailyItems = [

{
title:"西游记 · 石猴出世",
text:"花果山上一块神奇的仙石忽然裂开，从里面跳出一只石猴。石猴聪明勇敢，很快成为猴群的领袖。后来猴子们发现瀑布后面有一个山洞，石猴第一个跳进去探险，发现那里可以居住。猴群于是把石猴推举为猴王，从此花果山变得非常热闹。"
},

{
title:"西游记 · 大闹天宫",
text:"孙悟空学会了七十二变和腾云驾雾。他来到天宫后觉得规矩太多，于是闹起了天宫。天兵天将都抓不住他。后来如来佛祖出手，把孙悟空压在五行山下。孙悟空在那里反省了五百年。"
},

{
title:"西游记 · 唐僧收徒",
text:"唐僧为了到西天取经，从长安出发。路过五行山时，他救出了被压在山下的孙悟空。孙悟空答应保护唐僧取经。从此他们一起踏上了漫长而充满危险的旅程。"
},

{
title:"三国演义 · 桃园三结义",
text:"东汉末年天下大乱。刘备、关羽和张飞志同道合。他们在桃园里摆下酒席，对天发誓结为兄弟。他们说虽然不能同年同月同日生，但愿同年同月同日死。从此三人一起闯荡天下。"
},

{
title:"三国演义 · 草船借箭",
text:"诸葛亮需要十万支箭，却没有时间制作。他准备了几只草船，在大雾的夜晚靠近敌军。敌军以为有人进攻，不停射箭。箭全部插在草船上。诸葛亮轻松借到了大量箭。"
},

{
title:"水浒传 · 武松打虎",
text:"武松路过景阳冈。有人提醒他说山上有老虎。武松喝了几碗酒后继续上山。果然遇到一只猛虎。武松赤手空拳与老虎搏斗，最终把老虎打死，从此名声大震。"
},

{
title:"水浒传 · 鲁智深拔柳",
text:"鲁智深力气很大。有一天他看到一棵大柳树，双手一用力，竟然把整棵树连根拔起。周围的人都非常惊讶，大家都觉得鲁智深是真正的大力士。"
},

{
title:"红楼梦 · 黛玉葬花",
text:"春天的大观园花开得很美。林黛玉看到花瓣慢慢飘落，觉得花很可怜。于是她把花瓣捡起来，轻轻埋在土里，一边埋花一边叹息。这个故事表现了黛玉细腻而敏感的心情。"
},

{
title:"世界奇闻 · 会发光的海",
text:"在一些海边，夜晚会出现发光的海水。当海浪拍打沙滩时，会发出蓝色的光。这是因为海水中有一种微小的生物，当海水被搅动时它们就会发光。远远看去就像星空一样。"
},

{
title:"世界奇闻 · 会移动的石头",
text:"在美国死亡谷沙漠，有些石头会自己移动。人们发现石头在地上留下长长的痕迹，但没有人看到它们移动。后来科学家发现，这是因为冰和风一起推动石头。"
},

{
title:"世界奇闻 · 会下鱼的雨",
text:"在中美洲洪都拉斯，有时候大雨过后地上会出现很多鱼。看起来像是从天上掉下来的。有人认为是龙卷风把鱼卷到天空中，然后又掉下来。"
},

{
title:"世界奇闻 · 会唱歌的沙子",
text:"在一些沙漠里，风吹过沙丘时会发出像音乐一样的声音。人们称它为会唱歌的沙子。这种现象非常神奇。"
},

{
title:"世界奇闻 · 世界最大的花",
text:"世界上最大的花叫大王花，可以长到一米宽。它没有叶子和茎，开花时会发出特别的气味。"
},

{
title:"世界奇闻 · 蓝色火焰",
text:"在印度尼西亚的一座火山里，夜晚可以看到蓝色火焰。这种火焰在黑暗中非常美丽，吸引很多游客前来观看。"
},

{
title:"动物趣事 · 会笑的海豚",
text:"海豚是一种非常聪明的动物。它们喜欢和人类一起玩耍。很多人觉得海豚像在微笑，其实那是它们脸部的结构。"
},

{
title:"动物趣事 · 会说话的鹦鹉",
text:"鹦鹉可以模仿人类说话。有些鹦鹉甚至会说很多句子。它们通过听声音来学习，非常聪明。"
},

{
title:"动物趣事 · 大象的记忆",
text:"人们常说大象记忆很好。科学家发现大象确实能记住很多事情，比如很远的水源位置。"
},

{
title:"动物趣事 · 会装死的负鼠",
text:"负鼠遇到危险时会突然倒在地上，看起来像死了一样。很多动物就不再攻击它。等危险过去它就会离开。"
},

{
title:"动物趣事 · 聪明的乌鸦",
text:"乌鸦是一种非常聪明的鸟。它们会使用小树枝作为工具来获取食物。"
},

{
title:"动物趣事 · 会跳舞的鸟",
text:"有一种鸟在求偶时会跳舞。它们张开羽毛，做出各种动作，就像在表演节目一样。"
},

{
title:"动物趣事 · 企鹅滑冰",
text:"企鹅生活在南极。它们有时会趴在冰面上滑行，看起来就像在滑冰一样，非常可爱。"
},

{
title:"历史故事 · 指南针",
text:"中国古代发明了指南针。它可以帮助人们辨认方向。后来航海家利用指南针进行远洋航行。"
},

{
title:"历史故事 · 造纸术",
text:"古代人最早在竹简上写字。后来蔡伦改进了造纸术，使纸更加方便使用。"
},

{
title:"历史故事 · 活字印刷",
text:"宋代的毕昇发明了活字印刷，使书籍可以更快印出来。知识也因此传播得更广。"
},

{
title:"历史故事 · 丝绸之路",
text:"古代中国通过丝绸之路与西方进行贸易。商人带着丝绸、瓷器远行，也促进了文化交流。"
},

{
title:"历史故事 · 长城",
text:"长城是中国古代修建的重要防御工程。它是世界上最长的建筑之一。"
},

{
title:"历史故事 · 郑和下西洋",
text:"明朝的郑和率领船队远航，访问了许多国家。这是中国历史上著名的航海活动。"
},

{
title:"历史故事 · 京剧",
text:"京剧是中国传统戏曲。演员通过唱念做打来表演故事。"
},

{
title:"历史故事 · 故宫",
text:"北京故宫是中国古代皇宫，也是世界上最大的古代宫殿建筑群之一。"
},

{
title:"历史故事 · 兵马俑",
text:"秦始皇兵马俑是两千多年前的陶俑军队，被称为世界第八大奇迹。"
}

];

function renderDaily(){
const item = dailyItems[currentDaily];
const img = document.getElementById("dailyImage");

if (img) {
        if (item.image) {
            img.src = item.image;
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    }

document.getElementById("dailyTitle").innerText = item.title;

document.getElementById("dailyText").innerText = item.text;

}
// 每日一文切换
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

// 每日一文朗读



function speakStory(text) {
    
    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "zh-CN";
    msg.rate = 0.65;
    msg.pitch = 1;
    msg.volume = 1;

    msg.onerror = (e) => console.log("故事语音错误", e);

    speechSynthesis.speak(msg);
}

function readDaily() {
    const item = dailyItems[currentDaily];
    speakStory(item.title + "。" + item.text);
}

function togglePause(){

if(speechSynthesis.paused){

speechSynthesis.resume();

}else{

speechSynthesis.pause();

}

}

function stopSpeak() {
    speechSynthesis.cancel();
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", init);






const datum=document.getElementById("date");
        const heute= new Date();
        
        datum.textContent=heute.toLocaleDateString('de-DE');
        function checkin(){
            const studentName=prompt("Wie heißt du?");
            if(studentName){
            const dayDatum=document.createElement("td");
            dayDatum.textContent=heute.toLocaleDateString('de-DE');
            const table=document.getElementById("table");
            const row=document.createElement("tr");
            const name=document.createElement("td");
            name.textContent=studentName;
            const status=document.createElement("td");
            status.textContent="🏅";
            row.appendChild(dayDatum);
            row.appendChild(name);
            row.appendChild(status);
            table.appendChild(row);
            } else
            {
             alert("Wer bist du?");}
        }


       function marked(){
        const poemImage= document.getElementById("prizePic");
       poemImage.style.display="block" ;
        // alert("太棒了！你背过这首诗了！")
     }


const questions = [
  {
    img: "img/soup-23469_1280.png",
    name: "q1",
    options: ["吃饭", "喝水", "看电视"],
    answer:"吃饭"
  },
  {
    img: "img/bird-3362405_1280.png",
    name: "q2",
    options: ["说话", "歌唱", "讲话"],
    answer:"歌唱"
  },
  {
    img: "img/classroom-1297781_1280.png",
    name: "q3",
    options: ["听歌", "学习", "上来"],
    answer:"学习"
  },
  {
    img: "img/tv-watching-7335219_1280.png",
    name: "q4",
    options: ["看电视", "拍手", "拉门"],
    answer:"看电视"
  },
  {
    img: "img/woman-8808258_1280.png",
    name: "q5",
    options: ["喝", "跑步", "看书"],
    answer:"喝"
  },
  {
    img: "img/YUE.jpg",
    name: "q6",
    options: ["看月亮", "做作业", "用心"],
    answer:"看月亮"
  }
];



function generateCard(){

// Hauptcontainer für alle Karten auswählen
const container = document.querySelector(".flash-card");

// Jede Frage wird dynamisch erstellt
questions.forEach((q, index) => {
  // Neue Div für Bild und Optionen erstellen
  const cardImgDiv = document.createElement("div");
  cardImgDiv.className = "cardImg";
  cardImgDiv.style.display="none"

  // Bild-Element erstellen
  const image = document.createElement("img");
  image.src = q.img;
  image.width = 150;
  image.height = 200;
  image.alt = "Bild zur Frage";

  // Bild in die Karte einfügen
  cardImgDiv.appendChild(image);

  // Container für Auswahloptionen erstellen
  const optionDiv = document.createElement("div");
  optionDiv.className = "option";

  // Für jede Antwortmöglichkeit ein Radio-Button und Label erzeugen
  q.options.forEach((opt, i) => {
    // Radio-Input erstellen
    const input = document.createElement("input");
    input.type = "radio";           // Typ ist Radio-Button
    input.name = q.name;            // Gleicher Name für dieselbe Fragegruppe
    input.value = opt;              // Wert der Antwort

    // Label für den Radio-Button erstellen
    const label = document.createElement("label");
    // Radio + Label dem Optionencontainer hinzufügen
    label.appendChild(input);
    label.append(opt);
    optionDiv.appendChild(label);
  });

  // Optionen zur Karte hinzufügen
  cardImgDiv.appendChild(optionDiv);

  // Ganze Karte dem Hauptcontainer hinzufügen
  container.appendChild(cardImgDiv);
}
);
}
let index = 0;
let score=0;
function showNext(){
    
    const cardImage=document.querySelectorAll(".cardImg");
    const titleText=document.getElementById("title");
    const btn=document.querySelector(".nextImage");
    if (index<cardImage.length){
        titleText.textContent="";
        
        if(index!=0){cardImage[index-1].style.display="none";}
            cardImage[index].style.display="block";
        
         if (index === 0) {
            btn.textContent = "Next";
        }
       index++;  
    } 
        else {
        scoreCounting();
        showScore();
        alert("全部看完啦！");
        btn.textContent = "End";
        btn.disabled=true;
        btn.classList.remove("nextImage");
        btn.classList.add("nextImage-disabled");
    }
}

function showScore(){
    // const scoreArea=document.querySelector('.scoreArea');
    const stampleContainer=document.querySelector(".flash-card");
    scoreShow=document.querySelector('#scoreResult');
    scoreShow.textContent=score;
    scoreShow.style.display="inline-block";
    const prizeImgBox=document.createElement("div");
    prizeImgBox.classList.add("gutgemacht");
    if(score>=4){
        prizeImgBox.textContent="🥳 gut gemacht!";}
        else{prizeImgBox.textContent="🫤....."}
         stampleContainer.appendChild(prizeImgBox);
        }

 

 function scoreCounting(){
    for (let i=0;i<questions.length;i++){
        const q= questions[i];
        const selected=document.querySelector (`input[name="${q.name}"]:checked`);
        if(selected&&selected.value===q.answer){
            score++;
            }
    }
    }

    function calender(){
        const calenderBox=document.querySelector(".calenderArea");
        const listDatum=document.createElement("ul");
         let startDay= new Date('2025-09-06');
        for(let i=0; i<12;i++ ){
        const datumDay=document.createElement("li");
        const dateString=startDay.toISOString().slice(0,10);
        datumDay.textContent=dateString;
        datumDay.style.cursor="pointer";
        datumDay.title="Beurlaubung beantragen";
        datumDay.onclick=function(){
            const ifholiday=confirm(`Bestätigen Sie den Beurlaubungsantrag für den ${dateString}? `);
            if(ifholiday){
                alert('Der Antrag wurde erfolgreich übermittelt');
                datumDay.style.backgroundColor="#ccc";
            };
        };
    
         listDatum.appendChild(datumDay);
        startDay.setDate(startDay.getDate()+7);}
        calenderBox.appendChild(listDatum);

    }
document.addEventListener("DOMContentLoaded",calender);
document.addEventListener("DOMContentLoaded",  generateCard ());

 
 
 
 

 
 

 
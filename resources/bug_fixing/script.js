var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var frageText = document.getElementById("frage_text");
var scoreViewer = document.getElementById('score');


//Array mit Fragen
var fragen = [
  {
    frage: "Was ist 1 + 1?",
    answerOne: "1",
    answerTwo: "2",
    answerThree: "3",
    answerFour: "4",
    correctAnswer: "2"
  },
  {
    frage: "Was ist die Wurzel aus 13?",
    answerOne: "4.20",
    answerTwo: "1.3",
    answerThree: "6.9",
    answerFour: "3.6",
    correctAnswer: "3.6"
  },
  {
    frage: "Zu wie viel Prozent besteht unser Planet aus Wasser?",
    answerOne: "70%",
    answerTwo: "80%",
    answerThree: "20%",
    answerFour: "50%",
    correctAnswer: "70%"
  },
  {
    frage: "Was hat eine größere Dichte, 1 kg Gold oder 1 kg Silber?",
    answerOne: "beides gleich",
    answerTwo: "Silber",
    answerThree: "keins",
    answerFour: "Gold",
    correctAnswer: "Gold"
  },
  {
    frage: "Welcher ist der höchste Berg der Welt?",
    answerOne: "Matterhorn",
    answerTwo: "Himalaya",
    answerThree: "Mount Everest",
    answerFour: "Uluru",
    correctAnswer: "Mount Everest"
  },
  {
    frage: "Welches ist das grösste Land der Welt?",
    answerOne: "Russland",
    answerTwo: "Europa",
    answerThree: "China",
    answerFour: "USA",
    correctAnswer: "Russland"
  }
];


// Ein Teil des Codes wurde auf Grundlagen mehrerer Stack Overflow posts erstellt
var score = 0;
var currentQuestion;

function nextQuestion() {
  if (fragen.length === 0) {
    alert("Quiz beendet! Dein Punktestand: " + score + " " + "von 6");
    return;
  }


//https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/5915122#5915122
  var randomIndex = Math.floor(Math.random() * fragen.length);
  currentQuestion = fragen[randomIndex];

  frageText.innerText = currentQuestion.frage;

  button1.innerText = currentQuestion.answerOne;
  button2.innerText = currentQuestion.answerTwo;
  button3.innerText = currentQuestion.answerThree;
  button4.innerText = currentQuestion.answerFour;


//https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice
  fragen.splice(randomIndex, 1);
}

function onButtonPressed(event) {
  var selectedAnswer = event.target.innerText;

  if (selectedAnswer === currentQuestion.correctAnswer) {
    console.log("Richtige Antwort!");
    score++;
  } else {
    console.log("Falsche Antwort!");
  }

  scoreViewer.innerText = score;
  nextQuestion();
}

nextQuestion();
button1.addEventListener("click", onButtonPressed);
button2.addEventListener("click", onButtonPressed);
button3.addEventListener("click", onButtonPressed);
button4.addEventListener("click", onButtonPressed);


scoreViewer.innerText = "Punkte:" + score.value;

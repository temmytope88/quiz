//create an array of object with the questions and options
var questions =
[{
    "question":"The maximum number of electrons in energy level n=5 can contain is?",
    "opt1": "18",
    "opt2": "32",
    "opt3": "50",
    "opt4": "12",
    "answer": "3"

},
{ 
  "question":"what is the shape of the p-orbital?",
  "opt1": "spherical",
  "opt2": "dumb-bell",
  "opt3": "double dumb-bell",
  "opt4": "complex",
  "answer": "2"

},
{
  "question":"which of thefollowing elements has the least ionization energy?",
  "opt1": "Sodium",
  "opt2": "Chlorine",
  "opt3": "Sulphur",
  "opt4": "Magnessium",
  "answer": "1"
},
{
  "question":"which of the following does not affect the eqilibrium position of a reaction?",
  "opt1": "change in concentration",
  "opt2": "Catalyst",
  "opt3": "Change in pressure",
  "opt4": "Change in volume",
  "answer": "2"
},
{
  "question":"The basic hydrolysis of alkanoate is called?",
  "opt1": "Condensation",
  "opt2": "Salting out",
  "opt3": "Esterification",
  "opt4": "Saponification",
  "answer": "4"
}];



var  currentQuestion = 0;
var  score = 0;
var totalquestion = questions.length;

var container = document.getElementById("quizcontainer");
var  questionelement = document.getElementById("question");
var  resultcontainer = document.getElementById("result");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextbutton = document.getElementById("nextButton");
//var result = document.getElementById("result");

     
    
    
    function loadquestion (){
      var q = questions[currentQuestion];
    

   questionelement.textContent = (currentQuestion+1)+". "+ q.question;
   opt1.textContent = "A. " + q.opt1;
   opt2.textContent = "B. " + q.opt2;
   opt3.textContent = "C. " + q.opt3;
   opt4.textContent = "D. " + q.opt4;
    }

function loadNextQuestion () {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption){
    alert("Please pick an answer");
    return;

  }
  
  var answer = selectedOption.value;

   console.log(selectedOption.value);
  
  if (questions[currentQuestion].answer == answer){
   score = score + 10;
   gf = "opt"+answer
   document.getElementById(gf).style.color="white"
   document.getElementById(gf).style.background="green"
   
   
   }

   selectedOption.checked = false;

   currentQuestion  =  currentQuestion + 1;

if (currentQuestion == totalquestion - 1){
  nextbutton.textContent = "finish";
}
if( currentQuestion == totalquestion){
  container.style.display ="none";
  resultcontainer.style.display ="";
  resultcontainer.textContent = "Your score is : "+ score;
  return;
}
 loadquestion(currentQuestion);
}

loadquestion(currentQuestion);
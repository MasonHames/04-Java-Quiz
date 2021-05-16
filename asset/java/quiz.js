// pos is position of where the user in the test or which question they're up to
let pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
let questions = [
  {
      question: "If an item does not have a assigned value it is ___.",
      a: "undefined",
      b: "NaN",
      c: "0",
      answer: "A"
    },
  {
      question: "Functions are viewed as ____.",
      a: "Boolean",
      b: "Variables",
      c: "Objects",
      answer: "C"
    },
  {
      question: "What is viewable globaly regardless of where it is nested?",
      a: "var",
      b: "let",
      c: "const",
      answer: "A"
    },
  {
      question: "What happenes when javascript encounters an error?",
      a: "it plays a fun tune and orders you a pizza",
      b: "it skips the error and issues no warning",
      c: "It stops and issues an error in the console",
      answer: "C"
    }
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow user to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);

//code for timer..need to add event listeners to answere buttons to subtract time and hide the start button after click
let myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     let i = 120;

     function myClock() {
       document.getElementById("demo").innerHTML = --i
       if (i == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }}}
//put the localStorage for the name and score here
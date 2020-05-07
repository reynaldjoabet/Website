const options=document.querySelector(".options").children;
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const opt1=document.querySelector(".option1");

const opt2=document.querySelector(".option2");
const opt3=document.querySelector(".option3");
const opt4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

// creating an array of questions and their respective options
// for uniformity, i decided to add a fourth option to 2 question provided in the coursework
const questions=[
{
    q:'Which of the following is the correct format for the HTML5 doctype?',
    options:['A.    &lt; DOCTYPE html! &gt;','B.    &lt; !DOCTYPE html &gt;',
    'C.    &lt; !html DOCTYPE &gt;',
    'D.     &lt; html DOCTYPE! &gt;'
    ],
    answer: 2
},
{
    q:'Which of the following examples is the correct way to markup a paragraph?',
    options:['A.    &lt; paragraph &gt; This is a paragraph &lt;paragraph &gt;','B.    &lt; p1 &gt; This is a paragraph &lt;/p1 &gt;',
    'C.    &lt; p&gt; This is a paragraph &lt;/p&gt;',
    
    'D.   None'
    ],
    answer: 3
},
{
    q:'Which of the following examples would you expect to usually render as bold text?',
    options:['A.    &lt; em &gt; Test &lt; /em &gt;','B.   &lt; strong &gt; Test &lt; /strong &gt;',
    'C.    &lt; bold &gt; Test &lt; /bold &gt;',
    'D.     &lt; S &gt; Test &lt; /s &gt;'
    ],
    answer: 2
},
{
    q:'Which of the following is used to include an image in a page?',
    options:['A.    &lt; img &gt;','B.    &lt;image &gt;',
    'C.    &lt; imagesrc &gt;',
    'D.     &lt;images &gt;'
    ],
    answer: 1
},
{
    q:'Which of the following is not an example of a valid html tag?',
    options:['A.    &lt; p &gt;','B.    &lt;html &gt;',
    'C.    &lt; src &gt;',
    'D.     &lt;body&gt;'
    ],
    answer: 3
}

 
]

//checking for correct response
function check(element){
    if(element.id==questions[questionIndex].answer){
element.classList.add("correct");
score++;
    }
else{
    element.classList.add("wrong");
}
disbaleOptions()
}


// disbale other options once on option is selected
function disbaleOptions(){
    for(let i=0; i<options.length;i++){
        options[i].classList.add("disabled") ;  
    if(options[i].id==questions[questionIndex].answer){
        options[i].classList.add("correct");
    }
    
    }

}
function enableOptions(){
    for(let i=0; i<options.length;i++){
      options[i].classList.remove("disabled","correct","wrong");  
    
    }

}

//randomize the questions to make it more fun
function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    if(index==questions.length){
        quizOver();
        console.log("over");
        
    }
    else{
        if(myArray.length>0){
            for(let i=0; i<myArray.length;i++){
if(myArray[i]==randomNumber){
    hitDuplicate=1;
    break;
}
    }
    if(hitDuplicate==1){
        randomQuestion();
    }
    else{
        questionIndex=randomNumber;
            load(); 
            myArr.push(questionIndex);
    }
        }
        if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
        }
    
    myArray.push(randomNumber)
    
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("No option selected.Answer question to move to next")
    }
    else 
    {
         enableOptions();
        randomQuestion();
    }
}

function nextQuestion(){
    validate();
}



function quizOver(){
document.querySelector(".quiz-over").classList.add("show");
correctAnswerSpan.innerHTML=score;
totalQuestionSpan2.innerHTML=questions.length;

} 



function anotherAttempt(){
    window.location.reload();
}


totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
question.innerHTML=questions[questionIndex].q;
opt1.innerHTML=questions[questionIndex].options[0];
opt2.innerHTML=questions[questionIndex].options[1];
opt3.innerHTML=questions[questionIndex].options[2];
opt4.innerHTML=questions[questionIndex].options[3];
index++;
}



window.onload=function(){
    randomQuestion();
}

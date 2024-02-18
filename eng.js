document.getElementById("ans_butt").addEventListener("click",display)
document.getElementById("next_button").addEventListener("click",next)
document.getElementById("prv_button").addEventListener("click",prev)

let questions=[
    {"Ques": "Calculate the Aree of a rectangle with length 5, and width 6", "opt1":"5cm","opt2":"30cm","opt3":"70cm", "correct":"opt1"},
    {"Ques": "What is the total angle in a circle ", "opt1":"180 Degree","opt2":"120 Degree","opt3":"270 Degree"},
    {"Ques": "shorest distance between two point is  ", "opt1":"line","opt2":"curev","opt3":"Degree"},
]
let ques_num=0;
let last_ques=""
function next() {
    if (ques_num<questions.length) {
        ques_num++; 
    }else{
    last_ques="This is the last Question"
    }
   
    document.getElementById("ch").innerHTML=last_ques
    document.getElementById("question_label").innerHTML=questions[ques_num].Ques
}

function prev() {
    if (ques_num==0 || ques_num<0) {
        last_ques=""
    }else{
        ques_num--
    }
    document.getElementById("ch").innerHTML=last_ques
    document.getElementById("question_label").innerHTML=questions[ques_num].Ques
}
document.getElementById("question_label").innerHTML=questions[ques_num].Ques
function display() {
    let getanswer= document.querySelector('input[name="r1"]:checked')
    
    if (getanswer) {
        if (getanswer.value=="option1") {
            document.getElementById("change").innerHTML=questions[0].Ques;
            ques_num++
        }else{
            document.getElementById("change").innerHTML="YOU ARE WRONG"
        }
        
    }
    
   
}







/* 
let x= document.getElementById("change")
 
function name(params) {
    
}
document.getElementById("ans_butt").addEventListener("click", function() {
    var selectedOption = document.querySelector('input[name="r1"]:checked');
    x.innerHTML= selectedOption.value
}); 

*/
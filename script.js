function check()
{
    var score=0;
    var q1=document.quizz.q1.value;
    var q2=document.quizz.q2.value;
    var q3=document.quizz.q3.value;
    var q4=document.quizz.q4.value;
    var q5=document.quizz.q5.value;
    
    if(q1=="c"){score++;}
    if(q2=="d"){score++;}
    if(q3=="d"){score++;}
    if(q4=="c"){score++}
    if(q5=="c"){score++}
    
    var percent= (score/5)*100;
  
    document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}
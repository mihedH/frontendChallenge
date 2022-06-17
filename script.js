switch (new Date().getDay()){
    case 0:
        document.getElementById("sun").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
    case 1:
        document.getElementById("mon").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
    case 2:
        document.getElementById("tue").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
    case 3:
        document.getElementById("wed").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
    case 4:
        document.getElementById("thu").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
    case 5:
        document.getElementById("fri").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
    case 6:
        document.getElementById("sat").style.backgroundColor="hsl(186, 34%, 60%)";
        break;
}
let monday=document.getElementById('mon');
let tuesday=document.getElementById('tue');
let wednesday=document.getElementById('wed');
let thursday=document.getElementById('thu');
let friday=document.getElementById('fri');
let saturday=document.getElementById('sat');
let sunday=document.getElementById('sun');

monday.onmouseover=function(){
    document.getElementById('n1').style.display='block';
}
monday.onmouseout=function(){
    document.getElementById('n1').style.display='none';
}
tuesday.onmouseover=function(){
    document.getElementById('n2').style.display='block';
}
tuesday.onmouseout=function(){
    document.getElementById('n2').style.display='none';
}
wednesday.onmouseover=function(){
    document.getElementById('n3').style.display='block';
}
wednesday.onmouseout=function(){
    document.getElementById('n3').style.display='none';
}
thursday.onmouseover=function(){
    document.getElementById('n4').style.display='block';
}
thursday.onmouseout=function(){
    document.getElementById('n4').style.display='none';
}
friday.onmouseover=function(){
    document.getElementById('n5').style.display='block';
}
friday.onmouseout=function(){
    document.getElementById('n5').style.display='none';
}
saturday.onmouseover=function(){
    document.getElementById('n6').style.display='block';
}
saturday.onmouseout=function(){
    document.getElementById('n6').style.display='none';
}
sunday.onmouseover=function(){
    document.getElementById('n0').style.display='block';
}
sunday.onmouseout=function(){
    document.getElementById('n0').style.display='none';
}
//시작을 누르면 RED->Green->Blue 순으로 1초마다 색상이 순서대로 켜지고 앞의 색은 꺼지고
//정지를 누르면 clearInterval()
//비우기를 누르면 3가지 색상이 모두 흰색바탕으로 리셋됨
let timeset=null;
let i=0;



let sRed = getId("dvRed");
let sGreen = getId("dvGreen");
let sBlue = getId("dvBlue");
let bstr='background-color:'
let colorWhite = 'background-color:white'

/* document.getElementById("btnStart").addEventListener('click',function(){
    timeset=setInterval(function(){
        if(i%3==0){
            document.getElementById("dvRed").style="background-color: red";
            document.getElementById('dvGreen').style="background-color: white";
            document.getElementById('dvBlue').style="background-color: white"
        }else if(i%3==1){
            document.getElementById("dvGreen").style="background-color: green";
            document.getElementById('dvRed').style="background-color: white";
            document.getElementById('dvBlue').style="background-color: white"; 
        }else if(i%3==2){
            document.getElementById("dvBlue").style="background-color: blue";
            document.getElementById('dvRed').style="background-color: white";
            document.getElementById('dvGreen').style="background-color: white";
            
        }i++;
        },1000);
    }); */

    document.getElementById("btnStart").addEventListener('click',function(){
    timeset=setInterval(function(){
        if(i%3==0){
            sRed.style=bstr+"red";
            sGreen.style=colorWhite;
            sBlue.style=colorWhite
        }else if(i%3==1){
            sGreen.style=bstr+"green";
            sRed.style=colorWhite;
            sBlue.style=colorWhite;
        }else if(i%3==2){
            sBlue.style=bstr+"blue";
            sRed.style=colorWhite;
            sGreen.style=colorWhite;
            
        }i++;
        },1000);
    });

    document.getElementById("btnStop").addEventListener('click',function(){
    if(timeset!=null) clearInterval(timeset);
    });

document.getElementById("btnClear").addEventListener('click',function(){
        if(timeset!=null)
        clearInterval(timeset);
        sGreen.style=colorWhite;
        sRed.style=colorWhite;
        sBlue.style=colorWhite;
    });
function getId(pstr){
    return document.getElementById(pstr);
}

/* document.getElementById("btnStart").addEventListener('click',function(){
    timeset=setInterval(function(){
        switch(i%3){
        case 0:
            document.getElementById("dvRed").style="background-color: red";
            document.getElementById('dvGreen').style="background-color: white";
            document.getElementById('dvBlue').style="background-color: white"
            break;
        case 1:
            document.getElementById("dvGreen").style="background-color: green";
            document.getElementById('dvRed').style="background-color: white";
            document.getElementById('dvBlue').style="background-color: white";
            break;
        case 2:
            document.getElementById("dvBlue").style="background-color: blue";
            document.getElementById('dvRed').style="background-color: white";
            document.getElementById('dvGreen').style="background-color: white";
            break;
        }
        i++;
    },1000);
        
});

document.getElementById("btnStop").addEventListener('click',function(){
    if(timeset!=null) clearInterval(timeset);
    });

document.getElementById("btnClear").addEventListener('click',function(){
        if(timeset!=null)
        clearInterval(timeset);
        document.getElementById("dvBlue").style="background-color: white";
        document.getElementById('dvRed').style="background-color: white";
        document.getElementById('dvGreen').style="background-color: white";
    });
function getId(pstr){
    return document.getElementById(pstr);
} */
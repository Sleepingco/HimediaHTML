let timeset,k,flag,limit;
$(document)
.ready(function(){//초기화(initialization) after loading web page
    timeset=null;
    k=1;
    flag=true; // true: k 증가, false: k 감소
    limit=$('div').length;
})
.on('click','#btnStart',function(){
    timeset = setInterval(function(){
        coloring(k);
        if(k==limit) flag=false;
        else if(k==1) flag=true;

        if(flag)    k++;
        else        k--;
        
    },100);
})
.on('click','#btnStop',function(){
    if(timeset!=null) clearInterval(timeset);
});    
function coloring(k){
    for(let i=1; i<=limit; i++){
        if(i==k){
            // $('#dv'+k).css('background-color','red');
            $('#dv'+k).addClass('bgRed bdBlack');
        } else {
            // $('#dv'+i).css('background-color','white');
            $('#dv'+i).removeClass('bgRed bdBlack');
        }
    }
}

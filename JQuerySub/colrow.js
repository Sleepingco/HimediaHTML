/* row=prompt('row');
col=prompt('col');
row=parseInt(row);
col=parseInt(col);
num=1;
document.write('<table>');
for(let i=0;i<row;i++){
    document.write("<tr>");
    for(j=0;j<col;j++){
        document.write("<td>"+num+"</td>");
        num++;
    }
    document.write("</tr>");
}
document.write("</table>"); */


let row=prompt('row');
let col=prompt('col');
let str='<table>';
for(let i=0;i<row;i++){
    str+='<tr>';
    for(let j=0;j<col;j++){
        str+='<td></td>';
    }
    str+='</tr>';
}
str+='</table>';

// document.write(str+"<br><br>");
// document.write(str+"<br><br>");
// document.write(str+"<br><br>");
$('body').append(str+'<br><br>'+str+"<br><br>"+str);

let arColor=['red','blue'];
let k=1;
for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        $(`table:eq(0) tr:eq(${i}) td:eq(${j})`).text(k++).css('color',arColor[k%2]);
    }
}


k=1;
for(let i=0; i<row; i++){
    if(i%2==0){
        for(let j=0; j<col;j++){
            $(`table:eq(1) tr:eq(${i}) td:eq(${j})`).text(k++).css('color',arColor[k%2]);
        }
    }else{
        for(let j=col-1; j>=0;j--){
            $(`table:eq(1) tr:eq(${i}) td:eq(${j})`).text(k++).css('color',arColor[k%2]);
        }
    }
}
let direction='right';
let right=col-1;
let down=row-1;
let left=0,up=1;
let i=0,j=0;
for(k=1;k<=row*col;k++){
    $(`table:eq(2) tr:eq(${i}) td:eq(${j})`).text(k).css('color',arColor[k%2]);
    if(direction=='right'){
        j++;
        if(j>right){
            direction = 'down';
            j--; i++; right--;
        }
    }else if(direction =='down'){
        i++;
        if(i>down){
            direction='left';
            i--; j--; down--;
        }
    }else if(direction=='left'){
        j--;
        if(j<left){
            direction='up';
            j++; i--; left++;
        }
    }else if(direction=='up'){
        i--;
        if(i<up){
            direction='right';
            i++;j++;up++;
        }
    }
}
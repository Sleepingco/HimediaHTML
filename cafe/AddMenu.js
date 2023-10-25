/* document.getElementById('btnAddMenu').addEventListener('click',function(){ //menuadd
    let oMenu = {};
    
    while (true) {
        let a = prompt('메뉴명');
        if (a == '')break;
        oMenu[a] = prompt('가격');;
    }
    for(let a in oMenu) {
        let str='<option>'+a+' , '+oMenu[a]+'</option>'
        document.getElementById('menu').innerHTML+=str
    };      
}); */


/* document.getElementById('qty').addEventListener('change',function(){ //faild code
    let qty = getElementById('qty').value;
    document.getElementById('sum').innerHTML=oMenu[a]*qty;
});

document.getElementById('menu').addEventListener('change',function(){
        for(let a=0;a<=oMenu.length;a++){
            oMenu[a]=split(',')
            oMenu[a]=oMenu[a].trim();
        }
        document.getElementById('order').innerHTML=a;
}); */
// a+=b == a=a+b;
//callback: 호출하면 바로 실행되는게 아닌 호출을 미루는것이다 함수가 다른 함수로서 호출되는 방식
//  다른함수에 매개변수로서 사용되는 함수

/* document.getElementById('menu').addEventListener('change', function() { //gptcode menuchoice
    let selectedOption = document.getElementById('menu').value;
    let menuData = selectedOption.split(',');
    let menuName = menuData[0].trim();
    let menuPrice = menuData[1].trim();
    document.getElementById('order').value = menuName;
    document.getElementById('qty').addEventListener('change', function() {
        let qty = document.getElementById('qty').value;
        document.getElementById('sum').value = menuPrice * qty;
  });
}); */

/* document.getElementById('menu').addEventListener('change',function(){ //강사님 코드 메뉴 선택
    let pstr=document.getElementById('menu').value;
    let ar = pstr.split(',')
    ar[0]=ar[0].trim(); ar[1]=ar[1].trim();

    document.getElementById('order').value=ar[0];
    document.getElementById('qty').value=1;
    document.getElementById('sum').value=ar[1];
    net=parseInt(ar[1]);
    
});
document.getElementById('qty').addEventListener('change',function(){
    let qty=document.getElementById('qty').value;
    document.getElementById('sum').value=qty*net;
}); */


/* //js로작성
let oMenu = {};
let net =0;
document.getElementById('btnAddMenu').addEventListener('click', function() { //클릭이되면 실행되는 코드도 콜백함수이다 즉 나중에 호출 시킬 수 있는 함수를 말한다
  while (true) {
    let a = prompt('메뉴명');
    if (a == '') break;
    oMenu[a] = prompt('가격');
  }
  
  let menuOptions = '';
  for (let a in oMenu) {
    menuOptions += '<option>' + a + ' , ' + oMenu[a] + '</option>';
  }
  document.getElementById('menu').innerHTML += menuOptions; //누적개념 
});

document.getElementById('menu').addEventListener('change',function(){//히든 필드 쓰는법 //히든필드는 전역변수와 같은 용도로 사용할 수 있다
    let pstr=document.getElementById('menu').value;
    let ar = pstr.split(',')
    ar[0]=ar[0].trim(); ar[1]=ar[1].trim();

    document.getElementById('order').value=ar[0];
    document.getElementById('qty').value=1;
    document.getElementById('sum').value=ar[1];
    document.getElementById('net').value=(ar[1]);
    
});
document.getElementById('qty').addEventListener('change',function(){
    let qty=document.getElementById('qty').value;
    document.getElementById('sum').value=qty*parseInt(document.getElementById('net').value);
}); */


//JQUERY로 작성
let oMenu = {};
let net =0;
$(document)
.on('click','#btnAddMenu',function() { //클릭이되면 실행되는 코드도 콜백함수이다 즉 나중에 호출 시킬 수 있는 함수를 말한다
  while (true) {
    let a = prompt('메뉴명');
    if (a == '') break;
    oMenu[a] = prompt('가격');
  }
  
  let menuOptions = '';
  for (let a in oMenu) {
    menuOptions += '<option>' + a + ' , ' + oMenu[a] + '</option>';
    console.log(a,oMenu[a])
  }
//   document.getElementById('menu').innerHTML += menuOptions; //jquery는 아래코드
  $('#menu').append(menuOptions);//뒤에다 추가한다는 개념 append
})


.on('change','#menu',function(){//히든 필드 쓰는법 //히든필드는 전역변수와 같은 용도로 사용할 수 있다
    let pstr=$('#menu').val();
    let ar = pstr.split(',');
    ar[0]=ar[0].trim(); ar[1]=ar[1].trim();

    $('#order').val(ar[0]);
    $('#qty').val(1);
    $('#sum').val(ar[1]);
    $('#net').val(ar[1]);
    console.log(ar[1])
})
.on('change','#qty',function(){
    let qty=$('#qty').val();
    $('#sum').val(qty*parseInt($('#net').val()));
})
.on('click','#cancel',function(){
  $('#order,#qty,#sum').val('');
})

.on('click','#submit',function(){
  let ar = pstr.split(',');
  let selSum = parseInt($('#sum').val());
  selSum = parseInt(selSum);
  let str = $('#order').val()+' x'+$('#qty').val()+', '+$('#sum').val();
  str='<option>'+str+'</option>';
  $('#selOrder').append(str);
  $('#cancel').trigger('click'); //addMenu를 누르면 btnCancelMenu를 발생시키는게 편하기 때문에 trigger를 써서 코드를 호출가능
  
  let nowSel = parseInt($('#selSum').val()) || 0;
  let tosel = selSum+nowSel;
  $('#selSum').val(tosel);
})


 /*  .on('click', '#submit', function() {a
    let sel = parseInt($('#sum').val());
    let str = $('#order').val() + ' x' + $('#qty').val() + ', ' + $('#sum').val();
    str = '<option>' + str + '</option>';
    $('#selOrder').append(str);
    $('#cancel').trigger('click');

    let currentTotal = parseInt($('#selSum').val()) || 0;
    let newTotal = currentTotal + sel;
    $('#selSum').val(newTotal);
  }) */

.on('click','#cancelOrder',function(){
  console.log(1);
  $('#selOrder').empty();
})

$(document)
  .on('click', '#finalSubmit', function() {
    let now = new Date();
    let date = '['+now.getFullYear() + '/' +
      (now.getMonth() + 1) + '/' +
      now.getDate()+']' + ' ' +
      now.getHours() + ':' +
      now.getMinutes();
  
    let rec = date + ' ' + $('#phone').val() + ' ' + $('#selSum').val();
    if ($('#phone')==''){
      $('#phone')=0;
    }
    let salesRec = '<option>' + rec + '</option>';
    $('#sales').append(salesRec);

    let total = parseInt($('#selSum').val());
    let currentTotal = parseInt($('#totalSales').val()) || 0;
    let Total = currentTotal +total;
    $('#totalSales').val(Total);
  });


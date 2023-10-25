
let oMenu = {};
let net =0;
$(document)
.on('click','#btnAddMenu',function() { 
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
  $('#menu').append(menuOptions);
})


.on('change','#menu',function(){
    let pstr=$('#menu').val();
    let ar = pstr.split(',');
    ar[0]=ar[0].trim(); ar[1]=ar[1].trim();

    $('#order').val(ar[0]);
    $('#qty').val(1);
    $('#sum').val(ar[1]);
    $('#net').val(ar[1]);
})
.on('change','#qty',function(){
    let qty=$('#qty').val();
    $('#sum').val(qty*parseInt($('#net').val()));
})
.on('click','#cancel',function(){
  $('#order,#qty,#sum').val('');
})

.on('click', '#submit', function() {
  let sel = parseInt($('#sum').val());
  let str = $('#order').val() + ' x' + $('#qty').val() + ', ' + $('#sum').val();
  str = '<option>' + str + '</option>';
  $('#selOrder').append(str);
  $('#cancel').trigger('click');

  let currentTotal = parseInt($('#selSum').val()) || 0;
  let newTotal = currentTotal + sel;
  $('#selSum').val(newTotal);
})


.on('click','#cancelOrder',function(){
  $('#selOrder').empty();
  $('#selSum').val('');
  $('#phone').val('');
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
    let cTotal = parseInt($('#totalSales').val()) || 0;
    let Total = cTotal +total;
    $('#totalSales').val(Total);
    $('#cancelOrder').trigger('click');
  });


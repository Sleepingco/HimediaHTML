// $('#userid').attr('type');// 위에 방법을 attribute 혹은 property 인데
// $('#userid').prop('name');//이러한 방법으로 쓰면 위에 값은 type을 불러와서 'text가 나오고 아래에는 name을 불러와서 'userid'가 나온다
// $('#userid').prop('type','button')//이 방법은 타입 뒤에 속성을 써서 text타입에 userid를 button으로 바꿀수 있다
// $('#userid').prop('id','loginid')//같은 방법으로 태그에 id를 바꿀수있다
// <select multiple id='selMenu'>
// $('#selMenu').prop(혹은attr)('multiple',false);// 다음 코드는 select tag에 multiple속성을 false로 만들어 뺼수도 있다
//<input type='radio' id = female checked>//는 태그로 체크하는 방식인데 이를 코드로 대체할수 있다
//$('#female').attr('checked',true)//이와 같이 코드로 체크할 수 도 있다
//$(선택자(#/./[name=-])).메소드(val/text/html/append/prepend/empty/attr/prop)
$(document)
 //문제있으면 console.log(n) 쓰자 ㅇㅋ?

.on('click','#btnEmpty',function(){
    $('#selRegion').empty();//지정된 selector안의html을 비운다
    $('#userid').val();
    if($('#lblAlert').hasClass('ldeco')){
        alert('ldeco클래스 있어요');
    }else{
        alert('아무 클래스 없어요');
    }
})
.on('click',"#btnCheck",function(){
 let id ='';
 let passcode='';
 let passcode1='';
 let name='';
 let gender='';
 let bday='';
 let mobile='';
 let region='';
 let game='';
 if($("#userid").val()==''){
     showAlert('아이디를 입력 하세요')
     return false;
 }else{
     id=$("#userid").val();
 }
console.log('userid ['+$('#userid').val()+']')
 if($("#passcode").val()==''||$('#passcode1').val()==''){
    showAlert('비밀번호와 비밀번호 확인을 입력하시오');
    return false;
 }else if($('#passcode').val()!=$('#passcode1').val()){
    showAlert('비밀번호와 비밀번호 확인은 같아야 합니다');
    return false;
 }else{
    passcode=$("#passcode").val();
    passcode1=$('#passcode1').val();
 }


 if($("#name").val()==''){
    showAlert('실명을 입력 하세요')
     return false;
 }else{
     name=$("#name").val();
 }

 if ($("#male").is(':checked')) {
     gender = "남성";
 } else if ($("#female").is(':checked')) {
     gender = "여성";
 } else {
    showAlert('성별을 입력하세요');
     return false;
 }
 if($("#birthday").val()==''){
    showAlert('생일을 입력 하세요');
     return false;
 }else{
     bday=$("#birthday").val();
 }

 if($("#mobile").val()==''){
    showAlert('전화번호를 입력하세요')
     return false;
 }else{
     mobile=$("#mobile").val();
 }

 if($("#selRegion").val()=='' || $('#selRegion').val()==null){
    showAlert('거주지역을 선택하세요')
     return false;
 }else{
     region=$("#selRegion").val();
 }
 $.each($('input[name=game]:checked'),function(){   // 엣지이거나 크롬에 따라 리턴하는 값이 달라 두개를 써주는 방어적 코딩
     game+=$(this).val()+'<br>'
 })
 if(game==''){
    showAlert('게임을 하나라도 고르시오')
    return false;
 }
 $("#dvCheck").html(
 '아이디: '+id+'<br>'
 +'비밀번호: '+passcode+'&nbsp'
 +'비밀번호 확인: '+passcode1+'<br>'
 +'실명: '+name+'<br>'
 +'성별: '+gender+'<br>'
 +'생년월일: '+bday+'<br>'
 +'전화번호: '+mobile+'&nbsp'
 +'거주지역: '+region+'<br>'
 +'좋아하는 게임: '+game+'<br>')
});

/* function showAlert(str){
    console.log(str);
    $('#lblAlert').text(str);
    $('#lblAlert').show();
    setTimeout(function(){
        $('#lblAlert').hide();
    },2000);
    // return false;
} */

function showAlert(str){
    console.log(str);
    $('#lblAlert').text(str);
    $('#lblAlert').fadeIn(10000);//기본적으로 0.4초 400ms만 걸린다
    setTimeout(function(){
        $('#lblAlert').fadeOut(1000);
    },2000);
    // return false;
}




/*  if(document.getElementById("selRegion").value==''){
         alert('나라를 하나 선택하세요')
     } else{
     document.getElementById("dvCheck").innerHTML=document.getElementById("selRegion").value;
     }

*/
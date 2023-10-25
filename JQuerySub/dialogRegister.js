$(document)
.ready(function(){
    $('#info').dialog({
        autoOpen:false,
        modal:true,
        buttons: [
            {
                text: "Ok",
                icon: "ui-icon-heart",
                click: function() {
                    if($('#userid').val()=='') {
                        showAlert('사용자 아이디를 입력하시오'); return false;
                    }
                    if($('#passcode').val()=='' || $('#passcode1').val()==''){
                        showAlert('비밀번호와 비밀번호확인을 입력하시오'); return false;
                    } else if($('#passcode').val()!=$('#passcode1').val()){
                        showAlert('비밀번호와 비밀번호 확인은 같아야 합니다'); return false;
                    }
                    if($('#name').val()==''){
                        showAlert('실명을 입력하시오'); return false;
                    }
                    let gender='';
                    $('input[name=gender]:checked').each(function(){
                        gender=$(this).attr('id');
                        console.log('gender:'+gender);
                    })
                    console.log('gender='+gender);
                    if(gender==''){
                        showAlert('성별을 선택하시오'); return false;
                    }
                    if($('#birthday').val()==''){
                        showAlert('생년월일을 입력하시오'); return false;
                    }
                    if($('#mobile').val()==''){
                        showAlert('모바일번호를 입력하시오'); return false;
                    }
                    if($('#selRegion').val()=='' || $('#selRegion').val()==null){
                        showAlert('거주지역을 선택하시오'); return false;
                    }
                    let str='';
                    $('input[name=game]:checked').each(function(){
                        if(str!='') str+=',';
                        str+=$(this).val();
                    });
                    if(str==''){
                        showAlert('게임을 선택하시오'); return false;
                    }
                    let pstr='사용자아이디:'+$('#userid').val()+'<br>'+
                    '비밀번호::'+$('#passcode').val()+'<br>'+
                    '실명:'+$('#name').val()+'<br>'+
                    '성별:'+gender+'<br>생년월일:'+$('#birthday').val()+'<br>'+
                    '모바일:'+$('#mobile').val()+'<br>'+
                    '거주지역:'+$('#selRegion').val()+'<br>'+
                    '게임:'+str;
                    $('#dvCheck').html(pstr);
                    $('input[name=gender]').prop('checked', false);
                    $('input[name=game]').prop('checked', false);
                    $('#info input').val('');
                    $('#selRegion').val('');
                    $( this ).dialog( "close" );
                }
            },{
                text: 'Close',
                click: function() {
                    $('input[name=gender]').prop('checked', false);
                    $('input[name=game]').prop('checked', false);
                    $('#info input').val('');
                    $('#selRegion').val('');
                    /* $('#userid').val('');
                    $('#passcode').val('');
                    $('#passcode1').val('');
                    $('#name').val('');
                    $('input[name=game]').prop('checked', false); */
                    $(this).dialog('close');
                }
            }
        ]
    });
})


.on('click','#openinfo',function(){
    $('#info').dialog('open');
})

/**
 * 
 * @param {string} str 
 * @version 1.0.0
 * @see naver.com
 * @readonly
 * @todo 화이팅
 * @deprecated 이거 말고 좋은방법?
 */
function showAlert(str){
    $('#lblAlert').text(str);
    $('#lblAlert').fadeIn();
    setTimeout(function(){
        $('#lblAlert').fadeOut();
    },2000);
}
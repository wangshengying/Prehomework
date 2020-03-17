$(function(){
    var $input1 = $('#input1'),
        $input2 = $('#input2'),
        $input3 = $('#input3'),
        $input4=$('#input4'),
        $input5=$('#input5'),
        $p1=$('#p1'),
        $p2=$('#p2'),
        $p3=$('#p3'),
        $p4=$('#p4');
    // 用户名验证
    $input1.mouseout (function(){
        if(/^\d+$/.test($input1.val())){
            $p1.html('用户名不能是纯数字');
        }
        else{
            $p1.html('');
        }
    })
    //    手机号验证
    $input2.mouseout (function(){
        switch ($input2.val().substring(0,1)){
            case '':
                $p2.html('');
                break;
            case '0':
                $p2.html('手机号码格式不正确');
                break;
            case '1':
                if($input2.val().substring(1,2)=='1'||$input2.val().substring(1,2)=='2'||$input2.val().substring(1,2)==''||$input2.val().substring(1,2)==' '){
                    $p2.html('手机号码格式不正确');
                }
                else if($input2.val().length!==11){
                    $p2.html('手机号码格式不正确');
                }
                else{
                    $p2.html('');
                }
                break;
            default:
                $p2.html('');
                break;
        }
    })
    // 密码验证（正则表达式）
    $input3.mouseout (function(){
        var str= $input3.val() ;
        switch (escape(str).indexOf( "%u" )>=0){
            case true:
                $p3.html('密码格式不对');
                break;
            case false:
               if(str.indexOf(" ") >=0||/^[a-zA-Z]+$/.test(str)||/^\d+$/.test(str)){
                    $p3.html('密码格式不对');
               }
               else if(str!==''){
                    str.length>=8&&str.length<=14?$p3.html(''):$p3.html('密码长度不对'); 
               }
               else{
                    $p3.html('');
               }
                break;
            default:
                $p3.html('');
            break;
        }
    })
    // 验证码验证
    $input5.click(function(){
        if($p2.html()==''){
            $p4.html('请求超时');
        }
    });
  
  });
$("#question").hide();
$("#result").hide();

var num = 1;

var q = {
    1:{"title":"오늘은 떡잎유치원이 쉬는날이다 짱구가 나라면","type":"EI","A":"흰둥이랑 산책해야지","B":"집에서 뒹굴뒹굴"},
    2:{"title":"액션가면을 시청한 후 나는","type":"SN","A":"너무 재밌네 다음화!","B":"액션가면이랑 나랑 싸우면 누가 이길까?"},
    3:{"title":"이슬이 누나에게 고백하는 짱구가 나라면","type":"TF","A":"누나랑 결혼하려고 100만원 모았어요! 우리 결혼해요","B":"짱구랑 함께라면 평생 행복할거에요! 우리 결혼해요"},
    4:{"title":"떡잎마을 방범대 친구들과 여행을 가기로 했다","type":"JP","A":"체계적으로 루트를 짜겠어","B":"방범대가 향하는 곳은 어디든 출발~"},
    
}




var result = {
    "ESFJ": {
      "mbti": "ESFJ <li>따뜻한 가장 신형만</li>" ,
      "imgSrc" : "." // Add the image file name or URL for ESFJ
    },
    "ESFP": {
        "mbti": "ESFP <li>타고난 리더쉽 봉미선</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ESTJ": {
        "mbti": "ESTJ <li>마이웨이 철수</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ESTP": {
        "mbti": "ESTP <li>행동대장 신혼부부</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ENFJ": {
        "mbti": "ENFJ <li>정의구현자 유리</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ENFP": {
        "mbti": "ENFP <li>활발한 귀염둥이 흰둥이</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ENTJ": {
        "mbti": "ENTJ <li>타고난 리더십 나미리</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ENTP": {
        "mbti": "ENTP <li>천방지축 흥부자 짱구</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ISFJ": {
        "mbti": "ISFJ <li>다정다감 ST 원장선생님</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ISFP": {
        "mbti": "ISFP <li>중재자 훈이</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ISTJ": {
        "mbti": "ISTJ <li>현실주의자 채성아선생님</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "ISTP": {
        "mbti": "ISTP <li>팔방미인 이슬이누나</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "INFJ": {
        "mbti": "INFJ <li>외유내강 차은주선생님</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "INFP": {
        "mbti": "INFP <li>무한긍정 짱아</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "INTJ": {
        "mbti": "INTJ <li>호불호 확실 수지</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      },
      "INTP": {
        "mbti": "INTP<li>사려깊은 몽상가 맹구</li>" ,
        "imgSrc" : "./me" // Add the image file name or URL for ESFJ
      }
}



function start() {
    $("#start").hide();
    $("#question").show();
    next();
}

function next() {
    if(num==5){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1) ? str+="I" : str+="E";
        ($("#SN").val()<1) ? str+="N" : str+="S";
        ($("#TF").val()<1) ? str+="F" : str+="T";
        ($("#JP").val()<1) ? str+="P" : str+="J";

        var tmpMbti = result[str]["mbti"];
        var tmpImgSrc = result[str]["imgSrc"];
        
     
        $("#mbti").html(result[str]["mbti"]);
        $("#result img").attr("src", tmpImgSrc);
    }
  


    
    else{
        $(".progress-bar").attr("style","width:calc(100/4*"+num+"%)");
        $("#pgrNum").html(num+"/4");
        $('#title').html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++
    }
}

$("#A").click(function(){
    var type=$("#type").val();
    var preValue=$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function(){
    next();
});

$("#question").hide();
$("#result").hide();

var num = 1;

var q = {
    1:{"title":"책을 빌려줘 고마운 마음에 밥을 사겠다고 했다. 약속장소는?","type":"EI","A":"놀거리가 많은 핫플","B":"대화에 조용할 수 있는 식당"},
    2:{"title":"회사상사가 집가기 전 나를 부른다","type":"SN","A":"야근하라고 하면 뭐라고 하지? 있을 법한 상황을 대비한다","B":"짤리면 다른 직장을 어디로 가야하지 상상의 나래를 펼친다."},
    3:{"title":"저녁약속에 늦게 온 상대방, 어떻게 사과하면 마음이 풀릴까?","type":"TF","A":"차 사고 때문에 버스가 연착되서.. 미안해 ","B":"정말 더운데 오래 기다렸지.. 미안해.."},
    4:{"title":"우울한 나날은 보낸 나 리프레시를 위해 여행을 간다면?","type":"JP","A":"일단 멀리 떠나 머릿속을 깨끗이 비운다","B":"나만의 화려한 휴가를 계획해 머릿속을 깨끗이 비운다"},
    
}




var result = {
    "ESFJ": {
      "mbti": "ESFJ <li>사랑엔 발 벋고 나서는 사랑세포</li>" ,
      "imgSrc" : "./me/esfg.png" // Add the image file name or URL for ESFJ
    },
    "ESFP": {
        "mbti": "ESFP <li>쓸데없이 당당한 출출세포</li>" ,
        "imgSrc" : "./me/esfp.png" // Add the image file name or URL for ESFJ
      },
      "ESTJ": {
        "mbti": "ESTJ <li>이리저리 가장 바쁜 이성세포</li>" ,
        "imgSrc" : "./me/estj.png" // Add the image file name or URL for ESFJ
      },
      "ESTP": {
        "mbti": "ESTP <li>언제 터질 지 모르는 난폭세포</li>" ,
        "imgSrc" : "./me/estp.png" // Add the image file name or URL for ESFJ
      },
      "ENFJ": {
        "mbti": "ENFJ <li>표정관리하는 리액션 1호세포</li>" ,
        "imgSrc" : "./me/enfj.png" // Add the image file name or URL for ESFJ
      },
      "ENFP": {
        "mbti": "ENFP <li>밤이 되면 깨어나는 감성세포</li>" ,
        "imgSrc" : "./me/enfp.png" // Add the image file name or URL for ESFJ
      },
      "ENTJ": {
        "mbti": "ENTJ <li>귀여운 허당미를 가진 명탐정세포</li>" ,
        "imgSrc" : "./me/entj.png" // Add the image file name or URL for ESFJ
      },
      "ENTP": {
        "mbti": "ENTP <li>즐거움에 진심인 여행세포</li>" ,
        "imgSrc" : "./me/entp.png" // Add the image file name or URL for ESFJ
      },
      "ISFJ": {
        "mbti": "ISFJ <li>조신함을 지키는 예절세포</li>" ,
        "imgSrc" : "./me/isfj.png" // Add the image file name or URL for ESFJ
      },
      "ISFP": {
        "mbti": "ISFP <li>불화는 싫은 평화세포</li>" ,
        "imgSrc" : "./me.isfp.png" // Add the image file name or URL for ESFJ
      },
      "ISTJ": {
        "mbti": "ISTJ <li>오늘의 정리왕 게시판세포</li>" ,
        "imgSrc" : "./me.istj.png" // Add the image file name or URL for ESFJ
      },
      "ISTP": {
        "mbti": "ISTP <li>마지막 선을 지키는 자존심세포</li>" ,
        "imgSrc" : "./me.istp.png" // Add the image file name or URL for ESFJ
      },
      "INFJ": {
        "mbti": "INFJ <li>세벽에 움직이는 작가세포</li>" ,
        "imgSrc" : "./me.infj.png" // Add the image file name or URL for ESFJ
      },
      "INFP": {
        "mbti": "INFP <li>침착하고 디테일한 유미</li>" ,
        "imgSrc" : "./me.infp.png" // Add the image file name or URL for ESFJ
      },
      "INTJ": {
        "mbti": "INTJ <li>논리로 유미의 편을 들어주는 판사세포</li>" ,
        "imgSrc" : "./me.intj.png" // Add the image file name or URL for ESFJ
      },
      "INTP": {
        "mbti": "INTP<li>진정한 쎄믈리에 촉세포</li>" ,
        "imgSrc" : "./me.intp.png" // Add the image file name or URL for ESFJ
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

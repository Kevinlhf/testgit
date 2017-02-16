/**
 * Created by Viewonly on 2017/2/7.
 */
window.onload = function () {
    var aaa = document.getElementsByClassName("aaa");
    // for (var i = 0;i < aaa.length;i ++){
    //     aaa[i].onclick = function () {
    //         for (var j = 0;j < aaa.length;j ++){
    //             aaa[j].id = "";
    //         }
    //         this.id = "aaaa";
    //     }
    // }










/*登陆弹出层*/
    var login = document.getElementById("bLogin");
    var mask = document.getElementById("mask");
    var show = document.getElementById("show")
    login.onclick = function () {
        mask.style.display = "block";
        show.style.display = "block";

        var event = event || window.event;

        if (event && event.stopPropagation()){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    }

    document.onclick = function () {

        var event = event || window.event;

        console.log(event.target);//获取操作的对象

        //判断当前时间操作的对象
        //event.target ie6,7,8
        //evetn.srcElement ie8以上
        var target = event.target || event.srcElement;

        //判断操作对象的id属性的值是否是show
        if (target.id != "show"){
            mask.style.display = "none";
            show.style.display = "none";
        }

    }





            var formatterDateTime=   function () {
                var date = new Date()
                var month = date.getMonth() + 1
                var datetime = date.getFullYear()
                    + ""// "年"
                    + (month >= 10 ? month : "0" + month)
                    + ""// "月"
                    + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                    + ""
                    + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                    + ""
                    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                    + ""
                    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
                return datetime;
            }



            var all = document.getElementsByClassName("all")[0];
            var audio = document.getElementsByClassName("audio")[0];
            var pic = document.getElementsByClassName("pic")[0];
            var dz = document.getElementsByClassName("dz")[0];
            var voice = document.getElementsByClassName("voice")[0];

    var ul=document.querySelector("#demo");
    askDate("");
    all.onclick = function () {
        ul.innerHTML = " ";
        askDate("");
        for (var j = 0;j < aaa.length;j ++){
            aaa[j].id = "";
        }
        this.id = "aaaa";
    };
    audio.onclick = function () {
        ul.innerHTML = " ";
        askDate(41);
        for (var j = 0;j < aaa.length;j ++){
            aaa[j].id = "";
        }
        this.id = "aaaa";
    };
    pic.onclick = function () {
        ul.innerHTML = " ";
        askDate(10);
        for (var j = 0;j < aaa.length;j ++){
            aaa[j].id = "";
        }
        this.id = "aaaa";
    };
    dz.onclick = function () {
        ul.innerHTML = " ";
        askDate(29);
        for (var j = 0;j < aaa.length;j ++){
            aaa[j].id = "";
        }
        this.id = "aaaa";
    };
    voice.onclick = function () {
        ul.innerHTML = " ";
        askDate(31);
        for (var j = 0;j < aaa.length;j ++){
            aaa[j].id = "";
        }
        this.id = "aaaa";
    };

       /* $(".all").click = function () {
            ul.innerHTML = "";
            askDate("");
        };
        $(".video").click = function () {
            ul.innerHTML = "";
            askDate(41);
        };
        $(".pic").click = function () {
            ul.innerHTML = "";
            askDate(10);
        };
        $(".dz").click=function () {
            ul.innerHTML = "";
            askDate(29);
        };
        $(".voice").click=function () {
            ul.innerHTML = "";
            askDate(31);
        };
*/

    /*var typeD='';
    if(typeData=='all'){
        typeD='';
    }else if(typeData=='video'){
        typeD=41;
    }else if(typeData=='pic'){
        typeD=10;
    }else if(typeData=='text'){
        typeD=29;
    }else if(typeData=='audio'){
        typeD=31;
    }*/

/*    var pageD=pageData?pageData:1;*/
            function askDate(typeD) {
                $.ajax({
                type : "get",
                url : "https://route.showapi.com/255-1?page=&showapi_appid=31726&showapi_timestamp="+formatterDateTime()+"&title=&type="+typeD+"&showapi_sign=09e658fcb8534bceb43bedc86c111bae",
                success : function(data){
                    var shuju = data.showapi_res_body.pagebean.contentlist;
                    console.log(shuju);
                    con(shuju);
                },
            });
        }
function con(shuju) {
    function weChat(option) {
        this.profile_image=option.profile_image;
        this.name=option.name;
        this.create_time=option.create_time;
        this.text=option.text;
        this.weixin_url=option.weixin_url;
        this.type=option.type;
        this.id=option.id;
        this.image1=option.image1;
        this.video_uri=option.video_uri;
        this.voice_uri=option.voice_uri;
    }

    weChat.prototype={
        content:function () {
            var str="";
            str+="<img src='"+  this.profile_image +"'>";
            str+="<li><h4>"+this.name+"</h4>";

            str+="<span>"+this.create_time+"</span>" ;
            str+="<p>"+this.text+"</p>" ;
            // str+="<a href='"+this.weixin_url+"'>"+this.name+"</a>";
            // str+="<img src='"+  this.image0 +"'>";
            // str +="<audio src=''"+this.voice_uri+"'></audio>";
            // str +="<video src=''"+this.video_uri+"'></video>";

            if (this.type == 10){
                str +="<img class = 'li_pic' src =''"+this.image1+"' >";
            }else if (this.type == 29){
                // str +="<p class = 'li_dz'>"+this.text+"</p>";
            }else if (this.type == 31){
                str +="<audio class = 'li_audio'  src='"+this.voice_uri+"' controls></audio>";
            }else if (this.type == 41){
                str +="<video class = 'li_video' src='"+this.video_uri+"' controls></video>";
            }


            // var ul=document.querySelector("#demo");
            ul.innerHTML+=str;
        }
    }

    for(var i=0;i<shuju.length;i++){
        var we=new weChat(shuju[i]);
        we.content();
    }
}






}
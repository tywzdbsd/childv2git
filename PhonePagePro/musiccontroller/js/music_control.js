/**
 * Created by tyw on 15/7/17.
 */
var currentFile = "";
//声明全局音频对象
var oAudio;
//声明全局音量
var volume;
//声明全局interval计数器
var interval_1,interval_2;

function playAudio() {
    if (window.HTMLAudioElement) {
        try {
            //获取音频对象实例
            oAudio = document.getElementById('myaudio');
            //获取“播放”按钮实例
            var btn = document.getElementById('play');
            //得到音频文件名文本框实例
            var audioURL = document.getElementById('audiofile');
            //如果文本框里的值和正在播放的不一致，则播放文本框里地址的文件
            if (audioURL.value !== currentFile) {
                oAudio.src = audioURL.value;
                currentFile = audioURL.value;
            }
            //使用Audio对象只读属性更改：播放状态及按钮文本。
            if (oAudio.paused) {
                oAudio.addEventListener('canplaythrough', bgmFadeinPlay(), false);
//                        btn.textcontent = "播放";
            } else {
                oAudio.addEventListener('canplaythrough', bgmFadeoutPlay(), false);
//                        btn.textcontent = "暂停";
            }
        }
        catch (e) {
            //出错,显错信息
            window.console && console.error("错误：" + e);
        }
    }
}

// 背景乐淡入
function bgmFadeinPlay() {
    clearInterval(interval_1);
    clearInterval(interval_2);
    oAudio.volume = 0.05;
    oAudio.play();
    interval_1 = setInterval(function () {
        if (oAudio.volume >= 0.05 && oAudio.volume <= 0.95){
            oAudio.volume += 0.045;
        }else{
            oAudio.volume = 0.95;
            clearInterval(interval_1);
        }
        console.log("in:"+oAudio.volume);
    }, 100);
}
//背景音乐淡出
function bgmFadeoutPlay() {
    clearInterval(interval_1);
    clearInterval(interval_2);
    interval_2 = setInterval(function () {
        if (oAudio.volume >= 0.05 && oAudio.volume <= 1){
            oAudio.volume -= 0.045;
        }else{
            oAudio.volume = 0.05;
            clearInterval(interval_2);
            oAudio.pause();
        }
        console.log("out:"+oAudio.volume);
    }, 50);//x为设置的间隔时间,秒数：x/50=_
}


function toggleIconaudio(){
    if($(".icon-music-stop").hasClass("hide")){
        $(".icon-music-stop").removeClass("hide");
    }else{
        $(".icon-music-stop").addClass("hide");
    }
}



//        var IntervalFun;
//        function getInterval(){
//            var IntervalFun = setInterval("console.log('every 2s do');",2000);
//            return IntervalFun;
//        }
//        var o = getInterval();
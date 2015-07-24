/**
 * Created by tyw on 15/7/24.
 */
var spinner =null;
//宽高赋初值
var pageWidth = $(document).width();
var pageHeight = $(document).height();
var divLockerx = $('#divLocker');
//窗口大小改变，重新赋值遮罩层宽高。
window.onresize = function () {
    pageWidth = $(document).width();
    pageHeight = $(document).height();
    $('#DivLocker').css({
        "height": pageHeight,
        "width": pageWidth
    });
};
function addLockerAndLoading(){
    //加载divLocker的样式，使其遮罩在页面
    divLockerx.css({
        "position": "absolute",
        "margin-left": "0px",
        "margin-top": "0px",
        "background-color": "rgba(0,0,0,0.8)",
        "height": pageHeight,
//        "filter": "alpha(opacity=30)",
//        "opacity": "0.3",
        "overflow": "hidden",
        "width": pageWidth,
        "z-index": "999"
    });

    //执行加载图
    addLoadingIcon("spin");
    //在加载name属性为某值的元素中，添加等待图
    function addLoadingIcon(name) { //小的loading图标
        //获取添加加载图的元素
        var target = document.getElementsByName(name)[0];
        //加载图
        spinner = new Spinner({
            lines: 6, // The number of lines to draw
            length: 0, // The length of each line
            width: 17, // The line thickness
            radius: 18, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 30, // The rotation offset
            color: '#666', // #rgb or #rrggbb
            speed: 0.9, // Rounds per second
            trail: 49, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent in px
            left: '50%' // Left position relative to parent in px
        });
        //加载图添加进html元素
        spinner.spin(target);
        target = null;
        //返回一个“加载图”对象
        return spinner;
    }
};

//todo 删除divLocker节点
function delLockerAndLoading(){

}

//显隐锁定层和加载图
function hideLockerAndLoading(){
    $('#divLocker')[0].style.display="none";
};
function showLockerAndLoading(){
    $('#divLocker')[0].style.display="block";
};

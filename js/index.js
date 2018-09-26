// window.onload=function(){
//     var smallimg = document.querySelectorAll('.a');
//         var bigimg = document.querySelectorAll('.b');
//         var cc = smallimg[0].offsetWidth;
//         console.log(cc);



//         for (let index = 0; index < smallimg.length; index++) {

//             smallimg[index].style.height=1.08*cc+'px';  
//         }
//         for (let index = 0; index < bigimg.length; index++) {

//             bigimg[index].style.height=0.54*cc+'px';  
//         }
//     window.onresize=function(){
//         var smallimg = document.querySelectorAll('.a');
//         var bigimg = document.querySelectorAll('.b');
//         var cc = smallimg[0].offsetWidth;
//         console.log(cc);



//         for (let index = 0; index < smallimg.length; index++) {

//             smallimg[index].style.height=0.54*cc+'px';  
//         }
//         for (let index = 0; index < bigimg.length; index++) {

//             bigimg[index].style.height=1.08*cc+'px';  
//         }




//     }
// }

// 头部背景色随滚动渐变
window.addEventListener('load', function () {
    // 调用构造函数生成一个对象
    var jdEffect = new JDEffect();
    //调用对象里面的搜索效果  来自于父元素的原型对象继承下来的函数
    jdEffect.searchGradient();
    // //调用对象里面的倒计时效果
    jdEffect.downTime();
    // //调用对象里面的轮播图效果
    jdEffect.slide();

})

// 声明一个构造函数
var JDEffect = function (dom) {

}
// 给构造函数的原型添加封装的方法
JDEffect.prototype = {
    'searchGradient': function () {
        window.addEventListener('scroll', function () {
            console.log(123);

            var header = document.querySelector('#header');
            var scrollHeight = document.documentElement.scrollTop;
            var slideHeight = document.querySelector('#slide').offsetHeight;
            var opacity = scrollHeight / slideHeight;
            console.log(opacity);

            if (opacity >= 1) {
                header.style.backgroundColor = 'rgba(222, 24, 27,1)';
            } else {
                header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
            }
        })
    },
    'downTime': function () {
        // 倒计时
        var tagetTime = Math.floor(new Date(2018, 8, 22, 22, 00, 00).getTime() / 1000);
        var currentTime = Math.floor(new Date().getTime() / 1000);
        var time = tagetTime - currentTime;
        setInterval(function () {
            time--;
            if (time <= 0) {
                time = 7200;
            }
            var hour = Math.floor(time / 3600);
            var min = Math.floor(time % 3600 / 60);
            var sec = Math.floor(time % 60);
            var spans = document.querySelectorAll('.down-time span');
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(min / 10);
            spans[4].innerHTML = Math.floor(min % 10);
            spans[6].innerHTML = Math.floor(sec / 10);
            spans[7].innerHTML = Math.floor(sec % 10);
        }, 1000)
    },
    'slide': function () {
        // swiper轮播图初始化代码
        var mySwiper = new Swiper('.swiper-container', {
            // 控制轮播图滚动的方向 horizontal水平 vertical 垂直
            direction: 'horizontal',
            //控制轮播图动画切换的速度  轮播图动画的时间
            speed: 300,
            //添加一个小手
            grabCursor: true,
            // 添加循环 无缝轮播图 
            loop: true,
            //添加自动轮播图 delay自动轮播的间隔时间
            autoplay: {
                delay: 10000,
                //到最后一张停止自动轮播图 但是loop了后就停不下来了
                stopOnLastSlide: true,
                // 是否要当触摸的时候禁止自动轮播图  ture就禁止 false不禁止
                disableOnInteraction: false,
            },
            // 如果需要分页器  小圆点
            pagination: {
                el: '.swiper-pagination',
            },
            // 添加回弹效果  为false可以回弹  true 不可以回弹
            freeMode: false,
        })
    }
}
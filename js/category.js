window.addEventListener('load', function() {
    // 初始化左边的滑动
   var swiper = new Swiper('.category-left .swiper-container', {
       direction: 'vertical',
       slidesPerView: 'auto',
       freeMode: true,
    //    scrollbar: {
    //        el: '.swiper-scrollbar',
    //    },
       mousewheel: true,
   });
   //初始化右边的滑动
   var swiper = new Swiper('.category-right .swiper-container', {
       direction: 'vertical',
       slidesPerView: 'auto',
       freeMode: true,
    //    scrollbar: {
    //        el: '.swiper-scrollbar',
    //    },
       mousewheel: true,
   });

    // 点击吸顶事件
    $('.category-left ul').click(function(e){
        e= e || window.event;
        $('.category-left ul li').each(function(index,ele){
            $(ele).attr('index',index)
        })
        $('.swiper-wrapper').css('transition','300ms')
        var li = $(e.target).parent();
        var height = li.height();
        var index = li.attr('index');
        var distanceY = -height * index;
        var maxDistanceY = $('.category-left').height()- $('.category-left ul').height();
        console.log(index);
        if(distanceY>maxDistanceY){
            $('.category-left .swiper-wrapper').css('transform','translate3d(0px, ' + distanceY + 'px, 0px)');
        }else {
            $('.category-left .swiper-wrapper').css('transform','translate3d(0px, ' + maxDistanceY + 'px, 0px)');
        }
        $('.category-left ul li').removeClass('active');
        li.addClass('active');
        
    })
});

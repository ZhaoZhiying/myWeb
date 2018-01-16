!function(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, //是否无缝
        pagination: {
        el: '.swiper-pagination'//是否需要分页符
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    })
}.call()

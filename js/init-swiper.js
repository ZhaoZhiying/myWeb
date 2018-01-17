!function(){
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true, //是否无缝
                pagination: {
                    el: '.swiper-pagination'//是否需要分页符
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        },
        init: function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper: function(){
            this.swiper = new Swiper (
                view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        }
    }    
    controller.init(view)
}.call()

!function(){
    window.addEventListener('scroll', function(x){
        if(window.scrollY > 0){//获取页面滚动时的高度
            header.classList.add('sticky')//滚动时加sticky
        }else{
            header.classList.remove('sticky')
        }
    })
}.call()

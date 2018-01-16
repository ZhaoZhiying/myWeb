!function(){
    let aTags = document.querySelectorAll('nav.menu>ul>li>a')//匹配menu里所有a
    // 设置动画循环,tween.js缓动
    function animate(time){
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    for(let i=0; i < aTags.length; i++){
        aTags[i].onclick = function(x){
        x.preventDefault() //阻止事件的所有默认动作，取消浏览器默认跳转
        let a = x.currentTarget //获取a标签
        let href = a.getAttribute('href') //a.getAttribute('href')用户写什么是什么;a.href是带http协议（浏览器处理过的）
        let element = document.querySelector(href) //根据href获取到一个元素
        let top = element.offsetTop //获取这个元素距页面最顶端的距离
        
        let currentTop = window.scrollY//当前高度
        let targetTop = top - 80 //目标高度
        let s = targetTop - currentTop //路程
        var coords = { y : currentTop};//开始位置
        var t = Math.abs((s/100)*300)//时间
        if(t>500){ t = 500 } //最长时间500毫秒
        var tween = new TWEEN.Tween(coords)//开始位置
            .to({ y : targetTop},t) //结束位置和时间
            .easing(TWEEN.Easing.Cubic.InOut)//缓动类型
            .onUpdate(function(){//coords.y已经变了
                window.scrollTo(0,coords.y)//更新界面
            })
            .start(); //开始缓动 
        }
    }
}.call()

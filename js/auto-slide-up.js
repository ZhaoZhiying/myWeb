!function(){
    //添加动画
    setTimeout(function(){
        findClosestAndRemoveOffset()
    },1000)
    //添加 offset
    let specialTags = document.querySelectorAll('[data-x]')
    for(let i = 0; i < specialTags.length; i++){
    specialTags[i].classList.add('offset')
    }
    //页面滚动事件
    window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
    })


    //helper
    function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')//返回'含有 data-x 的' 
    let minIndex = 0//minIndex指离窗口顶部最近的元素 
    for(let i = 0; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }
    }

    specialTags[minIndex].classList.remove('offset')//当滑动到这个标签就去除offset
    let id = specialTags[minIndex].id //找到当前高亮的id
    let a = document.querySelector('a[href="#'+ id + '"]')//获取a 比如：id == 'siteAbout' 'a[href="#siteAbout"]'
    let li = a.parentNode//获取a的父节点li
    let brothersAndMe = li.parentNode.children //获取li父节点的多有子节点
    for(let i=0; i<brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
    }
    let liTags = document.querySelectorAll('nav.menu>ul>li')//匹配menu里所有l
    for(let i =0; i<liTags.length; i++){
        liTags[i].onmouseenter = function(x){ //事件在鼠标指针移动到元素上时触发
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x){//在鼠标指针移出元素上时触发
            x.currentTarget.classList.remove('active')
        }
    }
}.call()



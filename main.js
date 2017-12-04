  //添加延迟   
  setTimeout(function(){
    siteWelcome.classList.remove('active')    
  },100)
    //添加动画
  setTimeout(function(){
    findClosest()
  },0)
  //添加 offset
  let specialTags = document.querySelectorAll('[data-x]')
  for(let i = 0; i < specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }
  window.onscroll = function(x){//页面滚动事件
    if(window.scrollY > 0){//获取页面滚动时的高度
        header.classList.add('sticky')//滚动时加sticky
    }else{
        header.classList.remove('sticky')
    }
    findClosest()
  }

  function findClosest(){
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
        /*简易写法
        let n = 25 //一共动多少次
        let t = 500 / n  //多长时间动一次
        let currentTop = window.scrollY//当前高度
        let targetTop = top - 80 //目标高度
        let s = (targetTop - currentTop) / n //每次动的距离
        let i = 0 
        let id = setInterval(() => {
            if(i===n){ //如果第25次
                window.clearInterval(id) //闹钟停止
                return
            }
            i = i + 1 //第几次
            window.scrollTo(0,currentTop + s * i) //滚动到文档中的某个坐标。
        },t)  */  
      }
  }

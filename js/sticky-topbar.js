!function(){
    var view = document.querySelector('#header')
    
    var controller = {
        view: null,
        init: function(view){
                this.view = view
                this.bindEvents() // 等价于 this.bindEvents.call(this)
              },
        bindEvents: function(){
        var view = this.view
        window.addEventListener('scroll', (x)=>{ // 箭头函数没有 this
            if(window.scrollY > 0){ //获取页面滚动时的高度
                this.active() //滚动时加sticky
            }else{
                this.deactive()
            }
        })
        },
        active: function(){ 
            this.view.classList.add('sticky')
        },
        deactive: function(){ 
        this.view.classList.remove('sticky')
    }
    }
  controller.init(view) // 等价于 controller.init.call(controller, view)
}.call()

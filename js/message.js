//初始化
var APP_ID = 'odqJp2hRXgVjri9rQ7w6Eu2a-gzGzoHsz';
var APP_KEY = '1lVVfmlFQwlCMemjwstkcxtD';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
.then(// then 就是成功调用第一个函数，失败调用第二个函数
    function (messages) {
    let array = messages.map((item)=>item.attributes)
    array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
  }
)

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e){
    e.preventDefault()
    let name = myForm.querySelector('input[name = name]').value
    let content = myForm.querySelector('input[name = content]').value
    //判断 input 输入情况
    if(content !== '' && name !== ''){
        var Message = AV.Object.extend('Message');
        var message = new Message();
    }else if(name === ''){
        alert('还不知道怎么称呼你呢')
    }else if(content === ''){
        alert('写点什么吧')
    }
    message.save({
        'name': name,
        'content': content
    }).then(function(object){
        alert('发送成功')
        //无刷新留言
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        //自动清空输入框内容
        myForm.querySelector('input[name = name]').value = '' 
        myForm.querySelector('input[name = content]').value = ''
        console.log(object)
    })
})

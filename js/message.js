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
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then(function(object){
        //无刷新留言
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name = name]').value = ''//自动清空输入框内容 
        myForm.querySelector('input[name = content]').value = ''
        console.log(object)
    })
})

/* 
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/
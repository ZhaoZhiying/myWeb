//初始化
var APP_ID = 'odqJp2hRXgVjri9rQ7w6Eu2a-gzGzoHsz';
var APP_KEY = '1lVVfmlFQwlCMemjwstkcxtD';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
.then(
    function (messages) {
    let array = messages.map((item)=>item.attributes)
    array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
}, 
    function (error) {
    // 异常处理
    alert('改天再来哟')
    }
)
.then(// then 就是成功调用第一个函数，失败调用第二个函数
   ()=>{},
   (error)=>{
       console.log(error)
   }
)


let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name = content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content
    }).then(function(object){
        window.location.reload()//自动刷新
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
//初始化
var APP_ID = 'odqJp2hRXgVjri9rQ7w6Eu2a-gzGzoHsz';
var APP_KEY = '1lVVfmlFQwlCMemjwstkcxtD';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

postMessageForm.addEventListener('submit', function(e){
    e.preventDefault()
    let content = postMessageForm.querySelector('input[name = content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content
    }).then(function(object){
        alert('存入成功')
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
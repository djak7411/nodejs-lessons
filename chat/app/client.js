
const socket = new WebSocket('ws://localhost:3001');

//отправка сообщения из формы
document.forms.chat.onsubmit = function(event){
    event.preventDefault();
    let outMsg = this.message.value; 
    socket.send(outMsg);
}

//обработчик входящих сообщений
socket.onmessage = function(event){
    
    let inMsg = event.data;
    showMessage(inMsg);
}

function showMessage(msg){
    let msgElement = document.createElement('p');
    msgElement.appendChild(document.createTextNode(msg));
    document.getElementById('chat').appendChild(msgElement);

}
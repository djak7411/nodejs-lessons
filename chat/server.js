const WEBSOCKET = require('ws');
const SERVER = WEBSOCKET.Server;

let ws = new SERVER({port:3001});
let messages = [];
let censure = ['сука', 'блядь', 'хуй', 'залупа', 'хер', 'давалка', 'ссанина', 'блядина'];

console.log('server enabled');

ws.on("connection",function(socket){
    console.log('client connected');
    messages.forEach(function(msg){
        socket.send(msg);
    });
    socket.on('message',function(data){
        censure.forEach(function(badWord){
            if(data.toString().indexOf(badWord) != -1) {
                data = data.replace(badWord, (badWord) => {
                    let censored = "";
                    for(i = 0; i<badWord.length; i++){
                        censored+="*";
                    }
                    return censored;
                });
            }
        });
            
        
        messages.push(data);
        console.log('message send: '+data);
        ws.clients.forEach(function(clientSocket){
            clientSocket.send(data);
        });
    });  
});
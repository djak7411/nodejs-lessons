const extrModule = require('./extract');
const PORT = 3000; //порт который будем прослушивать
const FS = require('fs');
const handleError = function (err, response) {
    response.writeHead(404);
    let page404 = extrModule(404);
    FS.readFile(page404,function(err,data){
        response.end(data);
    });
}

//модуль path работает с любыми ОС и ему не важно
//какой слэш пришел в запросе (прямой или обратный)
const HTTP = require('http'); //подключаем модуль, принимает название модуля
const SERVER = HTTP.createServer(function(request, response){
    let url = request.url; //в объекте request хранится url запроса
    filePath = extrModule(url);
    FS.readFile(filePath,function(err,data){
        if (err) {
            handleError(err,response);
            return;
        } 
        response.end(data);
    });
}); //создаем сервер и передаем событие, срабатывающее на сервере при получении HTTP-запроса
SERVER.listen(PORT); //привязываем сервер к указанному порту




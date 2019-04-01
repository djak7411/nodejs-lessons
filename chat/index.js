const PORT = 3000; //порт который будем прослушивать
const HTTP = require('http'); //подключаем модуль, принимает название модуля
const SERVER = HTTP.createServer(function(request, response){
    console.log('Ожидаю ответ'); //вывод в консоль npm
    response.end('<h1>Hello, Kittie111!</h1>'); //отправка данных клиенту

}); //создаем сервер и передаем событие, срабатывающее на сервере при получении HTTP-запроса
SERVER.listen(PORT); //привязываем сервер к указанному порту

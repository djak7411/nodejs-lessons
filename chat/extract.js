const PATH = require('path');

const extr = function(url) {
    let filename = "index.html";
    if (url==404) {
        filename = '404.html';
    }
    else if (url.length>1) {
        filename = url.substring(1);
    }
    let filePath = PATH.resolve(__dirname,"app",filename);
    return filePath;
}

module.exports = extr;
// при импорте данного модуля
// возвращаемое значение будет являться этой функцией
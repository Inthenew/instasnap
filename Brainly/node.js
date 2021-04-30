let express = require('express');
let ejs = require('ejs');
let fs = require('fs');
let Cookies = require('cookies');
let app = express();
app.set("views", "views");
app.engine(".html", ejs.__express);
app.set("view-engine", "html");
app.enable('trust proxy');
let http = require('http');
const { info } = require('console');
let server = http.createServer(app).listen(8080, 'freedns1.registrar-servers.com');
const io = require('socket.io')(server);
io.sockets.on('connection', function (socket) {
    socket.once('disconnect', function () {
    })
});
app.get('/', function (req, res) {
    if (req.protocol === 'https') {
    ejs.renderFile(__dirname + '/views/ejs.ejs', {}, {}, function (err, str) {
        if (err) throw err;
        res.send(str);
    })
    } else {
            res.redirect('https://' + req.headers.host + req.url);
    }
})

let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
require("./db/dbConnection");
let router = require("./routers/router");

let http = require('http').createServer(app);
let io = require('socket.io')(http);

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use("/", router);

io.on('connection', (socket) => {
    console.log('A user is connected');
    socket.on('Disconnect', () => {
    console.log('A user is disconnected');
});
    setInterval(()=>{
    socket.emit('Number', parseInt(Math.random()*10));
    }, 1000);
});

// app.listen(port, () => {
// 	console.log("server start");
// 	//runDB();
// });

http.listen(port, () => {
    console.log("server start");
});

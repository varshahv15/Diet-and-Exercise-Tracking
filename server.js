let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
require("./db/dbConnection");
let router = require("./routers/router");

let port = process.env.PORT || 3000;

const { Socket } = require("socket.io");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use("/", router);

let users = {};
io.on("connection", (socket) => {
	socket.on("newConnect", (name) => {
		console.log("user connected");
		console.log(name);
		users[socket.id] = name;
		socket.broadcast.emit("user-connected", name);
	});
	socket.on("send-chat-message", (message) => {
		socket.broadcast.emit("chat-message", {
			message: message,
			name: users[socket.id],
		});
	});
	socket.on("disconnect", () => {
		console.log("user disconnected");
		socket.broadcast.emit("user-disconnected", users[socket.id]);
		delete users[socket.id];
	});
});

http.listen(port, () => {
	console.log("server start");
	//runDB();
});

let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
require("./db/dbConnection");
let router = require("./routers/router");

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use("/", router);

app.listen(port, () => {
	console.log("server start");
	//runDB();
});

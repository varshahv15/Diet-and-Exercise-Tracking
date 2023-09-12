let express = require("express");
let app = express();
require("./db/dbConnection");
let router = require("./routers/router");

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", router);

app.listen(port, () => {
	console.log("server start");
	//runDB();
});

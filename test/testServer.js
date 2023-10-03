const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
//const request = require("request");
const chaiHTTP = require("chai-http");
const e = require("express");
chai.use(chaiHTTP);

let user = {
	username: "aaa",
	password: "aaaaa",
};

let exercise = {
	exerciseList: {
		exercise_type: "cycling",
		time: 3,
		calorie: 99,
	},
	cookie1: "aaa",
};

describe("Test function API Login	", function () {
	it("expected status code 201", function (done) {
		chai.request("http://localhost:3000")
			.post("/api/users/login")
			//.set("content-type", "application/x-www-form-urlencoded")
			.type("form")
			.send(user)
			.end(function (error, response, body) {
				let bodyObj = response.body;
				console.log(bodyObj.data);
				expect(bodyObj.data == user.username) &&
					expect(bodyObj.statusCode == 201);
				done();
			});
	});
});

describe("Test function API post new Exercise data", function () {
	it("expected status code 204", function (done) {
		chai.request("http://localhost:3000")
			.post("/api/users/exercise")
			//.set("content-type", "application/x-www-form-urlencoded")
			.type("form")
			.send(exercise)
			.end(function (error, response, body) {
				let bodyObj = response.body;
				console.log(bodyObj.data);
				//expect(bodyObj.message == "update") &&
				//	expect(bodyObj.statusCode == 205);
				done();
			});
	});
});

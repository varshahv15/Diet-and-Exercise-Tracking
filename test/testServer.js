const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
//const request = require("request");
const chaiHTTP = require("chai-http");
const e = require("express");
chai.use(chaiHTTP);

let user = {
	username: "aaa",
	password: "aaaaaa",
};

let new_user = {
	username: "test_user1",
	password: "test_user1",
};

let update_user = {
	username: "kkk",
	password: "passwordChange",
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
	it("expected status code 205", function (done) {
		chai.request("http://localhost:3000")
			.post("/api/users/exercise")
			//.set("content-type", "application/x-www-form-urlencoded")
			.type("form")
			.send(exercise)
			.end(function (error, response, body) {
				let bodyObj = response.body;
				console.log(bodyObj);
				expect(bodyObj.message == "exercise data add") &&
					expect(bodyObj.statusCode == 205);
				done();
			});
	});
});

describe("Test function API register User", function () {
	it("expected status code 201", function (done) {
		chai.request("http://localhost:3000")
			.post("/api/users/register")
			//.set("content-type", "application/x-www-form-urlencoded")
			.type("form")
			.send(new_user)
			.end(function (error, response, body) {
				let bodyObj = response.body;
				console.log(bodyObj);
				expect(bodyObj.message == "new user add") &&
					expect(bodyObj.statusCode == 201);
				done();
			});
	});
});

describe("Test function API Delete User", function () {
	it("expected status code 202", function (done) {
		chai.request("http://localhost:3000")
			.delete("/api/users/delete")
			//.set("content-type", "application/x-www-form-urlencoded")
			.type("form")
			.send(new_user)
			.end(function (error, response, body) {
				let bodyObj = response.body;
				console.log(bodyObj);
				expect(bodyObj.message == "user deleted") &&
					expect(bodyObj.statusCode == 202);
				done();
			});
	});
});

describe("Test function API Update User Password", function () {
	it("expected status code 203", function (done) {
		chai.request("http://localhost:3000")
			.put("/api/users/updatePassword")
			//.set("content-type", "application/x-www-form-urlencoded")
			.type("form")
			.send(update_user)
			.end(function (error, response, body) {
				let bodyObj = response.body;
				console.log(bodyObj);
				expect(bodyObj.message == "user password updated") &&
					expect(bodyObj.statusCode == 203);
				done();
			});
	});
});

function loginUser(user) {
	$.ajax({
		url: "/api/users/login",
		type: "POST",
		data: user,
		dataType: "json",
		success: (result) => {
			if (result.data === user.username) {
				//if (x_cookie === user.username) {
				window.location.href = "/options";
			} else {
				alert("Wrong username or password");
			}
		},
	});
}

const formLogin = () => {
	let formLogin_var = {};
	formLogin_var.username = $("#Username2").val();
	formLogin_var.password = $("#Password2").val();

	console.log(formLogin_var);
	loginUser(formLogin_var);
};

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie) {
		window.location.href = "/options";
	}

	$("#LoginF").on("click", function (e) {
		e.preventDefault();
		formLogin();
	});
});

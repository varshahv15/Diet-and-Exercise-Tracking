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
	let formLogin1 = {};
	formLogin1.username = $("#Username2").val();
	formLogin1.password = $("#Password2").val();

	//console.log(formLogin1);
	loginUser(formLogin1);
};

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie) {
		window.location.href = "/options";
	}

	$("#formSubmit1").click(function () {
		formLogin();
	});
});

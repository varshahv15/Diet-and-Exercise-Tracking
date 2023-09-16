function loginUser(user) {
	$.ajax({
		url: "/api/users/login",
		type: "POST",
		data: user,
		dataType: "json",
		success: (result) => {
			if (result.data != null) {
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

	console.log(formLogin1);
	loginUser(formLogin1);
};

$(document).ready(function () {
	$("#formSubmit1").click(function () {
		formLogin();
	});
});

function registerUser(user) {
	$.ajax({
		url: "/api/users/register",
		type: "POST",
		data: user,
		dataType: "json",
		success: (result) => {
			if (result.statusCode === 201) {
				alert("user post success");
				window.location.href = "/";
			}
		},
	});
}

const formRegister = () => {
	let formData = {};
	formData.email = $("#Email1").val();
	formData.username = $("#Username1").val();
	formData.password = $("#Password1").val();

	console.log(formData);
	registerUser(formData);
};

$(document).ready(function () {
	$("#RegisterF").on("click", function (e) {
		e.preventDefault();
		formRegister();
	});
});

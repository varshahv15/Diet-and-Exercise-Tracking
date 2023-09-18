function postUser(user) {
	$.ajax({
		url: "/api/users",
		type: "POST",
		data: user,
		dataType: "json",
		success: (result) => {
			if (result.statusCode === 201) {
				alert("user post success");
			}
			window.location.href = "/";
		},
	});
}

const formRegister = () => {
	let formData = {};
	formData.email = $("#Email1").val();
	formData.username = $("#Username1").val();
	formData.password = $("#Password1").val();

	console.log(formData);
	postUser(formData);
};

$(document).ready(function () {
	$("#formSubmit").click(function () {
		formRegister();
	});
});

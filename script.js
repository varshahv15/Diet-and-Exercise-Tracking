function postUser(user) {
	$.ajax({
		url: "/api/user",
		type: "POST",
		data: user,
		success: (result) => {
			if (result.statusCode === 201) {
				alert("User create success");
			}
		},
	});
}

function getAllUser() {
	$.get("/api/user", (result) => {
		if (result.statusCode === 200) {
			addCards(result.data);
		}
	});
}

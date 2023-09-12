function postUser(user) {
	$.ajax({
		url: "/api/user",
		type: "POST",
		data: kitchen,
		success: (result) => {
			if (result.statusCode === 201) {
				alert("Kitchen post success");
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

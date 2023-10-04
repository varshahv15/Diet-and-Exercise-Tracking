$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie == null) {
		window.location.href = "/";
	}
});

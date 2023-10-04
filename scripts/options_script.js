let socket = io();
	socket.on('Number', (message) => {
	console.log('Random number is: ' + message);
})

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie == null) {
		window.location.href = "/";
	}
});

const socket = io();
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie == null) {
		window.location.href = "/";
	}
	let user_id = save_cookie;

	appendMessage(`You joined with name: ${user_id}`);
	socket.emit("newConnect", user_id);

	socket.on("chat_message", (data) => {
		appendMessage(`${data.name}: ${data.message}`);
	});

	socket.on("user_connected", (name) => {
		appendMessage(`${name} had connected`);
	});

	socket.on("user_disconnected", (name) => {
		appendMessage(`${name} had disconnected`);
	});

	messageForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const message = messageInput.value;
		appendMessage(`You: ${message}`);
		socket.emit("send_message", message);
		messageInput.value = "";
	});

	function appendMessage(message) {
		const messageElement = document.createElement("div");
		messageElement.innerText = message;
		messageContainer.append(messageElement);
	}
});

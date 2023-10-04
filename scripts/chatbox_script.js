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

	//const name = prompt("What is your name?");
	appendMessage(`You joined with name: ${user_id}`);
	socket.emit("newConnect", user_id);

	socket.on("chat-message", (data) => {
		appendMessage(`${data.name}: ${data.message}`);
	});

	socket.on("user-connected", (name) => {
		appendMessage(`${name} connected`);
	});

	socket.on("user-disconnected", (name) => {
		appendMessage(`${name} disconnected`);
	});

	messageForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const message = messageInput.value;
		appendMessage(`You: ${message}`);
		socket.emit("send-chat-message", message);
		messageInput.value = "";
	});

	function appendMessage(message) {
		const messageElement = document.createElement("div");
		messageElement.innerText = message;
		messageContainer.append(messageElement);
	}
});

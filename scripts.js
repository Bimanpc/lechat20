function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value;
    if (message.trim() === '') return;

    addMessage(message, 'user');
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = `Réponse automatique: ${message}`;
        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const aiAssistant = document.getElementById('ai-assistant');
    const chatContainer = document.getElementById('ai-chat');
    const chatBox = chatContainer.querySelector('.chat-box');
    const chatClose = document.getElementById('chat-close');
    const messageInput = chatContainer.querySelector('input');
    const sendButton = chatContainer.querySelector('button:last-child');
    const chatHistory = chatContainer.querySelector('.chat-history');

    aiAssistant.addEventListener('click', (e) => {
        e.preventDefault();
        chatBox.style.display = 'flex';
    });

    chatClose.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            displayMessage('user', message);
            // 这里应该发送消息到AI服务并获取回复
            // 暂时用模拟回复代替
            setTimeout(() => {
                displayMessage('ai', '这是AI的回复');
            }, 1000);
            messageInput.value = '';
        }
    }

    function displayMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});
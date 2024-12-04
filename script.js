// Function to send user message and show response
function sendMessage() {
    let userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() === "") return;

    // Show user message
    displayMessage(userMessage, 'user-message');
    
    // Respond based on user message
    let response = getResponse(userMessage.toLowerCase());
    setTimeout(() => {
        displayMessage(response, 'bot-message');
    }, 1000);
    
    // Clear the input field
    document.getElementById('userMessage').value = '';
}

// Display message in the chat
function displayMessage(message, type) {
    let messageContainer = document.getElementById('message-container');
    let newMessage = document.createElement('div');
    newMessage.classList.add('message', type);
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Get appropriate response from the JSON data
function getResponse(userMessage) {
    let keys = Object.keys(responses);
    for (let i = 0; i < keys.length; i++) {
        if (userMessage.includes(keys[i])) {
            return responses[keys[i]];
        }
    }
    return responses['default'];
}

// To handle pressing Enter key for submitting messages
document.getElementById('userMessage').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
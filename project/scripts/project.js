/* FOOTER */
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

/* FORM */
function saveMessage(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const newMessage = { name, email, phone, message };
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
    window.location.href = 'messages.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    if (messages.length === 0) {
        messagesContainer.innerHTML = '<p>No messages found.</p>';
    } else {       
        messagesContainer.innerHTML = messages.map(message => `
            <div class="message-card">
                <p><strong>Name:</strong> ${message.name}</p>
                <p><strong>Email:</strong> ${message.email}</p>
                <p><strong>Phone:</strong> ${message.phone || 'N/A'}</p>
                <p><strong>Message:</strong> ${message.message}</p>
            </div>
        `).join('');
    }
});
document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch form values
    const amount = document.getElementById('amount').value;
    const method = document.getElementById('method').value;
    const details = document.getElementById('details').value;

    // Simulate withdrawal process (replace with actual logic)
    if (amount && method && details) {
        // Assuming successful withdrawal
        document.getElementById('message').textContent = `Withdrawal of $${amount} via ${method} is successful!`;
        // Clear form fields after submission
        document.getElementById('withdrawForm').reset();
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    }
    
});

document.getElementById('verifyAccountBtn').addEventListener('click', function() {
    // Replace with actual verification logic or redirect to verification page
    alert('Redirecting to account verification page...');
    // Example: window.location.href = 'verification.html';
});



document.getElementById('verify').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch form values
    const amount = document.getElementById('amount').value;
    const method = document.getElementById('method').value;
    const details = document.getElementById('details').value;

    // Display pending verification message
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Your verify is pending. If you scam your account may be block.';
    messageElement.style.color = '#333'; // Optionally, change text color if needed

    // Optional: Simulate form reset after submission
    setTimeout(function() {
        document.getElementById('verify').reset();
    }, 2000); // Reset form after 2 seconds (2000 milliseconds)
});

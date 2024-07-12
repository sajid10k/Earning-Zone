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

    // Simulate redirection after 2 seconds (2000 milliseconds)
    setTimeout(function() {
        // Redirect to withdraw page
        window.location.href = 'withdraw.html'; // Replace 'withdraw.html' with your actual withdraw page URL
    }, 2000); // Redirect after 2 seconds (2000 milliseconds)
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send the login data to the backend (using fetch API or Axios)
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.role === 'admin') {
            window.location.href = 'admin.xyz.com/home';
        } else {
            window.location.href = 'home.html';
        }
    })
    .catch(error => console.error('Error:', error));
});

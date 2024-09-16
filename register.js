document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const user = {
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        regNo: document.getElementById('regNo').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = 'login.html';
    })
    .catch(error => console.error('Error:', error));
});

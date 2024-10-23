// Admin Form to Update School Details and Store in Local Storage
document.getElementById('adminForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const motto = document.getElementById('motto').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    localStorage.setItem('schoolMotto', motto);
    localStorage.setItem('schoolAddress', address);
    localStorage.setItem('schoolPhone', phone);

    alert('School details updated successfully!');
});

// Load School Details from Local Storage
document.addEventListener('DOMContentLoaded', function() {
    const motto = localStorage.getItem('schoolMotto') || '"It is bitter to prepare a child than to repair a man"';
    const address = localStorage.getItem('schoolAddress') || '5, Ore-Ofe Close, off Old Otta Road, near Carnival Hotel, Captain Bus-stop';
    const phone = localStorage.getItem('schoolPhone') || '09036456992, 08029696733, 08037501158';

    document.querySelector('.motto')?.textContent = motto;
    document.getElementById('school-address')?.textContent = address;
    document.getElementById('school-phone')?.textContent = phone;
});

// Register Form Handling
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    window.location.href = 'login.html';
});

// Login Form Handling
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'website.html';
    } else {
        alert('Incorrect username or password.');
    }
});

// Load Logged-in Username
document.addEventListener('DOMContentLoaded', function() {
    const storedUsername = localStorage.getItem('username');
    document.getElementById('userDisplayName')?.textContent = storedUsername || 'User';
});

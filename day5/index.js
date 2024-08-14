document.getElementById('fetch-users-btn').addEventListener('click', fetchUsers);

// Function to fetch users from the Reqres API
function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            // Pass the fetched user data to the display function
            displayUsers(data.data);
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Function to display users on the webpage
function displayUsers(users) {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = ''; // Clear previous users

    // Iterate through each user and create HTML elements to display their data
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        userDiv.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>${user.email}</p>
        `;

        usersContainer.appendChild(userDiv);
    });
}

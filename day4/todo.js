document.addEventListener('DOMContentLoaded', () => {
    // URL of the API to fetch todos
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    // Fetch the todos from the API
    fetch(apiUrl)
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Get the ul element where todos will be appended
            const todoList = document.getElementById('todo-list');

            // Iterate over each todo item in the data
            data.forEach(todo => {
                // Create a li element for each todo
                const listItem = document.createElement('li');
                // Set the text content of the li element
                listItem.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Not Completed'}`;
                // Append the li element to the ul
                todoList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Log any errors that occur during the fetch operation
            console.error('Error fetching todos:', error);
        });
});


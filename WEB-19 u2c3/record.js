const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const empID = document.getElementById("empId").value;
    const department = document.getElementById("department").value;
    const experience = document.getElementById("experience").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    
    // Determine role based on experience
    let role;
    if (experience > 5) {
      role = "Senior";
    } else if (experience >= 2) {
      role = "Junior";
    } else {
      role = "Fresher";
    }
    
    // Append the new data to the table
    const tableBody = document.querySelector("tbody");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${empID}</td>
      <td>${department}</td>
      <td>${experience}</td>
      <td>${email}</td>
      <td>${mobile}</td>
      <td>${role}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    tableBody.appendChild(newRow);
    
    // Reset form fields
    form.reset();
  });
  
    
const apiUrl = "http://localhost:3000/users";

async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    alert("Error fetching users:",error.message)
  }
}


async function saveUsers(users) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
  } catch (error) {
    console.log("Error saving users:", error.message);
  }
}


function displayUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = users.length
    ? users
        .map(
          (user) => `
            <tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="3">No users found.</td></tr>`;
}
// Add a new user
async function addUser(event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const phone = document.getElementById("phoneInput").value;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const users = await response.json();

    users.push({ name, email, password, phone });
    await saveUsers(users);

    fetchUsers();
  } catch (error) {
    console.error("Error adding user:", error);
  }
}


async function resetData() {
  try {
    await saveUsers([]);
    fetchUsers(); 
  } catch (error) {
    console.error("Error resetting data:", error);
  }
}


document.getElementById("userForm").addEventListener("submit", addUser);
document.getElementById("resetButton").addEventListener("click", resetData);

fetchUsers();

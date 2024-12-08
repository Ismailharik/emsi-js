// Task 1: Handle Button Clicks
const bgButton = document.getElementById("bg-button");

bgButton.addEventListener("click", () => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
});

// Task 2: Form Submission
const textForm = document.getElementById("textForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const phoneInput = document.getElementById("phoneInput");
const formResult = document.getElementById("formResult");

textForm.addEventListener("submit", (event) => {
  // 2. for submition handling
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !email || !password || !phone) {
    alert("Please fill in all the fields.");
    return;
  }

  // 3. display submitted data
  const resultText = document.createElement("p");
  resultText.textContent = `User added: ${name}, ${email}, ${phone}`;
  resultText.style.color = "green";
  formResult.appendChild(resultText);

  const list = document.getElementById("list");
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>${email}</span> <button>Remove</button>`;
  list.appendChild(listItem);

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  phoneInput.value = "";

  setTimeout(() => {
    formResult.removeChild(resultText);
  }, 5000);
});

// 4. List Item Interaction
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  console.log(event.target.innerText)
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});

// 5 Hover Interaction
const hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "#ddd";
});

hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.backgroundColor = "white";
});

// 6 Reset Button
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  formResult.innerHTML = "";
  list.innerHTML = `
    <li><span>user1@emsi.ma</span> <button>Remove</button></li>
    <li><span>user2@emsi.ma</span> <button>Remove</button></li>
    <li><span>user3@emsi.ma</span> <button>Remove</button></li>
  `;
});

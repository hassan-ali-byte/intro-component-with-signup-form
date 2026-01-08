// -----------------------------
// DOM References
// -----------------------------
const form = document.querySelector(".form");
const fieldset = document.querySelector(".fieldset");
const submission = document.querySelector(".submission");

// Input fields
const userFirstName = document.querySelector("#firstName");
const userLastName = document.querySelector("#lastName");
const userEmail = document.querySelector("input[type='email']");
const userPassword = document.querySelector("input[type='password']");

// Group fields in an array for easy loop
const fields = [
  { el: userFirstName, name: "First Name" },
  { el: userLastName, name: "Last Name" },
  { el: userEmail, name: "Email", fakeValue: "email@example.com" },
  { el: userPassword, name: "Password" },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let allValid = true;

  fields.forEach((fieldObj) => {
    const field = fieldObj.el;
    const inputGroup = field.closest(".input-group");
    let value = field.value.trim();

    // Handle fake email value
    if (fieldObj.fakeValue && value === "") {
      field.value = fieldObj.fakeValue;
      value = field.value;
    }

    // Validation
    if (value === "" || value === fieldObj.fakeValue) {
      inputGroup.classList.add("is-invalid");
      allValid = false;
    }
  });

  if (allValid) {
    submission.classList.add("is-valid");
  }
});

// -----------------------------
// Focusin Handler
// -----------------------------
fieldset.addEventListener("focusin", (e) => {
  const inputGroup = e.target.closest(".input-group");
  if (!inputGroup) return;

  if (
    e.target.id === "email" &&
    inputGroup.classList.contains("is-invalid") &&
    e.target.value === "email@example.com"
  ) {
    e.target.value = "";
  }

  inputGroup.classList.remove("is-invalid");
});

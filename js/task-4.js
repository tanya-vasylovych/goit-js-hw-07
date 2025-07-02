const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

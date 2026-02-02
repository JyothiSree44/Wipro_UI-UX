// Form validation
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!this.checkValidity()) {
    this.classList.add("was-validated");
    return;
  }

  alert("Form submitted successfully");
});

// Fetch API example
function loadUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById("userData").innerHTML = `
        <img src="${user.picture.medium}" alt="User Image">
        <p>${user.name.first} ${user.name.last}</p>
        <p>${user.email}</p>
      `;
    })
    .catch(() => {
      document.getElementById("userData").innerText = "Error loading user";
    });
}

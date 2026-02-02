    // 1. Fetch employee data and display in console
fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then(response => response.json())
    .then(data => {
        console.log("Employee Data:", data);
    })
    .catch(error => {
        console.log("Error fetching employee data:", error);
    });


// 2. Fetch random user data on button click
function getRandomUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            document.getElementById("userData").innerHTML = `
                <img src="${user.picture.large}" alt="User Image" width="150"><br>
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
        })
        .catch(error => {
            console.log("Error fetching user data:", error);
        });
}

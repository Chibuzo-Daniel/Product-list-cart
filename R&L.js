// Registration Handling
document.addEventListener("DOMContentLoaded", function(){
    // Get the registration button
    const btnRegister = document.querySelector(".btn-register");
    if (btnRegister){
        btnRegister.addEventListener("click", function (event){
            event.preventDefault();

            // Get input values
            const fullName = document.querySelector(".fullname").value.trim();
            const userName = document.querySelector(".username").value.trim();
            const phoneNumber = document.querySelector(".phone-number").value.trim();
            const passWord = document.querySelector(".password").value.trim();
            const confirmPassword = document.querySelector(".confirm-password").value.trim();

            // Input validation
            if (!fullName || !userName || !phoneNumber || !passWord || !confirmPassword){
                alert("❌ Please fill in all the fields.");
                return;
            }
            if (passWord !== confirmPassword){
                alert("❌ Your passwords do not match.");
                return;
            }

            // Store data in local storage
            const user = { fullName, userName, phoneNumber, passWord };
            localStorage.setItem(userName, JSON.stringify(user));
            alert("✅ Registration successful! You can now sign in.");

            // Redirect to login page
            window.location.href = "login.html";
        });
    }

    // Login Handling
    const btnLogin = document.querySelector(".btn-sign");
    if (btnLogin) {
        btnLogin.addEventListener("click", function (event) {
            event.preventDefault();

            // Get input values
            const userName = document.querySelector(".login-username").value.trim();
            const passWord = document.querySelector(".login-password").value.trim();

            // Check if user exists in local storage
            const storedUser = localStorage.getItem(userName);
            if (!storedUser) {
                alert("❌ User does not exist.");
                return;
            }

            // Convert the stored user data back to an object
            const userData = JSON.parse(storedUser);

            // Check if the password is correct
            if (userData.passWord !== passWord) {
                alert("❌ Incorrect password.");
                return;
            }

            alert("✅ Login Successful!");
            window.location.href = "index.html";
        });
    }
});
const btnSignIn = document.querySelector(".btn-sign");
if (btnSignIn) {
    btnSignIn.addEventListener("click", function() {
        window.location.href = "login.html";
    });
}

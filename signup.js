document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    // Clear message
    msg.style.color = "red";

    // 🔍 Validation
    if (username === "" || password === "") {
        msg.textContent = "⚠️ Please fill all fields";
        return;
    }

    if (password.length < 6) {
        msg.textContent = "⚠️ Password must be at least 6 characters";
        return;
    }

    // 💾 Save data (for demo)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // ✅ Success message
    msg.style.color = "green";
    msg.textContent = "✅ Account Created Successfully! Redirecting...";

    // 🔁 Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 2000);
});

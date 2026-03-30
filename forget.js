// Toggle password visibility
function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

// Handle form submission
document.getElementById("resetForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const newpass = document.getElementById("newpass").value;
    const confirmpass = document.getElementById("confirmpass").value;
    const msg = document.getElementById("msg");

    // Clear message
    msg.style.color = "red";

    // Validation
    if (username === "") {
        msg.textContent = "⚠️ Please enter your username";
        return;
    }

    if (newpass.length < 6) {
        msg.textContent = "⚠️ Password must be at least 6 characters";
        return;
    }

    if (newpass !== confirmpass) {
        msg.textContent = "❌ Passwords do not match";
        return;
    }

    // Success message
    msg.style.color = "green";
    msg.textContent = "✅ Password reset successful! Redirecting...";

    // (Optional) Save to localStorage (for demo purpose)
    localStorage.setItem("username", username);
    localStorage.setItem("password", newpass);

    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});

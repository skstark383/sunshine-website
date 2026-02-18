function enrollStudent() {
    alert("Enrollment form submitted successfully!");
}

function loginAdmin() {
    const user = document.getElementById("adminUser").value;
    const pass = document.getElementById("adminPass").value;

    if(user === "admin" && pass === "1234") {
        localStorage.setItem("adminLoggedIn", "true");
        alert("Login Successful");
        document.getElementById("adminPanel").style.display = "block";
    } else {
        alert("Invalid Credentials");
    }
}

function saveNotice() {
    const notice = document.getElementById("noticeText").value;
    localStorage.setItem("notice", notice);
    alert("Notice Saved");
}

function loadNotice() {
    const saved = localStorage.getItem("notice");
    if(saved) {
        document.getElementById("displayNotice").innerText = saved;
    }
}

window.onload = loadNotice;
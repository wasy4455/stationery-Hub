// Toggle Sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    } else {
        sidebar.classList.add("show");
    }
}

// Toggle Profile Menu
function toggleProfileMenu() {
    document.getElementById("profile-menu").classList.toggle("show");
}

// Navigate to Inventory Management
function goToInventory() {
    window.location.href = "inventory.html";
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}

// Manage Profile (Placeholder Function)
function manageProfile() {
    alert("Profile management coming soon!");
}

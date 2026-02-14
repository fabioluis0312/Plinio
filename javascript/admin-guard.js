const isAdmin = localStorage.getItem("isAdmin") === "true";

if (isAdmin) {
    document.body.classList.add("admin-mode");
}

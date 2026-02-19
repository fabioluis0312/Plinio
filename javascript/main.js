/* =========================
    ELEMENTOS
========================= */

const openLoginBtn = document.getElementById("openLogin");
const closeLoginBtn = document.getElementById("closeLogin");
const modalOverlay = document.getElementById("loginModal");

/* =========================
    MODAL LOGIN
========================= */

// abrir modal
openLoginBtn?.addEventListener("click", () => {
    modalOverlay.classList.add("active");
});

// fechar modal no X
closeLoginBtn?.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
});

// fechar clicando fora
modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});

// impedir reload do form
modalOverlay?.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login ainda não implementado");
});

/* =========================
    SCROLL SUAVE (ÂNCORAS)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});



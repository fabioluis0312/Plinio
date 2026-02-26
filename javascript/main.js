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
========================= 

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

// ===== NEWS MODAL =====
(() => {
    const modalOverlay = document.getElementById("newsModal");
    const closeBtn = document.getElementById("closeNewsModal");

    const elImg = document.getElementById("newsModalImg");
    const elBadge = document.getElementById("newsModalBadge");
    const elMeta = document.getElementById("newsModalMeta");
    const elTitle = document.getElementById("newsModalTitle");
    const elText = document.getElementById("newsModalText");
    const elLink = document.getElementById("newsModalLink");

    if (!modalOverlay) return;

    let lastFocus = null;

    function openNewsModal(data) {
        lastFocus = document.activeElement;

        // conteúdo
        elTitle.textContent = data.title || "Detalhes";
        elText.textContent = data.text || "";
        elMeta.innerHTML = `
      <span>${data.date || ""}</span>
      <span class="news-dot" aria-hidden="true">•</span>
      <span>${data.from || ""}</span>
    `;

        // imagem
        const imgSrc = data.img || "";
        elImg.src = imgSrc;
        elImg.alt = data.alt || data.title || "Imagem do destaque";

        // badge
        elBadge.textContent = data.badge || "";
        elBadge.className = "news-badge"; // reset
        if (data.badgeClass) elBadge.classList.add(data.badgeClass);

        // link
        const link = data.link || "#";
        elLink.href = link;
        elLink.style.display = link && link !== "#" ? "inline-block" : "none";

        // abre
        modalOverlay.classList.add("active");
        modalOverlay.setAttribute("aria-hidden", "false");

        // foco no botão fechar (acessibilidade)
        closeBtn?.focus();
    }

    function closeNewsModal() {
        modalOverlay.classList.remove("active");
        modalOverlay.setAttribute("aria-hidden", "true");

        // limpa imagem (evita baixar vídeo/imagem mantendo)
        elImg.src = "";
        elImg.alt = "";

        // devolve foco
        if (lastFocus && typeof lastFocus.focus === "function") {
            lastFocus.focus();
        }
    }

    // Delegação: qualquer clique em .js-news-open abre o modal
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".js-news-open");
        if (!btn) return;

        e.preventDefault();

        openNewsModal({
            title: btn.dataset.title,
            date: btn.dataset.date,
            from: btn.dataset.from,
            badge: btn.dataset.badge,
            badgeClass: btn.dataset.badgeClass,
            img: btn.dataset.img,
            alt: btn.dataset.alt,
            text: btn.dataset.text,
            link: btn.dataset.link,
        });
    });

    // fechar no X
    closeBtn?.addEventListener("click", closeNewsModal);

    // fechar clicando fora (overlay)
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeNewsModal();
    });

    // fechar no ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
            closeNewsModal();
        }
    });
})(); */



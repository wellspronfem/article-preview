const shareBtn = document.body.querySelectorAll(".button-share");
const sharingArea = document.body.querySelector(".sharing");

shareBtn.forEach(entry => {
    entry.addEventListener("click", () => {
        sharingArea.classList.toggle("sharing--hidden");
        shareBtn[0].classList.toggle("button-share--active");
        sharingArea.focus();
    });
});

const deactivate = () => {
    sharingArea.classList.add("sharing--hidden");
    shareBtn[0].classList.remove("button-share--active");
};

document.body.addEventListener("mousedown", (e) => {
    const sharingIsActive = !sharingArea.classList.contains("sharing--hidden");
    const clickedOut = !sharingArea.contains(e.target);
    const clickedAnyButton = shareBtn[0].contains(e.target) || shareBtn[1].contains(e.target);

    if (sharingIsActive) {
        if (clickedOut && !clickedAnyButton) {
            deactivate();
        }
        return;
    }
});

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        deactivate();
    }
});

window.addEventListener("resize", () => {
    deactivate();
});
onload = () => {
    document.body.classList.remove("container");

    // Mainkan musik setelah halaman selesai dimuat
    const bgMusic = document.getElementById("bg-music");
    bgMusic.volume = 0.5; // setel volume 50%
    bgMusic.play().catch(() => {
        // Jika browser memblokir autoplay, tampilkan tombol manual
        const btn = document.createElement("button");
        btn.textContent = "Play Sound 🌸";
        btn.style.position = "fixed";
        btn.style.bottom = "20px";
        btn.style.left = "50%";
        btn.style.transform = "translateX(-50%)";
        btn.style.padding = "10px 20px";
        btn.style.borderRadius = "10px";
        btn.style.border = "none";
        btn.style.background = "#f672b0";
        btn.style.color = "white";
        btn.style.fontSize = "16px";
        btn.style.cursor = "pointer";
        document.body.appendChild(btn);
        btn.onclick = () => {
            bgMusic.play();
            btn.remove();
        };
    });
};

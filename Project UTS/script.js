// Efek bunga jatuh saat tombol diklik
const btn = document.getElementById("flowerBtn");

if (btn) {
  btn.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) createFlower();
  });
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 5000);
}

// Efek bunga jatuh otomatis
setInterval(() => {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 6000);
}, 800);

// Animasi skill bar
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-progress").forEach(bar => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value + "%";
  });
});

// Notifikasi setelah kirim pesan
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const notif = document.createElement("div");
    notif.textContent = "💌 Your message has been sent, please wait for a reply! 🌷";
    Object.assign(notif.style, {
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#f48fb1",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      zIndex: "1000",
      transition: "opacity 0.5s ease",
    });
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.style.opacity = "0";
      setTimeout(() => notif.remove(), 500);
    }, 3000);

    this.reset();
  });
}

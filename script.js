const progressBar = document.getElementById("progressBar");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const hearts = document.querySelectorAll(".heart");
const heartCount = document.getElementById("heartCount");
const lockedBox = document.getElementById("lockedBox");
const secretMessage = document.getElementById("secretMessage");
const toast = document.getElementById("toast");
const memoryCards = document.querySelectorAll(".memory-card");

let collectedHearts = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.classList.contains("collected")) return;

    heart.classList.add("collected");
    collectedHearts++;
    heartCount.textContent = collectedHearts;

    if (collectedHearts < 5) {
      showToast(`Heart collected! ${5 - collectedHearts} more to unlock the message.`);
    } else {
      showToast("Final message unlocked!");
      lockedBox.classList.add("hidden");
      secretMessage.classList.remove("hidden");
    }
  });
});

memoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const photo = card.querySelector(".memory-photo");
    photo.setAttribute("data-revealed", card.dataset.note);
    card.classList.toggle("revealed");
  });
});

musicBtn.addEventListener("click", async () => {
  try {
    if (bgMusic.paused) {
      await bgMusic.play();
      musicBtn.textContent = "Pause music";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "Play music";
    }
  } catch (error) {
    showToast("Add assets/music.mp3 first, then try again.");
  }
});

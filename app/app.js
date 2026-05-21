const output = document.getElementById("output");
const scanBtn = document.getElementById("scanBtn");

const thoughts = [
  "You hesitated before clicking.",
  "You’ve been thinking about something important.",
  "Your mind is louder than your words.",
  "You replay moments in your head often.",
  "You’re searching for clarity.",
  "You feel close to a breakthrough."
];

scanBtn.addEventListener("click", () => {
  output.textContent = "Scanning your mind…";

  setTimeout(() => {
    const pick = thoughts[Math.floor(Math.random() * thoughts.length)];
    output.textContent = pick;
  }, 1500);
});


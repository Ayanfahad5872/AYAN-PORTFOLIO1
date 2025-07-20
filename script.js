// ==============================
// Typewriter Effect
// ==============================
const typedText = document.querySelector(".typed-text");
const phrases = ["Web Developer", "Front-End Expert", "Creative Coder", "UI Designer", "Portfolio Master"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loop() {
  isEnd = false;
  typedText.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  const typingSpeed = isEnd ? 2000 : isDeleting ? 60 : 100;
  setTimeout(loop, typingSpeed);
}
loop();

// ==============================
// Particle Background
// ==============================
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00f7ff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

// ==============================
// Theme Toggle (Dark/Light)
// ==============================
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// ==============================
// Voice Greeting
// ==============================
window.onload = () => {
  const msg = new SpeechSynthesisUtterance("Welcome to the futuristic portfolio of Ayan Fahad.");
  msg.rate = 1;
  msg.pitch = 1;
  window.speechSynthesis.speak(msg);
};

// ==============================
// Contact Form using EmailJS
// ==============================
function sendMessage(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_0cxr1rw", "template_fgpvt6r", params)
    .then(() => {
      alert("Message sent successfully!");
    }, (err) => {
      alert("Failed to send message. Try again later.");
      console.error(err);
    });
}

// Hook the form
document.querySelector("form").addEventListener("submit", sendMessage);
document.querySelector('a[href="#contact"]').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
});


function updateExperienceTimer() {
  const startDate = new Date("2023-06-01"); // Set your real coding start date
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;

  const timerText = `You've been coding for ${years} years, ${months} months, and ${days} days.`;
  document.getElementById("experienceTimer").textContent = timerText;
}

updateExperienceTimer();
setInterval(updateExperienceTimer, 86400000); // update once per day



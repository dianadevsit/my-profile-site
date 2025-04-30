// Fade-in on scroll with staggered delay
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
    }
  });
});

document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});

// Quote API (with existing API key)
async function getQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { 'X-Api-Key': 'QjSqHUKYotMyzoZ7GEmJww==vJ8LnWVw8aSOscc7' }
    });
    if (!response.ok) throw new Error("Failed to fetch quote.");
    const data = await response.json();
    const quote = data[0];

    document.getElementById("quote").textContent = `"${quote.quote}"`;
    document.getElementById("author").textContent = `— ${quote.author}`;
  } catch (error) {
    document.getElementById("quote").textContent = "Something went wrong. Try again later.";
    document.getElementById("author").textContent = "";
  }
}

// Weather API
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "0cf9bb40f3e6abdea8fd77f2c65ddaf3"; // Replace with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found or invalid request");

    const data = await response.json();

    const name = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const wind = data.wind.speed;

    document.getElementById("weatherResult").innerHTML = `
      <h2>${name}, ${country}</h2>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>☁️ Condition: ${desc}</p>
      <p>💨 Wind: ${wind} m/s</p>
      <img src="${icon}" alt="${desc}">
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
  }
}



// Optional: Setup for future project card animation
function setupProjectCards() {
  // Placeholder if you plan to animate or extend project card interactivity
}
// Apply the observer to all .section elements for animation
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
  setupProjectCards();
});


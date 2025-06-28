const weatherform = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "fea5b0f59faa0ae2fda541746fcddad2";

weatherform.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (city) {
    try {
      const weatherdata = await getweatherdata(city);
      displayweatherinfo(weatherdata);
    } catch (error) {
      console.log(error);
      displayerror("Could not fetch weather data");
    }
  } else {
    displayerror("Please enter a city");
  }
});

async function getweatherdata(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiurl);
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  return await response.json();
}

function displayweatherinfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }]
  } = data;

  const tempCelsius = (temp - 273.15).toFixed(1);

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const emojiDisplay = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${tempCelsius} °C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  emojiDisplay.textContent = getweatheremoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  emojiDisplay.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(emojiDisplay);
}

function getweatheremoji(weatherid) {
  if (weatherid >= 200 && weatherid < 300) return "⛈️";
  else if (weatherid >= 300 && weatherid < 500) return "🌦️";
  else if (weatherid >= 500 && weatherid < 600) return "🌧️";
  else if (weatherid >= 600 && weatherid < 700) return "❄️";
  else if (weatherid >= 700 && weatherid < 800) return "🌫️";
  else if (weatherid === 800) return "☀️";
  else if (weatherid > 800) return "☁️";
  else return "❓";
}

function displayerror(message) {
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);
}

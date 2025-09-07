# 🌦️ React Weather App

Web application developed in **React** that allows users to check the current weather of any city in the world using the **OpenWeatherMap API**.  

The user enters the **city name** and **country**, and the app displays information such as temperature, humidity, wind speed, and a brief weather description.

---

## 🚀 Technologies Used

- ⚛️ **React.js** (class components)  
- 🎨 **Bootstrap** for quick styling  
- 🌐 **OpenWeatherMap API** as the weather data source  
- 🛠️ **Webpack + Babel** (development environment with `webpack-dev-server`)  

---

## 📸 Example Screenshot

```
[Search Form]

City: Buenos Aires  
Country: AR  
[Search]

Result:  
🌍 Location: Buenos Aires, AR  
🌡️ Temperature: 21 °C  
☁️ Description: scattered clouds  
💧 Humidity: 68 %  
🌬️ Wind Speed: 3.5 m/s
```

---

## 📂 Project Structure

```
weather-app/
│── src/
│   ├── app/
│   │   ├── App.js
│   │   ├── WeatherForm.js
│   │   ├── WeatherInfo.js
│   └── index.js
│── .env              # your API Key goes here
│── .gitignore        # prevents exposing keys and node_modules
│── package.json
│── README_EN.md
```

---

## ⚙️ Installation & Usage

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/react-weather-app.git
   cd react-weather-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up the API Key**  
   - Create a `.env` file in the root of the project and add your OpenWeatherMap API key:
     ```env
     REACT_APP_WEATHER_KEY=YOUR_API_KEY_HERE
     ```

4. **Run in development mode**  
   ```bash
   npm start
   ```
   The server will run at [http://localhost:8080](http://localhost:8080).

---

## ✅ Features

- Form to input city and country.  
- Validation: shows an error if fields are empty or if the city is not found.  
- Error handling for both API and server issues.  
- Conditional rendering: displays weather card or error messages.  

---

## 📌 Possible Future Improvements

- 🌍 Autocomplete city names with **Google Places API**.  
- 📊 Show extended forecast (5 days).  
- 🎨 Improve design with **TailwindCSS** or **Material UI**.  
- 📱 Convert into a **PWA** for quick access on mobile devices.  

---

✍️ Developed by **Germán Vaché**  
[https://github.com/germanvache](https://github.com/germanvache)  
📅 2025

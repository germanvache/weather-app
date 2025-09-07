
# 🌦️ React Weather App

Aplicación web desarrollada en **React** que permite consultar el clima actual de cualquier ciudad del mundo utilizando la API de **OpenWeatherMap**.  

El usuario ingresa el **nombre de la ciudad** y el **país**, y la aplicación muestra información como temperatura, humedad, velocidad del viento y una breve descripción del clima.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React.js** (con componentes de clase)  
- 🎨 **Bootstrap** para estilos rápidos  
- 🌐 **OpenWeatherMap API** como fuente de datos meteorológicos  
- 🛠️ **Webpack + Babel** (entorno de desarrollo con `webpack-dev-server`)  

---

## 📸 Captura de pantalla (ejemplo)

```
[Formulario de búsqueda]

Ciudad: Buenos Aires
País: AR
[Buscar]

Resultado:
🌍 Location: Buenos Aires, AR  
🌡️ Temperature: 21 °C  
☁️ Description: scattered clouds  
💧 Humidity: 68 %  
🌬️ Wind Speed: 3.5 m/s
```

---

## 📂 Estructura del proyecto

```
weather-app/
│── src/
│   ├── app/
│   │   ├── App.js
│   │   ├── WeatherForm.js
│   │   ├── WeatherInfo.js
│   └── index.js
│── .env              # aquí va tu API Key
│── .gitignore        # excluye node_modules y claves
│── package.json
│── README.md

```

---

## ⚙️ Instalación y uso

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/tuusuario/react-weather-app.git
   cd react-weather-app
   ```

2. **Instalar dependencias**  
   ```bash
   npm install
   ```

3. **Configurar la API Key**  
   - Crea un archivo `src/app/keys.js` con tu clave de OpenWeatherMap:
     ```js
     export const WEATHER_KEY = "TU_API_KEY_AQUI";
     ```

4. **Ejecutar en modo desarrollo**  
   ```bash
   npm start
   ```
   El servidor se abrirá en [http://localhost:8080](http://localhost:8080).

---

## ✅ Funcionalidades

- Formulario para ingresar ciudad y país.  
- Validación: muestra error si no se ingresan datos o si la ciudad no existe.  
- Manejo de errores de la API y del servidor.  
- Renderizado condicional: muestra tarjeta con datos del clima o mensajes de error.  

---

## 📌 Posibles mejoras futuras

- 🌍 Autocompletado de ciudades con **Google Places API**.  
- 📊 Mostrar pronóstico extendido (5 días).  
- 🎨 Mejorar diseño con **TailwindCSS** o **Material UI**.  
- 📱 Adaptar a **PWA** para consulta rápida desde el celular.  

---

✍️ Desarrollado por **Germán Vaché** 
 [https://github.com/germanvache](https://github.com/germanvache) 
📅 2025  

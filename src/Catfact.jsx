import { useState, useEffect } from "react";

function Catfact() {
  const [product, setProduct] = useState(null);
  const [coords, setCoords] = useState({ latitude: 10.8505, longitude: 76.2711 }); // Kerala center

  const GetData = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude });
          GetData(latitude, longitude);
        },
        () => {
          GetData(coords.latitude, coords.longitude); // fallback
        }
      );
    } else {
      GetData(coords.latitude, coords.longitude);
    }
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1>Weather Information</h1>
        </div>
        <MenuCard
          latitude={product.latitude}
          longitude={product.longitude}
          generationtime_ms={product.generationtime_ms}
          utc_offset_seconds={product.utc_offset_seconds}
          timezone={product.timezone}
          timezone_abbreviation={product.timezone_abbreviation}
          elevation={product.elevation}
          temperature={product.current_weather?.temperature}
          wind_speed={product.current_weather?.windspeed}
          hourly={product.hourly}
        />
      </div>
    </div>
  );
}

function MenuCard({
  latitude,
  longitude,
  generationtime_ms,
  utc_offset_seconds,
  timezone,
  timezone_abbreviation,
  elevation,
  temperature,
  wind_speed,
  hourly,
}) {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Current Weather</h2>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Generation Time (ms): {generationtime_ms}</p>
      <p>UTC Offset (s): {utc_offset_seconds}</p>
      <p>Timezone: {timezone}</p>
      <p>Timezone Abbreviation: {timezone_abbreviation}</p>
      <p>Elevation: {elevation} m</p>
      <p>Temperature: {temperature} °C</p>
      <p>Wind Speed: {wind_speed} km/h</p>

      <h3 style={{ marginTop: "20px" }}>Hourly Forecast</h3>
      <ul style={{ maxHeight: "200px", overflowY: "scroll", paddingLeft: "20px" }}>
        {hourly?.time.map((time, index) => (
          <li key={time}>
            {time}: {hourly.temperature_2m[index]} °C, Humidity: {hourly.relative_humidity_2m[index]}%, Wind:{" "}
            {hourly.wind_speed_10m[index]} km/h
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catfact;

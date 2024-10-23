import { useState, } from "react";
import Variable from "../Variable/Variabla";
import "./Temperatures.css";

function Temperatures() {
  const [celsius, setCelsius] = useState(25);
  const [fahrenheit, setFahrenheit] = useState(77);
  const [kelvin, setKelvin] = useState(298.15);

  const calculateTemperatures = (value, type) => {
    if (type === "celsius") {
      setFahrenheit((value * 9) / 5 + 32);
      setKelvin(value + 273.15);
    } else if (type === "fahrenheit") {
      const newCelsius = ((value - 32) * 5) / 9;
      setCelsius(newCelsius);
      setKelvin(newCelsius + 273.15);
    } else if (type === "kelvin") {
      const newCelsius = value - 273.15;
      setCelsius(newCelsius);
      setFahrenheit((newCelsius * 9) / 5 + 32);
    }
  };

  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">Temperatures</h3>
      <h3 className="temperatures-variablesnumbers">
        <span className="badge bg-primary">{celsius.toFixed(2)} °C</span>
        <span className="badge bg-primary">{fahrenheit.toFixed(2)} °F</span>
        <span className="badge bg-primary">{kelvin.toFixed(2)} K</span>
      </h3>
      <div className="temperatures-variables">
        <Variable
          name={"Celsius"}
          value={celsius}
          setValue={(value) => {
            setCelsius(value);
            calculateTemperatures(value, "celsius");
          }}
        />
        <Variable
          name={"Fahrenheit"}
          value={fahrenheit}
          setValue={(value) => {
            setFahrenheit(value);
            calculateTemperatures(value, "fahrenheit");
          }}
        />
        <Variable
          name={"Kelvin"}
          value={kelvin}
          setValue={(value) => {
            setKelvin(value);
            calculateTemperatures(value, "kelvin");
          }}
        />
      </div>
    </div>
  );
}

export default Temperatures;

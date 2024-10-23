import React, { useState, useEffect } from "react";

import "./Animation.css";

const fieldWidth = 700;
const fieldHeight = 500;
const diameter = 100;
const minSpinSpeed = 1;
const maxSpinSpeed = 10;
const positiveMinSpin = minSpinSpeed * -1;
const positiveMaxSpin = maxSpinSpeed * -1;
const vx = 5;
const vy = 5;

const Animation = () => {
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [angle, setAngle] = useState(0);
  const [angleSpeed, setAngleSpeed] = useState(10);
  const [ballType, setBallType] = useState("none");

  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;

  const toggleRunning = () => {
    setRunning(!running);
  };

  const calculate = () => {
    setX((prevX) => {
      if (goRight) {
        if (prevX + vx >= maxLeft) {
          setGoRight(false);
          return maxLeft;
        }
        return prevX + vx;
      } else {
        if (prevX - vx <= 0) {
          setGoRight(true);
          return 0;
        }
        return prevX - vx;
      }
    });

    setY((prevY) => {
      if (goDown) {
        if (prevY + vy >= maxTop) {
          setGoDown(false);
          return maxTop;
        }
        return prevY + vy;
      } else {
        if (prevY - vy <= 0) {
          setGoDown(true);
          return 0;
        }
        return prevY - vy;
      }
    });

    setAngle((prevAngle) => prevAngle + angleSpeed);
    handleBounce();
  };

  const handleBounce = () => {
    if (x >= maxLeft || x <= 0 || y >= maxTop || y <= 0) {
      const newAngleSpeed = Math.random() * (maxSpinSpeed - minSpinSpeed + 1) + minSpinSpeed;
      setAngleSpeed((prevSpeed) => (prevSpeed > 0 ? newAngleSpeed : newAngleSpeed * -1));
      setAngleSpeed((prevSpeed) => prevSpeed * -1);
    }
  };

  const getBallStyle = () => {
    const baseStyle = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      transform: `rotate(${angle}deg)`,
      backgroundSize: "cover",
    };

    switch (ballType) {
      case "basketball":
        return {
          ...baseStyle,
          backgroundImage: "url('./public/imgAnimation/basketball.png')",
        };
      case "football":
        return {
          ...baseStyle,
          backgroundImage: "url('./public/imgAnimation/football.webp')",
        };
      case "volleyball":
        return {
          ...baseStyle,
          backgroundImage: "url('./public/imgAnimation/volleyball.png')",
          backgroundSize: "165%",
        };
      case "human":
        return {
          ...baseStyle,
          backgroundImage: "url('./public/imgAnimation/myboss.png')",
        };
      case "cartoon":
        return {
          ...baseStyle,
          backgroundImage: "url('./public/imgAnimation/cartoon.png')",
        };
      case "logo":
        return {
          ...baseStyle,
          backgroundImage: "url('./public/imgAnimation/logo.png')",
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: "brown",
        };
    }
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        calculate();
      }, 25);
      return () => clearInterval(interval);
    }
  }, [running, goRight, goDown]);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "0") {
  //       setBallType("none");
  //     } else if (event.key === "1") {
  //       setBallType("basketball");
  //     } else if (event.key === "2") {
  //       setBallType("football");
  //     } else if (event.key === "3") {
  //       setBallType("volleyball");
  //     } else if (event.key === "4") {
  //       setBallType("human");
  //     } else if (event.key === "5") {
  //       setBallType("cartoon");
  //     } else if (event.key === "6") {
  //       setBallType("logo");
  //     } else if (event.code === "Space") {
  //       toggleRunning();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);


  return (
    <div id="Animation-container">
      <div id="Animation-field" style={{ width: fieldWidth, height: fieldHeight, position: "relative" }}>
        <div id="Animation-ball" style={getBallStyle()}></div>
      </div>
      <div id="Animation-control">
        <button onClick={toggleRunning} className={`btn ${running ? "btn-warning" : "btn-success"}`}>
          {running ? <span className="bi bi-pause">PAUSE</span> : <span className="bi bi-play">&nbsp;RUN</span>}
        </button>
        <button onClick={() => setBallType("none")} className="btn btn-primary">
          None
        </button>
        <button onClick={() => setBallType("basketball")} className="btn btn-primary">
          Basketball
        </button>
        <button onClick={() => setBallType("football")} className="btn btn-primary">
          Football
        </button>
        <button onClick={() => setBallType("volleyball")} className="btn btn-primary">
          Volleyball
        </button>
        <button onClick={() => setBallType("human")} className="btn btn-primary">
          Human
        </button>
        <button onClick={() => setBallType("cartoon")} className="btn btn-primary">
          Cartoon
        </button>
        <button onClick={() => setBallType("logo")} className="btn btn-primary">
          Logo
        </button>
      </div>
    </div>
  );
}

export default Animation;

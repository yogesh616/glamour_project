import React, { useReducer } from "react";
import './beforeafter.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { rangeValue: action.payload };
    case "move":
      return { rangeValue: Math.round(action.payload) };
    default:
      return state;
  }
};

const BeforeAfter = ({
  beforeImage,
  afterImage,
  pointerMove = false,
  className = "before-after-slider",
  style,
}) => {
  const [{ rangeValue }, dispatch] = useReducer(reducer, { rangeValue: 50 });

  const handleChange = (e) => {
    dispatch({ type: "change", payload: Number(e.target.value) });
  };

  const handlePointerMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const positionX = clientX - left;

    if (positionX >= 0 && positionX <= width) {
      dispatch({ type: "move", payload: (positionX / width) * 100 });
    }
  };

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      onPointerMove={pointerMove ? handlePointerMove : undefined}
    >
      {/* Before Image */}
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          width: `${rangeValue}%`,
          height: "100%",
          top: 0,
          left: 0,
          borderRight: "2px solid rgba(255, 255, 255, 0.8)",
        }}
      >
        <img
          src={beforeImage}
          alt="Before"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.3s ease",
          }}
        />
      </div>

      {/* After Image */}
      <img
        src={afterImage}
        alt="After"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={rangeValue}
        onChange={handleChange}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          width: "100%",
          transform: "translateY(-50%)",
          appearance: "none",
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${rangeValue}%`,
          transform: "translate(-50%, -50%)",
          width: "30px",
          height: "30px",
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left-right"
          style={{ width: "16px", height: "16px" }}
        >
          <line x1="17" y1="12" x2="7" y2="12" />
          <polyline points="11 8 7 12 11 16" />
          <polyline points="13 16 17 12 13 8" />
        </svg>
      </div>
    </div>
  );
};

export default BeforeAfter;

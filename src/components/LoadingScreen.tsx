import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import { BRAND_INFO } from "../constants";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show loading text for 2.5 seconds, then fade out
    const timer = setTimeout(() => {
      setFading(true);
      // Wait for fade out animation to finish before unmounting
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fading ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1 className="brand-name tracking-in-expand">
          {BRAND_INFO.name.toUpperCase()}
        </h1>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

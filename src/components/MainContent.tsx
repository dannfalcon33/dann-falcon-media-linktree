import React, { useEffect, useState } from "react";
import "./MainContent.css";
import profileImg from "../assets/profile.png";
import { BRAND_INFO, SOCIAL_LINKS } from "../constants";

const MainContent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger fade-in after mounting
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`main-content ${visible ? "visible" : ""}`}>
      <header className="profile-section">
        <div className="profile-image-container">
          <img
            src={profileImg}
            alt={BRAND_INFO.name}
            className="profile-image"
          />
        </div>
        <h1 className="brand-title">{BRAND_INFO.name}</h1>
        <h2>{BRAND_INFO.handle}</h2>
      </header>

      <nav className="links-container">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.target}
            rel={link.rel}
            className={link.className}
          >
            <i className={link.iconClass}></i>
            <span className="btn-text">{link.label}</span>
          </a>
        ))}
      </nav>

      <footer className="footer delay-5">
        <p>{BRAND_INFO.footerText}</p>
      </footer>
    </div>
  );
};

export default MainContent;

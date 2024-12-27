import React, { useState } from "react";
import "./ConnectWithMe.css";

const ConnectWithMe = () => {
    const [showIcons, setShowIcons] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // Tracks animation state

    const handleButtonClick = () => {
        if (showIcons) {
            setIsAnimating(true); // Trigger fade-out animation
            setTimeout(() => {
                setShowIcons(false); // Hide icons after animation
                setIsAnimating(false); // Reset animation state
            }, 500); // Match animation duration
        } else {
            setShowIcons(true); // Show icons
        }
    };

    return (
        <div className="connect-container">
            {!showIcons && !isAnimating && (
                <button
                    className="connect-button"
                    onClick={handleButtonClick}
                    style={{ animation: "fadeInButton 0.5s ease-in-out forwards" }} // Fade-in animation
                >
                    Connect with Me
                </button>
            )}
            {showIcons && (
                <div className="social-icons">
                    <a
                        href="https://github.com/rbouhal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isAnimating ? "fade-out" : ""}
                    >
                        <img src="images/github-mobile.png" alt="GitHub" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rayanbouhal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isAnimating ? "fade-out" : ""}
                    >
                        <img src="images/linkedin-mobile.png" alt="LinkedIn" />
                    </a>
                    <button
                        className={`close-button ${isAnimating ? "fade-out" : ""}`}
                        onClick={handleButtonClick}
                        aria-label="Close"
                    >
                        <img src="images/close-mobile.png" alt="Close" />
                    </button>
                    <a
                        href="mailto:rayanb@vt.edu"
                        className={isAnimating ? "fade-out" : ""}
                    >
                        <img src="images/email-mobile.png" alt="Email" />
                    </a>
                    <a
                        href="https://www.instagram.com/rayan_bouhal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isAnimating ? "fade-out" : ""}
                    >
                        <img src="images/instagram-mobile.png" alt="Instagram" />
                    </a>
                </div>
            )}
        </div>
    );
};

export default ConnectWithMe;

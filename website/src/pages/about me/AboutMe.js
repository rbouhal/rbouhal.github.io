import "./AboutMe.css";
import { useState, useEffect } from "react";

function AboutMe() {
    const badges = [
        "images/badge-duck.png",
        "images/badge-soccer.png",
        "images/badge-vt.png",
    ];

    const [currentBadge, setCurrentBadge] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBadge((prev) => (prev + 1) % badges.length);
        }, 5000); // Change badge every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [badges.length]);

    return (
        <div className="about-page">
            <div className="hero-banner">
                <img
                    src="images/circuitai.png"
                    alt="Circuit Background"
                    className="circuit-image"
                />

                <div className="profile-pic-section">
                    <img
                        src="images/pfp.png"
                        alt="Rayan Bouhal"
                        className="profile-image"
                    />
                    <img
                        src={badges[currentBadge]}
                        alt="Dynamic Badge"
                        className="badge"
                    />
                </div>
            </div>

            <div className="titles">
                <div>
                    <h1>Hello, my name is Rayan Bouhal</h1>
                    <h2>Software Engineer</h2>
                    <h3
                        style={{ width: "1000px" }}
                    >
                        I am a graduate student at Virginia Tech pursuing a Computer Science masters degree.
                        My passion lies in software development, and I aim to improve my problem-solving, software engineering,
                        and system design skills through practical programming experiences.
                    </h3>
                    <a href="BouhalRayan_Resume2025.pdf"  target="_blank" rel="noopener noreferrer">
                    <div class="button-container-3">
                        <span class="mas">Download Resume</span>
                        <button type="button" name="Hover">Download Resume</button>
                    </div>
                    </a>

                </div>
                <div className="social-box">
                    <a href="https://github.com/rbouhal" target="_blank" rel="noopener noreferrer">
                        <img src="images/github.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/rayanbouhal/" target="_blank" rel="noopener noreferrer">
                        <img src="images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="mailto:rayanb@vt.edu?subject=Inquiry about Software Engineering Collaboration&body=Dear Rayan,%0D%0A%0D%0AI hope this email finds you well. I am reaching out to discuss potential opportunities or collaborations related to your expertise in software engineering. Please let me know a convenient time to connect.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]">
                        <img src="images/email.png" alt="Email" />
                    </a>
                    <a href="https://www.instagram.com/rayan_bouhal/" target="_blank" rel="noopener noreferrer">
                        <img src="images/insta.png" alt="Instagram" />
                    </a>
                </div>

            </div>




        </div>
    );
}

export default AboutMe;

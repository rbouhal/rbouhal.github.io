import "./HeroImage.css";
import { useState, useEffect } from "react";

function HeroImage() {
    const badges = [
        "images/badge-duck.png",
        "images/badge-soccer.png",
        "images/badge-vt.png",
    ];

    const [currentBadge, setCurrentBadge] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        console.log("isMobile:", isMobile);
        const interval = setInterval(() => {
            setCurrentBadge((prev) => (prev + 1) % badges.length);
        }, 5000); // Change badge every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [badges.length]);

    return (
        <div className="hero-image">
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
    );
}
export default HeroImage;
import "./header.css";
import { useState } from "react";

function WebHeader() {
    const [activeNav, setActiveNav] = useState("#about");

    return (
        <div>
            <header className="header-container">
                <h1 className="header-title">Rayan <span>Bouhal</span></h1>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a 
                                href="#about" 
                                className={`nav-link ${activeNav === "#about" ? "active" : ""}`}
                                onClick={() => setActiveNav("#about")}
                            >
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#projects" 
                                className={`nav-link ${activeNav === "#projects" ? "active" : ""}`}
                                onClick={() => setActiveNav("#projects")}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#experience" 
                                className={`nav-link ${activeNav === "#experience" ? "active" : ""}`}
                                onClick={() => setActiveNav("#experience")}
                            >
                                Experience
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default WebHeader;
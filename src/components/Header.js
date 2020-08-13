import React, { useState } from 'react';

const Header = _ => {
    const [activeHamb, setActiveHamb] = useState(false);
    const handleNavToggle = _ => setActiveHamb(!activeHamb);
    return (
        <header className="header">
            <div className="container">
                <div className="fx ac jb">
                    <a href="/" className="header_logo">
                        <svg width="60" height="60" viewBox="0 0 100 100">
                            <use xlinkHref="/svg/ml.svg#ml" />
                        </svg>
                    </a>

                    <button className={`header_hamb ${ activeHamb ? 'active' : '' }`} onClick={handleNavToggle}>
                        <svg className="hamb" width="60" height="60" viewBox="0 0 100 100">
                            <path className="hamb_poly" d="M 50 0 L 94 25 V 75 L 50 100 L 6 75 V 25 Z" />
                            <polyline className="hamb_line hamb_top" points="60,27 25,47 15,53 15,70 50,90 75,76 34,34" fill="none" />
                            <line className="hamb_line hamb_mid" x1="32" y1="60" x2="68" y2="40" fill="none" />
                            <polyline className="hamb_line hamb_bot" points="40,73 75,53 85,47 85,30 50,10 15,30 15,70 24,75 64,36" fill="none" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;
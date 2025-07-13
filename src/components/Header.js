// src/components/Header.js
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => handleNavigation("/")}>
        TRIP & DRIP
      </div>

      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <div className="nav-link" onClick={() => handleNavigation("/")}>
          Home
        </div>
        <div className="nav-link" onClick={() => handleNavigation("/destination")}>
          Destination
        </div>
        <div className="nav-link" onClick={() => handleNavigation("/fashion")}>
          Fashion
        </div>
      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 10;
          background : transparent;
        }

        .logo {
          font-size: 1.9rem;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          font-family: "Comic Sans MS";
        }

        .nav-items {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          position: relative;
        }

        .nav-link:hover {
          color: #f0b4b4;
        }

        .hamburger {
          display: none;
          width: 30px;
          height: 30px;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .line {
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open .top {
          transform: rotate(45deg) translateY(10px);
        }

        .hamburger.open .middle {
          opacity: 0;
        }

        .hamburger.open .bottom {
          transform: rotate(-45deg) translateY(-10px);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-items {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 1.5rem;
            transform: translateY(-100%);
            transition: all 0.3s ease;
            opacity: 0;
            pointer-events: none;
            border-radius: 12px;
          }

          .nav-items.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav-link {
            font-size: 1.1rem;
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;

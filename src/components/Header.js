// src/components/Header.js
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
        <Image src="/icon.jpeg" alt="Logo" width={35} height={35} />
        <span>TRIP & DRIP</span>
      </div>

      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <div className="nav-link" onClick={() => handleNavigation("/")}>
          Home
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavigation("/destination")}
        >
          Destination
        </div>
        <div className="nav-link" onClick={() => handleNavigation("/fashion")}>
          Fashion
        </div>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 1.9rem;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          font-family: "Comic Sans MS";
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }

        .nav-items {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          font-size: 1.2rem;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          position: relative;
        }

        .nav-link:hover {
          transform: translateY(-2px) scale(1.1);
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
          transform: rotate(45deg) translateY(18px);
        }

        .hamburger.open .middle {
          opacity: 0;
        }

        .hamburger.open .bottom {
          transform: rotate(-45deg) translateY(-18px);
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
            background: rgba(0, 0, 0, 0.3);
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 1.5rem 1rem;
            transform: translateY(-100%);
            transition: all 0.3s ease;
            opacity: 0;
            pointer-events: none;
            backdrop-filter: blur(6px);
          }

          .nav-items.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav-link {
            font-size: 1.2rem;
            color: white;
          }

          .logo {
            font-size: 1.5rem;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;

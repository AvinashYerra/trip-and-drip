import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo" onClick={() => handleNavigation("/")}>
          Trip & Drip
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
          <div
            className="nav-link"
            onClick={() => handleNavigation("/fashion")}
          >
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
      </div>

      <style jsx>{`
        .header {
          background:rgb(200, 229, 244);
          height: 72px;
          padding: 0 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .navbar {
          max-width: 1500px;
          margin: auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          font-size: 1.9rem;
          font-weight: 700;
          color: #3A4093;
          letter-spacing: -0.5px;
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
          color: #555;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #000;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #f0b4b4;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          width: 30px;
          height: 30px;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          z-index: 1100;
        }

        .line {
          height: 3px;
          background: #3A4093;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: #fff;
            padding: 20px;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            border-radius: 25px;
          }

          .nav-items.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav-link {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

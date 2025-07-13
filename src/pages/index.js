import { useRouter } from "next/router";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background"></div>

          {/* ✅ Header stays at top */}
          <div className="hero-header-wrapper">
            <Header />
          </div>

          {/* ✅ Centered content */}
          <div className="hero-content">
            <h1>Explore Smarter. </h1>
             <h1>Dress Smarter.</h1> 
            <p>Plan your trips with AI and get personalized fashion suggestions.</p>
            <button>How to Use</button>
          </div>
        </section>

        {/* Trip Planner Section */}
        <section id="trip-planner" className="section trip-planner">
        <div className="background-grid">
          <div className="grid-image"><img src="/images/trip1.jpg" alt="Trip 1" /></div>
          <div className="grid-image"><img src="/images/trip2.jpg" alt="Trip 2" /></div>
          <div className="grid-image"><img src="/images/trip3.jpg" alt="Trip 3" /></div>
          <div className="grid-image"><img src="/images/trip4.jpg" alt="Trip 4" /></div>
        </div>

        {/* Foreground Text */}
        <div className="text-overlay">
          <h2>Know Your Next Destination</h2>
          <p>
            Get suggestions for your next destination based on your interests.
          </p>
          <button>Get Started</button>
        </div>
        </section>

        {/* Fashion Assistant Section */}
        <section id="fashion-assistant" className="fashion-assistant">
        {/* Background Image */}
        <div className="background-image"></div>

        {/* Text Content Overlay */}
        <div className="fashion-text">
          <h2>Get Ready in Style</h2>
          <p>
            Get suggestions for your next Outfit based on your interests.
          </p>
          <button>Get Started</button>
        </div>
        </section>
      </div>

    <section className="how-to-use-section" id="how-to-use">
      <h2>How Trip & Drip Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Choose Your Interests</h3>
          <p>Select any two favorites — like your top movies, artists, books, albums, or more.</p>
        </div>
        <div className="step">
          <h3>2. Discover Your Destination</h3>
          <p>We suggest unique travel destinations that align with your vibe and preferences.</p>
        </div>
        <div className="step">
          <h3>3. Find Your Fashion</h3>
          <p>Get curated brand and fashion suggestions to stay stylish wherever you go.</p>
        </div>
      </div>
      </section>
      {/* Styled JSX */}
      <style jsx>{`
        .section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          text-align: center;
        }

        .hero {
          background: #f5f5f5;
        }

        h1, h2 {
          margin-bottom: 1rem;
        }

        p {
          max-width: 600px;
          font-size: 1.2rem;
          line-height: 1.6;
        }
        .trip-planner {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .background-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          z-index: 0;
        }

        .grid-image {
          width: 50%;
          height: 50%;
          overflow: hidden;
        }

        .grid-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(65%);
        }

        .text-overlay {
          position: relative;
          z-index: 1;
          max-width: 700px;
          padding: 2rem;
          border-radius: 12px;
        }

        .text-overlay h2 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
        }

        .text-overlay p {
          font-size: 1.2rem;
          line-height: 1.6;
        }
      .text-overlay button {
        margin-top:10px;
        padding: 0.75rem 1.5rem;
        font-size: 1.2rem;
        color: white;
        border-radius: 6px;
        border-color:white;
        background : transparent;
        cursor: pointer;
      }

        .fashion-assistant {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/fashion.jpg');
          background-size: cover;
          background-position: center;
          filter: grayscale(100%) brightness(100%);
          z-index: 0;
        }

        .fashion-text {
          position: relative;
          z-index: 1;
          max-width: 600px;
          padding: 3rem;
          color: white;
          margin-left: 5%;
        }

        .fashion-text h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .fashion-text p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .fashion-text button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          background-color: #fff;
          color: #000;
          border-color: black ;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .fashion-text button:hover {
          background-color: #ddd;
        }
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          color: white;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/hero.jpg');
          background-size: cover;
          background-position: center;
          filter: brightness(60%);
          z-index: 0;
        }

        .hero-header-wrapper {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          text-align: center;
          padding: 2rem;
          max-width: 800px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
        }

        .hero-content button {
          padding: 0.8rem 1.6rem;
          font-size: 1rem;
          background-color: #fff;
          color: #000;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .hero-content button:hover {
          background-color: #ddd;
        }



        .how-to-use-section {
          padding: 5rem 2rem;
          background-color: #383738;
          text-align: center;
        }

        .how-to-use-section h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: white;
        }

        .steps {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: stretch;
        }

        .step {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          justify-content: space-between;
          flex: 1;
          text-align: left;
        }

        .step h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 0.75rem;
        }

        .step p {
          font-size: 1rem;
          color: #555;
        }

      `}</style>
    </>
  );
}

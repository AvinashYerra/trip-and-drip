import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goToDestination = () => router.push("/destination");
  const goToFashion = () => router.push("/fashion");

  const scrollToHowToUse = () => {
    document
      .getElementById("how-to-use")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background"></div>
          <div
            className="hero-content"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h1>Explore Smarter.</h1>
            <h1>Dress Smarter.</h1>
            <p>
              Plan your trips with AI and get personalized fashion suggestions.
            </p>
            <button onClick={scrollToHowToUse}>How to Use</button>
          </div>
        </section>

        {/* Trip Planner Section */}
        <section id="trip-planner" className="trip-planner">
          <div className="background-grid">
            <div className="grid-image">
              <img src="/images/trip1.jpg" alt="Trip 1" />
            </div>
            <div className="grid-image">
              <img src="/images/trip2.jpg" alt="Trip 2" />
            </div>
            <div className="grid-image">
              <img src="/images/trip3.jpg" alt="Trip 3" />
            </div>
            <div className="grid-image">
              <img src="/images/trip4.jpg" alt="Trip 4" />
            </div>
          </div>

          <div className="text-overlay" data-aos="fade-up">
            <h2>Know Your Next Destination</h2>
            <p>
              Get suggestions for your next destination based on your interests.
            </p>
            <button onClick={goToDestination}>Get Started</button>
          </div>
        </section>

        {/* Fashion Assistant Section */}
        <section id="fashion-assistant" className="fashion-assistant">
          <div className="background-image"></div>
          <div className="fashion-text" data-aos="fade-right">
            <h2>Get Ready in Style</h2>
            <p>Get suggestions for your next Outfit based on your interests.</p>
            <button onClick={goToFashion}>Get Started</button>
          </div>
        </section>
      </div>

      {/* How-to-Use Section */}
      <section className="how-to-use-section" id="how-to-use">
        <h2>How Trip & Drip Works</h2>
        <div className="steps-timeline">
          <div
            className="timeline-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="step-badge">1</div>
            <div className="step-content">
              <h3>Choose Your Interests</h3>
              <p>
                Select any two favorites — like your top movies, artists, books,
                albums, or more.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="step-badge">2</div>
            <div className="step-content">
              <h3>Discover Your Destination</h3>
              <p>
                We suggest unique travel destinations that align with your vibe
                and preferences.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="step-badge">3</div>
            <div className="step-content">
              <h3>Find Your Fashion</h3>
              <p>
                Get curated brand and fashion suggestions to stay stylish
                wherever you go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Styled JSX */}
      <style jsx>{`
        .hero-section {
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

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/images/hero.jpg");
          background-size: cover;
          background-position: center;
          filter: brightness(60%);
          z-index: 0;
        }

        .hero-content {
          z-index: 1;
          text-align: center;
          padding: 2rem;
          width: 90%;
          max-width: 600px;
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
          background-color: #ccc;
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
          filter: brightness(60%);
        }

        .text-overlay {
          position: relative;
          z-index: 1;
          padding: 2rem;
        }

        .text-overlay h2 {
          font-size: 2.8rem;
        }

        .text-overlay p {
          font-size: 1.2rem;
          line-height: 1.2;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }

        .text-overlay button {
          margin-top: 10px;
          padding: 0.75rem 1.5rem;
          font-size: 1.2rem;
          color: white;
          border-radius: 6px;
          border-color: white;
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .text-overlay button:hover {
          background-color: rgba(255, 255, 255, 0.1);
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
          background-image: url("/images/fashion.jpg");
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
          border-color: black;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .fashion-text button:hover {
          background-color: #ccc;
        }

        .how-to-use-section {
          position: relative;
          min-height: calc(100vh - 108px);
          padding: 5rem 2rem;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .how-to-use-section h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: white;
          text-align: center;
        }

        .steps-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          max-width: 600px;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          position: relative;
          color: #333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .step-badge {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(
            135deg,
            rgb(175, 211, 244),
            rgb(48, 97, 139)
          );
          border-radius: 50%;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1.5rem;
          box-shadow: 0 0 10px rgba(77, 195, 255, 0.5);
        }

        .step-content h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: #222;
        }

        .step-content p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .hero-content {
            position: absolute;
            top: 45%;
            left: 50%;
          }

          .fashion-text {
            position: absolute;
            top: 35%;
            left: 10%;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .hero-content h1,
          .fashion-text h2,
          .text-overlay h2,
          .how-to-use-section h2 {
            font-size: 2rem;
          }

          .hero-content p,
          .fashion-text p,
          .text-overlay p {
            font-size: 1rem;
          }

          .hero-content button,
          .fashion-text button,
          .text-overlay button {
            font-size: 1rem;
          }

          .timeline-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .step-badge {
            margin-right: 0;
            margin-bottom: 1rem;
          }

          .step-content h3 {
            font-size: 1.2rem;
          }

          .step-content p {
            font-size: 0.95rem;
          }
        }

        .background-grid {
          flex-direction: column;
        }

        .grid-image {
          width: 50%;
          height: 50%;
        }

        .background-image {
          background-position: right;
        }

        .fashion-text {
          margin-left: 0;
          padding: 2rem 1rem;
          text-align: center;
        }

        .steps-timeline {
          gap: 1.5rem;
        }

        .timeline-item {
          padding: 1.2rem 1.5rem;
        }
      `}</style>
    </>
  );
}

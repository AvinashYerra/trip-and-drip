import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="hero">
      <section className="intro" data-aos="fade-up">
        <h1 className="headline">Explore the World in Style</h1>
        <p className="subtext">
          Trip & Drip helps you discover destinations and the perfect outfits to
          match your vibe. From cultural tastes to curated fashion, we blend
          travel and drip — just for you.
        </p>
        <div className="button-group">
          <div
            className="btn primary"
            onClick={() => handleNavigate("/destination")}
          >
            Plan a Trip
          </div>
          <div
            className="btn outline"
            onClick={() => handleNavigate("/fashion")}
          >
            Style Me
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card" data-aos="fade-right">
          <h3>🎒 Personalized Travel</h3>
          <p>
            Recommendations based on what you love — music, food, art, and more.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-left">
          <h3>🧥 Curated Fashion</h3>
          <p>
            Look great wherever you go with culturally-aligned outfit
            suggestions.
          </p>
        </div>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: calc(100vh - 72px - 90px);
          background: #d7ebf6;
          padding: 80px 20px;
          text-align: center;
        }

        .headline {
          font-size: 3rem;
          font-weight: 700;
          color: #6c6fcd;
          margin-bottom: 20px;
          font-family: "Comic Sans MS";
        }

        .subtext {
          max-width: 720px;
          margin: 0 auto 30px;
          font-size: 1.15rem;
          color: #555;
          line-height: 1.6;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .btn {
          cursor: pointer;
          padding: 12px 26px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          transition: 0.3s ease;
          user-select: none;
        }

        .btn.primary {
          background: #6c6fcd;
          color: white;
        }

        .btn.primary:hover {
          background: rgb(73, 75, 143);
        }

        .btn.outline {
          background: transparent;
          border: 2px solid #6c6fcd;
          color: #6c6fcd;
        }

        .btn.outline:hover {
          background: #6c6fcd;
          color: white;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 100px auto 0;
          padding: 0 20px;
        }

        .feature-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .feature-card h3 {
          font-size: 1.5rem;
          color: #222;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 2.3rem;
          }

          .subtext {
            font-size: 1rem;
          }

          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="container">
      {/* Section 1: Hero Landing Page */}
      <section className="section hero" data-aos="fade-up">
        <h1 className="headline">Explore the World in Style</h1>
        <p className="subtext">
          Trip & Drip helps you discover destinations and the perfect outfits to match your vibe.
        </p>
        <div className="button-group">
          <div className="btn primary" onClick={() => handleNavigate("/destination")}>
            Plan a Trip
          </div>
          <div className="btn outline" onClick={() => handleNavigate("/fashion")}>
            Style Me
          </div>
        </div>
      </section>

      {/* Section 2: Destination Planner */}
      <section className="section planner" data-aos="fade-up">
        <h2 className="section-title">🎒 Personalized Destination Planner</h2>
        <p className="section-desc">
          Discover different travel destinations based on your favourite movie, artist and many more..
          Choose 
        </p>
      </section>

      {/* Section 3: Fashion Assistant */}
      <section className="section fashion" data-aos="fade-up">
        <h2 className="section-title">🧥 Your Fashion Travel Assistant</h2>
        <p className="section-desc">
          We curate looks that match your travel mood and cultural context — so you always look on point.
        </p>
      </section>

    <section className="section contact" data-aos="fade-up">
      <h2 className="section-title">📬 Contact Us</h2>
      <p className="section-desc">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>




      <style jsx>{`
        .container {
          width: 100%;
        }

        .section {
          min-height: calc(100vh - 72px - 90px); /* Adjust for header/footer */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          text-align: center;
        }

        .hero {
          background: #d7ebf6;
        }

        .planner {
          background: #ffffff;
        }

        .fashion {
          background: #f5f0fa;
        }

        .headline {
          font-size: 3.2rem;
          color: #6c6fcd;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .subtext {
          font-size: 1.2rem;
          max-width: 700px;
          color: #444;
          margin-bottom: 30px;
        }

        .button-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          cursor: pointer;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          transition: 0.3s ease;
        }

        .btn.primary {
          background: #6c6fcd;
          color: white;
        }

        .btn.primary:hover {
          background: #5557a5;
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

        .section-title {
          font-size: 2.5rem;
          color: #6c6fcd;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .section-desc {
          font-size: 1.15rem;
          color: #555;
          max-width: 700px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 2.2rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .subtext,
          .section-desc {
            font-size: 1rem;
          }

          .btn {
            width: 100%;
            text-align: center;
          }

          .contact {
            background: #eef3f9;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            max-width: 600px;
            margin-top: 30px;
          }

          .contact-form input,
          .contact-form textarea {
            padding: 12px 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            font-family: inherit;
            resize: vertical;
          }

          .contact-form textarea {
            resize: vertical;
          }

          .contact-form button {
            padding: 12px;
            background: #6c6fcd;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .contact-form button:hover {
            background: #5557a5;
          }




        }
      `}</style>
    </div>
  );
}

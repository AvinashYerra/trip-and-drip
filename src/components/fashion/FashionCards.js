import Image from "next/image";
import React from "react";

const FashionCards = ({ styles }) => {
  return (
    <div className="background">
      <div className="card-grid">
        {styles.map((style, index) => {
          const { brand, fashionStyle, name, inspiration, properties } = style;
          const { image, short_description, external } = properties || {};
          const socials = external || {};

          return (
            <div key={index} className="glass-card">
              <div className="image-wrapper">
                <Image
                  src={image?.url || "/images/fashion_fallback.jpg"}
                  alt={`${brand} logo`}
                  className="brand-image"
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-content">
                <h2 className="brand-name">{name || brand}</h2>
                <p className="fashion-style">Fashion: {fashionStyle}</p>
                <p className="short-description">
                  {short_description || inspiration}
                </p>
              </div>
              <div className="social-links">
                {socials?.facebook?.id && (
                  <a
                    href={`https://facebook.com/${socials.facebook.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/icons/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                )}
                {socials?.instagram?.id && (
                  <a
                    href={`https://instagram.com/${socials.instagram.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/icons/instagram.png"
                      alt="Instagram"
                    />
                  </a>
                )}
                {socials?.twitter?.id && (
                  <a
                    href={`https://twitter.com/${socials.twitter.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/icons/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .background {
          position: relative;
        }

        .background::before {
          content: "";
          background-image: url("/images/fashion_background.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(12px);
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 0;
        }

        .background::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }

        .card-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
        }

        .glass-card {
          max-width: 400px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: transform 0.3s ease, background 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 16px 16px 2.5rem 16px;
        }

        .glass-card:hover {
          transform: scale(1.03);
          background: rgba(255, 255, 255, 0.2);
        }

        .image-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
        }

        .brand-image {
          border-radius: 20px;
          object-fit: cover;
          max-width: 100%;
          height: 200px;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-top: 0.5rem;
        }

        .card-content {
          padding: 1rem;
          color: #f5f5f5;
        }

        .fashion-style {
          font-style: italic;
          color: #F1C8A2;
          font-size: 1rem;
          margin: 0.5rem 0;
        }

        .short-description {
          margin: 0.5rem 0 1rem;
          color: #ddd;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .social-links {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);  
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          transition: transform 0.2s ease, filter 0.2s ease;
          filter: brightness(0.95);
        }

        .social-link:hover {
          transform: scale(1.1);
          filter: brightness(1.3);
        }
      `}</style>
    </div>
  );
};

export default FashionCards;

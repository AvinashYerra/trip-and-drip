import Image from "next/image";
import React from "react";

const DestinationResults = ({ destinations }) => {
  return (
    <div className="result-grid">
      {destinations?.map((dest, idx) => {
        const { name, info } = dest;
        const mapLink = info?.location
          ? `https://www.google.com/maps?q=${info.location.latitude},${info.location.longitude}`
          : null;

        return (
          <div className="result-box" key={idx}>
            <h3>{name}</h3>
            {info ? (
              <>
                <p>
                  <strong>Country:</strong> {info.country || "Unknown"}
                </p>
                <p>
                  <strong>Tags:</strong> {info.tags?.join(", ") || "No tags"}
                </p>
                {mapLink && (
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <Image
                      src="/images/location.gif"
                      width={30}
                      height={30}
                      alt="View location"
                    />
                    Explore
                  </a>
                )}
              </>
            ) : (
              <p className="no-info">Info not available</p>
            )}
          </div>
        );
      })}

      <style jsx>{`
        .result-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 24px;
        }

        .result-box {
          background: linear-gradient(
            to bottom,
            rgba(86, 163, 234, 0.7),
            rgba(221, 233, 252, 0.7)
          );
          border-radius: 25px;
          padding: 20px;
          padding-bottom: 60px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }

        .result-box:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 12px 25px rgba(125, 167, 220, 0.9);
        }

        h3 {
          margin-bottom: 12px;
          font-size: 1.6rem;
          font-weight: 700;
          color: rgb(21, 77, 161);
          text-shadow: 0 0 8px rgba(67, 63, 63, 0.3);
        }

        p {
          margin: 6px 0;
          color: #0a0a0a;
          line-height: 1.5;
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          width: 100%;
        }

        p strong {
          color: #333333;
        }

        .map-link {
          width: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          color: rgb(21, 77, 161);
          font-weight: 600;
          text-decoration: none;
          background: #fff;
          padding: 4px 20px;
          border-radius: 25px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .map-link:hover {
          color: #fff;
          background: rgb(21, 77, 161);
        }

        .no-info {
          color: #888888;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default DestinationResults;

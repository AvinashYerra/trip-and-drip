import { QLOO_ENTITIES } from "@/data/qloo";
import { useState } from "react";

export default function Fashion() {
  const [selectedEntity1, setSelectedEntity1] = useState("");
  const [selectedEntity2, setSelectedEntity2] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function fetchFashion() {
    setLoading(true);
    setResult(null);

    const res = await fetch("/api/fashion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pref1Type: selectedEntity1,
        pref1Value: input1,
        pref2Type: selectedEntity2,
        pref2Value: input2,
      }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  const handleEntityClick = (value) => {
    if (selectedEntity1 === value) {
      setSelectedEntity1("");
      setInput1("");
    } else if (selectedEntity2 === value) {
      setSelectedEntity2("");
      setInput2("");
    } else if (!selectedEntity1) {
      setSelectedEntity1(value);
    } else if (!selectedEntity2) {
      setSelectedEntity2(value);
    }
  };

  return (
    <>
      <main className="fashion">
        <section className="intro" data-aos="fade-down">
          <h1 className="headline">Fashion Vibe Matcher</h1>
          <p className="subtext">
            Discover fashion styles tailored to your cultural tastes.
          </p>
          <h2 className="subtext">Select any two preferences</h2>

          <div className="entity-grid">
            {QLOO_ENTITIES.map((ent, index) => {
              const isSelected =
                selectedEntity1 === ent.value || selectedEntity2 === ent.value;
              const disabled =
                !isSelected && selectedEntity1 && selectedEntity2;

              return (
                <button
                  key={ent.value}
                  className={`entity-button ${isSelected ? "selected" : ""}`}
                  onClick={() => handleEntityClick(ent.value)}
                  disabled={disabled}
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 60}`}
                >
                  {ent.label}
                </button>
              );
            })}
          </div>

          <div className="input-fields">
            {selectedEntity1 && (
              <input
                type="text"
                placeholder={`Enter a ${selectedEntity1} you like`}
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="fade-in"
              />
            )}
            {selectedEntity2 && (
              <input
                type="text"
                placeholder={`Enter a ${selectedEntity2} you like`}
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="fade-in"
              />
            )}
          </div>

          <div className="action-section">
            <button
              onClick={fetchFashion}
              disabled={loading || !input1 || !input2}
              className="fetch-btn"
            >
              {loading ? "Styling..." : "Find Fashion Style"}
            </button>

            {result?.styles && result.styles.length > 0 && (
              <div className="result-grid">
                {result.styles.map((style, index) => (
                  <div className="result-box" key={index}>
                    <h3>👗 {style.fashionStyle}</h3>
                    <p>
                      <strong>Inspiration:</strong> {style.inspiration}
                    </p>
                    <p>
                      <strong>Brand:</strong> {style.brand}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        .fashion {
          min-height: 100vh;
          padding: 80px 16px 40px;
          background: url("/images/fashion_back.jpg") no-repeat center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .intro {
          max-width: 960px;
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 16px;
          padding: 40px 24px;
          text-align: center;
          color: white;
        }

        .headline {
          font-size: 2.5rem;
          font-family: "Comic Sans MS";
          margin-bottom: 12px;
        }

        .subtext {
          font-size: 1.1rem;
          max-width: 640px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }

        .entity-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .entity-button {
          position: relative;
          overflow: hidden;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border: 2px solid #ccc;
          border-radius: 25px;
          background: white;
          color: #333;
          cursor: pointer;
          animation: fadeInScale 0.4s ease forwards;
          transition: transform 0.25s ease, background-color 0.25s ease,
            color 0.25s ease, border-color 0.25s ease;
        }

        .entity-button.selected {
          background-color:rgb(245, 144, 185);
          color: white;
          transform: scale(1.05);
          border-color:rgb(239, 101, 156);
        }

        .entity-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Ripple effect */
        .entity-button::after {
          content: "";
          position: absolute;
          background: #ffe6f0;
          border-radius: 50%;
          transform: scale(0);
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          pointer-events: none;
          transition: transform 0.6s ease, opacity 1s ease;
          transform-origin: center;
          opacity: 0;
        }

        .entity-button:active::after {
          transform: scale(3);
          opacity: 1;
          transition: 0s;
          top: 50%;
          left: 50%;
          transform-origin: center;
        }

        /* On mount animation */
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .input-fields {
          margin: 30px auto;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 25px;
          border: none;
          font-size: 1rem;
          outline: none;
        }

        .action-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
        }

        .fetch-btn {
          background: #fff;
          color: #000;
          padding: 12px 28px;
          font-weight: bold;
          font-size: 1rem;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        .fetch-btn:hover:not(:disabled) {
          background: rgb(245, 144, 185);
          color: #fff;
          transform: translateY(-2px);
        }

        .fetch-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .result-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .result-box {
          background: #fff;
          color: #333;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .fade-in {
          animation: fadeIn 0.4s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .headline {
            font-size: 2rem;
          }
          .subtext {
            font-size: 1rem;
          }
          .entity-button {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}

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
        </section>

        <section className="intro" data-aos="fade-up">
          <h2 className="subtext">Select any two preferences</h2>

          <div className="entity-grid">
            {QLOO_ENTITIES.map((ent) => {
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
                placeholder={`Enter ${selectedEntity1}...`}
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="fade-in"
              />
            )}
            {selectedEntity2 && (
              <input
                type="text"
                placeholder={`Enter ${selectedEntity2}...`}
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="fade-in"
              />
            )}
          </div>
        </section>

        <div className="action-section">
          <button
            onClick={fetchFashion}
            disabled={loading || !input1 || !input2}
            className="fetch-btn"
          >
            {loading ? "Styling..." : "Find Fashion Style"}
          </button>

          {result?.fashionStyle && (
            <div className="result-box">
              <h3>👗 Suggested Style: {result.fashionStyle}</h3>
              <p>Inspiration: {result.inspiration}</p>
              <p>Tags: {result.tags?.join(", ")}</p>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .fashion {
          background: #fff6f0;
          color: #000;
          width: 100%;
          min-height: calc(100vh - 72px - 90px);
          padding: 80px 20px;
          text-align: center;
        }

        .headline {
          font-size: 3rem;
          font-weight: 700;
          color: #e6739f;
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

        .entity-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .entity-button {
          padding: 10px 16px;
          border: 2px solid #e6739f;
          border-radius: 20px;
          background: white;
          color: #e6739f;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .entity-button:hover {
          background: #ffe6f0;
        }

        .entity-button.selected {
          background: #e6739f;
          color: white;
        }

        .entity-button:disabled:not(.selected) {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .input-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 400px;
          margin: 0 auto;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
        }

        .action-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
          gap: 30px;
        }

        .fetch-btn {
          margin-top: 10px;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #e6739f, #ff9ecf);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .fetch-btn:hover {
          background: linear-gradient(135deg, #d45d8d, #fa8fc2);
          transform: translateY(-2px);
        }

        .fetch-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
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

        .result-box {
          margin-top: 40px;
          background: #ffe6f0;
          padding: 24px;
          border-radius: 16px;
          display: inline-block;
          text-align: left;
        }

        @media (max-width: 768px) {
          .entity-grid {
            gap: 10px;
          }

          h1 {
            font-size: 2.2rem;
          }

          p {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </>
  );
}

import { QLOO_ENTITIES } from "@/data/qloo";
import { useState } from "react";

export default function Destination() {
  const [selectedEntity1, setSelectedEntity1] = useState("");
  const [selectedEntity2, setSelectedEntity2] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function fetchDestination() {
    setLoading(true);
    setResult(null);

    const res = await fetch("/api/destination", {
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

  return (
    <>
      <main className="destination">
        <section className="intro" data-aos="fade-down">
          <h1 className="headline">Destination Planner</h1>
          <p className="subtext">
            Get personalized travel vibes based on your preferences.
          </p>
        </section>
        <section className="intro" data-aos="fade-up">
          <div className="selectors">
            {/* Entity 1 */}
            <div className="dropdown-group">
              <label>Select First Preference</label>
              <select
                value={selectedEntity1}
                onChange={(e) => setSelectedEntity1(e.target.value)}
              >
                <option value="">-- Choose Entity --</option>
                {QLOO_ENTITIES.map((ent) => (
                  <option key={ent.value} value={ent.value}>
                    {ent.label}
                  </option>
                ))}
              </select>

              {selectedEntity1 && (
                <input
                  type="text"
                  placeholder={`Enter ${selectedEntity1}...`}
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="fade-in"
                />
              )}
            </div>

            {/* Entity 2 */}
            <div className="dropdown-group">
              <label>Select Second Preference</label>
              <select
                value={selectedEntity2}
                onChange={(e) => setSelectedEntity2(e.target.value)}
              >
                <option value="">-- Choose Entity --</option>
                {QLOO_ENTITIES.map((ent) => (
                  <option key={ent.value} value={ent.value}>
                    {ent.label}
                  </option>
                ))}
              </select>

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
          </div>
        </section>
        <button
          onClick={fetchDestination}
          disabled={loading}
          className="fetch-btn"
        >
          {loading ? "Loading..." : "Find Destination"}
        </button>

        {result?.destinationName && (
          <div className="result-box">
            <h3>🌍 Suggested: {result.destinationName}</h3>
            <p>Country: {result.destinationInfo?.country}</p>
            <p>Tags: {result.destinationInfo?.tags?.join(", ")}</p>
          </div>
        )}
      </main>

      <style jsx>{`
        .destination {
          background: #d7ebf6;
          color: #000;
          width: 100%;
          min-height: calc(100vh - 72px - 90px);
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

        .selectors {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
        }

        .dropdown-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 16px;
          min-width: 280px;
        }

        label {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        select {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
          margin-bottom: 15px;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          outline: none;
        }

        .fetch-btn {
          margin-top: 30px;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #6c6fcd, #9e9cf0);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .fetch-btn:hover {
          background: linear-gradient(135deg, #5a5ecb, #8c89e0);
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

        @media (max-width: 768px) {
          .selectors {
            flex-direction: column;
            gap: 30px;
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

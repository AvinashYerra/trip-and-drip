import DestinationResults from "@/components/Destination/DestinationResults";
import { QLOO_ENTITIES } from "@/data/qloo";
import { useState } from "react";

export default function Destination() {
  const [selectedEntity1, setSelectedEntity1] = useState("");
  const [selectedEntity2, setSelectedEntity2] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const entities = QLOO_ENTITIES.filter((ent) => ent.value !== "destination");
  console.log(result);
  
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
            Get personalized travel destinations based on your Taste.
          </p>
        </section>
        <section className="intro" data-aos="fade-up">
          <div className="selectors">
            <div className="dropdown-group">
              <label>Select First Category</label>
              <select
                value={selectedEntity1}
                onChange={(e) => setSelectedEntity1(e.target.value)}
              >
                <option value="">Choose One</option>
                {entities.map((ent) => (
                  <option key={ent.value} value={ent.value}>
                    {ent.label}
                  </option>
                ))}
              </select>

              {selectedEntity1 && (
                <input
                  type="text"
                  placeholder={`Enter any ${selectedEntity1} you like`}
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="fade-in"
                />
              )}
            </div>

            <div className="dropdown-group">
              <label>Select Second Category</label>
              <select
                value={selectedEntity2}
                onChange={(e) => setSelectedEntity2(e.target.value)}
              >
                <option value="">Choose one</option>
                {entities.map((ent) => (
                  <option key={ent.value} value={ent.value}>
                    {ent.label}
                  </option>
                ))}
              </select>

              {selectedEntity2 && (
                <input
                  type="text"
                  placeholder={`Enter any ${selectedEntity2} you like`}
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  className="fade-in"
                />
              )}
            </div>
          </div>

          <button
            onClick={fetchDestination}
            disabled={loading}
            className="fetch-btn"
          >
            {loading ? "Loading..." : "Find Destination"}
          </button>
        </section>

        {result?.destinations && (
          <DestinationResults destinations={result.destinations} />
        )}
      </main>

      <style jsx>{`
        .destination {
          background: rgb(173, 226, 255);
          color: #000;
          width: 100%;
          min-height: calc(100vh);
          padding: 80px 20px;
          text-align: center;
          background-image: url("/images/destination.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 120px 20px 0;
        }

        .intro {
          padding: 20px;
          border-radius: 12px;
          color: #fff;
        }
        .headline {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          font-family: "Comic Sans MS";
        }

        .subtext {
          max-width: 720px;
          margin: 0 auto 30px;
          font-size: 1.15rem;
          color: white;
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
          min-width: 320px;
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
          margin-top: 50px;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          background: rgb(36, 33, 33);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
        }

        .fetch-btn:hover {
          background: rgb(0, 0, 0);
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

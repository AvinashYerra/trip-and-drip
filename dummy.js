require("dotenv").config();
const fetch = require("node-fetch");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Step 1: Get entity from Qloo
async function getEntityDetails(query, type) {
  const url = new URL("https://hackathon.api.qloo.com/search");
  url.searchParams.append("query", query);
  url.searchParams.append("types", type);
  url.searchParams.append("sort_by", "match");
  url.searchParams.append("page", "1");
  url.searchParams.append("operator.filter.tags", "union");
  url.searchParams.append("filter.radius", "10");

  const res = await fetch(url.href, {
    headers: { "x-api-key": process.env.QLOO_API_KEY },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  const data = await res.json();

  return data.results[0] || null;
}

// Step 2: Generate travel recommendation using Gemini
async function suggestTravelDestination(movieTags, artistTags, description) {
  const result = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
A user enjoys the following movie and artist. Suggest one destination that aligns with their taste:

🎬 Movie Tags: ${movieTags.join(", ")}
🎵 Artist Tags: ${artistTags.join(", ")}
📝 Movie Description: ${description}

Return only a short name recommending a destination

          `,
          },
        ],
      },
    ],
  });

  // Access the response safely
  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response content found from Gemini.");
  }

  return text;
}


async function getDestinationInfo(destinationName) {
  const url = new URL("https://hackathon.api.qloo.com/search");
  url.searchParams.append("query", destinationName);
  url.searchParams.append("types", "urn:entity:destination");
  url.searchParams.append("sort_by", "match");
  url.searchParams.append("page", "1");
  url.searchParams.append("operator.filter.tags", "union");
  url.searchParams.append("filter.radius", "10");

  const res = await fetch(url.href, {
    headers: {
      "x-api-key": process.env.QLOO_API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const entity = data.results?.[0];

  if (!entity) {
    console.warn("⚠️ No destination info found.");
    return null;
  }

  return {
    name: entity.name,
    country: entity.properties?.country || "Unknown",
    popularity: Number(entity.popularity?.toFixed(3)) || null,
    location: {
      latitude: entity.location?.lat || null,
      longitude: entity.location?.lon || null,
    },
    tags: entity.tags?.map((tag) => tag.name) || [],
  };
}







async function main() {
  const movieName = "Inspection";
  const artistName = "Radiohead";

  const movie = await getEntityDetails(movieName, "urn:entity:movie");
  const artist = await getEntityDetails(artistName, "urn:entity:artist");

  if (!movie || !artist) {
    console.log("❌ Could not find movie or artist.");
    return;
  }

  const movieTags = (movie.tags || []).map((tag) => tag.name).slice(0, 10);
  const artistTags = (artist.tags || []).map((tag) => tag.name).slice(0, 10);
  const description = movie.properties?.description || "No description available.";

  console.log("🎬 Movie Tags:", movieTags);
  console.log("🎵 Artist Tags:", artistTags);
  console.log("📝 Description:", description);

  const suggestion = await suggestTravelDestination(movieTags, artistTags, description);
  console.log("\n🌍 Travel Suggestion:\n", suggestion);

  const destinationText = await suggestTravelDestination(movieTags, artistTags, description);

// Extract the destination name (very basic parse or LLM format)
const destinationName = destinationText.match(/[A-Z][a-z]+(?: [A-Z][a-z]+)*/)?.[0]; // e.g., "Kyoto"

if (!destinationName) {
  console.warn("⚠️ Could not extract destination name from Gemini.");
  return;
}

console.log(`🌍 Gemini Suggested Destination: ${destinationName}`);

const destinationInfo = await getDestinationInfo(destinationName);
console.log("🏖️ Destination Info from Qloo:", destinationInfo);




}

main().catch(console.error);

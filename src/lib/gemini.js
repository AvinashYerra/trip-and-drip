// lib/gemini.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function suggestTravelDestination(
  pref1Type,
  tags1,
  pref2Type,
  tags2,
  description
) {
  const result = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
A user enjoys the following ${pref1Type} and ${pref2Type}. Suggest 5 travel destinations that align with their taste.

🎬 ${pref1Type} Tags: ${tags1.join(", ")}
🎵 ${pref2Type} Tags: ${tags2.join(", ")}
📝 ${pref1Type} Description: ${description}

Return ONLY a clean list of 5 destination names, each on a new line. No numbering or extra text.
            `,
          },
        ],
      },
    ],
  });

  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response content found from Gemini.");
  }

  // Split into lines, trim, and filter empty lines
  const destinations = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return destinations;
}

export async function suggestFashionStyle(
  pref1Type,
  tags1,
  pref2Type,
  tags2,
  description
) {
  const result = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
A user enjoys the following ${pref1Type} and ${pref2Type}. Based on their cultural preferences, suggest 5 fashion brands that reflect their vibe.

🎭 ${pref1Type} Tags: ${tags1.join(", ")}
🎨 ${pref2Type} Tags: ${tags2.join(", ")}
📝 ${pref1Type} Description: ${description}

Return ONLY a JSON array with 5 objects. Each object should include:
- "fashionStyle": a short name of the fashion trend
- "inspiration": a one-line reason why it suits them
- "brand": a fashion brand that matches the vibe

Do not include any markdown, explanation, or surrounding text. Just return valid JSON.
            `,
          },
        ],
      },
    ],
  });

  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("No response from Gemini for fashion.");

  const cleanedText = text.trim().replace(/^```json/, "").replace(/```$/, "").trim();

  try {
    const jsonArray = JSON.parse(cleanedText);

    // Ensure it's an array with valid objects
    if (Array.isArray(jsonArray) && jsonArray.length > 0) {
      return jsonArray;
    }

    throw new Error("Unexpected JSON format from Gemini.");
  } catch (e) {
    console.warn("⚠️ Gemini returned non-parsable JSON:", cleanedText);
    // Return fallback object
    return [
      {
        fashionStyle: cleanedText.match(/[A-Z][a-z]+(?: [A-Z][a-z]+)*/)?.[0] || "Unknown",
        inspiration: "Inferred from cultural tags.",
        brand: "Unknown",
      },
    ];
  }
}

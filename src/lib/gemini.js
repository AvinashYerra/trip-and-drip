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
A user enjoys the following ${pref1Type} and ${pref2Type}. Suggest one destination that aligns with their taste:

🎬 ${pref1Type} Tags: ${tags1.join(", ")}
🎵 ${pref2Type} Tags: ${tags2.join(", ")}
📝 ${pref1Type} Description: ${description}

Return only a short name recommending a destination
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
  return text?.match(/[A-Z][a-z]+(?: [A-Z][a-z]+)*/)?.[0] || null;
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
A user enjoys the following ${pref1Type} and ${pref2Type}. Based on their cultural preferences, suggest one fashion style that reflects their vibe.

🎭 ${pref1Type} Tags: ${tags1.join(", ")}
🎨 ${pref2Type} Tags: ${tags2.join(", ")}
📝 ${pref1Type} Description: ${description}

Return a JSON object with:
- "fashionStyle": a short name of the fashion trend
- "inspiration": a one-line reason why it suits them
- "tags": a few keywords related to this fashion style
            `,
          },
        ],
      },
    ],
  });

  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("No response from Gemini for fashion.");
  let cleanedText ="";
  cleanedText =text.trim().replace(/^```json/, "").replace(/```$/, "").trim();

  try {
    const json = JSON.parse(cleanedText);
    return json;
  } catch (e) {
    console.warn("⚠️ Gemini returned non-JSON for fashion:", cleanedText);
    return {
      fashionStyle: cleanedText.match(/[A-Z][a-z]+(?: [A-Z][a-z]+)*/)?.[0] || "Unknown",
      inspiration: "Inferred from cultural tags.",
      tags: [],
    };
  }
}

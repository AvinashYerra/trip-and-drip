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

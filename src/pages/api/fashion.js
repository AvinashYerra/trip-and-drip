// pages/api/fashion.js
import { getEntityDetails } from "@/lib/qloo";
import { suggestFashionStyle } from "@/lib/gemini";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { pref1Type, pref1Value, pref2Type, pref2Value } = req.body;

  try {
    const entity1 = await getEntityDetails(pref1Value, `urn:entity:${pref1Type}`);
    const entity2 = await getEntityDetails(pref2Value, `urn:entity:${pref2Type}`);

    if (!entity1 || !entity2) {
      return res.status(404).json({ error: "Entities not found" });
    }

    const tags1 = (entity1.tags || []).map((tag) => tag.name).slice(0, 10);
    const tags2 = (entity2.tags || []).map((tag) => tag.name).slice(0, 10);
    const description = entity1.properties?.description || "No description.";

    const fashion = await suggestFashionStyle(pref1Type, tags1, pref2Type, tags2, description);

    if (!fashion) {
      return res.status(500).json({ error: "Could not generate fashion style." });
    }

    return res.status(200).json(fashion);
  } catch (error) {
    console.error("Fashion API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

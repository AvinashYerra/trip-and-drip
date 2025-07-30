// pages/api/destination.js
import { getEntityDetails, getDestinationInfo } from "@/lib/qloo";
import { suggestTravelDestination } from "@/lib/gemini";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { pref1Type, pref1Value, pref2Type, pref2Value } = req.body;

  try {
    const entity1 = await getEntityDetails(
      pref1Value,
      `urn:entity:${pref1Type}`
    );
    const entity2 = await getEntityDetails(
      pref2Value,
      `urn:entity:${pref2Type}`
    );

    if (!entity1 || !entity2) {
      return res.status(404).json({ error: "Entities not found" });
    }

    const tags1 = (entity1.tags || []).map((tag) => tag.name).slice(0, 10);
    const tags2 = (entity2.tags || []).map((tag) => tag.name).slice(0, 10);
    const description = entity1.properties?.description || "No description.";

    const destinationNames = await suggestTravelDestination(
      pref1Type,
      tags1,
      pref2Type,
      tags2,
      description
    );
    if (!Array.isArray(destinationNames) || destinationNames.length === 0) {
      return res
        .status(500)
        .json({ error: "Could not generate destination suggestions." });
    }

    // Get info for each destination
    const destinationInfos = await Promise.all(
      destinationNames.map(async (name) => {
        try {
          const info = await getDestinationInfo(name);
          return { name, info };
        } catch (err) {
          console.error(`Error fetching info for ${name}:`, err);
          return { name, info: null };
        }
      })
    );
    return res.status(200).json({ destinations: destinationInfos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

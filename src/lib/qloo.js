// lib/qloo.js
import fetch from "node-fetch";

const QLOO_BASE_URL = "https://hackathon.api.qloo.com/search";

export async function getEntityDetails(query, type) {
  const url = new URL(QLOO_BASE_URL);
  url.searchParams.append("query", query);
  url.searchParams.append("types", type);
  url.searchParams.append("sort_by", "match");
  url.searchParams.append("page", "1");
  url.searchParams.append("operator.filter.tags", "union");
  url.searchParams.append("filter.radius", "10");

  const res = await fetch(url.href, {
    headers: { "x-api-key": process.env.QLOO_API_KEY },
  });

  if (!res.ok) throw new Error(`Qloo error: ${await res.text()}`);
  const data = await res.json();
  return data.results?.[0] || null;
}

export async function getDestinationInfo(destinationName) {
  const url = new URL(QLOO_BASE_URL);
  url.searchParams.append("query", destinationName);
  url.searchParams.append("types", "urn:entity:destination");
  url.searchParams.append("sort_by", "match");
  url.searchParams.append("page", "1");
  url.searchParams.append("operator.filter.tags", "union");
  url.searchParams.append("filter.radius", "10");

  const res = await fetch(url.href, {
    headers: { "x-api-key": process.env.QLOO_API_KEY },
  });

  if (!res.ok) throw new Error(`Destination fetch error: ${await res.text()}`);
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

export async function getFashionStyleInfo(fashionStyleName) {
  const url = new URL(QLOO_BASE_URL);
  url.searchParams.append("query", fashionStyleName);
  url.searchParams.append("types", "urn:entity:brand");
  url.searchParams.append("sort_by", "match");
  url.searchParams.append("page", "1");
  url.searchParams.append("operator.filter.tags", "union");
  url.searchParams.append("filter.radius", "10");

  const res = await fetch(url.href, {
    headers: { "x-api-key": process.env.QLOO_API_KEY },
  });

  if (!res.ok) throw new Error(`Fashion fetch error: ${await res.text()}`);
  const data = await res.json();
  const entity = data.results?.[0];
  if (entity && Object.keys(entity).length === 0) {
    console.warn("⚠️ No fashion info found.");
    return null;
  }
  
  return {
    name: entity?.name,
    properties: entity?.properties,
    tags: entity?.tags?.map((tag) => tag.name) || [],
  };
}

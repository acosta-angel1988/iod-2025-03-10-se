import fetch from "node-fetch";

const API_BASE = "https://api.adoptapet.com/search/";

export async function searchPets(location, type) {
  const apiKey = process.env.ADOPTAPET_API_KEY;

  const url = `${API_BASE}?key=${apiKey}&location=${location}&type=${type}&output=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Adopt-a-Pet API error: ${response.statusText}`);
  }

  return response.json();
}
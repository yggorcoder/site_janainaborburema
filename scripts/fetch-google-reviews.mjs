import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "../business.config.js";

const API_KEY =
  process.env.GOOGLE_PLACES_API_KEY ?? process.env.VITE_GOOGLE_PLACES_API_KEY;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../src/data/google-reviews.json");

const googleConfig = config.testimonials?.google ?? {};
const textQuery =
  googleConfig.searchQuery ??
  `${config.name}, ${config.location.neighborhood}, ${config.location.city} - ${config.location.state}`;

if (!API_KEY) {
  console.error(
    "Defina GOOGLE_PLACES_API_KEY no arquivo .env para buscar avaliações do Google."
  );
  process.exit(1);
}

const searchRes = await fetch("https://places.googleapis.com/v1/places:searchText", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount",
  },
  body: JSON.stringify({
    textQuery,
    languageCode: "pt-BR",
    locationBias: {
      circle: {
        center: {
          latitude: googleConfig.latitude ?? -5.8706783,
          longitude: googleConfig.longitude ?? -35.1845966,
        },
        radius: 500,
      },
    },
  }),
});

if (!searchRes.ok) {
  console.error("Erro na busca do local:", await searchRes.text());
  process.exit(1);
}

const searchData = await searchRes.json();
const place = searchData.places?.[0];

if (!place?.id) {
  console.error("Local não encontrado para:", textQuery);
  process.exit(1);
}

const detailsRes = await fetch(`https://places.googleapis.com/v1/${place.id}`, {
  headers: {
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri",
  },
});

if (!detailsRes.ok) {
  console.error("Erro ao buscar avaliações:", await detailsRes.text());
  process.exit(1);
}

const details = await detailsRes.json();

const items = (details.reviews ?? []).map((review) => ({
  name: review.authorAttribution?.displayName ?? "Cliente Google",
  text: review.text?.text ?? review.originalText?.text ?? "",
  rating: review.rating ?? 5,
  date: review.publishTime ?? null,
  source: "google",
}));

const output = {
  fetchedAt: new Date().toISOString(),
  rating: details.rating ?? place.rating ?? null,
  reviewCount: details.userRatingCount ?? place.userRatingCount ?? items.length,
  mapsUrl: details.googleMapsUri ?? googleConfig.url ?? null,
  items,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n");

console.log(`✓ ${items.length} avaliação(ões) salvas em src/data/google-reviews.json`);

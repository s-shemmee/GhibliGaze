import { mkdirSync, writeFileSync } from "node:fs";

const key = process.env.YOUTUBE_API_KEY;
const playlistId = "PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1";

if (!key) {
  throw new Error("Set YOUTUBE_API_KEY in .env (no VITE_ prefix).");
}

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${playlistId}&key=${key}`;
const response = await fetch(url);
if (!response.ok) {
  throw new Error(`YouTube API error: ${response.status}`);
}

const data = await response.json();
const trailers = data.items.map((item) => ({
  id: item.snippet.resourceId.videoId,
  title: item.snippet.title,
  thumbnail:
    item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
}));

mkdirSync("src/data", { recursive: true });
writeFileSync("src/data/trailers.json", JSON.stringify(trailers, null, 2));
console.log(`Saved ${trailers.length} trailers.`);
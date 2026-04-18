const API_URL = "https://news.stakemail91.workers.dev/";

async function getNews() {
  const res = await fetch(API_URL);
  return await res.json();
}

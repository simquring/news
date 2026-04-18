const API_URL = "https://news.stakemail91.workers.dev/";

async function getNews() {
  const apiNews = await fetch(API_URL).then(r => r.json());

  const manual = JSON.parse(localStorage.getItem("manual") || "[]");

  return {
    articles: [...manual, ...apiNews.articles]
  };
}

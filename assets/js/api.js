async function getNews() {
  try {
    const res = await fetch("https://news.stakemail91.workers.dev/");
    return await res.json();
  } catch (e) {
    console.log("API ERROR:", e);

    // 🔥 FALLBACK DATA (biar gak kosong)
    return {
      articles: [
        {
          title: "Contoh berita offline",
          description: "Worker/API tidak aktif",
          urlToImage: "https://via.placeholder.com/300"
        }
      ]
    };
  }
}

const params = new URLSearchParams(location.search);
const url = params.get("url");

async function loadArticle() {
  const res = await fetch("https://news.stakemail91.workers.dev/?detail=" + encodeURIComponent(url));
  const data = await res.json();

  document.getElementById("title").innerText = data.title;
  document.getElementById("image").src = data.urlToImage;
  document.getElementById("content").innerText = data.content;
}

loadArticle();

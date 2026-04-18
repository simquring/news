const params = new URLSearchParams(location.search);
const url = params.get("url");

fetch("https://news.stakemail91.workers.dev/detail?url=" + encodeURIComponent(url))
.then(r => r.json())
.then(d => {
  document.getElementById("title").innerText = d.title;
  document.getElementById("content").innerText = d.content;
  document.getElementById("source").href = d.source;
});

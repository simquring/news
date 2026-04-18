let all = [];

async function load() {
  const data = await getNews();
  all = data.articles;
  render(all);
}

function render(list) {
  const el = document.getElementById("news");

  el.innerHTML = list.map(a => `
    <div class="bg-white shadow">
      <img src="https://news.stakemail91.workers.dev${a.image}">
      <div class="p-3">
        <h2>${a.title}</h2>
        <p>${a.description}</p>
        <a href="article.html?url=${encodeURIComponent(a.url)}">Detail</a>
      </div>
    </div>
  `).join("");
}

function filter(cat) {
  if (cat === "All") return render(all);
  render(all.filter(a => a.category === cat));
}

function toggleDark() {
  document.body.classList.toggle("bg-black");
}

load();

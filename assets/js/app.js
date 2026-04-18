const container = document.getElementById("news");

async function loadNews() {
  const data = await getNews();

  container.innerHTML = "";

  data.articles.forEach(article => {
    container.innerHTML += `
      <div class="border rounded overflow-hidden hover:shadow-lg transition">
        <img src="${article.urlToImage}" class="w-full h-40 object-cover" loading="lazy">
        <div class="p-3">
          <h2 class="font-bold">${article.title}</h2>
          <p class="text-sm">${article.description}</p>
          <a href="article.html?url=${encodeURIComponent(article.url)}"
             class="text-blue-500">Read more</a>
        </div>
      </div>
    `;
  });
}

loadNews();

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light");
}

/* LOAD THEME */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

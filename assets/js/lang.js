let lang = localStorage.getItem("lang") || "id";

function toggleLang() {
  lang = lang === "id" ? "en" : "id";
  localStorage.setItem("lang", lang);
  location.reload();
}

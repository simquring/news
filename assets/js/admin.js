function save() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const data = JSON.parse(localStorage.getItem("manual") || "[]");

  data.push({
    title,
    content,
    date: new Date()
  });

  localStorage.setItem("manual", JSON.stringify(data));

  alert("Berhasil disimpan!");
}

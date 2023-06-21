function addCard(name, image, height) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
        <img src="${image}" alt="${name}" />
        <spane>{${name}: 해발 ${height}m}</span>
    `;
  document.querySelector("#container").appendChild(div);

  const span = documnet.createElement("span");
  span.innerHTML = name;
  document.querySelector("#sidebar").appendChild(span);
}

function addCardHandle(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const height = document.getElementById("height").value;
  addCard(name, image, height);
  closeModal();
}

document
  .getElementById("addCardForm")
  .addEventListener("submit", addCardHandle);

document.getElementById("modal").style.display = "none";
document.getElementById("addCard").onclick = function () {
  document.getElementById("modal").style.display = "block";
};
document.getElementById("closeModal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

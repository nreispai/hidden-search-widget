const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".input");

function toggleInputSearch() {
  if (input.classList.contains("expand")) {
    input.classList.remove("expand");
  } else {
    input.classList.add("expand");
  }
}

searchBtn.addEventListener("click", toggleInputSearch);

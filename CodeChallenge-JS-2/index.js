const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "Hello!";
body.appendChild(h1);

function resizeHandler() {
  h1.style.color = "white";
  if (window.innerWidth < 600) {
    body.style.backgroundColor = "purple";
  } else if (window.innerWidth >= 600 && window.innerWidth < 800) {
    body.style.backgroundColor = "olive";
  } else if (window.innerWidth >= 800 && window.innerWidth < 1000) {
    body.style.backgroundColor = "red";
  }
}

window.addEventListener("resize", resizeHandler);

// d-day 계산기
const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const year = new Date().getFullYear();
  const xmas = new Date(`${year}-12-25`);
  const date = new Date();

  const dDay = xmas - date;
  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dDay / (1000 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);

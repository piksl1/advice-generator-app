function handleResponse(data) {
  let idA = document.querySelector("#ida");
  let adviceText = document.querySelector("#quote");
  idA.textContent = data.slip.id;
  adviceText.textContent = data.slip.advice;
}

function getNewAdvice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => handleResponse(data))
    .catch((error) => console.error(error));
}
getNewAdvice();
let button = document.querySelector(".circled");
button.addEventListener("click", () => {
  getNewAdvice();
});

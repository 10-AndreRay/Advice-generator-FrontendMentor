const btnSortear = document.querySelector(".ball");
const idAdvice = document.querySelector("#advice");
const textAdvice = document.querySelector("#text-advice");

const getAdvice = () => {
    const url = "https://api.adviceslip.com/advice";

    fetch(url)
        .then(response => response.json())
        .then(advice => setAdvice(advice))
        .catch(error => console.log(error))
}

const setAdvice = (advice) => {
    idAdvice.innerHTML = advice.slip.id;
    textAdvice.innerHTML = advice.slip.advice;
}

window.onload = getAdvice;
btnSortear.addEventListener("click", getAdvice);
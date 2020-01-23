// 1. Get input values

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const btn = document.querySelector("button");
const anwser = document.querySelector("#anwser");
const firstn = document.querySelector("firstn");
const secondn = document.querySelector("secondn");
const anwsern = document.querySelector("anwsern");

// 2. Create calc function

function calc() {

    // 4. Display output to user

    anwser.innerText = parseInt(first.value) + parseInt(second.value);
    
function calc() {

     anwser.innerText = parseInt(first.value) - parseInt(second.value);
}
}
// 3. Add event listener to button

btn.addEventListener("click", calc);

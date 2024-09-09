const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

let currentIndex = 0;

const getFacts = async () => {
    let response = await fetch(URL);
    let data = await response.json();

    if (currentIndex >= 5) {
        currentIndex = 0; // Reset the index if it exceeds the data length
    }

    factPara.innerText = data[currentIndex].text;
    currentIndex++;
};

btn.addEventListener("click", getFacts); // Fetch and display the cat fact when the button is clicked
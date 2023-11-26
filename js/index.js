let cardsArray = [
  {
    name: "CSS",
    img: "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
  },
  {
    name: "HTML",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
  },
  {
    name: "jQuery",
    img: "https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png",
  },
  {
    name: "JS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  },
  {
    name: "Node",
    img: "https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png",
  },
  {
    name: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
  },
];
gameArray = cardsArray.concat(cardsArray);

// const myNumbers = (array) => {
//         for (let i = array.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1))
//             // console.log(i, j)
//             let temp = array[i]
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }
let shuffledCard = Array.from(gameArray).sort(() => 0.5 - Math.random());

const parentDiv = document.querySelector("#card-section");
console.log(parentDiv);
for (let i = 0; i < shuffledCard.length; i++) {
  const child_div = document.createElement("div");
  child_div.classList.add("card");
  child_div.dataset.name = shuffledCard[i].name;
  //   child_div.style.backgroundImage = `url(${shuffledCard[i].img} )`;

  const front_div = document.createElement("div");
  front_div.classList.add("front-card");

  const back_div = document.createElement("div");
  back_div.classList.add("back-card");

  parentDiv.appendChild(child_div);
  back_div.style.backgroundImage = `url(${shuffledCard[i].img} )`;
  child_div.appendChild(front_div);
  child_div.appendChild(back_div);
}

const cardMatches = () => {
  let cardSelected = document.querySelectorAll(".card-selected");
  cardSelected.forEach((curr) => {
    curr.classList.add("matched");
  });
};

let resetGame = () => {
  console.log("reset");
  clickCount = 0;
  firstcard = "";
  secondCard = "";
  let cardSelected = document.querySelectorAll(".card-selected");
  cardSelected.forEach((ele) => {
    ele.classList.remove("card-selected");
    console.log(ele);
  });
};

let clickCount = 0;
let firstcard = "";
let secondCard = "";

parentDiv.addEventListener("click", (e) => {
  let curr = e.target;
  clickCount++;
  if (clickCount < 3) {
    if (clickCount === 1) firstcard = curr.parentNode.dataset.name;
    else secondCard = curr.parentNode.dataset.name;
    // to stop selecting on the board v
    if (curr.id !== "card-section") {
      curr.parentNode.classList.add("card-selected");
    }

    if (firstcard !== "" && secondCard !== "") {
      if (firstcard === secondCard) {
        setTimeout(() => {
          cardMatches();

          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});

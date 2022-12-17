const body = document.body;
const nav = document.querySelector("nav");
const moleContainer = document.querySelector(".mole-container");
const row = document.getElementsByTagName("row");
const row1 = document.querySelector(".row1");
const holes = document.querySelectorAll(".hole");
const score = document.querySelector(".score");
const hole = document.getElementById(
  `hole-${Math.trunc(Math.random() * 9 + 1)}`
);
//SETTING STARTING POINT FOR THE MOLE
hole.src = "./images/mole.png";
//SETTING INITIAL VALUE
score.innerHTML = 0;
//SETTING EVENTLISTENER TO ALL THE IMGS

function setMole() {
  for (const eachHole of holes) {
    let src2 = eachHole.getAttribute("src");
    if (src2 === "./images/mole.png") {
      eachHole.src = "./images/hole.png";
    }
  }
  document.getElementById(`hole-${Math.trunc(Math.random() * 9 + 1)}`).src =
    "./images/mole.png";
}
//SETTING AN INTERVAL FOR THE MOLE TO POP UP
setInterval(setMole, 1000);
// setInterval(setMole, 1000);
function setHoleEvent(holes) {
  for (const holio of holes) {
    holio.addEventListener("click", function () {
      let src1 = holio.getAttribute("src");
      if (src1 === "./images/mole.png") {
        score.innerHTML++;
        //RETURNS IMG BACK TO REGULAR HOLE
        holio.src = "./images/hole.png";
      }
    });
  }
}

setHoleEvent(holes);

//CREATED A SMALL OBJECT TO STORE METHODS SO AS TO NOT
//REPEAT LINES OF CODE
const stylio = {
  displayFlex(el) {
    el.style.display = "flex";
  },
  changeBackground(el, imgPath) {
    el.style.backgroundImage = `url(${imgPath})`;
  },
  setWidth(el, width) {
    el.style.width = `${width}`;
  },
  flexEven(el) {
    for (const index of el) {
      this.displayFlex(index);
      index.style.justifyContent = "space-evenly";
    }
  },
  setHeight(el, height) {
    el.style.height = `${height}`;
  },
};

/*******************STYLE*******************/

/*******************BODY********************/
stylio.setHeight(body, "96%");
stylio.setWidth(body, "100%");
stylio.changeBackground(body, "'./images/grass.jpeg'");

/*******************NAV********************/
stylio.changeBackground(nav, "'./images/dirt.jpg'");
nav.style.position = "fixed";
stylio.setWidth(nav, "100%");
stylio.setHeight(nav, "50px");
nav.style.top = "0";
nav.style.bottom = "0";
stylio.displayFlex(nav);
nav.style.justifyContent = "center";
nav.style.alignItems = "center";

/*******************ROW********************/
stylio.flexEven(row);

/***************MOLE-CONTAINER**************/
moleContainer.style.marginTop = "50px";
stylio.displayFlex(moleContainer);
moleContainer.style.flexDirection = "column";

/*******************SCORE********************/
score.style.backgroundColor = "white";
stylio.setHeight(score, "30px");
stylio.setWidth(score, "30px");
score.style.borderRadius = "75%";
score.style.border = "2px solid black";
stylio.displayFlex(score);
score.style.justifyContent = "center";
score.style.alignItems = "center";
score.style.fontWeight = "bold";

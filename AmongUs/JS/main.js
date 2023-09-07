let body = document.body;
body.style.textAlign = "center";

let container = document.createElement("div");

function createAmong(type, color) {
  let among = document.createElement("img");

  among.src = `../Img/AmongUs/${color}.png`;
  among.className = type;
  among.style.cursor = "pointer";
  among.style.marginRight = "10px";

  if (type === "click") {
    among.onclick = function () {
      selectedImg.src = `../Img/AmongUs/Vent/${color}Vent.png`;
    };
  }

  among.onload = function () {
    among.style.border = "10px solid #aaa";
  };
  among.onmouseenter = function () {
    among.style.border = `10px solid ${color}`;
    if (type === "touch")
      selectedImg.src = `../Img/AmongUs/Dead/${color}Dead.png`;
  };
  among.onmouseleave = function () {
    among.style.border = `10px solid #aaa`;
  };
  return among;
}

/*----------Click Photos----------*/
let clickImgs = document.createElement("div");
clickImgs.className = "click";

let clickRed = createAmong("click", "red");

let clickGreen = createAmong("click", "green");

let clickOrange = createAmong("click", "orange");

let clickPink = createAmong("click", "pink");

clickImgs.appendChild(clickRed);
clickImgs.appendChild(clickGreen);
clickImgs.appendChild(clickOrange);
clickImgs.appendChild(clickPink);

/*---------- Selected Among----------*/

let main = document.createElement("div");
main.className = "selected";

let selectedImg = document.createElement("img");
selectedImg.src = "../Img/AmongUs/Main.png";
selectedImg.style.width = "830px";
selectedImg.style.height = "830px";

selectedImg.onmouseenter = function () {
  selectedImg.src = "../Img/AmongUs/Main.png";
}

main.appendChild(selectedImg);

/*----------Touch Photos----------*/
let touchImgs = document.createElement("div");
touchImgs.className = "touch";

let touchRed = createAmong("touch", "red");

let touchGreen = createAmong("touch", "green");

let touchOrange = createAmong("touch", "orange");

let touchPink = createAmong("touch", "pink");

touchImgs.appendChild(touchRed);
touchImgs.appendChild(touchGreen);
touchImgs.appendChild(touchOrange);
touchImgs.appendChild(touchPink);

/*----------Add Content To The Page----------*/
body.appendChild(clickImgs);
body.appendChild(main);
body.appendChild(touchImgs);
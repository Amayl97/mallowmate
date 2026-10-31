const states = {
  sit: ["assets/sit/sit.jpeg"],
  playing: [
    "assets/play/play.jpeg",
    "assets/play/play2.jpeg",
    "assets/play/play3.jpeg",
    "assets/play/play4.jpeg",
    "assets/play/play5.jpeg",
    "assets/play/play6.jpeg,",
    "assets/play/play7.jpeg",
    "assets/play/play8.jpeg",
  ],
  walking: [
    "assets/walk/walk1.jpeg",
    "assets/walk/walk2.jpeg",
    "assets/walk/walk3.jpeg",
    "assets/walk/walk4.jpeg",
    "assets/walk/walk5.jpeg",
    "assets/walk/walk6.jpeg",
    "assets/walk/walk7.jpeg",
  ],
  sleeping: ["assets/sleep/sleep.jpeg"],
};

const pet = document.getElementById("pet");

let currState = "walking";
let currFrame = 0;

function startPet() {
  const animation = setInterval(() => {
    currFrame = (currFrame + 1) % states[currState].length;
    pet.src = states[currState][currFrame];
  }, 200);

  setTimeout(() => {
    clearInterval(animation);
    makeSit()
  }, 2000);
}

startPet();

function makeSit() {
  currState = "sit";
  currFrame = 0;
  const animation = setInterval(() => {
    currFrame = (currFrame + 1) % states[currState].length;
    pet.src = states[currState][currFrame];
  }, 200);

  setTimeout(() => {
    clearInterval(animation);
    makeSleep()
  }, 280);

}

function makeSleep(){
    currFrame = 0;
    currState = "sleeping";
   const animation = setInterval(() => {
    currFrame = (currFrame + 1) % states[currState].length;
    pet.src = states[currState][currFrame];
  }, 300);

  setTimeout(() => {
    clearInterval(animation);
  }, 380);

}
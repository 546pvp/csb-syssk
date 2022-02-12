/*
Code created by 546pvp and tominoipad

Please don't post this code as yours.

*/

var goldTokens = 0;
var strenght = 0;
var health = 15;
var agility = 0;
console.clear();
var characterName = prompt("Hello! Type your character name here!");
if (characterName === "leouiz") {
  goldTokens += 1500;
  alert("earned 1500 gold tokens");
  var selectedstrenghtByAdmin = prompt("strenght >>");
  strenght = parseInt(selectedstrenghtByAdmin, 10);
}
alert(`Welcome ${characterName}.`);
var starterKits = [
  " Archer: have bow",
  " Knight: have sword",
  " Magican: can create potions"
];
var inventory = [];
var viewG = document.getElementById("viewG");
var viewI = document.getElementById("viewI");
viewI.onclick = function () {
  alert(inventory);
};
viewG.onclick = function () {
  alert(goldTokens);
};
//kit selection

var selectedKit = prompt(`Select a kit >>> ${starterKits}`);
if (selectedKit === "archer") {
  inventory.push("Bow");
  strenght += 3;
  agility += 12;
}
if (selectedKit === "knight") {
  inventory.push("Sword");
  agility += 6;
}
if (selectedKit === "magican") {
  inventory.push("Potion book");
  agility += 9;
}

//story

if (
  selectedKit === "archer" ||
  selectedKit === "knight" ||
  selectedKit === "magican"
) {
  var confirmJobPath1 = confirm(
    "Your king wants you to get the legendary ork for a big bounty. You take it or you don't?"
  );
  if (confirmJobPath1 === true) {
    alert("Half of your bounty you already got now. + 50 gold tokens");
    goldTokens += 50;
  }
  if (confirmJobPath1 === false) {
    alert("The king got angry. He wants to hang you!");
    var marketOrWoodsPath = prompt(
      "One of his guards saw you. what you will do? Run to the woods or fight. (run / fight)"
    );
    if (marketOrWoodsPath === "fight") {
      var guardofmarketOrWoodsPathStrenght = 2;
      if (strenght > guardofmarketOrWoodsPathStrenght) {
        alert("You had killed the guard and earned knife and 10 gold tokens");
        goldTokens += 10;
        inventory.push(" Knife");

        if (strenght < marketOrWoodsPath) {
          alert("You lose");
          location.reload();
        }
      }
    }
    if (marketOrWoodsPath === "run") {
      var apologizeorkill = prompt(
        "You ran through the city with a guard right behind you, and when you run to alley with nearly no one. You lose a guard and because of inattention collide with a man. What would you do apologize or try to kill him? (apologize / kill)"
      );
      if (apologizeorkill === "apologize") {
        var tellthruthorlie = prompt(
          "You apologized. He is an old man who take a excuse with a smile and says. 'Why are you running like you are being chased by a dragon?'  Will you tell him the truth or will you lie? (truth / lie)"
        );
        if (tellthruthorlie === "truth") {
          alert(
            "You tell him the truth and the man laughs softly.  He will invite you inside his house. 'You know king, he's a little explosive if you want, you can stay here for the night, but I won't hide you anymore.'  He will tell you and take you to a small room where you can sleep.  Satisfied, you lie down on the bed."
          );
          var escapethroughtwindow = prompt(
            "You was sleeping peacefully and suddenly you hear some noises from outside. You slightly get next to doors and listen. “Have you seen a man with brown hair, bow and a green robe somewhere there?” You hear a deep voice saying. “No I’m most of time helping in the field.” The man who help you says. And suddenly it occurs to you. Guards! They are trying to find you! What would you do try to escape by a window(you need agility at least 10), Try to fight or stay hidden? "
          );
        }
      }
    }
  }
}

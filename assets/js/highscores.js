console.log("sup")

var highscoreHistory = JSON.parse(localStorage.getItem("highscores"));
console.log(highscoreHistory)

var containerEl = document.querySelector(".container")

highscoreHistory.forEach((item) => {
    var newP = document.createElement("p");
    newP.textContent = item.initials + " - " + item.score
    containerEl.append(newP)
})
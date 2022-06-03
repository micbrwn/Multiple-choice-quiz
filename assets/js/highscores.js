
var highscoreHistory = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscoreHistory)

var containerEl = document.querySelector(".container")

highscoreHistory.forEach((item) => {
    var newEl = document.createElement("li");
    newEl.textContent = item.initials + " - " + item.score
    containerEl.append(newEl)
})

// read from local storage to get highscores array to convert to array of highscore objects
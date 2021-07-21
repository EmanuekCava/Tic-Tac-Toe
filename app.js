// BUTTONS

var topLeft = document.getElementById("button-top-left")
var topButton = document.getElementById("button-top")
var topRight = document.getElementById("button-top-right")
var left = document.getElementById("button-left")
var center = document.getElementById("button-center")
var right = document.getElementById("button-right")
var bottomLeft = document.getElementById("button-bottom-left")
var bottom = document.getElementById("button-bottom")
var bottomRight = document.getElementById("button-bottom-right")

// COLUMNS

var teamTopLeft = document.getElementById("team-top-left")
var teamTop = document.getElementById("team-top")
var teamTopRight = document.getElementById("team-top-right")
var teamLeft = document.getElementById("team-left")
var teamCenter = document.getElementById("team-center")
var teamRight = document.getElementById("team-right")
var teamBottomLeft = document.getElementById("team-bottom-left")
var teamBottom = document.getElementById("team-bottom")
var teamBottomRight = document.getElementById("team-bottom-right")

// WIN

var mainWin = document.getElementById("container-win")
var cardWin = document.getElementById("container-card")
var again = document.getElementById("again")

again.addEventListener("click", () => {
    window.location.reload()
})

// GAME

var team = true;
var count = 0;

topLeft.addEventListener("click", () => {

    // PLAYING

    topLeft.remove()
    if(team) {
        teamTopLeft.innerHTML += "X";
        teamTopLeft.style.color = "red";
        team = false;
    } else {
        teamTopLeft.innerHTML += "O";
        teamTopLeft.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
topButton.addEventListener("click", () => {

    // PLAYING

    topButton.remove();
    if(team) {
        teamTop.innerHTML += "X";
        teamTop.style.color = "red";
        team = false;
    } else {
        teamTop.innerHTML += "O";
        teamTop.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }

})
topRight.addEventListener("click", () => {

    // PLAYING

    topRight.remove()
    if(team) {
        teamTopRight.innerHTML += "X";
        teamTopRight.style.color = "red";
        team = false;
    } else {
        teamTopRight.innerHTML += "O";
        teamTopRight.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
left.addEventListener("click", () => {

    // PLAYING

    left.remove()
    if(team) {
        teamLeft.innerHTML += "X";
        teamLeft.style.color = "red";
        team = false;
    } else {
        teamLeft.innerHTML += "O";
        teamLeft.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
center.addEventListener("click", () => {

    // PLAYING

    center.remove()
    if(team) {
        teamCenter.innerHTML += "X";
        teamCenter.style.color = "red";
        team = false;
    } else {
        teamCenter.innerHTML += "O";
        teamCenter.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamToteamToppLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
right.addEventListener("click", () => {

    // PLAYING

    right.remove()
    if(team) {
        teamRight.innerHTML += "X";
        teamRight.style.color = "red";
        team = false;
    } else {
        teamRight.innerHTML += "O";
        teamRight.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
bottomLeft.addEventListener("click", () => {

    // PLAYING

    bottomLeft.remove()
    if(team) {
        teamBottomLeft.innerHTML += "X";
        teamBottomLeft.style.color = "red";
        team = false;
    } else {
        teamBottomLeft.innerHTML += "O";
        teamBottomLeft.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
bottom.addEventListener("click", () => {

    // PLAYING

    bottom.remove()
    if(team) {
        teamBottom.innerHTML += "X";
        teamBottom.style.color = "red";
        team = false;
    } else {
        teamBottom.innerHTML += "O";
        teamBottom.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})
bottomRight.addEventListener("click", () => {

    // PLAYING

    bottomRight.remove()
    if(team) {
        teamBottomRight.innerHTML += "X";
        teamBottomRight.style.color = "red";
        team = false;
    } else {
        teamBottomRight.innerHTML += "O";
        teamBottomRight.style.color = "green";
        team = true;
    }

    // Win!

    if((teamTopLeft.innerHTML == teamTop.innerHTML && teamTopLeft.innerHTML == teamTopRight.innerHTML && teamTop.innerHTML == teamTopRight.innerHTML)
    || (teamTopLeft.innerHTML == teamLeft.innerHTML && teamTopLeft.innerHTML == teamBottomLeft.innerHTML && teamLeft.innerHTML == teamBottomLeft.innerHTML)
    || (teamTopLeft.innerHTML == teamCenter.innerHTML && teamTopLeft.innerHTML == teamBottomRight.innerHTML && teamCenter.innerHTML == teamBottomRight.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamTop.innerHTML == teamCenter.innerHTML && teamTop.innerHTML == teamBottom.innerHTML && teamCenter.innerHTML == teamBottom.innerHTML) {      
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTop.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if((teamTopRight.innerHTML == teamRight.innerHTML && teamTopRight.innerHTML == teamBottomRight.innerHTML && teamRight.innerHTML == teamBottomRight.innerHTML)
    || (teamTopRight.innerHTML == teamCenter.innerHTML && teamTopRight.innerHTML == teamBottomLeft.innerHTML && teamCenter.innerHTML == teamBottomLeft.innerHTML)) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamTopRight.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }
    if(teamLeft.innerHTML == teamCenter.innerHTML && teamLeft.innerHTML == teamRight.innerHTML && teamCenter.innerHTML == teamRight.innerHTML) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `TEAM ${teamLeft.innerHTML} WIN!!`;
        cardWin.appendChild(teamWin)
        count = 0;
    }

    count++;

    if(count == 9) {
        var teamWin = document.createElement("p")
        mainWin.style.display = "flex";
        mainWin.style.fontSize = "40px";
        teamWin.innerHTML = `DRAW`;
        cardWin.appendChild(teamWin)
    }
})

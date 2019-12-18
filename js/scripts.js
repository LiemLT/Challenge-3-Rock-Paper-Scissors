function computerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function Winner(yourChoice, botChoice) {
    let rpsDB = {
        "rock": { "rock": 0.5, "paper": 0, "scissors": 1 },
        "paper": { "rock": 1, "paper": 0.5, "scissors": 0 },
        "scissors": { "rock": 0, "paper": 1, "scissors": 0.5 },
    }
    let yourScore = rpsDB[yourChoice][botChoice];
    let botScore = rpsDB[botChoice][yourChoice];
    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return { "message": "You lost", "color": "red" };
    } else if (yourScore === 0.5) {
        return { "message": "You tied", "color": "yellow" };
    } else {
        return { "message": "You won", "color": "green" };
    }
}

function rpgFrontEnd(humanImageChoice, botImageChoice, Message) {
    let imageDB = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    // Remove all the original images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    // Show human choice image
    let humanDiv = document.createElement("div");
    humanDiv.innerHTML = `<img src="${imageDB[humanImageChoice]}" height=150 width=150>`;
    document.getElementById("imageBox").appendChild(humanDiv);
    
    // Show final message
    let messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<h1 style="color: ${Message["color"]}; font-size: 60px;">${Message["message"]}</h1>`;
    document.getElementById("imageBox").appendChild(messageDiv);

    // Show bot choice image
    let botDiv = document.createElement("div");
    botDiv.innerHTML = `<img src="${imageDB[botImageChoice]}" height=150 width=150>`;
    document.getElementById("imageBox").appendChild(botDiv);

}

function rpsGame(humanChoice) {
    let yourChoice = humanChoice.id;
    console.log("Human choice: ", yourChoice);

    let botChoice = computerChoice();
    console.log("Bot choice: ", botChoice);

    let result = Winner(yourChoice, botChoice);
    console.log(result);

    let message = finalMessage(result);
    console.log(message);

    rpgFrontEnd(yourChoice, botChoice, message);
}


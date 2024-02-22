document.addEventListener("DOMContentLoaded", function() {
    // Function to roll dice and declare winner
    function rollDiceAndDeclareWinner() {
        var randomNumber1 = Math.floor((Math.random() * 6) + 1);
        var randomNumber2 = Math.floor((Math.random() * 6) + 1);

        var newImage1 = "./images/dice" + randomNumber1 + ".png";
        var newImage2 = "./images/dice" + randomNumber2 + ".png";

        document.querySelectorAll(".dice img")[0].setAttribute("src", newImage1);
        document.querySelectorAll(".dice img")[1].setAttribute("src", newImage2);

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").textContent = "Player One Wins!";
        } else if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").textContent = "It Is A Draw!";
        } else {
            document.querySelector("h1").textContent = "Player Two Wins!";
        }
    }

    // Initially show "Refresh Me!"
    document.querySelector("h1").textContent = "Refresh Me!";

    // Call rollDiceAndDeclareWinner when the page is refreshed
    rollDiceAndDeclareWinner();
});

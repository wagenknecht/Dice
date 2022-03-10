(function () {
    function init() {
        var button = document.getElementById('dice');
        button.addEventListener('click', wurfeln);
    }

    function wurfeln() {
        console.log("Hello");
        var rolledDice = Math.floor(Math.random() * 6)+1;
        document.getElementById('ergebnis').innerText = rolledDice;
    }
    document.addEventListener('DOMContentLoaded', init);
}())
// THIS IS THE WORKING POPUP.JS
function DisplayMessage() {
    alert('Time To Stand Up');
}
    
// Attach an event listener to the button
document.getElementById('displayButton').addEventListener('click', function() {

    let seconds = parseInt(document.getElementById('secondsInput').value);
    let countdownDisplay = document.getElementById('countdownDisplay');

    let timer = setInterval(function() {
        countdownDisplay.textContent = seconds + ' seconds remaining';
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            DisplayMessage();
        }
    }, 1000);

});
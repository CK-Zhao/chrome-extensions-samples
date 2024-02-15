// Function to display message in console
function displayMessage() {
    console.log('Time To Stand Up');
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === 'setReminder') {
        let seconds = parseInt(request.seconds);
        if (isNaN(seconds) || seconds <= 0) {
            sendResponse({ error: 'Please enter a valid number of seconds.' });
        } else {
            chrome.alarms.create('standUpReminder', { delayInMinutes: seconds / 60 });
            sendResponse({ success: true });
        }
    }
});

// Add event listener for the alarm
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'standUpReminder') {
        displayMessage();
    }
});
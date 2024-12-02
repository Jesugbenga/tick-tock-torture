// Set up the alarm
chrome.alarms.create('Tick-Tock Torture', {
    periodInMinutes: 1
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'Tick-Tock Torture') {
        chrome.storage.local.get(['alarmActive'], (result) => {
            if (result.alarmActive) {
                chrome.notifications.create('procrastination-notif', {
                    type: 'basic',
                    iconUrl: 'icons/icon16.png',
                    title: "Hello, Skibidi!",
                    message: "Time to complete a challenge to turn off the alarm!",
                    priority: 2
                });

                chrome.windows.create({
                    url: 'challenge.html',
                    type: 'popup',
                    width: 600,
                    height: 350
                });
            }
        });
    }
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'challengeCompleted') {
        // Stop the sound when the challenge is completed
        chrome.runtime.sendMessage({ action: 'stopSound' });
    }
});
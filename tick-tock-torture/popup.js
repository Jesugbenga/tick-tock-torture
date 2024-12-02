// Variables for timer and sounds
let studyTimer;
let isTimerRunning = false;
let minutes = 0;
let seconds = 0;
let url = chrome.runtime.getURL('sounds/chill-guy.mp3')
let lofiAudio = new Audio(url); 

// Start study timer
document.getElementById('startStudyTimer').addEventListener('click', () => {
    const studyMinutes = document.getElementById('studyMinutes').value;
    
    // Ensure the input is a valid number
    if (studyMinutes && studyMinutes > 0) {
        minutes = parseInt(studyMinutes);
        seconds = 0;
        displayMessage(`Study timer set for ${minutes} minutes. Stay focused!`);
        startCountdown();
    } else {
        displayMessage('Please enter a valid number of minutes!');
    }
});

document.getElementById('resetStudyTimer').addEventListener('click', () => {
    clearInterval(studyTimer);
    isTimerRunning = false;
    document.getElementById('countdownDisplay').textContent = '00:00';
});

function startCountdown() {
    if (isTimerRunning) return; // Prevent multiple timers from running at once
    isTimerRunning = true;

    studyTimer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(studyTimer);
                isTimerRunning = false;
                displayMessage('Time\'s up! Great job focusing!');
                chrome.runtime.sendMessage({ action: 'playSound' }); // Play alarm sound
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        updateCountdownDisplay();
    }, 1000); // Update every second
}

function updateCountdownDisplay() {
    const minuteStr = minutes < 10 ? '0' + minutes : minutes;
    const secondStr = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('countdownDisplay').textContent = `${minuteStr}:${secondStr}`;
}

// Play Lo-Fi music
document.getElementById('playLofi').addEventListener('click', () => {
    if (!lofiAudio) {
        displayMessage('Lo-Fi track not found.');
        return;
    }
    lofiAudio.loop = true; // Enable looping
    lofiAudio.play();
    displayMessage('Lo-Fi music started. Relax and focus!');
});

// Stop Lo-Fi music
document.getElementById('stopLofi').addEventListener('click', () => {
    if (lofiAudio) {
        lofiAudio.pause();
        lofiAudio.currentTime = 0; // Reset to start
        displayMessage('Lo-Fi music stopped.');
    }
});

// Start alarm
document.getElementById('startAlarm').addEventListener('click', () => {
    chrome.storage.local.set({ alarmActive: true });
    displayMessage('Alarm started. You will be challenged every 10 minutes!');
});

// Stop alarm
document.getElementById('stopAlarm').addEventListener('click', () => {
    chrome.storage.local.set({ alarmActive: false });
    displayMessage('Alarm stopped. Stay productive!');
});

// Display messages in HTML
function displayMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.style.padding = '10px';
    messageContainer.style.backgroundColor = '#222';
    messageContainer.style.color = '#fff';
    messageContainer.style.borderRadius = '10px';
    messageContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    messageContainer.style.marginTop = '10px';
    messageContainer.style.fontFamily = 'Arial, sans-serif';

    // Remove message after 5 seconds
    setTimeout(() => {
        messageContainer.textContent = '';
    }, 10000);
}

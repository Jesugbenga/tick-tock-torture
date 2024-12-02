let url = chrome.runtime.getURL('sounds/for-the-rizzler-made-with-Voicemod.mp3')
let audio = new Audio(url)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'playSound') {
    audio.loop = false;
    audio.play();
  } else if (request.action === 'stopSound') {
    audio.pause();
    audio.currentTime = 0;
  }
});
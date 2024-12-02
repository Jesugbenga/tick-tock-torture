let attempts = 0; // Track attempts for the current question
let { question, answer } = generateMathQuestion();
document.getElementById('question').textContent = `What is ${question}?`;

// Preload failure and success sounds
const failureSounds = [
  new Audio(chrome.runtime.getURL('sounds/oh-no-no-no-no-laugh.mp3')),
  new Audio(chrome.runtime.getURL('sounds/galaxy-meme.mp3')),
  new Audio(chrome.runtime.getURL('sounds/goofy-ahh-sounds.mp3')),
  new Audio(chrome.runtime.getURL('sounds/wait-wait-wait-what-the-hell-legend-sound.mp3')),
  new Audio(chrome.runtime.getURL('sounds/spongebob-fail.mp3'))
];
const firstTrySuccessSound = new Audio(chrome.runtime.getURL('sounds/fein-fein-fein-fein.mp3'));
const retrySuccessSound = new Audio(chrome.runtime.getURL('sounds/kendrick-mustard.mp3'));

// Preload image URLs for corner display
const cornerImages = [
  chrome.runtime.getURL('icons/angry.png'),
  chrome.runtime.getURL('icons/you-didnt-have-to-cut.jpg'),
  chrome.runtime.getURL('icons/icon48.png'),
  chrome.runtime.getURL('icons/caseoh.jpg'),
  chrome.runtime.getURL('icons/skibidi toilet.jpg')
];

// Function to display images at the four corners of the screen
function displayCornerImages() {
  cornerImages.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.position = 'fixed';
    img.style.width = '100px';
    img.style.height = '100px';

    switch (index) {
      case 0: // Top-left corner
        img.style.top = '20';
        img.style.left = '20';
        break;
      case 1: // Top-right corner
        img.style.top = '20';
        img.style.right = '20';
        break;
      case 2: // Bottom-left corner
        img.style.bottom = '20';
        img.style.left = '20';
        break;
      case 3: // Bottom-right corner
        img.style.bottom = '20';
        img.style.right = '20';
        break;
    }

    document.body.appendChild(img);
    // Remove the image after 7 seconds
    setTimeout(() => img.remove(), 7000);
  });
}

// Function to play a sound for 7 seconds
function playSoundForDuration(audio, duration = 7000) {
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    }, duration);
}

// Event listener for answer submission
document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === answer) {
        if (attempts === 0) {
            playSoundForDuration(firstTrySuccessSound); // Play first-try success sound
        } else {
            playSoundForDuration(retrySuccessSound); // Play success-after-retries sound
        }
        alert('Correct! You can now continue your work.');
        displayCornerImages(); // Show images
        chrome.runtime.sendMessage({ action: 'challengeCompleted' });
        window.close();
    } else {
        attempts++;
        if (attempts < 5) {
            playSoundForDuration(failureSounds[attempts - 1]); // Play the appropriate failure sound
            alert(`Incorrect. Try again! (${attempts}/5 attempts used)`);
        } else {
            // Generate a new question after 5 failed attempts
            playSoundForDuration(failureSounds[4]);
            alert('You have used all attempts. Generating a new question...');
            attempts = 0;
            ({ question, answer } = generateMathQuestion());
            document.getElementById('question').textContent = `What is ${question}?`;
        }
    }
});

// Generate a random math question
function generateMathQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = Math.random() < 0.5 ? '+' : '-';
  const question = `${num1} ${operator} ${num2}`;
  const answer = operator === '+' ? num1 + num2 : num1 - num2;
  return { question, answer };
}

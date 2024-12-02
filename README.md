# Tick-Tock Torture: A Study Timer & Productivity Alarm Chrome Extension

Tick-Tock Torture is a Chrome extension designed to keep you focused, productive, and entertained. It combines a **study timer**, **ambient Lo-Fi music player**, and a **challenge-based productivity alarm** to make your study sessions more engaging and efficient.

## Features

1. **Study Timer**:  
   Set a timer to keep track of your study sessions with real-time countdowns displayed in minutes and seconds.

2. **Ambient Lo-Fi Music**:  
   Play relaxing Lo-Fi music to create the perfect study environment. Includes play and stop controls.

3. **Productivity Alarm**:  
   Set periodic alarms to keep yourself on task. The alarms include interactive challenges to ensure you're staying productive.

4. **Challenge Mode**:  
   When an alarm goes off, complete a math-based challenge to turn it off, adding a fun twist to staying focused.

---

## Installation Instructions

Follow these steps to download and install the extension:

1. **Download the Repository**:  
   Clone or download the project from GitHub:

   ```bash
   git clone https://github.com/your-username/tick-tock-torture.git
   ```

   Alternatively, you can download the ZIP file directly from GitHub and extract it.

2. **Load the Extension in Chrome**:  
   - Open **Google Chrome**.
   - Navigate to `chrome://extensions/` in the address bar.
   - Enable **Developer Mode** using the toggle in the top-right corner.
   - Click on the **Load Unpacked** button.
   - Select the project folder you cloned or extracted.

3. **Start Using the Extension**:  
   - Once loaded, the extension's icon will appear in the Chrome toolbar.
   - Click on the icon to access the extension's features.

---

## Usage Instructions

1. **Open the Extension**:  
   Click on the Tick-Tock Torture icon in your Chrome toolbar.

2. **Study Timer**:  
   - Input the desired study duration in minutes.
   - Click **Start Timer** to begin.
   - The countdown will appear in real-time. Use **Reset Timer** to stop and reset the timer.

3. **Ambient Sounds**:  
   - Click **Play Lo-Fi** to start the relaxing music.
   - Use **Stop Lo-Fi** to pause the music.

4. **Productivity Alarm**:  
   - Click **Start Alarm** to activate periodic challenges (alarms every 2 minutes by default).
   - Use **Stop Alarm** to deactivate the alarms.

5. **Challenge Mode**:  
   - When an alarm goes off, complete the math challenge displayed in the popup.
   - Enter the answer and click **Submit**. A correct answer will stop the alarm.

---

## Project Structure

```
tick-tock-torture/
├── icons/              # Icons for the extension
├── sounds/             # Audio files for alarms and Lo-Fi music
├── styles.css          # Styling for the extension
├── popup.html          # Main UI for the extension
├── popup.js            # Logic for the study timer and alarm
├── challenges.html     # UI for the challenge popup
├── challenges.js       # Logic for handling challenges
├── manifest.json       # Chrome extension configuration
└── README.md           # Project documentation
```

---

## Future Enhancements

- Add support for Pomodoro-style timers with breaks.
- Include more ambient sound options.
- Add user-customizable challenge difficulty levels.
- Enable storing session data to track productivity over time.

---

## License

This project is open-source and available under the [Apache License](LICENSE).

---

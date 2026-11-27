# Futura Calendar

A minimalist dark-themed personal calendar and habit tracker designed to set daily goals, track your consistency, and keep you focused on what matters.

Available as a Windows desktop app and as a plain web page. The interface is in Italian.

## Features

* **Daily Goals & Checklists:** Add, check off, and manage tasks for any selected day.
* **Recurring Goals:** Goals that appear on their own every day, on weekdays, on weekends, or on the days you choose.
* **Smart Rules:** Optionally carry unfinished goals over to the next day, and let a day turn green by itself (or ask you first) when every goal is done.
* **Day Rating System:** Right-click any day to mark it as Positive, Neutral, or Negative, and flag the demanding ones as **Heavy days** so they weigh more in the percentages.
* **Monthly & Yearly Analytics:** Real-time progress rings and counters tracking your total rated days and success rate, with configurable weights for neutral and heavy days.
* **Advanced Stats:** Current and best green streak, worst run of non-green days, how often you string together 2+ off days, and your average reaction time to get back to green after a negative day.
* **Dual Calendar Mode:** Switch seamlessly between the standard Gregorian calendar and a 13-month × 28-day calendar. Goals and ratings are tied to the real date, so they stay in sync in both modes.
* **Weekdays & Holidays:** Optional MON–SUN header with days aligned to the real weekday, Italian national holidays and religious observances (Easter included), and a **Today** button to jump back to the current day.
* **Settings Panel:** Click the gear to change the motto (with different phrases for streaks and bad days), choose the tone of the messages, and tune the rules, the calendar display and the colour intensity.
* **Backup & Reset:** Export everything to a `.json` file, restore it later, or reset only part of a year. Destructive actions can ask for confirmation first.
* **Persistent Sidebar Note:** A built-in scratchpad saved automatically and kept until you change it.

## Getting Started

### Desktop app (Windows)

1. Open the [Releases](../../releases) page and download the latest version.
2. Choose one of the two options:
   * `Futura Calendar 1.1.0.exe` is the portable version: a single file, no installation.
   * `Futura Calendar 1.1.0.zip` contains the app folder: extract it and run the `.exe` inside.
3. Double-click to start. No browser and no internet connection are needed.

> **Windows SmartScreen:** the app is not digitally signed, so on first launch Windows may show a "protected your PC" warning. Click **More info → Run anyway**, or right-click the file, open **Properties** and tick **Unblock**. You only need to do this once.

### In the browser

1. Clone or download this repository.
2. Open `app/index.html` in any modern web browser.
3. No external dependencies or server required.

## Your data

Everything is stored locally on your computer (in the app's `localStorage`) and is never sent anywhere.

The browser version and the desktop app keep separate data. To move your data between them, or to keep a safety copy, use **Settings → Data → Export**, then **Import** on the other side.

## Development

You need [Node.js](https://nodejs.org) (LTS version).

```
npm install
npm start        # opens the app in a window
npm run dist     # builds the installer, the portable .exe and the .zip into release/
```

`npm run dist` is meant to be run on Windows.

### Project structure

```
app/             interface: index.html, style.css
build/           app icon (icon.ico)
main.js          Electron entry point
afterPack.js     writes the icon and version info into the .exe
package.json     scripts and build configuration
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

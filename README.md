# OpenRCT2 Refurbish Manager (Enhanced Edition)

An automated attraction maintenance plugin for [OpenRCT2](https://openrct2.io) that monitors aging rides, manages refurbishments, restores reliability, and prevents frequent breakdowns—without micromanagement.

---

## 🌟 Credits & Acknowledgements

This project is an enhanced and updated fork based on the original **Refurbish Manager** created by **[Ellis Clayton](https://github.com/ellsclytn)**.

* **Original Repository:** [ellsclytn/openrct2-refurbish-manager](https://github.com/ellsclytn/openrct2-refurbish-manager)
* **OpenRCT2 Plugins Listing:** [OpenRCT2 Plugins Catalog](https://openrct2plugins.org/plugin/R_kgDOSpLlVg/openrct2-refurbish-manager)

All credit for the original design, architecture, and core integration goes to Ellis Clayton. This version extends the original with new operational modes, fail-safes, and critical bug fixes.

---

## ⚙️ How It Works

In OpenRCT2, as attractions grow older, their breakdown rate increases and guest popularity/excitement decreases. Refurbishing an attraction resets its reliability stats and minimizes frequent breakdowns. However, OpenRCT2 only permits a ride to be refurbished (`ridedemolish` with modification type `1`) when:
1. The ride is closed.
2. All vehicles are docked in stations.
3. No guests are on board the vehicles.

### OpenRCT2 Closure Mechanics & Refurbishment Modes

This plugin leverages OpenRCT2's internal ride state mechanics to offer two distinct refurbishment styles:

1. **Realistic Mode (Default / `Instant refurbish` unchecked)**:
   * **Single Close**: When a ride is closed once, the queue line entrance shuts down, but trains currently traversing the circuit complete their lap naturally and riders disembark at the exit station.
   * **Daily Emptiness Check**: The plugin queries OpenRCT2 each in-game day (`queryAction`) to verify if the attraction has emptied out.
   * **Renewal & Reopen**: Once zero passengers remain on track, the refurbishment action is executed, reliability is restored, and the ride automatically re-opens.
   * **30-Day Fail-Safe Timeout**: If a ride is blocked or unable to empty within 30 in-game days, the plugin cancels the operation, reopens the attraction, and reports a notification to prevent indefinite park disruption.

2. **Instant Mode (`Instant refurbish (Force empty)` checked)**:
   * **Double Close**: Triggering close twice on a ride activates OpenRCT2's internal vehicle reset, instantly returning vehicles to the station and disembarking all passengers to the exit.
   * **Immediate Refurbishment**: The ride is refurbished immediately in a single step and reopened without waiting for trains to complete their track circuit.

---

## 🎛️ Settings & UI Controls

Access the configuration window at any time from the **Map/Park dropdown menu** in the top bar under **Refurbish Manager**.

```
+------------------------------------------------+
| Refurbish Manager (v1.2.0)                     |
+------------------------------------------------+
| [Auto refurbishment]                           |
|   [x] Enabled                                  |
|   [ ] Instant refurbish (Force empty)          |
|   Min. ride age (months)   [  18  ]            |
|   Min. cash                [  $0  ]            |
|                                                |
| [Manual refurbishment]                         |
|   [ Roller Coaster 1                v ]        |
|   [            Refurbish now          ]        |
+------------------------------------------------+
```

### 1. Auto Refurbishment

* **Enabled**: Toggles automatic daily background scanning. When turned on, the plugin inspects attractions daily.
* **Instant refurbish (Force empty)**:
  * **Unchecked (Recommended for realism)**: Closes the entrance, lets riders on track finish their ride and exit naturally, tests for complete clearance daily, refurbishes, and re-opens.
  * **Checked (Instant gratification)**: Immediately resets vehicles, disembarks all riders, and refurbishes the ride in 1 tick.
* **Min. ride age (months)**: Minimum age (in in-game months) an attraction must reach before it becomes eligible for refurbishment (default: `18` months).
* **Min. cash**: Minimum park cash balance required before auto-refurbishment will trigger. Prevents refurbishments when your park is running low on funds.

### 2. Manual Refurbishment

* **Ride Dropdown**: Displays a list of all refurbishable attractions in your park.
* **Refurbish now**: Immediately triggers refurbishment on the selected ride using the currently configured mode (Instant or Realistic).

---

## 🚀 Enhancements & Bug Fixes in v1.2.0

* **Dual-Pipeline Architecture**: Added the `Instant refurbish (Force empty)` option so players can freely choose between ultra-realistic ride clearing and immediate instant reset.
* **Resolved `minCash` Default Barrier**: Fixed a bug where `minCash` defaulted to `1,000,000` (internal cent units = \$100,000), which previously prevented auto-refurbishment from running unless the player had \$100,000 in cash. Default is now `$0` with automatic legacy state migration.
* **Manual Dropdown First-Click Fix**: Fixed an issue where clicking `Refurbish now` immediately after opening the window would not register the first ride in the dropdown.
* **Oldest-Ride Priority Queue**: Replaced the random candidate selection with an age-sorted priority queue (`b.age - a.age`), ensuring that the most worn-out, breakdown-prone rides are serviced first.
* **Safety Guards & Crash Prevention**:
  * Added null-checks to handle attractions deleted or demolished by the player during refurbishment.
  * Added a 30-day fail-safe timeout to prevent rides from remaining closed indefinitely if an obstacle or vehicle breakdown prevents passenger discharge.

---

## 📥 Installation

1. Download **`refurbish-manager.js`** from the [`dist/`](./dist/refurbish-manager.js) folder or the GitHub Releases page.
2. Move `refurbish-manager.js` into your OpenRCT2 `plugin` directory:
   * **Windows**: `Documents\OpenRCT2\plugin\`
     *(e.g. `C:\Users\<YourUsername>\Documents\OpenRCT2\plugin\`)*
   * **macOS**: `~/Library/Application Support/OpenRCT2/plugin/`
   * **Linux**: `~/.config/OpenRCT2/plugin/`
3. Launch OpenRCT2 (or re-load your save file). The plugin will be active immediately.

---

## 🛠️ Development & Building from Source

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* `npm`

### Setup & Build

```bash
# Clone the repository
git clone https://github.com/<your-username>/openrct2-refurbish-manager.git
cd openrct2-refurbish-manager

# Install dependencies
npm install

# Build for production (outputs to ./dist/refurbish-manager.js)
npm run build

# Build for development (automatically copies to your local OpenRCT2 plugin folder)
npm run build:dev

# Watch mode for active development
npm start
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
Copyright (c) 2024 Ellis Clayton.  
Copyright (c) 2026 Enhanced Edition Contributors.

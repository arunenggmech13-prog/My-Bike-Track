# My Bike Track 🏍️

A Progressive Web App (PWA) for tracking bike fuel consumption, mileage, maintenance, spares costs, and trips.

## Features

### 📊 Dashboard
- Real-time mileage tracking
- Fuel efficiency (km/l) calculation
- Total fuel cost tracking
- Next service due status
- Recent fuel entries overview
- Service maintenance status

### ⛽ Fuel Management
- Log fuel entries with date, mileage, quantity, and price
- Automatic cost calculation
- Fuel efficiency tracking
- Complete fuel history with notes
- Delete fuel entries

### 🔧 Service Management
- Record service history with type and cost
- Track next service due mileage
- Multiple service types (Regular, Major, Oil Change, etc.)
- Service notes and details
- Service overdue alerts on dashboard

### 🛠️ Spares & Parts Tracking
- Record all spares and parts purchases
- Categorize by component (Engine, Brakes, Suspension, etc.)
- Cost tracking and summaries
- Purchase history with warranty notes
- Category-wise cost breakdown

### 🚗 Trip Recording
- Log all your trips with origin and destination
- Track distance and mileage
- Record trip duration
- Trip statistics (total trips, total distance, average distance)
- Trip history with notes

### 📱 PWA Features
- Works offline - all data stored locally
- Installable on home screen
- Native app-like experience
- Fast loading with service worker caching
- Works on iOS and Android

### 💾 Data Management
- Export data as JSON for backup
- Import data to restore or migrate
- Clear all data option
- Bike information storage (name, model, year)

## Installation

### Web Browser
1. Open the app in any modern web browser
2. Look for "Install" or "Add to Home Screen" option
3. Click to install the PWA

### Android
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Select "Install app" or "Add to Home Screen"

### iOS
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"

## How to Use

### Adding a Fuel Entry
1. Go to **Fuel Entry** tab
2. Fill in:
   - Date of fuel entry
   - Current mileage
   - Fuel quantity (in liters)
   - Fuel price per liter
   - Any notes (optional)
3. Click **Add Fuel Entry**

### Recording Service
1. Go to **Service** tab
2. Enter:
   - Service date
   - Mileage at service
   - Service type
   - Service cost
   - Next service due mileage (optional)
   - Service notes
3. Click **Record Service**

### Adding Spares/Parts
1. Go to **Spares** tab
2. Fill in:
   - Purchase date
   - Part name
   - Category
   - Cost and quantity
   - Warranty/details notes
3. Click **Add Purchase**

### Recording Trips
1. Go to **Trips** tab
2. Enter:
   - Trip date
   - From and to locations
   - Distance traveled
   - Start and end mileage
   - Duration (optional)
   - Trip notes
3. Click **Record Trip**

### Exporting Data
1. Go to **Settings**
2. Click **Export Data (JSON)**
3. File will be downloaded with all your records

### Importing Data
1. Go to **Settings**
2. Click **Import Data**
3. Select a previously exported JSON file
4. Data will be imported (existing data will be replaced)

## Technical Details

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Database**: IndexedDB (Local browser storage)
- **PWA**: Service Worker, Web App Manifest
- **Offline**: Service Worker caching

### Storage
All data is stored locally in your browser using IndexedDB:
- Fuel entries
- Service records
- Spares purchases
- Trip records
- Bike information

### Security
- No data sent to external servers
- All data stays on your device
- HTTPS recommended for PWA installation

## Browser Support

- Chrome/Chromium: Full support
- Firefox: Full support
- Safari: Partial support (limited PWA features)
- Edge: Full support
- Opera: Full support

## Features Coming Soon

- 📈 Advanced analytics and reports
- 📍 Trip location tracking (with map)
- 🔔 Service reminder notifications
- 📧 Email/SMS alerts
- 🌩️ Cloud sync option
- 📊 Export to PDF/Excel
- 🌐 Multi-language support

## Troubleshooting

### App Not Installing
- Ensure you're using HTTPS or localhost
- Clear browser cache
- Try a different browser

### Data Not Saving
- Check if browser storage is enabled
- Check available storage space
- Try clearing browser cache partially

### Service Worker Not Updating
- Use incognito/private browsing mode
- Clear service worker cache manually
- Restart the app

## Tips for Best Performance

1. Keep browser updated
2. Use the app regularly to refresh cache
3. Export data periodically as backup
4. Maintain consistent date entries
5. Use descriptive notes for future reference

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and suggestions.

## Support

For issues, questions, or suggestions, please create an issue on GitHub.

---

Made with ❤️ for bike enthusiasts 🏍️

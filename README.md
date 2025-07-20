# React Native Metacritic App

A React Native app that displays the latest video games and their Metacritic scores, built with Expo and expo-router. This project is ideal for developers who want to learn about building mobile apps with React Native, working with APIs, and creating engaging user interfaces.

---

## 🚀 Features

- **Latest Games Feed:** Fetches and displays the most recent games from Metacritic, including their title, score, description, and cover image.
- **Animated UI:** Uses React Native's `Animated` API to smoothly reveal each game card.
- **Custom Branding:** Includes a custom SVG logo component.
- **Responsive Layout:** Adapts to device safe areas for a polished look on all screens.
- **Loading State:** Shows a loading spinner while fetching data.
- **File-based Navigation:** Uses expo-router for seamless navigation between screens.
- **About Page:** Accessible via navigation link, with project information.

---

## 🛠️ Technologies Used

- **React Native**: For building cross-platform mobile apps.
- **Expo**: For easy development, testing, and deployment.
- **expo-router**: For file-based navigation and routing.
- **Metacritic API**: To fetch game data.
- **React Native Animated API**: For smooth UI animations.
- **Safe Area Context**: To handle device notches and safe areas.
- **Tailwind/nativewind**: For utility-first styling (if enabled).

---

## 📁 Project Structure

```
react-native-metacritic-app/
│
├── app/
│   ├── _layout.js        # App-wide layout and navigation context
│   ├── index.js          # Home screen, renders Main component
│   └── about.js          # About page
├── components/           # UI components (Main, GameCard, Logo, Score)
├── lib/
│   └── metacritic.js     # API functions for fetching game data
├── assets/               # App icons and images
├── app.json              # Expo app configuration
├── package.json          # Project metadata and dependencies
└── ...
```

---

## 🧑‍💻 Educational Highlights

### 1. **Component-Based Architecture**
- The app is split into small, reusable components (`Main`, `GameCard`, `Logo`, `Score`).
- Encourages thinking in terms of UI building blocks.

### 2. **Fetching Data from an API**
- Demonstrates how to use `fetch` and `async/await` to get data from a remote server.
- Shows how to handle loading states and update the UI when data arrives.

### 3. **Using React Hooks**
- Uses `useState` and `useEffect` for state management and side effects.
- Example: Fetching games when the app loads.

### 4. **Animations in React Native**
- Uses the `Animated` API to fade in game cards, making the UI more dynamic and engaging.

### 5. **Styling and Layout**
- Uses `StyleSheet` and/or Tailwind/nativewind for consistent, maintainable styles.
- Handles device safe areas for a professional look.

### 6. **SVG and Custom Graphics**
- Shows how to use SVGs for logos and custom graphics in React Native.

### 7. **File-based Navigation**
- Demonstrates how to use expo-router for scalable, file-based navigation.
- Example: Add a new screen by creating a file in the `app/` directory.

---

## 📦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the app:**
   ```bash
   npm start
   ```
3. **Run on your device:**
   - Use the Expo Go app on your phone, or run on an emulator/simulator.
4. **Navigation setup:**
   - The app uses expo-router for navigation. Ensure your `App.js` contains:
     ```js
     import 'expo-router/entry';
     ```

---

## 🤔 Why is this interesting for devs?
- **Real-world API usage:** Practice working with real data and asynchronous code.
- **Modern React patterns:** Learn hooks, component structure, and state management.
- **Mobile-first thinking:** See how to build for different devices and screen sizes.
- **Animations:** Make your apps feel alive with simple animation techniques.
- **File-based navigation:** Learn scalable navigation patterns with expo-router.

---

## 🆕 Recent Changes

- Migrated to expo-router for navigation
- Moved main UI logic to `app/index.js`
- Added `_layout.js` for consistent layout and navigation context
- Improved About page and navigation links
- Updated project structure for scalability

---

## 📚 Further Learning
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [expo-router Documentation](https://expo.github.io/router/docs/)
- [Metacritic](https://www.metacritic.com/)

---

## 📝 License
This project is for educational purposes only. 
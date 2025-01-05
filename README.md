# Student-Care-App

## Project Overview
A React Native-based mobile application for a student portal that provides:
- User authentication and personalized student profiles.
- Course details and associated subject information.
- Average marks calculation and performance tracking.
- Seamless navigation using bottom tabs.

## Features
- **Login System**: Secure login functionality for students.
- **Profile Page**: Displays student information, including contact details and biological information.
- **Course Page**: Detailed view of the student's enrolled course.
- **Subjects Page**: Lists subjects, marks, and calculates average marks.
- **Bottom Tab Navigation**: Smooth navigation between Profile, Course, and Subject screens.

## Tech Stack
- **React Native**: Framework for building cross-platform mobile applications.
- **React Navigation**: For routing and navigation.
- **React Native Paper**: Material design components for UI.
- **React Native Vector Icons**: Icons for enhancing the user interface.
- **JavaScript**: Programming language for logic and functionality.
- **Expo**: Managed workflow for development and testing.

## Installation

### Prerequisites
- Node.js and npm installed
- Expo CLI installed globally: `npm install -g expo-cli`

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install necessary packages:
   ```bash
   npm install react-native-paper react-native-safe-area-context @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-vector-icons
   ```
4. Start the Expo server:
   ```bash
   npx expo start
   ```
5. Use the Expo Go app or a simulator/emulator to run the app.

## Folder Structure
```
root
├── components
│   ├── LoginPage.js      # Login screen
│   ├── ProfilePage.js    # Student profile screen
│   ├── CoursePage.js     # Course details screen
│   ├── SubjectPage.js    # Subjects and marks screen
├── db
│   ├── StudentsDb.js     # Mock database for student data
├── assets
│   ├── uovlogo.png       # University logo
├── App.js                # Entry point of the application
```

## Usage
1. Launch the app.
2. Log in using student credentials.
3. Navigate between Profile, Course, and Subjects pages using the bottom navigation tabs.

## Dependencies
- `react-native-paper`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`
- `react-native-vector-icons`
- `react-native-safe-area-context`
---



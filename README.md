# React-Native-Find-Tour

This is an example [React Native](https://facebook.github.io/react-native/) app for the find tours base on location search.

## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Table of Contents

* [Available Scripts](#available-scripts)
    * [npm start](#npm-start)
    * [npm test](#npm-test)
    * [npm run ios](#npm-run-ios)
    * [npm run android](#npm-run-android)
    * [npm run eject](#npm-run-eject)
* [API for search Country ](#API-country)
## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.


Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:
##  API-country

we are using [Gisgraphy](https://services.gisgraphy.com)  which an open source API for find locations latitude and longitude. 


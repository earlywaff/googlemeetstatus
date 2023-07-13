# Google Meet Status Checker

This project is a Chrome browser extension that checks the activity status of a Google Meet tab and sends this information to a Node-RED server.

## Installation

1. Clone the repository or download the project archive.

2. Open the Chrome browser and go to `chrome://extensions`.

3. Enable the developer mode by toggling the switch in the top right corner.

4. Click on the "Load unpacked" button and select the project folder.

5. The extension will be installed and appear on the extensions toolbar.

## Usage

1. Open Google Meet in a separate browser tab.

2. The extension will automatically check the activity status of the tab every 10 seconds.

3. If the Google Meet tab is active, the extension will send a request to the Node-RED server with the status set to `true`.

4. If the Google Meet tab is inactive or closed, the extension will send a request to the Node-RED server with the status set to `false`.

5. You can configure the Node-RED server URL by editing the `background.js` file.

## Contribution

If you would like to contribute to the project, please see the CONTRIBUTING.md file for more information on the contribution process.

## License

The project is licensed under the MIT License. See the LICENSE file for details.

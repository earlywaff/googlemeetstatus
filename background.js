chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // When receive a message from the content script
    console.log('Received message:', request);

    fetch('http://10.10.10.20:1880/meet-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
    });
});

// Code by Evan Baldonado. EvanBaldonado.com. Do not remove this credit without prior permission.
// Modified from https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon

document.addEventListener('visibilitychange', function sendGoogleFormBeacon() {
    if (document.visibilityState === 'hidden') {
      
        // See README.md for documentation
        const FORM_ID = ""; // Example: 1FmIpQLSeAJKHg663I9Wf-pLFpKCDTdeLc7W6oc6WaaRgCEo8Qmo0gIa
        const FORM_DATA = ""; // Query string. Example: entry.123456=value1&entry.234567=value2
        const URL = "https://docs.google.com/forms/d/e/" + FORM_ID + "/formResponse?" + FORM_DATA + "&submit=Submit";

        // Send data
        navigator.sendBeacon(URL, FORM_DATA);
    }
});

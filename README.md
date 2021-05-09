# Google Forms Beacon: Overview
This repository contains example code for sending data to a Google Form [using sendBeacon()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) after the user is finished with the page, as determined with visibilitychange. This is preferable to using beforeunload or unload, as explained [here](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/). Overall, this code may be useful if you need to submit data such as analytics or time-tracking, right as the user exits the page.

## Connecting with Google Forms
On the edit page of your Google Form, click the three dots on the upper right, then Select “get pre-filled link.” This link should look like https://docs.google.com/forms/d/e/[1]/[2], where [1] is your form ID, and [2] contains additional information about your form. From [2], select the [query string](https://en.wikipedia.org/wiki/Query_string), where keys are of the form entry.xxx, and values are the values that you want to submit to your form. In your script, Set these values to whatever you wish.

# AppWorks Example - AWNotificationManager

## Contents
1. [About appworks.js](#about-appworksjs)
2. [About this example app](#about-this-example)
3. [Usage](#usage)
4. [Installation](#installation)

## About appworks.js

appworks.js is a javascript (TypeScript) library for building feature rich, hybrid enterprise apps. The OpenText AppWorks platform provides mobile and desktop clients that support apps that utilize appworks.js.

In a mobile environment the library provides access to on-device technology, and in the desktop environment some features of the underlying host OS (operating system) are exposed.

For more information, see the appworks.js repository: https://github.com/opentext/appworks-js

## About this example

This demo app shows the functionality of the client side notifications within the notification manager plugin. You can create a scheduled notification, remove it, and remove all scheduled notifications.

## Usage

#### createClientNotification
````ts
createClientNotification(identifier: string, title: string, subtitle: string, seconds: string, success: any, error: any)
````
Create a client side notification with a title, subtitle and the number of seconds from now.

Parameters:
+ __identifier (string)__: used to uniquely identify a scheduled notification created locally.
+ __title (string)__: the title to appear on the notification.
+ __subtitle (string)__: the subtitle to appear on the notification.
+ __seconds (integer)__: the number of seconds from now until the scheduled notification will appear.
+ __success (function)__: the function that will be called upon successful creation of the notification.
+ __error (function)__: the function that will be called if the notification fails to be created.

Examples
```javascript
// Create the content of the notification any way you see fit
var identifier = 'scheduledNotification1';
var title = 'Unfinished Document';
var subtitle = 'You started a document, but didn\'t finish it.';
var seconds = 60 * 60 * 6; // 6 hours

// Called upon success
var success = function() {
  console.log('notification created');
}

// Called upon error
var error = function(err) {
  console.log(err);
}

// Create an instance of AWNotificationManager if you don't already have one, otherwise reuse an existing one
var nm = new Appworks.AWNotificationManager();
// var nm = getExistingNotificationManager();

// Invoke createClientNotification with the content in this order
nm.createClientNotification(identifier, title, subtitle, seconds, success, error);
```

#### removeClientNotification
````ts
removeClientNotification(identifier: string, success: any, error: any)
````
Remove a scheduled notification with a given identifier that was created with createClientNotification(...).

Parameters:
+ __identifier (string)__: used to uniquely identify a scheduled notification created locally.
+ __success (function)__: the function that will be called upon successful removal of the scheduled notification.
+ __error (function)__: the function that will be called if the scheduled notification fails to be removed.

Examples
```javascript
// Same as the identifier used in the create example
var identifier = 'scheduledNotification1';

var success = function() {
  console.log('notification removed');
}

var error = function(err) {
  console.log(err);
}

// Create an instance of AWNotificationManager if you don't already have one, otherwise reuse an existing one
var nm = new Appworks.AWNotificationManager();
// var nm = getExistingNotificationManager();

// Invoke removeClientNotification with the content in this order
nm.removeClientNotification(identifier, success, error);
```

#### removeAllClientNotifications
````ts
removeAllClientNotifications(success: any, error: any)
````
Remove all scheduled notifications that were created with createClientNotification(...).

Parameters:
+ __success (function)__: the function that will be called upon successful removal of the scheduled notifications.
+ __error (function)__: the function that will be called if the scheduled notifications fail to be removed.

Examples
```javascript
var success = function() {
  console.log('all notifications removed');
}

var error = function(err) {
  console.log(err);
}

// Create an instance of AWNotificationManager if you don't already have one, otherwise reuse an existing one
var nm = new Appworks.AWNotificationManager();
// var nm = getExistingNotificationManager();

// Invoke removeAllClientNotifications with the content in this order
nm.removeAllClientNotifications(success, error);
```

## Installation

This example app contains 3 important objects:
1. app.properties
2. icon.png
3. mobile.zip

#### app.properties
This files defines the app, with the following properties:
+ __displayName__: The display name of the app
+ __description__: A description of the app
+ __version__: The version of the app, e.g. 0.0.1 or 3.4.5 etc
+ __type__: This can be either app or desktop, or both (app,desktop)
+ __awgPlatformVersion__: The target appworks platform, this should be 16
+ __isAvailableOffline__: Allow this app to be used offline, can be true or false

#### icon.png
An icon that represents the app. This will appear in the gateway and on the device. 48x48px is ideal.

#### mobile.zip

This is your web content, such as html, js, css, images and any other assets.
The only essential file in your mobile.zip is index.html, which will be loaded by the appworks webview. Any other files or structure is up to the developer.

##### index.html

When your app is downloaded and installed in an appworks client, the client will place appworks.js, cordova.js and the cordova plugins in the root of your app.

In your html file, please include the following tags before any other javascript tags:

```html
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="appworks.js"></script>
```

#### Zipping and Deploying
1. Zip up the web content into a file named mobile.zip
2. Zip up the following files:
  + app.properties
  + icon.png
  + mobile.zip
3. Name this file in the format:
  + AppName_Version.zip
  + e.g. MyGreatApp_0.0.1.zip
  + __The version number in the filename must match the version number in app.properties__
4. Install the app on the gateway
  + Go to your gateway in a browser
  + sign in
  + go to app installation tab
  + drag and drop MyGreatApp_0.0.1.zip into the box.
  + Once fully deployed, enable the app.

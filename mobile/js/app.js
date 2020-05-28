// Register the deviceready event, called when cordova/appworks is ready to start working with the appworks API
document.addEventListener("deviceready", onDeviceReady, false);
var self = this;

// A global instances of the Apworks.AWNotificationManager. We only want one.
self.notificationManager = null;

// A global array of notifications, so our app can keep track of them.
self.notifications = [];

/**
 * Called when AppWorks is ready
 */
function onDeviceReady() {
}

function createNotification() {
  var identifier = getObject('identifier-create').value;
  var title = getObject('title').value;
  var subtitle = getObject('subtitle').value;
  var seconds = getObject('seconds').value;

  var success = function() {
    out('notification created');
  }

  var error = function(err) {
    out(err);
  }

  var nm =  getNotificationManager();
  nm.createClientNotification(identifier, title, subtitle, seconds, success, error);
}

function removeNotification() {
    var identifier = getObject('identifier-remove').value;
    var success = function() {
      out('notification removed');
    }

    var error = function(err) {
      out(err);
    }

    var nm =  getNotificationManager();
    nm.removeClientNotification(identifier, success, error);
}

function removeAllNotifications() {
    var success = function() {
      out('all notifications removed');
    }

    var error = function(err) {
      out(err);
    }

    var nm =  getNotificationManager();
    nm.removeAllClientNotifications(success, error);
}

/**
 * Get the global notification manager instance, we only want one for our app.
 */
function getNotificationManager() {
  if(self.notificationManager == null) {
    self.notificationManager = new Appworks.AWNotificationManager();
  }
  return self.notificationManager;
}

/*
 * A helper function to output messages to the results element
 */
function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

/*
 * A helper function to get an element by name
 */
function getObject(name) {
  return document.getElementById(name);
}

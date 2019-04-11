$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
          window.location = `feed.html?id=${user.uid}`
      }
    });
  })
let database = firebase.database();
let USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
  $("#logo-navbar, .home-navbar").attr("href", `feed.html?id=${USER_ID}`);
  $("#option-profile, #profile-pic-nav, .profile-navbar").attr(
    "href",
    `profile.html?id=${USER_ID}`
  );

  database.ref(`users/${USER_ID}`).on("value", function(snapshot) {
    let user = snapshot.val();
    $("#navbar-dropdown").html(user.name);
    $("#profile-pic-navbar").attr("src", user.pic);
  });
});

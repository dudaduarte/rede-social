$(document).ready(function () {

  $(function () {
    $('#login-form-link').click(function (e) {
      $("#login-form").delay(100).fadeIn(100);
      $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
      $("#register-form").delay(100).fadeIn(100);
      $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log('logged in')
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
    }
  });

  $('#login-submit').click(login);
  $('#register-submit').click(createUser);
  $('#button-logout').click(logout);

  function login(e) {
    let email = $('#login-email').val();
    let password = $('#login-password').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function () {
        window.location = 'feed.html';
      })
      .catch(function (error) {
        let errorMessage = error.message;

        alert(`Erro: ${errorMessage}`);
      })
    e.preventDefault();
  }

  function createUser(e) {
    e.preventDefault();

    let newUserName = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let newUserConfirmPass = $('#confirm-password').val();

    if (password === newUserConfirmPass) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
          window.location = 'presentation.html';
          alert(`Bem-vindo ${newUserName}`);
        })
        .catch(function (error) {
          let errorMessage = error.message;
          alert(`Erro: ${errorMessage}`);
        })
    } else {
      alert('Senhas digitadas não correspondem entre si. Digite novamente.')
    }
  }

  function logout() {
    firebase.auth()
      .signOut().then(function () {
        window.location = 'index.html';
      }).catch(function (error) {
        // An error happened.
      });
  }

});


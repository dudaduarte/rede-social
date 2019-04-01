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

  let teste = firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log('logged in')
      console.log(firebaseUser);
      return firebaseUser;
    } else {
      console.log('not logged in');
      return false;
    }
  });

  $('#login-submit').click(login);
  $('#register-submit').click(createUser);
  $('#button-logout').click(logout);

  function login(e) {
    e.preventDefault();
    
    let email = $('#login-email').val();
    let password = $('#login-password').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (response) {
        window.location = `feed.html?id=${response.user.uid}`;
      })
      .catch(function (error) {
        let errorMessage = error.message;

        alert(`Erro: ${errorMessage}`);
      })
    e.preventDefault();

    //desativa b.form-btn btn register caso seja vazio
     $('.register-submit').submit(function() {
       if($('.login-password').val()== null || $('.login-submit').val() ==""){
           alert('Campos Obrigatórios');      
           return false;
       }
     });
  }

  function createUser(e) {
    e.preventDefault();

    let newUserName = $('#name').val();
    let newUserDate = $('#age').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let newUserConfirmPass = $('#confirm-password').val();

    if (password === newUserConfirmPass) {

      firebase.database().ref(`users/${user.id}`).push({
        date: newUserDate,
        email: email,
        name: newUserName
      });
      
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (response) {          
          window.location = `feed.html?id=${response.user.uid}`;
          alert(`Bem-vindo ${newUserName}`);
        })
        .catch(function (error) {
          let errorMessage = error.message;
          if (errorMessage == 'auth/weak-password') {
            alert ('Erro: a senha é muito fraca.')
          } else {
          alert(`Erro: ${errorMessage}`);
        }
        })
    } else {
      alert('Senhas digitadas não correspondem entre si. Digite novamente.')
    }
  }

  
  const authGoogleButton = $('#authGoogleButton') 

  $('#authGoogleButton').click(function (event) {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
  });

   const authFacebookButton = $("#authFacebookButton")

  $('#authFacebookButton').click(function (event) {
    event.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
  });

  function signIn(provider) {
    firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken;
        let user = result.user;
        window.location = 'feed.html';
        alert(`Bem-vindo ${displayName}`);
      }).catch(function (error) {
        console.log(error);
        alert('Falha na autenticação');
    });
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


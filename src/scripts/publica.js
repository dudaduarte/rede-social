let database = firebase.database();
let USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function () {

  $('#logo-navbar, #home-navbar').attr('href', `feed.html?id=${USER_ID}`);

    // necessário pesquisar sobre sdk admin do firebase pra isso funcionar \/

    // admin.auth().getUser(USER_ID)
    //     .then(function (userRecord) {
    //         // See the UserRecord reference doc for the contents of userRecord.
    //         console.log("Successfully fetched user data:", userRecord.toJSON());
    //     })
    //     .catch(function (error) {
    //         console.log("Error fetching user data:", error);
    //     });

    $('#btn-share').click(btnShare);

    $('#btn-search').click(function(e){
      e.preventDefault();
      let input = $('#input-search');
      if (input.hasClass('hidden')){
        input.removeClass('hidden');
      } else {
        input.addClass('hidden');
      }
    });

    $('#option-profile, #profile-pic-nav').attr('href', `profile.html?id=${USER_ID}`);

    function messagePost(date, message, user, visibility) {
        $('#posts-container').append(`
        <div class="card gedf-card marg ${visibility}">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="mr-2">
                        <a href="profile.html?id=${USER_ID}"><img class="profile-link rounded-circle" width="45" src="https://picsum.photos/50/50"></a>
                        </div>
                        <div class="ml-2">
                        <a href="profile.html?id=${USER_ID}"><div class="profile-link h5 m-0">${user.name}</div></a>
                            <div class="h7 text-muted">${user.status? user.status : ""}</div>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-ellipsis-h"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                <a class="dropdown-item" href="#">Salvar</a>
                                <a class="dropdown-item" href="#">Esconder</a>
                                <a class="dropdown-item" href="#">Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="text-muted h7 mb-2">${date}</div>
                <p class="card-text">
                    ${message}
                </p>
            </div>
            <div class="card-footer">
                <a href="#" class="card-link"><i class="fa fa-gittip"></i> Curtir</a>
                <a href="#" class="card-link"><i class="fa fa-comment"></i> Comentar</a>
                <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Compartilhar</a>
            </div>
        </div>`
        )
    }

    // $('.profile-link').click(function() { window.location = (`profile.html?id=${USER_ID}`) })

    database.ref(`posts/${USER_ID}`).once('value')
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                database.ref(`users/${USER_ID}`).on('value', function (snapshot) {
                    let user = snapshot.val();
                    messagePost(childData.date, childData.message, user, childData.visibility);
                    $('#navbarDropdown').html(user.name);
                    $('#profile-pic-navbar').attr('src', user.pic);
                })
            })
        })

    function btnShare(e) {
      e.preventDefault();

      let userText = $('#user-message').val();
      let datePost = hourDate();
      let messageVisibility = 'public';
      if ($('#btnMessageVisibility').hasClass('private')) {
        messageVisibility = 'private';
      }

      $('#user-message').val('');

      database.ref(`posts/${USER_ID}`).push({
          message: userText,
          date: datePost,
          visibility: messageVisibility
      });
      database.ref(`users/${USER_ID}`).once('value', function (snapshot) {
        let user = snapshot.val();
        messagePost(datePost, userText, user, messageVisibility);
      })
    }

    function checkNumberDate(number) {
        if (number.length < 2) {
            number = `0${number}`;
        }
        return number;
    }

    function hourDate() {
        let datePost = new Date();
        let dayPost = datePost.getDate().toString();
        let monthPost = (datePost.getMonth()+1).toString();
        let yearPost = datePost.getFullYear();
        let hourPost = datePost.getHours().toString();
        let minutesPost = datePost.getMinutes().toString();
        let hourMinutePost = `${checkNumberDate(dayPost)}/${checkNumberDate(monthPost)}/${yearPost} <i class="fa fa-clock-o"></i> ${checkNumberDate(hourPost)}h${checkNumberDate(minutesPost)}`;
      return hourMinutePost;
    }

    $('#btnMessageVisibility > a').on('click', function(){
        var visibility = $(this).attr('data-filter');
        
        $('#btnGroupDrop1 > i').removeClass('fa-globe');
        $('#btnGroupDrop1 > i').removeClass('fa-users');

        if(visibility == 'public'){
            $('#btnGroupDrop1 > i').addClass('fa-globe');
        }else{
            $('#btnGroupDrop1 > i').addClass('fa-users');
        }

        $('#btnMessageVisibility').removeClass('pubic');
        $('#btnMessageVisibility').removeClass('private');

        $('#btnMessageVisibility').addClass(visibility);
    });

    $('#btnFilterVisibility > a').on('click', function(){
        var visibility = $(this).attr('data-filter');

        $('#posts-container > div').each(function(){
            if(visibility == 'all' || $(this).hasClass(visibility)){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    });
});
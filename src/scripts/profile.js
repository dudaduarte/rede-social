$(document).ready(function () {

    $('#logo-navbar, #home-navbar').attr('href', `feed.html?id=${USER_ID}`);

    database.ref(`users/${USER_ID}`).once('value', function (snapshot) {
        let user = snapshot.val();
        
        $('#display-name, #display-name-small').html(user.name);
        $('#display-status').html(!user.status? "Set Status" : user.status);
        $('#display-email').html(user.email);
        $('#display-pnumber').html(!user.pnumber? "Não disponível" : user.pnumber);
        $('#display-school').html(!user.school? "Não informado" : user.school);
        $('#user-bio').html(!user.bio? "Fale um pouco de você aqui." : user.bio);
    })
})
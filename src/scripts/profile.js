$(document).ready(function () {

    database.ref(`users/${USER_ID}`).once('value', function (snapshot) {
        let user = snapshot.val();

        console.log(user);
        $('#display-name, #display-name-small').html(user.name);
        $('#display-status').html(!user.status? "Set Status" : user.status);
        $('#display-email').html(user.email);
        $('#display-pnumber').html(!user.pnumber? "Não disponível" : user.pnumber);
        $('#display-school').html(!user.school? "Não informado" : user.school);
    })


})
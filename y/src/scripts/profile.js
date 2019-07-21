$(document).ready(function() {
  database.ref(`users/${USER_ID}`).once("value", function(snapshot) {
    let user = snapshot.val();

    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    $("#display-name, #display-name-small").html(user.name);
    $("#display-status").html(!user.status ? "Definir Status" : user.status);
    $("#display-email").html(user.email);
    $("#display-pnumber").html(!user.pnumber ? "Não disponível" : user.pnumber);
    $("#display-school").html(!user.school ? "Não informado" : user.school);
    $("#user-bio").html(!user.bio ? "Fale um pouco de você aqui." : user.bio);

    // $("#posts").append(`
        
    //     `);
  });
});

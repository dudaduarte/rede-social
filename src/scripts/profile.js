$(document).ready(function() {
  database.ref(`users/${USER_ID}`).once("value", function(snapshot) {
    let user = snapshot.val();

    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    $("#display-name, #display-name-small").html(user.name);
    $("#display-status").html(user.status ? user.status : "Definir Status");
    $("#display-email").html(user.email);
    $("#display-pnumber").html(user.pnumber ? user.pnumber : "Não disponível");
    $("#display-school").html(user.school ? user.school : "Não informado");
    $("#user-bio").html(user.bio ? user.bio : "Fale um pouco de você aqui.");
  });
});

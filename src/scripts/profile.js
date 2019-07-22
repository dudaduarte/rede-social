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

    $("#edit-profile").click(event => {
      event.preventDefault();
      if ($("#edit-profile").html() === "Editar Perfil") {
        $("#edit-profile").html("Enviar Alterações");
        $("#user-bio, #display-status, #display-name-small, #display-pnumber, #display-school")
          .addClass("hidden");
        $("#edit-bio, #edit-status, #edit-name, #edit-tel, #edit-school")
          .removeClass("hidden");
        $("#edit-bio").val($("#user-bio").html());
        $("#edit-status").val($("#display-status").html());
        $("#edit-name").val($("#display-name-small").html());
        $("#edit-tel").val($("#display-pnumber").html());
        $("#edit-school").val($("#display-school").html());
      } else {
        $("#edit-profile").html("Editar Perfil");
        $("#edit-bio, #edit-status, #edit-name, #edit-tel, #edit-school")
          .addClass("hidden");
        $("#user-bio, #display-status, #display-name-small, #display-pnumber, #display-school")
          .removeClass("hidden");
        database.ref(`users/${USER_ID}`).update({
          bio: $("#edit-bio").val(),
          status: $("#edit-status").val(),
          name: $("#edit-name").val(),
          pnumber: $("#edit-tel").val(),
          school: $("#edit-school").val(),
        });
        $("#user-bio").html($("#edit-bio").val());
        $("#display-status").html($("#edit-status").val());
        $("#display-name-small, #display-name").html($("#edit-name").val());
        $("#display-pnumber").html($("#edit-tel").val());
        $("#display-school").html($("#edit-school").val());
      }
    });
  });
});

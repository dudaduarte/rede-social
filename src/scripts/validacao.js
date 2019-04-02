// //desativa b.form-btn btn register caso seja vazio
//     $('#register-submit').submit(function() {
//       if($('.login-password').val()== null || $('.login-submit').val() ==""){
//       return false;
//       }
//     });
    

$(document).ready( function() {
    $('#register-form').validate({
      rules:{ 
        name:{ 
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true
        },
        password_confirmation:{
          required: true,
          equalTo: "#password"
        },
        terms_of_use: "required"
      },
      messages:{
        name:{ 
          required: "O campo nome é obrigatório.",
          minlength: "O campo nome deve conter no mínimo 3 caracteres."
        },
        email: {
          required: "O campo email é obrigatório.",
          email: "O campo email deve conter um email válido."
        },
        password: {
          required: "O campo senha é obrigatório."
        },
        password_confirmation:{
          required: "O campo confirmação de senha é obrigatório.",
          equalTo: "O campo confirmação de senha deve ser identico ao campo senha."
        },
        terms_of_use: "Para se cadastrar você deve aceitar os termos de uso."
      }
    });
  });

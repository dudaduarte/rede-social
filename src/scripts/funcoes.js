// //DELETAR UM REGISTRO NO BD
// <html>
// <head>
// <script language="Javascript">
// function confirmacao(id) {
//      let resposta = confirm("Deseja remover esse registro?");
 
//      if (resposta == true) {
//           window.location.href = "remover.php?id="+id;
//      }
// }
// </script>
// </head>
 
// <body>
// <a href="javascript:func()"
// onclick="confirmacao('1')">Remover registro #1</a>
 
// <a href="javascript:func()"
// onclick="confirmacao('2')">Remover registro #2</a>
 
// <a href="javascript:func()"
// onclick="confirmacao('3')">Remover registro #3</a>
// </body>
// </html>


// function validaForm(frm) {
//     /*
//     o parâmetro frm desta função significa: this.form,
//     pois a chamada da função - validaForm(this) foi
//     definida na tag form.
//     */
//         //Verifica se o campo nome foi preenchido e
//         //contém no mínimo três caracteres.
//         if(frm.nome.value == """ || frm.nome.value == null || frm.nome.value.lenght < 3) {
//             //É mostrado um alerta, caso o campo esteja vazio.
//             alert("Por favor, indique o seu nome.");
//             //Foi definido um focus no campo.
//             frm.nome.focus();
//             //o form não é enviado.
//             return false;
//         }
//        
//         if(frm.email.value.indexOf("@") == -1 ||
//           frm.email.valueOf.indexOf(".") == -1 ||
//           frm.email.value == "" ||
//           frm.email.value == null) {
//             alert("Por favor, indique um e-mail válido.");
//             frm.email.focus();
//             return false;
//         }
window.onload = () => {
    const database = firebase.database()
    const alunosRef = database.ref('alunos');

    const register = (email, nome, cordao) => {
        alunosRef.set({
            email,
            name,
            cordao
        })
    }
}



















var database = firebase.database();

$(document).ready(function () {
    $('#btn-share').click(function(event) {
        event.preventDefault();

        let userText = $('#user-message'). val();

        database.ref('posts').push({
            message: userText 

            });

        $('#posts-container').append(`
        <div class="card gedf-card">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="mr-2">
                            <a href="./profile/usuario"><img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""></a>
                        </div>
                        <div class="ml-2">
                            <div class="h5 m-0">
                            <a href="./profile/usuario">Nome do Usuário</a>
                            </div>
                        </div>
                    </div>
                <div>
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i></button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                        <a class="dropdown-item" href="#">Salvar</a>
                        <a class="dropdown-item" href="#">Esconder</a>
                        <a class="dropdown-item" href="#">Denunciar</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body">
            <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${hour()}
            </div>

            <p class="card-text">
                ${userText}
            </p>
        </div>
        
        <div class="card-footer">
            <a href="#" class="card-link"><i class="fa fa-gittip"></i> Curtir</a>
            <a href="#" class="card-link"><i class="fa fa-comment"></i> Comentar</a>
            <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Compartilhar</a>
        </div>
    </div>`
    )

});

      function hour() {
        let datePost = new Date();
        let hourPost = datePost.getHours();
        let minutesPost = datePost.getMinutes();
        let hourString = hourPost.toString();
        let minutesString = minutesPost.toString();
        if (minutesString.length < 2) {
          minutesString = '0' + minutesString;
        }
        if (hourString.length < 2) {
          hourString = '0' + hourString;
        }
        let hourMinutePost = hourString + 'h' + minutesString;
        return hourMinutePost;
      }
});



            // username: name,
            // email: email,
            // profile_picture : imageUrl
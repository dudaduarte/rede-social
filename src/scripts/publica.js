let database = firebase.database();

$(document).ready(function () {
    $('#btn-share').click(function (event) {
        event.preventDefault();

        let userText = $('#user-message').val();

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
            <div class="text-muted h7 mb-2">${hourDate()}
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

    function checkNumberDate(number) {
        if (number.length < 2) {
            number = `0${number}`;
        }
        return number;
    }

    function hourDate() {
        let datePost = new Date();
        let dayPost = datePost.getDate().toString();
        let monthPost = datePost.getMonth().toString();
        let yearPost = datePost.getFullYear();
        let hourPost = datePost.getHours().toString();
        let minutesPost = datePost.getMinutes().toString();
        let hourMinutePost = `${checkNumberDate(dayPost)}/${checkNumberDate(monthPost)}/${yearPost} <i class="fa fa-clock-o"></i> ${checkNumberDate(hourPost)}h${checkNumberDate(minutesPost)}`;
        return hourMinutePost;
    }
});



            // username: name,
            // email: email,
            // profile_picture : imageUrl
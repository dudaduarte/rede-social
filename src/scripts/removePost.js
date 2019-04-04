const database = firebase.database();

const USER_ID = window.location.search.match(/\?id=(.*)/)[1];


$(document).ready(function () {

    $('#btn-share').click(function (event) {
        event.preventDefault();

        let userText = $('#user-message').val();
        let dataPost = hourDate();

        let postFromDB = database.ref(`posts/${USER_ID}`).push({
            message: userText,
            date: dataPost
        });

        $('#posts-container').append(`
        <div class="card gedf-card marg">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="mr-2">
                            <a href="profile.html?id=${USER_ID}"><img class="profile-link rounded-circle" width="45" src="https://picsum.photos/50/50"></a>
                        </div>
                        <div class="ml-2">
                            <a href="profile.html?id=${USER_ID}"><div class="profile-link h5 m-0">Nome do Usuário</div></a>
                            <div class="h7 text-muted">Status?</div>
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
                            <a class="dropdown-item" href="#">Editar</a>
                            <a class="dropdown-item" href="#">Excluir</a>
                            <a class="dropdown-item" href="#"data-posts-id=${postFromDB.key}>Excluir<span>${message}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="card-body">
            <div class="text-muted h7 mb-2">${date}</div>
                <p class="card-text">${message}</p>
            </div>
        <div class="card-footer">
            <a href="#" class="card-link"><i class="fa fa-gittip"></i> Curtir</a>
            <a href="#" class="card-link"><i class="fa fa-comment"></i> Comentar</a>
            <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Compartilhar</a>
        </div>
        </div>`
    );
    
    $(`a[data-posts-id="${postFromDB}"]`).click(function() {
        
        database.ref("posts/" + USER_ID + "/" + postFromDB.key).remove();
        // console.log("teste remove");
        $(this).parent().remove();

    });

    });

}





// function deletar(id) {

//     ref.childData(message).remove().then(() => {

//         let card = $('#user-message');

//         card.remove();

//     });

// };
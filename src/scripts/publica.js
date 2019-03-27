$(document).ready(function () {

    $('#btn-share').click(getText);

    function getText(e) {
        e.preventDefault();
        let userText = document.getElementById('user-message').value.trim();
        document.getElementById('user-message').value = '';
        postText(userText);
      }

      function postText(text) {
          $('#posts-container').html(`
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
                ${text}
            </p>
        </div>
        
        <div class="card-footer">
            <a href="#" class="card-link"><i class="fa fa-gittip"></i> Curtir</a>
            <a href="#" class="card-link"><i class="fa fa-comment"></i> Comentar</a>
            <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Compartilhar</a>
        </div>
    </div>`
          )}

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
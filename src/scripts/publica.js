$(document).ready(function () {

    $('#btn-share').click(getText);

    function getText(e) {
        e.preventDefault();
        let userText = document.getElementById('user-message').value.trim();
        document.getElementById('user-message').value = '';
        postText(userText);
      }

      let secContainer = document.createElement('section'); // tudo fica dentro dela
      let headerPost = document.createElement('div'); // div que contém tudo do header
      headerPost.className = 'card-header';
      let div1Header = document.createElement('div');
      div1Header.className = 'd-flex justify-content-between align-items-center';
      let div2Header = document.createElement('div');
      div2Header.className = 'd-flex justify-content-between align-items-center';
      let div3Header = document.createElement('div');
      div3Header.className = 'mr-2';
      let imgProfile = document.createElement('img');
      imgProfile.className = 'rounded-circle';
      imgProfile.setAttribute = 'width="45" src="#"'; // ver se vai dar certo
      let div4Header = document.createElement('div');
      div4Header.className = 'ml-2';
      let div5Header = document.createElement('div');
      div5Header.className = 'h5 m-0';
      let nameUser = document.createTextNode('Nome do Usuário') // colocar o nome do usuário
//inicio drop down
      let divDropDown = document.createElement('div');
      divDropDown.className = 'dropdown';
      let btnDropDown = document.createElement('button');
      btnDropDown.className = 'btn btn-link dropdown-toggle';
      btnDropDown.setAttribute = 'type="button" id="gedf-drop1 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"'; // não sei se é assim que faz
      let dropdownIcon = document.createElement('i');
      dropdownIcon.className = 'fa fa-ellipsis-h';
      let dropdownOptions = document.createElement('div');
      dropdownOptions.className = 'dropdown-menu dropdown-menu-right';
      dropdownOptions.setAttribute = 'aria-labelledby="gedf-drop1"'



      function postText(text) {
          $('#posts-container').html($(`<div class="card gedf-card">
           ok <div class="card-header">
             ok   <div class="d-flex justify-content-between align-items-center">
                ok    <div class="d-flex justify-content-between align-items-center">
                    ok    <div class="mr-2">
                        ok    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                        </div>
                        ok <div class="ml-2">
                        ok    <div class="h5 m-0">
                                Nome do Usuário
                            </div>
                        </div>
                    </div>
                <div>
                ok <div class="dropdown">
                    ok <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ok    <i class="fa fa-ellipsis-h"></i></button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                        <a class="dropdown-item" href="#">Salvar</a>
                        <a class="dropdown-item" href="#">Esconder</a>
                        <a class="dropdown-item" href="#">Denunciar</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body">
            <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${createHourText()}
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
    </div>`))}

      function createHourText() {
        let hourMinutePost = document.createElement('div');
        let hourMinuteText = document.createTextNode(hour());
        hourMinutePost.className = 'hourMinute';
      }

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
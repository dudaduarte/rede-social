$(document).ready(function(){
$('register-form').validate({
    rules:{
    name:{
        required:true,
        minlength:5
        },
    email:{
        required:true,
        email:true
        },
    password:{
        required:true,
        rangelenght:[4,10]
        },
    confirm-password:{
        required:true,
        equalTo:password
        }
)};
)};
messages:{
    name:{
        required:"Este campo é obrigatório",
        minlength:5
        },
    email:{
        required:"O nome deve ter no mínimo 5 caracteres"
        email:true
        },
    password:{
        required:"Senha diferente da informada anteriormente",
        rangelenght:[4,10]
        },
    confirm-password:{
        required:true,
        equalTo:password
        }
)};
)};

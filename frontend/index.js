document.addEventListener("DOMContentLoaded", (event) => {
    if(document.cookie == "")
    {
        //window.location.href = './auth';
    }
    else
    {
        console.log(document.cookie);
        console.log('Usuário Autenticado!');
    }
});
document.addEventListener("DOMContentLoaded", (event) => {
    if(document.cookie == "")
    {
        window.location.href = './auth';
    }
    else
    {
        console.log('Usuário Autenticado!');
    }
});
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

function logout()
{
    document.cookie.split(';').forEach(function(c) {
        document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    });
    window.location.href = '/auth';
}
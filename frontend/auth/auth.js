// Função para definir um cookie de autenticação
function setAuthenticationCookie() {
    // Define a duração do cookie em dias (por exemplo, 1 dia)
    const daysToExpire = 1;

    // Cria uma data de expiração
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    // Define os valores do cookie
    document.cookie = `authenticated=true; expires=${expirationDate.toUTCString()}; path=/`;
}

// Função para fazer a requisição e procurar um usuário por email e senha
async function findUserByEmailAndPassword(email, senha) {
    const apiUrl = "http://localhost:5000/api/login";
    const requestBody = {
        email: email,
        senha: senha,
    };
    const fetchOptions = {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(requestBody),
        body: JSON.stringify(requestBody),
    };

    try {
        // Faz uma requisição POST para a API usando a URL e os dados de email e senha
        const response = await fetch(apiUrl, fetchOptions);

        // Verifica se a resposta da requisição está OK (código de status HTTP 200)
        if (!response.ok) {
            throw new Error("Erro na requisição.");
        }

        // Converte a resposta em formato JSON para obter o usuário encontrado
        const user = await response.json();

        // Verifica se o usuário foi encontrado com email e senha correspondentes
        if (user && user.email === email && user.senha === senha) {
            // Se encontrado, defina 1 dia de autenticação nos cookies
            setAuthenticationCookie();
        } else {
            // Caso contrário, exibe o usuário não validado
            console.log("Usuário não validado:");
        }
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchAuthentication = document.getElementById("entrar");
fetchAuthentication.addEventListener("click", () => {
    // Coleta os inputs de login
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    findUserByEmailAndPassword(email, senha);
});
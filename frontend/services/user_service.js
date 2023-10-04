// Função para fazer a requisição e procurar um usuário por email e senha
async function findUserByEmailAndPassword(email, senha) {
    const apiUrl = "http://XXXXXXXXX.com/api/login"; // Substitua pela URL correta do endpoint de login
    const requestBody = {
        email: email,
        senha: senha,
    };
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    };

    try {
        // Faz uma requisição POST para a API usando a URL e os dados de email e senha
        const response = await fetch(apiUrl, fetchOptions);

        // Verifica se a resposta da requisição está OK (código de status HTTP 200)
        if (!response.ok) {
            throw new Error("Erro na requisição.");
        }

        // Converte a resposta em formato JSON
        const data = await response.json();

        // Verifica se a resposta contém um token
        if (data.token) {
            const token = data.token;
        } else {
            console.log("Token não encontrado na resposta.");
        }
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Coleta os inputs de login
const email = document.getElementById("XXXXXX").textContent;
const senha = document.getElementById("XXXXXX").textContent;

// Chama a função para procurar o usuário e obter o token quando necessário
findUserByEmailAndPassword(email, senha);

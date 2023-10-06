// Função para fazer a requisição e mostrar as Bandeiras vermelhas na página
async function fetchAndDisplayRedFlags() {
    const apiUrl = "http://localhost:5000/api/red-flags";
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        // Faz uma requisição GET para a API usando a URL e as opções especificadas
        const response = await fetch(apiUrl, fetchOptions);

        // Verifica se a resposta da requisição está OK (código de status HTTP 200)
        if (!response.ok) {
            throw new Error("Erro na requisição.");
        }

        // Converte a resposta em formato JSON para obter a lista de Bandeiras vermelhas
        const redFlags = await response.json();

        // Obtém a div onde as Bandeiras vermelhas serão exibidas
        const redFlagListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de Bandeiras vermelhas e cria elementos HTML para exibi-las
        redFlags.forEach((redFlag) => {
            const redFlagElement = document.createElement("div");
            // Exibe informações da Bandeira vermelha, como ID, Aluno ID, Mapeamento ID, Resposta, etc.
            redFlagElement.textContent = `ID: ${redFlag.id}, Aluno ID: ${redFlag.aluno_id}, Mapeamento ID: ${redFlag.mapeamento_id}, Resposta: ${redFlag.resposta}`;
            // Adiciona o elemento da Bandeira vermelha à div de lista de Bandeiras vermelhas
            redFlagListDiv.appendChild(redFlagElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Para chamar a função ao carregar página
document.addEventListener("DOMContentLoaded", fetchAndDisplayRedFlags);

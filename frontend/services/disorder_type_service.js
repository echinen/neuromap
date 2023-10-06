// Função para fazer a requisição e mostrar os tipos de distúrbios na página
async function fetchAndDisplayDisorderTypes() {
    const apiUrl = "http://localhost:5000/api/disorder-types";
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

        // Converte a resposta em formato JSON para obter a lista de tipos de distúrbios
        const disorderTypes = await response.json();

        // Obtém a div onde os tipos de distúrbios serão exibidos
        const disorderTypeListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de tipos de distúrbios e cria elementos HTML para exibi-los
        disorderTypes.forEach((type) => {
            const typeElement = document.createElement("div");
            // Exibe informações do tipo de distúrbio, como ID e Nome
            typeElement.textContent = `ID: ${type.id}, Nome: ${type.nome}`;
            // Adiciona o elemento do tipo de distúrbio à div de lista de tipos
            disorderTypeListDiv.appendChild(typeElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchDataButton = document.getElementById("XXXXXXXXX");
fetchDataButton.addEventListener("click", fetchAndDisplayDisorderTypes);

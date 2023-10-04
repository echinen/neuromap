// Função para fazer a requisição e mostrar os mapeamentos na página
async function fetchAndDisplayMappings() {
    const apiUrl = "http://XXXXXXXXX.com/api/mappings";
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

        // Converte a resposta em formato JSON para obter a lista de mapeamentos
        const mappings = await response.json();

        // Obtém a div onde os mapeamentos serão exibidos
        const mappingListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de mapeamentos e cria elementos HTML para exibi-los
        mappings.forEach((mapping) => {
            const mappingElement = document.createElement("div");
            // Exibe informações do mapeamento, como ID, Tabela, Esfera, etc.
            mappingElement.textContent = `ID: ${mapping.id}, Tabela: ${mapping.tabela}, Esfera: ${mapping.esfera}, Pergunta: ${mapping.pergunta}, Tipo de Transtorno ID: ${mapping.tipo_transtorno_id}`;
            // Adiciona o elemento do mapeamento à div de lista de mapeamentos
            mappingListDiv.appendChild(mappingElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchDataButton = document.getElementById("XXXXXXXXX");
fetchDataButton.addEventListener("click", fetchAndDisplayMappings);

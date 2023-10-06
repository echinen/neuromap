// Função para fazer a requisição e mostrar as escolas na página
async function fetchAndDisplaySchools() {
    const apiUrl = "http://localhost:5000/api/schools";
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

        // Converte a resposta em formato JSON para obter a lista de escolas
        const schools = await response.json();

        // Obtém a div onde as escolas serão exibidas
        const schoolListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de escolas e cria elementos HTML para exibi-las
        schools.forEach((school) => {
            const schoolElement = document.createElement("div");
            // Exibe informações da escola, como ID, Nome, Descrição, Estado, Cidade, Endereço, Telefone, etc.
            schoolElement.textContent = `ID: ${school.id}, Nome: ${school.nome}, Descrição: ${school.descricao}, Estado: ${school.estado}, Cidade: ${school.cidade}, Endereço: ${school.endereco}, Telefone: ${school.telefone}`;
            // Adiciona o elemento da escola à div de lista de escolas
            schoolListDiv.appendChild(schoolElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchDataButton = document.getElementById("XXXXXXXXX");
fetchDataButton.addEventListener("click", fetchAndDisplaySchools);

// Função para fazer a requisição e mostrar as classes na página
async function fetchAndDisplayClasses() {
    const apiUrl = "http://localhost:5000/api/class";
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

        // Converte a resposta em formato JSON para obter a lista de classes
        const classes = await response.json();

        // Obtém a div onde as classes serão exibidas
        const classListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de classes e cria elementos HTML para exibi-las
        classes.forEach((classe) => {
            const classElement = document.createElement("div");
            // Exibe informações da classe, como ID, Nome e Ano Letivo
            classElement.textContent = `ID: ${classe.id}, Nome: ${classe.nome}, Ano Letivo: ${classe.ano_letivo}`;
            // Adiciona o elemento da classe à div de lista de classes
            classListDiv.appendChild(classElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchDataButton = document.getElementById("XXXXXXXXX");
fetchDataButton.addEventListener("click", fetchAndDisplayClasses);

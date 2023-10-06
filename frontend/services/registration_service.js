// Função para fazer a requisição e mostrar as matrículas na página
async function fetchAndDisplayRegistrations() {
    const apiUrl = "http://localhost:5000/api/registrations"; 
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

        // Converte a resposta em formato JSON para obter a lista de matrículas
        const registrations = await response.json();

        // Obtém a div onde as matrículas serão exibidas
        const registrationListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de matrículas e cria elementos HTML para exibi-las
        registrations.forEach((registration) => {
            const registrationElement = document.createElement("div");
            // Exibe informações da matrícula, como ID, Aluno ID, Turma ID, etc.
            registrationElement.textContent = `ID: ${registration.id}, Aluno ID: ${registration.aluno_id}, Turma ID: ${registration.turma_id}`;
            // Adiciona o elemento da matrícula à div de lista de matrículas
            registrationListDiv.appendChild(registrationElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchDataButton = document.getElementById("XXXXXXXXX");
fetchDataButton.addEventListener("click", fetchAndDisplayRegistrations);

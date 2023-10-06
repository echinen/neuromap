// Função para fazer a requisição e mostrar os professores na página
async function fetchAndDisplayTeachers() {
    const apiUrl = "http://localhost:5000/api/teachers"; 
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

        // Converte a resposta em formato JSON para obter a lista de professores
        const teachers = await response.json();

        // Obtém a div onde os professores serão exibidos
        const teacherListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de professores e cria elementos HTML para exibi-los
        teachers.forEach((teacher) => {
            const teacherElement = document.createElement("div");
            // Exibe informações do professor, como ID, Nome, Sobrenome, Email, Telefone, Escola ID, etc.
            teacherElement.textContent = `ID: ${teacher.id}, Nome: ${teacher.nome}, Sobrenome: ${teacher.sobrenome}, Email: ${teacher.email}, Telefone: ${teacher.telefone}, Escola ID: ${teacher.escola_id}`;
            // Adiciona o elemento do professor à div de lista de professores
            teacherListDiv.appendChild(teacherElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Botão para chamar a função quando o botão for clicado
const fetchDataButton = document.getElementById("XXXXXXXXX");
fetchDataButton.addEventListener("click", fetchAndDisplayTeachers);

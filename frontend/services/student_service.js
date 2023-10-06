// Função para fazer a requisição e mostrar os estudantes na página
async function fetchAndDisplayStudents() {
    const apiUrl = "http://localhost:5000/api/students";
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

        // Converte a resposta em formato JSON para obter a lista de estudantes
        const students = await response.json();

        // Obtém a div onde os estudantes serão exibidos
        const studentListDiv = document.getElementById("XXXXXXXXX");

        // Itera sobre a lista de estudantes e cria elementos HTML para exibi-los
        students.forEach((student) => {
            const studentElement = document.createElement("div");
            // Exibe informações do estudante, como ID, Nome, Sobrenome, Idade, Sexo, Endereço, Telefone, Escola ID, etc.
            studentElement.textContent = `ID: ${student.id}, Nome: ${student.nome}, Sobrenome: ${student.sobrenome}, Idade: ${student.idade}, Sexo: ${student.sexo}, Endereço: ${student.endereco}, Telefone: ${student.telefone}, Escola ID: ${student.escola_id}`;
            // Adiciona o elemento do estudante à div de lista de estudantes
            studentListDiv.appendChild(studentElement);
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
    }
}

// Para chamar a função ao carregar página
document.addEventListener("DOMContentLoaded", fetchAndDisplayStudents);
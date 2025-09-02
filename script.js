function adicionarTarefa() {
  // Pega o valor do input
  const input = document.getElementById("novaTarefa");
  const textoTarefa = input.value.trim();

  // Verifica se o campo não está vazio
  if (textoTarefa === "") {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  // Cria um novo item da lista (li)
  const novaTarefa = document.createElement("li");
  novaTarefa.textContent = textoTarefa;

  // Adiciona o item na lista ul
  const lista = document.getElementById("listaTarefas");
  lista.appendChild(novaTarefa);

  // Limpa o campo de input
  input.value = "";
}

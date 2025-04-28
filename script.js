// Seleciona o formulário e o elemento onde será exibida a lista de carros
const form = document.getElementById('carForm');
const carList = document.getElementById('carList');

// Array para armazenar os carros
let carros = [];

// Função para manipular o envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Coleta os dados do formulário
  const tipo = document.getElementById('tipo').value;
  const modelo = document.getElementById('modelo').value;
  const placa = document.getElementById('placa').value;
  const ano = document.getElementById('ano').value;
  const motor = document.getElementById('motor').value;
  const combustivel = document.getElementById('combustivel').value;

  // Cria um objeto carro e adiciona ao array
  const carro = {
    tipo,
    modelo,
    placa,
    ano,
    motor,
    combustivel
  };
  carros.push(carro);

  // Exibe o carro na lista
  displayCarros();

  // Limpa os campos do formulário
  form.reset();
});

// Função para exibir os carros cadastrados
function displayCarros() {
  // Limpa a lista antes de reexibir
  carList.innerHTML = '';

  // Adiciona cada carro na lista
  carros.forEach(function(carro) {
    const li = document.createElement('li');
    li.textContent = `${carro.tipo} ${carro.modelo} - ${carro.placa} (${carro.ano}) - Motor: ${carro.motor} - Combustível: ${carro.combustivel}`;
    carList.appendChild(li);
  });
}


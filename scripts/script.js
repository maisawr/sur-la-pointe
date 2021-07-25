const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;
    let data = {
        nome,
        email,
        endereco
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = `<p>Você será redirecionada (o) para inserir os dados de pagamento...</p>`;

    content.innerHTML = carregando;

})
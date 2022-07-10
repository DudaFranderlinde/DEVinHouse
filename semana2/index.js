function apresentaInfo(){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var descricao = document.getElementById('Descricao');

    console.log(`
    Formulário de Contato:
    Nome: ${nome}
    Email: ${email}
    Descrição: ${descricao}
    `)

    alert('Seu formulário foi enviado com sucesso!');
}
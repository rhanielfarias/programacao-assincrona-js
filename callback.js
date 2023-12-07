//Exercício1
function soma(a, b, callback) {
    console.log('Iniciando a função')
    setTimeout(function () {
        const resultado = a + b;
        callback(resultado);
    }, 5000);
    console.log('fim do console')
}


soma(5, 5, function (resultado) {
    console.log(resultado)
});

//Exercício2
function tempoDeExecucao(tempo, callback) {
    setTimeout(function () {
        minhaCallBack();
    }, tempo);
}
function minhaCallBack() {
    console.log('Exibindo o callback');
}
tempoDeExecucao(5000, minhaCallBack);

//Exercício3
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarPares(array, callback) {
    const pares = array.filter((elemento) => {
        return elemento % 2 == 0;
    });
    callback(pares);
}
function imprimeResultado(resultado) {
    console.log(resultado)
}
filtrarPares(numeros, imprimeResultado);

//Exercício4
const minhaSenha = 'rhaniel1234';
function validarSenha(senha, callback) {
    if (senha.length >= 8) {
        callback(true);
    } else {
        callback(false);
    }
}
function callbackSenha(validar) {
    if (validar) {
        console.log('Validação efetuada com sucesso')
    } else {
        console.log('A senha informada é curta');
    }
}
validarSenha(minhaSenha, callbackSenha)

//Exercício5
const numerosAleatorios = [9, 5, 3, 1, 2, 7, 4, 10, 6, 8]
function ordenarArray(array, callback) {
    const resultado = array.sort((a, b) => a - b);
    callback(resultado);
}
function ordenadorDeNumeros(valor) {
    console.log(valor);
}
ordenarArray(numerosAleatorios, ordenadorDeNumeros)

//Exercício6
const usuarios = [
    {
        nome: 'rhaniel',
        email: 'rhanielfarias@rhanielfarias.com'
    },
    {
        nome: 'Paulo',
        email: 'paulo@paulo.com'
    },
    {
        nome: 'Ana',
        email: 'ana@ana.com'
    }];
function pesquisarUsuario(nome, array, cb) {
    const busca = array.filter((elemento) => elemento.nome === nome ? elemento : null)
    cb(busca)
}

function pesquisarCB(nome) {

}
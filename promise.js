//Exercício1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Processo realizado sem problemas, parabéns");
    }, 5000)
});
promise.then((msg) => {
    console.log(msg);
});

//Exercício2
const promiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Processo deu erro');
    }, 5000)
});
promiseError.catch(erro => {
    console.error(erro)
});

//Exercício 3
function callApi() {
    return new Promise((resolve, removeEventListener) => {
        setTimeout(() => {
            const server = {
                user: 'rhaniel',
                email: 'rhanielfarias@gmail.com'
            };
            resolve(server);
        }, 4000)
    })
}
callApi().then(information => {
    console.log('Registro efetuado com sucesso. Seguem o nome de usuário e de login na plataforma: ', information)
}).catch(erro => {
    console.error('Ocorreu um erro no ', erro);
})

//Exercício4
const primeiraPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero1 = 25;
        resolve(numero1)
    }, 3000)
})
const segundaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero2 = 15;
        resolve(numero2);
    }, 2000)
})
primeiraPromise.then(numero1 => {
    console.log(`A primeira promise tem o valor de ${numero1}`);
    return segundaPromise;
}).then((numero2) => {
    console.log(`Já a segunda promise tem o valor de ${numero2}`);
}).catch(erro => {
    console.error(`Deu erro na promise ${erro}`);
});

//Exercício5
function assincrona(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Função concluída para o ${valor}`);
            resolve(valor);
        }, Math.random() * 1500)
    })
}

const array = [
    assincrona(1),
    assincrona(2),
    assincrona(3)
];
Promise.all(array).then((resultado) => {
    console.log(`As funções foram processadas. O resultado foi ^{resultado}`);
}).catch(erro => {
    console.error(`Deu erro no processamento ${erro}`)
})
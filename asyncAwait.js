//Exercício1
function callApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const server = {
                user: 'rhaniel',
                email: 'rhanielfarias@gmail.com'
            };
            resolve(server)
        }, 3000)
    });
}

async function obterDadosDoUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = {
                nome: 'Rhaniel Farias',
                idade: '25 anos',
                CidadeEstado: 'Pelotas/RS'
            };
            resolve(dados);
        }, 2500);
    });
}

async function cadastrar() {
    try {
        const consumindoApi = await callApi();
        const dadosDeCadastro = await obterDadosDoUsuario();
        const resultado = {
            ...consumindoApi,
            ...dadosDeCadastro
        };
        console.log('Cadastro feito. Revise sua conta criada', resultado);
    } catch (error) {
        console.error(`Aconteceu um erro ${error}`);
    }
}

cadastrar();

//Exercício2
async function compararPalavras(string1, string2) {
    try {
        const resultado = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof string1 === 'string' && string2 === 'string') {
                    resolve(string1 === string2);

                } else {
                    reject(new Error('Só aceita parâmetro do tipo string'))
                }
            }, 2000)
        });
        return resultado;
    } catch (error) {
        console.error('Ocorreu um erro infelizmente', error.message)
    }
}
compararPalavras('Rhaniel', 21)

//Exercício3
function bancoDeDados(id) {

    const simulacao =
        [{
            id: 1,
            nome: 'Rhaniel'
        },
        {
            id: 2,
            nome: 'Leandro'
        },
        { id: 3, nome: 'Diogo' }
        ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                const resultado = simulacao.find(usuario => usuario.id === id);

                if (resultado) {
                    resolve(resultado);
                } else {
                    reject(new Error('Usuário com id não encontrado', id));
                }
            } else {
                resolve(simulacao);
            }
        }, 2000);

    })
}

async function realizarConsulta(id) {
    try {
        const resultados = await bancoDeDados(id);
        console.log('Eu achei os seguintes dados', resultados);
        return resultados;
    } catch (erro) {
        console.error('Ocorreu o seguinte erro', erro.message)
        throw error;
    }
}

(async () => {
    try {
        await realizarConsulta(2);
    } catch (error) {
        console.error('OcOcorreu um erro', error.message)
    }
})();

//Exercício4
function simularApi(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() < 0.8;
            if (sucesso) {
                const dadosRecursos = {
                    nome: 'Simulação do recurso',
                    tipo: 'simulação',
                    url: url
                };
                resolve(dadosRecursos);
            } else {
                reject(new Error('Erro ao carregar a url'));
            }
        }, 1000);
    });
}

async function carregarRecursos() {
    const urlRecurso = 'http:/api.simulada/recurso/';
    try {
        const recursoCarregado = await simularApi(urlRecurso);
        console.log('Recurso carregado com sucesso', recursoCarregado);
    } catch (error) {
        console.error('Erro ao carregar recurso', error.message);
    }
}
carregarRecursos();

//Exercício5

async function validarSenha(senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const possuiMinimoCaracteres = senha.length >= 8;
            const possuiSenhaMaiuscula = /[A-Z]/.test(senha);
            const possuiLetraMinuscula = /[a-z]/.test(senha);
            const possuiNumero = /\d/.test(senha);
            if (possuiLetraMinuscula && possuiMinimoCaracteres && possuiNumero && possuiSenhaMaiuscula) {
                resolve('Senha válida', senha);
            } else {
                reject(new Error('Senha inválida'));
            }
        }, 1000);
    });
}

async function realizarValidacao(senhaDoUsuario) {
    try {
        const resultadoValidacao = await validarSenha(senhaDoUsuario);
        console.log(resultadoValidacao);
    } catch (erro) {
        console.error('Deu erro em ', erro.message)
    }
}
const senhaSegura = 'SenhaSegura123';
realizarValidacao(senhaSegura);
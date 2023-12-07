#Exercícios de funções assíncronas no Javascript

##Exercicios callback:

* 1. Soma de Números: Crie uma função somaAssincrona que aceite dois números e um
     callback. A função deve somar os dois números e chamar o callback com o
     resultado.

* 2. Temporizador: Crie uma função temporizador que aceite um número (em
     milissegundos) e um callback. A função deve aguardar o número de milissegundos especificado e, em seguida, chamar o callback.

* 3. Filtragem de Números Pares: Crie uma função filtrarPares que aceite um array
   de números e um callback. A função deve filtrar os números pares do array e
   chamar o callback com o novo array para imprimir os numeros.

* 4. Validação de Senha: Crie uma função validarSenha que aceite uma senha (string)
   e um callback. A função deve verificar se a senha atende a determinados critérios
   (por exemplo, ter pelo menos 8 caracteres) e chamar o callback com true ou false.

* 5. Ordenação de Array: Crie uma função ordenarArray que aceite um array de
   números e um callback. A função deve ordenar o array em ordem crescente e
   chamar o callback com o array ordenado. Dica: pode usar o metodo sort do proprio
   javascript, ou usar um ordenador próprio.

* 6. Pesquisa de Usuário: Crie uma função pesquisarUsuario que simule uma pesquisa
   por usuário em um banco de dados. A função deve aceitar um nome de usuário
   (string) e um callback que será chamado com os dados do usuário encontrado (ou
   null se não encontrado). Dica: utilizar manipulação de array, como filter ou map.

##Exercicios Promise:

* 1. Resolução de Promises Simples: Crie uma Promise que resolva com uma
     mensagem de sucesso após um curto período de tempo (por exemplo, 2 segundos)
     e use .then para exibir a mensagem no console.

* 2. Rejeição de Promises: Crie uma Promise que seja rejeitada com uma mensagem
     de erro após um curto período de tempo e use .catch para capturar e exibir o erro
     no console.

* 3. Chamadas de API Simuladas: Simule uma chamada de API usando uma Promise.
     Crie uma função que retorne uma Promise com dados fictícios de um servidor e
     use .then para processar os dados.

* 4. Encadeamento de Promises: Crie duas Promises separadas que resolvam com
     valores diferentes. Em seguida, encadeie-as usando .then para executar uma
     ação após a conclusão de ambas as Promises.

* 5. Tratamento de Múltiplas Promises: Crie um array de Promises que representam
     várias operações assíncronas e use Promise.all para aguardar a conclusão de
     todas as Promises antes de executar uma ação.

##Exercicios async/await

* 1. Obtenção de Dados de Usuário: Crie uma função assíncrona que use async/await
     para obter informações do usuário de uma API fictícia e exiba os dados no console.

* 2. Tratamento de Erros com try...catch : Crie uma função assíncrona que faça uma
     operação que pode gerar um erro. Use try...catch para capturar e lidar com o erro    de forma adequada.

* 3. Consulta a Banco de Dados Assíncrona: Simule uma consulta a um banco de
   dados usando async/await . Crie uma função que aceite um parâmetro de consulta e
   retorne os resultados.

* 4. Carregamento de Recursos Assíncronos: Crie uma função que carregue
   recursos (como imagens) de forma assíncrona. Use async/await para garantir que
   os recursos sejam carregados antes de continuar.

* 5. Validação de Entrada com Async/Await: Implemente uma função assíncrona que
   valide uma entrada do usuário e retorne um resultado com base nas regras de
   validação.

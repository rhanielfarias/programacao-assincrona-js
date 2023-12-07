#Exerc�cios de fun��es ass�ncronas no Javascript

##Exercicios callback:

* 1. Soma de N�meros: Crie uma fun��o somaAssincrona que aceite dois n�meros e um
     callback. A fun��o deve somar os dois n�meros e chamar o callback com o
     resultado.

* 2. Temporizador: Crie uma fun��o temporizador que aceite um n�mero (em
     milissegundos) e um callback. A fun��o deve aguardar o n�mero de milissegundos especificado e, em seguida, chamar o callback.

* 3. Filtragem de N�meros Pares: Crie uma fun��o filtrarPares que aceite um array
   de n�meros e um callback. A fun��o deve filtrar os n�meros pares do array e
   chamar o callback com o novo array para imprimir os numeros.

* 4. Valida��o de Senha: Crie uma fun��o validarSenha que aceite uma senha (string)
   e um callback. A fun��o deve verificar se a senha atende a determinados crit�rios
   (por exemplo, ter pelo menos 8 caracteres) e chamar o callback com true ou false.

* 5. Ordena��o de Array: Crie uma fun��o ordenarArray que aceite um array de
   n�meros e um callback. A fun��o deve ordenar o array em ordem crescente e
   chamar o callback com o array ordenado. Dica: pode usar o metodo sort do proprio
   javascript, ou usar um ordenador pr�prio.

* 6. Pesquisa de Usu�rio: Crie uma fun��o pesquisarUsuario que simule uma pesquisa
   por usu�rio em um banco de dados. A fun��o deve aceitar um nome de usu�rio
   (string) e um callback que ser� chamado com os dados do usu�rio encontrado (ou
   null se n�o encontrado). Dica: utilizar manipula��o de array, como filter ou map.

##Exercicios Promise:

* 1. Resolu��o de Promises Simples: Crie uma Promise que resolva com uma
     mensagem de sucesso ap�s um curto per�odo de tempo (por exemplo, 2 segundos)
     e use .then para exibir a mensagem no console.

* 2. Rejei��o de Promises: Crie uma Promise que seja rejeitada com uma mensagem
     de erro ap�s um curto per�odo de tempo e use .catch para capturar e exibir o erro
     no console.

* 3. Chamadas de API Simuladas: Simule uma chamada de API usando uma Promise.
     Crie uma fun��o que retorne uma Promise com dados fict�cios de um servidor e
     use .then para processar os dados.

* 4. Encadeamento de Promises: Crie duas Promises separadas que resolvam com
     valores diferentes. Em seguida, encadeie-as usando .then para executar uma
     a��o ap�s a conclus�o de ambas as Promises.

* 5. Tratamento de M�ltiplas Promises: Crie um array de Promises que representam
     v�rias opera��es ass�ncronas e use Promise.all para aguardar a conclus�o de
     todas as Promises antes de executar uma a��o.

##Exercicios async/await

* 1. Obten��o de Dados de Usu�rio: Crie uma fun��o ass�ncrona que use async/await
     para obter informa��es do usu�rio de uma API fict�cia e exiba os dados no console.

* 2. Tratamento de Erros com try...catch : Crie uma fun��o ass�ncrona que fa�a uma
     opera��o que pode gerar um erro. Use try...catch para capturar e lidar com o erro    de forma adequada.

* 3. Consulta a Banco de Dados Ass�ncrona: Simule uma consulta a um banco de
   dados usando async/await . Crie uma fun��o que aceite um par�metro de consulta e
   retorne os resultados.

* 4. Carregamento de Recursos Ass�ncronos: Crie uma fun��o que carregue
   recursos (como imagens) de forma ass�ncrona. Use async/await para garantir que
   os recursos sejam carregados antes de continuar.

* 5. Valida��o de Entrada com Async/Await: Implemente uma fun��o ass�ncrona que
   valide uma entrada do usu�rio e retorne um resultado com base nas regras de
   valida��o.

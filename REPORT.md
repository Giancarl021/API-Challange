# Relatório

### Cronologia

#### 21 de Agosto de 2019

Busquei aprender o básico dos conceitos de ASP.NET (C#) e REST, bem como definir o que seria necessário para fazer o projeto.

Efetuei o download e instalação das ferramentas necessárias (Pacotes do Visual Studio 2017 e o .NET Core SDK).

Realizei testes simples com a nova stack de linguagens (Hello World).

Iniciei a criação da parte Front-End do projeto.

Descobri um problema (aparentemente não resolvido) do Visual Studio 2017 com a versão utilizada por mim do .NET SDK, e necessitei efetuar o download do Visual Studio 2019.

#### 22 de Agosto de 2019

Iniciei a parte Back-End do projeto, usando de base um tutorial encontrado [aqui](https://docs.microsoft.com/pt-br/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio).

Tentei a instalação do mySQL em minha máquina porém fui mal-sucedido, com o CLI não efetuando login e na instalação não me foi permitido criar um novo usuário, além de qualquer tentativa de efetuar login como root a janela de login simplesmente fechar. Em razão destes problemas decidi manter o In-Memory Database, mesmo sabendo que não era este o objetivo, pois investir tempo nesta troca tornaria inviável completar a página que consome a API criada.

#### 23 de Agosto de 2019

Criei as requisições de pesquisas filtradas por Nome, E-Mail e ambos.

Iniciei a criação da página que consome a API REST. Utilizei jQuery para executar as chamadas e um template CSS de autoria própria. Não foi possível completar todas as requisições.

### Tecnologias Utilizadas

#### Back-End

##### Visual Studio 2019

IDE da Microsoft com recursos para desenvolvimento em C#.

##### Postman

Solução para testar requisições em APIs REST.

#### Front-End

##### NS4

Solução em C para gerar templates padrão de sites, com código fonte [aqui](https://github.com/Giancarl021/Site-Generator).

##### JetBrains WebStorm 2019.1.3/2019.2

IDE da JetBrains para a construção de aplicativos Web.

#### Git

Versionador de código, utilizado para recuperar um código caso uma implementação dê errado

### Dificuldades Encontradas

- Acredito que eu possa ter interpretado de forma errônea o objetivo da tarefa mostrada.
- A linguagem C# possui uma sintaxe diferente de qualquer das linguagens que estou habituado (parece uma mistura delas). A falta de conhecimento e experiência fez falta.
- O bug do Visual Studio com a versão do .NET Core SDK (documentado [aqui](https://github.com/dotnet/sdk/issues/3124)) custou-me um tempo razoável (reinstalação do Visual Studio).
- Não consegui conectar um banco de dados externo na aplicação, apenas utilizei o In-Memory Database da própria aplicação.
- Não consegui completar o front-end devido a uma falha na requisição do ```POST``` e do ```PUT```, não consegui identificar a falha a tempo de corrigir.

### *TODO*

- Requisições ```POST``` e ```PUT``` no arquivo [javascript](js/script.js).

- Migrar de banco de dados In-Memory para mySQL.

- Criar tela de edição e criação de pessoas.

  
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

```
Work in Progress
```

### Tecnologias Utilizadas

#### Back-End

##### Visual Studio 2019

Utilizei do IDE da Microsoft para a parte Back-End do projeto, **WIP....**

##### Postman

```
Work in Progress
```

#### Front-End

##### NS4

Solução em C para gerar templates padrão de sites, com código fonte [aqui](https://github.com/Giancarl021/Site-Generator).

##### JetBrains WebStorm 2019.1.3/2019.2

```
Work in Progess
```

#### Git

```
Work in Progress
```

### Dificuldades Encontradas

- Acredito que eu possa ter interpretado de forma errônea o objetivo da tarefa mostrada.
- A linguagem C# possui uma sintaxe diferente de qualquer outra de já trabalhei. A falta de conhecimento e experiência fez falta.
- O bug do Visual Studio com a versão do .NET Core SDK (documentado [aqui](https://github.com/dotnet/sdk/issues/3124)) custou-me um tempo valioso
- Não consegui conectar um banco de dados externo na aplicação, apenas utilizei o In-Memory Database da própria aplicação.
- Não consegui criar um sistema de pesquisa eficiente, demandando do servidor fornecer um GET integral da base de dados para então filtrar no cliente os dados recebidos.
- A falta de tempo me impediu de corrigir as falhas encontradas
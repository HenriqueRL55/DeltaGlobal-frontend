# DeltaGlobal-frontend

Este repositório contém a solução do desafio proposto para avaliar as habilidades de desenvolvimento de interfaces front-end utilizando **ReactJS**. O objetivo é desenvolver três telas funcionais a partir de um projeto no **Figma**, atendendo aos requisitos de **responsividade**, **navegabilidade** e **boas práticas de código**.

## Tecnologias Utilizadas

- **Vite**: Ferramenta rápida de desenvolvimento e build para projetos web.
- **ReactJS**: Biblioteca JavaScript para criação de interfaces de usuário interativas.
- **Material UI**: Conjunto de componentes de interface de usuário baseados no design system do Google Material Design.
- **Styled Components**: Biblioteca que permite a criação de estilos encapsulados dentro de componentes.
- **Axios**: Biblioteca para requisições HTTP, facilitando a comunicação com APIs externas.
- **React Router DOM**: Gerenciamento de rotas para navegação entre as páginas da aplicação.
- **React Input Mask**: Biblioteca que aplica máscaras de formatação em campos de formulário (ex.: datas, CPF).
- **API ViaCEP**: API utilizada para o preenchimento automático de endereço a partir do CEP inserido.

## Funcionalidades do Projeto

1. **Tela Inicial**:
   - Dois botões que redirecionam para outras duas telas.
   
2. **Tela de Busca por Produto**:
   - Implementação de filtros simultâneos.
   - Listagem de pelo menos 20 produtos.
   - Paginação que respeita os filtros aplicados.
   - Funcionalidade de ordenação (crescente e decrescente) ao clicar no ícone ao lado do nome da coluna.

3. **Tela de Formulário de Contato**:
   - Máscara de formatação nos campos (ex.: CPF no formato `000.000.000-00`).
   - Validação de CPF.
   - Autocomplete dos campos de endereço (Endereço, Bairro, Cidade) com base no preenchimento do CEP (utilizando a API [ViaCEP](https://viacep.com.br/ws)).

## Requisitos

Antes de iniciar o projeto, certifique-se de ter o **Node.js** instalado na sua máquina. Caso não o tenha, você pode baixá-lo [aqui](https://nodejs.org/).

## Instalação do Projeto

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/HenriqueRL55/DeltaGlobal-frontend.git

2. Instale as dependências do projeto:
     ```bash
    npm install

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev

Após rodar o comando npm run dev, o Vite iniciará um servidor de desenvolvimento. Você poderá acessar o projeto na URL fornecida pelo terminal, geralmente http://localhost:5173/.

## Decisões do Projeto

Durante o desenvolvimento, foram tomadas decisões que priorizaram a entrega de uma solução funcional e escalável. O projeto foi estruturado de forma modular, com componentes reutilizáveis e bem organizados. A divisão entre páginas e componentes foi uma escolha estratégica para manter a legibilidade do código, facilitando tanto a manutenção quanto a escalabilidade futura do projeto. Essa organização permitiu a implementação eficiente das funcionalidades esperadas.

Em relação a estilização foi utilizada a biblioteca Styled Components, que proporcionou uma estrutura de estilos organizada e escalável. A responsividade foi um ponto fundamental no desenvolvimento do projeto, utilizando o sistema de Grid do Material UI, foi possível garantir que o layout da aplicação se adaptasse a diferentes resoluções de tela, mantendo a navegabilidade eficiente tanto em dispositivos móveis quanto em desktops. Além disso, a navegação entre as diferentes telas foi realizada com o uso do React Router DOM, garantindo que o projeto se comportasse como uma Single Page Application (SPA), onde a experiência de navegação é fluida e sem recarregamentos completos da página.

Para as funcionalidades de requisições HTTP, como a obtenção de dados de endereço via CEP, a biblioteca Axios foi utilizada. Ela possibilitou a comunicação com a API ViaCEP, que foi integrada para preencher automaticamente os campos de endereço no formulário de contato. Além disso, a biblioteca React Input Mask foi utilizada para aplicar máscaras de formatação em campos de formulário, como o campo de CPF, assegurando uma melhor experiência de preenchimento.


## Possíveis Melhorias

Em termos de qualidade de código, uma melhoria significativa seria a implementação de testes automatizados. A inclusão de testes unitários e de integração, com ferramentas como Jest e React Testing Library, garantiria a robustez da aplicação, verificando o funcionamento correto de componentes e rotas, evitando erros futuros.

Além disso, o uso de memoização em componentes que não precisam ser re-renderizados frequentemente, como os filtros de produto, ajudaria a melhorar o desempenho da aplicação. Ferramentas como o React.memo podem ser utilizadas para evitar renderizações desnecessárias, tornando a aplicação mais eficiente. O cache de requisições, especialmente para dados que não mudam com frequência (como a lista de produtos), também pode ser introduzido para reduzir a necessidade de múltiplas requisições à API.


## Considerações Finais

Este projeto foi desenvolvido com foco em boas práticas de programação, qualidade de código e entrega de uma solução funcional. Todos os componentes foram criados com ReactJS e estilizados utilizando Styled Components e Material UI para uma interface moderna e intuitiva.
# 🎱 Placar de Sinuca (Regra Brasileira)

> **[➡️ Acesse a demonstração ao vivo aqui!](https://placar-snooker.vercel.app/)**

<br>

## 🎯 Sobre o Projeto

O **Placar de Sinuca** é um placar digital interativo, construído do zero com HTML, CSS e JavaScript puro.

Este projeto nasceu de uma **necessidade pessoal**: sou um jogador casual de sinuca (regra brasileira) e costumo jogar com um amigo em um clube. Frequentemente, por conversarmos sobre assuntos diversos durante o jogo, acabávamos esquecendo a pontuação. O local não possuía o tradicional ábaco ou uma lousa para a marcação.

Busquei por soluções na loja de aplicativos do celular, mas as opções eram limitadas: a maioria dos apps eram pagas, e as versões gratuitas tinham uma experiência de usuário (UX) ruim, poluída por anúncios e difíceis de operar.

Vendo essa lacuna, decidi aplicar meus conhecimentos de desenvolvimento web para **construir a solução ideal**: um placar simples, rápido, gratuito, sem anúncios e focado 100% na usabilidade, resolvendo o problema que eu e meu amigo tínhamos.

<br>

## ✨ Funcionalidades Principais

* **Placar Interativo:** Adicione e subtraia pontos (de 1 a 7) para dois jogadores.
* **Gerenciamento de Partidas:** Acompanhe o número da partida atual.
* **Contagem de Vitórias:** O placar registra as vitórias de cada jogador e os empates ao final de cada partida.
* **Edição de Nomes:** Clique no ícone de lápis para alterar o nome dos jogadores.
    * **Trava de Integridade:** A edição de nomes é bloqueada após a primeira partida para manter a consistência do histórico.
* **Resumo Final:** Ao finalizar o jogo, um modal dinâmCico exibe um resumo completo com o total de partidas, vitórias e empates.
* **Design Responsivo:** A interface se adapta para uma melhor visualização em modo paisagem (landscape).

<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as bases do desenvolvimento web:

* **HTML5:** Estrutura semântica do placar e dos modais.
* **CSS3:** Estilização completa, utilizando Flexbox e Grid (para o modo paisagem) para criar um layout responsivo.
* **JavaScript (ES6+):** O "cérebro" da aplicação, responsável por:
    * Manipulação avançada do DOM (criação de modais dinâmicos).
    * Geração dinâmica de elementos (botões de pontuação).
    * Gerenciamento de estado (placar, vitórias, partidas).
    * Delegação de eventos para performance.

<br>

## 🚀 Aprendizados e Evolução

Este projeto foi desenvolvido em "versões", evoluindo de um script simples para uma arquitetura de código mais robusta:

1.  **Manipulação Dinâmica do DOM:** Todos os modais (edição de nome, resumo final) e os botões de pontuação são criados e destruídos dinamicamente com `createElement` e `appendChild`, em vez de apenas ficarem ocultos no HTML.
2.  **Delegação de Eventos:** Para otimizar a performance, a aplicação usa um único `addEventListener` no container principal. As ações são gerenciadas verificando o alvo do clique (`event.target.matches`), em vez de adicionar um *listener* para cada um dos 28 botões.
3.  **Separação de Responsabilidades (V3):** O código foi refatorado para seguir o princípio de *Separation of Concerns*.
    * `regras.js`:

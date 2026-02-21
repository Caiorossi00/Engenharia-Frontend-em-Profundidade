// data/react-structure.js
export const reactStructure = {
  title: "Plano Teórico Avançado – React em Profundidade",
  modules: [
    {
      slug: "intencao-metodo-preparacao",
      title: "Intenção, Método e Preparação Conceitual",
      order: 0,
      topics: [
        {
          slug: "como-este-material-foi-construido",
          title: "Como este material foi construído",
          content: `
  Este material foi construído a partir de prática deliberada, leitura de documentação oficial, análise de código real e reflexão contínua sobre padrões e decisões arquiteturais. O objetivo não foi apenas aprender a usar React, mas compreender seus fundamentos conceituais e sua lógica interna.
            `,
        },
        {
          slug: "por-que-este-material-existe",
          title: "Por que este material existe",
          content: `
  Este plano existe para organizar o aprendizado avançado de React de forma estruturada, evitando consumo superficial de conteúdo. Ele busca consolidar entendimento profundo e formar base sólida para decisões técnicas conscientes.
            `,
        },
        {
          slug: "metodologia-de-estudo",
          title: "Metodologia de Estudo e Estrutura dos Módulos",
          content: `
  A metodologia adotada prioriza progressão lógica, repetição estratégica e aplicação prática. Cada módulo introduz conceitos fundamentais que servem como base para os próximos, respeitando uma sequência de complexidade crescente.
            `,
        },
        {
          slug: "preparacao-modulos-avancados",
          title: "Preparação para os módulos avançados",
          content: `
  Antes de avançar, é necessário revisar fundamentos como JavaScript moderno, funções puras, imutabilidade e princípios de composição. Essa base é indispensável para compreender o comportamento interno do React.
            `,
        },
      ],
    },
    {
      slug: "filosofia-paradigma",
      title: "Filosofia e Paradigma do React",
      order: 1,
      topics: [
        {
          slug: "paradigma-declarativo-vs-imperativo",
          title: "Paradigma declarativo vs imperativo",
          content: `
  O React adota o paradigma declarativo, onde descrevemos o estado desejado da interface e deixamos o sistema cuidar das atualizações. Diferente do modelo imperativo, não manipulamos diretamente o DOM, mas declaramos como a UI deve se comportar a partir do estado.
            `,
        },
        {
          slug: "ui-derivada-de-estado",
          title: "React como UI derivada de estado",
          content: `
  No React, a interface é uma função do estado. Mudanças no estado provocam re-renderizações previsíveis, permitindo modelar aplicações como transformações puras de dados em representação visual.
            `,
        },
        {
          slug: "composicao-componentes",
          title: "Composição de componentes e árvore de renderização",
          content: `
  A composição é o princípio central do React. Interfaces são construídas a partir de componentes reutilizáveis organizados em uma árvore, onde cada nó representa uma unidade isolada de responsabilidade.
            `,
        },
        {
          slug: "previsibilidade-pureza",
          title: "Previsibilidade e pureza de funções",
          content: `
  Componentes devem se comportar como funções puras: dado o mesmo input, devem produzir o mesmo output. Essa previsibilidade é o que permite otimizações internas e facilita o raciocínio sobre o fluxo da aplicação.
            `,
        },
        {
          slug: "dados-estado-interface",
          title: "Abstração entre dados → estado → interface",
          content: `
  React cria uma camada de abstração entre dados brutos e representação visual. Dados alimentam o estado, o estado define a interface e a interface é derivada automaticamente dessa relação.
            `,
        },
        {
          slug: "diferenca-mvc-mvvm",
          title: "O que diferencia o React de MVC/MVVM",
          content: `
  Diferente de arquiteturas tradicionais como MVC ou MVVM, o React não impõe estrutura rígida de camadas. Ele se concentra exclusivamente na camada de interface, delegando outras responsabilidades à composição e ao ecossistema.
            `,
        },
      ],
    },
  ],
};

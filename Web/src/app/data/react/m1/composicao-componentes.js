export default {
  slug: "composicao-componentes",
  title: "Composição de componentes e a ideia de árvore de renderização",
  content: `
No React, a UI é construída a partir de componentes, que são blocos reutilizáveis.

Estrutura de um componente:
- Estado local
- Props
- Funções internas

Hierarquia de componentes:
- Componentes organizados em hierarquias
- Cada componente recebe dados via props e pode manter estado local
- Renderização é recursiva: o React começa do topo (raiz), renderiza cada filho, que pode renderizar seus próprios filhos, formando a árvore completa da UI

Composição vs Herança:
- Herança: componente filho herda comportamento de outro
- Composição: componente é montado a partir de outros componentes (boa prática no React)

Observação: Componentes profundos ou grandes podem custar mais tempo para recalcular. Sempre que o estado muda, o React precisa re-renderizar os componentes afetados.

Boas práticas:
- Dividir responsabilidades entre componentes mantém o código organizado, previsível e reutilizável

Componente pai:
- Gerencia o estado e lógica quando necessário
- Passa dados e funções para os filhos via props

Componente filho:
- Focado em UI/apresentação
- Recebe dados e callbacks do pai via props
- Não altera diretamente o estado do pai

Resumo:
- Componentes pequenos e focados são mais fáceis de testar e manter
- Filhos devem ser reativos e dependentes de props, sem mexer no estado diretamente
- Pai centraliza o estado e a lógica, mantendo a fonte de verdade
- Mesmo em apps simples, essa separação ajuda a preparar a aplicação para crescer sem se tornar confusa
  `,
};

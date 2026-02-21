export default {
  slug: "ui-derivada-de-estado",
  title: "React como UI derivada de estado",
  content: `
O conceito central é que, no React, a UI não é algo que você manipula diretamente, ela é uma função do estado:

- O estado é a fonte de verdade
- A interface é uma projeção desse estado, calculada automaticamente pelo React
- Quando o estado muda, o React recalcula a UI — você não mexe no DOM diretamente

A interface que você vê na tela é completamente determinada pelo estado atual da aplicação.

Em termos matemáticos:
UI = f(state)

Como pensar:
- Você não toca na tela diretamente, você modifica o estado
- O React lê esse novo estado e calcula uma nova UI a cada alteração
- O React aplica as mudanças de forma inteligente, só altera os elementos que realmente mudaram — processo chamado reconciliação ou DOM diffing
- O usuário vê a tela atualizada, mas você não precisou se preocupar com os detalhes do DOM

UI imperativa vs UI derivada de estado:

UI imperativa:
- Criar elementos manualmente, atualizar DOM a cada alteração
- Risco de inconsistência, repetição de lógica, performance ruim, difícil de testar

UI derivada de estado:
- Mantém estado central
- UI recalculada automaticamente
- Atualiza apenas o que mudou
- Interface consistente e fácil de testar

Tipos de estado em React:
1. Estado local: dentro de um componente específico; ex.: contador
2. Estado derivado: calculado a partir de outros estados; ex.: filtrar tarefas concluídas
3. Estado global: compartilhado entre múltiplos componentes; ex.: usuário logado, tema do app, carrinho

Resumo:
- Estado local: só interessa ao componente que o possui
- Estado derivado: calculado a partir de outros estados
- Estado global: necessário quando vários componentes precisam do mesmo dado
  `,
};

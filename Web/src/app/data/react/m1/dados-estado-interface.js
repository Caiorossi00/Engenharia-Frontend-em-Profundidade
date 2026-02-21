export default {
  slug: "dados-estado-interface",
  title: "Abstração entre dados → estado → interface",
  content: `
Abstração significa esconder a complexidade de um processo, oferecendo uma interface mais simples para interagir com ele.

No React, o React funciona como uma camada de abstração entre:
- Os dados reais
- O estado interno da aplicação
- A interface renderizada

- Os dados brutos existem fora do React
- O estado representa os dados dentro do React, versão controlada e filtrada
- A interface é a projeção do estado; não guarda dados, apenas mostra o que o estado representa

Fluxo completo:
1. Dado entra (API, evento, input)
2. Atualiza o estado
3. React recalcula a interface
4. Usuário vê a nova UI

O React é uma abstração sobre o DOM: você não atualiza o DOM diretamente; atualiza o estado e o React cuida da tela.

Fluxo unidirecional de dados:
- Dados fluem do componente pai para filho via props
- Alterações de estado ocorrem em um único ponto de verdade

Benefícios:
- Consistência: UI sempre corresponde ao estado
- Previsibilidade: dado um estado, UI é sempre a mesma
- Escalabilidade: alterações de estado atualizam a UI automaticamente
- Virtual DOM otimiza atualizações e minimiza operações custosas

Resumo:
1. Abstração simplifica o uso sem eliminar a lógica subjacente
2. Fluxo unidirecional centraliza alterações de estado
3. UI derivada do estado garante previsibilidade e consistência
4. Virtual DOM otimiza atualizações
5. Equilíbrio entre clareza e ocultação de complexidade é essencial
  `,
};

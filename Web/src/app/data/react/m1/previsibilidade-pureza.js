export default {
  slug: "previsibilidade-pureza",
  title: "O papel da previsibilidade e da pureza de funções",
  content: `
  Função pura:
  
  - Depende apenas de seus argumentos (não acessa variáveis externas mutáveis)
  - Não causa efeitos colaterais (não modifica nada fora dela)
  - Retorna sempre o mesmo resultado para a mesma entrada
  
  Exemplo de função pura:
  
  function somar(a, b) {
    return a + b;
  }
  
  Exemplo de função impura:
  
  let total = 0;
  
  function somar(a) {
    total += a;
    return total;
  }
  
  Por que o React exige que a função de renderização seja pura?
  
  - Dada a mesma entrada (props e estado)
  - A função retorna a mesma UI (JSX)
  
  Se a função de renderização não for pura, o React não consegue garantir consistência, quebrando a reconciliação.
  
  Efeitos colaterais (Side Effects):
  
  - Qualquer impacto que uma função cause fora do seu escopo
  - Exemplo:
  
  let contador = 0;
  
  function incrementar() {
    contador++;
    console.log("Contador:", contador);
  }
  
  Efeitos colaterais e useEffect:
  
  - Funções de renderização precisam ser puras por padrão
  - useEffect permite executar efeitos colaterais de forma controlada, após a renderização
  
  O que colocar dentro do useEffect:
  
  - Requisições assíncronas
  - Manipulação do DOM fora do JSX
  - Event listeners
  - Temporizadores
  - Sincronização com armazenamento externo
  - Tudo que interage com o mundo externo ou não pode ser determinístico pela renderização
    `,
};

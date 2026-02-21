export default {
  slug: "dados-estado-interface",
  title: "Dados, estado e interface",
  content: `
  Dados são informações brutas.
  Estado é a representação desses dados no momento atual.
  Interface é a projeção visual do estado.
  
  Fluxo ideal:
  
  Dados → Estado → UI
  
  Nunca:
  
  UI → Dados (de forma implícita)
  
  Manter essa hierarquia clara evita inconsistências.
    `,
};

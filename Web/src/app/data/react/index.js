import m0_t1 from "./m0/como-este-material-foi-construido.js";
import m0_t2 from "./m0/por-que-este-material-existe";
import m0_t3 from "./m0/metodologia-de-estudo";
import m0_t4 from "./m0/preparacao-modulos-avancados";

import m1_t1 from "./m1/paradigma-declarativo-vs-imperativo";
import m1_t2 from "./m1/ui-derivada-de-estado";
import m1_t3 from "./m1/composicao-componentes";
import m1_t4 from "./m1/previsibilidade-pureza";
import m1_t5 from "./m1/dados-estado-interface";
import m1_t6 from "./m1/diferenca-mvc-mvvm";

export const reactStructure = {
  title: "React",
  modules: [
    {
      slug: "m0",
      order: 0,
      title: "Intenção, Método e Preparação Conceitual",
      fullTitle: "Módulo 0 – Intenção, Método e Preparação Conceitual",
      topics: [m0_t1, m0_t2, m0_t3, m0_t4],
    },
    {
      slug: "m1",
      order: 1,
      title: "Filosofia e Paradigma do React",
      fullTitle: "Módulo 1 – Filosofia e Paradigma do React",
      topics: [m1_t1, m1_t2, m1_t3, m1_t4, m1_t5, m1_t6],
    },
  ],
};

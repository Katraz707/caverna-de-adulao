import { useMemo, useState, type CSSProperties } from "react";

type Bloco =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "text"; text: string }
  | { type: "verse"; reference: string; text: string }
  | { type: "application"; text: string }
  | { type: "note"; text: string }
  | { type: "list"; items: string[] };

type Estudo = {
  id: string;
  titulo: string;
  categoria: string;
  resumo: string;
  conteudo: Bloco[];
};

/* =========================================================
   ESTUDO: O ATAQUE DAS TREVAS — TENTAÇÃO
   ========================================================= */

const estudoTentacao: Estudo = {
  id: "ataque-das-trevas-tentacao",
  titulo: "O Ataque das Trevas — 1. Tentação",
  categoria: "Batalha Espiritual",
  resumo:
    "O primeiro estágio do ataque das trevas: a tentação, o despertar do desejo e a tentativa de levar a pessoa a concordar com o pecado.",

  conteudo: [
    {
      type: "heading",
      text: "O ATAQUE DAS TREVAS",
    },

    {
      type: "subheading",
      text: "1. TENTAÇÃO",
    },

    {
      type: "text",
      text: "Neste estágio, o objetivo do reino das trevas não é necessariamente controlar a pessoa de imediato. O objetivo é apresentar uma proposta que vai despertar o desejo, na tentativa de induzir a vontade da pessoa a concordar com o pecado.",
    },

    {
      type: "text",
      text: "Este padrão nos começa a ser revelado já em Gênesis 3.",
    },

    {
      type: "text",
      text: "Lembra de Eva e da serpente. A serpente não obrigou Eva a fazer o que foi proibido.",
    },

    {
      type: "text",
      text: "Primeiro, a serpente apresenta uma proposta a Eva. “A TENTAÇÃO”.",
    },

    /* ---------- GÊNESIS 3 ---------- */

    {
      type: "verse",
      reference: "Gênesis 3:1",
      text: "¹ Ora, a serpente era mais sutil do que qualquer animal do campo que o SENHOR Deus havia feito. E ela disse à mulher: Sim, Deus tem dito: Não comereis de toda árvore do jardim?",
    },

    {
      type: "text",
      text: "A serpente usou uma pergunta carregada de provocação para gerar uma reação emocional em Eva.",
    },

    {
      type: "text",
      text: "Ao transformar uma limitação de uma única árvore em uma proibição total, a serpente fez Deus parecer autoritário e injusto.",
    },

    {
      type: "text",
      text: "A expressão “Sim, Deus tem dito” lança suspeita sobre a palavra de Deus, levando a mulher a focar no que estava proibido em vez de focar na generosidade de tudo o que fora liberado.",
    },

    {
      type: "text",
      text: "A pergunta fez a mulher entrar na conversa para “corrigir” a serpente, expondo-a ao diálogo e ao engano subsequente.",
    },

    {
      type: "verse",
      reference: "Gênesis 3:2-3",
      text: `² E a mulher disse à serpente: Nós podemos comer do fruto das árvores do jardim;

³ mas do fruto da árvore que está no meio do jardim, Deus disse: Não comereis dele, nem o tocareis, para que não morrais.`,
    },

    {
      type: "text",
      text: "Aqui fica muito claro que Eva sabia e conhecia a verdade. Não ficam dúvidas de que ela não sabia da ordem de Deus, mas ela escolhe dar ouvidos à serpente e a conversa segue.",
    },

    {
      type: "verse",
      reference: "Gênesis 3:4",
      text: "⁴ E a serpente disse à mulher: Certamente não morrereis.",
    },

    {
      type: "text",
      text: "Aqui, a serpente coloca Deus na condição de mentiroso, afirmando que Eva não morreria. Entenda que, quando as trevas usam alguém para falar algo contra Deus e você não se coloca contra, você faz exatamente o que Eva fez e, com isto, abriu lugar para o engano das trevas.",
    },

    {
      type: "verse",
      reference: "Gênesis 3:5",
      text: "⁵ Porque Deus sabe que no dia em que dele comerdes, então vossos olhos serão abertos, e vós sereis como deuses, conhecendo o bem e o mal.",
    },

    {
      type: "text",
      text: "Aqui a proposta já fica explícita, e é apresentada a Eva uma joia preciosa — ou assim parecia, porque nem tudo que reluz é ouro —, porque quem não quer ser como o pai, quem não quer mostrar para o pai que consegue, que está pronto, que ele fez um bom trabalho e seu garotinho está pronto para enfrentar o mundo? Quem não quer dizer: “Pai, olha para mim, sou independente e o senhor não precisa mais se preocupar comigo”?",
    },

    {
      type: "verse",
      reference: "Gênesis 3:6",
      text: "⁶ E quando a mulher viu que a árvore era boa para alimento, e que era agradável aos olhos, e uma árvore a ser desejada para fazer alguém sábio, ela tomou do seu fruto, e o comeu, e deu também a seu marido, e ele o comeu com ela.",
    },

    /* ---------- JESUS NO DESERTO ---------- */

    {
      type: "text",
      text: "Vamos para o Novo Testamento. Jesus foi tentado também.",
    },

    {
      type: "text",
      text: "Entenda, ser tentado não significa estar em pecado. Jesus passa por esta tentação logo após 40 dias de jejum.",
    },

    {
      type: "text",
      text: "Cristo nos mostra com esta experiência que podemos ser atacados sem ter dado uma brecha. O ataque das trevas pode vir de fora para dentro sem que tenha um consentimento dado de dentro.",
    },

    {
      type: "verse",
      reference: "Mateus 4:1",
      text: "¹ Jesus foi então conduzido pelo Espírito, ao deserto, para ser tentado pelo Diabo.",
    },

    {
      type: "text",
      text: "Repare que ele foi conduzido para ser tentado.",
    },

    {
      type: "verse",
      reference: "Mateus 4:2",
      text: "² Depois de jejuar quarenta dias e quarenta noites, teve fome.",
    },

    {
      type: "text",
      text: "Depois de 40 dias e 40 noites sem comer, a fraqueza chega, o corpo vai estar bem debilitado e o instinto grita dentro de você. É neste momento que as trevas veem oportunidade para atacar, “mesmo sem você ter dado consentimento ou aberto uma brecha”.",
    },

    {
      type: "application",
      text: "OBS: JESUS TEVE FOME",
    },

    {
      type: "verse",
      reference: "Mateus 4:3",
      text: "³ O tentador aproximou-se então dele e disse: “Se tu és o Filho de Deus, manda que estas pedras se tornem em pães”.",
    },

    {
      type: "verse",
      reference: "Mateus 3:17",
      text: "“Este é o meu Filho amado, em quem me comprazo.”",
    },

    {
      type: "text",
      text: "Satanás pega essa declaração exata de Deus Pai e adiciona uma dúvida: “Se...” No final do capítulo anterior, foi o batismo de Jesus.",
    },

    {
      type: "verse",
      reference: "Mateus 4:4",
      text: "⁴ Jesus, porém, afirmou-lhe: “Está escrito: ‘Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus’”.",
    },

    {
      type: "verse",
      reference: "Deuteronômio 8:3",
      text: "³ Ele te humilhou, fez que sentisses fome e te alimentou com o maná que nem tu nem teus pais conhecíeis, para te mostrar que o ser humano não vive apenas de pão, mas de toda a Palavra que procede da boca do SENHOR!",
    },

    {
      type: "application",
      text: "Jesus usa a espada para responder. O que você tem usado para responder aos ataques das trevas?",
    },

    {
      type: "text",
      text: "No Éden (Gênesis 3:1): “É assim que Deus disse: Não comereis de toda a árvore do jardim?” (Satanás semeia a dúvida sobre a palavra de Deus usando o alimento como isca).",
    },

    {
      type: "text",
      text: "No Deserto (Mateus 4:3): “Se tu és o Filho de Deus...” (Satanás novamente coloca em xeque a palavra de Deus usando a fome/alimento como isca).",
    },

    /* ---------- SEGUNDA TENTAÇÃO ---------- */

    {
      type: "verse",
      reference: "Mateus 4:5-6",
      text: `⁵ Então o Diabo o conduziu à Cidade Santa, e colocou-o sobre a parte mais alta do templo e desafiou-lhe:

⁶ “Se tu és o Filho de Deus, joga-te daqui para baixo. Pois está escrito: ‘Aos seus anjos dará ordens a teu respeito, e com as mãos eles te susterão, para que jamais tropeces em alguma pedra’”.`,
    },

    {
      type: "text",
      text: "Agora o diabo muda de estratégia. Vendo que Jesus usou a Escritura e destruiu o primeiro ataque, Satanás agora tenta usar a própria Palavra de Deus contra Jesus, mas distorcendo o seu sentido original.",
    },

    {
      type: "text",
      text: "O diabo usa a passagem de Salmos 91:11,12.",
    },

    {
      type: "verse",
      reference: "Salmos 91:11-12",
      text: `¹¹ Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.

¹² Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra alguma.`,
    },

    {
      type: "text",
      text: "Satanás omitiu uma frase-chave: O Salmo 91 fala de proteção “em todos os teus caminhos”; os caminhos de Salmos se referem à obediência à vontade de Deus.",
    },

    {
      type: "text",
      text: "O diabo tentou induzir Jesus a criar um perigo desnecessário, apenas para forçar Deus a realizar um milagre e provar Sua promessa. Confiança verdadeira não exige testes inconsequentes.",
    },

    {
      type: "verse",
      reference: "Mateus 4:7",
      text: "⁷ Contestou-lhe Jesus: “Também está escrito: ‘Não tentarás o SENHOR teu Deus’”.",
    },

    {
      type: "verse",
      reference: "Deuteronômio 6:16",
      text: "¹⁶ Não porás à prova o Senhor, teu Deus, como o experimentaste em Massá.",
    },

    /* ---------- TERCEIRA TENTAÇÃO ---------- */

    {
      type: "verse",
      reference: "Mateus 4:8-9",
      text: `⁸ Tornou o Diabo a levá-lo, agora para um monte muito alto. E mostrou-lhe todos os reinos do mundo em todo o seu esplendor.

⁹ E propôs a Jesus: “Tudo isso te darei se, prostrado, me adorares”.`,
    },

    {
      type: "text",
      text: "Aqui, o diabo muda a tática, não usa a dúvida “SE”.",
    },

    {
      type: "text",
      text: "Nas duas primeiras tentações, ele tentou colocar dúvida na identidade de Jesus, dizendo: “Se tu és o Filho de Deus”.",
    },

    {
      type: "text",
      text: "Agora ele não questiona mais a identidade de Jesus.",
    },

    {
      type: "text",
      text: "O diabo agora abandona os disfarces e faz uma proposta direta de idolatria, na tentativa de mudar o propósito de Jesus.",
    },

    {
      type: "text",
      text: "O diabo oferece um “atalho” no plano original de Deus para Jesus, que seria herdar as nações e o domínio sobre o mundo. Isso passava pela humilhação, pelo sofrimento e pela morte na cruz. Satanás oferece a glória dos reinos terrestres sem a necessidade da dor da cruz.",
    },

    {
      type: "text",
      text: "O preço cobrado por esse atalho era a usurpação da autoridade de Deus, exigindo para si o culto que pertence exclusivamente ao Criador.",
    },

    {
      type: "application",
      text: "Você tem pego atalhos? Os atalhos são oferecidos pelo inferno aos filhos de Deus em troca do propósito que Deus tem para a vida de seus filhos.",
    },

    {
      type: "verse",
      reference: "Mateus 4:10-11",
      text: `¹⁰ Ordenou-lhe então Jesus: “Vai-te, Satanás, porque está escrito: ‘Ao SENHOR, teu Deus, adorarás e só a Ele servirás’”.

¹¹ Assim, o Diabo o deixou; e eis que vieram anjos, e o serviram.`,
    },

    {
      type: "verse",
      reference: "Deuteronômio 6:13",
      text: "¹³ É ao SENHOR, teu Deus, que deverás amor reverente, temor. A Ele servirás e pelo seu Nome jurarás!",
    },

    /* ---------- PARALELO ---------- */

    {
      type: "subheading",
      text: "Deuteronômio mostra um Paralelo entre Israel e Jesus no Deserto",
    },

    {
      type: "text",
      text: "Deuteronômio é o livro onde fala dos 40 anos da jornada do povo de Israel pelo deserto antes de entrarem na Terra Prometida.",
    },

    {
      type: "text",
      text: "Há um paralelo direto com os 40 dias de Jesus no deserto:",
    },

    {
      type: "list",
      items: [
        "Israel foi o “filho” de Deus criado na aliança.",
        "Passou 40 anos no deserto, foi provado na fome, na fé e na idolatria, e falhou repetidamente, murmurando e duvidando.",
        "Jesus é o Filho eterno de Deus, passou 40 dias no deserto, enfrentou exatamente as mesmas provações (fome, fé e idolatria), mas venceu todas elas.",
      ],
    },

    {
      type: "verse",
      reference: "Êxodo 4:22",
      text: "²² Então dirás a Faraó: Assim diz o Senhor: Israel é meu filho, meu primogênito.",
    },

    {
      type: "text",
      text: "Ao citar Deuteronômio, Jesus mostra que estava refazendo o caminho de Israel no deserto, mas agindo com perfeita obediência onde o povo havia fracassado.",
    },

    /* ---------- CONTRASTE ---------- */

    {
      type: "subheading",
      text: "O Contraste das Três Tentações",
    },

    {
      type: "list",
      items: [
        `1ª Tentação (Fome / Pão):

Alvo: A carne e a desconfiança.

A armadilha: Usar a autoridade divina em benefício próprio para suprir uma necessidade física e imediata (“Deus esqueceu de você, resolva do seu jeito”).`,

        `2ª Tentação (Templo / Salmo 91):

Alvo: O orgulho e a presunção.

A armadilha: Manipular a Palavra e a proteção de Deus para dar um espetáculo e forçar um milagre desnecessário (“Já que Deus te ama, coloque a vida em risco para obrigar Ele a agir”).`,

        `3ª Tentação (Montanha / Reinos):

Alvo: A ambição, a vaidade e a idolatria.

A armadilha: Buscar a coroa sem passar pela cruz. Satanás oferece um atalho para o domínio do mundo em troca do culto à sua autoridade (“Evite a dor, conquiste o mundo agora, só precisa comprometer sua fidelidade a Deus”).`,
      ],
    },
  ],
};

/* =========================================================
   CATEGORIAS
   ========================================================= */

const categorias = [
  {
    nome: "Batalha Espiritual",
    icone: "⚔",
    descricao:
      "Estudos sobre guerra espiritual, ataques das trevas, discernimento e resistência.",
    imagem: "/batalha-espiritual.png",
  },
  {
    nome: "Cura Interior",
    icone: "♡",
    descricao:
      "Estudos sobre restauração, perdão, rejeição, identidade e libertação.",
  },
  {
    nome: "Dons Espirituais",
    icone: "✦",
    descricao:
      "Conhecendo, discernindo e colocando em prática os dons do Espírito.",
  },
  {
    nome: "Caráter Cristão",
    icone: "◆",
    descricao:
      "Estudos sobre caráter, fruto do Espírito, honra, obediência e temor.",
  },
  {
    nome: "Intercessão",
    icone: "◉",
    descricao:
      "Formação e prática de uma vida de oração e intercessão.",
  },
  {
    nome: "Vida Cristã",
    icone: "✝",
    descricao:
      "Fundamentos e aplicações práticas para uma caminhada cristã madura.",
  },
];

/* =========================================================
   ESTUDOS
   ========================================================= */

const estudos: Estudo[] = [
  estudoTentacao,

  {
    id: "ataque-das-trevas-engano",
    titulo: "O Ataque das Trevas — 2. Engano",
    categoria: "Batalha Espiritual",
    resumo: "Estudo em preparação.",
    conteudo: [
      {
        type: "heading",
        text: "O ATAQUE DAS TREVAS",
      },
      {
        type: "subheading",
        text: "2. ENGANO",
      },
      {
        type: "text",
        text: "Este estudo será disponibilizado em breve.",
      },
    ],
  },

  {
    id: "ataque-das-trevas-pressao",
    titulo: "O Ataque das Trevas — 3. Pressão",
    categoria: "Batalha Espiritual",
    resumo: "Estudo em preparação.",
    conteudo: [
      {
        type: "heading",
        text: "O ATAQUE DAS TREVAS",
      },
      {
        type: "subheading",
        text: "3. PRESSÃO",
      },
      {
        type: "text",
        text: "Este estudo será disponibilizado em breve.",
      },
    ],
  },

  {
    id: "ataque-das-trevas-dominacao",
    titulo: "O Ataque das Trevas — 4. Dominação",
    categoria: "Batalha Espiritual",
    resumo: "Estudo em preparação.",
    conteudo: [
      {
        type: "heading",
        text: "O ATAQUE DAS TREVAS",
      },
      {
        type: "subheading",
        text: "4. DOMINAÇÃO",
      },
      {
        type: "text",
        text: "Este estudo será disponibilizado em breve.",
      },
    ],
  },

  {
    id: "ataque-das-trevas-possessao",
    titulo: "O Ataque das Trevas — 5. Possessão",
    categoria: "Batalha Espiritual",
    resumo: "Estudo em preparação.",
    conteudo: [
      {
        type: "heading",
        text: "O ATAQUE DAS TREVAS",
      },
      {
        type: "subheading",
        text: "5. POSSESSÃO",
      },
      {
        type: "text",
        text: "Este estudo será disponibilizado em breve.",
      },
    ],
  },
];

/* =========================================================
   APLICAÇÃO PRINCIPAL
   ========================================================= */

function App() {
  const [pagina, setPagina] = useState<
    "inicio" | "categoria" | "estudo"
  >("inicio");

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("");

  const [estudoSelecionado, setEstudoSelecionado] =
    useState<Estudo | null>(null);

  const [busca, setBusca] = useState("");

  const estudosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return estudos;
    }

    return estudos.filter(
      (estudo) =>
        estudo.titulo.toLowerCase().includes(termo) ||
        estudo.categoria.toLowerCase().includes(termo) ||
        estudo.resumo.toLowerCase().includes(termo),
    );
  }, [busca]);

  function abrirCategoria(nome: string) {
    setCategoriaSelecionada(nome);
    setPagina("categoria");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function abrirEstudo(estudo: Estudo) {
    setEstudoSelecionado(estudo);
    setPagina("estudo");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function voltarInicio() {
    setPagina("inicio");
    setCategoriaSelecionada("");
    setEstudoSelecionado(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const estudosDaCategoria =
    estudosFiltrados.filter(
      (estudo) =>
        estudo.categoria === categoriaSelecionada,
    );

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <button
          style={styles.logoButton}
          onClick={voltarInicio}
        >
          <span style={styles.logoMark}>✝</span>

          <span>
            <strong style={styles.logoTitle}>
              Caverna de Adulão
            </strong>

            <small style={styles.logoSubtitle}>
              Estudos • Palavra • Comunhão
            </small>
          </span>
        </button>

        {pagina !== "inicio" && (
          <button
            style={styles.homeButton}
            onClick={voltarInicio}
          >
            Início
          </button>
        )}
      </header>

      {/* =====================================================
          INÍCIO
          ===================================================== */}

      {pagina === "inicio" && (
        <>
          <section style={styles.hero}>
            <div style={styles.heroGlow} />

            <div style={styles.heroContent}>
              <div style={styles.badge}>
                BIBLIOTECA DE ESTUDOS
              </div>

              <h1 style={styles.heroTitle}>
                Caverna de Adulão
              </h1>

              <p style={styles.heroText}>
                Um espaço para estudar a Palavra de Deus,
                aprofundar conhecimentos e crescer juntos
                na caminhada cristã.
              </p>

              <div style={styles.searchWrap}>
                <span style={styles.searchIcon}>
                  ⌕
                </span>

                <input
                  value={busca}
                  onChange={(e) =>
                    setBusca(e.target.value)
                  }
                  placeholder="Pesquisar estudos..."
                  style={styles.searchInput}
                />
              </div>
            </div>
          </section>

          <main style={styles.section}>
            <div style={styles.sectionHeader}>
              <div>
                <div style={styles.kicker}>
                  Explore
                </div>

                <h2 style={styles.sectionTitle}>
                  Categorias de estudo
                </h2>
              </div>

              <span style={styles.count}>
                {estudosFiltrados.length} estudo(s)
              </span>
            </div>

            <div style={styles.categoryGrid}>
              {categorias.map((categoria) => (
                <button
                  key={categoria.nome}
                  style={styles.categoryCard}
                  onClick={() =>
                    abrirCategoria(categoria.nome)
                  }
                >
                  {categoria.imagem ? (
                    <img
                      src={categoria.imagem}
                      alt=""
                      style={styles.categoryImage}
                    />
                  ) : (
                    <div
                      style={
                        styles.categoryImagePlaceholder
                      }
                    >
                      {categoria.icone}
                    </div>
                  )}

                  <div
                    style={styles.categoryOverlay}
                  />

                  <div
                    style={styles.categoryContent}
                  >
                    <div
                      style={styles.categoryIcon}
                    >
                      {categoria.icone}
                    </div>

                    <h3
                      style={styles.categoryTitle}
                    >
                      {categoria.nome}
                    </h3>

                    <p
                      style={
                        styles.categoryDescription
                      }
                    >
                      {categoria.descricao}
                    </p>

                    <span style={styles.enter}>
                      Explorar estudos →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </main>
        </>
      )}

      {/* =====================================================
          CATEGORIA
          ===================================================== */}

      {pagina === "categoria" && (
        <main style={styles.page}>
          <button
            style={styles.backButton}
            onClick={voltarInicio}
          >
            ← Voltar para categorias
          </button>

          <div style={styles.kicker}>
            Categoria
          </div>

          <h1 style={styles.pageTitle}>
            {categoriaSelecionada}
          </h1>

          <p style={styles.pageIntro}>
            Estudos disponíveis nesta categoria.
          </p>

          {estudosDaCategoria.length === 0 ? (
            <div style={styles.empty}>
              Ainda não existem estudos publicados
              nesta categoria.
            </div>
          ) : (
            <div style={styles.studyGrid}>
              {estudosDaCategoria.map((estudo) => (
                <StudyCard
                  key={estudo.id}
                  estudo={estudo}
                  onClick={() =>
                    abrirEstudo(estudo)
                  }
                />
              ))}
            </div>
          )}
        </main>
      )}

      {/* =====================================================
          ESTUDO
          ===================================================== */}

      {pagina === "estudo" &&
        estudoSelecionado && (
          <main style={styles.page}>
            <button
              style={styles.backButton}
              onClick={() =>
                abrirCategoria(
                  estudoSelecionado.categoria,
                )
              }
            >
              ← Voltar para{" "}
              {estudoSelecionado.categoria}
            </button>

            <article style={styles.article}>
              <div style={styles.articleTop}>
                <span
                  style={styles.articleCategory}
                >
                  {estudoSelecionado.categoria}
                </span>

                <h1 style={styles.articleTitle}>
                  {estudoSelecionado.titulo}
                </h1>

                <p
                  style={styles.articleSummary}
                >
                  {estudoSelecionado.resumo}
                </p>
              </div>

              <div style={styles.studyBody}>
                {estudoSelecionado.conteudo.map(
                  (bloco, index) => (
                    <BlocoView
                      key={`${estudoSelecionado.id}-${index}`}
                      bloco={bloco}
                    />
                  ),
                )}
              </div>

              <div style={styles.studyEnd}>
                Fim deste estudo.
              </div>
            </article>
          </main>
        )}
    </div>
  );
}

/* =========================================================
   CARD DE ESTUDO
   ========================================================= */

function StudyCard({
  estudo,
  onClick,
}: {
  estudo: Estudo;
  onClick: () => void;
}) {
  return (
    <button
      style={styles.studyCard}
      onClick={onClick}
    >
      <span style={styles.studyCardCategory}>
        {estudo.categoria}
      </span>

      <h3 style={styles.studyCardTitle}>
        {estudo.titulo}
      </h3>

      <p style={styles.studyCardText}>
        {estudo.resumo}
      </p>

      <span style={styles.readMore}>
        Ler estudo →
      </span>
    </button>
  );
}

/* =========================================================
   RENDERIZAÇÃO DOS BLOCOS
   ========================================================= */

function BlocoView({
  bloco,
}: {
  bloco: Bloco;
}) {
  if (bloco.type === "heading") {
    return (
      <h1 style={styles.contentHeading}>
        {bloco.text}
      </h1>
    );
  }

  if (bloco.type === "subheading") {
    return (
      <h2 style={styles.contentSubheading}>
        {bloco.text}
      </h2>
    );
  }

  if (bloco.type === "verse") {
    return (
      <div style={styles.verseBox}>
        <div style={styles.verseLabel}>
          📖 PALAVRA — {bloco.reference}
        </div>

        <div style={styles.verseText}>
          {bloco.text}
        </div>
      </div>
    );
  }

  if (bloco.type === "application") {
    return (
      <div style={styles.applicationBox}>
        <div style={styles.applicationLabel}>
          ⚔ APLICAÇÃO
        </div>

        <div style={styles.applicationText}>
          {bloco.text}
        </div>
      </div>
    );
  }

  if (bloco.type === "note") {
    return (
      <div style={styles.noteBox}>
        ⚠ {bloco.text}
      </div>
    );
  }

  if (bloco.type === "list") {
    return (
      <div style={styles.listBox}>
        {bloco.items.map((item, index) => (
          <div
            key={index}
            style={styles.listItem}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <p style={styles.contentText}>
      {bloco.text}
    </p>
  );
}

/* =========================================================
   ESTILOS
   ========================================================= */

const styles: Record<
  string,
  CSSProperties
> = {
  app: {
    minHeight: "100vh",
    background: "#07101f",
    color: "#eef5ff",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5vw",
    background:
      "rgba(5,12,25,.88)",
    backdropFilter: "blur(18px)",
    borderBottom:
      "1px solid rgba(255,255,255,.08)",
  },

  logoButton: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "none",
    border: 0,
    color: "inherit",
    cursor: "pointer",
    textAlign: "left",
  },

  logoMark: {
    width: 38,
    height: 38,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    background:
      "linear-gradient(135deg,#377dff,#6d4aff)",
    fontSize: 21,
    boxShadow:
      "0 8px 30px rgba(55,125,255,.25)",
  },

  logoTitle: {
    display: "block",
    fontSize: 17,
    letterSpacing: ".2px",
  },

  logoSubtitle: {
    display: "block",
    color: "#8ea3bd",
    fontSize: 11,
    marginTop: 2,
  },

  homeButton: {
    border:
      "1px solid rgba(255,255,255,.12)",
    background:
      "rgba(255,255,255,.05)",
    color: "#dce9fb",
    borderRadius: 10,
    padding: "9px 15px",
    cursor: "pointer",
  },

  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: 450,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "70px 20px",
    background:
      "radial-gradient(circle at 50% 15%, rgba(62,117,255,.25), transparent 42%), linear-gradient(180deg,#0b1830 0%,#07101f 100%)",
  },

  heroGlow: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background:
      "rgba(61,112,255,.08)",
    filter: "blur(20px)",
  },

  heroContent: {
    position: "relative",
    maxWidth: 850,
    width: "100%",
  },

  badge: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 2,
    color: "#79b1ff",
    marginBottom: 18,
  },

  heroTitle: {
    margin: 0,
    fontSize:
      "clamp(42px,7vw,78px)",
    lineHeight: 1,
    letterSpacing: -3,
    background:
      "linear-gradient(135deg,#fff,#91bfff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor:
      "transparent",
  },

  heroText: {
    maxWidth: 620,
    margin: "24px auto 30px",
    color: "#9fb0c7",
    fontSize: 18,
    lineHeight: 1.65,
  },

  searchWrap: {
    maxWidth: 620,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 17px",
    border:
      "1px solid rgba(125,171,255,.2)",
    background:
      "rgba(255,255,255,.055)",
    borderRadius: 15,
    boxShadow:
      "0 15px 50px rgba(0,0,0,.2)",
  },

  searchIcon: {
    color: "#8bb9ff",
    fontSize: 26,
  },

  searchInput: {
    width: "100%",
    height: 58,
    border: 0,
    outline: 0,
    background: "transparent",
    color: "white",
    fontSize: 16,
  },

  section: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "60px 5vw 90px",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: 24,
    gap: 20,
  },

  kicker: {
    color: "#6faaff",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  sectionTitle: {
    margin: "7px 0 0",
    fontSize: 30,
  },

  count: {
    color: "#73859e",
    fontSize: 13,
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: 18,
  },

  categoryCard: {
    position: "relative",
    minHeight: 260,
    overflow: "hidden",
    borderRadius: 20,
    border:
      "1px solid rgba(255,255,255,.09)",
    background: "#0d1a2e",
    color: "white",
    cursor: "pointer",
    textAlign: "left",
    padding: 0,
  },

  categoryImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  categoryImagePlaceholder: {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    fontSize: 50,
    color: "#5f8fd0",
    background:
      "radial-gradient(circle,#132f57,#0b1729 70%)",
  },

  categoryOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg,rgba(4,10,20,.12),rgba(4,10,20,.94))",
  },

  categoryContent: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    padding: 24,
  },

  categoryIcon: {
    color: "#78b0ff",
    fontSize: 18,
  },

  categoryTitle: {
    margin: "7px 0 6px",
    fontSize: 24,
  },

  categoryDescription: {
    margin: 0,
    color: "#b4c3d8",
    lineHeight: 1.5,
    fontSize: 13,
  },

  enter: {
    marginTop: 16,
    color: "#81b5ff",
    fontSize: 13,
    fontWeight: 700,
  },

  page: {
    maxWidth: 1050,
    margin: "0 auto",
    padding: "45px 5vw 90px",
  },

  backButton: {
    border: 0,
    background: "none",
    color: "#82b5ff",
    padding: 0,
    marginBottom: 35,
    cursor: "pointer",
    fontSize: 14,
  },

  pageTitle: {
    margin: "8px 0 8px",
    fontSize:
      "clamp(35px,5vw,58px)",
    letterSpacing: -2,
  },

  pageIntro: {
    color: "#8fa2bb",
    marginBottom: 35,
  },

  studyGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: 16,
  },

  studyCard: {
    textAlign: "left",
    border:
      "1px solid rgba(255,255,255,.09)",
    background:
      "linear-gradient(145deg,#0e1d33,#0a1527)",
    color: "white",
    borderRadius: 17,
    padding: 24,
    cursor: "pointer",
    minHeight: 210,
  },

  studyCardCategory: {
    color: "#72adff",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  studyCardTitle: {
    fontSize: 22,
    margin: "12px 0 10px",
  },

  studyCardText: {
    color: "#94a8c1",
    lineHeight: 1.55,
    fontSize: 13,
  },

  readMore: {
    display: "inline-block",
    marginTop: 12,
    color: "#82b5ff",
    fontSize: 13,
    fontWeight: 700,
  },

  empty: {
    padding: 35,
    border:
      "1px dashed rgba(255,255,255,.14)",
    borderRadius: 16,
    color: "#7e92ad",
  },

  article: {
    background: "#091426",
    border:
      "1px solid rgba(255,255,255,.08)",
    borderRadius: 24,
    overflow: "hidden",
    boxShadow:
      "0 25px 70px rgba(0,0,0,.25)",
  },

  articleTop: {
    padding:
      "42px clamp(24px,6vw,70px) 38px",
    background:
      "linear-gradient(145deg,#102544,#091426)",
  },

  articleCategory: {
    color: "#73adff",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },

  articleTitle: {
    fontSize:
      "clamp(34px,5vw,55px)",
    lineHeight: 1.05,
    letterSpacing: -2,
    margin: "12px 0 18px",
  },

  articleSummary: {
    color: "#a5b6cb",
    maxWidth: 760,
    lineHeight: 1.65,
    margin: 0,
    fontSize: 16,
  },

  studyBody: {
    padding:
      "42px clamp(24px,6vw,70px) 65px",
  },

  contentHeading: {
    fontSize: 30,
    margin: "0 0 28px",
    color: "#fff",
    letterSpacing: 1,
  },

  contentSubheading: {
    fontSize: 25,
    margin: "42px 0 18px",
    color: "#dceaff",
    lineHeight: 1.25,
  },

  contentText: {
    color: "#d1dbea",
    fontSize: 17,
    lineHeight: 1.85,
    margin: "0 0 22px",
  },

  /* =======================================================
     CAIXA DO TEXTO BÍBLICO
     ======================================================= */

  verseBox: {
    margin: "30px 0",
    padding: "23px 25px 25px",
    background:
      "rgba(72,125,196,.09)",
    border:
      "1px solid rgba(98,157,232,.18)",
    borderLeft:
      "4px solid #5d9de8",
    borderRadius:
      "5px 15px 15px 5px",
    boxShadow:
      "inset 0 1px rgba(255,255,255,.025)",
  },

  verseLabel: {
    color: "#82b8f5",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.3,
    marginBottom: 15,
    textTransform: "uppercase",
  },

  verseText: {
    whiteSpace: "pre-line",
    color: "#dce9f8",
    fontFamily:
      "Georgia, 'Times New Roman', serif",
    fontSize: 16.5,
    lineHeight: 1.85,
  },

  /* =======================================================
     CAIXA DE APLICAÇÃO
     ======================================================= */

  applicationBox: {
    margin: "30px 0",
    padding: "21px 24px",
    background:
      "rgba(87,72,180,.09)",
    border:
      "1px solid rgba(133,119,228,.18)",
    borderLeft:
      "4px solid #806ed6",
    borderRadius:
      "5px 15px 15px 5px",
  },

  applicationLabel: {
    color: "#a69af0",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.3,
    marginBottom: 10,
  },

  applicationText: {
    color: "#e2def8",
    fontSize: 17,
    lineHeight: 1.75,
    fontWeight: 600,
  },

  noteBox: {
    margin: "20px 0",
    padding: "16px 20px",
    background:
      "rgba(220,169,60,.08)",
    border:
      "1px solid rgba(220,169,60,.15)",
    borderLeft:
      "4px solid #c79d42",
    borderRadius:
      "5px 12px 12px 5px",
    color: "#ead9aa",
    fontWeight: 700,
  },

  listBox: {
    margin: "10px 0 25px",
    display: "grid",
    gap: 14,
  },

  listItem: {
    whiteSpace: "pre-line",
    padding: "17px 20px",
    borderRadius: 13,
    background:
      "rgba(255,255,255,.035)",
    border:
      "1px solid rgba(255,255,255,.07)",
    color: "#d1dbea",
    lineHeight: 1.7,
  },

  studyEnd: {
    marginTop: 45,
    paddingTop: 24,
    borderTop:
      "1px solid rgba(255,255,255,.08)",
    color: "#6f829b",
    fontSize: 12,
    textAlign: "center",
  },
};

export default App;
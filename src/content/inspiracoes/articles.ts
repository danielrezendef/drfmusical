import type { InspirationArticle } from "./types";

const editorialCover = "/fundo.png";
const editorialCoverAlt = "Partitura em fundo claro representando a trilha sonora do casamento";

export const inspirationArticles: InspirationArticle[] = [
  {
    slug: "musicas-para-entrada-da-noiva",
    title: "Músicas para entrada da noiva: como escolher a trilha ideal",
    excerpt:
      "Entenda como emoção, andamento e formação musical ajudam a encontrar uma entrada marcante e coerente com a cerimônia.",
    category: "musicas-por-momento",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-15",
    readingTime: "5 min de leitura",
    featured: true,
    keywords: ["músicas para entrada da noiva", "entrada da noiva", "música de casamento"],
    tip:
      "Leve duas ou três referências ao grupo musical e conte o que vocês desejam sentir. O arranjo pode aproximar uma canção afetiva da atmosfera da cerimônia.",
    sections: [
      {
        id: "comece-pela-historia",
        title: "Comece pela história, não pela tendência",
        paragraphs: [
          "A entrada da noiva concentra expectativa, emoção e muitos olhares. A música ideal não precisa ser a mais popular: ela precisa conversar com a história do casal e com a maneira como a noiva deseja viver esse percurso.",
          "Uma canção ligada a uma lembrança importante pode funcionar muito bem. Quando a letra não combina com o contexto, uma versão instrumental preserva a melodia e dá ao momento um significado particular.",
        ],
      },
      {
        id: "andamento-e-espaco",
        title: "Considere o andamento e o espaço da cerimônia",
        paragraphs: [
          "O tamanho do corredor, a quantidade de pessoas no cortejo e a acústica influenciam a duração e a intensidade do arranjo. Entradas curtas pedem introduções objetivas; percursos longos permitem construir a música aos poucos.",
        ],
        subsections: [
          {
            title: "Clássica ou contemporânea?",
            paragraphs: [
              "Marchas, temas sacros e canções atuais podem ser igualmente elegantes. A diferença está no arranjo, na interpretação e na coerência com o restante do repertório.",
            ],
          },
          {
            title: "Voz ou instrumental?",
            paragraphs: [
              "A voz traz a mensagem da letra para o primeiro plano. A versão instrumental costuma criar uma atmosfera mais aberta e facilita pequenas adaptações de duração.",
            ],
          },
        ],
      },
      {
        id: "ensaio-e-sinal",
        title: "Alinhe a entrada com a equipe da cerimônia",
        paragraphs: [
          "Defina com antecedência o ponto exato em que as portas se abrem e quem dará o sinal aos músicos. Esse alinhamento evita silêncios, cortes bruscos e aceleração do passo.",
          "No ensaio, confirme o tempo aproximado do trajeto. A equipe musical poderá preparar uma introdução, uma repetição ou uma finalização que acompanhe a chegada ao altar com naturalidade.",
        ],
      },
    ],
    relatedSlugs: [
      "como-escolher-musicas-do-casamento",
      "playlist-casamento-classico",
      "como-funciona-musica-na-cerimonia",
    ],
  },
  {
    slug: "musicas-para-entrada-do-noivo",
    title: "Músicas para entrada do noivo: elegância, personalidade e emoção",
    excerpt:
      "Veja como escolher uma música que represente o noivo e inaugure a cerimônia com presença, sensibilidade e equilíbrio.",
    category: "musicas-por-momento",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-12",
    readingTime: "4 min de leitura",
    keywords: ["músicas para entrada do noivo", "entrada do noivo", "cerimônia de casamento"],
    tip:
      "A entrada do noivo pode ter identidade própria sem parecer desconectada. Use timbres e uma linguagem de arranjo que reapareçam em outros momentos da cerimônia.",
    sections: [
      {
        id: "identidade-do-noivo",
        title: "Uma escolha com a identidade do noivo",
        paragraphs: [
          "A primeira música do cortejo ajuda a apresentar o clima da celebração. Ela pode ser solene, acolhedora, contemporânea ou religiosa, desde que pareça verdadeira para quem está entrando.",
          "Vale observar artistas, gêneros e canções que fazem parte da rotina do noivo. Uma adaptação bem construída costuma ser mais pessoal do que uma lista pronta de sucessos.",
        ],
      },
      {
        id: "abertura-da-cerimonia",
        title: "Pense nela como a abertura da cerimônia",
        paragraphs: [
          "Como o público ainda está se acomodando emocionalmente, um arranjo com começo claro organiza a atenção e sinaliza que a cerimônia começou. A intensidade deve crescer sem antecipar o ápice reservado à entrada da noiva.",
        ],
      },
      {
        id: "formacoes-possiveis",
        title: "Escolha timbres que valorizem a música",
        paragraphs: [
          "Voz e violão criam proximidade; teclado e violino ampliam a solenidade; trompete pode marcar entradas de caráter mais clássico. A formação deve respeitar o espaço e o equilíbrio sonoro do evento.",
          "Converse com os músicos sobre tom, introdução e duração. Esses detalhes permitem que o noivo caminhe com tranquilidade e que a finalização coincida com sua posição no altar.",
        ],
      },
    ],
    relatedSlugs: [
      "musicas-para-entrada-da-noiva",
      "quantos-musicos-contratar",
      "playlist-casamento-moderno",
    ],
  },
  {
    slug: "musicas-para-entrada-das-aliancas",
    title: "Músicas para entrada das alianças: delicadeza e significado",
    excerpt:
      "Ideias para criar uma entrada das alianças delicada, bem dimensionada e conectada ao simbolismo desse momento.",
    category: "musicas-por-momento",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-10",
    readingTime: "4 min de leitura",
    keywords: ["músicas para entrada das alianças", "entrada das alianças", "alianças casamento"],
    tip:
      "Para crianças ou animais levando as alianças, prefira um arranjo flexível. Assim, os músicos conseguem repetir um trecho sem que a adaptação fique perceptível.",
    sections: [
      {
        id: "simbolismo",
        title: "Valorize o significado das alianças",
        paragraphs: [
          "As alianças representam continuidade e compromisso. Canções sobre cuidado, parceria, fé ou construção de uma vida em comum ajudam a reforçar esse simbolismo sem competir com o rito.",
        ],
      },
      {
        id: "quem-leva",
        title: "Considere quem fará a entrada",
        paragraphs: [
          "O andamento precisa combinar com quem levará as alianças. Crianças podem parar ou mudar o ritmo; pessoas mais velhas podem preferir uma caminhada tranquila. O arranjo ao vivo permite acompanhar essas variações com sensibilidade.",
          "Se a entrada for breve, escolha um trecho reconhecível desde os primeiros compassos. Uma introdução longa pode terminar antes que a melodia principal apareça.",
        ],
      },
      {
        id: "transicao",
        title: "Planeje a transição para o rito",
        paragraphs: [
          "A finalização deve abrir espaço para a fala do celebrante e a troca das alianças. Um acorde sustentado ou uma cadência suave costuma funcionar melhor do que um encerramento muito expansivo.",
        ],
      },
    ],
    relatedSlugs: [
      "como-funciona-musica-na-cerimonia",
      "playlist-casamento-religioso",
      "musicas-para-comunhao",
    ],
  },
  {
    slug: "musicas-para-comunhao",
    title: "Músicas para comunhão em casamento",
    excerpt:
      "Como selecionar cantos adequados à comunhão, respeitando a liturgia, o tempo do rito e a atmosfera do casamento.",
    category: "musicas-por-momento",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-08",
    readingTime: "5 min de leitura",
    keywords: ["músicas para comunhão", "comunhão casamento", "música religiosa casamento"],
    tip:
      "Antes de fechar o repertório religioso, confirme as orientações da paróquia ou do celebrante. Cada comunidade pode ter critérios próprios para letras e momentos litúrgicos.",
    sections: [
      {
        id: "funcao-liturgica",
        title: "A música a serviço do rito",
        paragraphs: [
          "Na comunhão, a música acompanha um gesto coletivo de fé. Por isso, letra e interpretação devem favorecer recolhimento, unidade e participação, em vez de transformar o momento em apresentação isolada.",
        ],
      },
      {
        id: "repertorio-aprovado",
        title: "Verifique as orientações da celebração",
        paragraphs: [
          "Em cerimônias católicas, a equipe da igreja pode solicitar repertório litúrgico e analisar previamente as escolhas. Enviar a lista com antecedência evita substituições perto da data.",
          "Canções de devoção, entrega e encontro com Cristo costumam ser coerentes, mas a aprovação local continua sendo a referência principal.",
        ],
      },
      {
        id: "duracao-comunhao",
        title: "Dimensione a duração musical",
        paragraphs: [
          "O número de convidados que comungará define se uma música é suficiente. Os músicos podem preparar repetição, emenda com outro canto ou finalização antecipada, sempre acompanhando o andamento real do rito.",
        ],
      },
    ],
    relatedSlugs: [
      "playlist-casamento-religioso",
      "como-funciona-musica-na-cerimonia",
      "musicas-para-entrada-das-aliancas",
    ],
  },
  {
    slug: "musicas-para-saida-dos-noivos",
    title: "Músicas para saída dos noivos: alegria para começar a celebração",
    excerpt:
      "Escolha uma música luminosa e envolvente para marcar o primeiro passo dos recém-casados rumo à celebração.",
    category: "musicas-por-momento",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-06",
    readingTime: "4 min de leitura",
    keywords: ["músicas para saída dos noivos", "saída do casamento", "música alegre casamento"],
    tip:
      "Escolha uma música cuja energia apareça logo no início. A saída acontece rapidamente e pede um refrão ou tema capaz de envolver os convidados sem demora.",
    sections: [
      {
        id: "mudanca-de-clima",
        title: "A saída muda o clima da cerimônia",
        paragraphs: [
          "Depois dos votos e das assinaturas, a saída abre a celebração. É o momento de ampliar a energia, convidar sorrisos e criar um contraste positivo com as passagens mais contemplativas.",
        ],
      },
      {
        id: "musicas-luminosas",
        title: "Procure melodias luminosas e reconhecíveis",
        paragraphs: [
          "Canções com pulsação definida, refrões marcantes e mensagens de alegria funcionam bem. O estilo pode ir do pop à música brasileira, do gospel ao instrumental clássico com arranjo vibrante.",
          "Mais importante do que o gênero é a sensação: a música deve representar a alegria do casal e soar natural dentro da celebração que acabou de acontecer.",
        ],
      },
      {
        id: "coordenacao-final",
        title: "Coordene músicos, fotografia e cortejo",
        paragraphs: [
          "Combine o sinal de início após a apresentação do casal. Fotógrafos e equipe de cerimônia também precisam saber se haverá pausa na porta, chuva de pétalas ou cumprimento dos convidados.",
        ],
      },
    ],
    relatedSlugs: [
      "playlist-casamento-moderno",
      "como-escolher-musicas-do-casamento",
      "playlist-primeira-danca",
    ],
  },
  {
    slug: "como-escolher-musicas-do-casamento",
    title: "Como escolher as músicas do casamento",
    excerpt:
      "Um método simples para transformar referências, memórias e estilos em um repertório coerente para toda a cerimônia.",
    category: "guias",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-13",
    updatedAt: "2026-07-15",
    readingTime: "7 min de leitura",
    featured: true,
    keywords: ["como escolher músicas do casamento", "repertório casamento", "planejar música casamento"],
    tip:
      "Monte primeiro uma lista afetiva, sem pensar em cada momento. Depois, com ajuda musical, distribua as canções conforme letra, andamento e função na cerimônia.",
    sections: [
      {
        id: "mapa-da-cerimonia",
        title: "Faça um mapa dos momentos",
        paragraphs: [
          "Antes de escolher títulos, liste todas as entradas e ritos que terão música: noivo, padrinhos, noiva, alianças, comunhão, assinaturas, fotos e saída. O roteiro varia conforme o tipo de celebração.",
          "Esse mapa evita repertório em excesso e mostra quais passagens precisam de músicas completas, trechos curtos ou apenas um fundo instrumental.",
        ],
      },
      {
        id: "tres-criterios",
        title: "Use três critérios para cada escolha",
        paragraphs: [
          "Pergunte se a canção tem significado para vocês, se a letra combina com o momento e se o andamento favorece a ação que acontecerá. Quando os três pontos se encontram, a escolha costuma permanecer especial por muitos anos.",
        ],
        subsections: [
          {
            title: "Significado",
            paragraphs: ["Priorize memórias e valores que pertencem à história do casal."],
          },
          {
            title: "Coerência",
            paragraphs: ["Leia a letra inteira e observe as orientações religiosas, quando existirem."],
          },
          {
            title: "Viabilidade musical",
            paragraphs: ["Converse sobre tom, instrumentação, duração e possibilidades de arranjo."],
          },
        ],
      },
      {
        id: "unidade-repertorio",
        title: "Crie unidade sem deixar tudo igual",
        paragraphs: [
          "O repertório pode reunir estilos diferentes. A unidade nasce da formação musical, dos arranjos e da curva de energia: acolher no início, aprofundar a emoção e celebrar na saída.",
          "Finalize a lista com antecedência suficiente para aprovações e ensaios. Mudanças próximas à data podem limitar a qualidade dos arranjos personalizados.",
        ],
      },
    ],
    relatedSlugs: [
      "como-funciona-musica-na-cerimonia",
      "musicas-para-entrada-da-noiva",
      "playlist-casamento-classico",
    ],
  },
  {
    slug: "musica-ao-vivo-ou-dj",
    title: "Música ao vivo ou DJ: qual combina mais com seu casamento?",
    excerpt:
      "Compare o papel da música ao vivo e do DJ em cada etapa do evento para montar uma experiência coerente com o casal.",
    category: "guias",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-09",
    readingTime: "6 min de leitura",
    keywords: ["música ao vivo ou DJ", "música casamento", "DJ casamento"],
    tip:
      "Música ao vivo e DJ não precisam competir. Muitos casamentos usam músicos na cerimônia e recepção inicial, deixando o DJ conduzir a pista mais tarde.",
    sections: [
      {
        id: "experiencias-diferentes",
        title: "Experiências diferentes, objetivos diferentes",
        paragraphs: [
          "A música ao vivo cria presença e responde ao ritmo real do momento. O DJ oferece grande variedade de gravações e transições contínuas, especialmente úteis em uma pista de dança longa.",
          "A decisão melhora quando o casal separa cerimônia, recepção, jantar e festa, em vez de procurar uma única solução para todo o evento.",
        ],
      },
      {
        id: "onde-cada-formato-funciona",
        title: "Onde cada formato costuma funcionar bem",
        paragraphs: [
          "Na cerimônia, músicos conseguem adaptar entradas, prolongar trechos e acompanhar imprevistos. Durante o jantar, uma formação acústica cria atmosfera sem impedir conversas. Na pista, o DJ mantém repertório amplo e energia contínua.",
        ],
      },
      {
        id: "decisao-pratica",
        title: "Avalie espaço, repertório e investimento",
        paragraphs: [
          "Considere estrutura elétrica, limite de som, área disponível e repertório desejado. Peça propostas que deixem claros formação, duração, sonorização e intervalos.",
          "A melhor escolha é a que sustenta a experiência imaginada pelos noivos, sem seguir uma regra pronta ou transformar formatos complementares em opostos.",
        ],
      },
    ],
    relatedSlugs: [
      "quantos-musicos-contratar",
      "playlist-casamento-moderno",
      "como-escolher-musicas-do-casamento",
    ],
  },
  {
    slug: "quantos-musicos-contratar",
    title: "Quantos músicos contratar para o casamento?",
    excerpt:
      "Entenda como espaço, repertório, número de convidados e atmosfera desejada orientam a formação musical ideal.",
    category: "guias",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-07",
    readingTime: "6 min de leitura",
    keywords: ["quantos músicos contratar", "formação musical casamento", "músicos para casamento"],
    tip:
      "Comece pela sensação desejada e pelo repertório. A quantidade é consequência: uma formação menor bem escolhida pode preencher o ambiente com mais coerência do que muitos instrumentos sem função definida.",
    sections: [
      {
        id: "nao-existe-numero-unico",
        title: "Não existe um número ideal para todos os casamentos",
        paragraphs: [
          "Uma cerimônia íntima pode ganhar profundidade com voz e teclado. Um espaço amplo ou repertório de caráter sinfônico pode pedir cordas, sopros e uma sonorização mais robusta.",
          "O tamanho da formação deve responder ao ambiente e ao arranjo, não apenas ao número de convidados.",
        ],
      },
      {
        id: "funcoes-dos-instrumentos",
        title: "Entenda a função de cada instrumento",
        paragraphs: [
          "Teclado e violão oferecem base harmônica; voz comunica letras; violino e cello desenham melodias e texturas; saxofone e trompete acrescentam cor e presença. Combinações diferentes mudam completamente a atmosfera.",
        ],
      },
      {
        id: "criterios-orcamento",
        title: "Compare propostas com critérios claros",
        paragraphs: [
          "Além do número de músicos, confira duração, ensaios, arranjos, equipamento de som, deslocamento e suporte durante a cerimônia. Esses itens explicam diferenças de investimento.",
          "Use uma simulação inicial para explorar formações e depois converse com a equipe sobre o espaço, o repertório e o roteiro do casamento.",
        ],
      },
    ],
    relatedSlugs: [
      "musica-ao-vivo-ou-dj",
      "como-funciona-musica-na-cerimonia",
      "playlist-casamento-religioso",
    ],
  },
  {
    slug: "como-funciona-musica-na-cerimonia",
    title: "Como funciona a música em cada momento da cerimônia",
    excerpt:
      "Conheça a função musical das principais entradas e ritos para planejar um roteiro fluido, emocionante e sem excessos.",
    category: "guias",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-05",
    readingTime: "7 min de leitura",
    keywords: ["música na cerimônia", "momentos casamento", "roteiro musical casamento"],
    tip:
      "Entregue aos músicos a ordem completa do cortejo, os nomes dos responsáveis pelos sinais e uma previsão de duração. Um bom roteiro musical também é um roteiro de comunicação.",
    sections: [
      {
        id: "antes-do-cortejo",
        title: "Recepção dos convidados e início do cortejo",
        paragraphs: [
          "Antes da cerimônia, música ambiente acolhe os convidados sem criar um começo falso. Quando o cortejo se inicia, a mudança de peça ou intensidade organiza a atenção.",
          "Noivo, padrinhos, crianças e noiva podem ter temas próprios, desde que as transições sejam planejadas e não fragmentem demais a experiência.",
        ],
      },
      {
        id: "ritos-centrais",
        title: "Ritos, alianças e comunhão",
        paragraphs: [
          "Durante leituras e falas, o silêncio costuma ter papel importante. A música retorna em momentos previstos, como alianças, bênçãos, comunhão e homenagens, respeitando o rito e a orientação do celebrante.",
        ],
      },
      {
        id: "assinaturas-e-saida",
        title: "Assinaturas, fotos e saída",
        paragraphs: [
          "Assinaturas e fotos permitem músicas mais longas e leves. A saída pede uma mudança clara de energia, marcando a passagem da cerimônia para a celebração.",
          "Um responsável pela assessoria deve sinalizar cada etapa aos músicos. Isso permite adaptar repetições e finais sem interromper o fluxo.",
        ],
      },
    ],
    relatedSlugs: [
      "como-escolher-musicas-do-casamento",
      "musicas-para-entrada-das-aliancas",
      "musicas-para-saida-dos-noivos",
    ],
  },
  {
    slug: "playlist-casamento-classico",
    title: "Playlist para casamento clássico",
    excerpt:
      "Referências para construir uma cerimônia clássica com solenidade, delicadeza e arranjos que atravessam gerações.",
    category: "playlists",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-11",
    readingTime: "5 min de leitura",
    featured: true,
    keywords: ["playlist casamento clássico", "música clássica casamento", "repertório clássico casamento"],
    tip:
      "Clássico não significa rígido. Uma peça tradicional pode receber instrumentação mais íntima, enquanto uma canção contemporânea pode ganhar um arranjo de cordas elegante.",
    sections: [
      {
        id: "o-que-torna-classico",
        title: "O que torna um repertório clássico",
        paragraphs: [
          "Melodias duradouras, formas claras e timbres acústicos ajudam a criar solenidade. Marchas nupciais, temas barrocos, árias e versões instrumentais de canções afetivas podem conviver no mesmo roteiro.",
        ],
      },
      {
        id: "sequencia-sugerida",
        title: "Uma sequência de referências",
        paragraphs: [
          "Para o noivo e padrinhos, considere temas de caráter sereno. Na entrada da noiva, uma marcha ou melodia ampla cria o ápice. Alianças e assinaturas recebem peças delicadas; a saída pode trazer uma obra festiva e luminosa.",
          "Use a sequência como ponto de partida. O valor do repertório aparece quando cada escolha encontra uma memória ou intenção do casal.",
        ],
      },
      {
        id: "formacao-classica",
        title: "Formações que valorizam esse estilo",
        paragraphs: [
          "Teclado com violino oferece versatilidade; cello acrescenta profundidade; trompete cria brilho em entradas solenes. A voz pode aparecer em temas religiosos ou canções escolhidas pelo casal.",
        ],
      },
    ],
    relatedSlugs: [
      "musicas-para-entrada-da-noiva",
      "quantos-musicos-contratar",
      "playlist-casamento-religioso",
    ],
  },
  {
    slug: "playlist-casamento-religioso",
    title: "Playlist para casamento religioso",
    excerpt:
      "Como reunir cantos e músicas que respeitem a celebração religiosa e expressem a fé e a história do casal.",
    category: "playlists",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-04",
    readingTime: "6 min de leitura",
    keywords: ["playlist casamento religioso", "música religiosa casamento", "cantos casamento"],
    tip:
      "A aprovação religiosa vem antes do ensaio final. Organize uma lista com título, intérprete de referência e momento em que cada música será executada.",
    sections: [
      {
        id: "fe-e-historia",
        title: "Una fé, história e função litúrgica",
        paragraphs: [
          "O repertório religioso pode expressar gratidão, aliança e esperança, mas cada música também precisa ser adequada ao ponto da celebração em que aparece.",
          "Canções afetivas não aprovadas para o rito podem ser reservadas para assinaturas, fotos ou recepção, conforme orientação local.",
        ],
      },
      {
        id: "momentos-repertorio",
        title: "Organize o repertório por momentos",
        paragraphs: [
          "Acolhida e cortejo pedem solenidade; salmo e aclamação têm função própria; alianças podem receber um tema de entrega; comunhão pede canto coerente com o rito; a saída comporta alegria mais expansiva.",
        ],
      },
      {
        id: "dialogo-com-comunidade",
        title: "Converse com celebrante e equipe musical",
        paragraphs: [
          "Paróquias e comunidades possuem orientações diferentes. Compartilhe o roteiro cedo e deixe margem para ajustes. Músicos experientes podem sugerir alternativas que preservem o significado desejado.",
        ],
      },
    ],
    relatedSlugs: [
      "musicas-para-comunhao",
      "musicas-para-entrada-das-aliancas",
      "como-funciona-musica-na-cerimonia",
    ],
  },
  {
    slug: "playlist-casamento-moderno",
    title: "Playlist para casamento moderno",
    excerpt:
      "Referências para um casamento contemporâneo, afetivo e elegante, com canções atuais adaptadas para música ao vivo.",
    category: "playlists",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-03",
    readingTime: "5 min de leitura",
    keywords: ["playlist casamento moderno", "músicas modernas casamento", "repertório casamento"],
    tip:
      "Experimente ouvir suas canções favoritas em versões acústicas. Muitas músicas ganham delicadeza quando voz, teclado, violão ou cordas substituem a produção original.",
    sections: [
      {
        id: "moderno-com-identidade",
        title: "Contemporâneo sem perder a emoção",
        paragraphs: [
          "Um repertório moderno nasce das referências atuais do casal, não apenas do ano de lançamento. Pop, MPB, indie, gospel e sertanejo podem receber arranjos elegantes para a cerimônia.",
        ],
      },
      {
        id: "adapte-arranjos",
        title: "Adapte produção e andamento",
        paragraphs: [
          "Gravações com batidas eletrônicas ou muitos efeitos precisam ser traduzidas para a formação disponível. Às vezes, desacelerar levemente e destacar a melodia revela uma nova beleza.",
          "Leia a letra completa. Uma melodia romântica pode carregar uma narrativa de término ou conflito que não combina com o momento escolhido.",
        ],
      },
      {
        id: "curva-de-energia",
        title: "Construa uma curva de energia",
        paragraphs: [
          "Comece com canções acolhedoras, reserve maior intensidade para a entrada da noiva e encerre com uma escolha vibrante. Essa curva mantém unidade mesmo quando os artistas de referência são diferentes.",
        ],
      },
    ],
    relatedSlugs: [
      "musicas-para-saida-dos-noivos",
      "musica-ao-vivo-ou-dj",
      "playlist-primeira-danca",
    ],
  },
  {
    slug: "playlist-primeira-danca",
    title: "Playlist para primeira dança dos noivos",
    excerpt:
      "Como escolher uma música confortável, significativa e adequada ao estilo de dança que vocês desejam viver.",
    category: "playlists",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-02",
    readingTime: "5 min de leitura",
    keywords: ["playlist primeira dança", "música primeira dança noivos", "dança dos noivos"],
    tip:
      "Façam um teste simples: dancem a música inteira na sala de casa. A duração e as mudanças de ritmo ficam muito mais claras no corpo do que apenas ouvindo.",
    sections: [
      {
        id: "escolha-afetiva",
        title: "Escolha uma música que vocês reconheçam como sua",
        paragraphs: [
          "A primeira dança não precisa seguir um gênero específico. Uma canção ligada ao início do relacionamento, a uma viagem ou a uma fase importante cria conexão imediata.",
        ],
      },
      {
        id: "duracao-e-conforto",
        title: "Ajuste duração e dificuldade",
        paragraphs: [
          "Músicas longas podem ser reduzidas com uma edição ou arranjo que preserve os trechos essenciais. Casais que não desejam coreografia podem convidar pais e padrinhos após o primeiro refrão.",
          "Observe mudanças bruscas de andamento. Elas podem enriquecer uma coreografia ensaiada, mas dificultar uma dança espontânea.",
        ],
      },
      {
        id: "ao-vivo-ou-gravada",
        title: "Versão ao vivo ou gravação original",
        paragraphs: [
          "A interpretação ao vivo torna o momento único e permite adaptar duração e dinâmica. A gravação preserva exatamente a referência usada nos ensaios. Ambas funcionam quando a decisão é alinhada com músicos, DJ e assessoria.",
        ],
      },
    ],
    relatedSlugs: [
      "playlist-casamento-moderno",
      "musica-ao-vivo-ou-dj",
      "musicas-para-saida-dos-noivos",
    ],
  },
  {
    slug: "casamento-em-divinopolis",
    title: "Casamento em Divinópolis: música ao vivo e emoção em cada detalhe",
    excerpt:
      "Um guia regional para planejar a música de casamentos em Divinópolis com atenção ao espaço, à logística e à experiência dos convidados.",
    category: "casamentos-reais",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-15",
    readingTime: "5 min de leitura",
    city: "Divinópolis",
    featured: true,
    placeholderMedia: true,
    keywords: ["casamento em Divinópolis", "música casamento Divinópolis", "música ao vivo Divinópolis"],
    tip:
      "Compartilhe endereço, horários de acesso e regras de sonorização na primeira conversa. Essas informações tornam a proposta mais precisa e evitam ajustes logísticos perto do evento.",
    sections: [
      {
        id: "planejamento-regional",
        title: "Planejamento musical para eventos em Divinópolis",
        paragraphs: [
          "Casamentos na cidade podem acontecer em igrejas, salões e espaços nos arredores, cada um com acústica e regras próprias. Visibilidade do altar, disponibilidade elétrica e distância entre cerimônia e recepção influenciam a estrutura musical.",
          "Este conteúdo é um guia regional e não descreve um casal ou evento específico. Fotos e relatos reais poderão ser adicionados quando houver autorização dos envolvidos.",
        ],
      },
      {
        id: "logistica-e-som",
        title: "Antecipe logística e sonorização",
        paragraphs: [
          "Informe se haverá mudança de ambiente, tempo disponível para montagem e limite de volume. Em cerimônias religiosas, confirme também horários de passagem de som e orientações de repertório.",
        ],
      },
      {
        id: "repertorio-com-identidade",
        title: "Construa um repertório com identidade",
        paragraphs: [
          "A cidade e o espaço contextualizam a celebração, mas a trilha deve partir da história do casal. Combine referências afetivas, função de cada momento e uma formação adequada ao ambiente.",
          "Uma conversa inicial sobre roteiro, número de convidados e estilo desejado ajuda a transformar ideias em uma proposta musical viável.",
        ],
      },
    ],
    relatedSlugs: [
      "como-funciona-musica-na-cerimonia",
      "quantos-musicos-contratar",
      "como-escolher-musicas-do-casamento",
    ],
  },
  {
    slug: "casamento-em-itauna",
    title: "Casamento em Itaúna: uma trilha sonora para momentos inesquecíveis",
    excerpt:
      "Orientações para organizar música ao vivo em casamentos em Itaúna, considerando cerimônia, recepção e escolhas do casal.",
    category: "casamentos-reais",
    coverImage: editorialCover,
    coverAlt: editorialCoverAlt,
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-15",
    readingTime: "5 min de leitura",
    city: "Itaúna",
    placeholderMedia: true,
    keywords: ["casamento em Itaúna", "música casamento Itaúna", "música ao vivo Itaúna"],
    tip:
      "Mesmo em eventos próximos, reserve tempo para montagem e passagem de som. A tranquilidade antes da chegada dos convidados faz parte da qualidade da apresentação.",
    sections: [
      {
        id: "musica-em-itauna",
        title: "Música para casamentos em Itaúna",
        paragraphs: [
          "A proximidade com fornecedores e espaços da região facilita visitas técnicas e alinhamentos, mas cada celebração continua exigindo um planejamento próprio. Acústica, cortejo e repertório mudam de acordo com o local e a proposta do casal.",
          "Este é um conteúdo regional, sem nomes, depoimentos ou locais fictícios. A área está preparada para receber registros reais autorizados no futuro.",
        ],
      },
      {
        id: "cerimonia-e-recepcao",
        title: "Conecte cerimônia e recepção",
        paragraphs: [
          "Quando os dois momentos acontecem no mesmo espaço, a formação musical pode criar uma passagem natural entre solenidade e acolhimento. Em locais diferentes, considere deslocamento e nova montagem no cronograma.",
        ],
      },
      {
        id: "proposta-personalizada",
        title: "Prepare informações para uma proposta personalizada",
        paragraphs: [
          "Data, endereço, tipo de celebração, quantidade de convidados, instrumentos desejados e referências de repertório são um bom ponto de partida. A partir deles, a equipe avalia sonorização e formação.",
          "O simulador ajuda a explorar possibilidades, mas a conversa final é o momento de ajustar cada escolha à realidade do evento.",
        ],
      },
    ],
    relatedSlugs: [
      "casamento-em-divinopolis",
      "quantos-musicos-contratar",
      "playlist-casamento-moderno",
    ],
  },
];

export function getPublishedArticles() {
  return inspirationArticles
    .filter((article) => !article.draft)
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));
}

export function getInspirationArticle(slug: string) {
  return getPublishedArticles().find((article) => article.slug === slug);
}

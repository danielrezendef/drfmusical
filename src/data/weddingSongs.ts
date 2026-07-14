export type WeddingSong = {
  id: string;
  title: string;
  artist: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
};

export type WeddingMoment = {
  id: string;
  title: string;
  description: string;
  icon: string;
  maxSelections?: number;
  songs: WeddingSong[];
};

export const weddingMoments: WeddingMoment[] = [
  {
    id: "entrada-noivo",
    title: "Entrada do Noivo",
    description:
      "O início de uma nova história merece uma música que represente sua personalidade.",
    icon: "groom",
    songs: [
      {
        id: "perfect",
        title: "Perfect",
        artist: "Ed Sheeran",
        spotifyUrl: "https://open.spotify.com/search/Perfect%20Ed%20Sheeran",
        youtubeUrl: "https://www.youtube.com/results?search_query=Perfect+Ed+Sheeran",
      },
      {
        id: "pra-voce-guardei-o-amor",
        title: "Pra Você Guardei o Amor",
        artist: "Nando Reis e Ana Cañas",
        spotifyUrl: "https://open.spotify.com/search/Pra%20Voc%C3%AA%20Guardei%20o%20Amor",
        youtubeUrl: "https://www.youtube.com/results?search_query=Pra+Voce+Guardei+o+Amor",
      },
      {
        id: "trevo",
        title: "Trevo (Tu)",
        artist: "ANAVITÓRIA e Tiago Iorc",
        spotifyUrl: "https://open.spotify.com/search/Trevo%20ANAVIT%C3%93RIA",
        youtubeUrl: "https://www.youtube.com/results?search_query=Trevo+ANAVITORIA",
      },
    ],
  },
  {
    id: "entrada-noiva",
    title: "Entrada da Noiva",
    description:
      "O momento mais aguardado da cerimônia merece uma música capaz de transformar emoção em memória.",
    icon: "bride",
    songs: [
      {
        id: "a-thousand-years",
        title: "A Thousand Years",
        artist: "Christina Perri",
        spotifyUrl: "https://open.spotify.com/search/A%20Thousand%20Years%20Christina%20Perri",
        youtubeUrl: "https://www.youtube.com/results?search_query=A+Thousand+Years+Christina+Perri",
      },
      {
        id: "ave-maria",
        title: "Ave Maria",
        artist: "Franz Schubert",
        spotifyUrl: "https://open.spotify.com/search/Ave%20Maria%20Schubert",
        youtubeUrl: "https://www.youtube.com/results?search_query=Ave+Maria+Schubert",
      },
      {
        id: "canon-in-d",
        title: "Canon in D",
        artist: "Johann Pachelbel",
        spotifyUrl: "https://open.spotify.com/search/Canon%20in%20D%20Pachelbel",
        youtubeUrl: "https://www.youtube.com/results?search_query=Canon+in+D+Pachelbel",
      },
    ],
  },
  {
    id: "salmo",
    title: "Salmo",
    description: "Um momento de reflexão e fé, conduzido com delicadeza e respeito.",
    icon: "book",
    songs: [
      {
        id: "o-senhor-e-meu-pastor",
        title: "O Senhor é Meu Pastor",
        artist: "Salmo 22",
        spotifyUrl: "https://open.spotify.com/search/O%20Senhor%20%C3%A9%20Meu%20Pastor",
        youtubeUrl: "https://www.youtube.com/results?search_query=O+Senhor+e+Meu+Pastor+Salmo",
      },
      {
        id: "tu-es-minha-vida",
        title: "Tu És Minha Vida",
        artist: "Padre Zezinho",
        spotifyUrl: "https://open.spotify.com/search/Tu%20%C3%89s%20Minha%20Vida%20Padre%20Zezinho",
        youtubeUrl: "https://www.youtube.com/results?search_query=Tu+Es+Minha+Vida+Padre+Zezinho",
      },
      {
        id: "pelos-prados-e-campinas",
        title: "Pelos Prados e Campinas",
        artist: "Hinário Litúrgico",
        spotifyUrl: "https://open.spotify.com/search/Pelos%20Prados%20e%20Campinas",
        youtubeUrl: "https://www.youtube.com/results?search_query=Pelos+Prados+e+Campinas",
      },
    ],
  },
  {
    id: "aclamacao",
    title: "Aclamação do Evangelho",
    description: "Uma preparação alegre e solene para a proclamação do Evangelho.",
    icon: "rays",
    songs: [
      {
        id: "aleluia-shalom",
        title: "Aleluia",
        artist: "Comunidade Católica Shalom",
        spotifyUrl: "https://open.spotify.com/search/Aleluia%20Shalom",
        youtubeUrl: "https://www.youtube.com/results?search_query=Aleluia+Comunidade+Shalom",
      },
      {
        id: "aleluia-a-minha-alma-abrirei",
        title: "A Minha Alma Abrirei",
        artist: "Hinário Litúrgico",
        spotifyUrl: "https://open.spotify.com/search/A%20Minha%20Alma%20Abrirei",
        youtubeUrl: "https://www.youtube.com/results?search_query=A+Minha+Alma+Abrirei+Aleluia",
      },
      {
        id: "aleluia-quando-estamos-unidos",
        title: "Quando Estamos Unidos",
        artist: "Ministério Amor e Adoração",
        spotifyUrl: "https://open.spotify.com/search/Quando%20Estamos%20Unidos%20Aleluia",
        youtubeUrl: "https://www.youtube.com/results?search_query=Quando+Estamos+Unidos+Aleluia",
      },
    ],
  },
  {
    id: "aliancas",
    title: "Entrada das Alianças",
    description: "O símbolo do compromisso merece uma trilha cheia de significado.",
    icon: "rings",
    songs: [
      {
        id: "alianca",
        title: "Aliança",
        artist: "Tribalistas",
        spotifyUrl: "https://open.spotify.com/search/Alian%C3%A7a%20Tribalistas",
        youtubeUrl: "https://www.youtube.com/results?search_query=Alianca+Tribalistas",
      },
      {
        id: "pra-sonhar",
        title: "Pra Sonhar",
        artist: "Marcelo Jeneci",
        spotifyUrl: "https://open.spotify.com/search/Pra%20Sonhar%20Marcelo%20Jeneci",
        youtubeUrl: "https://www.youtube.com/results?search_query=Pra+Sonhar+Marcelo+Jeneci",
      },
      {
        id: "que-bom-que-voce-chegou",
        title: "Que Bom Que Você Chegou",
        artist: "Bruna Karla",
        spotifyUrl: "https://open.spotify.com/search/Que%20Bom%20Que%20Voc%C3%AA%20Chegou",
        youtubeUrl: "https://www.youtube.com/results?search_query=Que+Bom+Que+Voce+Chegou",
      },
    ],
  },
  {
    id: "comunhao",
    title: "Comunhão",
    description: "Um momento de espiritualidade, união e contemplação.",
    icon: "chalice",
    songs: [
      {
        id: "ninguem-te-ama-como-eu",
        title: "Ninguém Te Ama Como Eu",
        artist: "Martín Valverde",
        spotifyUrl: "https://open.spotify.com/search/Ningu%C3%A9m%20Te%20Ama%20Como%20Eu",
        youtubeUrl: "https://www.youtube.com/results?search_query=Ninguem+Te+Ama+Como+Eu",
      },
      {
        id: "pao-da-vida",
        title: "Pão da Vida",
        artist: "Ministério Amor e Adoração",
        spotifyUrl: "https://open.spotify.com/search/P%C3%A3o%20da%20Vida%20Amor%20e%20Adora%C3%A7%C3%A3o",
        youtubeUrl: "https://www.youtube.com/results?search_query=Pao+da+Vida+Amor+e+Adoracao",
      },
      {
        id: "amar-te-mais",
        title: "Amar-te Mais",
        artist: "Adriana Arydes",
        spotifyUrl: "https://open.spotify.com/search/Amar-te%20Mais%20Adriana%20Arydes",
        youtubeUrl: "https://www.youtube.com/results?search_query=Amar-te+Mais+Adriana+Arydes",
      },
    ],
  },
  {
    id: "assinaturas",
    title: "Assinaturas",
    description: "Enquanto o compromisso é registrado, a música mantém a emoção presente.",
    icon: "pen",
    songs: [
      {
        id: "photograph",
        title: "Photograph",
        artist: "Ed Sheeran",
        spotifyUrl: "https://open.spotify.com/search/Photograph%20Ed%20Sheeran",
        youtubeUrl: "https://www.youtube.com/results?search_query=Photograph+Ed+Sheeran",
      },
      {
        id: "river-flows-in-you",
        title: "River Flows in You",
        artist: "Yiruma",
        spotifyUrl: "https://open.spotify.com/search/River%20Flows%20in%20You%20Yiruma",
        youtubeUrl: "https://www.youtube.com/results?search_query=River+Flows+in+You+Yiruma",
      },
      {
        id: "la-vie-en-rose",
        title: "La Vie en Rose",
        artist: "Édith Piaf",
        spotifyUrl: "https://open.spotify.com/search/La%20Vie%20en%20Rose%20Edith%20Piaf",
        youtubeUrl: "https://www.youtube.com/results?search_query=La+Vie+en+Rose+Edith+Piaf",
      },
    ],
  },
  {
    id: "fotos",
    title: "Fotos",
    description:
      "Uma trilha leve e delicada para acompanhar os primeiros registros dessa nova história.",
    icon: "camera",
    maxSelections: 4,
    songs: [
      {
        id: "better-together",
        title: "Better Together",
        artist: "Jack Johnson",
        spotifyUrl: "https://open.spotify.com/search/Better%20Together%20Jack%20Johnson",
        youtubeUrl: "https://www.youtube.com/results?search_query=Better+Together+Jack+Johnson",
      },
      {
        id: "velha-infancia",
        title: "Velha Infância",
        artist: "Tribalistas",
        spotifyUrl: "https://open.spotify.com/search/Velha%20Inf%C3%A2ncia%20Tribalistas",
        youtubeUrl: "https://www.youtube.com/results?search_query=Velha+Infancia+Tribalistas",
      },
      {
        id: "coisa-linda",
        title: "Coisa Linda",
        artist: "Tiago Iorc",
        spotifyUrl: "https://open.spotify.com/search/Coisa%20Linda%20Tiago%20Iorc",
        youtubeUrl: "https://www.youtube.com/results?search_query=Coisa+Linda+Tiago+Iorc",
      },
      {
        id: "yellow",
        title: "Yellow",
        artist: "Coldplay",
        spotifyUrl: "https://open.spotify.com/search/Yellow%20Coldplay",
        youtubeUrl: "https://www.youtube.com/results?search_query=Yellow+Coldplay",
      },
      {
        id: "your-song",
        title: "Your Song",
        artist: "Elton John",
        spotifyUrl: "https://open.spotify.com/search/Your%20Song%20Elton%20John",
        youtubeUrl: "https://www.youtube.com/results?search_query=Your+Song+Elton+John",
      },
      {
        id: "eu-sei-que-vou-te-amar",
        title: "Eu Sei Que Vou Te Amar",
        artist: "Tom Jobim e Vinicius de Moraes",
        spotifyUrl: "https://open.spotify.com/search/Eu%20Sei%20Que%20Vou%20Te%20Amar",
        youtubeUrl: "https://www.youtube.com/results?search_query=Eu+Sei+Que+Vou+Te+Amar",
      },
    ],
  },
  {
    id: "saida-noivos",
    title: "Saída dos Noivos",
    description: "O início da celebração pede uma música alegre, marcante e cheia de vida.",
    icon: "celebration",
    songs: [
      {
        id: "marry-you",
        title: "Marry You",
        artist: "Bruno Mars",
        spotifyUrl: "https://open.spotify.com/search/Marry%20You%20Bruno%20Mars",
        youtubeUrl: "https://www.youtube.com/results?search_query=Marry+You+Bruno+Mars",
      },
      {
        id: "i-say-a-little-prayer",
        title: "I Say a Little Prayer",
        artist: "Aretha Franklin",
        spotifyUrl: "https://open.spotify.com/search/I%20Say%20a%20Little%20Prayer%20Aretha%20Franklin",
        youtubeUrl: "https://www.youtube.com/results?search_query=I+Say+a+Little+Prayer+Aretha+Franklin",
      },
      {
        id: "signed-sealed-delivered",
        title: "Signed, Sealed, Delivered",
        artist: "Stevie Wonder",
        spotifyUrl: "https://open.spotify.com/search/Signed%20Sealed%20Delivered%20Stevie%20Wonder",
        youtubeUrl: "https://www.youtube.com/results?search_query=Signed+Sealed+Delivered+Stevie+Wonder",
      },
    ],
  },
];

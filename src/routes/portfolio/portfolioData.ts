import dojoImg from "./../../assets/f7.png";

const projectMetrics = [
  "Prevent slowdowns",
  "As simple as possible",
  "Prioritize",
  "Track progress & adapt",
];

const Taizyu = {
  type: "App",
  mainHeader: {
    symbolImg: dojoImg,
    title: "Taizyu",
  },
  mainImg: dojoImg,
  shortDescription: "Provides cubes (short desc):",
  valueToUser: "Enables the user doing ...",
  subtitle: "Visual aid for navigating time-blocks",
  developmentSummary: {
    items: ["a...", "b...", "c..."],
  },
  metrics: [
    {
      title: projectMetrics[0],
      score: 5 / 5,
    },
    {
      title: projectMetrics[1],
      score: 5 / 5,
    },
    {
      title: projectMetrics[2],
      score: 5 / 5,
    },
    {
      title: projectMetrics[3],
      score: 5 / 5,
    },
  ],
  lessonsSummary: {
    whatWentWell: [".a..2", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
  },
  importantPoints: {
    items: ["..a.123", ".b.4567.", ".c34543."],
  },
  link: "https://awesome.com",
};

const Portfolio = {
  type: "Website",
  mainHeader: {
    symbolImg: dojoImg,
    title: "Portfolio",
  },
  mainImg: dojoImg,
  shortDescription: "Portfolio",
  valueToUser: "Shows projects",
  subtitle: "",
  developmentSummary: {
    items: ["a...", "b...", "c..."],
  },
  metrics: [
    {
      title: projectMetrics[0],
      score: 5 / 5,
    },
    {
      title: projectMetrics[1],
      score: 5 / 5,
    },
    {
      title: projectMetrics[2],
      score: 5 / 5,
    },
    {
      title: projectMetrics[3],
      score: 5 / 5,
    },
  ],
  lessonsSummary: {
    whatWentWell: [".a..2", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
  },
  importantPoints: {
    items: ["..a.123", ".b.4567.", ".c34543."],
  },
  link: "https://awesome1.com",
};

const Inaflash = {
  type: "Website",
  mainHeader: {
    symbolImg: dojoImg,
    title: "Inaflash",
  },
  mainImg: dojoImg,
  shortDescription: "Inaflash",
  valueToUser: "Electronic flashcards",
  subtitle: "Simple, no nonsense flashcards",
  developmentSummary: {
    items: ["a...", "b...", "c..."],
  },
  metrics: [
    {
      title: projectMetrics[0],
      score: 5 / 5,
    },
    {
      title: projectMetrics[1],
      score: 5 / 5,
    },
    {
      title: projectMetrics[2],
      score: 5 / 5,
    },
    {
      title: projectMetrics[3],
      score: 5 / 5,
    },
  ],
  lessonsSummary: {
    whatWentWell: [".a..2", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
  },
  importantPoints: {
    items: ["..a.123", ".b.4567.", ".c34543."],
  },
  link: "https://awesome1.com",
};

const Anglr = {
  type: "Website",
  mainHeader: {
    symbolImg: dojoImg,
    title: "Anglr",
  },
  mainImg: dojoImg,
  shortDescription: "Anglr",
  valueToUser: "Anglr proj",
  subtitle: "Simple, no nonsense Anglr proj",
  developmentSummary: {
    items: ["a...", "b...", "c..."],
  },
  metrics: [
    {
      title: projectMetrics[0],
      score: 5 / 5,
    },
    {
      title: projectMetrics[1],
      score: 5 / 5,
    },
    {
      title: projectMetrics[2],
      score: 5 / 5,
    },
    {
      title: projectMetrics[3],
      score: 5 / 5,
    },
  ],
  lessonsSummary: {
    whatWentWell: [".a..2", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
  },
  importantPoints: {
    items: ["..a.123", ".b.4567.", ".c34543."],
  },
  link: "https://awesome1.com",
};

const CarbyneExplorations = {
  type: "Website",
  mainHeader: {
    symbolImg: dojoImg,
    title: "CarbyneExplorations",
  },
  mainImg: dojoImg,
  shortDescription: "CarbyneExplorations",
  valueToUser: "CarbyneExplorations proj",
  subtitle: "Simple, no nonsense CarbyneExplorations proj",
  developmentSummary: {
    items: ["a...", "b...", "c..."],
  },
  metrics: [
    {
      title: projectMetrics[0],
      score: 5 / 5,
    },
    {
      title: projectMetrics[1],
      score: 5 / 5,
    },
    {
      title: projectMetrics[2],
      score: 5 / 5,
    },
    {
      title: projectMetrics[3],
      score: 5 / 5,
    },
  ],
  lessonsSummary: {
    whatWentWell: [".a..2", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
  },
  importantPoints: {
    items: ["..a.123", ".b.4567.", ".c34543."],
  },
  link: "https://awesome1.com",
};

const portfolioData = [Taizyu, Portfolio, Inaflash, Anglr, CarbyneExplorations];

export { projectMetrics };
export { portfolioData };

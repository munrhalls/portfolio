import dojoImg from "./../assets/f7.png";

const project = {
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
  metricsEstimates: {
    items: [
      {
        title: "Minimize time losses",
        score: 5 / 5,
      },
      {
        title: "As simple as possible",
        score: 5 / 5,
      },
      {
        title: "Prioritize",
        score: 5 / 5,
      },
      {
        title: "ABCD contingencies vs slowdowns/roadblocks",
        score: 5 / 5,
      },
      {
        title: "Sense of development ease",
        score: 5 / 5,
      },
      {
        title: "Experience as a whole",
        score: 5 / 5,
      },
    ],
  },
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
const portfolioData = [project];

export default portfolioData;

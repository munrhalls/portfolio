import dojoImg from "./../../assets/f7.png";

const projectMetrics = [
  "Prevent roadblocks/slowdowns",
  "As simple as possible",
  "Prioritize",
  "Track progress & adapt",
];

class Header {
  constructor(src: string, title: string) {
    this.title = title;
    this.symbolImg = src;
  }
}

class MainSection {
  constructor(subtitle: string, shortDesc: string, valueToUser: string) {
    this.subtitle = subtitle;
    this.shortDesc = shortDesc;
    this.valueToUser = valueToUser;
  }
}

const header = new Header(dojoImg, "Taizyu");
console.log(header);

const Taizyu = {
  type: "App",
  mainHeader: new Header(dojoImg, "Taizyu"),
  mainSection: new MainSection(
    "Visuals for timeroad",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: [
    {
      title: projectMetrics[0],
      score: 5,
    },
    {
      title: projectMetrics[1],
      score: 5,
    },
    {
      title: projectMetrics[2],
      score: 3,
    },
    {
      title: projectMetrics[3],
      score: 5,
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

const portfolioData = [Taizyu];

export { projectMetrics };
export { portfolioData };

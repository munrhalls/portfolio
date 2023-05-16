import dojoImg from "./../../assets/f7.png";

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

class Metrics {
  private readonly table: [string, number][];

  constructor(one: number, two: number, three: number, four: number) {
    this.table = [
      ["Prevent roadblocks/slowdowns", one],
      ["As simple as possible", two],
      ["Prioritize", three],
      ["Track progress & adapt", four],
    ];
  }
}

const projectMetrics = new Metrics(0).table.map((row) => row[0]);

const Taizyu = {
  type: "App",
  mainHeader: new Header(dojoImg, "Taizyu"),
  mainSection: new MainSection(
    "Visuals for timeroad",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  // 1"Prevent roadblocks/slowdowns"
  // 2"As simple as possible"
  // 3"Prioritize"
  // 4"Track progress & adapt"
  metrics: new Metrics(5, 4, 3, 2),

  // [
  //   {
  //     title: projectMetrics[0],
  //     score: 5,
  //   },
  //   {
  //     title: projectMetrics[1],
  //     score: 5,
  //   },
  //   {
  //     title: projectMetrics[2],
  //     score: 3,
  //   },
  //   {
  //     title: projectMetrics[3],
  //     score: 5,
  //   },
  // ],
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

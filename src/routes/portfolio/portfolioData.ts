import dojoImg from "./../../assets/f7.png";

export interface Project {
  type: string;
  header: Header;
  mainSection: MainSection;
  developmentSummary: string[];
  metrics: Metrics;
  lessonsSummary: {
    whatWentWell: string[];
    whatWentPoorly: string[];
    rootCauses: string[];
    neverAgain: string[];
  };
  importantPoints: string[];
  link: string;
}

class Header {
  constructor(
    public symbolImg: string,
    public title: string,
    public headerImg: string
  ) {}
}

class MainSection {
  constructor(
    public subtitle: string,
    public shortDesc: string,
    public valueToUser: string
  ) {}
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

  getScoreFromRowId(id: number): number | null {
    return this.table[id]?.[1] ?? null;
  }

  getTable(): [string, number][] {
    return this.table;
  }
}

const projectMetrics = new Metrics(0, 0, 0, 0).getTable().map((row) => row[0]);

const Taizyu = {
  type: "App",
  header: new Header(dojoImg, "Taizyu", dojoImg),
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
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  link: "https://awesome.com",
};

const portfolioData = [Taizyu];

export { projectMetrics };
export { portfolioData };

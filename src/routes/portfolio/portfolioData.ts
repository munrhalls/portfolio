import dojoImg from "./../../assets/f7.png";

export interface Project {
  technology: string;
  header: Header;
  mainSection: MainSection;
  developmentSummary: string[];
  metrics: Metrics;
  lessonsSummary: {
    whatWentWell: string[];
    whatWentPoorly: string[];
    rootCauses: string[];
    neverAgain: string[];
    howCanIDoItAllBetter: string[];
  };
  importantPoints: string[];
  github: string;
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
  technology: "React",
  header: new Header(dojoImg, "Taizyu", dojoImg),
  mainSection: new MainSection(
    "Visuals for timeroad",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(5, 4, 3, 2),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const Portfolio = {
  technology: "Angular",
  header: new Header(dojoImg, "Portfolio", dojoImg),
  mainSection: new MainSection(
    "Projects showcase",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(3, 1, 5, 4),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const Carbyne = {
  technology: "React",
  header: new Header(dojoImg, "Carbyne", dojoImg),
  mainSection: new MainSection(
    "Exploratory repository",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(3, 1, 5, 4),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const Inaflash = {
  technology: "Javascript",
  header: new Header(dojoImg, "Inaflash", dojoImg),
  mainSection: new MainSection(
    "Flashcards",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(3, 1, 5, 4),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const BulbazaurProject = {
  technology: "Angular",
  header: new Header(dojoImg, "BulbazaurProject", dojoImg),
  mainSection: new MainSection(
    "Flashcards",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(5, 5, 5, 5),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const TestOnes = {
  technology: "React",
  header: new Header(dojoImg, "TestOnes", dojoImg),
  mainSection: new MainSection(
    "Flashcards",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(1, 1, 1, 1),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const TestThrees = {
  technology: "React",
  header: new Header(dojoImg, "TestThrees", dojoImg),
  mainSection: new MainSection(
    "Flashcards",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(3, 3, 3, 3),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};

const TestFours = {
  technology: "React",
  header: new Header(dojoImg, "TestFours", dojoImg),
  mainSection: new MainSection(
    "Flashcards",
    "description description description description description ",
    "value to uservalue to uservalue to uservalue to uservalue to user"
  ),
  developmentSummary: ["a...", "b...", "c..."],
  metrics: new Metrics(4, 4, 4, 4),
  lessonsSummary: {
    whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
    whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
    rootCauses: ["..1a."],
    neverAgain: ["..a.1", ".b.12.", ".3c.."],
    howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
  },
  importantPoints: ["..a.123", ".b.4567.", ".c34543."],
  github: "https://github.com",
  link: "https://awesome.com",
};
const portfolioData = [
  Taizyu,
  Portfolio,
  Carbyne,
  Inaflash,
  BulbazaurProject,
  TestOnes,
  TestThrees,
  TestFours,
];

export { projectMetrics };
export { portfolioData };

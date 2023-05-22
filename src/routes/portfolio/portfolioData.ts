import carbyneHeader from "./../../assets/projectImages/carbyneHeader.png";

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
    public category: string,
    public symbolImg: string,
    public headerImg: string
  ) {}
}

class MainSection {
  constructor(
    public title: string,
    public shortDesc: string,
    public valueToUser: string
  ) {}
}

class Metrics {
  private readonly table: [string, number][];

  constructor(one: number, two: number, three: number, four: number) {
    this.table = [
      ["Prevent slowdowns", one],
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

const Carbyne = {
  technology: "React",
  header: new Header("Website", carbyneHeader, carbyneHeader),
  mainSection: new MainSection(
    "Carbyne explorations",
    "Artistically-themed personal repository website with unique, colorful user interface and animated menu items.",
    ""
  ),
  developmentSummary: [
    "Graphics made from custom SVG's, using the path attribute",
    "All SVG graphics are React components, adjusted by custom hook",
    "Development was mostly a poorly organized struggle but rich in lessons on how-to develop apps in  general",
  ],
  metrics: new Metrics(1, 1, 2, 1),
  lessonsSummary: {
    whatWentWell: [
      "Ultimately succeeded making the SVG's",
      "Appearance is high quality and unique",
    ],
    whatWentPoorly: [
      "It took ages to develop",
      "Enormous amount of time-wastes",
      "Extremely high amount of sub-optimal development moves",
    ],
    rootCauses: [
      "Inexperienced in terms of how to manage development process",
      "Tolerated poor development rate",
    ],
    neverAgain: [
      "Mindset: never tolerate poor development rate",
      "Simple: have to break down project into components and see how the components fit together before you start",
      "Simple: you have to have a general plan, likely contingencies and tasks before you start, else the work will be circular, random and repetetive",
    ],
    howCanIDoItAllBetter: [
      "Realize: much of the development success is determined before you even start developing",
      "Well-prepared development process is well-balanced in terms of dichotomies",
      "Plan but don't overplan; as simple as possible but not too simple; extreme-prioratization but no target-fixaton, if a task stumps development rate, drop it, adapt",
    ],
  },
  importantPoints: [
    "It was mostly an exercise in development cluelessness",
    "I ignored time, when in reality, time is by far the first and last, most important factor all throughout the development process",
    "The codebase is completely unmaintainable, which is due to my then lack of experience with design patterns",
    "I thought design patterns don't matter; and that you can just and get on with it, no tasks or plan needed; this app was a proof to me on why that's not the case",
    "I achieved the look I wanted, though - it's a success in terms of outcome space but a complete failure in terms of time, and outcome codebase",
  ],
  github: "https://github.com/munrhalls/Carbyne-explorations",
  link: "https://carbyne-explorations.netlify.app",
};

// const Taizyu = {
//   technology: "React",
//   header: new Header(dojoImg, "Taizyu", dojoImg),
//   mainSection: new MainSection(
//     "Visuals for timeroad",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(5, 4, 3, 2),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };

// const Portfolio = {
//   technology: "Angular",
//   header: new Header(dojoImg, "Portfolio", dojoImg),
//   mainSection: new MainSection(
//     "Projects showcase",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(3, 1, 5, 4),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };

// const Inaflash = {
//   technology: "Javascript",
//   header: new Header(dojoImg, "Inaflash", dojoImg),
//   mainSection: new MainSection(
//     "Flashcards",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(3, 1, 5, 4),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };

// const BulbazaurProject = {
//   technology: "Angular",
//   header: new Header(dojoImg, "BulbazaurProject", dojoImg),
//   mainSection: new MainSection(
//     "Flashcards",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(5, 5, 5, 5),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };

// const TestOnes = {
//   technology: "React",
//   header: new Header(dojoImg, "TestOnes", dojoImg),
//   mainSection: new MainSection(
//     "Flashcards",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(1, 1, 1, 1),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };

// const TestThrees = {
//   technology: "React",
//   header: new Header(dojoImg, "TestThrees", dojoImg),
//   mainSection: new MainSection(
//     "Flashcards",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(3, 3, 3, 3),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };

// const TestFours = {
//   technology: "React",
//   header: new Header(dojoImg, "TestFours", dojoImg),
//   mainSection: new MainSection(
//     "Flashcards",
//     "description description description description description ",
//     "value to uservalue to uservalue to uservalue to uservalue to user"
//   ),
//   developmentSummary: ["a...", "b...", "c..."],
//   metrics: new Metrics(4, 4, 4, 4),
//   lessonsSummary: {
//     whatWentWell: ["Developing syntax", "..b3.", ".c.4."],
//     whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
//     rootCauses: ["..1a."],
//     neverAgain: ["..a.1", ".b.12.", ".3c.."],
//     howCanIDoItAllBetter: ["...a.1", "....12.", "...3c.."],
//   },
//   importantPoints: ["..a.123", ".b.4567.", ".c34543."],
//   github: "https://github.com",
//   link: "https://awesome.com",
// };
const portfolioData = [
  // Taizyu,
  // Portfolio,
  Carbyne,
  // Inaflash,
  // BulbazaurProject,
  // TestOnes,
  // TestThrees,
  // TestFours,
];

export { projectMetrics };
export { portfolioData };

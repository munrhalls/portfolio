import carbyneHeader from "./../../assets/projectImages/carbyneHeader.png";
import snakeHeader from "./../../assets/projectImages/snakeHeader.png";

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
    nextTime: string[];
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
const portfolioData = [
  {
    technology: "React",
    header: new Header("Website", carbyneHeader, carbyneHeader),
    mainSection: new MainSection(
      "Carbyne explorations",
      "Artistically-themed personal repository website.",
      ""
    ),
    developmentSummary: [
      "Graphics made from custom SVG's, using path attribute",
      "All SVG graphics are React components, adjusted by custom hook",
      "Development was mostly a poorly organized struggle but rich in lessons on how-to develop apps in  general",
    ],
    metrics: new Metrics(1, 1, 2, 1),
    lessonsSummary: {
      whatWentWell: ["Appearance is high quality and unique"],
      whatWentPoorly: [
        "Took 10x longer than needed.",
        "Repetetive, circular development actions",
      ],
      rootCauses: [
        "Inexperienced",
        "Untrained at managing development process",
        "Tolerated poor development rate",
      ],
      nextTime: [
        "Mindset: never tolerate poor development rate",
        "Simple: have to break down project into components and see how the components fit together *before* start",
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
  },
  {
    technology: "Javascript",
    header: new Header("App", snakeHeader, snakeHeader),
    mainSection: new MainSection(
      "Snake",
      "Just the classic snake game. Written in OOP style. Multiple levels of difficulty. Many grid sizes. ",
      "My first app. Wrote it after studying Headfirst Javascript book."
    ),
    developmentSummary: [
      "Took months. Everything was new to me.",
      "Development was the opposite of effective approach: trial & error.",
    ],
    metrics: new Metrics(1, 2, 2, 1),
    lessonsSummary: {
      whatWentWell: [
        "Learned enough & persistend long enough to complete the project",
      ],
      whatWentPoorly: [
        "Took months",
        "Did nothing about setting up the development process, lining up tasks etc.",
      ],
      rootCauses: ["First app, inexperienced."],
      nextTime: [
        "If I went back in time, I would tell my younger self that you need to struggle effectively, not just struggle.",
      ],
      howCanIDoItAllBetter: [""],
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
  },
];

export { projectMetrics };
export { portfolioData };

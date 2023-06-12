import carbyneHeader from "./projectImages/carbyneHeader.png";
import snakeHeader from "./projectImages/snakeHeader.png";

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
      "Artistically-themed personal repository website. Graphics made with custom SVG's.",
      ""
    ),
    developmentSummary: [
      "All SVG graphics are done with path attribute and are React components. Adjusted by custom hook, for responsiveness.",
      "Development process was non-existent.",
      "Very high randomness of effort.",
      "Took 20-30x longer than it needed to.",
    ],
    metrics: new Metrics(1, 1, 2, 1),
    lessonsSummary: {
      whatWentWell: ["Appearance is high quality and unique"],
      whatWentPoorly: [
        "Took 10x longer than needed.",
        "Repetetive, circular, inefficient development actions",
      ],
      rootCauses: [
        "Inexperienced",
        "Untrained at managing development process",
        "Tolerated poor development rate",
      ],
      nextTime: [
        "Mindset: never tolerate poor development rate",
        "Mindset: appreciate steadfast development rate as core priority",
        "Simple: have to break down project into components and see how the components fit together *before* start",
      ],
      howCanIDoItAllBetter: [
        "Understand: much of the development success is determined before you even start developing",
        "Understand: preparing tasks and contingencies is time well-spent, you lose 10-30x that time on bugs and roadblocks, if you skip it",
      ],
    },
    importantPoints: [
      "There's no point starting the development process, if you don't at least have a general roadmap and contingencies against likely roadblocks",
    ],
    github: "https://github.com/munrhalls/Carbyne-explorations",
    link: "https://carbyne-explorations.netlify.app",
  },
  {
    technology: "Javascript",
    header: new Header("App", snakeHeader, snakeHeader),
    mainSection: new MainSection(
      "Snake",
      "Just a snake game. OOP style. Multiple difficulty levels, many grid sizes. ",
      "My first app, wrote it after studying Headfirst Javascript book."
    ),
    developmentSummary: ["Took months. Everything was new to me."],
    metrics: new Metrics(1, 1, 1, 1),
    lessonsSummary: {
      whatWentWell: [
        "Learned enough & persistend long enough to complete the project",
      ],
      whatWentPoorly: [
        "Took months",
        "Most of the things a newbie could do wrong: \n no tasks, \n no roadmap, \n no contingencies, \n no prototype'ing.",
        "Just dived right into it and sank for months",
      ],
      rootCauses: ["First app, inexperienced."],
      nextTime: [
        "Next time I am inexperienced at doing a given thing and it's complex, I'll take it much more gradually, many more steps in between point A and point B",
      ],
      howCanIDoItAllBetter: [
        "In terms of learning new and complex abilities: at least try to be aware that there are always shoreter and longer ways...it pays to be good at looking for the shorter ones",
      ],
    },
    importantPoints: [
      "There are many types of struggling, some of them are much more effective at yielding improvement, than others",
      "It pays to be skilled at looking for those types that are most effective",
      "In fact, it pays even more to have a framework for doing so, so that you find the best types of struggling, that give the best learning and growthh rates for you as a software developer",
    ],
    github: "https://github.com/munrhalls/snake__",
    link: "https://snakehalls.netlify.app",
  },
];

export { projectMetrics };
export { portfolioData };

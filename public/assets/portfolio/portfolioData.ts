import examYourself from "./projectImages/examYourselfHeader.avif";

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
    header: new Header("App", examYourself, examYourself),
    mainSection: new MainSection(
      "Exam yourself",
      "Make your own lists of Questions & Answers. Test yourself against the list of proper answers, which you make. Angular project.",
      ""
    ),
    developmentSummary: [
      "Context: doing course on Angular. After learning components, data-bindings and directives, I realized I needed to test and push my new skills in a project, aside from deliberate reps.",
      "Took about 7-8 hours total, in one day.",
      "Pomodoro discipline gave way to riding a 'wave' of just pushing it hard to completion",
      "Most time lost on: 1) the error of trying to do 'one-off' from the 'not-yet-learned' area, i.e. advanced Angular forms, and also bootstrap dropdowns; 2) the error of skipping abstraction-level-css consideration, so that all css flows from one pattern",
    ],
    metrics: new Metrics(3, 5, 3, 4),
    lessonsSummary: {
      whatWentWell: [
        "Quick development.",
        "Did complete.",
        "Deliberate mental reps, active recall - works. Could make the project because of all the active recalls I did on sub-skills.",
        "E.g. component, each form of data-binding, directive, passing data, etc.",
        "Prevented quicksands of perfectionism, mindset of looking for no-nonsense, ok-enough alternatives to get the job done more efficiently.",
      ],
      whatWentPoorly: [
        "Spent 3+ hours on trying to do the forms in some advanced way.",
        "Struggled with bootstrap 'one-offs' - e.g. dropdown, or some other item, getting it to work.",
        "Css became kinda messy, lots of inline styling",
      ],
      rootCauses: [
        "Not yet well-trained in doing css in a framework-manner",
        "Strategic error point in my 'how-to-learn-in-general': trying to do 'one-off' well from a 'not-yet-learned' area.",
      ],
      nextTime: [
        "SOP: a) Rely on feel for it and begin with features, components, models plan.",
        "b) Consider a few common sense contingencies, what if I see x starting to go wrong, get stuck etc., what will I do then, c) Plan css abstractions. Get every repeating sub-area to flow from a thematic abstraction, e.g. all menu buttons are custom like so and so, all title areas are so and so",
        "d) Make placeholders for all comps - every comp needs to be there",
        "e) Now, code it systematicaly, going from the top, and always starting from the Typescript model.",
      ],
      howCanIDoItAllBetter: [
        "How to learn in general: regularly rehearse not repeating the error: trying to do a one-off well, from a 'not-yet-learned' area - that's a huge error because it's not going to be done well anyway because you haven't learned it yet, so you trying to guesswork it well.",
      ],
    },
    importantPoints: [
      "Remember to go by feel. It's not just technical process. If you don't feel like it's a good push, accurate stretch of your abilities - not too far, not too little - if it doesn't excite your nervous system - if you you're not riding the 'energetic wave', if it doesn't feel efficient, you know some stuff is wrong and you need to re-think your entire approach, first. This comes BEFORE anything technical or any results, this is a core, key aspect of valuing process before results.",
    ],
    github: "https://github.com/munrhalls/exam-yourself",
    link: "https://examyourself.netlify.app/",
  },
  {
    technology: "Angular",
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

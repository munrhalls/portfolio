import Accordion from "react-bootstrap/Accordion";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { H1Image } from "../MainReusables";
import Button from "react-bootstrap/Button";
import { useAppSelector } from "./../hooks/hooks";
import homeImg from "./../assets/homeImg.png";
import dojoImg from "./../assets/dojoImg.png";

function Home() {
  const author = useAppSelector((state) => state.auth.value);

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Synopsis of what I can currently do:
            <H1Image src={dojoImg} alt="dojo image" />
          </Accordion.Header>
          <Accordion.Body>
            <p>
              - develop a modern, fast, responsive website using React /
              React-bootstrap, reasonably fast
            </p>
            <p>
              - develop a small but modern, fast, responsive web application,
              using React / React-router / Typescript / Redux OR Angular,
              reasonably fast
            </p>
            <p>
              - develop a highly custom website or web app, using Javascript,
              HTML, CSS and other technologies (e.g. SVG, Canvas), in a
              reasonable time-frame
            </p>
            <p>
              - work with API and promises at basic level, connecting frontend
              features with backend services using REST endpoints
            </p>
            <p>- solid skill in navigating DOM tree with Javascript</p>
            <p>
              - more than basic skill and understanding in Javascript, being
              quite comfortable with concepts of recursion, currying, OOP,
              working with multidimensional constructs such as matrices, arrays
              within arrays etc.
            </p>
            <p>
              - basic comprehension & skill with data structures: Array, Linked
              list, Stack, Set, Binary Search Tree
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h1 className="mt-3 mb-3">Junior Web Developer</h1>

      <h2>Synopsis of what I currently can do:</h2>

      <hr />

      <h2>Strengths & Weaknesses:</h2>
      <h3>Areas of strength:</h3>
      <p>- multidimensional, abstract, spatial reasoning and constructs</p>
      <p>
        - finding completely novel, utterly unlikely angles of approaching a
        subject
      </p>
      <p>
        - noticing connections and parallels between seemingly impossibly
        unrelated items
      </p>
      <p>- extreme levels of passion, fascinationm curiosity</p>
      <p>
        - using analogies, metaphors, summaries quite well, being a decently
        articulate communicator
      </p>
      <p>
        - general, practical self-education that spans titles such as "The Art
        of Learning" by J. Waitzkin, "The inner game of tennis" by T. Gallwey,
        "Learn like a pro" by B. Oakley, "Extreme Ownership" by J. Willin, L.
        Babin, "Principles" by R. Dalio, "The One Thing" by G. Keller, and goes
        way beyond just reading it; it involved and still does, flashcards,
        experimentation, ways of internalizing, self-training, contemplation,
        regular journaling, symbolic drawings and diagrams, and more - whatever
        it takes to get the most out of it
      </p>
      <h3>Areas of weakness:</h3>
      <p>
        - extremely vulnerable to becoming highly unrealistic,
        overly-aspirational and not realizing it until really late
      </p>
      <p>
        - easily stuck, takes me quite a lot of self-awareness, method and
        alertness to avoid getting stuck or lost in a very inefficient way of
        doing a thing
      </p>
      <p>
        - tendency to get bogged down and lost in the weeds, working on
        perfecting some minor detail that doesn't really matter that much
      </p>
      <p>
        - for some reason, I tend to be bad with efficiency, despite my best
        efforts to work with a systematic process to avert it - I'm too worried
        about some aspect of symmetry or look or whatever else of whatever it is
        that I'm working on, it's an absurdly notorious hassle for me
      </p>
      <h2>What I'm doing to improve strengths & weaknesses</h2>
      <p>- Using pomodoro technique</p>
      <p>
        - Integrating time assessment with what-to-do into a coherent next step
        as realistically as I can
      </p>
      <p>
        - working in manner of self-challenges, along the lines of "timing
        pushes", that is:
      </p>
      <ol>
        <li>
          Set "GET X DONE" in Y POMODOROS
          <div>E.g. complete homepage in 3 pomodoros.</div>
        </li>
        <li>
          Map it out rapidly, in a simple, no nonsense way. Time threats.
          Opportunities. Preventive measures, onset adaptions, important points.
        </li>
        <li>Wing it, just go.</li>
        <li>
          Careful but quick and rapid, no-nonsense review after, feedback,
          extract as much lesson value and realistic adaptation for my next
          steps, as I can from it.
        </li>
        <li>
          Importantly: not having lots of little changes from feedback session
          to feedback session, it's very few items drilled deeply to an
          improvement that lasts...errors that matter are usually thematic,
          repeating over and over so I aim at fixing that, in a lasting way
        </li>
      </ol>
      <p>
        - Practicing a very dynamic, agressive mindset about driving real,
        required tasks to conclusion fast
      </p>
      <p>
        - The one thing I keep doing no matter what, regardless of how any
        project goes or doesn't go, irrespective of any set of failures or
        successes, is developing software and enjoying the process of learning
        in doing so
      </p>
      <hr />
      <h2>My current level</h2>
      <p>
        Point: briefly mention items most relevant to the level of my ability of
        developing relevant, quality software solutions fast and reliably.
      </p>
      <p>
        Important: I explain my current level, as it pertains to each item. It's
        not an "I got this" list.
      </p>
      <h3>Hard understanding & skills</h3>
      <h4>Data structures</h4>
      <p>- Array / Object / Linked list / Stack / Set / Binary Search Tree</p>
      <p>
        - I can explain them, draw them or write them and use them in Javascript
      </p>
      <p>
        - Almost always, I use objects/arrays but I am aware of the depth and
        breadth of how deep the topic of data structures goes
      </p>
      <p>
        - Most of my recent use-cases were to think about how to structure the
        data organization for redux state
      </p>
      <h4>Algorithms</h4>
      <p>
        Work to be done for me. I don't yet know many algorithms. I can code
        some basic algorithms, e.g. search by halves, I can also estimate the
        Big-O trend but that's about it for now.
      </p>
      <h4>Javascript</h4>
      <p>
        I would say my understanding and skill is a very solid degree above just
        sound basics. I can work recursion, currying, multidimensional arrays,
        objects. I can do OOP. Please challenge me and prove where it's not so.
      </p>
      <p>
        Where I'm weaker at, currently, is promises and async. I can and have
        done it many times in old node callbacks style and with more modern
        syntax style but I don't feel strong in it. Work to be done, need some
        more deliberate practice.
      </p>
      <h4>Typescript</h4>
      <p>
        I know why to use it (want to prevent writing bug instead of debugging a
        bug) and its basics. I know enough to read it and write it at a basic
        level and use it with React.
      </p>
      <h4>React / React-router </h4>
      <p>
        I can do and use: Composition / Hooks / Class-based components /
        minimizing re-renders / avoid prop-drilling / utilize context.
      </p>
      <p>
        I mention React-router because I don't really know many cases where one
        would not want some url handling.
      </p>

      <h4>Angular</h4>
      <p>
        I've just begun learning it, having bought Maximilian Schwarzmuller's
        course on Udemy. I can write a basic website in it and I can do some
        basic data operations.
      </p>

      <h4>HTML & CSS</h4>
      <p>
        HTML - I usually want to first have all the content and a
        well-structured HTML document before I do anything else, as it makes all
        the rest easier. I can write semantic HTML.
      </p>
      <p>
        CSS - I have an intermediate/advanced skill with crafting layouts using
        flexbox and/or grid. I can achieve all kinds of highly custom effects
        using various bizarre combinations of properties, in a fairly reasonable
        time. I have a decent skill with achieving mobile-friendly effects.
      </p>
      <h4>Bootstrap</h4>
      <p>
        Not much experience but enough to use it and craft a decently looking,
        responsive website appearance.
      </p>
      <hr />
      <h3>Soft understanding & skills</h3>
      <h4>Understanding framework vs work</h4>

      <p>
        I don't mean just a framework like for example, Angular or Vue, or
        jQuery in the old days. I mean it more broadly, as an approach to any
        work in general. If there's any scale or high repeatability to the
        endeavor, not crafting a framework for it is a giant waste of time.
      </p>
      <p>
        I learned very painful lessons from certain attempts and they are that
        not determing a framework first (even if it technically won't use any
        framework), is a waste of time.
      </p>
      <p>
        Work is doing the marathon by foot because it's easier to start that
        way. Framework is build that bicycle or surfing board or little flying
        artifice, first.
      </p>
      <p>
        There is never a reason to do a project without a framework of some
        sorts - even if technically, it's just Javascript/HTML/CSS, it's still
        worth it to determine some baseline of tools and techniques to work at
        it effectively.
      </p>
      <p>
        Lack of framework means one-off's. One-off's are a plague. By "one-off"
        I mean some thing to be done that is handled individually - managing any
        large amount of such things is an absolute nightmare.
      </p>
      <p>
        In short, it's better to have a lack of one-off's, rather than a lack of
        framework on a project. It's either one or the other.
      </p>

      <h4>Understanding paradigms of software</h4>
      <p>I don't think I have a deep comprehension of these, yet.</p>
      <p>
        I can explain imperative vs procedural vs declarative vs functional vs
        object oriented programming.
      </p>
      <p>
        I can apply basic OOP in practice and I like it. For example, I can
        write a basic board using classes.
      </p>
      <p>
        I am also aware of criticism to OOP, mainly from Rich Hickey's talks
        (creator of Clojure) but I am not able to verify it one way or another,
        no personal experience with larger projects that'd enable me a whole and
        realistic confirmation.
      </p>
      <h4>Problem solving</h4>
      <p>
        - I've tried, failed and succeeded a whole bunch of various web
        applications, mostly in Javascript/HTML/CSS/React and from this, I have
        a reasonable, basic sense for solving common problems
      </p>
      <ul>
        <li>
          I learned that planning solution is useless as soon as you start but
          absolutely essential to succeed at it
        </li>
        <li>
          I always try to do some rapid, quick, no-nonsense planning &
          prototype'ing of what I'm going to do, in what order, how and ABCD's
          of if A's unavailable, then B, if B's unavailable, then C etc., what
          are the biggest threats/opportunities relative to time, note most
          important points
        </li>
        <li>
          I also employ the idea that developing solution is a better frame to
          look trough than the frame of problem solving
          <ul>
            <li>
              Developing a solution is about starting from a core idea and then
              gradually unwinding it with checks & tests of what works
            </li>
            <li>
              It's easier to de-compose & assemble the solution that way, than
              with the "break it into sub-problems" because it keeps the
              chain-links intact, all stays as one whole
            </li>
          </ul>
        </li>
        <li>
          I also look at problem solving similar to how a coach looks at a
          football match - if a given strategy doesn't work, I try another one
          and I want to have a varied arsenal of solving strategies at my
          disposal
        </li>
        <li>
          The core of it has to do with puzzles, bigger picture and navigating
          back and forth in order to fit more and more pieces to clarify it...at
          some point, it becomes clear enough, you start getting "aha" after
          "aha" moment and you solve it.
        </li>
        <li>
          One interesting thing, at least in my opinion, is that it's often a
          very gradual onramp that then speeds up quite rapidly, solving often
          looks like an avalanche of realizations - it's hardest and slowest at
          the onset
        </li>
      </ul>
      <p>
        - a decent additional asset for me, is experience from codewars - it has
        the best feedback cycle out of all the platforms and that makes all the
        difference for me in a practical way
      </p>
      <p>
        - in my view, a great deal of it all is just pattern recognition, and
        that's what I've got from codewars, at least to a basic degree with
        javascript
      </p>

      <hr />
      <h4>Understanding an effective software development philosophy</h4>
      <p>
        Before you read, let me warn you that this is just my subjective
        exploration. It's important to my ability to solve software things
        faster. This being relevant to anyone else - I have no idea, so please
        be warned.
      </p>
      <h4>"Philosophy"? Seriously?</h4>
      <p>
        I don't mean the philosophy where some serious-looking persona sits on a
        rock and ponders philosophical questions. I just mean a practical
        approach, an overall sum-total take on how to best go about things.
      </p>
      <p>
        However, this approach DOES - and as the single, most important aspect
        of it all - contain the questions about what's really there and what
        matters about, and that's philosophy. A range of concepts, ideas,
        ideals, approaches, tools, frames, ways of looking and whatever else
        fits, to form a way of operating that's more efficient, effective and
        satisfactory than most alternatives.
      </p>
      <p>
        Focusing on just results doesn't work. Focusing on just process doesn't
        work. Focusing on coherent assemble between, and of, these two, also can
        easily work very poorly and deficiently.
      </p>
      <p>Why not just science, then?</p>
      <p>
        Whatever science is done, it's just such a fraction of how reality
        works, even in a specific domain, that it's never really legitimate to
        just do science. You will be guessing anyway and you won't have time to
        guarantee the answers via science.
      </p>
      <p>
        Reality's way too big and complex to have the time to do the proper
        science on everything. So what's left is philosophy - what's there and
        what works best based on that. Science is the other half of it, to
        balance it, to keep it real.
      </p>
      <h4>
        My (humble and all-over-the-place) learnings about what truly matters
        and is most effective for software development
      </h4>
      <p>
        Everything is time, in a way. Whatever I mention here, I will relate it
        to time. Whatever matters, matters because of timing, more than the
        matter of it. Anyone can do anything in infinite time. Fundamental
        understanding is not a theory and it is not a waste of time. It's a well
        of real accelerations.
      </p>
      <p>
        I read somewhere that, in science, understanding the origin of a thing,
        gives insight into the inner dimensions of how that thing works. Every
        instance of people developing some app, contains a portion of analogy of
        how software itself has developed. This is analogous to how in chess,
        every principle is present in every position.
      </p>
      <p>
        Currently, my most useful understanding is that software development is
        "managed snowball". In developing a solution, every action point
        potentially can be made to contribute towards the snowball effect.
        Snowball effect is that everything has gotten a tiny little bit easier.
        Enough of these tiny little bits adds up to significant acceleration -
        the snowball's rolling.
      </p>
      <p>
        Conversly, it's about managing minimal friction. Anything that is done
        that keeps other things hard, is a one-off and it translates to
        friction. If a change was required, every item would need to be changed
        individually. That also means, every item could have individual one-off
        consequences that would need to be dealt with on individual basis.
        Complication begets complication. Friction begets more friction.
      </p>
      <p>
        This "managed snowball" seems to be all about dichotomic balancing: two
        opposite extremes and finding the right range between them for a given
        snowball-to-problem type.
      </p>
      <p>
        For example, if you keep a thing too big, you bang your head against a
        wall. If you split it up too atomically, there's so much of it, it all
        becomes sand, too complex. If you find the right range between, it's
        neither too big, nor too granular, it's a much better fit for solving.
      </p>
      <p>
        Managed snowball is, mostly, a function of fit. It's
        fitsForDevelopmentSnowball(x) ~ y, for choosing the right next step.
      </p>
      <p>
        The reality of translating it to practical use, has to do with symbolic
        meanings, geometry and arming intuition with items that help it reliably
        deliver that which speeds up coherent solving processes.
      </p>
      <p>
        In real terms, I don't know - it's just a bunch of ideas that help to
        bundle everything into a more coherent whole, when solving anything.
        It's like a framework for solving, for me.
      </p>
      <hr />
      <h2>My next steps</h2>
      <h3>Working on my solutions-development speed</h3>
      <p>
        "Time pushes", setting X to complete in 3 pomodoros, mapping it out,
        doing my best, then feedback, like it was a mission
      </p>
      <h3>
        Improving development philosophy for being the most effective developer
        I can be
      </h3>
      <p>
        I seek that which is the most formative, usable coherent whole of
        concepts, techniques, pricinples and how to use them, a framework for
        developing all kinds of things very effectively.
      </p>
      <h3>Developing software to learn developing software</h3>
      <p>
        Developing shows me where my limits and biggest time-sinks, worst
        weaknesses are. Time-sinks and weaknesses are where I place my focus on
        adapting, as I keep developing.
      </p>
      <p>
        Tried many more approaches but they are all less direct and work worse
        than the above.
      </p>
      <p>This is a more natural and real approach.</p>
      <hr />
      <h2>
        Where I'm going in general, what interests me, what are my long-term
        aspirations
      </h2>
      <h3>Taking my problem-solving abilities to entirely new heights</h3>
      <h3>Mastering use of advanced data structures</h3>
      <h3>
        Developing multidimensional, highly abstract, spatial virtual constructs
      </h3>
      <h3>
        Enabling new, vaster and richer forms of digital multimedia, games and
        art
      </h3>
      {/* <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row style={{ background: "#000" }}>
          <Col xs={4}>
            <Image src={homeImg} alt="Home image" fluid />
          </Col>
          <Col xs={8} style={{ background: "#fff", border: "1rem solid #000" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos provident autem quidem similique nam necessitatibus
              libero in eveniet porro aliquid modi reprehenderit laborum itaque
              quaerat incidunt unde, totam reiciendis deleniti.
            </p>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Home;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useAppSelector } from "./../hooks/hooks";
import homeImg from "./../assets/homeImg.png";

function Home() {
  const author = useAppSelector((state) => state.auth.value);
  console.log(author);

  return (
    <>
      <h1 className="mt-3 mb-3">Junior Web Developer</h1>
      <h2>Synopsis of what I currently can do:</h2>
      <p>
        - develop a modern, fast, responsive website using React /
        React-bootstrap, reasonably fast
      </p>
      <p>
        - develop a rather small but modern, fast, responsive web application,
        using React / React-router / Typescript / Redux OR in Angular,
        reasonably fast
      </p>
      <p>
        - develop a highly custom website or web app, using Javascript, HTML,
        CSS and other technologies (e.g. SVG, Canvas), in a longer but
        reasonable time-frame
      </p>
      <p>
        - work with API and promises at basic level, connecting frontend
        features with backend services using REST endpoints
      </p>
      <p>- solid skill in navigating DOM tree with Javascript</p>
      <p>
        - demonstrate more than basic skill and understanding in Javascript,
        being quite comfortable with concepts of recursion, currying, OOP,
        working with multidimensional constructs (e.g. arrays within arrays,
        matrices, objects within objects, etc.) and modern syntax i.e. ES6
        methods AND using these skills in framework-environments, e.g. React
      </p>
      <p>
        - demonstrate basic comprehension & skill with data structures: Array,
        Linked list, Stack, Set, Binary Search Tree
      </p>

      <hr />
      <h2>Strengths & Weaknesses:</h2>
      <h3>Areas of strength:</h3>
      <p>
        - multidimensional, extremely abstract, spatial reasoning and constructs
      </p>
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
        - Practicing a very dynamic, agressive mindset about driving a task to
        conclusion fast
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

      <h4>Understanding paradigms of software</h4>
      <h4>Problem solving</h4>
      <hr />

      <h3>Hard understanding & skills</h3>
      <h4>Data structures</h4>
      <p>list them</p>
      <h4>Algorithms</h4>
      <p>brief mention</p>
      <h4>Javascript</h4>
      <p>brief mention</p>
      <h4>Typescript</h4>
      <p>brief mention, what I can</p>
      <h4>React / React-router / Redux </h4>
      <p>mention it all</p>
      <h4>Angular</h4>
      <p>brief mention</p>
      <h4>HTML & CSS</h4>
      <p>brief mention but explain</p>
      <h4>Bootstrap</h4>
      <p>brief mention</p>
      <hr />

      <hr />

      <h3>Soft understanding & skills</h3>

      <h4>Development philosophy</h4>
      <p>
        Before you read, let me warn you that this is just my subjective
        exploration. It's important to my ability to solve software things
        faster. This being relevant to anyone else - I have no idea, so please
        be warned.
      </p>
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

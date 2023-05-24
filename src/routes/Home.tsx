import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomAccordionHeader } from "../MainReusables";

// import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { H1Image } from "../MainReusables";
// import Button from "react-bootstrap/Button";
// import { useAppSelector } from "./../hooks/hooks";
// import homeImg from "./../assets/homeImg.png";
// import dojoImg from "./../assets/dojoImg.png";
import homeBg from "./../assets/simpleGeometricSpread3.png";
import { CustomParagraphsGroup } from "../MainReusables";

function Home() {
  // const author = useAppSelector((state) => state.auth.value);

  return (
    <div
      style={{
        minHeight: "80vh",
        background: `url(${homeBg}) no-repeat center right fixed`,
        backgroundSize: "contain",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} xl={8}>
            <h1 className="mt-5 mb-5">Junior Web Developer</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} xl={8}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <CustomAccordionHeader text="Experience" />
                <Accordion.Body style={{ background: "#000" }}>
                  <CustomParagraphsGroup>
                    <p>
                      Worked for two years at a start-up company. Learned
                      practical problem-solving abilities and delivering
                      software tasks under time pressure.
                    </p>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>
                      Frequent exposure familiarized me with the scenario of
                      being new to a very large codebase.
                    </p>
                    <p>
                      Codebase with a lot of new technologies I did't yet know,
                      and tasks to be delivered sooner, rather than later.
                    </p>
                    <p> I got better at handling that scenario.</p>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>
                      Learned operating within the agile development process. I
                      got better at knowing how to deal effectively with
                      pressures, and problems invovled with, the product
                      releases every two weeks.
                    </p>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>
                      Learned effective communication: every work day meant
                      "daily" and talking about software, from which I learned
                      how to form my thoughts about it in a simple, clear and
                      concise manner.
                    </p>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>
                      Probably most importantly, I learned how to learn
                      efficiently, in the ever-more dynamically changing,
                      demanding world of IT.
                    </p>
                  </CustomParagraphsGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <CustomAccordionHeader text=" Programming concepts skills" />
                <Accordion.Body style={{ background: "#000" }}>
                  <CustomParagraphsGroup>
                    <p>Programming concepts:</p>
                    <ul>
                      <li>concept of data types</li>
                      <li>why data types exist</li>
                      <hr />
                      <li>values</li>
                      <li>variable</li>
                      <hr />
                      <li>control flow</li>
                      <hr />
                      <li>loops</li>
                      <li>functions</li>
                      <hr />
                      <li>objects (prototype chain in Javascript)</li>
                      <li>classes (as object blueprint) and instances</li>
                      <li>Object Oriented Programming (intermediate level)</li>
                      <li>SOLID principles</li>
                      <hr />
                      <li>Imperative / Procedural / Declarative programming</li>
                      <li>Functional paradigm vs Object oriented paradigm</li>
                    </ul>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>Data structures:</p>
                    <ul>
                      <li>Array</li>
                      <li>Linked list</li>
                      <li>Stack</li>
                      <li>Set</li>
                      <li>Binary Search Tree</li>
                    </ul>
                  </CustomParagraphsGroup>
                  <hr />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <CustomAccordionHeader text="Problem solving skills" />
                <Accordion.Body style={{ background: "#000" }}>
                  <CustomParagraphsGroup>
                    <p>
                      Aside from work experience, I've trained problem solving
                      by:
                    </p>
                    <ul>
                      <li>developing numerous web applications, websites</li>
                      <hr />
                      <li>
                        encountering bugs, roadblocks, obstacles in developing,
                        and solving them
                      </li>
                      <hr />
                      <li>
                        by practicing solving coding challenges on platforms
                        such as codewars.com
                      </li>
                      <hr />

                      <li>
                        by studying and thinking about software concepts and
                        deepening my overall understanding of it
                      </li>
                      <hr />

                      <li>
                        by studying problem solving itself, in particular, from
                        the teacher V. Antom Spraul and his book "Think like a
                        programmer"
                      </li>
                    </ul>
                  </CustomParagraphsGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <CustomAccordionHeader text="Programming languages, frameworks skills" />

                <Accordion.Body style={{ background: "#000" }}>
                  <CustomParagraphsGroup>
                    <ul>
                      <li>Javascript</li>
                      <li>
                        I can work with, understand, read, write, modify, debug
                        advanced features
                      </li>
                      <hr />
                      <li>
                        For example: recursion, function currying, closures,
                        multidimensional arrays and objects, deep vs shallow
                        copy, complex DOM operations
                      </li>
                      <hr />
                      <li>Typescript (basic)</li>
                      <li>Managing DOM with Javascript</li>
                      <hr />
                      <li>Angular (basic)</li>
                      <li>React</li>
                      <li>Redux</li>
                      <hr />
                      <li>Sass</li>
                      <li>Bootstrap</li>
                      <hr />
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SVG</li>
                      <hr />
                      <li>Developer tools</li>
                      <hr />
                      <li>Git</li>
                      <li>Terminal (basic)</li>
                      <li>VSCode IDE</li>
                      <hr />
                      <li>Hosting</li>
                    </ul>
                  </CustomParagraphsGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <CustomAccordionHeader text="Managing development process skills" />

                <Accordion.Body style={{ background: "#000" }}>
                  <CustomParagraphsGroup>
                    <p>
                      I've learned that attacking the problem head-on almost
                      never works, nor is it worth it to skip basic preparation
                      and just go at it.
                    </p>
                    <p>
                      For what it's worth, I learned to always have a simple
                      roadmap, with a reasonable priority path, tasks and few
                      likely contingencies.
                    </p>
                    <p>
                      It's either that, or the solution work will be circular,
                      random, repetetive and everything will take 10-20x longer,
                      if that.
                    </p>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>
                      This applies to developing any larger-scale thing, even if
                      it's just a feature:
                    </p>
                    <ul>
                      <li>it has to be broken into components</li>
                      <li>
                        it has to be clear how the components fit together
                      </li>
                      <li>
                        then I have to make tasks and focus myself on one small
                        priority at a time
                      </li>
                      <li>
                        once that's done, move on to the next, and then next,
                        repeat
                      </li>
                    </ul>
                  </CustomParagraphsGroup>
                  <CustomParagraphsGroup>
                    <p>
                      That's how I trained myself to work, to improve
                      effectiveness of my efforts.
                    </p>
                    <p>
                      I keep it as simple as possible but I always de-compose
                      things into smaller components, determine how these fit
                      together, make tasks to push it forward, and then tackle
                      one small priority at a time.
                    </p>
                  </CustomParagraphsGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

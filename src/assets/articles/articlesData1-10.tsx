import { Image } from "react-bootstrap";
import workImg1 from "./../graphics/workImage1.jpg";
import framework from "./../graphics/framework.jpg";

const placeholdersArticle = {
  id: "article-frameWorkvsWork-1",
  type: "text",
  subject: "Work effectiveness",
  html: (
    <>
      <h1>Software work vs Software framework</h1>
      <p>
        When we work, we are putting in work units towards achieving a
        goal-state. One operates with a degree to which one is or is not passing
        these work units through a structure.
      </p>
      <p>
        A well-shaped structure can phase and synchronize work units, in
        alignment to goal-state, such that the same work input returns manifold
        more and better output.
      </p>
      <p>
        Work units can be passed through a "membrane" or organizational
        template, such that any passed work unit, becomes coherent and
        synchronized with all the other units.
      </p>
      <p>
        A framework is that which multiplies useful outcomes from the same work
        input.
      </p>
      <p>
        The point of this article is finding whatever's most reliable and best
        in terms of consistently finding the best moves and most coherent,
        direct, efficient energy input, on the "board" of a given task.
      </p>
      <h2>Work. Framework. Relevant definitions.</h2>

      <div>
        <p>
          According to Meriam-Webster dictionary, the relevant definition of
          work is:
        </p>
        <Image
          className="mt-1 mb-2"
          style={{
            maxWidth: "60%",
            float: "left",
            marginRight: "1.5rem",
          }}
          rounded
          src={workImg1}
          alt="Work image"
        />
        <ul>
          <li style={{ fontWeight: "bold" }}>
            activity in which one exerts strength or faculties to do or perform
            something:
          </li>
          <ul>
            <li style={{ fontWeight: "bold" }}>
              e) something that results from a particular manner or method of
              working, operating, or devising
            </li>
          </ul>
        </ul>
      </div>

      <div>
        <p>Framework, on the other hand is defined by the dictionary as: </p>
        <ul>
          <li style={{ fontWeight: "bold" }}>
            a) a basic conceptional structure (as of ideas)
          </li>
          <li style={{ fontWeight: "bold" }}>
            b) a skeletal, openwork, or structural frame
          </li>
          <li style={{ fontWeight: "bold" }}>c) frame of reference</li>
          <li style={{ fontWeight: "bold" }}>
            d) the larger branches of a tree that determine its shape
          </li>
        </ul>
        <Image
          src={framework}
          style={{
            maxWidth: "70%",
            float: "right",
            marginTop: "0.5rem",
            marginLeft: "1.5rem",
          }}
          rounded
        />
      </div>

      <p>
        In the world of software development, solving a problem in a case by
        case manner is not real. One-off's are a a slippery slope of
        self-multiplying complexities that land a project into bugged out swamp
        of massive delay and irrelevance.
      </p>
      <p>
        Anything in a more complex application, that is dealt with on an
        individual basis, has an uncanny potential to multiply overall
        complexity. It makes keeping things consistent harder and more
        obfuscated.
      </p>
      <h2>Work</h2>
      <Image
        style={{
          maxWidth: "30%",
          float: "left",
          marginTop: "0.5rem",
          marginRight: "1.5rem",
        }}
        rounded
        // src={artimg}
        alt="Article image"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>

      <h2>The second lorem</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
      <Image
        style={{
          maxWidth: "40%",
          float: "right",
          marginTop: "0.5rem",
          marginLeft: "1.5rem",
        }}
        rounded
        // src={artimg}
        alt="Article image"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>

      <h2>The third lorem</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
        ipsa perferendis rem necessitatibus quis repudiandae accusantium,
        voluptatibus omnis placeat explicabo debitis quia, ullam dolorem. Autem
        harum pariatur eius corrupti.{" "}
      </p>
    </>
  ),
};

const articlesData = [placeholdersArticle];
export { articlesData };

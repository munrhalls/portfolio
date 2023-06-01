import { Image } from "react-bootstrap";
import artimg from "./../graphics/f0.png";

const placeholdersArticle = {
  id: "article-frameWorkvsWork-1",
  type: "text",
  subject: "Work effectiveness",
  html: (
    <>
      <h1>Work vs Framework</h1>
      <p>
        Solving a problem in a case by case manner is not real in the world of
        software development, at least in my experience. One-off's are a plague.
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
          maxWidth: "40%",
          float: "left",
          marginTop: "0.5rem",
          marginRight: "1.5rem",
        }}
        rounded
        src={artimg}
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
        src={artimg}
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

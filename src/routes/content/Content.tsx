import { articlesData } from "../../assets/articles/articlesData1-10";
import Recording from "./Recording";

function Articles() {
  console.log(articlesData);
  return (
    <>
      {articlesData.map((article) => {
        return <h2>Articles test</h2>;
      })}
      <Recording />
    </>
  );
}

export default Articles;

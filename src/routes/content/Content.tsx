import { articlesData } from "../../assets/articles/articlesData1-10";
import Recording from "./Recording";

function Articles() {
  console.log(articlesData);
  return (
    <>
      {articlesData.map((article) => {
        return <>{article}</>;
      })}
      <Recording />
    </>
  );
}

export default Articles;

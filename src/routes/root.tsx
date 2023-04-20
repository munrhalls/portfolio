import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import bgImg from "../assets/f2.png";

const Container = styled.div`
  background-image: url("${bgImg}");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

console.log(bgImg);

function Root() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>works</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            pLorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur explicabo suscipit enim. Dolorum minus soluta, tempore
            esse fuga magni expedita iure explicabo sapiente inventore
            voluptatibus, et, saepe repellendus doloremque fugiat.
          </div>
          <div className="col">
            pLorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur explicabo suscipit enim. Dolorum minus soluta, tempore
            esse fuga magni expedita iure explicabo sapiente inventore
            voluptatibus, et, saepe repellendus doloremque fugiat.
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Root;

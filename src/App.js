import "./styles.css";
import Demo from "./demo";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const ContainerDiv = styled(Container)`
  font-family: sans-serif;
  text-align: center;
`;

const DemoArea = styled(Col)`
  width: 100%;
  height: 85vh;
`;

export default function App() {
  return (
    <ContainerDiv fluid>
      <Row>
        <Col>
          <h1>Hello CodeSandbox</h1>
        </Col>
      </Row>
      <Row>
        <DemoArea>
          <Demo />
        </DemoArea>
      </Row>
    </ContainerDiv>
  );
}

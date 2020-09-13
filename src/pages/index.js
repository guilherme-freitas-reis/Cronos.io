import React from "react";
import styled from "styled-components";

import Calendario from "../components/Calendario";
import Info from "../components/Info";

function Index() {
  return (
    <Container>
      <Main>
        <Calendario />
        <Info />
      </Main>
    </Container>
  );
}

export default Index;

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

const Main = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  background: #fff;
  min-height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 30%;
  max-width: 400px;
  min-width: 300px;
  flex-direction: column;
  flex: 1;
  background: #121212;
  color: #fff;
  margin: 0 0 0 20px;
  padding: 2rem 2rem 0;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    width: 100%;
    max-width: unset;
    min-width: unset;
    margin: 0;
    padding: 30px 20px 50px;
  }
`;

export const TitleCTA = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0 2rem;
  font-weight: bold;
`;

export const DescriptionCTA = styled.p`
  font-size: 1rem;
  margin: 0 0 3rem;
`;

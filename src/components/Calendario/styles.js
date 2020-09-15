import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: unset;
  min-height: 100%;
  background: #fff;
  border-radius: 7px;
  padding: 2rem;
  margin: 0 2rem;

  @media (max-width: 1000px) {
    padding: 50px 20px 30px;
    width: 100%;
    margin: 0;
  }
`;

export const CalendarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0 0 10px;

  span {
    color: #f3751e;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 4rem;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1000px) {
    font-size: 1rem;
    margin: 0 0 3rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  margin: 0 0 2rem;
  justify-content: space-between;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

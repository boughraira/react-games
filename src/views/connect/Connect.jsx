import styled from "styled-components";
import BasicForm from "./BasicForm";

const Connect = () => {
  return (
    <GameAllPageWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#009f9dff"
          fillOpacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,96C384,75,480,53,576,69.3C672,85,768,139,864,176C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <BasicForm />
    </GameAllPageWrapper>
  );
};

export default Connect;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games {
    min-height: 100vh;
    padding-top: 65px;
  }
`;

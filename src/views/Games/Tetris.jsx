import styled from "styled-components";
const GAME_URL = "/src/StandloneGames/Tetris/index.html"; 

const Tetris = () => {
  return (
    <TetrisWrapper>
      <div>
        <iframe src={GAME_URL} className="iframe"></iframe>
      </div>
    </TetrisWrapper>
  );
};

export default Tetris;

const TetrisWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  color: rgba(255, 251, 215, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  .iframe {
    margin: 2rem 0;
    width: 70rem;
    height: 60rem;
  }

  @media (max-width: 768px) {
    .iframe {
      margin: 2rem 0;
      width: 60rem;
      height: 60rem;
    }
  }

  @media (max-width: 480px) {
    .iframe {
      margin: 2rem 0;
      width: 33rem;
      height: 60rem;
    }
  }
`;

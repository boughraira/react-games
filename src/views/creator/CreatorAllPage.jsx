import styled from "styled-components";

const CreatorAllPage = () => {
  return (
    <CreatorAllPageWrapper>
      <div className="sc-creators section">
        <div className="container">
          <h1>...</h1>
        </div>
      </div>
    </CreatorAllPageWrapper>
  );
};

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  color: rgba(255, 251, 215, 1);
  .sc-creators {
    min-height: 100vh;
    padding-top: 65px;
  }
`;

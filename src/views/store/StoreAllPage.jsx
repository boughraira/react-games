import styled from "styled-components";

const StoreAllPage = () => {
  return (
    <StoreAllPageWrapper>
      <div className="sc-stores section">
        <div className="container">
          <h1>...</h1>
        </div>
      </div>
    </StoreAllPageWrapper>
  );
};

export default StoreAllPage;

const StoreAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  color: rgba(255, 251, 215, 1);
  .sc-stores {
    min-height: 100vh;
    padding-top: 65px;
  }
`;

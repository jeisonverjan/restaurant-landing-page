import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function MenuItem({ title, price, tags }) {
  return (
    <StyledMenuItem>
      <div className="item">
        <div className="wine-name">
          <p className="wine-title">{title}</p>
          <div className="wine-divider" />
          <p className="text-base">{price}</p>
        </div>
        <div className="winte-tags">
          <p className="text-base">{tags}</p>
        </div>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;

const StyledMenuItem = styled.div`
  color: white;
  background-color: gray;
  display: flex;

  .wine-name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .wine-title {
      color: var(--color-golden);
      font-variant-numeric: lining-nums tabular-nums;
      font-family: var(--font-base);
      font-size: 19px;
      font-weight: 700;
      line-height: 130%; /* 29.9px */
      letter-spacing: 0.92px;
    }
  }

  .wine-divider {
    width: 90px;
    height: 1px;
    background: var(--color-golden);
    margin: 0 1rem;
  }
`;

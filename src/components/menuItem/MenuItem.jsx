import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function MenuItem({ title, price, tags }) {
  return (
    <StyledMenuItem>
      <div className="item">
        <div className="wine-name">
          <p className="wine-title">{title}</p>
          <div className="flex-center">
            <div className="wine-divider" />
            <p className="text-base wine-price">{price}</p>
          </div>
        </div>
        <div className="wine-tags">
          <p>{tags}</p>
        </div>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;

const StyledMenuItem = styled.div`
  //color: white;
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .wine-name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .wine-divider {
      width: 90px;
      height: 1px;
      background: var(--color-golden);
      margin: 0 1rem;
    }

    .wine-title,
    .wine-price {
      font-family: var(--font-base);
      font-size: 19px;
      font-weight: 700;
      line-height: 130%; /* 29.9px */
      letter-spacing: 0.92px;
    }

    .wine-title {
      color: var(--color-golden);
    }
    .wine-price {
      color: var(--color-white);
      padding-bottom: 0.3rem;
    }

    .wine-name-divider {
      display: flex;
      align-items: center;
    }
  }

  .wine-tags {
    p {
      font-family: var(--font-alt);
      font-size: 12px;
      color: var(--color-white);
      font-weight: 400;
      letter-spacing: 0.04em;
      line-height: 28px;
    }
  }

  @media screen and (min-width: 768px) {
    .wine-name {
      .wine-title,
      .wine-price {
        font-size: 23px;
      }
    }

    .wine-tags {
      p {
        font-size: 16px;
      }
    }
  }
`;

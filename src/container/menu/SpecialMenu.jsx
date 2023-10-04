import styled from "styled-components";
import { data, images } from "../../constants";

import SubHeading from "../../components/subHeading/SubHeading";
import Heading from "../../components/heading/Heading";
import MenuItem from "../../components/menuItem/MenuItem";
import Button from "../../components/button/Button";

function SpecialMenu() {
  return (
    <StyledSpecialMenu className="section__padding flex-center">
      <div className="title">
        <SubHeading title="Menu That Fits Your Palate" />
        <Heading type="primary">Today&apos;s Special</Heading>
      </div>
      <div className="content-container flex-center">
        <div className="content wines">
          <h2>Wine & Beer</h2>
          <div className="list wines-list">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="cocktail-image flex-center">
          <img src={images.menu} alt="restaurant-menu" />
        </div>
        <div className="content cocktails">
          <h2>Cocktails</h2>
          <div className="list cocktails-list">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                key={index}
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <Button>View More</Button>
    </StyledSpecialMenu>
  );
}

export default SpecialMenu;

const StyledSpecialMenu = styled.div`
  background: var(--color-black);
  flex-direction: column;
  gap: 4rem;

  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .title {
    text-align: center;

    h1 {
      font-size: 45px;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      color: var(--color-white);
      font-family: var(--font-base);
      font-size: 35px;
      font-weight: 600;
      line-height: 130%; /* 58.5px */
      letter-spacing: 1.8px;
      text-align: center;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  .cocktail-image {
    img {
      width: 100%;
      height: 450px;
    }
  }

  @media screen and (min-width: 768px) {
    .title {
      h1 {
        font-size: 64px;
      }
    }

    .content {
      h2 {
        font-size: 45px;
      }
    }

    .cocktail-image {
      width: 410px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .content-container {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 3rem;
    }

    .content {
      flex: 1;
    }

    .cocktail-image {
      flex: 1.2;
      width: 410px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

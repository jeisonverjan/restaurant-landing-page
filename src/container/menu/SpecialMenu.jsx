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
      <Button>View More</Button>
    </StyledSpecialMenu>
  );
}

export default SpecialMenu;

const StyledSpecialMenu = styled.div`
  background: var(--color-black);
  flex-direction: column;

  .title {
    text-align: center;

    h1 {
      font-size: 45px;
    }
  }

  .content {
    h2 {
      color: var(--color-white);
      font-family: var(--font-base);
      font-size: 35px;
      font-weight: 600;
      line-height: 130%; /* 58.5px */
      letter-spacing: 1.8px;
    }
  }

  .cocktail-image {
    img {
      width: 100%;
      height: 450px;
    }
  }
`;

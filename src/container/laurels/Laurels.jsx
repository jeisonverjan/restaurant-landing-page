import styled from "styled-components";
import { data, images } from "../../constants";
import SubHeading from "../../components/subHeading/SubHeading";
import Heading from "../../components/heading/Heading";
import AwardItem from "../../components/awardItem/AwardItem";

function Laurels() {
  return (
    <StyledLaurels className="section__padding flex-center">
      <div className="logo flex-center">
        <img src={images.logo} alt="restaurant logo" />
      </div>
      <div className="content">
        <div className="title">
          <SubHeading title="Awards & recognition" />
          <Heading>Our Laurels</Heading>
        </div>
        <div className="awards">
          {data.awards.map((award, index) => (
            <AwardItem
              key={index}
              title={award.title}
              text={award.subtitle}
              image={award.imgUrl}
            />
          ))}
        </div>
      </div>
      <div className="image-award flex-center">
        <img src={images.laurels} alt="fried chicken" />
      </div>
    </StyledLaurels>
  );
}

export default Laurels;

const StyledLaurels = styled.div`
  background-color: var(--color-black);
  flex-direction: column;
  gap: 3rem;

  .logo {
    align-self: flex-start;
    img {
      width: 146px;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;
    }

    .awards {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  .image-award {
    margin-top: 3rem;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 100%;
      justify-content: flex-start;
    }

    .content {
      .awards {
        display: grid;
        grid-template-columns: repeat(2, auto);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    //background-color: lightcoral;
    align-items: center;

    .logo {
      flex: 0.5;
    }
    .content {
      flex: 2;
      //background-color: lightblue;
    }
    .image-award {
      flex: 2;
      margin-top: 0;
      //background-color: lightgray;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;

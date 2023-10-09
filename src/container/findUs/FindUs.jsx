import { styled } from "styled-components";
import { images } from "../../constants";
import { Heading, SubHeading, Paragraph, Button } from "../../components";

function FindUs() {
  return (
    <StyledFindUs className="section__padding" id="contact">
      <div className="content">
        <div className="title">
          <SubHeading title="Contact" />
          <Heading>Find Us</Heading>
        </div>
        <div className="opening-hours">
          <Paragraph>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </Paragraph>
          <Heading>Opening Hours</Heading>
          <Paragraph>Mon - Fri: 10:00 am - 02:00 am</Paragraph>
          <Paragraph>Sat - Sun: 10:00 am - 03:00 am</Paragraph>
        </div>
        <Button>Visit Us</Button>
      </div>
      <div className="image">
        <img src={images.findus} alt="cocktail" />
      </div>
    </StyledFindUs>
  );
}

export default FindUs;

const StyledFindUs = styled.div`
  background: var(--color-black);
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    gap: 3rem;

    .title {
      h1 {
        padding-top: 1rem;
      }
    }

    .opening-hours {
      h1 {
        margin: 1.5rem 0rem;
        font-size: 19px;
      }
    }
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      .opening-hours {
        h1 {
          font-size: 23px;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .content {
      flex: 1;
    }

    .image {
      flex: 1;
      img {
        width: 80%;
      }
    }
  }
`;

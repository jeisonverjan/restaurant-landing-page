import styled from "styled-components";
import { images } from "../../constants";
import { Heading, Paragraph, Button } from "../../components";

function AboutUs() {
  return (
    <StyledAboutUs className="section__padding flex-center" id="about">
      <div className="overlay flex-center">
        <img src={images.G} alt="G_overlay" />
      </div>
      <div className="content about">
        <div className="title">
          <Heading>About Us</Heading>
          <img src={images.spoon} className="sppon" />
        </div>
        <Paragraph>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris.
        </Paragraph>
        <Button>Know More</Button>
      </div>
      <div className="knife-box flex__center">
        <img src={images.knife} alt="chef knife" />
      </div>
      <div className="content history">
        <div className="title">
          <Heading>Our History</Heading>
          <img src={images.spoon} className="sppon" />
        </div>
        <Paragraph>
          Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
          Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
          Odio Nec Aliquet.
        </Paragraph>
        <Button>Know More</Button>
      </div>
    </StyledAboutUs>
  );
}

export default AboutUs;

const StyledAboutUs = styled.div`
  background: var(--color-black);
  position: relative;
  flex-direction: column;
  gap: 3rem;

  .overlay {
    position: absolute;
    inset: 0;

    img {
      width: 80%;
      height: 320px;
      z-index: 0;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 1;
  }

  .about {
    align-items: flex-end;
    .title {
      text-align: right;
    }
    p {
      text-align: right;
    }
  }

  .history {
    align-items: flex-start;
  }

  .knife-box {
    z-index: 1;
    img {
      height: 910px;
    }
  }

  @media screen and (min-width: 768px) {
    .overlay {
      img {
        width: 391px;
        height: 415px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    padding: 4rem;
  }
`;

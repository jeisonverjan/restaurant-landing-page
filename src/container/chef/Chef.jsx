import styled from "styled-components";
import { images } from "../../constants";
import SubHeading from "../../components/subHeading/SubHeading";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";

function Chef() {
  return (
    <StyledChef className="section__padding flex-center">
      <div className="chef-image">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="chef-content">
        <div className="chef-content-title">
          <SubHeading title="Chef’s Word" />
          <Heading>What we believe in</Heading>
        </div>
        <div className="chef-content-paragraph">
          <div>
            <img src={images.quote} alt="quote" />
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </Paragraph>
          </div>
          <Paragraph>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </Paragraph>
        </div>
        <div className="chef-content-name">
          <Heading>Kevin Luo</Heading>
          <Paragraph>Chef & Founder</Paragraph>
        </div>
        <div className="chef-content-sign">
          <img src={images.sign} />
        </div>
      </div>
    </StyledChef>
  );
}

export default Chef;

const StyledChef = styled.div`
  background: var(--color-black);
  width: 100%;
  flex-direction: column;
  gap: 3rem;

  .chef-image {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .chef-content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    .chef-content-title {
      h1 {
        margin-top: 1rem;
      }
    }

    .chef-content-paragraph {
      div {
        display: flex;
        img {
          width: 47px;
          height: 40px;
          margin: 0 1rem 1rem 0;
        }
      }
    }

    .chef-content-name {
      h1 {
        font-size: 32px;
      }
    }

    .chef-content-sign {
      width: 100%;
      img {
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .chef-content {
      .chef-content-paragraph {
        div {
          align-items: flex-end;
        }
      }
      .chef-content-sign {
        img {
          width: 250px;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

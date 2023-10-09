import styled from "styled-components";
import { Heading, Paragraph } from "../../components";

// eslint-disable-next-line react/prop-types
function AwardItem({ image, title, text }) {
  return (
    <StyledAwardItem className="flex-center">
      <div className="image">
        <img src={image} alt="award" />
      </div>
      <div className="content-award">
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
      </div>
    </StyledAwardItem>
  );
}

export default AwardItem;

const StyledAwardItem = styled.div`
  //background-color: aliceblue;
  gap: 1rem;
  .image {
    img {
      width: 50px;
      height: 50px;
    }
  }

  .content-award {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 19px;
    }
  }

  @media screen and (min-width: 768px) {
    .content-award {
      h1 {
        font-size: 23px;
      }
    }
  }
`;

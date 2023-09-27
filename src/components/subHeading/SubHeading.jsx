import styled from "styled-components";
import { images } from "../../constants";

// eslint-disable-next-line react/prop-types
function SubHeading({ title }) {
  return (
    <StyledSubHeading>
      <p>{title}</p>
      <img src={images.spoon} alt="spoon_image" className="spoon__img" />
    </StyledSubHeading>
  );
}

export default SubHeading;

const StyledSubHeading = styled.div`
  p {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    line-height: 29.9px;
    font-size: 19px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    P {
      font-size: 23px;
    }
  }
`;

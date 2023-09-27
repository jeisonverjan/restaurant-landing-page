import styled from "styled-components";

const Paragraph = styled.p`
  font-family: var(--font-alt);
  color: var(--color-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.64px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    line-height: 175%; /* 28px */
  }
`;

export default Paragraph;

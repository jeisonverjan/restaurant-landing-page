import styled from "styled-components";

const Heading = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  font-size: ${(props) => (props.type === "primary" ? "50px" : "30px")};
  font-weight: ${(props) => (props.type === "primary" ? "700" : "600")};
  line-height: 130%;
  letter-spacing: ${(props) => (props.type === "primary" ? "3.6px" : "1.92px")};

  /* font-size: 64px;
  font-weight: 600;

  letter-spacing: 1.92px; */

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.type === "primary" ? "90px" : "30px")};
  }
`;

export default Heading;

/**
 *  font-size: 90px;
  font-weight: 700;
  line-height: 130%; 
  letter-spacing: 3.6px;

  font-size: 64px;
  font-weight: 600;
  line-height: 130%; 
  letter-spacing: 1.92px;
 */

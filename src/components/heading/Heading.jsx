import styled from "styled-components";

const Heading = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  font-size: ${(props) => (props.type === "primary" ? "50px" : "45px")};
  font-weight: ${(props) => (props.type === "primary" ? "700" : "600")};
  line-height: 130%;
  letter-spacing: ${(props) => (props.type === "primary" ? "3.6px" : "1.92px")};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.type === "primary" ? "90px" : "64px")};
  }
`;

export default Heading;

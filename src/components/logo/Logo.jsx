import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
function Logo({ className }) {
  return <StyledLogo className={className}>Gerícht</StyledLogo>;
}

export default Logo;

const StyledLogo = styled.span`
  font-family: var(--font-base);
  font-weight: 700;
  line-height: 130%; /* 57.2px */
  letter-spacing: 1.76px;
  text-transform: uppercase;
`;

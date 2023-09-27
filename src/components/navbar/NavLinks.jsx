import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
function NavLinks({ className }) {
  return (
    <StyledNavLinks className={className}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#awards">Awards</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </StyledNavLinks>
  );
}

const StyledNavLinks = styled.ul`
  list-style: none;
`;

export default NavLinks;

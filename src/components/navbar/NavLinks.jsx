import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
function NavLinks({ className }) {
  return (
    <StyledNavLinks className={className}>
      <li className="p__opensans text-base">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </StyledNavLinks>
  );
}

const StyledNavLinks = styled.ul`
  list-style: none;
`;

export default NavLinks;

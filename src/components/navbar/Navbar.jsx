import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import Logo from "../logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledNavbar className="flex-between">
      <Logo className="logo" />
      <GiHamburgerMenu
        className="hamburger-icon"
        onClick={() => setIsMenuOpen(true)}
      />
      {isMenuOpen && (
        <div className="mobile-links">
          <MdOutlineRestaurantMenu
            className="overlay-close"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLinks className="mobile-links-list" />
        </div>
      )}
      <NavLinks className="desktop-links" />
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  background-color: var(--color-black);
  padding: 1rem;

  .logo {
    font-size: 1.5rem;
    color: var(--color-white);
  }
  svg {
    cursor: pointer;
    font-size: 1.6rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
  .hamburger-icon {
    color: var(--color-white);
  }
  .overlay-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2rem;
    color: var(--color-golden);
  }

  .mobile-links {
    background-color: var(--color-black);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .mobile-links-list {
      color: var(--color-golden);
      font-family: var(--font-base);
    }
  }

  .desktop-links {
    display: none;
  }
`;

export default Navbar;

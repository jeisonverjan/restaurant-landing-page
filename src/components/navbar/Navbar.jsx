import { useState } from "react";
import { styled } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { NavLinks, Logo, Registration } from "../../components";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledNavbar className="flex-between">
      <Logo className="logo" />
      <NavLinks className="desktop-links" />
      <Registration />
      <GiHamburgerMenu
        className="hamburger-icon"
        onClick={() => setIsMenuOpen(true)}
      />
      {isMenuOpen && (
        <div className="mobile-links slide-bottom">
          <MdOutlineRestaurantMenu
            className="overlay-close"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLinks className="mobile-links-list" />
        </div>
      )}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  background: var(--color-black);
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

  .mobile-links {
    background-color: var(--color-black);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .overlay-close {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 2rem;
      color: var(--color-golden);
    }

    .mobile-links-list {
      color: var(--color-golden);
      font-family: var(--font-base);
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
      align-items: center;

      li:hover {
        color: white;
      }
    }
  }

  .desktop-links {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .logo {
      font-size: 2rem;
    }

    svg {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 1rem 2rem;
    .hamburger-icon {
      display: none;
    }

    .mobile-links {
      display: none;
    }

    .desktop-links {
      display: flex;
      gap: 2rem;

      a {
        color: var(--color-white);
        font-family: var(--font-alt);
        font-weight: 400;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        line-height: 28px;
        font-size: 16px;

        &:hover {
          color: var(--color-grey);
        }
      }
    }
  }
`;

import { styled } from "styled-components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Newsletter, Paragraph, Logo } from "../../components";

function Footer() {
  return (
    <StyledFooter className="section__padding flex-center" id="newsletter">
      <Newsletter />
      <div className="links flex-center">
        <div className="link flex-center">
          <h1>Contact Us</h1>
          <Paragraph>9 W 53rd St, New York, NY 10019, USA</Paragraph>
          <Paragraph>+1 212-344-1230</Paragraph>
          <Paragraph>+1 212-555-1230</Paragraph>
        </div>
        <div className="link link-logo flex-center">
          <Logo className="logo" />
          <Paragraph>
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </Paragraph>
          <img src={images.spoon} />
          <div className="icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="link flex-center working-hours">
          <h1>Working Hours</h1>
          <Paragraph>Monday-Friday:</Paragraph>
          <Paragraph>08:00 am - 12:00 am</Paragraph>
          <Paragraph>Saturday-Sunday:</Paragraph>
          <Paragraph>07:00 am - 11:00 pm</Paragraph>
        </div>
      </div>
      <div className="copyright">
        <Paragraph>2021 Gericht. All Rights reserved.</Paragraph>
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  background-color: #040404;
  flex-direction: column;
  gap: 4rem;

  .links {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    .link {
      flex: 1;
      flex-direction: column;

      h1 {
        font-family: var(--font-base);
        color: var(--color-white);
        font-weight: 400;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        font-size: 32px;
        line-height: 41.6px;
        margin-bottom: 1rem;
      }
    }

    .link-logo {
      gap: 1rem;
      .logo {
        color: var(--color-golden);
        font-size: 42px;
      }

      .icons {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: var(--color-white);
          margin: 0.5rem;
          font-size: 24px;
          cursor: pointer;

          &:hover {
            color: var(--color-golden);
          }
        }
      }
    }

    .working-hours {
      p:nth-child(2n + 1) {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .links {
      flex-direction: row;
      align-items: flex-start;

      .link {
        h1 {
          font-size: 42px;
          padding-top: 0.5rem;
        }
      }

      .link-logo {
        .logo {
          font-size: 52px;
        }
      }
    }
  }
`;

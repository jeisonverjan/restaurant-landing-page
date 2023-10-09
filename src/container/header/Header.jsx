import styled from "styled-components";
import { Button, SubHeading, Heading, Paragraph } from "../../components";
import { images } from "../../constants";

function Header() {
  return (
    <StyledHeader className="section__padding" id="home">
      <div className="content">
        <SubHeading title="Chase the new Flavour" />
        <Heading type="primary">The Key To Fine Dining</Heading>
        <Paragraph>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </Paragraph>
        <Button>Explore Menu</Button>
      </div>
      <div className="img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  //gap: 2rem;
  align-items: flex-start;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .img {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    gap: 0;

    .content {
      flex: 1;
    }

    .img {
      flex: 1;
      margin-left: 32px;
      margin-top: 0;
      img {
        width: 80%;
      }
    }
  }
`;

import { styled } from "styled-components";
import { SubHeading, Heading, Paragraph, Button } from "../../components";

function Newsletter() {
  return (
    <StyledNewsletter className="flex-center">
      <div className="title">
        <SubHeading title="Newsletter" />
        <Heading>Subscribe to Our Newsletter</Heading>
        <Paragraph>And never miss latest Updates!</Paragraph>
      </div>
      <div className="form flex-center">
        <input type="text" placeholder="Email Address" />
        <Button>Subscribe</Button>
      </div>
    </StyledNewsletter>
  );
}

export default Newsletter;

const StyledNewsletter = styled.div`
  background: var(--color-black);
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  .title {
    text-align: center;

    div {
      margin-bottom: 1rem;
    }
    h1 {
      //padding: 1.5rem 0rem;
      line-height: 70px;
      font-weight: bold;
    }
  }

  .form {
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
    input {
      border: 1px solid var(--color-golden);
      border-radius: 5px;
      font-size: 1rem;
      font-family: var(--font-base);
      color: var(--color-white);
      padding: 0.75rem 1rem;
      background: var(--color-black);
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    border: 1px solid var(--color-golden);
    padding: 2rem 4rem;

    .title {
      h1 {
        line-height: 83.2px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    width: 80%;
    .form {
      flex-direction: row;
      input {
        width: 620px;
      }
    }
  }
`;

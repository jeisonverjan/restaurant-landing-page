import styled from "styled-components";

function Registration() {
  return (
    <StyledRegistration>
      <a className="text-base" href="#newsletter">
        Log In / Registration
      </a>
      <div />
      <a className="text-base" href="#">
        Book Table
      </a>
    </StyledRegistration>
  );
}

export default Registration;

const StyledRegistration = styled.div`
  display: none;
  div {
    width: 1px;
    height: 30px;
    background: var(--color-grey);
  }

  a {
    color: var(--color-white);
    margin: 0 1rem;
    transition: 0.5s ease;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid var(--color-golden);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

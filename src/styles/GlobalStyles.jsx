import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --font-base: 'Cormorant Upright', serif;
  --font-alt: 'Open Sans', sans-serif;
  
  --color-golden: #DCCA87;
  --color-black: #0C0C0C;
  --color-gray: #545454;
  --color-crimson: #F5EFDB;
  --color-grey: #AAAAAA;
  --color-white: #FFFFFF;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}


a {
  color: unset;
  text-decoration: none;
}

.section__padding {
  padding: 4rem 6rem;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-base {
    /* Body 16px Regular */
    font-family: var(--font-alt);
    font-size: 16px;
    font-weight: 400;
    line-height: 175%; /* 28px */
    letter-spacing: 0.64px;
}

`;

export default GlobalStyles;

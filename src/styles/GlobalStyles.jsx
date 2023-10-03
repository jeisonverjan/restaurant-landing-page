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
  padding: 4rem 2rem;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
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

.spoon__img {
  width: 45px;
}

.section__padding {
  padding: 4rem 2rem;
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@media screen and (min-width: 768px){
  .section__padding {
    padding: 4rem;
  }
}

@media screen and (min-width: 1200px){
  .section__padding {
    padding: 4rem 6rem;
  }
}

`;

export default GlobalStyles;

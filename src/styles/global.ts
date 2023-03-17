import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
   
   :root {
    --background: #F0F2F5;
     --blue: #5429CC;
     --green: #33CC95;
     --red: #E52E4D;
     --shape: #FFFFFF;
     --titulos: #363F5F;
     --texto: #969CB2;
     --blue-light: #6933ff;

   }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    } 
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased
  } 

  body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  } 

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
 .react-Modal {
  background: rgba(0,0,0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
 }
 .react-content {
   width: 100%;
   max-width: 576px;
   background: var(--background);
   padding: 3rem;
   position: relative;
   border-radius: 0.25rem;
 } 
.react-close {
 position: absolute;
 right: 1.5rem;
 top: 1.5rem;
 border: 0;
 background: transparent;

 transition: filter 0.2;

 &:hover {
  filter: brightness(0.9);
 }
}
 
`
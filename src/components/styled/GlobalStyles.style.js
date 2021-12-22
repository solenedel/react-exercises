import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    background: black;
    color: #D9AFFF;
    font-size: 30px;
    font-family: monospace;
  }

    div.form {
      padding-top: 50px;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;

      & input {
        margin-bottom: 50px;
        color: black;
        background: #D9AFFF;
      }

      & button {
        background: #D5FFAF;
        color: black;
      }
    }

    .chosen-numbers {
      margin-top: 50px;
      text-align: center;

      & li {
        list-style-type: none;
        color: #AFFDFF;
      }
    }
`;
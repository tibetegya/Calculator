import styled from "styled-components";

export const Wrapper = styled.div`
  &#screen {
    // border: 1px solid rgb(255, 217, 0);
    height: 80px;
    text-align: right;
    font-weight: 100;
    color: white;
    padding: 0.5rem;
    display: flex;
    align-items: center;

    .control {
      // background:greenyellow;
      width: 20px;
    }
    form {
      flex-grow: 1;
    }
    input {
      background: transparent;
      // border: 1px solid rgb(0, 195, 255);
      border: none;
      outline: none;
      color: white;
      width: calc(100% - 20px);
      text-align: right;
      // direction: rtl;
      &[type="number"]::-webkit-inner-spin-button,
      &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;

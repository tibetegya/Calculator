import styled from "styled-components";

export const Wrapper = styled.button`
  border: 1px solid #4c4c4c;
  background-color: white;
  border-radius: 0.2rem;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  &.key {
    flex-basis: 74px;
    height: 60px;
  }
  &.fat {
    flex-basis: 148px;
    height: 60px;
    text-align: left;
    padding-left: 2rem;
  }
  &.ctrl {
    color: white;
    background: rgb(248, 139, 36);
    font-size: 1.5rem;
  }
`;

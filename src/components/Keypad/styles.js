import styled from "styled-components";

export const Wrapper = styled.div`
  // border: .5px solid red;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0 0 .4rem .4rem;
  align-items: flex-start;
  overflow: hidden;
  @media screen and (max-width: 480px){
    position: relative;
    bottom: 0;
  }
`;

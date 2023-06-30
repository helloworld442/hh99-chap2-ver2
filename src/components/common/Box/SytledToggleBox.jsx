import React from "react";
import { styled } from "styled-components";
const StyledToggleBlock = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .toggle-box {
    display: flex;
  }
`;

const StyledToggle = ({ children }) => (
  <StyledToggleBlock>{children}</StyledToggleBlock>
);

export default React.memo(StyledToggle);

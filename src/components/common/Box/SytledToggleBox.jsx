import React from "react";
import { styled } from "styled-components";
import TodoToggleContainer from "../../../containers/TodoToggleContainer";
const StyledToggleBlock = styled.div`
  width: 100%;
  height: 45px;
  margin: 110px 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledToggle = ({ toggleBtns, onClickHandler }) => (
  <StyledToggleBlock>
    <TodoToggleContainer
      toggleBtns={toggleBtns}
      onClickHandler={onClickHandler}
    />
  </StyledToggleBlock>
);

export default React.memo(StyledToggle);

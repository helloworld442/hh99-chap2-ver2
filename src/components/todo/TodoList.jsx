import { styled } from "styled-components";
import StyledToggle from "../common/Box/SytledToggleBox";
import TodoListItem from "./TodoListItem";

const TodoListBlock = styled.div`
  width: 64vw;
  min-width: 512px;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
`;

const TodoList = ({ todos, workState, toggles }) => {
  return (
    <TodoListBlock>
      <TodoListItem todos={todos} workState={workState} toggles={toggles} />
    </TodoListBlock>
  );
};

export default TodoList;

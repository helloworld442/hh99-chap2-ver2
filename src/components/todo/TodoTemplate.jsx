import { styled } from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoTemplateBlock = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
  margin-top: 38px;
  background: orange;
`;

const TodoTemplate = () => (
  <TodoTemplateBlock>
    <TodoInsert />
    <TodoList />
  </TodoTemplateBlock>
);

export default TodoTemplate;

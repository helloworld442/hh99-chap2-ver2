import { styled } from "styled-components";

const TodoUpdateBlock = styled.div``;

const TodoUpdate = ({ todo }) => {
  console.log(todo);
  return <TodoUpdateBlock>{todo.id}</TodoUpdateBlock>;
};

export default TodoUpdate;

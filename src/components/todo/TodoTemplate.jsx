import { styled } from "styled-components";
import TodoInsertContainer from "../../containers/TodoInsertContainer";
import TodoListContainer from "../../containers/TodoListContainer";
import TodoToggleContainer from "../../containers/TodoToggleContainer";
const TodoTemplateBlock = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
  background: #edf1f3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 90vh;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
  > .List-box {
    display: flex;
    align-items: space-between;
    padding: 0 20px 0 20px;
  }
`;

const TodoTemplate = () => (
  <TodoTemplateBlock>
    <TodoToggleContainer />
    <div className="List-box">
      <TodoInsertContainer />
      <TodoListContainer />
    </div>
  </TodoTemplateBlock>
);

export default TodoTemplate;

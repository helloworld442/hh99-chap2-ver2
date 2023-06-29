import { styled } from "styled-components";
import StyledInput from "../common/Input/StyledInput";
import StyledTextArea from "../common/Input/StyledTextArea";
import StyledButton from "../common/Button/StyledButton";
import BackButton from "../common/Button/BackButton";
import { Link } from "react-router-dom";

const TodoUpdateBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #edf1f3;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 45vw;
    margin-top: 20px;
    background-color: #31be86;
    box-sizing: border-box;
    padding: 20px 20px 50px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px #e8e8e8;
  }
`;
const UpdatePage = styled.div`
  margin-bottom: 120px;
`;
const TodoUpdate = ({
  todo,
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
}) => {
  return (
    <TodoUpdateBlock>
      <UpdatePage>
        <Link to="/">
          <BackButton
            backgroundcolor={`#31be86`}
            hovercolor={`#c9f4e9`}
          ></BackButton>
        </Link>
        <form onSubmit={onSubmit}>
          <StyledInput
            value={title}
            onChange={onTitleChange}
            height={`40px`}
            radius={`14px`}
          />
          <StyledTextArea value={content} onChange={onContentChange} />
          <StyledButton buttontext={todo.content} />
        </form>
      </UpdatePage>
    </TodoUpdateBlock>
  );
};

export default TodoUpdate;

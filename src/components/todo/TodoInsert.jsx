import { styled } from "styled-components";
import StyledInput from "../common/Input/StyledInput";
import StyledTextArea from "../common/Input/StyledTextArea";
import StyledButton from "../common/Button/StyledButton";
import { useState } from "react";
const TodoInsertBlock = styled.div`
  width: 304px;
  height: 100%;
  border-radius: 0 25px 0 0 / 0 25px 0 0;
  form {
    height: 63vh;
    padding: 25px;
    margin: 0 20px 0 0;
    border-radius: 15px;
    background: #edf1f3;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
    background-color: #31be86;
    color: #fff;
  }
`;

const TodoInsert = ({ onInsertHandler }) => {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const onTitleChangeHandler = (e) => setTitle(e.target.value);
  const onContentChangeHandler = (e) => setContent(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 유효성 검사
    if (title.trim() === "" || content.trim() === "")
      return alert("다시 입력하세요");
    if (title.length > 23) return alert("글자 수는 23자리 이하입니다");
    if (content.length > 1000) return alert("글자 수는 1000자리 이하입니다");

    // reducer에 데이터 보내기
    onInsertHandler({ title, content });
    //Input Data 초기화
    setTitle("");
    setContent("");
  };

  return (
    <TodoInsertBlock>
      <form onSubmit={onSubmitHandler}>
        <StyledInput value={title} onChange={onTitleChangeHandler} />
        <StyledTextArea value={content} onChange={onContentChangeHandler} />
        <StyledButton />
      </form>
    </TodoInsertBlock>
  );
};

export default TodoInsert;

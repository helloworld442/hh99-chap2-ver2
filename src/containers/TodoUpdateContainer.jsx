import { useLocation, useNavigate } from "react-router-dom";
import TodoUpdate from "../components/todo/TodoUpdate";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../redux/modules/todos";
import { useState } from "react";

const TodoUpdateContainer = () => {
  let { pathname } = useLocation();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  // pathname 가져오기 로직
  pathname = parseInt(pathname.replace("/update/", ""));
  // todos 데이터 가져오기 로직
  const todos = useSelector(({ todos }) => todos);
  // pathname에 해당하는 데이터 가져오기
  let todo = todos.find((todo) => todo.id === pathname);
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const onTitleChangeHandler = (e) => setTitle(e.target.value);
  const onContentChangeHandler = (e) => setContent(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "")
      return alert("다시 입력하세요");
    if (title.length > 23) return alert("글자 수는 23자리 이하입니다");
    if (content.length > 1000) return alert("글자 수는 1000자리 이하입니다");

    todo.title = title;
    todo.content = content;

    dispatch(updateItem(todo.id, todo));
    navigateTo("/");
  };

  return (
    <TodoUpdate
      todo={todo}
      title={title}
      content={content}
      onTitleChange={onTitleChangeHandler}
      onContentChange={onContentChangeHandler}
      onSubmit={onSubmitHandler}
    />
  );
};

export default TodoUpdateContainer;

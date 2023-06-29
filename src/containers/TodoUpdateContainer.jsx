import { useLocation } from "react-router-dom";
import TodoUpdate from "../components/todo/TodoUpdate";
import { useSelector } from "react-redux";

const TodoUpdateContainer = () => {
  let { pathname } = useLocation();
  // pathname 가져오기 로직
  pathname = parseInt(pathname.replace("/update/", ""));
  // todos 데이터 가져오기 로직
  const todos = useSelector(({ todos }) => todos);
  // pathname에 해당하는 데이터 가져오기
  let todo = todos.find((todo) => todo.id === pathname);
  return <TodoUpdate todo={todo} />;
};

export default TodoUpdateContainer;

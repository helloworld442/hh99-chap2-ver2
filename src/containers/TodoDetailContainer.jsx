import { useLocation } from "react-router-dom";
import TodoDetail from "../components/todo/TodoDetail";
import { useSelector } from "react-redux";

const TodoDetailContainer = () => {
  let { pathname } = useLocation();
  // pathname 가져오기 로직
  pathname = parseInt(pathname.replace("/detail/", ""));
  // todos 데이터 가져오기 로직
  const todos = useSelector(({ todos }) => todos);
  // pathname에 해당하는 데이터 가져오기
  let todo = todos.find((todo) => todo.id === pathname);
  return <TodoDetail todo={todo} />;
};

export default TodoDetailContainer;

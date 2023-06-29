import { useSelector } from "react-redux";
import TodoList from "../components/todo/TodoList";

const TodoListContainer = () => {
  const todos = useSelector(({ todos }) => todos);
  const workState = useSelector(({ workState }) => workState.isdone);
  const toggles = useSelector(({ toggle }) => toggle);
  return <TodoList todos={todos} workState={workState} toggles={toggles} />;
};

export default TodoListContainer;

import { useDispatch } from "react-redux";
import { createItem } from "../redux/modules/todos";
import TodoInsert from "../components/todo/TodoInsert";

const TodoInsertContainer = () => {
  const dispatch = useDispatch();
  const onInsertHandler = (input) => dispatch(createItem(input));
  return <TodoInsert onInsertHandler={onInsertHandler} />;
};

export default TodoInsertContainer;

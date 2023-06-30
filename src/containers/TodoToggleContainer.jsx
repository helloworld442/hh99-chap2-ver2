import { useDispatch, useSelector } from "react-redux";
import StyledDropDown from "../components/common/Block/StyledDropDownBlock";
import { isDone } from "../redux/modules/selectChange";
import StyledListUI from "../components/common/Block/StyledListUIBlock";
import { useCallback } from "react";
import SytledToggle from "../components/common/Box/SytledToggleBox";
import StyledLogo from "../components/common/Box/StyledLogo";
const TodoToggleContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos);
  const workTodoLength = todos.filter((todo) => !todo.isDone).length;
  const doneTodoLength = todos.filter((todo) => todo.isDone).length;
  const onChangeHandler = useCallback(
    (value) => {
      const checked = value;
      if (checked === "working") {
        dispatch(isDone(false));
      } else if (checked === "done") {
        dispatch(isDone(true));
      } else {
        dispatch(isDone(checked));
      }
    },
    [dispatch]
  );

  return (
    <SytledToggle>
      <StyledLogo />
      <div className="toggle-box">
        <StyledListUI />
        <StyledDropDown
          onChangeHandler={onChangeHandler}
          workNum={workTodoLength}
          doneNum={doneTodoLength}
        />
      </div>
    </SytledToggle>
  );
};

export default TodoToggleContainer;

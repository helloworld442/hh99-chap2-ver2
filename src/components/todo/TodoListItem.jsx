import React from "react";
import { styled } from "styled-components";
import IdBox from "../common/Box/IdBox";
import IconBox from "../common/Box/IconBox";
import { useDispatch } from "react-redux";
import { deleteItem, toggleItem } from "../../redux/modules/todos";
import { ReactComponent as Check } from "../../lib/assets/check.svg";
import { ReactComponent as Delete } from "../../lib/assets/trash.svg";
import StyledContent from "../common/Block/StyledContentBlock";

const TodoItemBlock = styled.ul`
  max-height: 62.3vh;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px 14px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoItem = styled.li`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #e8e8e8;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    background-color: #fefefe;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
  &.BorderAll {
    height: 108px;
    flex: 1 1 194px;
  }
  &.ListUl {
    flex: 1 1 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    box-sizing: border-box;
  }
`;

function TodoListItem({ todos, workState, toggles }) {
  const dispatch = useDispatch();

  const getKeyByValue = () => {
    for (let key in toggles) {
      //hasOwnProperty():객체가 특정 프로퍼티를 가지고 있는지 불리언 값을 반환
      if (toggles[key] && key) {
        return key;
      }
    }
  };

  const isdoneColor = (isdone) => {
    return isdone === true ? "#31af7f" : "#b5b5b5";
  };
  console.log(getKeyByValue());
  const todoList = () => {
    if (workState === "all") {
      return todos;
    } else {
      return todos.filter((item) => item.isDone === workState);
    }
  };

  return (
    <TodoItemBlock>
      {todoList().map((item, idx) => {
        return (
          <TodoItem key={item.id} className={getKeyByValue()}>
            <IdBox className={getKeyByValue()}>{idx + 1}</IdBox>
            <StyledContent item={item} getKeyByvalue={getKeyByValue()} />
            <IconBox
              className={getKeyByValue()}
              isdonecolor={isdoneColor(item.isDone)}
            >
              <Check
                id="check-icon"
                onClick={() => {
                  dispatch(toggleItem(item.id));
                }}
              />
              <Delete
                id="delete-icon"
                onClick={() => {
                  dispatch(deleteItem(item.id));
                }}
              />
            </IconBox>
          </TodoItem>
        );
      })}
    </TodoItemBlock>
  );
}

export default TodoListItem;

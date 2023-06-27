import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/modules/todos';

const TodoItemBlock = styled.ul`
    width: 100%;
    /* height: 80vh; */
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 14px;
`;
const TodoItem = styled.li`
    width: 194px;
    height: 108px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px #e8e8e8;
    background-color: white;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const IconBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const IdBox = styled.div`
    width: 16px;
    height: 16px;
    background-color: #e1f9f2;
    color: #31be86;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function TodoListItem() {
    const todo = useSelector((state) => {
        return state.todos;
    });
    const workState = useSelector((state) => {
        return state.workState;
    });

    const dispatch = useDispatch();
    return (
        <TodoItemBlock>
            {todo
                .filter((item) => {
                    return item.isDone === workState.isdone;
                })
                .map((item) => {
                    return (
                        <TodoItem>
                            <IconBox>
                                <IdBox>{item.id}</IdBox>
                                <div className="icon-box">
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        style={{ color: '#31af7f', marginRight: `8px` }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        style={{ fontSize: `18px` }}
                                        onClick={() => {
                                            dispatch(deleteItem(item.id));
                                        }}
                                    />
                                </div>
                            </IconBox>
                            <div className="content-box">
                                <div
                                    className="title"
                                    style={{ fontSize: `16px`, fontWeight: `700` }}
                                >
                                    {item.title}
                                </div>
                                <div style={{ color: `#555`, fontSize: `14px` }}>{item.body}</div>
                            </div>
                        </TodoItem>
                    );
                })}
        </TodoItemBlock>
    );
}

export default TodoListItem;

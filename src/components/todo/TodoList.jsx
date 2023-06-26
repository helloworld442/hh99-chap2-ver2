import { styled } from 'styled-components';
import StyledToggle from '../common/Box/SytledToggleBox';
import TodoListItem from './TodoListItem';

const TodoListBlock = styled.div`
    width: 880px;
    height: 100%;
    /* position: relative; */
    background: #edf1f3;
    display: inline-block;
`;

const TodoList = () => (
    <TodoListBlock>
        <StyledToggle />
        <TodoListItem />
    </TodoListBlock>
);

export default TodoList;

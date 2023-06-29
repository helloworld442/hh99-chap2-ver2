import { styled } from 'styled-components';
import StyledInput from '../common/Input/StyledInput';
import StyledTextArea from '../common/Input/StyledTextArea';
import StyledButton from '../common/Button/StyledButton';
import StyledLogo from '../common/Box/StyledLogo';
import { useState } from 'react';
const TodoInsertBlock = styled.div`
    width: 304px;
    height: 100%;
    /* background: #31be86; */
    border-radius: 0 25px 0 0 / 0 25px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    form {
        height: 500px;
        padding: 25px;
        border-radius: 15px;
        background: #edf1f3;
        margin: 0 20px 0 30px;
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
        background-color: #31be86;
        color: #fff;
        /* backdrop-filter: blur(5px);
        background: rgba(255, 255, 255, 0.2);
        border-left: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid rgba(255, 255, 255, 0.3); */
    }
`;

const TodoInsert = ({ onInsertHandler }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChangeHandler = (e) => setTitle(e.target.value);
    const onContentChangeHandler = (e) => setContent(e.target.value);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // 유효성 검사
        if (title === '' || content === '') return;
        // reducer에 데이터 보내기
        onInsertHandler({ title, content });
        //Input Data 초기화
        setTitle('');
        setContent('');
    };

    return (
        <TodoInsertBlock>
            <StyledLogo />
            <form onSubmit={onSubmitHandler}>
                <StyledInput value={title} onChange={onTitleChangeHandler} />
                <StyledTextArea value={content} onChange={onContentChangeHandler} />
                <StyledButton />
            </form>
        </TodoInsertBlock>
    );
};

export default TodoInsert;

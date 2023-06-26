import { styled } from 'styled-components';

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    color: #668591;
    font-weight: 650;
    input {
        width: 194px;
        height: 32px;
        padding: 12px;
        margin: 10px auto;
        box-sizing: border-box;
        border: none;
        border-radius: 25px;
        outline: none;
        background: #e1f9f2;
        font-size: 1rem;
    }
    label {
        font-size: 16px;
    }
`;

const StyledInput = ({ value, onChange }) => (
    <StyledInputBox>
        <label htmlFor="title">title</label>
        <input
            type="text"
            id="title"
            name="title"
            autoComplete="off"
            value={value}
            onChange={onChange}
        />
    </StyledInputBox>
);

export default StyledInput;

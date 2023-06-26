import { styled } from 'styled-components';

const StyledTextAreaBox = styled.div`
    display: flex;
    flex-direction: column;
    color: #668591;
    font-weight: 650;
    textarea {
        width: 194px;
        height: 250px;
        padding: 15px;
        margin: 10px auto;
        box-sizing: border-box;
        border: none;
        border-radius: 16px;
        outline: none;
        background: #e1f9f2;
        resize: none;
    }
    label {
        font-size: 16px;
    }
`;

const StyledTextArea = ({ value, onChange }) => (
    <StyledTextAreaBox>
        <label htmlFor="content">content</label>
        <textarea
            type="text"
            id="content"
            name="content"
            autoComplete="off"
            value={value}
            onChange={onChange}
        ></textarea>
    </StyledTextAreaBox>
);

export default StyledTextArea;

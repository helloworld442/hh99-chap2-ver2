import { styled } from "styled-components";

const StyledTextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    width: 100%;
    height: 250px;
    padding: 15px;
    margin: 10px 0 10px 0;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 16px;
    outline: none;
    background: #edf1f3;
    resize: none;
    color: #668591;
    font-weight: 650;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
    &:hover,
    &:focus {
      border: 1px solid #31be86;
    }
  }
  label {
    color: #fff;
    font-weight: 650;
    font-size: 16px;
  }
  #content-length {
    text-align: right;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .active {
    color: red;
  }
`;

const StyledTextArea = ({ value, onChange }) => {
  let active = false;
  if (value.length > 1000) active = true;
  return (
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
      <label
        htmlFor="content"
        id="content-length"
        className={active ? "active" : ""}
      >
        {value.length} / 1000
      </label>
    </StyledTextAreaBox>
  );
};

export default StyledTextArea;

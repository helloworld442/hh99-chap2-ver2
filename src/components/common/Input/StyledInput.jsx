import { styled } from "styled-components";

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: ${(props) => props.height || `32px`};
    padding: 12px;
    margin: 10px 0 10px 0;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: ${(props) => props.radius || `25px`};
    outline: none;
    background: #edf1f3;
    font-size: 1rem;
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
  #title-length {
    text-align: right;
    font-size: 13px;
    margin-bottom: 10px;
  }

  .active {
    color: red;
  }
`;

const StyledInput = ({ value, onChange, height, radius }) => (
  <StyledInputBox height={height} radius={radius}>
    <label htmlFor="title">title</label>
    <input
      type="text"
      id="title"
      name="title"
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
    <label htmlFor="title" id="title-length" className={active ? "active" : ""}>
      {value.length} / 23
    </label>
  </StyledInputBox>
);

export default StyledInput;

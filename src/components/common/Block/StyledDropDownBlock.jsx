import { styled } from 'styled-components';
const StyledDropDownBlock = styled.select`
    width: 194px;
    height: 32px;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 0 0 10px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #e8e8e8;
    outline: none;
    font-size: 14px;
    font-weight: 650;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-ms-expand {
        display: none;
    }
`;

const StyledDropDown = () => (
    <StyledDropDownBlock>
        <option>🔥 Working...! 🔥</option>
        <option>🌈 Done...! 🌈</option>
    </StyledDropDownBlock>
);

export default StyledDropDown;

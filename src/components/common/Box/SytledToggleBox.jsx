import { styled } from 'styled-components';
import StyledListUI from '../Block/StyledListUIBlock';
import StyledDropDown from '../Block/StyledDropDownBlock';
const StyledToggleBlock = styled.div`
    width: 100%;
    height: 234px;
    /* position: absolute;
  top: 0;
  right: 0; */
    padding: 0 30px;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    align-items: center;
`;

const StyledToggle = () => (
    <StyledToggleBlock>
        <StyledListUI />
        <StyledDropDown />
    </StyledToggleBlock>
);

export default StyledToggle;

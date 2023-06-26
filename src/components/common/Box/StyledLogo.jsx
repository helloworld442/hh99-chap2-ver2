import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const StyledLogoBox = styled.div`
    height: 234px;
    display: flex;
    justify-content: center;
    align-items: center;
    #icons {
        font-size: 100px;
        color: #fff;
    }
    h2 {
        padding: 0;
        margin: 0;
        display: inline-block;
        color: #fff;
        text-align: center;
        font-size: 1.8rem;
    }
`;

const StyledLogo = () => (
    <StyledLogoBox>
        <h2>
            <FontAwesomeIcon icon={faBars} id="icons" />
            <br />
            TODOLIST
        </h2>
    </StyledLogoBox>
);

export default StyledLogo;

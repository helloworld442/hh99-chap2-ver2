import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const StyledListUIBlock = styled.div`
    height: 32px;
    color: #b0ccbf;
    background: #c9f4e9;
    padding: 0;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #e8e8e8;
    #icon {
        border-radius: 5px;
        font-size: 26px;
        padding: 2px 3px;
        margin: 1px 12px;
        transition: all 0.3s ease-in-out;
    }
    #icon:hover,
    #icon:focus {
        background: #fff;
        color: #31be86;
    }
`;

const StyledListUI = () => (
    <StyledListUIBlock>
        <FontAwesomeIcon icon={faListUl} id="icon" />
        <FontAwesomeIcon icon={faListUl} id="icon" />
        <FontAwesomeIcon icon={faListUl} id="icon" />
    </StyledListUIBlock>
);

export default StyledListUI;

import { styled } from 'styled-components';

const StyledButtonBox = styled.div`
    width: 100%;
    text-align: right;
    button {
        width: 100%;
        height: 35px;
        padding: 0;
        border: none;
        border-radius: 10px;
        /* color: #fff; */
        color: #31be86;
        font-weight: 700;
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
        /* backdrop-filter: blur(5px);
        background: rgba(255, 255, 255, 0.2);
        border-left: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid rgba(255, 255, 255, 0.3); */
        &:hover {
        }
        &:focus {
        }
    }
`;

const StyledButton = () => {
    return (
        <StyledButtonBox>
            <button>add</button>
        </StyledButtonBox>
    );
};

export default StyledButton;

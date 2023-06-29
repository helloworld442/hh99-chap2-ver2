import { styled } from 'styled-components';

const DetailIconBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-24px, 60px);
    font-size: 46px;

    color: #878787;
    #icon-heart {
        height: 32px;
        fill: ${(props) => props.isdoneColor};
        margin-right: 18px;
        margin-bottom: 1px;
        transition: all 0.2s ease-in-out;
    }
    #icon-heart:hover {
        fill: #31be86;
    }
    #icon-Xmark {
        transition: all 0.2s ease-in-out;
    }
    #icon-Xmark:hover {
        color: #ff3322;
    }
`;

export default DetailIconBox;

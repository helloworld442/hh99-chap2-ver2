import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark, faReply } from '@fortawesome/free-solid-svg-icons';
const TodoDetailBlock = styled.div`
    width: 100vh;
    height: 100vh;
    background-color: #edf1f3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailPage = styled.div`
    width: 85vw;
    max-width: 750px;
    padding: 13px 12px 36px 12px;
    margin-bottom: 120px;
    background-color: white;
    border-radius: 32px;
    box-shadow: 0px 0px 10px #e8e8e8;
    position: relative;
`;
const TitleBox = styled.h3`
    font-size: 32px;
    font-weight: 700;
    padding: 0 23px;
    margin: 26px 0 15px;
`;
const ContentBox = styled.p`
    font-size: 20px;
    color: #878787;
    padding: 0 23px;
    margin: 0;
    line-height: 2.8rem;
`;
const BackBut = styled.button`
    width: 143px;
    height: 36px;
    border: none;
    background-color: #c9f4e9;
    color: #31be86;
    font-size: 16px;
    text-align: end;
    box-sizing: border-box;
    padding: 5px 20px;
    font-weight: bold;
    border-radius: 18px;
    position: relative;
    transition: all 0.2s ease-in-out;

    #icon-reply {
        font-size: 20px;
        position: absolute;
        top: 8px;
        left: 9px;
    }
    &:hover {
        background-color: #31be86;
        color: #fff;
    }
`;
const IconBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-24px, 60px);
    font-size: 46px;
    color: #878787;
    #icon-heart {
        font-size: 36px;
        margin-right: 18px;
        margin-bottom: 4px;
        transition: all 0.2s ease-in-out;
    }
    #icon-heart:hover {
        color: #31be86;
    }
    #icon-Xmark {
        transition: all 0.2s ease-in-out;
    }
    #icon-Xmark:hover {
        color: #ff3322;
    }
`;
const TodoDetail = () => (
    <TodoDetailBlock>
        <DetailPage>
            <BackBut>
                <FontAwesomeIcon icon={faReply} id="icon-reply" />
                이전
            </BackBut>
            <TitleBox>한글 로렘입숨</TitleBox>
            <ContentBox>
                대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 모든 국민은 종교의 자유를
                가진다. 모든 국민은 통신의 비밀을 침해받지 아니한다. 교육의 자주성·전문성·정치적
                중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 정부는 예산에 변경을
                가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수 있다. 국회의
                회의는 공개한다. 다만, 출석의원 과반수의 찬성이 있거나 의장이 국가의 안전보장을
                위하여 필요하다고 인정할 때에는 공개하지 아니할 수 있다.
            </ContentBox>
            <IconBox>
                <FontAwesomeIcon icon={faHeart} id="icon-heart" />
                <FontAwesomeIcon icon={faXmark} id="icon-Xmark" />
            </IconBox>
        </DetailPage>
    </TodoDetailBlock>
);

export default TodoDetail;

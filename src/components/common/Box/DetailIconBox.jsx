import { styled } from "styled-components";

const DetailIconBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-24px, 60px);
  font-size: 46px;
  fill: #a9a9a9;
  #icon-heart {
    height: 32px;
    fill: ${(props) => props.isdoneColor};
    margin-right: 18px;
  }
  #icon-heart:hover {
    fill: #31be86;
  }
  #icon-Xmark {
    height: 32px;
    margin-bottom: 2px;
  }
  #icon-Xmark:hover {
    fill: #ff3322;
  }
`;

export default DetailIconBox;

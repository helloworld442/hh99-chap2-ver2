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
    cursor: pointer;
  }
  #icon-heart:hover {
    fill: #59d8a1;
  }

  #icon-heart:active {
    fill: #31be86;
  }
  #icon-Xmark {
    height: 32px;
    margin-bottom: 2px;
    cursor: pointer;
  }
  #icon-Xmark:hover {
    fill: #ff7c6e;
  }
  #icon-Xmark:active {
    fill: red;
  }
`;

export default DetailIconBox;

import { styled } from "styled-components";

const IdBox = styled.div`
  background-color: #31be86;
  color: #e1f9f2;
  display: flex;
  justify-content: center;
  align-items: center;
  &.BorderAll {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 16px;
    height: 16px;
    font-size: 14px;
    border-radius: 8px;
  }
  &.ListUl {
    width: 30px;
    height: 30px;
    font-size: 24px;
    border-radius: 15px;
  }
`;

export default IdBox;

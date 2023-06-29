import { styled } from "styled-components";

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

export default BackBut;

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const BackBut = styled.button`
  width: 143px;
  height: 36px;
  border: none;
  background-color: ${(props) => props.backgroundcolor || `#c9f4e9`};
  color: ${(props) => props.hovercolor || `#31be86`};
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
    background-color: ${(props) => props.hovercolor || `#31be86`};
    color: ${(props) => props.backgroundcolor || `#fff`};
  }
`;
const BackButton = ({ backgroundcolor, hovercolor }) => {
  return (
    <BackBut backgroundcolor={backgroundcolor} hovercolor={hovercolor}>
      <FontAwesomeIcon icon={faReply} id="icon-reply" />
      이전
    </BackBut>
  );
};
export default BackButton;

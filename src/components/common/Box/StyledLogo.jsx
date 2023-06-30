import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const StyledLogoBox = styled.div`
  display: flex;
  align-items: center;
  #icons {
    font-size: 30px;
    color: #31be86;
  }
  h2 {
    padding-left: 16px;
    margin: 0;
    display: inline-block;
    color: #31be86;
    text-align: center;
    font-size: 1.8rem;
  }
`;

const StyledLogo = () => (
  <StyledLogoBox>
    <FontAwesomeIcon icon={faBars} id="icons" />
    <h2>TODOLIST</h2>
  </StyledLogoBox>
);

export default StyledLogo;

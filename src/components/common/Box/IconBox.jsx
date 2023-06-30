import { styled } from "styled-components";

const IconBox = styled.div`
  display: flex;
  justify-content: space-around;
  fill: #b5b5b5;
  &.BorderAll {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 45px;
  }
  &.ListUl {
    width: 100px;
    > #check-icon {
      height: 30px;
    }
    > #delete-icon {
      height: 30px;
    }
  }
  > #check-icon {
    fill: ${(props) => props.isdonecolor};
    height: 16px;
    cursor: pointer;
  }
  > #delete-icon {
    height: 16px;
    cursor: pointer;
  }
  > #check-icon:hover {
    fill: #59d8a1;
  }
  > #check-icon:active {
    fill: #31be86;
  }
  > #delete-icon:hover {
    fill: #ff7c6e;
  }
  > #delete-icon:active {
    fill: red;
  }
`;

export default IconBox;

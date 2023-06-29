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
    transition: all 0.5s ease-in-out;
    height: 16px;
  }
  > #delete-icon {
    transition: all 0.5s ease-in-out;
    height: 16px;
  }
  > #check-icon:hover {
    fill: #31af7f;
  }
  > #delete-icon:hover {
    fill: red;
  }
`;

export default IconBox;

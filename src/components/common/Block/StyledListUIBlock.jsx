import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../../redux/modules/toggle";
import { ReactComponent as Dashboard } from "../../../lib/assets/dashboard.svg";

const StyledListUIBlock = styled.div`
  background: #c9f4e9;
  padding: 7px 9px;
  margin: 10px;
  border-radius: 25px;
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  box-sizing: border-box;
  display: flex;
`;
const ListIcon = styled.div`
  box-sizing: border-box;
  width: 33px;
  height: 33px;
  padding: 6px 6px;
  border-radius: 25px;
  font-size: 1.6rem;
  fill: #b0ccbf;
  color: #b0ccbf;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    margin-right: 12px;
  }
  &:hover,
  &:focus {
    background: #fff;
    color: #31be86;
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
  }
  &.active {
    background: #fff;
    color: #31be86;
    fill: #31be86;
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
  }
  #svgicon {
    width: 100%;
    height: 100%;
  }
`;
const StyledListUI = () => {
  const toggleObj = { BorderAll: true, ListUl: false };
  const [toggleBtns, setToggleBtns] = useState(toggleObj);
  const toggleNames = ["BorderAll", "ListUl"];
  const dispatch = useDispatch();
  const onClickHandler = (IDX) => {
    toggleNames.map((name) =>
      toggleNames[IDX] === name
        ? (toggleObj[name] = true)
        : (toggleObj[name] = false)
    );
    setToggleBtns({ ...toggleObj });
    dispatch(toggleItem(toggleObj));
  };
  return (
    <StyledListUIBlock>
      <ListIcon
        className={classNames({ active: toggleBtns["BorderAll"] })}
        onClick={() => onClickHandler(0)}
      >
        <Dashboard id="svgicon" />
      </ListIcon>
      <ListIcon
        className={classNames({ active: toggleBtns["ListUl"] })}
        onClick={() => onClickHandler(1)}
      >
        <FontAwesomeIcon icon={faListUl} />
      </ListIcon>
    </StyledListUIBlock>
  );
};

export default StyledListUI;

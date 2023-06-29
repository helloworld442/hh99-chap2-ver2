import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../../redux/modules/toggle";

const StyledListUIBlock = styled.div`
  color: #b0ccbf;
  background: #c9f4e9;
  padding: 0;
  margin: 10px;
  border-radius: 25px;
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  #icon {
    border-radius: 25px;
    font-size: 1.6rem;
    padding: 5px 6px;
    margin: 6px 8px;
    transition: all 0.5s ease-in-out;
  }
  #icon:hover,
  #icon:focus {
    background: #fff;
    color: #31be86;
  }
  .active {
    background: #fff;
    color: #31be86;
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
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
      <FontAwesomeIcon
        icon={faBorderAll}
        id="icon"
        className={classNames({ active: toggleBtns["BorderAll"] })}
        onClick={() => onClickHandler(0)}
      />
      <FontAwesomeIcon
        icon={faListUl}
        id="icon"
        className={classNames({ active: toggleBtns["ListUl"] })}
        onClick={() => onClickHandler(1)}
      />
    </StyledListUIBlock>
  );
};

export default StyledListUI;

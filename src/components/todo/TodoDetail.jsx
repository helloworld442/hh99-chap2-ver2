import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleBox from "../common/Box/TitleBox";
import ContentBox from "../common/Box/ContentBox";
import DetailIconBox from "../common/Box/DetailIconBox";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { deleteItem, toggleItem } from "../../redux/modules/todos";
import { ReactComponent as Check } from "../../lib/assets/check.svg";
import { ReactComponent as Trash } from "../../lib/assets/trash.svg";
import BackButton from "../common/Button/BackButton";

const TodoDetailBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #edf1f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailPage = styled.div`
  width: 85vw;
  max-width: 750px;
  padding: 13px 12px 36px 12px;
  margin-bottom: 120px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0px 0px 10px #e8e8e8;
  position: relative;
  word-break: break-all;
  .id-num {
    font-size: 18px;
    font-weight: 500;
    /* padding: 0 23px; */
    margin-left: 10px;
    line-height: 0;
    color: #31be86;
  }
  #pen {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 31px;
    transform: translate(24px, 49px);
    color: #b8b8b8;
    cursor: pointer;
    &:hover {
      color: #59d8a1;
    }
    &:active {
      color: #31be86;
    }
  }
`;

const TodoDetail = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  try {
    let isdoneIconColor = `#878787`;
    todo.isDone ? (isdoneIconColor = "#31af7f") : (isdoneIconColor = "#a9a9a9");
    return (
      <TodoDetailBlock key={todo.id}>
        <DetailPage>
          <Link to="/">
            <BackButton />
          </Link>
          <TitleBox>
            {todo.title}
            <span className="id-num">NO.{todo.id}</span>
          </TitleBox>
          <ContentBox>{todo.content}</ContentBox>
          <Link to={"/update/" + todo.id}>
            <FontAwesomeIcon icon={faPenToSquare} id="pen" />
          </Link>
          <DetailIconBox isdoneColor={isdoneIconColor}>
            <Check
              id="icon-heart"
              onClick={() => {
                dispatch(toggleItem(todo.id));
              }}
            />
            <Trash
              id="icon-Xmark"
              onClick={() => {
                dispatch(deleteItem(todo.id));
              }}
            />
          </DetailIconBox>
        </DetailPage>
      </TodoDetailBlock>
    );
  } catch (e) {
    navigate("/");
  }
};

export default TodoDetail;

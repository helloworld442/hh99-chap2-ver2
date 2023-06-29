import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledContentBlock = styled.div`
  &.BorderAll {
    position: absolute;
    bottom: 7px;
    left: 7px;
    padding: 7px;
    .link > .title {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.8rem;
      color: #333;
    }
    .link > .content {
      font-size: 14px;
      color: #555;
    }
  }
  &.ListUl {
    text-align: center;
    font-size: 1rem;
    .link > .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 1.8rem;
    }
    .link > .content {
      color: #555;
    }
  }
  > .link > .title:hover {
    color: #31af7f;
  }
`;

const StyledContent = ({ item, getKeyByvalue }) => (
  <StyledContentBlock className={getKeyByvalue}>
    <Link to={"/detail/" + item.id} className="link">
      <div className="title" id="title">
        {item.title}
      </div>
      <div className="content">{item.content}</div>
    </Link>
  </StyledContentBlock>
);
export default StyledContent;

import { useEffect } from "react";
import TodoTemplate from "../components/todo/TodoTemplate";

const MainPage = () => {
  useEffect(() => {
    localStorage.setItem("BorderAll", true);
  }, []);
  return <TodoTemplate />;
};

export default MainPage;

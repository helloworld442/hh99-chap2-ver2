import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import GlobalStyle from "./utils/GlobalStyle";
import UpdatePage from "./pages/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;

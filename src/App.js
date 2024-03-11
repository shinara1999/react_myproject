import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import NewsList from "./components/news/NewsList";
import NatureList from "./components/nature/NatureList";
import HotelList from "./components/hotel/HotelList";
import CultureList from "./components/culture/CultureList";
import NatureDetail from "./components/nature/NatureDetail";
import HotelDetail from "./components/hotel/HotelDetail";
import CultureDetail from "./components/culture/CultureDetail";
import HotelFind from "./components/hotel/HotelFind";

function App(){
  return (
      <Router>
        <Header />
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/nature/list"} element={<NatureList />} />
            <Route path={"/hotel/list"} element={<HotelList />} />
            <Route path={"/culture/list"} element={<CultureList />} />
            <Route path={"/nature/detail/:nno"} element={<NatureDetail />} />
            <Route path={"/hotel/detail/:hno"} element={<HotelDetail />} />
            <Route path={"/culture/detail/:cno"} element={<CultureDetail />} />
            <Route path={"/hotel/find"} element={<HotelFind />} />
            <Route path={"/board/list"} element={<BoardList />} />
            <Route path={"/board/insert"} element={<BoardInsert />} />
            <Route path={"/board/detail/:no"} element={<BoardDetail />} />
            <Route path={"/board/update/:no"} element={<BoardUpdate />} />
            <Route path={"/board/delete/:no"} element={<BoardDelete />} />
            <Route path={"/news/list"} element={<NewsList />} />
          </Routes>
          <Footer />
      </Router>
  )
}
export default App;
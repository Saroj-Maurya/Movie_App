import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/home";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            {/* <Route path="*" element={<h1>Error page </h1>}></Route> */}
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

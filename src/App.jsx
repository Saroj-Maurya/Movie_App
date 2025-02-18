import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Header = lazy(() => import("./components/Header/Header"));
const MovieList = lazy(() => import("./components/MovieList/MovieList"));
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/home";

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<div className="loader"></div>}>
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="movie/:id" element={<MovieDetails />}></Route>
              <Route path="movies/:type" element={<MovieList />}></Route>
              {/* <Route path="*" element={<h1>Error page </h1>}></Route> */}
              <Route path="/search" element={<Search />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </>
  );
}

export default App;

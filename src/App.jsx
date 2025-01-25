import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AccordionContainer from "./components/Accordion/AccordionContainer";
import Header from "./components/Header";
import ImageSliderContainer from "./components/image-slider/ImageSliderContainer";
import LiveStreaming from "./components/Live Streaming/Live Streaming";
import CommentsContainer from "./components/nested-comments/commentsContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Admin from "./Links/Admin";
import BookingContainer from "./Links/BookingContainer";
import { Home } from "./Links/Home";
import Login from "./Links/Login";
import { lazy, Suspense } from "react";

const PaginationContainer = lazy(() =>
  import("./components/Pagination/PaginationContainer")
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/react-components" element={<Home />} />
        <Route path="/booking" element={<BookingContainer />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/accordion" element={<AccordionContainer />} />
        <Route path="/comments" element={<CommentsContainer />} />
        <Route path="/image-slider" element={<ImageSliderContainer />} />
        <Route path="/stream" element={<LiveStreaming />} />
        <Route path="/search" element={<SearchBar />} />
        <Route
          path="/pagination"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }
            >
              <PaginationContainer />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

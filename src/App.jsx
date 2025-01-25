import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LiveStreaming from "./components/Live Streaming/Live Streaming";
import CommentsContainer from "./components/nested-comments/commentsContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Admin from "./Links/Admin";
import { Home } from "./Links/Home";
import Login from "./Links/Login";
import { lazy, Suspense } from "react";

const PaginationContainer = lazy(() =>
  import("./components/Pagination/PaginationContainer")
);

const ImageSliderContainer = lazy(() =>
  import("./components/image-slider/ImageSliderContainer")
);

const BookingContainer = lazy(() => import("./Links/BookingContainer"));

const AccordionContainer = lazy(() =>
  import("./components/Accordion/AccordionContainer")
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/react-components" element={<Home />} />
        <Route
          path="/booking"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }
            >
              <BookingContainer />
            </Suspense>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route
          path="/accordion"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }
            >
              <AccordionContainer />
            </Suspense>
          }
        />
        <Route path="/comments" element={<CommentsContainer />} />
        <Route
          path="/image-slider"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }
            >
              <ImageSliderContainer />
            </Suspense>
          }
        />
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

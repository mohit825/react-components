import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LiveStreaming from "./components/Live Streaming/Live Streaming";
import CommentsContainer from "./components/nested-comments/commentsContainer";
import ReactPatterns from "./components/React Patterns";
import CompoundPattern from "./components/React Patterns/Compound Pattern/index";
import HOCExample from "./components/React Patterns/HOCExample/HOCExample";
import SearchBar from "./components/SearchBar/SearchBar";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { useLocalStorage } from "./hooks/useLocalStorageHooks";
import Admin from "./Links/Admin";
import { Home } from "./Links/Home";
import Login from "./Links/Login";
import ThemeContext from "./store/ThemeContext";

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
  const [themePreferenceSelected] = useLocalStorage("theme", "dark");

  const [theme, setTheme] = useState(themePreferenceSelected);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
          <Route path="/react-patterns" element={<ReactPatterns />}>
            <Route path="hoc-example" element={<HOCExample />} />
            <Route path="compound" element={<CompoundPattern />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

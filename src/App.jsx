import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LiveStreaming from "./components/Live Streaming/Live Streaming";
import CommentsContainer from "./components/nested-comments/commentsContainer";
import ReactPatterns from "./components/React Patterns";
import HOCExample from "./components/React Patterns/HOCExample/HOCExample";
import SearchBar from "./components/SearchBar/SearchBar";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { useLocalStorage } from "./hooks/useLocalStorageHooks";
import Admin from "./Links/Admin";
import { Home } from "./Links/Home";
import Login from "./Links/Login";
import ThemeContext from "./store/ThemeContext";
import OTPComponent from "./components/OTP/OTPContainer";
import { ReactProblems } from "./pages/react-problems";
import TableGenerator from "./features/Problems/Table-Generator/tableGenerator";
import CompoundPattern from "./components/React Patterns/Compound Pattern";
import { Tab } from "./components/React Patterns/Compound Pattern/Tabs/Tabs";
import { ProgressBarContainer } from "./features/Problems/ProgressBar/ProgressBarContainer";
import { SignIn } from "./pages/sign-in";
import { LatestReact } from "./features/Problems/React 19.2/LatestReact";
import { AutoSuggestContainer } from "./features/Problems/AutoSuggestContainer/AutoSuggestContainer";
import { DynamicFormContianer } from "./features/Problems/DynamicForms/DynamicFormContainer";
import { InfiniteScroll } from "./features/Problems/InfiniteScroll/InfiniteScroll";
import { DynamicGridContainer } from "./features/Problems/DynamicGrid/DynamicGrid";
import TypeRacer from "./features/Problems/TypeRacer/TypeRacer";

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
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
      </ThemeContext.Provider>

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
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
          <Route path="compound" element={<CompoundPattern />}>
            <Route path="tab" element={<Tab />} />
          </Route>
        </Route>
        <Route path="otp-component" element={<OTPComponent />} />
        <Route path="/problems" element={<ReactProblems />}>
          <Route path="table" element={<TableGenerator />} />
          <Route path="pBar" element={<ProgressBarContainer />} />
          <Route path="latestVersion" element={<LatestReact />} />
          <Route path="autoSuggest" element={<AutoSuggestContainer />} />
          <Route path="dynamicForm" element={<DynamicFormContianer />} />
          <Route path="infiniteScroll" element={<InfiniteScroll />} />
          <Route path="dynamicGrid" element={<DynamicGridContainer />} />
          <Route path="typeRacer" element={<TypeRacer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

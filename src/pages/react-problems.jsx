import { Link, Outlet } from "react-router-dom";

const problemRoutes = [
  {
    path: "table",
    text: "Table",
  },
  {
    path: "pBar",
    text: "Progress Bar",
  },
  {
    path: "latestVersion",
    text: "React 19.2",
  },
  {
    path: "autoSuggest",
    text: "Auto Suggest",
  },
  {
    path: "dynamicForm",
    text: "Dynamic Form",
  },
  {
    path: "infiniteScroll",
    text: "Infinite Scroll",
  },
  {
    path: "dynamicGrid",
    text: "Dynamic Grid",
  },
  {
    path: "typeRacer",
    text: "Type Racer",
  },
];

export const ReactProblems = () => {
  return (
    <>
      <nav className="p-2 underline flex gap-2">
        {problemRoutes.map((route, idx) => {
          return (
            <Link to={route.path} key={idx}>
              {route.text}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </>
  );
};

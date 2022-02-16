import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

const renderMultiRoutes = ({ element: Element, paths, ...rest }) =>
  paths.map((path) => (
    <Route key={path} path={path} {...rest} element={Element} />
  ));

export const MainRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route>
          {renderMultiRoutes({
            paths: ["/search", "/images", "/news", "/videos"],
            element: <Results />,
          })}
        </Route>
      </Routes>
    </div>
  );
};

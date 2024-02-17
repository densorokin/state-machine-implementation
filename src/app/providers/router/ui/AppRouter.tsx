import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfigPrivate } from "../../router/routeConfig";
export const AppRouter = () => {
  const routes = routeConfigPrivate;
  return (
    <div className="" style={{ paddingLeft: "20px", paddingTop: "70px" }}>
      <Suspense
        fallback={
          <Spin
            size="large"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "45vh 0",
            }}
          />
        }
      >
        <Routes>
          {Object.values(routes).map(({ element, path }) => (
            <Route path={path} key={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

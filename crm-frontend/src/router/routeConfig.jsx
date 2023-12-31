import MainPage from "../pages/MainPage/MainPage";
import CreateClientPage from "../pages/CreateClientPage/CreateClient";
import { AppRoutes, Routes } from "../enums/routes/appRoutes";
import React from "react";

export const RoutePath = {
  [AppRoutes.MAIN]: Routes.MAIN,
  [AppRoutes.CREATE_CLIENT]: Routes.CREATE_CLIENT,
};

export const routeConfigPrivate = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CREATE_CLIENT]: {
    path: RoutePath.createClient,
    element: <CreateClientPage />,
  },
};

// export const routeConfigPublic = {
//   [AppRoutes.MAIN]: {
//     path: RoutePath.main,
//     element: <AuthPage />,
//   },
// };

import { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route, Navigate } from "react-router-dom";

const { DashboardRoutes } = lazily(() => import("../dashboard"));

import { Login } from "../auth";
import { GlobalLoading } from "../components";
import { useProviderTheme } from "../hooks";

const user = {
  auth: "authorized",

  user: {
    name: "samir",
    role: "admin",
  },
};

const userTwo = {
  auth: "authorized",
  user: {
    name: "juan",
    role: "client",
  },
};

const noUser = {
  auth: "not-authorized",
  user: {},
};

export const AppRouter = () => {
  const { theme, handleThemeSwitch } = useProviderTheme();

  return (
    <Suspense fallback={<GlobalLoading />}>
      <Routes>
        {noUser.auth === "not-authorized" ? (
          <Route
            path="/"
            element={<Login setTheme={handleThemeSwitch} theme={theme} />}
          />
        ) : (
          <Route
            path="/"
            element={
              <Suspense fallback={<GlobalLoading/>}>
                <DashboardRoutes user={noUser} />
              </Suspense>
            }
          />
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

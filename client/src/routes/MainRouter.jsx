import { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route, Navigate } from "react-router-dom";


import { Login } from "../auth";
import { GlobalLoading } from "../components";
import { useAuthStore, useProviderTheme } from "../hooks";

const { DashboardRoutes } = lazily(() => import("../dashboard"));


export const AppRouter = () => {
  const { status, user, onLogoutHandle } = useAuthStore();
  const { handleThemeSwitch, theme} = useProviderTheme()

  return (
    <Suspense fallback={<GlobalLoading />}>
      <Routes>
        {status === "not-authenticated" ? (
          <Route
            path="/*"
            element={<Login theme={theme} handleTheme={handleThemeSwitch} />}
          />
        ) : (
          <Route
            path="/*"
            element={
              <Suspense fallback={<GlobalLoading />}>
                <DashboardRoutes user={user} onLogout={onLogoutHandle} theme={theme} handleTheme={handleThemeSwitch} />
              </Suspense>
            }
          />
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

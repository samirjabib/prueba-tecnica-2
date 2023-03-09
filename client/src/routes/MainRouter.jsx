import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../auth";
import { Dashboard } from "../dashboard";
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
    <Routes>
      {(user.auth === "not-authorized") ? (
        <Route
          path="/"
          element={<Login setTheme={handleThemeSwitch} theme={theme} />}
        />
      ) : (
        <Route path="/" element={<Dashboard />} />
      )}
    </Routes>
  );
};

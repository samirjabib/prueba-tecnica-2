import { lazily } from "react-lazily";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGetCompaniesQuery } from "../../store/api/businessApi";
import { DashboardLayout } from "../components";

const { BusinessDetail, StateBusiness, ListCompanies } = lazily(() =>
  import("../pages")
);

export const DashboardRoutes = ({ user, onLogout }) => {
  const { data, isLoading, error } = useGetCompaniesQuery();

  return (
    <Routes>
      <Route
        path="/"
        element={<DashboardLayout user={user} onLogout={onLogout} />}
      >
        {user.role === "client" ? (
          <>
            <Route
              path="/"
              element={
                <ListCompanies data={data} isLoading={true} error={error} />
              }
            />
            <Route path=":id" element={<BusinessDetail />} />
          </>
        ) : (
          <>
            <Route
              path="/state-business"
              element={<StateBusiness data={data} />}
            />
            <Route
              path="/"
              element={
                <ListCompanies data={data} isLoading={true} error={error} />
              }
            />
            <Route path="/details/:id" element={<BusinessDetail />} />
          </>
        )}

        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

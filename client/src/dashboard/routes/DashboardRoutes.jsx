import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../components";
import { ListBusiness, BusinessDetail, StateBusiness } from "../pages";


export const DashboardRoutes = ({user}) => {

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout user={user}/>}>
        <Route path="/" element={<ListBusiness/>}/>
        <Route path="/:id" element={<BusinessDetail/>}/>
        <Route path="/state-business" element={<StateBusiness/>}/>

        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

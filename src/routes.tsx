import { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";

function ProtectedRoute({ redirectTo }: { redirectTo: string }) {
  const { user } = useContext(AppContext);
  return user ? <Outlet /> : <Navigate to={redirectTo} />;
}

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute redirectTo={"/"} />}>
        <Route path="/conta/:id" element={<Conta />} />
      </Route>
      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  );
};

export default MainRoutes;

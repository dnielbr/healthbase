import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PublicLayout from "./layout/PublicLayout";
import NoPage from "./pages/NoPage";
import Imc from "./pages/Imc";
import Sobre from "./pages/Sobre";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout></PublicLayout>}>
          <Route index element={<Home />} />
          <Route path="imc" element={<Imc />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

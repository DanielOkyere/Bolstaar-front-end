import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Styles/index.css";
import { RecoilRoot } from "recoil";
// importation des screens
import HomeScreen from "./HomeScreen";
import AboutUsScreen from "./AboutUsScreen";
import MainSignup from "./Auth/Signup/MainSignup";
import FarmerSignup from "./Auth/Signup/FarmerSignup";
import ProviderSignup from "./Auth/Signup/ProviderSignup";
import LoginScreen from "./Auth/LoginScreen";
import AllProducts from "./Products/AllProducts";
import Layout from "../Layout/Layout";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/products" element={<AllProducts />} />
          </Route>
          <Route path="/signup/main" element={<MainSignup />} />
          <Route path="/signup/farmer" element={<FarmerSignup />} />
          <Route path="/signup/provider" element={<ProviderSignup />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;

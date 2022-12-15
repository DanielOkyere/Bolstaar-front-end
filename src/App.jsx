import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { RecoilRoot } from "recoil";
// importation des screens
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import MainSignup from "./Screens/Auth/Signup/MainSignup";
import FarmerSignup from "./Screens/Auth/Signup/FarmerSignup";
import ProviderSignup from "./Screens/Auth/Signup/ProviderSignup";
import NotFound from "./Screens/404";
import LoginScreen from "./Screens/Auth/LoginScreen";
// import Dashboard from "./Screens/Dashboard";
import Layout from "./Layout/Layout";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutUsScreen />} />
          </Route>
          <Route path="/signup/main" element={<MainSignup />} />
          <Route path="/signup/farmer" element={<FarmerSignup />} />
          <Route path="/signup/provider" element={<ProviderSignup />} />
          <Route path="/login" element={<LoginScreen />} />
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;

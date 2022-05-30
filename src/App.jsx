import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import './index.css'
// importation des screens
import homeScreen from './Screens/HomeScreen'
import AboutUsScreen from "./Screens/AboutUsScreen"
import MainSignup from './Screens/Auth/Signup/MainSignup'
import FarmerSignup from './Screens/Auth/Signup/FarmerSignup'
import ProviderSignup from './Screens/Auth/Signup/ProviderSignup'
import LoginScreen from './Screens/Auth/LoginScreen'
function App() {
  

  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={  <homeScreen />   } />
        <Route path='/about' element={ <AboutUsScreen /> } />
        <Route path='/signup/main' element={<MainSignup /> } />
        <Route path='/signup/farmer' element={ <FarmerSignup/>} />
        <Route path='/signup/provider' element={<ProviderSignup/>} />
        <Route path='/login' element={<LoginScreen/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App

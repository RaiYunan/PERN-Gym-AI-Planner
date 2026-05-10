import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import OnBoarding from "./pages/OnBoarding"
import Profile from "./pages/Profile"
import Auth from "./pages/Auth"
import Account from "./pages/Account"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/onboarding" element={<OnBoarding/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/auth/:pathname" element={<Auth/>}/>
      <Route path="/account/:pathname" element={<Account/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./components/SideBar/Sidebar";
import Recipe from "./pages/Recipe/Recipe";

function App() {
  return (
    <Sidebar>
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
       <Route path="/recipe" element={<Recipe />} />
       <Route path="/home" element={<Home />} />
       <Route path="/seach" element={<Search />} />
       <Route path="/profile" element={<Profile />} />
       
    </Routes>
    </Sidebar>

     

  );
}

export default App;

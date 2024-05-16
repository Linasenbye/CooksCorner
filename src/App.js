import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;

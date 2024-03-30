import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function AppRouter() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            
        </Routes>
        </Router>
    );
}

export default AppRouter;

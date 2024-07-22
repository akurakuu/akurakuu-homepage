import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Activity from "./pages/activity";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="activity" element={<Activity />} />
            </Route>
        </Routes>
    );
}

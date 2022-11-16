import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/history" element={<History />} />
                </Route>
            </Routes>
        </div>
    );
}

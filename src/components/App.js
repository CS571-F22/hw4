import { Routes, Route } from "react-router-dom";

import '../index.css';

import Home from './Home';
import Layout from "./Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* TODO: Complete the routing table! */}
            </Route>
        </Routes>
    );
}

export default App;

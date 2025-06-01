import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import "./App.css";
import { Info } from "./pages/Info";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

//trash2

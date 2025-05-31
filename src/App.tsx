import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import "./App.css";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inbox />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

//trash2

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import "./App.css";
import { Info } from "./pages/Info";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/qwertasd" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;

//trash2

import { Star } from "lucide-react";
import "./App.css";
import Message from "./pages/message";
import Nav from "./pages/Nav";
function App() {
    return (
        <div className="">
            <Nav />

            <div className="flex flex-row items-center justify-between mx-4 my-5 mb-7 ">
                <h1 className="text-2xl font-medium text-foreground">
                    Message
                </h1>
                <Star />
            </div>
            <Message />
            <hr className="text-secondary/20" />
            <Message />
        </div>
    );
}

export default App;

//trash2

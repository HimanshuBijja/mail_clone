import { MoreHorizontal, Star } from "lucide-react";

import { useState } from "react";
import Message from "../components/message";
import Nav from "../components/Nav";
import Foot from "../components/foot";
import MoreHorizontalInfo from "../components/moreHorizontalInfo";
import Header from "../components/header";

export function Inbox() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <Nav />

            <Header />
            <Message />
            <hr className="text-secondary/20" />
            <Message />

            <div className="mx-4 ">
                <MoreHorizontal
                    size={22}
                    strokeWidth={2}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${
                        isOpen ? `text-foreground` : `text-secondary/80`
                    }`}
                />
            </div>

            {isOpen && <MoreHorizontalInfo />}
            <Foot />
        </div>
    );
}




//trash2

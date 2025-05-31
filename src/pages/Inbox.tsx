import { MoreHorizontal, Star } from "lucide-react";

import { useState } from "react";
import Message from "./message";
import Nav from "./Nav";
import { MoreInfo } from "./moreInfo";
import Foot from "./foot";
import More from "./more";
export function Inbox() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <Nav />

            <div className="relative flex flex-row items-center justify-between mx-4 my-5 z-0 ">
                <h1 className=" font-medium text-foreground" style={{fontSize: 23}}>
                    Message
                </h1>
                <Star size={22} strokeWidth={2} />
            </div>
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

            {isOpen && <MoreInfo />}
            <Foot />                   
        </div>
    );
}



//trash2

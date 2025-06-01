import { MoreHorizontal, Star } from "lucide-react";

import { useState } from "react";
import Message from "../components/message";
import Nav from "../components/Nav";
import Foot from "../components/foot";
import MoreHorizontalInfo from "../components/moreHorizontalInfo";
import Header from "../components/header";
import { useRecoilValue } from "recoil";
import { userAtom, gatepassAtom } from "../store/atoms/atoms";

export function Inbox() {

    const user = useRecoilValue(userAtom);
    const gatepass = useRecoilValue(gatepassAtom);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative min-h-[99vh] w-screen">
            <Nav />

            <Header />
            <Message data={user} /> 
            <hr className="text-secondary/20" />
            <Message data={gatepass} />

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

            {isOpen && <MoreHorizontalInfo data={user} />}
            <Foot />
        </div>
    );
}




//trash2

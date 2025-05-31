import { ChevronDown, ChevronUp, CornerUpLeft, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Dropdown from "./dropdown";


export default function Head({from, to, date, time}: {from: string, to: string, date: string, time: string}) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mb-5 mt-3">
            <div className="grid grid-cols-8 items-center">
                <div className="col-span-1 justify-self-start">
                    <div className=" w-12 h-12 rounded-full bg-amber-950">

                    </div>
                </div>
                <div className="col-span-6 px-6">
                    <div className=" flex flex-row items-center gap-3">
                        <div className="text-foreground font-medium">
                            {from}
                        </div>
                        <div>
                            {date}
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        {to}
                        {isOpen ? <ChevronUp className="w-4 h-4" onClick={() => setIsOpen(!isOpen)} /> : <ChevronDown className="w-4 h-4" onClick={() => setIsOpen(!isOpen)} />}
                    </div>
                </div>
                <div className="col-span-1 justify-self-end">
                    <div className="flex flex-row items-center gap-5">
                        <CornerUpLeft size={22} strokeWidth={2} />
                        <MoreHorizontal size={22} strokeWidth={2}    />
                    </div>
                </div>

            </div>
            {isOpen && <Dropdown from={from} to={to} date={date} time={time} />}
        </div>
    );
}

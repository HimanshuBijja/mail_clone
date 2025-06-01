import { useState } from "react";
import { ChevronUp, ChevronDown, CornerUpLeft, MoreHorizontal } from "lucide-react";
import More from "./more";


export default function Message() {
    return (
        <section className=" w-screen px-4  pb-1">
            



            <Head from="me" to="CSE" date="2025-05-31" time="10:00:00" />
            <Text />
        </section>
    );
}


function Head({from, to, date, time}: {from: string, to: string, date: string, time: string}) {
    const [more, setMore] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mb-4 mt-3">
            <div className="grid grid-cols-8 items-center">
                <div className="col-span-1 justify-self-start">
                    <div className=" w-11 h-11 rounded-full bg-amber-950">

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
                        <MoreHorizontal size={22} strokeWidth={2} onClick={() => setMore(!more)} />
                    </div>
                </div>

            </div>
            {isOpen && <Dropdown from={from} to={to} date={date} time={time} />}
            {more && <More />}
        </div>
    );
}

function Dropdown({
    from,
    to,
    date,
    time,
}: {
    from: string;
    to: string;
    date: string;
    time: string;
}) {
    return (
        <div className="border border-secondary/70 rounded-lg py-2 px-3 mt-4">
            <div className="flex flex-col  leading-relaxed gap-3">
                <div className="grid grid-cols-8">
                    <div className="col-span-1 ">From</div>
                    <div className="col-span-7 mx-2 leading-tight">
                        <div className="text-foreground font-bold">
                            {from}
                        </div>
                        <div>mail</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">to</div>
                    <div className="col-span-7 mx-2 leading-tight">
                        <div className="text-foreground font-bold">{to}</div>
                        <div>mail</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">date</div>
                    <div className="col-span-7 mx-2">
                        <div className="text-foreground font-bold">
                            {date} {time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Text() {
    return (
        <div className="mt-4 mb-2 text-foreground/80 text-lg no-underline " style={{fontSize: 15, fontWeight: 550}}>
            Name : Himanshu     <br />
            Rolln    : 201900000 <br />
            Reason : passport application
        </div>  
    );
}

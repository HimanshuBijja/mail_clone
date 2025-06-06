import { useState } from "react";
import {
    ChevronUp,
    ChevronDown,
    CornerUpLeft,
    MoreHorizontal,
} from "lucide-react";
import More from "./more";

// Define an array of background color classes
const bgColors = [
    "bg-1",
    "bg-2",
    "bg-3",
    "bg-4",
    "bg-5",
    "bg-6",
    "bg-7",
    "bg-8",
    "bg-9",
    "bg-10",
];

export default function Message({ data }: { data: any }) {
    return (
        <section className=" w-screen px-4  pb-1">
            <Head data={data} />
            <Text data={data} />
        </section>
    );
}

function Head({ data }: { data: any }) {
    const [more, setMore] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Get a random background color from the array
    const randomBgColor =
        data.name.charAt(0) == "H" || data.name.charAt(0) == "h"
            ? "bg-1"
            : data.name.charAt(0) == "C" || data.name.charAt(0) == "c"
            ? "bg-7"
            : bgColors[Math.floor(Math.random() * 10)];

    return (
        <div className="mb-4 mt-3">
            <div className="grid grid-cols-8 items-center">
                <div className="col-span-1 justify-self-start">
                    <div
                        className={`w-11 h-11 rounded-full ${randomBgColor} flex items-center justify-center text-white text-2xl font-medium`}
                    >
                        {data.name.charAt(0)}
                    </div>
                </div>
                <div className="col-span-6 px-6">
                    <div className=" flex flex-row items-center gap-3">
                        <div className="text-foreground font-bold text-sm">
                            {data.slug.from}
                        </div>
                        <div>{data.date}</div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div>
                            <span>to {data.slug.to}</span>
                            <span>{data.slug.to2}</span>
                        </div>
                        {isOpen ? (
                            <ChevronUp
                                className="w-4 h-4"
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        ) : (
                            <ChevronDown
                                className="w-4 h-4"
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        )}
                    </div>
                </div>
                <div className="col-span-1 justify-self-end">
                    <div className="flex flex-row items-center gap-5">
                        <CornerUpLeft size={22} strokeWidth={2} />
                        <MoreHorizontal
                            size={22}
                            strokeWidth={2}
                            onClick={() => setMore(!more)}
                        />
                    </div>
                </div>
            </div>
            {isOpen && <Dropdown data={data} />}
            {more && <More />}
        </div>
    );
}

function Dropdown({ data }: { data: any }) {
    return (
        <div className="border border-secondary/70 rounded-lg py-2 px-3 mt-4">
            <div className="flex flex-col  leading-relaxed gap-3">
                <div className="grid grid-cols-8">
                    <div className="col-span-1 ">From</div>
                    <div className="col-span-7 mx-2 leading-tight">
                        <div className="text-foreground font-bold">
                            {data.slug.from}
                        </div>
                        <div>{data.from_email}</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">To</div>
                    <div className="col-span-7 mx-2 leading-tight">
                        <div className="text-foreground font-bold">
                            {data.to}
                        </div>
                        <div>{data.to_email}</div> <br />
                        <div>{data.cc_to_email}</div>
                    </div>
                </div>
                <div className="grid grid-cols-8">
                    <div className="col-span-1">date</div>
                    <div className="col-span-7 mx-2">
                        <div className="text-foreground font-bold">
                            {data.date} {data.year} at {data.time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Text({ data }: { data: any }) {
    return (
        <div
            className="mt-4 mb-2 text-foreground/80 text-lg no-underline max-w-screen"
            style={{ fontSize: 15, fontWeight: 550 }}
        >
            <div className="max-w-screen">{data.message}</div>
            <div className="max-w-screen">{data.message2}</div>
            <div className="max-w-screen">{data.message3}</div>
            <div className="max-w-screen">{data.message4}</div>
        </div>
    );
}
